#![no_std]

mod storage;
mod events;
mod errors;

use soroban_sdk::{contract, contractimpl, Address, Env, Vec, contracttype};

#[contracttype]
#[derive(Clone)]
pub struct DeploymentInfo {
    pub router_address: Address,
    pub uyt_address: Address,
    pub deployer: Address,
    pub deployed_at: u64,
}

#[contract]
pub struct YieldwayFactory;

#[contractimpl]
impl YieldwayFactory {
    /// Initialize the factory contract
    pub fn initialize(env: Env, admin: Address) -> Result<(), errors::Error> {
        if storage::has_admin(&env) {
            return Err(errors::Error::AlreadyInitialized);
        }

        storage::set_admin(&env, &admin);
        events::initialized(&env, admin);
        Ok(())
    }

    /// Deploy a new Yieldway instance (router + UYT)
    pub fn deploy_instance(
        env: Env,
        deployer: Address,
        soroswap_router: Address,
        defindex_factory: Address,
        salt: u32,
    ) -> Result<DeploymentInfo, errors::Error> {
        deployer.require_auth();

        // TODO: Implement actual contract deployment
        // For now, return placeholder values using test accounts
        let router_address = Address::from_str(&env, "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        let uyt_address = Address::from_str(&env, "GBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
        
        let deployment = DeploymentInfo {
            router_address,
            uyt_address,
            deployer: deployer.clone(),
            deployed_at: env.ledger().timestamp(),
        };

        storage::add_deployment(&env, &deployment);
        events::instance_deployed(&env, &deployment);

        Ok(deployment)
    }

    /// Get all deployments
    pub fn get_deployments(env: Env) -> Vec<DeploymentInfo> {
        storage::get_all_deployments(&env)
    }

    /// Get deployment count
    pub fn get_deployment_count(env: Env) -> u32 {
        storage::get_deployment_count(&env)
    }

    /// Admin function to pause/unpause factory
    pub fn set_paused(env: Env, caller: Address, paused: bool) -> Result<(), errors::Error> {
        caller.require_auth();
        
        let admin = storage::get_admin(&env)?;
        if caller != admin {
            return Err(errors::Error::Unauthorized);
        }

        storage::set_paused(&env, paused);
        events::pause_status_changed(&env, paused);
        Ok(())
    }
}

mod test; 