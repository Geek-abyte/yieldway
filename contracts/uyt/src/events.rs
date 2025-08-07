use soroban_sdk::{Env, Address, Symbol, symbol_short};

// Event topics - using symbol_short! macro for compile-time symbols
const INITIALIZED: Symbol = symbol_short!("init");
const MINTED: Symbol = symbol_short!("mint");
const BURNED: Symbol = symbol_short!("burn");
const TRANSFER: Symbol = symbol_short!("transfer");

pub fn initialized(env: &Env, admin: Address) {
    env.events().publish((INITIALIZED,), admin);
}

pub fn minted(env: &Env, to: &Address, amount: i128) {
    env.events().publish((MINTED, to), amount);
}

pub fn burned(env: &Env, from: &Address, amount: i128) {
    env.events().publish((BURNED, from), amount);
}

pub fn transfer(env: &Env, from: &Address, to: &Address, amount: i128) {
    env.events().publish((TRANSFER, from, to), amount);
} 