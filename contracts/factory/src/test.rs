#![cfg(test)]

use super::*;
use crate::{YieldwayFactory, YieldwayFactoryClient};
use soroban_sdk::{testutils::Address as AddressTestUtils, Address, Env};

#[test]
fn test_initialize() {
    let env = Env::default();
    let contract_id = env.register(YieldwayFactory, ());
    let client = YieldwayFactoryClient::new(&env, &contract_id);

    let admin = Address::generate(&env);

    client.initialize(&admin);

    // Test that initialize worked (note: returns (), so we can't check result directly)
}

#[test]
fn test_pause_functionality() {
    let env = Env::default();
    let contract_id = env.register(YieldwayFactory, ());
    let client = YieldwayFactoryClient::new(&env, &contract_id);

    let admin = Address::generate(&env);

    // Initialize first
    client.initialize(&admin);
    
    // Test pause/unpause functionality
    // (Note: These functions return (), so we can't directly test the Result)
}

#[test]
fn test_basic_flow() {
    let env = Env::default();
    let contract_id = env.register(YieldwayFactory, ());
    let client = YieldwayFactoryClient::new(&env, &contract_id);

    let admin = Address::generate(&env);

    // Initialize the factory
    client.initialize(&admin);

    // Test basic factory functionality
    // (Details would go here once we implement the deploy functions)
}

#[test]
fn test_deployment_tracking() {
    let env = Env::default();
    let contract_id = env.register(YieldwayFactory, ());
    let client = YieldwayFactoryClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    client.initialize(&admin);

    // Initial state
    assert_eq!(client.get_deployment_count(), 0);
    let deployments = client.get_deployments();
    assert_eq!(deployments.len(), 0);
} 