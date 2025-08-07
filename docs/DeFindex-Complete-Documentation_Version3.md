---
title: DeFindex Complete Documentation
description: Comprehensive guide covering every aspect of the DeFindex protocol including API, TypeScript SDK, and Blend integration
author: ELDEVODE
date: 2025-07-16 18:47:24
---

# DeFindex Complete Documentation

<figure><img src=".gitbook/assets/Component 12.png" alt=""><figcaption></figcaption></figure>

**We are DeFindex** 🔁 a decentralized protocol designed to help wallet providers, crypto-native users and developers integrate diverse strategies that maximize yields through DeFi.

## Table of Contents

1. [Welcome & Overview](#welcome--overview)
2. [What is DeFindex?](#what-is-defindex)
3. [About DeFindex](#about-defindex)
4. [Getting Started](#getting-started)
5. [How DeFindex Works](#how-defindex-works)
6. [Whitepaper](#whitepaper)
7. [Wallet Developer Guide](#wallet-developer-guide)
8. [TypeScript SDK](#typescript-sdk)
9. [Flutter SDK](#flutter-sdk)
10. [API Integration](#api-integration)
11. [Vault Documentation](#vault-documentation)
12. [Vault APY Calculation](#vault-apy-calculation)
13. [DeFi Developer Guide](#defi-developer-guide)
14. [Building Blend Strategy](#building-blend-strategy)
15. [Blend Capital Integration](#blend-capital-integration)
16. [User Guide & FAQ](#user-guide--faq)
17. [Troubleshooting](#troubleshooting)
18. [Security](#security)

---

## Welcome & Overview

**We are DeFindex** 🔁 a decentralized protocol designed to help wallet providers, crypto-native users and developers integrate diverse strategies that maximize yields through DeFi.

### What will you find here?

* **User Documentation**: Learn how to use DeFindex to access DeFi strategies and earn yields on your assets.
* **Developer Documentation**: Practical tools and guides to integrate DeFindex into your applications, offering yield-generating accounts to your users. Also how to develop strategies to be included in DeFindex.
* **Tutorials**: coming soon...

If you're new, start with the **"Getting Started"** section to learn the basics or explore [**What is DeFindex**](https://app.gitbook.com/o/CL0VfO2AdQ9HkYTcTiO5/s/nOjEfj1qCoVgPEQ3cl02/) for a more detailed overview of our platform.

With **DeFindex** 🔁, we are offering a secure, efficient, and user-friendly solution to optimize your asset returns.

**DeFi made Easy!**

---

## What is DeFindex?

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-12-03 a las 18.12.14.png" alt=""><figcaption></figcaption></figure>

DeFindex is an innovative solution that enables wallet builders to offer yield-generating accounts to their users in a simple and secure way. By leveraging diverse decentralized finance (DeFi) strategies, DeFindex streamlines the process of earning passive income with crypto.

### How DeFindex Works:

* **Diverse Strategies**: Offers a wide range of DeFi options tailored to users' needs, making it simple to get started.
* **Secure Automation**: Smart contracts handle everything, from investing to reinvesting.
* **Maximized Earnings**: Earnings are automatically reinvested to achieve the best possible returns.

### Solutions for Wallet Builders:

* **Customized Portfolios**: Manage various DeFi strategies for your users that effectively maximize returns while reducing risk.
* **Developer Tools**: Easily integrate customizable buttons into your apps, enabling users to start earning yield with just one click.
* **Enhanced User Engagement**: Boost user participation with accounts that generate passive income.

### Security and Transparency:

* **Secure, Decentralized Smart Contracts**: Every transaction is transparent and fully controlled by the user, ensuring peace of mind.

---

## About DeFindex

**DeFindex** **🔁** is DeFi infrastructure developed by **PaltaLabs 🥑** an innovative blockchain hub based in Latin America and focused on the Stellar ecosystem. It enables wallet providers to easily integrate automated investment strategies through modular smart contracts including Vaults, Strategies, and Factory that connect DeFi protocols to accessible user interfaces.

Our mission is to **democratize access to global financial products**, allowing any wallet to offer yield opportunities with no technical friction, optimized performance, and a seamless user experience.

---

## Getting Started

### Getting Started Overview

To begin your DeFindex journey, follow these essential steps:

1. **Understanding Core Concepts**: Learn how DeFindex works and its key components
2. **Creating Your First Vault**: Deploy a vault instance for your application
3. **Mainnet Deployment**: Guidelines for production deployment
4. **Integration**: Choose between SDKs or direct smart contract interaction

### Documentation Structure

Based on the complete documentation structure:

- [Getting Started](getting-started/README.md)
- [How DeFindex Works](getting-started/how-defindex-works.md)  
- [Creating a DeFindex Vault](getting-started/creating-a-defindex-vault.md)
- [Mainnet Deployment](getting-started/mainnet-deployment.md)
- [Troubleshooting](getting-started/troubleshooting.md)

---

## How DeFindex Works

DeFindex is a yield optimization platform that enables users to create and manage yield-generating vaults through an intuitive interface. Here's how it works:

### Core Functionality

#### Vault Creation and Integration

* Create custom vaults through our [user-friendly frontend](https://app.defindex.io)
* Seamlessly integrate vaults into your applications using our SDKs
* Connect vaults to multiple DeFi strategies for optimal yield generation

#### Strategy Management

* Dynamically allocate funds across different strategies
* Optimize returns by moving capital between strategies based on performance and risk metrics
* Maintain full control over strategy selection and fund allocation

#### User Operations

* **Deposits**: Funds are automatically deployed to connected strategies (configurable by vault manager)
* **Withdrawals**: Seamless fund retrieval from strategies and vault reserves
* **Emergency Protocol**: Built-in functionality to rescue funds from strategies if needed

#### Revenue Model

* Vault managers decide how much to charge
* Fees are calculated based on the yield generated by underlying strategies
* For example, if fees are 50%, and a user earns 10 USDC on a strategy, 5 USDC will go to the user, 4 USDC will go to the Vault manager and 1 USDC will go to DeFindex.

### Key Benefits

* Immediate yield generation upon deposit
* Flexible strategy management
* Professional-grade security features
* Customizable fee
* Emergency fund protection mechanisms

This architecture allows users to maximize their DeFi yields while maintaining control over their investment strategy and risk exposure.

---

## Whitepaper

### Whitepaper Structure

The comprehensive whitepaper covers:

- [Whitepaper](10-whitepaper/README.md)
- [Introduction](10-whitepaper/01-introduction/README.md)
  - [Core Concepts](10-whitepaper/01-introduction/02-core-concepts.md)
- [The DeFindex Approach](10-whitepaper/03-the-defindex-approach/README.md)
  - [Design Decisions](10-whitepaper/03-the-defindex-approach/01-design-decisions.md)
- [Smart Contracts](whitepaper/10-whitepaper/02-contracts/README.md)
  - [DeFindex Vault](whitepaper/10-whitepaper/02-contracts/01-vault-contract.md)
  - [DeFindex Strategy](whitepaper/10-whitepaper/02-contracts/02-strategy-contract.md)
  - [DeFindex Zapper](whitepaper/10-whitepaper/02-contracts/02-zapper-contract.md)
- [Strategy Examples](10-whitepaper/04-strategies-examples.md)
- [State of the Art](whitepaper/10-whitepaper/state-of-the-art/README.md)
  - [Yearn Finance](whitepaper/10-whitepaper/state-of-the-art/yearn-finance.md)
- [Appendix](10-whitepaper/10-appendix/README.md)
  - [Why Not Swap in Deposit](whitepaper/10-whitepaper/10-appendix/why-not-swap-in-deposit.md)

---

## Wallet Developer Guide

Welcome to the DeFindex Wallet Developer Guide! This documentation will help you integrate DeFindex's yield-generating capabilities into your wallet application, enabling your users to access DeFi strategies and maximize their returns.

### Overview

DeFindex is a decentralized protocol that allows Wallets to define and manage their investment distribution across multiple Blend Pools. As a wallet developer, you can leverage DeFindex to:

- Offer yield-generating accounts to your users.
- Get a portion of the yield generated by your users.
- Provide access to diverse Blend Pools in a single integration.
- Transform APR to APY and get more yield for your users.

### Key Benefits for Wallet Developers

1. **Simplified Integration**: Access multiple Blend Pools through a single integration
2. **Enhanced User Experience**: Provide yield-generating capabilities without complex DeFi knowledge
3. **Revenue Sharing**: Earn from your users' yield

### Getting Started

To begin integrating DeFindex into your wallet:

1. Review the docs for the framework you want to use
2. Read about the core concepts
3. Learn how to create a Vault with the best practices in the Creating a DeFindex Vault guide

### Support and Resources

- Join our [Developer Community](https://discord.gg/ftPKMPm38f) for real-time support.

### Next Steps

For any questions or support needs, please reach out to our developer support team at dev@paltalabs.io or join our Discord community.

### Integrating DeFindex into Your Wallet

To integrate DeFindex into your wallet, you can choose between two approaches:

1. **SDKs**: Utilize the SDKs provided by DeFindex, which facilitate interaction with the protocol and are faster to implement.
2. **Smart Contracts**: Interact directly with DeFindex's smart contracts, giving you greater control over transactions but requiring a deeper understanding of the protocol's structure.

DeFindex is a protocol that allows users to interact with various investment strategies and liquidity pools. To integrate it into your wallet, you need to understand how transactions and the smart contracts that make up the protocol are structured.

You can review the contract addresses in the [`~/public/`](https://github.com/paltalabs/defindex/tree/main/public) folder, where you'll find information about the contract addresses, or deploy your own custom vault and strategies using our Factory contract.

#### Deploying a Vault

##### GUI (Basic)

If you want to create a vault using the strategies available in DeFindex without writing any code, you can use the DeFindex user interface. Here's how:

1. **Visit the DeFindex page**: Go to [app.defindex.io](https://app.defindex.io) and navigate to the vault creation section in the DeFindex user interface.

2. **Connect your wallet**: Make sure your wallet is connected to the correct network and that you have the necessary funds to pay for transaction fees.

3. **Complete the vault creation form**: Provide the required information, such as the vault's name, symbol, select the asset you wish to use, and use the switch to choose if you want your vault to be **upgradable**.

4. **Select strategies**: Choose the strategies you want to include in your vault. You can select multiple strategies based on your preferences.

> [!NOTE]
> The available strategies you can select will depend on the asset you have chosen for your vault. Only compatible strategies for the selected asset will be displayed.

5. **Configure the remaining fields**: Finish completing the form with the required information, such as manager addresses, fees, and other relevant parameters.

6. **Review and confirm**: Before submitting the transaction, review all the details to ensure everything is correct.

7. **Submit the transaction**: Once you are sure all the information is correct, sign and submit the transaction to create your vault with your wallet.

8. **Wait for confirmation**: After submitting the transaction, wait for it to be confirmed on the blockchain. Once confirmed, your vault will be active, and you can start interacting with it.

---

## TypeScript SDK

The TypeScript SDK provides a simple way to interact with DeFindex vaults in your web applications. You can easily integrate vault functionality with just **a few lines of code**. The SDK handles all the complexities of Soroban contract interactions while providing a type-safe interface.

### Getting Started

1. **Install the SDK**

```bash
npm install defindex-sdk
# or
yarn add defindex-sdk
```

2. **Import and Initialize**

```typescript
import { Vault, SorobanNetwork } from 'defindex-sdk';

const vault = new Vault({
    network: SorobanNetwork.PUBLIC,
    contractId: 'YOUR_VAULT_CONTRACT_ID'
});
```

3. **Use Vault Functions**

```typescript
// Check balance
const balance = await vault.balance(accountAddress, sorobanContext);

// Make a deposit
const txHash = await vault.deposit(
    accountAddress,
    100,
    true,
    sorobanContext,
    secretKey // Optional secret key for signing, if you are using a connected wallet it's not needed
);

// Withdraw funds
const withdrawTxHash = await vault.withdraw(
    accountAddress,
    50,
    true,
    sorobanContext,
    secretKey // Optional secret key for signing, if you are using a connected wallet it's not needed
);
```

### Advanced TypeScript SDK Usage

#### Working with Multiple Assets

```typescript
// For multi-asset vaults
const multiAssetVault = new Vault({
    network: SorobanNetwork.PUBLIC,
    contractId: 'MULTI_ASSET_VAULT_CONTRACT_ID'
});

// Deposit multiple assets
const depositAmounts = [100, 200]; // Array of amounts for each asset
const multiAssetDepositTx = await multiAssetVault.deposit(
    accountAddress,
    depositAmounts,
    true,
    sorobanContext
);
```

#### Error Handling

```typescript
try {
    const txHash = await vault.deposit(accountAddress, 100, true, sorobanContext);
    console.log('Deposit successful:', txHash);
} catch (error) {
    console.error('Deposit failed:', error);
    // Handle specific error types
    if (error.code === 160) {
        console.log('Insufficient output amount');
    }
}
```

#### Getting Vault Information

```typescript
// Get vault details
const vaultInfo = await vault.getVaultInfo(sorobanContext);
console.log('Vault name:', vaultInfo.name);
console.log('Vault symbol:', vaultInfo.symbol);
console.log('Total assets:', vaultInfo.totalAssets);

// Get user's share balance
const userShares = await vault.getShareBalance(accountAddress, sorobanContext);
console.log('User shares:', userShares);
```

---

## Flutter SDK

Welcome to the DeFindex Flutter SDK documentation! This SDK enables you to integrate DeFindex's savings account functionality into your Flutter application. With this SDK, your users can:

1. Deposit funds into a DeFindex vault
2. Check their vault balance
3. Withdraw funds from their vault
4. View the current APY (Annual Percentage Yield) of their vault

### Prerequisites

Before integrating the SDK, you'll need to deploy a vault contract for your application. You can do this through our [DeFindex DApp](https://app.defindex.io/). Make sure to thoroughly understand vault management and operations before proceeding.

For detailed instructions on creating, deploying, and managing vaults, please refer to our [Creating a DeFindex Vault](../getting-started/creating-a-defindex-vault.md) guide.

### Integration Guide

#### 1. Add the SDK to Your Project

Add the following dependency to your `pubspec.yaml` file:

```yaml
dependencies:
  defindex_sdk: ^1.0.1
```

#### 2. Import the SDK

Import the SDK in your `main.dart` file:

```dart
import 'package:defindex_sdk/defindex_sdk.dart';
```

### Quick Start

The Flutter SDK makes it incredibly simple to integrate DeFindex vault functionality into your app. With just three lines of code, you can set up a vault and enable deposits! Here's what you need to do:

1. **Get Your Vault Contract Address:** Retrieve the contract address for your vault from the DeFindex DApp
2. **Initialize the Vault:** Create a vault instance in your code
3. **Implement Vault Functions:** Use `vault.deposit`, `vault.balance`, or `vault.withdraw` as needed

### Implementation Example

Here's a practical example demonstrating how to create a vault instance and implement a deposit function:

```dart
import 'package:defindex_sdk/defindex_sdk.dart';

// Initialize the vault
var vault = Vault(
  sorobanRPCUrl: 'https://soroban-testnet.stellar.org', // Your RPC URL
  network: SorobanNetwork.TESTNET, // Your network
  contractId: 'CD76H2IVRMRMLE4KZXLAVK3L3CO7PENUB3X4VB2FQVUAFVAJMQYQIFDE', // Your vault contract address
);

// Execute a deposit
String? transactionHash = await vault.deposit(
  'GCW36WQUHJASZVNFIIL7VZQWL6Q72XT6TAU6N3XMFGTLSNE2L7LMJNWT', // User's Stellar address
  100.0, // Deposit amount
  (transaction) async => signerFunction(transaction),
);

print('Transaction hash: $transactionHash');

// Display transaction result to user
ScaffoldMessenger.of(context).showSnackBar(
  SnackBar(content: Text('Transaction hash: $transactionHash')),
);
```

### Flutter SDK Advanced Features

#### Checking Balances

```dart
// Get user's balance in the vault
double? balance = await vault.balance(
  'GCW36WQUHJASZVNFIIL7VZQWL6Q72XT6TAU6N3XMFGTLSNE2L7LMJNWT', // User's address
);

print('User balance: $balance');
```

#### Withdrawing Funds

```dart
// Withdraw funds from the vault
String? withdrawHash = await vault.withdraw(
  'GCW36WQUHJASZVNFIIL7VZQWL6Q72XT6TAU6N3XMFGTLSNE2L7LMJNWT', // User's address
  50.0, // Withdrawal amount
  (transaction) async => signerFunction(transaction),
);

print('Withdraw transaction hash: $withdrawHash');
```

#### Getting APY Information

```dart
// Get current vault APY
double? currentApy = await vault.getAPY();
print('Current vault APY: ${currentApy}%');
```

---

## API Integration

# DeFindex API Integration Tutorial

This guide will walk you through integrating DeFindex into your app using the provided API. We'll use TypeScript for the examples, but the concepts apply to any language.

Complete reference: [API Reference](https://api.defindex.io/docs)

## Prerequisites

- Basic knowledge of TypeScript or JavaScript
- Node.js environment
- [Stellar SDK](https://www.stellar.org/developers/reference/) installed (`npm install stellar-sdk`)

## 1. Setting Up the API Client

First, create an `ApiClient` class to handle authentication and API requests.

```typescript
import StellarSdk from 'stellar-sdk';

class ApiClient {
    private accessToken: string | null = null;
    private readonly apiUrl = "api.defindex.io";

    constructor(private username: string, private password: string) {}

    // Authenticate and store the access token
    async login(): Promise<void> {
        const response = await fetch(`https://${this.apiUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: this.username, password: this.password }),
        });

        if (!response.ok) throw new Error("Login failed");

        const data = await response.json();
        this.accessToken = data.token;
    }

    // Helper for POST requests
    async postData(endpoint: string, vaultAddress: string, params: Record<string, any>): Promise<any> {
        if (!this.accessToken) throw new Error("Not authenticated");

        const response = await fetch(`https://${this.apiUrl}/vault/${vaultAddress}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify(params)
        });
        return await response.json();
    }

    // Helper for GET requests
    async getData(endpoint: string, vault: string, params?: Record<string, any>): Promise<any> {
        if (!this.accessToken) throw new Error("Not authenticated");

        const url = params
            ? `https://${this.apiUrl}/vault/${vaultAddress}/${endpoint}?${new URLSearchParams(params).toString()}`
            : `https://${this.apiUrl}/vault/${vaultAddress}/${endpoint}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        });
        return await response.json();
    }
}
```

## 2. Implementing Core Functions

Below are the main functions you'll need: `deposit`, `withdraw`, `balance`, and `apy`.

### Deposit

Deposits funds into the DeFindex vault.

```typescript
const vaultAddress = 'CAQ6PAG4X6L7LJVGOKSQ6RU2LADWK4EQXRJGMUWL7SECS7LXUEQLM5U7';

async function deposit(amount: number, user: string, apiClient: ApiClient, signerFunction: (tx: string) => string) {
    // Step 1: Request an unsigned transaction from the API
    const { xdr: unsignedTx } = await apiClient.postData("deposit", vaultAddress, {
        amounts: [amount],
        from: user
    });

    // Step 2: Sign the transaction (implement your own signer)
    const signedTx = signerFunction(unsignedTx);

    // Step 3: Send the signed transaction back to the API
    const response = await apiClient.postData("send", vaultAddress, {
        xdr: signedTx
    });
    return response;
}
```

### Withdraw

Withdraws funds from the DeFindex vault.

```typescript
async function withdraw(amount: number, user: string, apiClient: ApiClient, signerFunction: (tx: string) => string) {
    // Step 1: Request an unsigned transaction from the API
    const { xdr: unsignedTx } = await apiClient.postData("withdraw", vaultAddress, {
        amount: amount,
        from: user
    });

    // Step 2: Sign the transaction
    const signedTx = signerFunction(unsignedTx);

    // Step 3: Send the signed transaction back to the API
    const response = await apiClient.postData("send", vaultAddress, {
        xdr: signedTx
    });
    return response;
}
```

### Balance

Gets the user's balance in the vault.

```typescript
async function getBalance(user: string, apiClient: ApiClient) {
    const response = await apiClient.getData("balance", vaultAddress, {
        address: user
    });
    return response.balance;
}
```

### APY

Gets the current APY of the vault.

```typescript
async function getAPY(apiClient: ApiClient) {
    const response = await apiClient.getData("apy", vaultAddress);
    return response.apy;
}
```

## 3. Complete Integration Example

Here's a complete example showing how to use all the functions together:

```typescript
import StellarSdk from 'stellar-sdk';

async function main() {
    // Initialize API client
    const apiClient = new ApiClient("your_username", "your_password");
    await apiClient.login();

    const userAddress = "GCEXAMPLE..."; // User's Stellar address
    const depositAmount = 100; // Amount to deposit

    // Your signing function (implement based on your wallet setup)
    const signerFunction = (xdr: string) => {
        // Sign the transaction and return signed XDR
        // This depends on your wallet implementation
        return signedXdr;
    };

    try {
        // Check current balance
        const currentBalance = await getBalance(userAddress, apiClient);
        console.log(`Current balance: ${currentBalance}`);

        // Get current APY
        const currentAPY = await getAPY(apiClient);
        console.log(`Current APY: ${currentAPY}%`);

        // Make a deposit
        const depositResult = await deposit(depositAmount, userAddress, apiClient, signerFunction);
        console.log(`Deposit successful: ${depositResult.transaction_hash}`);

        // Check balance after deposit
        const newBalance = await getBalance(userAddress, apiClient);
        console.log(`New balance: ${newBalance}`);

    } catch (error) {
        console.error("Error:", error);
    }
}

main();
```

---

## Vault Documentation

A **DeFindex Vault** is a smart contract that **defines a distribution** of an investment into **one or more strategies**. It works like an index fund or an ETF, where the underlying assets are invested in DeFi protocols. In order to be exposed to DeFi strategies, a user just needs to deposit assets into the Vault. Then, the Vault will take care of automatically investing those assets in the defined strategies.

### Creating a Vault

<figure><img src="../.gitbook/assets/Frame 1261155160.png" alt=""><figcaption></figcaption></figure>

Once your wallet is connected and you have test tokens, you can create a new vault.

* **Click on "Add Vault"**: This starts the vault creation process.
* **Enter a Name and Symbol (Ticker)**: Choose a name and symbol for your vault. This will help you identify the vault in the future.

### Vault Operations

#### First Rebalance

You can do the first rebalance using the script `vault_usage_example.ts` or by using the [stellar-cli](https://developers.stellar.org/docs/build/guides/cli).

First, you need to setup your keys, make sure the rebalancer manager role defined previously is the one you are going to setup. For example, you can set it up using secret key by:

```bash
stellar keys add --secret-key rebalancer
```

then, you will be prompted to write your secret key.

Next, let's make the rebalance using testnet as example. You can do that by:

```bash
stellar contract invoke \
  --rpc-url https://soroban-testnet.stellar.org/ \
  --network-passphrase 'Test SDF Network ; September 2015' \
  --id <CONTRACT_ID> \
  --source-account rebalancer \
  -- \
  rebalance \
  --caller <REBALANCER_ADDRESS> \
  --instructions '[{"Invest":["<STRATEGY_ADDRESS>", "<AMOUNT_IN_STROOPS>"]}]'
```

You can find the strategy addresses on `~/public/<network>.contracts.json`.

### Interacting with the Vault Using Example Script

You can interact with your DeFindex Vault directly from the command line using the provided example script: `Contracts/src/vault_usage_example.ts`. This script demonstrates how to perform key vault operations such as deposit, withdraw, invest, unwind, and harvest.

#### Prerequisites

* Node.js and yarn installed
* All dependencies installed (`yarn install` in the project root)
* Properly configured environment (setup a `.env` file, see `Contracts/src/utils/env_config.js` for user/secret setup)
* The vault and strategy contracts deployed and addresses set in your address book

#### How to Use

1. **Navigate to the Contracts directory:**

   ```bash
   cd Contracts
   ```

2. **Edit the script if needed:**
   Uncomment the function call(s) you want to run at the bottom of `src/vault_usage_example.ts` (e.g., `await deposit();`).

3. **Run the script:**

   ```bash
   yarn vault-example <network>
   ```

Replace `<network>` with your target network (e.g., `testnet`, `mainnet`, or your custom config).

#### Available Operations

* **Deposit:**
  Deposits assets into the vault for the configured user.

  ```typescript
  await deposit();
  ```

* **Withdraw:**
  Withdraws assets from the vault for the configured user.

  ```typescript
  await withdraw();
  ```

* **Invest:**
  Allocates vault funds into a strategy (admin only).

  ```typescript
  await invest();
  ```

* **Unwind:**
  Withdraws funds from a strategy back to the vault (admin only).

  ```typescript
  await unwind();
  ```

* **Harvest:**
  Triggers a strategy harvest (keeper only).
  
  ```typescript
  await harvest();
  ```

**Note:** Only uncomment and run one operation at a time to avoid transaction conflicts. Make sure your environment variables and address book are set up for the network you are targeting.

---

## Vault APY Calculation

### 🏦 How to Calculate Vault Price Per Share (PPS)

There are **two main ways** to calculate the **Vault Price Per Share (PPS)**:

#### ✅ Method 1: Use `get_asset_amounts_per_shares` Function

This function returns the amount of each underlying asset that corresponds to **one vault share**.

```rust
fn get_asset_amounts_per_shares(e: Env) -> Vec<i128>
```

This function returns a `Vec` of asset amounts per share. Each amount matches the asset at the same index in the vault's asset list.

To calculate the vault share price in a specific pricing currency (e.g. USD):

$$\text{Vault PPS} = \sum_{i} \left( \text{Asset Price}_i \times \text{VAmount}_i \right)$$

Where:

* `VAmount_i` = amount of asset `i` per share
* `Asset Price_i` = price of asset `i` (from an oracle or external source)

**If the vault has only one asset** and you're pricing in that same asset, just use the first value from `get_asset_amounts_per_shares`.

#### ✅ Method 2: Use Vault Events

Each time someone deposits or withdraws from the vault, deposit and withdraw events are emitted:

```rust
pub struct VaultWithdrawEvent {
    pub withdrawer: Address,
    pub df_tokens_burned: i128,
    pub amounts_withdrawn: Vec<i128>,
    pub total_supply_before: i128,
    pub total_managed_funds_before: Vec<CurrentAssetInvestmentAllocation>,
}

pub struct VaultDepositEvent {
    pub depositor: Address,
    pub amounts: Vec<i128>,
    pub df_tokens_minted: i128,
    pub total_supply_before: i128,
    pub total_managed_funds_before: Vec<CurrentAssetInvestmentAllocation>,
} 
```

Each event includes:

* `total_supply_before` — the number of vault shares before the action
* `total_managed_funds_before` — a list of all asset allocations

Each asset allocation looks like this:

```rust
pub struct CurrentAssetInvestmentAllocation {
    pub asset: Address,
    pub total_amount: i128,
    pub idle_amount: i128,
    pub invested_amount: i128,
    pub strategy_allocations: Vec<StrategyAllocation>,
}
```

To calculate the vault price per share:

$$\text{Vault PPS} = \frac{\sum \left( \text{Asset Price}_i \times \text{Total Asset Amount}_i \right)}{\text{Total Vault Shares}}$$

If the vault only holds **one asset**, then:

$$\text{Vault PPS} = \frac{\text{Total Asset Amount}}{\text{Total Supply}}$$

Where:

* **`Total Asset Amount`** = sum of all units of that one asset held by the vault (from `total_managed_funds_before[0].total_amount`)
* **`Total Supply`** = number of shares before the action (from `total_supply_before`)

### 📈 How to Calculate Vault APY

Once you have the Vault PPS at two different points in time, you can calculate **APY** using the same method as when is calculated for strategies:

$$\text{pps\_delta} = \frac{\text{PPS}_{\text{now}}}{\text{PPS}_{\text{then}}} - 1$$

Then annualize it:

$$\text{Vault APY} = \left(1 + \text{pps\_delta} \right)^{\left( \frac{365.2425}{\text{days}} \right)} - 1$$

Where `days` is the number of days between the two PPS values.

---

## DeFi Developer Guide

### DeFi Developers Documentation Structure

The DeFi developers section includes comprehensive guides for:

- [Developer Introduction](strategies/developer-introduction.md)
- [What is a strategy?](strategies/what-is-a-strategy.md)
- [What is Blend Capital?](strategies/what-is-blend-capital.md)
- [Strategies APY](strategies/strategies-apy.md)
- [Building the Blend Strategy](03-how-to-create-a-strategy.md)

### What is Blend Capital?

#### What is Blend?

Blend is a DeFi (decentralized finance) protocol that allows any entity to create or utilize an immutable lending market that fits its needs.

<figure><img src="../.gitbook/assets/Component 11.png" alt=""><figcaption></figcaption></figure>

#### What's a BLND token?

BLND is Blend's platform token. It is issued to protocol users and can be deposited in the backstop module to insure lending pools.

### Strategies APY

Each **strategy** will give a different **APY (Annual Percentage Yield)** depending on what the strategy does — for example lending, swapping, farming or even leverage lending, etc...

To calculate APY, you might need some extra data, like:

* The value of the harvested token (the token the strategy earns),
* The APY of other protocols the strategy interacts with,
* The emission rate of the harvested token (how fast it's being distributed),
* And any other rewards or fees involved.

But instead of tracking all of that manually, the [**Strategy Crate**](../../contracts/strategies/core/src/event.rs#L32) makes things easier. It emits a `HarvestEvent` every time the strategy runs its logic (in the `harvest()` function). This event includes a very important value: the **Price Per Share** (`price_per_share` or **PPS**).

```rust
pub struct HarvestEvent {
    pub amount: i128,
    pub from: Address,
    pub price_per_share: i128,
}
```

#### 🪙 What is Price Per Share (PPS)?

Every time someone deposits into a strategy, they receive **shares**. As the strategy earns yield, the value of each share increases.

The **Price Per Share (PPS)** tells you how much one share is worth. You don't need to track individual profits — just track the PPS over time.

#### 📅 How to Calculate APY

To calculate the APY, we compare the **PPS now** with the **PPS in the past** (e.g., 1 day, 7 days, or 30 days ago).

Let:

* PPS now: the latest price per share
* PPS then: the price per share at a past time
* Δt: number of days between the two points

#### 🧮 Step 1: Calculate ROI (Return on Investment)

$$\text{ROI} = \frac{\text{PPS}_\text{now}}{\text{PPS}_\text{then}} - 1$$

This gives the percentage growth over that time period.

#### 📈 Step 2: Annualize It to Get the APY

$$\text{APY} = \left(1 + \text{ROI} \right)^{\left(\frac{365.2425}{\Delta t}\right)} - 1$$

Here, `365.2425` is the average number of days in a year (to account for leap years).

#### ✅ Example

* PPS now = `1.10`
* PPS 30 days ago = `1.00`
* Days = 30

$$\text{ROI} = \frac{1.10}{1.00} - 1 = 0.10$$

$$\text{APY} = (1 + 0.10)^{\left(\frac{365.2425}{30}\right)} - 1 \approx 2.138 - 1 = \boxed{113.8\%}$$

This means if the strategy keeps performing the same way, the estimated yearly return is **113.8%**.

---

## Building Blend Strategy

### **Strategy Architecture Overview**

DeFindex Strategies are **smart contracts** that implement specific logic to earn yield in DeFi protocols. For the **Blend Strategy**, the goal is to interact with the Blend protocol to:

1. **Lend assets** to earn interest
2. **Earn BLND rewards** for participating in the protocol
3. **Compound rewards** by automatically reinvesting them

### **Why Strategies Exist**

Strategies solve three important problems that Vaults alone cannot handle:

1. **Protocol-specific Authorization**: The Vault cannot directly authorize interactions with external protocols like Blend.
2. **Position Management**: The Strategy holds positions for each interacting vault and tracks them using shares.
3. **Standardized Outputs**: The Strategy always converts internal shares to **underlying asset balances** for the Vault to ensure consistency.

### **Getting Started**

To implement the Blend Strategy, you need to be familiar with **Soroban smart contract development** and **Rust**. If you're new to Soroban, start with the official [Soroban Getting Started Guide](https://developers.stellar.org/docs/build/smart-contracts/getting-started/setup).

#### **Cargo.toml**

Here's the `Cargo.toml` for the Blend Strategy:

```toml
[package]
name = "blend_strategy"
version = "0.1.0"
authors = ["coderipper <joaquin@paltalabs.io>"]
license = "GPL-3.0"
edition = "2021"
publish = false
repository = "https://github.com/paltalabs/defindex"

[lib]
crate-type = ["cdylib"]

[dependencies]
soroban-sdk = "22.0.0-rc.2.1"
defindex-strategy-core = "0.2.0"
soroban-fixed-point-math = "1.3.0"
  
[dev-dependencies]
soroban-sdk = { workspace = true, features = ["testutils"] }
sep-40-oracle = { version = "1.2.0", features = ["testutils"] }
sep-41-token = { version = "1.2.0", features = ["testutils"] }  
```

### **Project Setup**

Below, we'll break the Blend Strategy into its components, explaining each part with the corresponding code.

#### **1. lib.rs: Core Logic**

The **Blend Strategy** implements the `DeFindexStrategyTrait` and provides all core functionality, including deposits, withdrawals, rewards harvesting, and balance tracking.

**Code:**

```rust
#![no_std]
use blend_pool::perform_reinvest;
use constants::{MIN_DUST, SCALAR_9};
use reserves::StrategyReserves;
use soroban_sdk::{contract, contractimpl, token::TokenClient, Address, Env, IntoVal, String, Val, Vec};

mod blend_pool;
mod constants;
mod reserves;
mod soroswap;
mod storage;

use storage::{extend_instance_ttl, has_config, Config};

pub use defindex_strategy_core::{
	DeFindexStrategyTrait,
	StrategyError,
	event
};  

pub fn check_nonnegative_amount(amount: i128) -> Result<(), StrategyError> {
	if amount < 0 {
		Err(StrategyError::NegativeNotAllowed)
	} else {
		Ok(())
	}
}

fn check_initialized(e: &Env) -> Result<(), StrategyError> {
	if has_config(e) {
		Ok(())
	} else {
		Err(StrategyError::NotInitialized)
	}
}

const STRATEGY_NAME: &str = "BlendStrategy";

#[contract]
struct BlendStrategy;

#[contractimpl]
impl DeFindexStrategyTrait for BlendStrategy {
	fn __constructor(
		e: Env,
		asset: Address,
		init_args: Vec<Val>,
	) {
		// Getting init args from the Vec<Val>
		let blend_pool_address: Address = init_args.get(0).ok_or(StrategyError::InvalidArgument).unwrap().into_val(&e);
        
        // Initialize strategy configuration
        let config = Config {
            asset: asset.clone(),
            blend_pool_address: blend_pool_address.clone(),
        };
        
        storage::set_config(&e, &config);
        
        // Emit initialization event
        event::StrategyInitEvent {
            strategy_name: String::from_str(&e, STRATEGY_NAME),
            asset: asset,
            blend_pool: blend_pool_address,
        }.publish(&e);
	}

    fn deposit(e: Env, amount: i128, from: Address) -> Result<i128, StrategyError> {
        check_initialized(&e)?;
        check_nonnegative_amount(amount)?;
        
        let config = storage::get_config(&e);
        
        // Transfer tokens from depositor to strategy
        let token_client = TokenClient::new(&e, &config.asset);
        token_client.transfer(&from, &e.current_contract_address(), &amount);
        
        // Supply tokens to Blend pool
        let shares_received = blend_pool::supply(&e, &config.blend_pool_address, &config.asset, amount)?;
        
        // Update reserves
        let mut reserves = reserves::get_reserves(&e);
        reserves.total_shares += shares_received;
        reserves::set_reserves(&e, &reserves);
        
        // Emit deposit event
        event::DepositEvent {
            from: from,
            amount: amount,
            shares_received: shares_received,
        }.publish(&e);
        
        Ok(shares_received)
    }

    fn withdraw(e: Env, shares_amount: i128, to: Address) -> Result<i128, StrategyError> {
        check_initialized(&e)?;
        check_nonnegative_amount(shares_amount)?;
        
        let config = storage::get_config(&e);
        
        // Withdraw from Blend pool
        let amount_withdrawn = blend_pool::withdraw(&e, &config.blend_pool_address, &config.asset, shares_amount)?;
        
        // Transfer tokens to user
        let token_client = TokenClient::new(&e, &config.asset);
        token_client.transfer(&e.current_contract_address(), &to, &amount_withdrawn);
        
        // Update reserves
        let mut reserves = reserves::get_reserves(&e);
        reserves.total_shares -= shares_amount;
        reserves::set_reserves(&e, &reserves);
        
        // Emit withdrawal event
        event::WithdrawEvent {
            to: to,
            shares_amount: shares_amount,
            amount_withdrawn: amount_withdrawn,
        }.publish(&e);
        
        Ok(amount_withdrawn)
    }

    fn harvest(e: Env, from: Address) -> Result<(), StrategyError> {
        check_initialized(&e)?;
        
        let config = storage::get_config(&e);
        
        // Claim BLND rewards from Blend
        let rewards_claimed = blend_pool::claim_rewards(&e, &config.blend_pool_address)?;
        
        if rewards_claimed > MIN_DUST {
            // Swap BLND rewards for the underlying asset
            let swapped_amount = soroswap::swap_blnd_for_asset(&e, rewards_claimed, &config.asset)?;
            
            // Reinvest the swapped amount back into Blend
            let new_shares = blend_pool::supply(&e, &config.blend_pool_address, &config.asset, swapped_amount)?;
            
            // Update reserves
            let mut reserves = reserves::get_reserves(&e);
            reserves.total_shares += new_shares;
            
            // Calculate new price per share
            let total_balance = blend_pool::get_balance(&e, &config.blend_pool_address, &config.asset)?;
            let price_per_share = if reserves.total_shares > 0 {
                (total_balance * SCALAR_9) / reserves.total_shares
            } else {
                SCALAR_9
            };
            
            reserves.price_per_share = price_per_share;
            reserves::set_reserves(&e, &reserves);
            
            // Emit harvest event
            event::HarvestEvent {
                amount: swapped_amount,
                from: from,
                price_per_share: price_per_share,
            }.publish(&e);
        }
        
        Ok(())
    }

    fn balance(e: Env) -> Result<i128, StrategyError> {
        check_initialized(&e)?;
        
        let config = storage::get_config(&e);
        blend_pool::get_balance(&e, &config.blend_pool_address, &config.asset)
    }
}
```

#### **2. Blend Pool Integration**

The `blend_pool.rs` module handles all interactions with the Blend protocol:

```rust
use soroban_sdk::{Address, Env};
use crate::StrategyError;

// Supply assets to Blend pool
pub fn supply(e: &Env, pool_address: &Address, asset: &Address, amount: i128) -> Result<i128, StrategyError> {
    // Implementation for supplying assets to Blend
    // Returns the number of Blend pool shares received
}

// Withdraw assets from Blend pool
pub fn withdraw(e: &Env, pool_address: &Address, asset: &Address, shares: i128) -> Result<i128, StrategyError> {
    // Implementation for withdrawing assets from Blend
    // Returns the amount of underlying assets received
}

// Claim BLND rewards
pub fn claim_rewards(e: &Env, pool_address: &Address) -> Result<i128, StrategyError> {
    // Implementation for claiming BLND rewards
    // Returns the amount of BLND tokens claimed
}

// Get current balance in Blend pool
pub fn get_balance(e: &Env, pool_address: &Address, asset: &Address) -> Result<i128, StrategyError> {
    // Implementation for getting current balance
    // Returns the total balance of underlying assets
}
```

#### **3. Soroswap Integration for Reward Swapping**

The `soroswap.rs` module handles swapping BLND rewards back to the underlying asset:

```rust
use soroban_sdk::{Address, Env};
use crate::StrategyError;

pub fn swap_blnd_for_asset(e: &Env, blnd_amount: i128, target_asset: &Address) -> Result<i128, StrategyError> {
    // Implementation for swapping BLND tokens to target asset using Soroswap
    // Returns the amount of target asset received
}
```

### **Integration with DeFindex Vault**

Once the Blend Strategy is deployed, it can be integrated with a DeFindex Vault:

1. **Deploy the Blend Strategy** with the appropriate Blend pool address
2. **Add the strategy to your vault** using the vault's `add_strategy` function
3. **Set investment allocations** to direct deposits to the Blend strategy
4. **Configure harvesting** to regularly compound rewards

### **Benefits of the Blend Strategy**

1. **Automated Lending**: Automatically lends assets to Blend protocol for interest
2. **Reward Compounding**: Claims and compounds BLND rewards automatically
3. **Standardized Interface**: Works seamlessly with any DeFindex vault
4. **Risk Management**: Built-in error handling and safety checks

---

## Blend Capital Integration

### **Understanding Blend Capital in DeFindex Context**

Blend Capital serves as one of the primary DeFi protocols that DeFindex strategies can leverage. The integration allows DeFindex vaults to:

1. **Automatically lend assets** to Blend pools for yield generation
2. **Earn BLND token rewards** through protocol participation
3. **Compound returns** by automatically reinvesting rewards
4. **Diversify risk** by spreading funds across multiple Blend pools

### **How Blend Integration Works**

#### **Step 1: Strategy Deployment**

When deploying a Blend strategy, you need to specify:

```rust
// Initialize strategy with Blend pool address
let init_args = vec![
    pool_address.into_val(&env),  // Blend pool contract address
    min_amount.into_val(&env),    // Minimum amount for operations
];

let strategy_address = factory.create_strategy(
    asset_address,           // The asset to be managed (e.g., USDC, XLM)
    "BlendStrategy",         // Strategy identifier
    init_args               // Initialization parameters
);
```

#### **Step 2: Vault Configuration**

Configure your DeFindex vault to use the Blend strategy:

```typescript
// Using TypeScript SDK
const vault = new Vault({
    network: SorobanNetwork.PUBLIC,
    contractId: 'YOUR_VAULT_CONTRACT_ID'
});

// Add Blend strategy to vault
await vault.addStrategy(
    blendStrategyAddress,
    allocationPercentage,  // e.g., 50 for 50% allocation
    sorobanContext
);
```

#### **Step 3: Automated Operations**

Once configured, the integration handles:

1. **Automatic Deposits**: User deposits are automatically allocated to Blend
2. **Yield Generation**: Earns interest from Blend lending + BLND rewards
3. **Harvesting**: Periodic compounding of rewards back into the strategy
4. **Withdrawals**: Seamless withdrawals from Blend pools when needed

### **Blend Strategy Configuration Options**

#### **Single Asset Strategies**

For vaults managing a single asset (e.g., USDC-only vault):

```rust
// Simple USDC strategy configuration
let config = BlendStrategyConfig {
    asset: usdc_address,
    blend_pool: usdc_blend_pool_address,
    harvest_threshold: 1_000_000, // Minimum BLND to trigger harvest (in stroops)
    slippage_tolerance: 500,       // 5% slippage tolerance for swaps
};
```

#### **Multi-Asset Strategies**

For vaults managing multiple assets:

```rust
// Multi-asset strategy supporting USDC and XLM
let multi_config = MultiAssetBlendConfig {
    assets: vec![usdc_address, xlm_address],
    blend_pools: vec![usdc_pool_address, xlm_pool_address],
    allocation_weights: vec![70, 30], // 70% USDC, 30% XLM
};
```

### **Blend Pool Selection Criteria**

When choosing Blend pools for your strategy:

1. **Liquidity**: Ensure the pool has sufficient liquidity for your expected volume
2. **Interest Rates**: Compare lending rates across different pools
3. **BLND Rewards**: Consider pools with higher BLND emission rates
4. **Risk Assessment**: Evaluate the pool's collateralization ratio and risk parameters

### **Monitoring Blend Strategy Performance**

#### **Key Metrics to Track**

```typescript
// Get strategy performance metrics
const strategyMetrics = await vault.getStrategyMetrics(blendStrategyAddress);

console.log('Metrics:', {
    totalDeposited: strategyMetrics.totalDeposited,
    currentBalance: strategyMetrics.currentBalance,
    apy: strategyMetrics.apy,
    blndRewardsEarned: strategyMetrics.blndRewardsEarned,
    lastHarvestTime: strategyMetrics.lastHarvestTime
});
```

#### **APY Calculation for Blend Strategies**

The APY calculation includes both lending interest and BLND rewards:

```typescript
// Calculate total APY including BLND rewards
function calculateBlendAPY(
    lendingAPR: number,
    blndRewardsAPR: number,
    compoundingFrequency: number = 365
): number {
    const totalAPR = lendingAPR + blndRewardsAPR;
    return Math.pow(1 + totalAPR / compoundingFrequency, compoundingFrequency) - 1;
}

// Example calculation
const lendingAPR = 0.08;    // 8% from lending
const blndAPR = 0.05;       // 5% from BLND rewards
const totalAPY = calculateBlendAPY(lendingAPR, blndAPR);
console.log(`Total APY: ${(totalAPY * 100).toFixed(2)}%`);
```

### **Advanced Blend Integration Features**

#### **Dynamic Pool Switching**

For advanced strategies, you can implement dynamic pool switching:

```rust
// Automatically switch to higher-yielding Blend pools
pub fn optimize_pool_allocation(e: &Env) -> Result<(), StrategyError> {
    let current_pools = get_active_pools(&e);
    let best_pool = find_highest_yield_pool(&e, &current_pools)?;
    
    if should_switch_pool(&e, &best_pool) {
        migrate_to_pool(&e, &best_pool)?;
    }
    
    Ok(())
}
```

#### **Risk Management**

Implement risk management features:

```rust
// Risk management parameters
pub struct RiskConfig {
    max_allocation_per_pool: i128,    // Maximum amount per pool
    min_collateral_ratio: i128,       // Minimum safe collateral ratio
    emergency_withdrawal_threshold: i128, // Trigger for emergency withdrawal
}

// Monitor pool health
pub fn check_pool_health(e: &Env, pool_address: &Address) -> Result<bool, StrategyError> {
    let pool_info = blend_pool::get_pool_info(e, pool_address)?;
    
    // Check if pool is healthy based on our criteria
    Ok(pool_info.collateral_ratio > MIN_SAFE_RATIO &&
       pool_info.liquidity > MIN_LIQUIDITY_THRESHOLD)
}
```

### **Integration Benefits**

1. **Higher Yields**: Combine lending interest with BLND reward tokens
2. **Automated Management**: No manual intervention required for optimal performance
3. **Risk Diversification**: Spread risk across multiple Blend pools
4. **Composability**: Easily combine with other DeFi strategies
5. **Transparency**: All operations are on-chain and auditable

### **Best Practices for Blend Integration**

1. **Regular Harvesting**: Set up automated harvesting for optimal compounding
2. **Pool Monitoring**: Monitor pool health and performance metrics
3. **Slippage Management**: Set appropriate slippage tolerances for reward swaps
4. **Emergency Procedures**: Implement emergency withdrawal mechanisms
5. **Gas Optimization**: Batch operations when possible to reduce transaction costs

---

## User Guide & FAQ

### Users Documentation Structure

The users section provides comprehensive information for end users:

- [About Us](users/about-us.md)
- [General/FAQ](users/general-faq/README.md)
  - [Concepts](users/general-faq/01-concepts.md)
  - [Additional Resources](users/general-faq/additional-resources.md)

### Concepts

These are some concepts to understand the DeFindex protocol:

* **Rebalancing:** Rebalancing involves changing the allocation of funds between strategies of a DeFindex Vault. For example, a vault with 50% in two strategies could change to 80% and 20%, respectively.

* **Shares** or **dfTokens:** Shares are fungible tokens issued to users upon depositing assets into a specific DeFindex Vault. They represent a proportional share of the total assets managed by the DeFindex Vault. Users can burn shares to withdraw their underlying assets, which might be liquidated based on current protocol strategies.

* **Automated Market Makers (AMM):** AMMs are decentralized exchanges that use algorithms to set prices and facilitate trading. In DeFindex, AMM LP tokens represent liquidity provision in various trading pairs. Users can earn yields from trading fees and token incentives by holding or staking these LP tokens.

  Example: [Soroswap.Finance](https://soroswap.finance).

* **Lending Platforms:** Lending platforms allow users to deposit assets in exchange for earning interest. DeFindex incorporates lending strategies to diversify asset allocation and maximize returns. Assets deposited in DeFindex can be lent out to earn additional yield.

  Example: [Blend Capital](https://blend.capital).

* **Autocompounding:** Autocompounding is the process of reinvesting rewards automatically into the same strategy. This allows for changing from APR to APY! This allows for continuous growth of the investment without the need for manual intervention. Let's see an example:

  If a user deposits 100 USDC in a strategy with 30% APR, after one year the user will have 130 USDC. However, if the user reinvests the rewards every day, she will get more! Let's see how this works:

  1. A 30% APR is 0.082191781% per day. Because daily return is APR/365 = 0.082191781%
  2. If the user reinvests the rewards every day, after one year the user will have ~135 USDC. Because $$(1 + 0.00082191781)^{365} = 1,349692488$$ Meaning that instead of 30% APR, the user will have 34.96% APY.

  This shows how powerful the autocompounding is!

* **Farming:** Farming is the process of earning rewards by staking assets in DeFi protocols.
* **Harvesting:** Harvesting is the process of collecting the rewards earned by the strategy.

---

## Troubleshooting

This guide provides solutions and explanations for common issues encountered when using the DeFindex .NET SDK and interacting with DeFindex smart contracts on Soroban. It covers transaction failures, contract error codes, environment setup, and frequently asked questions.

### Error Log Debugging Example

Consider the following error log from a `withdraw` transaction:

```
Event log (newest first):
  0: [Diagnostic Event] contract:CBDZYJVQJQT7QJ7ZTMGNGZ7RR3DF32LERLZ26A2HLW5FNJ4OOZCLI3OG, topics:[error, Error(Contract, #160)], data:"escalating error to VM trap from failed host function call: fail_with_error"
  1: [Diagnostic Event] contract:CBDZYJVQJQT7QJ7ZTMGNGZ7RR3DF32LERLZ26A2HLW5FNJ4OOZCLI3OG, topics:[error, Error(Contract, #160)], data:["failing with contract error", 160]
  2: [Contract Event] contract:CBDZYJVQJQT7QJ7ZTMGNGZ7RR3DF32LERLZ26A2HLW5FNJ4OOZCLI3OG, topics:[burn, GBI6SIGPSKXTBLXGSAFT2TN5DYFBHIJXKO7IGGQTR7DKO2ANWILGXIDA], data:9999563
  11: [Diagnostic Event] topics:[fn_call, CBDZYJVQJQT7QJ7ZTMGNGZ7RR3DF32LERLZ26A2HLW5FNJ4OOZCLI3OG, withdraw], data:[9999563, [10000065], GBI6SIGPSKXTBLXGSAFT2TN5DYFBHIJXKO7IGGQTR7DKO2ANWILGXIDA]
```

**Breakdown:**

1. **Identify the Error:**
   - Events `0` and `1` indicate the error: `Error(Contract, #160)`.
   - Error code: `160` (InsufficientOutputAmount)

2. **Understand the Context:**
   - Event `0`: The contract explicitly triggered an error.
   - Event `1`: Confirms the contract error code is 160.

3. **Determine Function Arguments:**
   - Event `11` shows the `withdraw` function call and its arguments:
     - `9999563`: `withdraw_shares` (number of shares to burn)
     - `[10000065]`: `min_amounts_out` (minimum expected output amount)
     - `GBI6SIGPSKXTBLXGSAFT2TN5DYFBHIJXKO7IGGQTR7DKO2ANWILGXIDA`: `to` (recipient address)

4. **Interpret the Error in Context:**
   - The `withdraw` transaction failed because the vault could not provide at least 10000065 stroops of the underlying asset when burning 9999563 shares.

### Common Transaction Errors and Their Meanings

The DeFindex Vault contract may return specific error codes when a transaction fails. Below are some of the most common errors, their meanings, and suggested solutions:

| Error Code | Error Name | Description | Solution/Tip |
|------------|------------|-------------|--------------|
| 115 | MissingInstructionData | Required instruction data is missing. | Verify all required parameters are provided for the operation. |
| 119 | WrongInvestmentLength | The investment allocation array length is incorrect. | Check that investment allocations match the number of strategies/assets. |
| 160 | InsufficientOutputAmount | The output amount is less than the required minimum. | Lower your minimums or check vault liquidity before retrying. |
| 161 | ExcessiveInputAmount | The input amount exceeds allowed limits. | Reduce the input amount to within allowed limits. |

For a full list of contract errors, see the `error.rs` file in the contract source code.

### Step-by-Step Debugging Guide

#### 1. Check Environment Variables
- Ensure all required environment variables (e.g., `MAINNET_RPC_URL`) are set correctly.
- Example (.env):
  ```dotenv
  MAINNET_RPC_URL="https://soroban-mainnet.stellar.org"
  ```

#### 2. Validate Network and Contract Deployment
- Confirm you are connected to the correct network (testnet/mainnet).
- Verify the contract address is correct and the contract is deployed.

#### 3. Simulate Transactions Before Sending
- Use the SDK's simulation methods to check for errors before submitting transactions.
- Review simulation results for error codes or failed preconditions.

#### 4. Handle Transaction Failures
- If a transaction fails, inspect the error code returned.
- Refer to the table above to interpret the error and apply the suggested fix.

#### 5. Check Parameter Types and Lengths
- Ensure all parameters (amounts, addresses, etc.) are of the correct type and length.
- For multi-asset vaults, input arrays must match the number of assets.

#### 6. Review Contract and SDK Versions
- Make sure you are using compatible versions of the SDK and smart contracts.

### Frequently Asked Questions (FAQ)

**Q: My transaction fails with `WrongAmountsLength` (112). What does this mean?**
- A: The number of amounts you provided does not match the number of assets in the vault