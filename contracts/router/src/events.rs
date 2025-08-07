use soroban_sdk::{Env, Address, Symbol, symbol_short};

// Event topics - using symbol_short! macro for compile-time symbols
const INITIALIZED: Symbol = symbol_short!("init");
const DEPOSIT_COMPLETED: Symbol = symbol_short!("deposit");
const WITHDRAWAL_COMPLETED: Symbol = symbol_short!("withdraw");
const REBALANCED: Symbol = symbol_short!("rebalance");
const ALLOCATION_UPDATED: Symbol = symbol_short!("alloc");

pub fn initialized(env: &Env, admin: Address) {
    env.events().publish((INITIALIZED,), admin);
}

pub fn deposit_completed(
    env: &Env,
    user: &Address,
    asset: &Address,
    amount: i128,
    uyt_minted: i128,
) {
    env.events().publish(
        (DEPOSIT_COMPLETED, user, asset),
        (amount, uyt_minted),
    );
}

pub fn withdrawal_completed(
    env: &Env,
    user: &Address,
    asset: &Address,
    uyt_burned: i128,
    amount_returned: i128,
) {
    env.events().publish(
        (WITHDRAWAL_COMPLETED, user, asset),
        (uyt_burned, amount_returned),
    );
}

pub fn rebalanced(
    env: &Env,
    user: &Address,
    old_soroswap_allocation: i128,
    new_soroswap_allocation: i128,
    old_defindex_allocation: i128,
    new_defindex_allocation: i128,
) {
    env.events().publish(
        (REBALANCED, user),
        (
            old_soroswap_allocation,
            new_soroswap_allocation,
            old_defindex_allocation,
            new_defindex_allocation,
        ),
    );
}

pub fn allocation_updated(
    env: &Env,
    user: &Address,
    soroswap_amount: i128,
    defindex_amount: i128,
) {
    env.events().publish(
        (ALLOCATION_UPDATED, user),
        (soroswap_amount, defindex_amount),
    );
} 