use soroban_sdk::{Env, Symbol, Address, Vec, symbol_short};
use crate::DeploymentInfo;

// Storage keys - using symbol_short! macro for compile-time symbols
const ADMIN: Symbol = symbol_short!("admin");
const DEPLOYMENTS: Symbol = symbol_short!("deploys");
const DEPLOY_COUNT: Symbol = symbol_short!("d_count");
const PAUSED: Symbol = symbol_short!("paused");

pub fn has_admin(env: &Env) -> bool {
    env.storage().persistent().has(&ADMIN)
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

pub fn add_deployment(env: &Env, deployment: &DeploymentInfo) {
    let mut deployments = get_all_deployments(env);
    deployments.push_back(deployment.clone());
    env.storage().persistent().set(&DEPLOYMENTS, &deployments);
    
    let count = get_deployment_count(env);
    env.storage().persistent().set(&DEPLOY_COUNT, &(count + 1));
}

pub fn get_all_deployments(env: &Env) -> Vec<DeploymentInfo> {
    env.storage()
        .persistent()
        .get(&DEPLOYMENTS)
        .unwrap_or(Vec::new(env))
}

pub fn get_deployment_count(env: &Env) -> u32 {
    env.storage().persistent().get(&DEPLOY_COUNT).unwrap_or(0)
}

pub fn set_paused(env: &Env, paused: bool) {
    env.storage().persistent().set(&PAUSED, &paused);
}

pub fn is_paused(env: &Env) -> bool {
    env.storage().persistent().get(&PAUSED).unwrap_or(false)
} 