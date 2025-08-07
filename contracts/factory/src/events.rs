use soroban_sdk::{Env, Address, Symbol, symbol_short};
use crate::DeploymentInfo;

// Event topics - using symbol_short! macro for compile-time symbols
const INITIALIZED: Symbol = symbol_short!("init");
const INSTANCE_DEPLOYED: Symbol = symbol_short!("deployed");
const PAUSE_CHANGED: Symbol = symbol_short!("pause");

pub fn initialized(env: &Env, admin: Address) {
    env.events().publish((INITIALIZED,), admin);
}

pub fn instance_deployed(env: &Env, deployment: &DeploymentInfo) {
    env.events().publish(
        (INSTANCE_DEPLOYED, &deployment.deployer),
        (&deployment.router_address, &deployment.uyt_address),
    );
}

pub fn pause_status_changed(env: &Env, paused: bool) {
    env.events().publish((PAUSE_CHANGED,), paused);
} 