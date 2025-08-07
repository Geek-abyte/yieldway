#![no_std]

mod storage;
mod events;
mod errors;

use soroban_sdk::{contract, contractimpl, Address, Env, String, contracttype};

#[contracttype]
pub struct AllocationBreakdown {
    pub total_balance: i128,
    pub soroswap_balance: i128,
    pub defindex_balance: i128,
    pub soroswap_percentage: u32,
    pub defindex_percentage: u32,
}

#[contract]
pub struct UniversalYieldToken;

#[contractimpl]
impl UniversalYieldToken {
    /// Initialize the UYT contract
    pub fn initialize(
        env: Env,
        admin: Address,
        router_contract: Address,
        name: String,
        symbol: String,
    ) -> Result<(), errors::Error> {
        if storage::has_initialized(&env) {
            return Err(errors::Error::AlreadyInitialized);
        }

        storage::set_admin(&env, &admin);
        storage::set_router(&env, &router_contract);
        storage::set_name(&env, &name);
        storage::set_symbol(&env, &symbol);
        storage::set_initialized(&env);

        events::initialized(&env, admin);
        Ok(())
    }

    /// Mint UYT tokens (only callable by router)
    pub fn mint(env: Env, to: Address, amount: i128) -> Result<(), errors::Error> {
        let router = storage::get_router(&env)?;
        router.require_auth();

        if amount <= 0 {
            return Err(errors::Error::InvalidAmount);
        }

        let current_balance = storage::get_balance(&env, &to);
        let new_balance = current_balance + amount;
        storage::set_balance(&env, &to, new_balance);

        let total_supply = storage::get_total_supply(&env);
        storage::set_total_supply(&env, total_supply + amount);

        events::minted(&env, &to, amount);
        Ok(())
    }

    /// Burn UYT tokens (only callable by router)
    pub fn burn(env: Env, from: Address, amount: i128) -> Result<(), errors::Error> {
        let router = storage::get_router(&env)?;
        router.require_auth();

        if amount <= 0 {
            return Err(errors::Error::InvalidAmount);
        }

        let current_balance = storage::get_balance(&env, &from);
        if current_balance < amount {
            return Err(errors::Error::InsufficientBalance);
        }

        let new_balance = current_balance - amount;
        storage::set_balance(&env, &from, new_balance);

        let total_supply = storage::get_total_supply(&env);
        storage::set_total_supply(&env, total_supply - amount);

        events::burned(&env, &from, amount);
        Ok(())
    }

    /// Get balance of a user
    pub fn balance_of(env: Env, account: Address) -> i128 {
        storage::get_balance(&env, &account)
    }

    /// Get total supply of UYT tokens
    pub fn total_supply(env: Env) -> i128 {
        storage::get_total_supply(&env)
    }

    /// Get user's allocation breakdown across protocols
    pub fn get_user_allocation(env: Env, account: Address) -> AllocationBreakdown {
        // TODO: Integrate with router to get real allocation data
        AllocationBreakdown {
            total_balance: storage::get_balance(&env, &account),
            soroswap_balance: 0,
            defindex_balance: 0,
            soroswap_percentage: 50,
            defindex_percentage: 50,
        }
    }

    /// Get token metadata
    pub fn name(env: Env) -> String {
        storage::get_name(&env).unwrap_or(String::from_str(&env, "Yieldway UYT"))
    }

    pub fn symbol(env: Env) -> String {
        storage::get_symbol(&env).unwrap_or(String::from_str(&env, "UYT"))
    }

    pub fn decimals(env: Env) -> u32 {
        7 // Standard Stellar asset decimals
    }
}

mod test; 