use soroban_sdk::{Env, Symbol, Address, String, symbol_short};

// Storage keys - using symbol_short! macro for compile-time symbols
const ADMIN: Symbol = symbol_short!("admin");
const ROUTER: Symbol = symbol_short!("router");
const BALANCE: Symbol = symbol_short!("balance");
const TOTAL_SUPPLY: Symbol = symbol_short!("total");
const NAME: Symbol = symbol_short!("name");
const SYMBOL: Symbol = symbol_short!("symbol");
const INITIALIZED: Symbol = symbol_short!("init");

pub fn has_initialized(env: &Env) -> bool {
    env.storage().persistent().has(&INITIALIZED)
}

pub fn set_initialized(env: &Env) {
    env.storage().persistent().set(&INITIALIZED, &true);
}

pub fn set_admin(env: &Env, admin: &Address) {
    env.storage().persistent().set(&ADMIN, admin);
}

pub fn get_admin(env: &Env) -> Result<Address, crate::errors::Error> {
    env.storage()
        .persistent()
        .get(&ADMIN)
        .ok_or(crate::errors::Error::NotInitialized)
}

pub fn set_router(env: &Env, router: &Address) {
    env.storage().persistent().set(&ROUTER, router);
}

pub fn get_router(env: &Env) -> Result<Address, crate::errors::Error> {
    env.storage()
        .persistent()
        .get(&ROUTER)
        .ok_or(crate::errors::Error::NotInitialized)
}

pub fn get_balance(env: &Env, account: &Address) -> i128 {
    let key = (BALANCE, account);
    env.storage().persistent().get(&key).unwrap_or(0)
}

pub fn set_balance(env: &Env, account: &Address, balance: i128) {
    let key = (BALANCE, account);
    env.storage().persistent().set(&key, &balance);
}

pub fn get_total_supply(env: &Env) -> i128 {
    env.storage().persistent().get(&TOTAL_SUPPLY).unwrap_or(0)
}

pub fn set_total_supply(env: &Env, supply: i128) {
    env.storage().persistent().set(&TOTAL_SUPPLY, &supply);
}

pub fn set_name(env: &Env, name: &String) {
    env.storage().persistent().set(&NAME, name);
}

pub fn get_name(env: &Env) -> Option<String> {
    env.storage().persistent().get(&NAME)
}

pub fn set_symbol(env: &Env, symbol: &String) {
    env.storage().persistent().set(&SYMBOL, symbol);
}

pub fn get_symbol(env: &Env) -> Option<String> {
    env.storage().persistent().get(&SYMBOL)
} 