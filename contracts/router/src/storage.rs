use soroban_sdk::{Env, Symbol, symbol_short};
use crate::{RouterConfig, UserPosition};

// Storage keys - using symbol_short! macro for compile-time symbols
const CONFIG: Symbol = symbol_short!("config");
const USER_POSITION: Symbol = symbol_short!("user_pos");

pub fn has_config(env: &Env) -> bool {
    env.storage().persistent().has(&CONFIG)
}

pub fn get_config(env: &Env) -> Result<RouterConfig, crate::errors::Error> {
    env.storage()
        .persistent()
        .get(&CONFIG)
        .ok_or(crate::errors::Error::NotInitialized)
}

pub fn set_config(env: &Env, config: &RouterConfig) {
    env.storage().persistent().set(&CONFIG, config);
}

pub fn get_user_position(env: &Env, user: &soroban_sdk::Address) -> Option<UserPosition> {
    let key = (USER_POSITION, user);
    env.storage().persistent().get(&key)
}

pub fn set_user_position(env: &Env, user: &soroban_sdk::Address, position: &UserPosition) {
    let key = (USER_POSITION, user);
    env.storage().persistent().set(&key, position);
} 