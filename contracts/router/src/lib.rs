#![no_std]

mod storage;
mod events;
mod errors;
mod integrations;

use soroban_sdk::{contract, contractimpl, Address, Env, Vec, contracttype, token, symbol_short};
use integrations::{AllocationCalculator, SoroswapIntegration, DefindexIntegration};

// Data structures as defined in the roadmap
#[contracttype]
pub struct RouterConfig {
    pub admin: Address,
    pub soroswap_router: Address,
    pub defindex_factory: Address,
    pub fee_rate: u32,
    pub min_rebalance_threshold: i128,
    pub emergency_pause: bool,
}

#[contracttype]
pub struct AllocationStrategy {
    pub soroswap_percentage: u32,
    pub defindex_percentage: u32,
    pub target_assets: Vec<Address>,
    pub rebalance_threshold: u32,
}

#[contracttype]
pub struct UserPosition {
    pub total_uyt: i128,
    pub soroswap_allocation: i128,
    pub defindex_allocation: i128,
    pub last_rebalance: u64,
}

#[contract]
pub struct YieldwayRouter;

#[contractimpl]
impl YieldwayRouter {
    /// Initialize the router contract with configuration
    pub fn initialize(
        env: Env,
        admin: Address,
        soroswap_router: Address,
        defindex_factory: Address,
        fee_rate: u32,
    ) -> Result<(), errors::Error> {
        if storage::has_config(&env) {
            return Err(errors::Error::AlreadyInitialized);
        }

        let config = RouterConfig {
            admin: admin.clone(),
            soroswap_router,
            defindex_factory,
            fee_rate,
            min_rebalance_threshold: 1_000_000, // 1 USDC minimum for rebalancing
            emergency_pause: false,
        };

        storage::set_config(&env, &config);
        events::initialized(&env, admin);
        Ok(())
    }

    /// Deposit assets and receive UYT tokens
    pub fn deposit(
        env: Env,
        from: Address,
        asset: Address,
        amount: i128,
        min_uyt_out: i128,
    ) -> Result<i128, errors::Error> {
        from.require_auth();

        if amount <= 0 {
            return Err(errors::Error::InvalidAmount);
        }

        let config = storage::get_config(&env)?;
        if config.emergency_pause {
            return Err(errors::Error::EmergencyPause);
        }

        // Step 1: Transfer assets from user to router
        let asset_contract = token::Client::new(&env, &asset);
        asset_contract.transfer(&from, &env.current_contract_address(), &amount);

        // Step 2: Calculate optimal allocation between Soroswap and DeFindex
        let (soroswap_percentage, defindex_percentage) = AllocationCalculator::calculate_optimal_split(&env)?;
        
        let soroswap_amount = (amount * soroswap_percentage as i128) / 100;
        let defindex_amount = (amount * defindex_percentage as i128) / 100;

        // Step 3: Allocate funds to protocols
        let soroswap_shares = if soroswap_amount > 0 {
            SoroswapIntegration::add_liquidity(&env, &asset, soroswap_amount, &from)?
        } else {
            0
        };

        let defindex_shares = if defindex_amount > 0 {
            DefindexIntegration::deposit_to_vault(&env, &asset, defindex_amount, &from)?
        } else {
            0
        };

        // Step 4: Calculate UYT tokens to mint (1:1 ratio for now)
        let uyt_to_mint = soroswap_shares + defindex_shares;
        
        if uyt_to_mint < min_uyt_out {
            return Err(errors::Error::SlippageExceeded);
        }

        // Step 5: Update user position tracking
        let mut user_position = storage::get_user_position(&env, &from).unwrap_or(UserPosition {
            total_uyt: 0,
            soroswap_allocation: 0,
            defindex_allocation: 0,
            last_rebalance: env.ledger().timestamp(),
        });

        user_position.total_uyt += uyt_to_mint;
        user_position.soroswap_allocation += soroswap_shares;
        user_position.defindex_allocation += defindex_shares;
        user_position.last_rebalance = env.ledger().timestamp();

        storage::set_user_position(&env, &from, &user_position);

        // Step 6: Mint UYT tokens to user (this will be integrated with UYT contract)
        // For now, we track the position internally and will mint via UYT contract integration

        // Step 7: Emit events
        events::deposit_completed(&env, &from, &asset, amount, uyt_to_mint);
        events::allocation_updated(&env, &from, soroswap_amount, defindex_amount);

        Ok(uyt_to_mint)
    }

    /// Withdraw assets by burning UYT tokens
    pub fn withdraw(
        env: Env,
        from: Address,
        uyt_amount: i128,
        min_asset_out: i128,
    ) -> Result<i128, errors::Error> {
        from.require_auth();

        if uyt_amount <= 0 {
            return Err(errors::Error::InvalidAmount);
        }

        let config = storage::get_config(&env)?;
        if config.emergency_pause {
            return Err(errors::Error::EmergencyPause);
        }

        // Step 1: Get user position
        let mut user_position = storage::get_user_position(&env, &from)
            .ok_or(errors::Error::InsufficientBalance)?;

        if user_position.total_uyt < uyt_amount {
            return Err(errors::Error::InsufficientBalance);
        }

        // Step 2: Calculate proportional withdrawal from each protocol
        let withdrawal_percentage = (uyt_amount * 100) / user_position.total_uyt;
        
        let soroswap_withdrawal = (user_position.soroswap_allocation * withdrawal_percentage) / 100;
        let defindex_withdrawal = (user_position.defindex_allocation * withdrawal_percentage) / 100;

        // Step 3: Withdraw from protocols (placeholder - will be implemented with real protocol calls)
        let mut total_assets_received = 0i128;

        if soroswap_withdrawal > 0 {
            // TODO: Implement actual Soroswap liquidity withdrawal
            total_assets_received += soroswap_withdrawal;
        }

        if defindex_withdrawal > 0 {
            // TODO: Implement actual DeFindex vault withdrawal  
            total_assets_received += defindex_withdrawal;
        }

        if total_assets_received < min_asset_out {
            return Err(errors::Error::SlippageExceeded);
        }

        // Step 4: Update user position
        user_position.total_uyt -= uyt_amount;
        user_position.soroswap_allocation -= soroswap_withdrawal;
        user_position.defindex_allocation -= defindex_withdrawal;

        if user_position.total_uyt == 0 {
            // Remove position if fully withdrawn - use the same pattern as storage module
            let key = (symbol_short!("user_pos"), &from);
            env.storage().persistent().remove(&key);
        } else {
            storage::set_user_position(&env, &from, &user_position);
        }

        // Step 5: Transfer assets back to user (placeholder - will use actual asset addresses)
        // TODO: Implement actual asset transfer back to user

        // Step 6: Emit events
        events::withdrawal_completed(&env, &from, &config.soroswap_router, uyt_amount, total_assets_received);

        Ok(total_assets_received)
    }

    /// Rebalance user's allocation based on current APY
    pub fn rebalance(env: Env, user: Address) -> Result<(), errors::Error> {
        // TODO: Implement rebalancing logic
        Ok(())
    }

    /// Get user's total balance across all protocols
    pub fn get_total_balance(env: Env, user: Address) -> i128 {
        // TODO: Calculate real-time balance
        0
    }

    /// Get current combined APY from both protocols
    pub fn get_combined_apy(env: Env) -> u32 {
        // Calculate weighted average APY based on optimal allocation
        match AllocationCalculator::calculate_expected_returns(&env, 100, 50, 50) {
            Ok(apy) => apy,
            Err(_) => 2000 // 20% fallback APY
        }
    }
}

mod test; 