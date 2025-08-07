#!/usr/bin/env node

require('dotenv').config();
const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs').promises;
const path = require('path');

const execAsync = promisify(exec);

// Configuration
const NETWORK = 'testnet';
const CONTRACT_PATHS = {
    router: 'target/wasm32-unknown-unknown/release/yieldway_router.wasm',
    uyt: 'target/wasm32-unknown-unknown/release/yieldway_uyt.wasm',
    factory: 'target/wasm32-unknown-unknown/release/yieldway_factory.wasm'
};

const SOROBAN_RPC_URL = process.env.SOROBAN_RPC_URL || 'https://soroban-testnet.stellar.org';

async function deployContract(name, wasmPath, sourceAccount) {
    console.log(`\n🚀 Deploying ${name} contract...`);
    
    try {
        // Deploy the contract
        const deployCmd = `soroban contract deploy \\
            --wasm ${wasmPath} \\
            --source ${sourceAccount} \\
            --network ${NETWORK} \\
            --rpc-url ${SOROBAN_RPC_URL}`;
            
        console.log(`Deploying with command: ${deployCmd}`);
        const { stdout: contractId } = await execAsync(deployCmd);
        
        const cleanContractId = contractId.trim();
        console.log(`✅ ${name} deployed! Contract ID: ${cleanContractId}`);
        
        return cleanContractId;
    } catch (error) {
        console.error(`❌ Failed to deploy ${name}:`, error.message);
        throw error;
    }
}

async function initializeRouter(contractId, adminAccount, soroswapRouter, defindexFactory) {
    console.log(`\n🔧 Initializing router contract...`);
    
    try {
        const initCmd = `soroban contract invoke \\
            --id ${contractId} \\
            --source ${adminAccount} \\
            --network ${NETWORK} \\
            --rpc-url ${SOROBAN_RPC_URL} \\
            -- initialize \\
            --admin ${adminAccount} \\
            --soroswap_router ${soroswapRouter} \\
            --defindex_factory ${defindexFactory} \\
            --fee_rate 250`;
            
        await execAsync(initCmd);
        console.log(`✅ Router initialized successfully!`);
    } catch (error) {
        console.error(`❌ Failed to initialize router:`, error.message);
        throw error;
    }
}

async function initializeUYT(contractId, routerAddress, adminAccount) {
    console.log(`\n🔧 Initializing UYT contract...`);
    
    try {
        const initCmd = `soroban contract invoke \\
            --id ${contractId} \\
            --source ${adminAccount} \\
            --network ${NETWORK} \\
            --rpc-url ${SOROBAN_RPC_URL} \\
            -- initialize \\
            --router ${routerAddress} \\
            --admin ${adminAccount} \\
            --name "Yieldway Universal Yield Token" \\
            --symbol "UYT"`;
            
        await execAsync(initCmd);
        console.log(`✅ UYT initialized successfully!`);
    } catch (error) {
        console.error(`❌ Failed to initialize UYT:`, error.message);
        throw error;
    }
}

async function initializeFactory(contractId, adminAccount) {
    console.log(`\n🔧 Initializing factory contract...`);
    
    try {
        const initCmd = `soroban contract invoke \\
            --id ${contractId} \\
            --source ${adminAccount} \\
            --network ${NETWORK} \\
            --rpc-url ${SOROBAN_RPC_URL} \\
            -- initialize \\
            --admin ${adminAccount}`;
            
        await execAsync(initCmd);
        console.log(`✅ Factory initialized successfully!`);
    } catch (error) {
        console.error(`❌ Failed to initialize factory:`, error.message);
        throw error;
    }
}

async function saveDeploymentInfo(deployedContracts) {
    const deploymentInfo = {
        network: NETWORK,
        rpcUrl: SOROBAN_RPC_URL,
        deployedAt: new Date().toISOString(),
        contracts: deployedContracts,
        adminAccount: process.env.ADMIN_ACCOUNT,
        soroswap: {
            stagingApiUrl: process.env.SOROSWAP_STAGING_API_URL,
            apiKey: process.env.SOROSWAP_API_KEY,
            network: process.env.SOROSWAP_NETWORK
        }
    };
    
    await fs.writeFile('deployment.json', JSON.stringify(deploymentInfo, null, 2));
    console.log(`\n📄 Deployment info saved to deployment.json`);
}

async function main() {
    console.log('🌟 Starting Yieldway contract deployment to Stellar testnet...\n');
    console.log(`Network: ${NETWORK}`);
    console.log(`RPC URL: ${SOROBAN_RPC_URL}`);
    
    // Check environment variables
    if (!process.env.ADMIN_ACCOUNT) {
        console.error('❌ ADMIN_ACCOUNT environment variable not set');
        process.exit(1);
    }
    
    const adminAccount = process.env.ADMIN_ACCOUNT;
    const soroswapRouter = process.env.SOROSWAP_ROUTER || 'PLACEHOLDER_SOROSWAP_ROUTER_ADDRESS';
    const defindexFactory = process.env.DEFINDEX_FACTORY || 'PLACEHOLDER_DEFINDEX_FACTORY_ADDRESS';
    
    console.log(`Admin account: ${adminAccount}`);
    
    try {
        // Step 1: Deploy all contracts
        const deployedContracts = {};
        
        deployedContracts.factory = await deployContract('Factory', CONTRACT_PATHS.factory, adminAccount);
        deployedContracts.uyt = await deployContract('UYT', CONTRACT_PATHS.uyt, adminAccount);
        deployedContracts.router = await deployContract('Router', CONTRACT_PATHS.router, adminAccount);
        
        // Step 2: Initialize contracts in order
        await initializeFactory(deployedContracts.factory, adminAccount);
        await initializeUYT(deployedContracts.uyt, deployedContracts.router, adminAccount);
        await initializeRouter(deployedContracts.router, adminAccount, soroswapRouter, defindexFactory);
        
        // Step 3: Save deployment information
        await saveDeploymentInfo(deployedContracts);
        
        console.log('\n🎉 All contracts deployed and initialized successfully!');
        console.log('\n📋 Contract Addresses:');
        console.log(`├── Router:  ${deployedContracts.router}`);
        console.log(`├── UYT:     ${deployedContracts.uyt}`);
        console.log(`└── Factory: ${deployedContracts.factory}`);
        
        console.log('\n🔗 Next steps:');
        console.log('1. Test contract functionality');
        console.log('2. Integrate with Soroswap staging API');
        console.log('3. Run end-to-end testing');
        
    } catch (error) {
        console.error('\n💥 Deployment failed:', error.message);
        process.exit(1);
    }
}

// Run deployment
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { deployContract, initializeRouter, initializeUYT, initializeFactory }; 