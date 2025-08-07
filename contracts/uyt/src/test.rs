#![cfg(test)]

use super::*;
use crate::{UniversalYieldToken, UniversalYieldTokenClient};
use soroban_sdk::{testutils::Address as AddressTestUtils, Address, Env, String};

#[test]
fn test_initialize() {
    let env = Env::default();
    let contract_id = env.register(UniversalYieldToken, ());
    let client = UniversalYieldTokenClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    let router = Address::generate(&env);
    let name = String::from_str(&env, "Yieldway Universal Yield Token");
    let symbol = String::from_str(&env, "UYT");

    client.initialize(&router, &admin, &name, &symbol);

    // Test that initialize worked (note: returns (), so we can't check result directly)
}

#[test]
fn test_mint_and_burn() {
    let env = Env::default();
    env.mock_all_auths();

    let contract_id = env.register(UniversalYieldToken, ());
    let client = UniversalYieldTokenClient::new(&env, &contract_id);

    let admin = Address::generate(&env);
    let router = Address::generate(&env);
    let user = Address::generate(&env);
    let name = String::from_str(&env, "Test UYT");
    let symbol = String::from_str(&env, "TUYT");

    // Initialize the contract
    client.initialize(&router, &admin, &name, &symbol);

    // Test minting
    let mint_amount = 1000i128;
    client.mint(&user, &mint_amount);

    // Check balance
    let balance = client.balance_of(&user);
    assert_eq!(balance, mint_amount);

    // Test burning
    let burn_amount = 300i128;
    client.burn(&user, &burn_amount);

    // Check balance after burn
    let new_balance = client.balance_of(&user);
    assert_eq!(new_balance, mint_amount - burn_amount);
} 