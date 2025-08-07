#!/usr/bin/env node

const { Keypair, Networks } = require('@stellar/stellar-sdk');
const fs = require('fs');
const path = require('path');

// Testnet configuration
const HORIZON_URL = 'https://horizon-testnet.stellar.org';
const SOROBAN_RPC_URL = 'https://soroban-testnet.stellar.org';
const FRIENDBOT_URL = 'https://friendbot.stellar.org';

async function fundAccount(publicKey) {
  try {
    console.log(`🔄 Funding account ${publicKey}...`);
    const response = await fetch(
      `${FRIENDBOT_URL}?addr=${encodeURIComponent(publicKey)}`
    );
    
    if (response.ok) {
      console.log(`✅ Successfully funded ${publicKey}`);
      return true;
    } else {
      console.log(`❌ Failed to fund ${publicKey}: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error funding ${publicKey}:`, error.message);
    return false;
  }
}

async function setupAccounts() {
  console.log('🚀 Setting up Yieldway testnet accounts...\n');

  // Generate accounts
  const adminKeypair = Keypair.random();
  const testUserKeypair = Keypair.random();
  const deployerKeypair = Keypair.random();

  const accounts = {
    admin: {
      publicKey: adminKeypair.publicKey(),
      secretKey: adminKeypair.secret(),
      role: 'Contract Administrator'
    },
    testUser: {
      publicKey: testUserKeypair.publicKey(),
      secretKey: testUserKeypair.secret(),
      role: 'Test User for deposits/withdrawals'
    },
    deployer: {
      publicKey: deployerKeypair.publicKey(),
      secretKey: deployerKeypair.secret(),
      role: 'Contract Deployer'
    }
  };

  console.log('📋 Generated Accounts:');
  Object.entries(accounts).forEach(([name, account]) => {
    console.log(`${name.toUpperCase()}:`);
    console.log(`  Public Key: ${account.publicKey}`);
    console.log(`  Role: ${account.role}\n`);
  });

  // Fund accounts
  console.log('💰 Funding accounts with testnet XLM...\n');
  const fundingPromises = Object.values(accounts).map(account => 
    fundAccount(account.publicKey)
  );
  
  const fundingResults = await Promise.all(fundingPromises);
  const successCount = fundingResults.filter(Boolean).length;
  
  console.log(`\n💰 Funding complete: ${successCount}/${fundingResults.length} accounts funded successfully\n`);

  // Create environment file
  const envContent = `# Yieldway Testnet Configuration
# Generated on ${new Date().toISOString()}

# Stellar Network Configuration
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=${SOROBAN_RPC_URL}
STELLAR_HORIZON_URL=${HORIZON_URL}
STELLAR_NETWORK_PASSPHRASE=${Networks.TESTNET}

# Account Configuration
ADMIN_ACCOUNT_PUBLIC_KEY=${accounts.admin.publicKey}
ADMIN_ACCOUNT_SECRET_KEY=${accounts.admin.secretKey}

TEST_ACCOUNT_PUBLIC_KEY=${accounts.testUser.publicKey}
TEST_ACCOUNT_SECRET_KEY=${accounts.testUser.secretKey}

DEPLOYER_ACCOUNT_PUBLIC_KEY=${accounts.deployer.publicKey}
DEPLOYER_ACCOUNT_SECRET_KEY=${accounts.deployer.secretKey}

# Contract Addresses (will be populated after deployment)
YIELDWAY_ROUTER_ADDRESS=
YIELDWAY_UYT_ADDRESS=
YIELDWAY_FACTORY_ADDRESS=

# Soroswap Integration (STAGING - HACKATHON)
SOROSWAP_STAGING_API_URL=https://soroswap-api-staging-436722401508.us-central1.run.app
SOROSWAP_API_KEY=sk_e2acb3e0b5248f286023ef7ce9a5cde7e087c12579ae85fb3e9e318aeb11c6ce
SOROSWAP_ROUTER_ADDRESS=
SOROSWAP_FACTORY_ADDRESS=
SOROSWAP_NETWORK=testnet

# DeFindex Testnet Configuration  
DEFINDEX_FACTORY_ADDRESS=
DEFINDEX_API_URL=https://api.defindex.io/testnet

# Frontend Configuration
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_APP_NAME=Yieldway
NEXT_PUBLIC_APP_URL=http://localhost:3000
`;

  // Write to .env file
  const envPath = path.join(process.cwd(), '.env');
  fs.writeFileSync(envPath, envContent);
  console.log(`📄 Environment configuration written to .env`);

  // Write account details to JSON for backup
  const accountsPath = path.join(process.cwd(), 'testnet-accounts.json');
  fs.writeFileSync(accountsPath, JSON.stringify(accounts, null, 2));
  console.log(`📄 Account details backed up to testnet-accounts.json\n`);

  console.log('✅ Testnet setup complete!');
  console.log('\n⚠️  IMPORTANT: Keep your secret keys secure and never commit them to version control!\n');
  
  console.log('📋 Next steps:');
  console.log('1. Install Stellar CLI: https://developers.stellar.org/docs/tools/developer-tools');
  console.log('2. Install Soroban CLI: https://soroban.stellar.org/docs/getting-started/setup');
  console.log('3. Run "npm run deploy:testnet" to deploy contracts');
  console.log('4. Start the frontend with "npm run dev"\n');

  return accounts;
}

// Run the setup if this file is executed directly
if (require.main === module) {
  setupAccounts().catch(console.error);
}

module.exports = { setupAccounts, fundAccount }; 