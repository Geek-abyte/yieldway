# Soroswap Finance - Complete Documentation

*Compiled on July 20, 2025*

This document contains the complete Soroswap Finance documentation compiled from all source markdown files.

---

## Table of Contents

1. [Welcome to Soroswap Finance](#welcome-to-soroswap-finance)
2. [What is Soroswap Finance?](#what-is-soroswap-finance?)
3. [Getting Started](#getting-started)
4. [Wallet Setup and Connection](#wallet-setup-and-connection)
5. [How to Swap](#how-to-swap)
6. [Provide Liquidity](#provide-liquidity)
7. [How the Aggregator Works](#how-the-aggregator-works)
8. [Introduction to Soroswap Tokens](#introduction-to-soroswap-tokens)
9. [Adding Tokens to Your Wallet](#adding-tokens-to-your-wallet)
10. [Liquidity Management on Soroswap](#liquidity-management-on-soroswap)
11. [Bridging Tokens to Stellar Blockchain](#bridging-tokens-to-stellar-blockchain)
12. [Core Concepts](#core-concepts)
13. [Automated Market Maker (AMM)](#automated-market-maker-amm)
14. [Liquidity Pools](#liquidity-pools)
15. [Swap Mechanism](#swap-mechanism)
16. [Fees](#fees)
17. [Slippage](#slippage)
18. [Router](#router)
19. [SDEX (Stellar Decentralized Exchange)](#sdex-stellar-decentralized-exchange)
20. [Aggregator Concept](#aggregator-concept)
21. [Bridge](#bridge)
22. [Trustlines](#trustlines)
23. [Oracles](#oracles)
24. [Flash Swaps](#flash-swaps)
25. [Ecosystem Participants](#ecosystem-participants)
26. [Advanced Topics](#advanced-topics)
27. [Pricing Mechanisms](#pricing-mechanisms)
28. [Understanding Returns](#understanding-returns)
29. [Security Considerations](#security-considerations)
30. [Research](#research)
31. [Soroswap AMM Protocol](#soroswap-amm-protocol)
32. [How Soroswap AMM Works](#how-soroswap-amm-works)
33. [AMM Audits](#amm-audits)
34. [Glossary](#glossary)
35. [Technical Reference](#technical-reference)
36. [Smart Contracts Overview](#smart-contracts-overview)
37. [SoroswapPair Contract](#soroswappair-contract)
38. [SoroswapFactory Contract](#soroswapfactory-contract)
39. [SoroswapRouter Contract](#soroswaprouter-contract)
40. [SoroswapLibrary Contract](#soroswaplibrary-contract)
41. [Deployed Addresses](#deployed-addresses)
42. [Error Codes](#error-codes)
43. [Design Decisions](#design-decisions)
44. [Using Soroswap with TypeScript](#using-soroswap-with-typescript)
45. [Smart Contract Integration](#smart-contract-integration)
46. [Soroswap vs UniswapV2](#soroswap-vs-uniswapv2)
47. [SoroswapPair vs UniswapV2Pair](#soroswappair-vs-uniswapv2pair)
48. [SoroswapRouter vs UniswapV2Router](#soroswaprouter-vs-uniswapv2router)
49. [SoroswapLibrary vs UniswapV2Library](#soroswaplibrary-vs-uniswapv2library)
50. [Deploy Soroswap Yourself](#deploy-soroswap-yourself)
51. [Environment Setup](#environment-setup)
52. [Experiment with Pair Contract](#experiment-with-pair-contract)
53. [Experiment with Factory Contract](#experiment-with-factory-contract)
54. [Deployments](#deployments)
55. [Using the Soroswap Testnet](#using-the-soroswap-testnet)
56. [Soroswap Aggregator](#soroswap-aggregator)
57. [Supported AMMs](#supported-amms)
58. [Aggregator Audits](#aggregator-audits)
59. [Aggregator Disclaimer](#aggregator-disclaimer)
60. [Aggregator Technical Reference](#aggregator-technical-reference)
61. [How Aggregator Works](#how-aggregator-works)
62. [Aggregator Design](#aggregator-design)
63. [Aggregator Technical Overview](#aggregator-technical-overview)
64. [Aggregator Operation](#aggregator-operation)
65. [Aggregator Smart Contracts](#aggregator-smart-contracts)
66. [SoroswapAggregator Contract](#soroswapaggregator-contract)
67. [Adapter Trait](#adapter-trait)
68. [SoroswapAdapter Contract](#soroswapadapter-contract)
69. [Aggregator Inspirations](#aggregator-inspirations)
70. [1inch Inspiration](#1inch-inspiration)
71. [Other AMMs in Soroban](#other-amms-in-soroban)
72. [Phoenix AMM](#phoenix-amm)
73. [Soroswap API](#soroswap-api)
74. [Optimal Route API](#optimal-route-api)
75. [Tutorials Overview](#tutorials-overview)
76. [Soroswap Testnet Overview](#soroswap-testnet-overview)
77. [Installing Freighter Wallet](#installing-freighter-wallet)
78. [Soroswap Interface Sections](#soroswap-interface-sections)
79. [Adding Liquidity Tutorial](#adding-liquidity-tutorial)
80. [Swap Tutorial](#swap-tutorial)
81. [Remove Liquidity Tutorial](#remove-liquidity-tutorial)
82. [Bridge Tutorial](#bridge-tutorial)
83. [Tutorial Conclusions](#tutorial-conclusions)
84. [Using Stellar Classic Assets](#using-stellar-classic-assets)
85. [Wrapping Stellar Classic Assets](#wrapping-stellar-classic-assets)
86. [Swap Stellar Classic Assets](#swap-stellar-classic-assets)
87. [Test Stellar Assets in Testnet](#test-stellar-assets-in-testnet)
88. [Import Stellar Classic Assets](#import-stellar-classic-assets)
89. [Partnerships](#partnerships)
90. [Mercury and SubQuery Collaboration](#mercury-and-subquery-collaboration)
91. [Business Partnerships](#business-partnerships)
92. [Support & Resources](#support--resources)
93. [About Us](#about-us)
94. [General FAQ](#general-faq)
95. [Additional Resources](#additional-resources)
96. [Bridges](#bridges)

---

# Welcome to Soroswap Finance

[Soroswap.Finance ](./)is the first DEX and exchange aggregator built on [Stellar](https://stellar.org), powered by smart contracts on [Soroban](https://stellar.org/soroban).\
\
If you’re new here, we recommend starting with the [**Getting Started**](https://docs.soroswap.finance/readme/getting-started) section, and then reading [**What is Soroswap Finance?**](https://docs.soroswap.finance/readme/what-is-soroswap-finance) for a full overview of how the platform works.

Soroswap operates as:

* 🌀 **An Automated Market Maker (AMM)** via [**Soroswap AMM**](https://docs.soroswap.finance/01-protocol-overview) for direct token swaps and liquidity provisioning
* 🧠 **An AMM Aggregator** via [**Soroswap Aggregator**](https://docs.soroswap.finance/soroswap-aggregator), optimizing trades across multiple protocols to secure the best execution

Together, these components deliver a powerful, decentralized trading experience on the Soroban smart contract platform.\
\

---

# What is Soroswap Finance?

[Soroswap.Finance](../) is an open-source protocol designed for liquidity provision and token trading on the Soroban blockchain. It operates without the need for intermediaries, ensuring a secure, transparent, and efficient trading environment. The protocol is immutable and built to resist censorship. Development of Soroswap.Finance and its interface is managed by [PaltaLabs.](https://paltalabs.io)

<figure><img src="../.gitbook/assets/Home.png" alt=""><figcaption></figcaption></figure>

Soroswap.Finance includes:

* [**Soroswap AMM**:](https://docs.soroswap.finance/01-protocol-overview) An Automated Market Maker that facilitates token swaps and liquidity provision.
* [**Soroswap Aggregator**:](https://docs.soroswap.finance/soroswap-aggregator) An AMM Aggregator that optimizes trading routes across various liquidity pools.

### How to Use Soroswap.Finance

To interact with [Soroswap.Finance](../), you can mint test tokens, create [liquidity pools](https://docs.soroswap.finance/01-concepts/02-pools), [provide liquidity](https://docs.soroswap.finance/05-tutorial/04-adding-liquidity), or [swap tokens](https://docs.soroswap.finance/05-tutorial/05-doing-swap) using the Soroswap Interface. Connect your [Freighter wallet ](https://docs.soroswap.finance/05-tutorial/02-installing-freighter)to perform these actions. Note that transactions on Soroban require Lumens (XLM), so ensure [you have test ](https://docs.soroswap.finance/05-tutorial/01-soroswap-testnet-overviews)Lumens, which can be obtained from Friendbot.

### How Soroswap.Finance Works

Soroswap.Finance functions as an Automated Market Maker (AMM) through a network of smart contracts that standardize liquidity pool creation, liquidity provision, and asset swapping.

* **Liquidity Pools**: Each pool contains two assets. The pool’s reserves and pricing are managed dynamically by the protocol, updating with each trade.
* **Trading**: Unlike traditional exchanges, Soroswap does not use a central order book or private matching engines. Instead, reserves are automatically rebalanced, allowing continuous trading without the need for counterparties.

For more detailed information, refer to the [**Concepts**](https://docs.soroswap.finance/01-concepts) and [**Getting Started**.](https://docs.soroswap.finance/readme/getting-started)

---

# Getting Started

## <sup>What do you need?</sup>

* A **wallet compatible with Stellar/Soroban**
* Access to the [Soroswap app](https://soroswap.finance/)
* Make your first **token swap** using the AMM
* &#x20;To try the **Aggregator** it automatically finds the best price across multiple liquidity pools&#x20;

#### 🔐 Supported Wallets

Thanks to the `stellar-wallets-kit` library, Soroswap Finance supports:

* [**Freighter**](https://www.freighter.app/)
* [**xBull** ](https://xbull.app/)
* [**Albedo**](https://albedo.link/)
* [**Rabet**](https://rabet.io/download)
* [**Lobstr**](https://lobstr.co/)
* [**Hana Wallet**](https://www.hanawallet.io/)
* [**Hot Wallet**](https://hot-labs.org/)

The app automatically detects your available wallets and shows a simple UI to select and connect one. No extra configuration is needed.

#### 🔄 How to connect?

1. Go to [soroswap.finance](https://soroswap.finance/)
2. Click **“**[**Connect Wallet**](choosing-a-wallet.md)**”**
3. Choose your preferred wallet (e.g., Freighter or **Lobstr**)
4. Approve the connection
5. Done! You’re ready to start swapping or providing liquidity

---

# Wallet Setup and Connection

### What to Look For in a Wallet

* **Stellar asset support**: Must handle native XLM and custom tokens (stablecoins, NFTs, etc.).
* **Clean UI**: Easy to use on browser, desktop, or mobile.
* **Non-custodial**: You retain full control of your private keys.
* **Backup & recovery options**: For secure account restoration.
* **dApp compatibility**: Must work with Soroban-based contracts.
* **Multi-account support**: Manage multiple addresses from a single interface.

### ✅ Compatible Wallets with Soroswap.Finance

These wallets are fully integrated via [`stellar-wallets-kit`](https://github.com/paltalabs/soroban-react-stellar-wallets-kit) and work seamlessly with the Soroswap app.

| Wallet                                        | Type                       | Best for                  | Key Features                                      |
| --------------------------------------------- | -------------------------- | ------------------------- | ------------------------------------------------- |
| [**Freighter**](https://www.freighter.app/)   | Browser extension, web     | Web users & dApps         | Fast, non-custodial, multi-account support        |
| [**xBull**](https://xbull.app/)               | Web, mobile, extension     | Advanced users, traders   | Multi-asset, built-in swap, open source           |
| [**Hana Wallet**](https://www.hanawallet.io/) | Mobile, web                | Beginners & privacy-first | Simple UI, multi-chain, Stellar NFTs              |
| [**Lobstr**](https://lobstr.co/)              | Mobile, web                | Everyday use              | Friendly UI, social payments, widely used         |
| [**Rabet**](https://rabet.io/download)        | Extension, desktop, mobile | Desktop-first new users   | Lightweight, intuitive, good for dApp interaction |
| [**Albedo**](https://albedo.link/)            | Web (redirect)             | Quick signing             | No install needed, fast transaction authorization |
| [**HOT Wallet**](https://hot-labs.org/)       | Telegram mini app          | Multi-chain web3 users    | Non-custodial, $HOT token mining, EVM support     |

> **Quick Recommendations**\ <sup>- Using Soroswap in the browser? → Go with</sup> <sup></sup><sup>**Freighter**</sup><sup>,</sup> <sup></sup><sup>**Rabet**</sup><sup>, or</sup> <sup></sup><sup>**xBull**</sup>\ <sup>- Prefer mobile? → Try</sup> <sup></sup><sup>**Lobstr**</sup><sup>,</sup> <sup></sup><sup>**Hana**</sup><sup>, or</sup> <sup></sup><sup>**HOT Wallet**</sup>\ <sup>- Need fast signing with no setup? → Use</sup> <sup></sup><sup>**Albedo**</sup>

### 🌐 Connecting to the Stellar Network

Connecting your wallet to Stellar is required to interact with tokens, perform swaps, and use Soroban dApps.

### [Choosing the Network](https://developers.stellar.org/docs/learn/fundamentals/networks)

* **Mainnet**: For real transactions and assets.\
  Passphrase: `Public Global Stellar Network ; September 2015`
* **Testnet**: For development and testing (used with Soroswap test version).\
  Passphrase: `Test SDF Network ; December 2014`

> To learn how to use  [Soroswap Testnet Overview](https://docs.soroswap.finance/05-tutorial/01-soroswap-testnet-overviews).

### Configuring Your Wallet

* **Select network**: Most wallets allow switching between Mainnet and Testnet in settings.
* **Enter** [**passphrase**](https://developers.stellar.org/docs/networks): Required by some wallets to connect correctly.
* **(Optional)** [**Set custom Horizon node**](https://developers.stellar.org/docs/data/horizon/horizon-providers#ecosystem-horizon-providers): Advanced users can configure a custom Horizon URL (e.g., ANKR node).

####

---

# How to Swap

The **Swap** section allows you to exchange one asset for another using liquidity provided by **Soroswap AMM** or, when available, optimized routes through the **Soroswap Aggregator**.

\
**Select the assets**\
Choose the asset you want to swap _from_ and the asset you want to receive. You can search or pick from the available list.

<figure><img src="../../.gitbook/assets/Grabación de pantalla 2025-04-25 a las 12.43.52.gif" alt=""><figcaption></figcaption></figure>

**Enter the amount**\
Input how much you want to swap. The app will automatically estimate how much you’ll receive.

<figure><img src="../../.gitbook/assets/Captura de pantalla 2025-04-25 a las 12.52.39.png" alt=""><figcaption></figcaption></figure>

**Best route via Aggregator (automatic)**\
If a better price is available by splitting the trade across multiple AMMs (e.g. Phoenix  AMM or Soroswap AMM), the **Aggregator** will route the swap automatically—no manual setup needed.

<figure><img src="../../.gitbook/assets/Aggregator.png" alt=""><figcaption></figcaption></figure>

**Approve trustline (if needed)**\
If it’s your first time using the asset, you’ll need to sign a trustline to authorize it in your wallet.

**Confirm the swap**\
Review the swap details and sign the transaction in your wallet.

**Check the result**\
Once confirmed, your wallet balance will update. You can also view the transaction on [Stellar.Expert](https://stellar.expert/) or [StellarChain](https://stellarchain.io/).

#### ⚙️ Adjusting slippage tolerance

You can control how much price variation you’re willing to accept:

* Open the **Settings** panel
* Select a predefined slippage value (e.g. 0.5%) or enter a custom one
* Click **Save** to apply changes

> 📘 Need a full walkthrough with screenshots and tips? Follow the [Swap Tutorial](https://docs.soroswap.finance/05-tutorial/05-doing-swap)

***

🔄 **Next step:** Provide Liquidity\
🧠 **Learn more:** How the Aggregator Works

---

# Provide Liquidity

Providing liquidity on **Soroswap** allows users to earn rewards by depositing two assets into a liquidity pool. Liquidity providers (LPs) facilitate asset swaps for other users, and in return, they earn a share of the trading fees collected by the protocol.

### &#x20;How to Provide Liquidity

1. **Access the app**\
   Go to [soroswap.finance](https://soroswap.finance/) and click **Launch App**.
2. **Connect your wallet**\
   Use a Stellar/Soroban-compatible wallet. Make sure you have enough XLM for transaction fees.
3. **Navigate to the Liquidity section**\
   In the app, select **Liquidity** to view existing pools

<figure><img src="../../.gitbook/assets/Grabación de pantalla 2025-04-28 a las 13.30.30.gif" alt=""><figcaption></figcaption></figure>

4. **Deposit both assets**

* Enter the amounts of each asset you want to deposit.
* The ratio must match the current pool price (or, when creating a new pool, you set the initial price).

5. **Receive pool tokens**\
   After a successful deposit, you’ll receive pool tokens that represent your share of the pool’s liquidity.

### Key Notes

* **Initial liquidity providers** set the initial price of a new pool.
* **All liquidity pools follow the formula**: `x * y = k`, where `k` is constant.
* **Removing liquidity**: You can withdraw your assets at any time by burning your pool tokens, receiving your share of the assets plus accumulated fees.

***

> 📘 Need a full walkthrough? Check\
> &#x20;[Adding Liquidity](https://docs.soroswap.finance/05-tutorial/04-adding-liquidity) l [Remove Liquidity](https://docs.soroswap.finance/05-tutorial/06-remove-liquidity)

---

# How the Aggregator Works

**The** [**Soroswap Aggregator**](https://docs.soroswap.finance/soroswap-aggregator) is a smart contract that optimally resolves each swap by finding **the best available price at the moment**, using **an intelligent distribution** across the [supported AMMs](https://docs.soroswap.finance/soroswap-aggregator/supported-amms).



### How It Works

* **Optimal Execution**: The Aggregator calculates and executes swaps across different AMMs to always find the best price.
* **Intelligent Routing**: Each swap is automatically distributed across one or more protocols according to available liquidity and exchange rates.
* **Fully On-Chain**: No intermediaries, no off-chain steps — the entire process is handled by smart contracts on Soroban.

<figure><img src="../../.gitbook/assets/Captura de pantalla 2025-04-28 a las 15.23.18.png" alt=""><figcaption></figcaption></figure>

### Supported AMMs

Currently, the Soroswap Aggregator sources liquidity from:

| AMM                      | Status      | Description                                                                             |
| ------------------------ | ----------- | --------------------------------------------------------------------------------------- |
| **Soroswap.Finance AMM** | Mainnet     | Soroswap's primary protocol on Soroban, offering fast, secure, and low-cost swaps.      |
| **Phoenix Protocol AMM** | Mainnet     | Providing additional liquidity and expanding swap route options.                        |
| **Aqua AMM**             | Coming Soon | Currently in testing. Will add more depth and route diversity to Soroban once deployed. |

> **Note**:\
> [Stellar SDEX ](https://docs.soroswap.finance/01-concepts/sdex)is not integrated as it is incompatible with Soroban smart contracts.\
> The Aggregator works exclusively with Soroban-based protocols.

---

# Introduction to Soroswap Tokens

Soroswap Finance is a decentralized exchange platform that allows users to trade a wide variety of [tokens ](https://developers.stellar.org/docs/tokens/token-interface)quickly, securely, and efficiently. Our platform leverages the power of the Stellar network and the Soroban protocol to provide optimal trading routes and ensure the best rates in the market.

The Soroswap [Token List](https://github.com/soroswap/token-list) is a curated collection of digital assets that have been verified and approved for use within our [AMM (Automated Market Maker) ](https://docs.soroswap.finance/01-concepts/amm)protocol. This list ensures that all transactions conducted through Soroswap are reliable and backed by accurate and transparent information.

<table data-header-hidden><thead><tr><th width="144"></th><th width="198"></th><th></th></tr></thead><tbody><tr><td><strong>Token Name</strong></td><td><strong>Issuer</strong></td><td><strong>Contract</strong></td></tr><tr><td><a href="https://fchain.io/">XRP by Muyu Network (XRP)</a></td><td><code>GBXRPL45NPHCVMFFAYZVUVFFVKSIZ362ZXFP7I2ETNQ3QKZMFLPRDTD5</code></td><td><code>CAAV3AE3VKD2P4TY7LWTQMMJHIJ4WOCZ5ANCIJPC3NRSERKVXNHBU2W7</code></td></tr><tr><td><a href="https://kbtrading.org/">Swiss Franc (XCHF)</a></td><td><code>GDPKQ2TSNJOFSEE7XSUXPWRP27H6GFGLWD7JCHNEYYWQVGFA543EVBVT</code></td><td><code>CACFQEH2USDRGSBYFOVJMX4DMX7HMRYAYOV2IWR7XEX3DD3HYQEWPAAL</code></td></tr><tr><td><a href="https://interstellar.exchange/">Ethereum (ETH)</a></td><td><code>GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P</code></td><td><code>CAH5D34KB7BQ2XXYEUYTBEXK7UZATBP2KHVGSHODHKQXIRTE7IOKI37Q</code></td></tr><tr><td><a href="https://stellarport.io/">Bitcoin (BTC)</a></td><td><code>GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5</code></td><td><code>CBPMFYWP4FFV7PQUYHXJZBXS75EHR6FXYSYEZWH2UM7AUYSKI2Z3PTCG</code></td></tr><tr><td><a href="https://interstellar.exchange/">Bitcoin Cash (BCH)</a></td><td><code>GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P</code></td><td><code>CASVAKL4HL2UYUOHHRX6GPWEVDJJLZGD32RCKSD2ENJ7KF2BOGLFNN7G</code></td></tr><tr><td><a href="https://mobius.network/">Mobius (MOBI)</a></td><td><code>GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH</code></td><td><code>CATHRLMZW3JUIYSXYE4YAI3SBBBQGXYAP674RINGUBQLNFTCZHMI5XZJ</code></td></tr><tr><td><a href="https://aqua.network/">AQUA Token (AQUA)</a></td><td><code>GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA</code></td><td><code>CAUIKL3IYGMERDRUN6YSCLWVAKIFG5Q4YJHUKM4S4NJZQIA3BAS6OJPK</code></td></tr><tr><td><a href="https://stellarnft.io/">Stellar NFT (StellarNFT)</a></td><td><code>GALZZQF5JXHPHGI5A2ZW2EPL76DU4DWSYYGTPLOAMMEQEEECFSSRIOZJ</code></td><td><code>CAWSVMCGBT4YEDH4PK64TZ3IRTXDHZJ6PDSSUARFLKRG2H3MUBLTVQ6C</code></td></tr><tr><td><a href="https://realio.fund/">Realio Token (RIO)</a></td><td><code>GBNLJIYH34UWO5YZFA3A3HD3N76R6DOI33N4JONUOHEEYZYCAYTEJ5AK</code></td><td><code>CB2XLDU74PIXO5DENULX53IIC3DMKGN2UM5IBGMSSI634IAQJ7O3Z3UQ</code></td></tr><tr><td><a href="https://ultracapital.xyz/">yBTC by Ultra Capital (yBTC)</a></td><td><code>GBUVRNH4RW4VLHP4C5MOF46RRIRZLAVHYGX45MVSTKA2F6TMR7E7L6NW</code></td><td><code>CB2XMFB6BDIHFOSFB5IXHDOYV3SI3IXMNIZLPDZHC7ENDCXSBEBZAO2Y</code></td></tr><tr><td><a href="https://connect.clickpesa.com/">Kenya Shilling (KES)</a></td><td><code>GA2MSSZKJOU6RNL3EJKH3S5TB5CDYTFQFWRYFGUJVIN5I6AOIRTLUHTO</code></td><td><code>CBAANNZVSOH6I42ZVVFTVB2JNVSHVBYUDWGGJHB4BLCXARYTNN3ODU3F</code></td></tr><tr><td><a href="https://ixinium.io/">IXINIUM (XXA)</a></td><td><code>GC4HS4CQCZULIOTGLLPGRAAMSBDLFRR6Y7HCUQG66LNQDISXKIXXADIM</code></td><td><code>CBBJTE34KZHJACB2A6OXCRTDDLX4LI7GKYYD6XYJSGMX46BLNAG752HS</code></td></tr><tr><td><a href="https://clpx.finance/">Chilean PESO (CLPX)</a></td><td><code>GDYSPBVZHPQTYMGSYNOHRZQNLB3ZWFVQ2F7EP7YBOLRGD42XIC3QUX5G</code></td><td><code>CBDRPADR3KIBJNUBNRTTO4P7NO5RVPMYKRJB5YCZUZ6B66RKYK324UJY</code></td></tr><tr><td><a href="https://ntokens.com/">Brazilian Real (BRL)</a></td><td><code>GDVKY2GU2DRXWTBEYJJWSFXIGBZV6AZNBVVSUHEPZI54LIS6BA7DVVSP</code></td><td><code>CBF4E5GSTVSITE5Q2ENOTEUQJPBZAU3SBDVLQMSQ7GLBRTSYGUAT722K</code></td></tr><tr><td><a href="https://ultracapital.xyz/">ETH by Ultra Capital (ETH)</a></td><td><code>GBFXOHVAS43OIWNIO7XLRJAHT3BICFEIKOJLZVXNT572MISM4CMGSOCC</code></td><td><code>CBH4M45TQBLDPXOK6L7VYKMEJWFITBOL64BN3WDAIIDT4LNUTWTTOCKF</code></td></tr><tr><td><a href="https://sslx.sl8.online/">SSLX Cassator (SSLX)</a></td><td><code>GBHFGY3ZNEJWLNO4LBUKLYOCEK4V7ENEBJGPRHHX7JU47GWHBREH37UR</code></td><td><code>CBHBD77PWZ3AXPQVYVDBHDKEMVNOR26UZUZHWCB6QC7J5SETQPRUQAS4</code></td></tr><tr><td><a href="https://kbtrading.org/">Bitcoin Lightning (BTCLN)</a></td><td><code>GDPKQ2TSNJOFSEE7XSUXPWRP27H6GFGLWD7JCHNEYYWQVGFA543EVBVT</code></td><td><code>CBHIQPUXLFLC5O44ZJVUTCL5LMZFLVGU5DEIGSYKBSAPFMOGTKOQEPFM</code></td></tr><tr><td><a href="https://interstellar.exchange/">Bitcoin (BTC)</a></td><td><code>GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P</code></td><td><code>CBJ6JFEMRMSGMOT2CUH3JIKW7AOOZW3HMFNBQFEVHHCE76PWEXAQAJDB</code></td></tr><tr><td><a href="https://reflector.network/">Reflector xRF (XRF)</a></td><td><code>GCHI6I3X62ND5XUMWINNNKXS2HPYZWKFQBZZYBSMHJ4MIP2XJXSZTXRF</code></td><td><code>CBLLEW7HD2RWATVSMLAGWM4G3WCHSHDJ25ALP4DI6LULV5TU35N2CIZA</code></td></tr><tr><td><a href="https://stellarport.io/">Ripple (XRP)</a></td><td><code>GBVOL67TMUQBGL4TZYNMY3ZQ5WGQYFPFD5VJRWXR72VA33VFNL225PL5</code></td><td><code>CBPMFYWP4FFV7PQUYHXJZBXS75EHR6FXYSYEZWH2UM7AUYSKI2Z3PTCG</code></td></tr><tr><td><a href="https://script3.io/">YieldBlox (YBX)</a></td><td><code>GBUYYBXWCLT2MOSSHRFCKMEDFOVSCAXNIEW424GLN666OEXHAAWBDYMX</code></td><td><code>CBRP2VD3CZLEQIQZ4JMBXGA5AC2U6JE26YU5CCIOICIZCVWPGBO2QRUB</code></td></tr><tr><td><a href="https://interstellar.exchange/">Ripple (XRP)</a></td><td><code>GCNSGHUCG5VMGLT5RIYYZSO7VQULQKAJ62QA33DBC5PPBSO57LFWVV6P</code></td><td><code>CBSEMU4NLPURIO37O5KNATEIHGY2BTF27PBJH46H5ESRB7MREGWNMYKJ</code></td></tr><tr><td><a href="https://mykobo.co/">EURo Coin (EURC)</a></td><td><code>GAQRF3UGHBT6JYQZ7YSUYCIYWAF4T2SAA5237Q5LIQYJOHHFAWDXZ7NM</code></td><td><code>CBVDRT5474OBUEXF5MJB3UGQ5CG7CKGCAH5M4RV5NBCDJUBZ5OXHJLOU</code></td></tr><tr><td><a href="https://anchormxn.com/">Coin Mex (MXN)</a></td><td><code>GCKIK5F6J4KMKF6MKB5EM67S5CK557EZQ3IAMZM5FFAYST63S3HWXVPE</code></td><td><code>CBVJZDNMOPEEPED3OBY4VLQPQKU4IOCKWACDKXPBO4E6TQI432W66BE5</code></td></tr><tr><td><a href="https://lumenswap.io/">Lumenswap asset (LSP)</a></td><td><code>GAB7STHVD5BDH3EEYXPI3OM7PCS4V443PYB5FNT6CFGJVPDLMKDM24WK</code></td><td><code>CBXE6V454EUYWVQCI4TCSOG4CSNPQ2BLYOTKAKXYFHO3KNVX4CXYCY2T</code></td></tr><tr><td><a href="https://ngnc.online/">NGNC Coin (NGNC)</a></td><td><code>GASBV6W7GGED66MXEVC7YZHTWWYMSVYEY35USF2HJZBLABLYIFQGXZY6</code></td><td><code>CBYFV4W2LTMXYZ3XWFX5BK2BY255DU2DSXNAE4FJ5A5VYUWGIBJDOIGG</code></td></tr><tr><td><a href="https://zioncoin.org.uk/">Zioncoin (Zi)</a></td><td><code>GDBNNE67F54PTUZTCTOQYT5CQZFXA2AX6O5DCA5BVR653OP6KCWGG2Z7</code></td><td><code>CBZCBYTP3TFCT7PCDRPJDQK7UY2R3QA4H6MF2P6XDS5CZNXLPF6S6OPB</code></td></tr><tr><td><a href="https://ultracapital.xyz/">yXLM by Ultra Capital (yXLM)</a></td><td><code>GARDNV3Q7YGT4AKSDF25LT32YSCCW4EV22Y2TV3I2PU2MMXJTEDL5T55</code></td><td><code>CBZVSNVB55ANF24QVJL2KJ2F2VC3YHYB5K6FZVDPYZZU6JTA7R7JLE5</code></td></tr></tbody></table>

---

# Adding Tokens to Your Wallet

### Obtain Asset Information

To add an asset to your Stellar wallet, you need to obtain the following information about the token you wish to add:

1. [**Asset Code**:](https://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/assets#asset-code)
   * **Description**: This is the unique identifier or symbol for the token (e.g., `USDC`).
   * **How to Obtain**: The asset code is typically provided by the token issuer or can be found in the token's official documentation.
2. **Issuer's Public Key**:
   * **Description**: This is the public key of the account that issued the token (e.g., `GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN`).
   * **How to Obtain**: The issuer's public key is usually provided by the token issuer. It can also be found in public Stellar directories such as [StellarExpert](https://stellar.expert/explorer/public) or on the issuer's website.
3. **Additional Details (Optional but Useful)**:
   * **Issuer Domain**: `centre.io`
   * **Issuer URL**: [https://centre.io](https://centre.io/)
   * **Asset Description**: This field can be optional in some wallets but provides additional context about the token.

**Note**: _Ensure that you verify this information from reliable sources to avoid errors or fraud_.

### **Steps to Add the Token to Your Stellar Wallet**

1. **Open Your Stellar Wallet**:
   * [Access your Stellar wallet](https://docs.soroswap.finance/readme/getting-started/choosing-a-wallet) (e.g., [Lobstr Wallet](https://lobstr.co/), [Freighter Wallet](https://www.freighter.app/) , [XBull Wallet](https://xbull.app/), etc.).
2. **Navigate to the Assets or Trustlines Section**:
   * Look for the option to add or manage [trustlines](https://docs.soroswap.finance/01-concepts/trustlines) in your wallet.
3. **Add a New Trustline**:
   * Enter the **Asset Code** (`USDC`).
   * Enter the **Issuer's Public Key** (`GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN`).
   * Complete the transaction to set up the trustline. This usually requires a small fee in XLM (Stellar’s native currency) to establish the trustline.
4. **Verify the Token Addition**:
   * After setting up the trustline, you should be able to see the `USDC` token in your wallet. You can receive tokens of this type through transactions or other forms of deposits.

---

# Liquidity Management on Soroswap

On **Soroswap Finance**, liquidity management is facilitated through **liquidity pools** managed by an [**Automated Market Maker (AMM)**](https://docs.soroswap.finance/01-concepts/amm). This automated approach allows for efficient and continuous asset conversion without the need for a traditional order book. Here’s an overview of how to interact with liquidity pools on Soroswap and get started.

### What is a Liquidity Pool?

**Liquidity pools** on Soroswap enable users to deposit and withdraw assets efficiently. **Automated Market Makers (AMMs)** manage these pools using mathematical formulas to set asset prices and ensure constant liquidity.

For a detailed explanation of liquidity pools, refer to the Definition of [Liquidity Pools.](https://docs.soroswap.finance/01-concepts/02-pools)

### Getting Started with Soroswap Finance

To start using Soroswap Finance, follow these essential steps:

**1. Set Up Your Wallet**

* **Install Freighter Wallet**: Download and install the Freighter browser extension from [Freighter Wallet](https://freighter.app).
* **Set Up Your Account**: Create a keypair or import an existing account using a mnemonic phrase. Then, switch to the Testnet from the network dropdown in Freighter.
* **Get Test XLM:** To cover transaction fees, use the Friendbot to fund your [testnet](https://developers.stellar.org/docs/learn/fundamentals/networks#testnet) account with 10,000 lumens. Just enter your Stellar public address to receive the funds. Check the guide for [Soroswap testnet overviews](https://docs.soroswap.finance/05-tutorial/01-soroswap-testnet-overviews).

**2. Add and Manage Liquidity**

Adding and managing liquidity on Soroswap Finance involves the following steps:

* **Access the Add Liquidity Page**: Go to the relevant section on Soroswap to manage liquidity. Check the [guide for Adding Liquidity for detailed instructions.](https://docs.soroswap.finance/05-tutorial/04-adding-liquidity)
* **Select Tokens**: Choose the tokens you wish to add to the pool. Review the pool information before confirming the transaction.
* **Create a New Liquidity Pool**: When adding liquidity, you may create a new pool. Provide an initial amount of each asset you wish to include. Here’s the key information:
  * **Minting Tokens**: The amount of tokens minted to represent your share in the pool.
  * **Exchange Rate**: The rate between the assets you are depositing into the pool.
  * **Maximum Slippage**: The tolerance for price deviation that can cause the transaction to revert if prices change more than 0.5%.
  * **Pool Share**: Your percentage of ownership in the pool after adding liquidity.
  * **Network Fee**: The fee associated with the transaction.

Once completed, review the details and submit the transaction. You can check the transaction status and hash on [Stellar.Expert](https://stellar.expert) or [StellarChain.io](https://stellarchain.io).

**3. Remove Liquidity**

To adjust your participation or withdraw liquidity from a pool:

* **Access the Remove Liquidity Page**: Navigate to the appropriate section on Soroswap to manage liquidity removal. Refer to [the guide for Removing Liquidity for detailed instructions.](https://docs.soroswap.finance/05-tutorial/06-remove-liquidity)
* **Select the Amount to Withdraw**: Choose the amount of liquidity you wish to withdraw and review the related information before confirming.
* **Complete the Transaction**: Follow the steps provided to withdraw the assets corresponding to your share in the pool.

---

# Bridging Tokens to Stellar Blockchain



---

# Core Concepts

### What you’ll find here

---

# Automated Market Maker (AMM)

#### What is an AMM?

An [**Automated Market Maker (AMM)**](https://developers.stellar.org/docs/learn/encyclopedia/sdex/liquidity-on-stellar-sdex-liquidity-pools#automated-market-makers-amms) is a decentralized protocol that facilitates asset exchanges without relying on a traditional order book. Instead of using buy and sell orders, [AMMs ](https://stellar.org/blog/developers/introducing-automated-market-makers-on-stellar?locale=en)employ mathematical formulas to determine asset prices based on the relative quantities within their liquidity pools.

Soroswap.Finance operates as an AMM with its own [liquidity pools](https://docs.soroswap.finance/01-concepts/02-pools), distinct from other AMMs like Stellar Classic DEX or Phoenix. Soroswap.Finance ensures that asset swaps are managed autonomously and efficiently, maintaining liquidity and price stability through its decentralized framework.

To understand [How Soroswap AMM Works](https://docs.soroswap.finance/01-protocol-overview/01-how-soroswap-works).

---

# Liquidity Pools

Each liquidity pool functions as a market for a specific pair of tokens.

<figure><img src="../.gitbook/assets/Captura de pantalla 2025-04-24 a las 15.07.19.png" alt=""><figcaption></figcaption></figure>

## Introduction

In Soroswap Finance, each liquidity pool acts as a trading venue for a pair of assets. When a pool is initially created, it starts with zero balance for each asset, requiring an initial deposit to facilitate trades. The first liquidity provider sets the initial price by depositing equal values of both assets, aligning with the current market rate. This prevents immediate arbitrage opportunities, which occur if the assets are deposited at a ratio different from the prevailing market price.

Subsequent liquidity providers must deposit assets proportional to the current pool price to prevent their contributions from being arbitraged. If they believe the current price is inaccurate, they can engage in arbitrage to adjust the price to their desired level before adding liquidity, ensuring their assets are valued correctly in the pool.

## Pool tokens

<figure><img src="../.gitbook/assets/Captura de pantalla 2025-04-24 a las 15.09.28.png" alt=""><figcaption></figcaption></figure>

When liquidity is deposited into a Soroswap liquidity pool, unique tokens known as pool tokens are minted and sent to the provider's address. These tokens represent the provider's stake in the pool and are a crucial component of the liquidity provision process. The number of pool tokens a provider receives is proportional to their contribution to the pool's total liquidity.

When seeding a new pool, the initial liquidity provider sets the quantities of the assets, and the relationship between these assets follows the equation (x \cdot y = k), where (x) and (y) are the amounts of each asset, and (k) is a constant that remains constant during the pool's operations.

Every time a trade is executed within the pool, a transaction fee of 0.3% is charged to the sender. This fee is then distributed pro-rata among all liquidity providers (LPs) in the pool, rewarding them for their participation and incentivizing continued liquidity provision.

To withdraw their original assets along with any accrued fees, liquidity providers must "burn" their pool tokens. This process effectively exchanges the tokens for their share of the pool's liquidity, including the proportional allocation of the collected fees.

Pool tokens themselves are tradable assets, providing flexibility to liquidity providers. They can sell, transfer, or utilize these tokens in various ways, offering additional liquidity management options and potential profit opportunities within the decentralized finance ecosystem.

> Learn more with advanced topics:

* [Understanding Returns](04-advanced-topics/03-understanding-returns.md)
* [Fees](01-fees.md)

## Why pools?

Soroswap Finance uses liquidity pools instead of traditional order books to enable decentralized token swaps. Liquidity pools consist of user-provided assets locked in smart contracts, allowing seamless, automated trades without relying on a centralized intermediary. This structure addresses key limitations of order books, such as the need for intermediaries, active management by market makers, and high infrastructure requirements.

Pools in Soroswap operate autonomously, leveraging smart contracts to continuously provide liquidity and execute trades. This design is more suited for decentralized ecosystems where tokens may have low liquidity and anyone can create or trade assets without permission. It simplifies the process, ensures more consistent liquidity, and opens up participation to a wider audience, including those without sophisticated trading tools.

By embracing a pool-based system, Soroswap benefits from the open, trustless, and permissionless nature of blockchain technology, allowing decentralized finance (DeFi) to thrive with minimal friction.

## Developer resources

* To see how to pool tokens in a smart contract read [Providing Liquidity](../01-protocol-overview/03-technical-reference/03-smart-contracts/04-soroswaprouter.md#add_liquidity).

---

# Swap Mechanism

A **swap** is the process of exchanging one Stellar asset for another using liquidity from Soroban-based [**Automated Market Makers (AMMs**](amm.md)**)**. Swaps can be executed directly through the [**Soroswap AMM** ](https://docs.soroswap.finance/01-protocol-overview)or routed via the [**Aggregator**,](https://docs.soroswap.finance/01-concepts/aggregator) which optimally resolves the operation by finding the **best available price at the time** through an **intelligent distribution** across supported AMMs.\
\
👉🏽 [How to Swap](https://docs.soroswap.finance/readme/getting-started/how-to-swap)\
Follow the [Swap Tutorial](https://docs.soroswap.finance/05-tutorial/05-doing-swap)

<figure><img src="../.gitbook/assets/Swap.1.png" alt=""><figcaption></figcaption></figure>

### How does a swap work?

**User selects two assets** – one to sell and one to receive.

1. **Input amount is defined** – the app estimates the output based on current pool conditions.
2. **Router SDK scans available pools** – if the Aggregator is enabled, it calculates the best distribution **`DexDistribution`**.
3. **User confirms the swap** – the smart contract receives the input asset and performs the swap.
4. **User receives the new asset** – if it's the first time, a **trustline** must be signed to accept the asset.

### 📐 Constant Product Formula

Each AMM in Soroswap follows this formula:

```
x * y = k
```

Where:

* `x` = balance of asset A
* `y` = balance of asset B
* `k` = constant product (remains unchanged)

When someone swaps A for B:

* A is deposited into the pool
* B is withdrawn
* The price updates to maintain the balance

This model ensures continuous liquidity.

🔜 **Next:** [Fees](https://docs.soroswap.finance/01-concepts/01-fees)\
🔙 **Previous:** [Liquidity Pools](https://docs.soroswap.finance/01-concepts/02-pools)

---

# Fees

### Liquidity provider fees

There is a **0.3%** fee for swapping tokens. **This fee is split by liquidity providers proportional to their contribution to liquidity reserves.**

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool. Fees are collected by burning liquidity tokens to remove a proportional share of the underlying reserves.

Since fees are added to liquidity pools, the invariant increases at the end of every trade. Within a single transaction, the invariant represents `token0_pool / token1_pool` at the end of the previous transaction.

There are many community-developed tools to determine returns. You can also read more in the docs about how to think about [LP returns](04-advanced-topics/03-understanding-returns.md).

### Protocol Fees

At the moment there are no protocol fees. However, it is possible for a 0.05% fee to be turned on in the future.

More information about a potential future protocol fee can be found [here](https://uniswap.org/blog/uniswap-v2/#path-to-sustainability).

### Protocol Charge Calculation

In the future, it is possible that a protocol-wide charge of 0.05% per trade will take effect. This represents ⅙th (16.6̅%) of the 0.30% fee. The fee is in effect if [feeTo](../01-protocol-overview/03-technical-reference/03-smart-contracts/02-soroswapfactory.md) is not `address(0)` (`0x0000000000000000000000000000000000000000`), indicating that feeTo is the recipient of the charge.

This amount would not affect the fee paid by traders, but would affect the amount received by liquidity providers.

Rather than calculating this charge on swaps, which would significantly increase gas costs for all users, the charge is instead calculated when liquidity is added or removed. See the [whitepaper](../whitepaper.pdf) for more details.

---

# Slippage

**Slippage** is the difference between the expected price of a swap and the actual price at the time of execution. It often occurs due to rapid changes in liquidity or asset demand.

In Soroswap, you can set your slippage tolerance directly from the swap settings menu.

#### What does it mean?

> If the price changes more than the allowed slippage percentage during execution, **the transaction will automatically revert** to protect you from an unfavorable trade.



<figure><img src="../.gitbook/assets/Captura de pantalla 2025-04-29 a las 14.59.47.png" alt=""><figcaption></figcaption></figure>

#### Available options:

* **Auto**: The system automatically selects an appropriate slippage based on current pool liquidity.
* **Custom**: Set your own value (e.g., 1%).

> 🛠 You can find this setting by clicking the **gear icon** in the upper corner of the swap interface.

---

# Router

The [**Router** in Soroswap Finance ](https://github.com/soroswap/soroswap-router-sdk)is a key component of the protocol that facilitates interactions with multiple [**Liquidity Pools**.](https://docs.soroswap.finance/01-concepts/02-pools) Liquidity Pools are always formed between two tokens, creating what are known as **Pairs**. For example, a pool might be between Token A and Token B, forming the pair **A:B**.

### Router Function

The Router allows for swaps between two tokens, even if there is no direct pair between them. This is where the Router's flexibility comes into play. Instead of performing a direct swap between Token A and Token C, the Router can find the best route using one or more intermediate pairs. For example:

* **Direct Route:** If a direct pair **A:C** exists, the Router can perform the swap directly between A and C.
* **Indirect Route:** If no direct pair is available, the Router can use a multi-hop route, such as **A:B** followed by **B:C**.

### How It Works

1. **Retrieve Pools:** The Router first retrieves data on all available pools involving the tokens you wish to swap. This data is sourced from the backend database.
2. **Calculate Routes:** Using the pool data, the Router calculates all possible routes for the swap, considering a maximum number of hops allowed between pairs.
3. **Optimize Route:** The Router breaks down possible routes into segments and calculates the optimal swap for each segment. It then combines these routes and validates which offers the best overall exchange rate.
4. **Execute Swap:** Finally, the Router selects the best route based on the amount of tokens to be received or sent and executes the swap.

### [Router Methods](https://docs.soroswap.finance/soroswap-router-sdk/07-optimal-route/01-soroswap-router-sdk)

The Router provides two main methods:

* **`getPools(tokenIn, tokenOut)`**: Retrieves information on available pools that include the specified tokens.
* **`getBestRoute(tokenIn, tokenOut, TradeType, ...options)`**: Calculates and returns the best route for the swap between the specified tokens, considering trade type and additional options.

### Token Validation

To ensure security, the Router uses a list of known and validated tokens. This prevents the use of malicious tokens in swap routes. Tokens used in a transaction are checked against this list to ensure they are reliable.

---

# SDEX (Stellar Decentralized Exchange)

What is Stellar SDEX, what is the difference with Soroswap.Finance and why it is not aggregated by the Soroswap Aggregator

### What is Stellar SDEX?

[**Stellar SDEX**](https://developers.stellar.org/docs/learn/encyclopedia/sdex) **(Stellar Decentralized Exchange)** is the native decentralized exchange of the Stellar network. It allows users to trade assets directly on the Stellar blockchain through a system of order books. Here’s how it operates:

* **Order Books:** Stellar SDEX uses order books to facilitate trades. Users place buy and sell offers in the order book, which are matched based on price and time priority.
* **Order Types:** Users can create various types of orders, such as market or limit orders. Orders are automatically matched against existing orders in the book.
* **Asset Exchange:** Trades are executed by matching buy and sell orders within the order books. Assets are exchanged directly between users without needing an intermediary.
* **Path Payments:** If there is no direct order for an asset pair, Stellar allows path payments to find the best route through multiple assets to complete the trade.

| Feature                    | Stellar SDEX                                                                                                                                          | Soroswap.Finance                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Exchange Model**         | [Order book](https://developers.stellar.org/docs/learn/encyclopedia/sdex/liquidity-on-stellar-sdex-liquidity-pools#order-books) (buy and sell orders) | [Automated Market Makers (AMMs)](https://docs.soroswap.finance/01-protocol-overview/01-how-soroswap-works)                       |
| **Pricing Mechanism**      | Based on matching orders in the order book                                                                                                            | Based on mathematical formulas[ (e.g., x \* y = k)](https://docs.soroswap.finance/01-protocol-overview/04-glossary#x-y-k)        |
| **Liquidity Provision**    | Users place orders in the order book                                                                                                                  | Users deposit assets into liquidity pools                                                                                        |
| **Transaction Execution**  | Executes orders directly based on price-time priority                                                                                                 | Executes transactions through AMM, adjusting prices according to reserves                                                        |
| **Order Types**            | Limit and passive orders                                                                                                                              | Interactions with AMM, no traditional limit orders                                                                               |
| **Aggregator Integration** | Generally not integrated into AMM aggregators                                                                                                         | Integrated into [aggregators that support AMMs](https://docs.soroswap.finance/soroswap-aggregator/how-soroswap-aggregator-works) |

---

# Aggregator Concept

An **Aggregator** is a smart contract that allows users to execute asset swaps using **multiple protocols as sources of liquidity simultaneously**. In its operation, the Aggregator coordinates and distributes transactions across different protocols to optimize the outcomes of the swaps.

### Underlying Protocols (DEXES)

The [**Soroswap.Finance Aggregator**](https://github.com/soroswap/aggregator/blob/main/audits/2024-08-31_Soroswap_Aggregator_Audit_Summary_by_RuntimeVerification.pdf) integrates with the best AMMs (Automated Market Makers) currently deployed on the Soroban-Stellar Mainnet. These protocols provide the necessary liquidity to execute token swaps, allowing users to achieve optimal pricing and efficiency.  Currently the Aggregator aggregates liqudity from:

* **Soroswap.Finance AMM**: The main protocol of Soroswap, fully deployed on the Soroban-Stellar Mainnet. This AMM offers fast, secure, and low-cost token swaps, enabling users to interact with a wide range of token pairs.
* **Phoenix Protocol AMM** (currently on Testnet): Phoenix is in the testing phase and adds an additional layer of liquidity to the Soroban network. Once fully deployed on the mainnet, Phoenix will enhance the efficiency of token swaps.
* **Aqua AMM** (currently on Testnet): Another AMM in testing phase that provides additional liquidity on Soroban, allowing users to diversify swap routes and options.

> **Note:** [Stellar SDEX](https://docs.soroswap.finance/01-concepts/sdex) is not included as it is incompatible with Soroban-based smart contracts, and the Soroswap Aggregator only works with Soroban-based protocols.

### DexDistribution

Each time a user initiates a swap, the [Soroswap Router SDK ](https://docs.soroswap.finance/soroswap-router-sdk)automatically calculates the optimal way to split the trade across different **Underlying Protocols** (DEX) and routes. This is done through a mechanism called **`DexDistribution`**, which defines:

* The **protocols** used for the swap.
* The **fractions** of the total amount to be swapped in each protocol.
* The **path** of the swap, i.e., the sequence of tokens used to go from the input token to the output token.

### Example of DexDistribution

Let’s assume a user wants to swap **1000 XLM** for **USDC**. The Aggregator could split the swap among the different AMMs as follows:

* **80%** through **Soroswap AMM**, using the path: `XLM > EURC > USDC`.
* **10%** through **Phoenix AMM**, using the path: `XLM > BTC > USDC`.
* **10%** through **Aqua AMM**, using the path: `XLM > ETH > USDC`.

### Adapters

**Adapters** are smart contracts that handle communication between the Aggregator and the **Underlying Protocols**. These adapters allow the Aggregator to interact with different AMMs, adjusting parameters according to the standards of each protocol. Thus, adapters act as bridges between the Aggregator and the protocols, ensuring swaps are executed correctly on each platform.

{% hint style="info" %}
**Why doesn’t the Soroswap.Finance Aggregator include Stellar DEX in DexDistribution proposals?**\
Stellar DEX is not compatible with Soroban smart contracts, so the Aggregator only works with protocols that utilize Soroban technology.
{% endhint %}

### **Adapter Interface**

The communication between the Aggregator and adapters is defined by the **`SoroswapAggregatorAdapterTrait`**. Adapters must implement specific methods for initialization, data retrieval, and swap execution requests. This standardized design ensures that adapters can interact with multiple protocols, regardless of their individual differences.

---

# Bridge

### What is a Bridge?

In blockchain technology, a **bridge** is a protocol that connects two or more blockchain networks, enabling them to interact and exchange assets or data. Bridges are crucial for improving interoperability between different blockchains, which often operate independently of one another.

### Key Functions of a Bridge

* **Asset Transfer:** Bridges facilitate the transfer of assets, such as tokens or cryptocurrencies, between different blockchains. This is essential for users who wish to move their assets from one blockchain ecosystem to another.
* **Data Exchange:** Bridges allow for the transfer of data between blockchains, enabling different networks to share information and synchronize their activities.
* **Interoperability:** By connecting disparate blockchains, bridges enhance interoperability, allowing applications and users to operate seamlessly across multiple blockchain platforms.

### How Bridges Work

1. **Locking and Minting:**
   * **Locking:** Assets are locked on the source blockchain to prevent double-spending or misuse.
   * **Minting:** Corresponding assets are minted or issued on the destination blockchain, allowing users to access them within the new ecosystem.
2. **Verification:** The bridge verifies transactions and ensures that assets are securely locked on the source blockchain before issuing the equivalent assets on the destination blockchain.
3. **Reverse Transfers:** Bridges also handle the process of transferring assets back to the original blockchain, ensuring that assets are locked on the destination chain before unlocking or issuing them on the source chain.

### Soroswap Implements the Spacewalk Bridge between Stellar and Polkadot

Soroswap Finance has developed the [**Spacewalk Bridge**](https://pendulumchain.org/spacewalk) to enable interoperability between the Stellar and Polkadot blockchains. This bridge facilitates seamless transfers of assets and data between these two distinct blockchain networks.

### How the Spacewalk Bridge Works

1. **Asset Locking and Minting:**
   * **On Stellar:** When a user initiates a transfer from Stellar to Polkadot, the [Spacewalk Bridge](https://pendulumchain.org/spacewalk) locks the assets on the Stellar network.
   * **On Polkadot:** After assets are locked on Stellar, the bridge mints or issues an equivalent amount of assets on Polkadot, enabling their use within the Polkadot ecosystem.
2. **Transfer Process:**
   * **Initiation:** Users request to transfer assets through the Spacewalk Bridge interface.
   * **Verification:** The bridge verifies the transaction, ensuring that the assets are securely locked on Stellar.
   * **Issuance:** The bridge then issues the equivalent assets on Polkadot, making them available for use on the Polkadot network.
3. **Reverse Transfers:**
   * **On Polkadot:** To transfer assets back to Stellar, the bridge locks the assets on Polkadot.
   * **On Stellar:** The equivalent assets are then unlocked or issued back on Stellar, completing the transfer process.

---

# Trustlines

In **Soroswap Finance**, a _trustline_ is an essential mechanism that allows your account on the Stellar network to hold and exchange a specific asset. This process is crucial for interacting with the assets you wish to trade on the platform.&#x20;

### **What is a Trustline?**

A [_trustline_ ](https://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/accounts#trustlines)is an explicit authorization that you establish between your account and an issuing account of an asset on the Stellar network. Essentially, it tells Stellar that you trust a specific issuer to allow your account to receive and handle that asset. Without an appropriate _trustline_, you cannot hold or trade that asset within your account.\


### **How Trustlines Function**

* **Holding Assets:** To hold a specific asset, an account needs to have a [trustline](https://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/accounts#trustlines) with the issuing account of that asset. This setup allows the account to keep track of the asset's balance and also imposes a limit on the amount of that asset the account can hold.
* **Receiving Assets:** A trustline must be established for an account to receive any asset, except for Lumens (XLM). While it’s possible to create a claimable balance to send assets to an account without an existing trustline, the recipient must still create a trustline to claim the balance. Learn more about [Claimable Balances here.](https://developers.stellar.org/docs/learn/encyclopedia/transactions-specialized/claimable-balances)
* [**Trustlines track**](https://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/accounts#trustlines) **liabilities for asset trades in two ways:** Buying Liabilities, which are the total amount of an asset an account offers to buy across all its offers, and Selling Liabilities, which are the total amount of an asset an account offers to sell across all its offers.

_An account must maintain a balance that is large enough to cover its selling liabilities and sufficiently below its limit to handle its buying liabilities._

<figure><img src="../.gitbook/assets/Captura de pantalla 2025-04-29 a las 15.07.00.png" alt=""><figcaption></figcaption></figure>

### &#x20;[**Trustlines**](https://developers.stellar.org/docs/learn/encyclopedia/sdex/liquidity-on-stellar-sdex-liquidity-pools#trustlines) **for Liquidity Pools**

To participate in a[ liquidity poo](https://docs.soroswap.finance/05-tutorial/04-adding-liquidity)l and perform [swaps](https://docs.soroswap.finance/05-tutorial/05-doing-swap) on Soroswap Finance, you need to establish trustlines for the following three types of assets:

* **Reserve Assets:** These are the assets held within the liquidity pool. To participate in a pool, you must establish a trustline with each of the reserve assets that make up the pool. For example, if the liquidity pool contains assets A and B, you will need trustlines for both asset A and asset B.
* **Pool Share Assets:** This asset represents your share of the liquidity pool. You need a trustline for each pool share associated with the pool you want to participate in. The trustline for the pool share allows you to receive and manage your proportional part of the pool.
* **Lumens (XLM):** In some cases, especially if one of the reserve assets is XLM, you do not need to establish a specific trustline for XLM, as trustlines for XLM are not required. However, if the liquidity pool does not include XLM as one of the reserve assets, you will need to establish trustlines for all the assets involved in the pool.

### **Trustlines for Performing Swaps**

To exchange assets on Soroswap Finance using the path payments system, you also need to establish trustlines:

* **Assets to be Exchanged:** You must establish trustlines for each asset you wish to exchange. For example, if you want to swap Asset X for Asset Y, you need to have a trustline for both Asset X and Asset Y.
* **Asset Management:** Once you have established the trustlines, your account can receive and manage these assets, allowing you to perform swaps safely and effectively.

---

# Oracles

## Introduction

A price oracle is any tool used to view price information about a given asset. When you look at stock prices on your phone, you are using your phone as a price oracle. Similarly, the app on your phone relies on devices to retrieve price information - likely several, which are aggregated and then displayed to you, the end-user. These are price oracles as well.

When building smart contracts that integrate with DeFi protocols, developers will inevitably run into the price oracle problem. What is the best way to retrieve the price of a given asset on-chain?

Many oracle designs on Ethereum have been implemented on an ad-hoc basis, with varying degrees of decentralization and security. Because of this, the ecosystem has witnessed numerous high-profile hacks where the oracle implementation is the primary attack vector. Some of these vulnerabilities are discussed [here](https://samczsun.com/taking-undercollateralized-loans-for-fun-and-for-profit/).

While there is no one size fits all solution, Uniswap V2 enables developers to build highly decentralized and manipulation-resistant on-chain price oracles, which may solve many of the demands necessary for building robust protocols.

## Uniswap V2 solution

Uniswap V2 includes several improvements for supporting manipulation-resistant public price feeds. First, every pair measures (but does not store) the market price at the beginning of each block, before any trades take place. This price is expensive to manipulate because it is set by the last transaction, whether it is a mint, swap, or burn, in a previous block.

**To set the measured price to one that is out of sync with the global market price, an attacker has to make a bad trade at the end of a previous block** , typically with no guarantee that they will arbitrage it back in the next block. Attackers will lose money to arbitrageurs unless they can “selfishly” mine two blocks in a row. This type of attack presents several challenges and [has not been observed to date](https://arxiv.org/abs/1912.01798).

Unfortunately, this alone is not enough. If significant value settles based on the price resulting from this mechanism, an attack’s profit will likely outweigh the loss.

Instead, Uniswap V2 adds this end-of-block price to a single cumulative-price variable in the core contract weighted by the amount of time this price existed. **This variable represents a sum of the Uniswap price for every second in the entire history of the contract.**

![](03-core-concepts/images/v2\_onchain\_price\_data.png)

This variable can be used by external contracts to track accurate time-weighted average prices (TWAPs) across any time interval.

The TWAP is constructed by reading the cumulative price from an ERC20 token pair at the beginning and at the end of the desired interval. The difference in this cumulative price can then be divided by the length of the interval to create a TWAP for that period.

![](03-core-concepts/images/v2\_twap.png)

TWAPs can be used directly or as the basis for moving averages (EMAs and SMAs) as needed.

A few notes:

* For a 10-minute TWAP, sample once every 10 minutes. For a 1-week TWAP, sample once every week.
* For a simple TWAP, the cost of manipulation increases (approx. linear) with liquidity on Uniswap, as well as (approx. linear) with the length of time over which you average.
* The Cost of an attack is relatively simple to estimate. Moving the price 5% on a 1-hour TWAP is approximately equal to the amount lost to arbitrage and fees for moving the price 5% every block for 1 hour.

There are some nuances that are good to be aware of when using Uniswap V2 as an oracle, especially where manipulation resistance is concerned. The [whitepaper](../whitepaper.pdf) elaborates on some of them. Additional oracle-focused developer guides and documentation will be released soon.

In the meantime, check out our [example implementation](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleOracleSimple.sol) of a 24 hr TWAP Oracle built on Uniswap V2!

### Manipulation resistance

The cost of manipulating the price for a specific time period can be roughly estimated as the amount lost to arbitrage and fees every block for the entire period. For larger liquidity pools and over longer time periods, this attack is impractical, as the cost of manipulation typically exceeds the value at stake.

Other factors, such as network congestion, can reduce the cost of attack. For a more in-depth review of the security of Uniswap V2 price oracles, read the [security audit section on Oracle Integrity](https://uniswap.org/audit.html#org87c8b91).

## Building an oracle

To learn more about building oracles check out [building an Oracle](../old\_docusaurus/docs/guides/smart-contract-integration/building-an-oracle/) in the developer guides.

---

# Flash Swaps

Uniswap flash swaps allow you to withdraw up to the full reserves of any ERC20 token on Uniswap and execute arbitrary logic at no upfront cost, provided that by the end of the transaction you either:

* pay for the withdrawn ERC20 tokens with the corresponding pair tokens
* return the withdrawn ERC20 tokens along with a small fee

Flash swaps are incredibly useful because they obviate upfront capital requirements and unnecessary order-of-operations constraints for multi-step transactions involving Uniswap.

## Examples

### Capital Free Arbitrage

One particularly interesting use case for flash swaps is capital-free arbitrage. It's well-known that an integral part of Uniswap's design is to create incentives for arbitrageurs to trade the Uniswap price to a "fair" market price. While game-theoretically sound, this strategy is accessible only to those with sufficient capital to take advantage of arbitrage opportunities. Flash swaps remove this barrier entirely, effectively democratizing arbitrage.

Imagine a scenario where the cost of buying 1 ETH on Uniswap is 200 DAI (which is calculated by calling `getAmountIn` with 1 ETH specified as an exact output), and on Oasis (or any other trading venue), 1 ETH buys 220 DAI. To anyone with 200 DAI available, this situation represents a risk-free profit of 20 DAI. Unfortunately, you may not have 200 DAI lying around. With flash swaps, however, this risk-free profit is available for anyone to take as long as they're able to pay gas fees.

#### Withdrawing ETH from Uniswap

The first step is to _optimistically_ withdraw 1 ETH from Uniswap via a flash swap. This will serve as the capital that we use to execute our arbitrage. Note that in this scenario, we're assuming that:

* 1 ETH is the pre-calculated profit-maximizing trade
* The price has not changed on Uniswap or Oasis since our calculation

It may be the case that we'd like to calculate the profit-maximizing trade on-chain at the moment of execution, which is robust to price movements. This can be somewhat complex, depending on the strategy being executed. However, one common strategy is trading as profitably as possible _against a fixed external price_. (This price may be e.g., the average execution price of one or more orders on Oasis.) If the Uniswap market price is far enough above or below this external price, the following example contains code that calculates the amount to trade over Uniswap for maximum profit: [`ExampleSwapToPrice.sol`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol).

#### Trade at External Venue

Once we've obtained our temporary capital of 1 ETH from Uniswap, we now can trade this for 220 DAI on Oasis. Once we've received the DAI, we need to pay Uniswap back. We've mentioned that the amount required to cover 1 ETH is 200 DAI, calculated via `getAmountIn`. So, after sending 200 of the DAI back to the Uniswap pair, you're left with 20 DAI of profit!

### Instant Leverage

Flash swaps can be used to improve the efficiency of levering up using lending protocols and Uniswap.

Consider Maker in its simplest form: a system which accepts ETH as collateral and allows DAI to be minted against it while ensuring that the value of the ETH never drops below 150% of the value of the DAI.

Say we use this system to deposit a principal amount of 3 ETH, and mint the maximum amount of DAI. At a price of 1 ETH / 200 DAI, we receive 400 DAI. In theory, we could lever this position up by selling the DAI for more ETH, depositing this ETH, minting the maximum amount of DAI (which would be less this time), and repeating until we've reached our desired leverage level.

It's quite simple to use Uniswap as a liquidity source for the DAI-to-ETH component of this process. However, looping through protocols in this way isn't particularly elegant, and can be gas-intensive.

Luckily, flash swaps enable us to withdraw the _full_ ETH amount upfront. If we wanted 2x leverage against our 3 ETH principal, we could simply request 3 ETH in a flash swap and deposit 6 ETH into Maker. This gives us the ability to mint 800 DAI. If we mint as much as we need to cover our flash swap (say 605), the remainder serves as a safety margin against price movements.

## Developer resources

* To see how to integrate a flash swap in your smart contract read [Using Flash Swaps](../old\_docusaurus/docs/guides/smart-contract-integration/using-flash-swaps/).

---

# Ecosystem Participants

<figure><img src="../../.gitbook/assets/Captura de pantalla 2024-09-20 a las 16.23.07.png" alt=""><figcaption></figcaption></figure>

The Soroswap ecosystem is primarily comprised of three types of users: liquidity providers, traders, and developers. Liquidity providers are [incentivized](../../05-tutorial/summary/03-test-stellar-assets-in-testnet.md#accessing-test-tokens) to contribute tokens to common liquidity pools. Traders can swap these tokens for one another for a fixed [0.30% fee](../01-fees.md) (which goes to liquidity providers). Developers can integrate directly with Soroswap smart contracts to power new and exciting interactions with tokens, trading interfaces, retail experiences, and more.

In total, interactions between these classes create a positive feedback loop, fueling digital economies by defining a common language through which tokens can be pooled, traded and used.

## Liquidity Providers

Liquidity providers, or LPs, are not a homogenous group:

* Passive LPs are token holders who wish to passively invest their assets to accumulate trading fees.
* Professional LPs are focused on market making as their primary strategy. They usually develop custom tools and ways of tracking their liquidity positions across different DeFi projects.
* Token projects sometimes choose to become LPs to create a liquid marketplace for their token. This allows tokens to be bought and sold more easily, and unlocks interoperability with other DeFi projects through Soroswap.
* Finally, some DeFi pioneers are exploring complex liquidity provision interactions like incentivized liquidity, liquidity as collateral, and other experimental strategies. Soroswap is the perfect protocol for projects to experiment with these kinds of ideas.

## Traders

There are a several categories of traders in the protocol ecosystem:

* Speculators use a variety of community built tools and products to swap tokens using liquidity pulled from the Soroswap protocol.
* Arbitrage bots seek profits by comparing prices across different platforms to find an edge. (Though it might seem extractive, these bots actually help equalize prices across broader Soroban/Stellar markets and keep things fair.)
* DAPP users buy tokens on Soroswap for use in other applications on Soroban/Stellar.
* Smart contracts that execute trades on the protocol by implementing swap functionality (from products like DEX aggregators to custom Soroban scripts).

In all cases, trades are subject to the same flat fee for trading on the protocol. Each is important for increasing the accuracy of prices and incentivizing liquidity.

## Developers/Projects

There are far too many ways Soroswap is used in the wider Soroban/Stellar ecosystem to count, but some examples include:

* The open-source, accessible nature of Soroswap means there are countless UX experiments and front-ends built to offer access to Soroswap functionality.
* Wallets often integrate swapping and liquidity provision functionality as a core offering of their product.
* DEX (decentralized exchange) aggregators pull liquidity from many liquidity protocols to offer traders the best prices by splitting their trades. Soroswap is the biggest single decentralized liquidity source for these projects.
* Smart contract developers use the suite of functions available to invent new DeFi tools and other various experimental ideas.

## Soroswap Team and Community

The Soroswap team along with the broader Soroswap community drives development of the protocol and ecosystem.

---

# Advanced Topics



---

# Pricing Mechanisms

## How are prices determined?

As we learned in [Protocol Overview](../../01-protocol-overview/), each pair on Uniswap is actually underpinned by a liquidity pool. Liquidity pools are smart contracts that hold balances of two unique tokens and enforces rules around depositing and withdrawing them. The primary rule is the [constant product formula](../../01-protocol-overview/04-glossary.md#x--y--k). When a token is withdrawn (bought), a proportional amount must be deposited (sold) to maintain the constant. The ratio of tokens in the pool, in combination with the constant product formula, ultimately determine the price that a swap executes at.

## How Uniswap handles prices

In Uniswap V1, trades are always executed at the "best possible" price, calculated at execution time. Somewhat confusingly, this calculation is actually accomplished with one of two different formulas, depending on whether the trade specifies an exact _input_ or _output_ amount. Functionally, the difference between these two functions is miniscule, but the very existence of a difference increases conceptual complexity. Initial attempts to support both functions in V2 proved inelegant, and the decision was made to **not provide any pricing functions in the core**. Instead, pairs directly check whether the invariant was satisfied (accounting for fees) after every trade. This means that rather than relying on a pricing function to _also_ enforce the invariant, V2 pairs simply and transparently ensure their own safety, a nice separation of concerns. One downstream benefit is that V2 pairs will more naturally support other flavors of trades which may emerge, (e.g. trading to a specific price at execution time).

At a high level, in Uniswap V2, _trades must be priced in the periphery_. The good news is that the [library](../../01-protocol-overview/03-technical-reference/03-smart-contracts/03-soroswaplibrary.md) provides a variety of functions designed to make this quite simple, and all swapping functions in the [router](../../01-protocol-overview/03-technical-reference/03-smart-contracts/04-soroswaprouter.md) are designed with this in mind.

## Pricing Trades

When swapping tokens on Uniswap, it's common to want to receive as many output tokens as possible for an _exact input amount_, or to pay as few input tokens as possible for an _exact output amount_. In order to calculate these amounts, a contract must look up the _current reserves_ of a pair, in order to understand what the current price is. However, it is _not safe to perform this lookup and rely on the results without access to an external price_.

Say a smart contract naively wants to send 10 DAI to the DAI/WETH pair and receive as much WETH as it can get, given the current reserve ratio. If, when called, the naive smart contract simply looks up the current price and executes the trade, it is _vulnerable to front-running and will likely suffer an economic loss_. To see why, consider a malicious actor who sees this transaction before it is confirmed. They could execute a swap which dramatically changes the DAI/WETH price immediately before the naive swap goes through, wait for the naive swap to execute at a bad rate, and then swap to change the price back to what it was before the naive swap. This attack is fairly cheap and low-risk, and can typically be performed for a profit.

To prevent these types of attacks, it's vital to submit swaps _that have access to knowledge about the "fair" price their swap should execute at_. In other words, swaps need access to an _oracle_, to be sure that the best execution they can get from Uniswap is close enough to what the oracle considers the "true" price. While this may sound complicated, the oracle can be as simple as an _off-chain observation of the current market price of a pair_. Because of arbitrage, it's typically the case that the ratio of the intra-block reserves of a pair is close to the "true" market price. So, if a user submits a trade with this knowledge in mind, they can ensure that the losses due to front-running are tightly bounded. This is how, for example, the Uniswap frontend ensure trade safety. It calculates the optimal input/output amounts given observed intra-block prices, and uses the router to perform the swap, which guarantees the swap will execute at a rate no less that `x`% worse than the observed intra-block rate, where `x` is a user-specified slippage tolerance (0.5% by default).

There are, of course, other options for oracles, including [native V2 oracles](../04-oracles.md).

### Exact Input

If you'd like to send an exact amount of input tokens in exchange for as many output tokens as possible, you'll want to use [getAmountsOut](../../01-protocol-overview/03-technical-reference/03-smart-contracts/04-soroswaprouter.md). The equivalent SDK function is [getOutputAmount](../../01-protocol-overview/03-technical-reference/03-smart-contracts/01-soroswappair.md), or [minimumAmountOut](../../01-protocol-overview/03-technical-reference/03-smart-contracts/01-soroswappair.md) for slippage calculations.

### Exact Output

If you'd like to receive an exact amount of output tokens for as few input tokens as possible, you'll want to use [getAmountsIn](../../01-protocol-overview/03-technical-reference/03-smart-contracts/04-soroswaprouter.md). The equivalent SDK function is [getInputAmount](../../01-protocol-overview/03-technical-reference/03-smart-contracts/01-soroswappair.md), or [maximumAmountIn](../../01-protocol-overview/03-technical-reference/03-smart-contracts/01-soroswappair.md) for slippage calculations.

### Swap to Price

For this more advanced use case, see [ExampleSwapToPrice.sol](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleSwapToPrice.sol).

---

# Understanding Returns

Uniswap incentivizes users to add liquidity to trading pools by rewarding providers with the fees generated when other users trade with those pools. Market making, in general, is a complex activity. There is a risk of losing money during large and sustained movement in the underlying asset price compared to simply holding an asset.

## Risks

To understand the risks associated with providing liquidity you can read [https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2](https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2) to get an in-depth look at how to conceptualize a liquidity position.

## Example from the article

> Consider the case where a liquidity provider adds 10,000 DAI and 100 WETH to a pool (for a total value of $20,000), the liquidity pool is now 100,000 DAI and 1,000 ETH in total. Because the amount supplied is equal to 10% of the total liquidity, the contract mints and sends the market maker “liquidity tokens” which entitle them to 10% of the liquidity available in the pool. These are not speculative tokens to be traded. They are merely an accounting or bookkeeping tool to keep track of how much the liquidity providers are owed. If others subsequently add/withdraw coins, new liquidity tokens are minted/burned such that everyone’s relative percentage share of the liquidity pool remains the same.
>
> **Now let’s assume the price trades on Coinbase from $100 to $150. The Uniswap contract should reflect this change as well after some arbitrage. Traders will add DAI and remove ETH until the new ratio is now 150:1.**
>
> What happens to the liquidity provider? The contract reflects something closer to 122,400 DAI and 817 ETH (to check these numbers are accurate, 122,400 \* 817 = 100,000,000 (our constant product) and 122,400 / 817 = 150, our new price). Withdrawing the 10% that we are entitled to would now yield 12,240 DAI and 81.7 ETH. The total market value here is $24,500. Roughly $500 worth of profit was missed out on as a result of the market making.
>
> **Obviously no one wants to provide liquidity out of charitable means, and the revenue isn’t dependent on the ability to flip out of good trades (there is no flipping). Instead, 0.3% of all trade volume is distributed proportionally to all liquidity providers. By default, these fees are put back into the liquidity pool, but can be collected any time. It’s difficult to know what the trade-off is between revenues from fees and losses from directional movements without knowing the amount of in-between trades. The more chop and back and forth, the better.**
>
> ### Why is my liquidity worth less than I put in?
>
> To understand why the value of a liquidity provider’s stake can go down despite income from fees, we need to look a bit more closely at the formula used by Uniswap to govern trading. The formula really is very simple. If we neglect trading fees, we have the following:
>
> * `eth_liquidity_pool * token_liquidity_pool = constant_product`
>
> In other words, the number of tokens a trader receives for their ETH and vice versa is calculated such that after the trade, the product of the two liquidity pools is the same as it was before the trade. The consequence of this formula is that for trades which are very small in value compared to the size of the liquidity pool we have:
>
> * `eth_price = token_liquidity_pool / eth_liquidity_pool`
>
> Combining these two equations, we can work out the size of each liquidity pool at any given price, assuming constant total liquidity:
>
> * `eth_liquidity_pool = sqrt(constant_product / eth_price)`
> * `token_liquidity_pool = sqrt(constant_product * eth_price)`
>
> So let’s look at the impact of a price change on a liquidity provider. To keep things simple, let’s imagine our liquidity provider supplies 1 ETH and 100 DAI to the Uniswap DAI exchange, giving them 1% of a liquidity pool which contains 100 ETH and 10,000 DAI. This implies a price of 1 ETH = 100 DAI. Still neglecting fees, let’s imagine that after some trading, the price has changed; 1 ETH is now worth 120 DAI. What is the new value of the liquidity provider’s stake? Plugging the numbers into the formulae above, we have:
>
> * `eth_liquidity_pool = 91.2871`
> * `dai_liquidity_pool = 10954.4511`
>
> "Since our liquidity provider has 1% of the liquidity tokens, this means they can now claim 0.9129 ETH and 109.54 DAI from the liquidity pool. But since DAI is approximately equivalent to USD, we might prefer to convert the entire amount into DAI to understand the overall impact of the price change. At the current price then, our liquidity is worth a total of 219.09 DAI. What if the liquidity provider had just held onto their original 1 ETH and 100 DAI? Well, now we can easily see that, at the new price, the total value would be 220 DAI. So our liquidity provider lost out by 0.91 DAI by providing liquidity to Uniswap instead of just holding onto their initial ETH and DAI."
>
> "Of course, if the price were to return to the same value as when the liquidity provider added their liquidity, this loss would disappear. **For this reason, we can call it an impermanent loss.** Using the equations above, we can derive a formula for the size of the impermanent loss in terms of the price ratio between when liquidity was supplied and now. We get the following:"
>
> * "`impermanent_loss = 2 * sqrt(price_ratio) / (1+price_ratio) — 1`"
> * "Which we can plot out to get a general sense of the scale of the impermanent loss at different price ratios:" ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fdnazarov%2FOscQ_nmzbA.png?alt=media\&token=4dff866e-a740-4121-9da4-9c9105baa404)
> * "Or to put it another way:"
>   * "a 1.25x price change results in a 0.6% loss relative to HODL"
>   * "a 1.50x price change results in a 2.0% loss relative to HODL"
>   * "a 1.75x price change results in a 3.8% loss relative to HODL"
>   * "a 2x price change results in a 5.7% loss relative to HODL"
>   * "a 3x price change results in a 13.4% loss relative to HODL"
>   * "a 4x price change results in a 20.0% loss relative to HODL"
>   * "a 5x price change results in a 25.5% loss relative to HODL"
> * "N.B. The loss is the same whichever direction the price change occurs in (i.e. a doubling in price results in the same loss as a halving)." -->

---

# Security Considerations

## Audit & Formal Verification

Between January 8 and April 30, a team of six engineers reviewed and formally verified crucial components of the smart contracts for Uniswap V2.

Their past work includes smart contract development on and formal verification of multi-collateral DAI.

The scope of work includes:

* Formal verification of the core smart contracts
* Code review of core smart contracts
* Numerical error analysis
* Code review of periphery smart contracts (during ongoing development)

The report also has a "Design Comments" section that we highly recommend for gaining a deep technical understanding of some of the choices made in Uniswap V2.

> [Read the report](https://uniswap.org/audit.html)

## Bug Bounty

Uniswap has an open and ongoing bug [bounty program](https://uniswap.org/bug-bounty/).

## Considerations when building on Uniswap

When integrating Uniswap V2 into another on-chain system, particular care must be taken to avoid security vulnerabilities, avenues for manipulations, and the potential loss of funds.

As a preliminary note: smart contract integrations can happen at two levels: directly with [Pair](../../01-protocol-overview/03-technical-reference/03-smart-contracts/01-soroswappair.md) contracts, or through the [Router](../../01-protocol-overview/03-technical-reference/03-smart-contracts/04-soroswaprouter.md). Direct interactions offer maximal flexibility but require the most work to get right. Mediated interactions offer more limited capabilities but stronger safety guarantees.

There are two primary categories of risk associated with Uniswap V2. The first involves so-called "static" errors. These can include sending too many tokens to a pair during a swap (or requesting too few tokens back) or allowing transactions to linger in the mempool long enough for the sender's expectations about prices to no longer be accurate.

One may address these errors with fairly straightforward logic checks. Executing these logic checks is the primary purpose of routers. Those who interact directly with pairs must perform these checks themselves (with the help of the [Library](../../01-protocol-overview/03-technical-reference/03-smart-contracts/03-soroswaplibrary.md)).

"Dynamic" risk, the second category, involves runtime pricing. Because Ethereum transactions occur in an adversarial environment, naively written smart contracts can, and will, be exploited for profit. For example, suppose a smart contract checks the asset ratio in a Uniswap pool at runtime and trades against it, assuming that the ratio represents the "fair" or "market" price of these assets. In that case, it is highly vulnerable to manipulation. A malicious actor could, e.g., trivially insert transactions before and after the naive transaction (a so-called "sandwich" attack), causing the smart contract to trade at a radically worse price, profit from this at the trader's expense, and then return the contracts to their original state, all at a low cost. (One important caveat is that these types of attacks are mitigated by trading in highly liquid pools, or at low values.)

The best way to protect against these attacks is to introduce a price oracle. An oracle is any device that returns desired information, in this case, a pair's spot price. The best "oracle" is simply a traders' off-chain observation of the prevailing price, which can be passed into the trade as a safety check. This strategy is best suited to retail trading venues where users initiate transactions on their own behalf. However, it is often the case that a trusted price observation is not available (e.g., in multi-step, programmatic interactions involving Uniswap). Without a price oracle, these interactions will be forced to trade at whatever the (potentially manipulated) rate on Uniswap is. For details on the Uniswap V2 approach to oracles, see [Oracles](../04-oracles.md).

---

# Research

The automated market maker is a new concept, and as such, new research comes out frequently. We've selected some of the most thoughtful here.

## Uniswap's Financial Alchemy

Authors: Dave White, Martin Tassy, Charlie Noyes, and Dan Robinson

> An automated market maker is a type of decentralized exchange that lets customers trade between on-chain assets like USDC and ETH. Uniswap is the most popular AMM on Ethereum. Like most AMMs, Uniswap facilitates trading between a particular pair of assets by holding reserves of both assets. It sets the trading price between them based on the size of its reserves in such a way that prices will stay in line with the broader market. Anybody who would like to can join the “pool” for a particular pair and become a liquidity provider, or LP, so-called because they provide liquid assets for others to trade against. LPs contribute assets to both reserves simultaneously, taking on some of the risk of trading in exchange for a share of the returns.

* [Uniswap's Financial Alchemy](https://research.paradigm.xyz/uniswaps-alchemy)

## An analysis of Uniswap markets

Authors: Guillermo Angeris, Hsien-Tang Kao, Rei Chiang, Charlie Noyes, Tarun Chitra

> Uniswap---and other constant product markets---appear to work well in practice despite their simplicity. In this paper, we give a simple formal analysis of constant product markets and their generalizations, showing that, under some common conditions, these markets must closely track the reference market price. We also show that Uniswap satisfies many other desirable properties and numerically demonstrate, via a large-scale agent-based simulation, that Uniswap is stable under a wide range of market conditions.

* [An analysis of Uniswap markets](https://arxiv.org/abs/1911.03380)

## Improved Price Oracles: Constant Function Market Makers

Authors: Guillermo Angeris, Tarun Chitra

> Automated market makers, first popularized by Hanson's logarithmic market scoring rule (or LMSR) for prediction markets, have become important building blocks, called 'primitives,' for decentralized finance. A particularly useful primitive is the ability to measure the price of an asset, a problem often known as the pricing oracle problem. In this paper, we focus on the analysis of a very large class of automated market makers, called constant function market makers (or CFMMs) which includes existing popular market makers such as Uniswap, Balancer, and Curve, whose yearly transaction volume totals to billions of dollars. We give sufficient conditions such that, under fairly general assumptions, agents who interact with these constant function market makers are incentivized to correctly report the price of an asset and that they can do so in a computationally efficient way. We also derive several other useful properties that were previously not known. These include lower bounds on the total value of assets held by CFMMs and lower bounds guaranteeing that no agent can, by any set of trades, drain the reserves of assets held by a given CFMM.

* [Improved Price Oracles: Constant Function Market Makers](https://arxiv.org/abs/2003.10001)

## Pintail research

Published [medium](https://medium.com/@pintail) articles by Pintail.

* [Understanding Uniswap Returns](https://medium.com/@pintail/understanding-uniswap-returns-cc593f3499ef)
* [Uniswap: A Good Deal for Liquidity Providers?](https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2)

## Liquidity Provider Returns in Geometric Mean Markets

Authors: Alex Evans

> Geometric mean market makers (G3Ms), such as Uniswap and Balancer, comprise a popular class of automated market makers (AMMs) defined by the following rule: the reserves of the AMM before and after each trade must have the same (weighted) geometric mean. This paper extends several results known for constant-weight G3Ms to the general case of G3Ms with time-varying and potentially stochastic weights. These results include the returns and no-arbitrage prices of liquidity pool (LP) shares that investors receive for supplying liquidity to G3Ms. Using these expressions, we show how to create G3Ms whose LP shares replicate the payoffs of financial derivatives. The resulting hedges are model-independent and exact for derivative contracts whose payoff functions satisfy an elasticity constraint. These strategies allow LP shares to replicate various trading strategies and financial contracts, including standard options. G3Ms are thus shown to be capable of recreating a variety of active trading strategies through passive positions in LP shares.

* [Liquidity Provider Returns in Geometric Mean Markets](https://arxiv.org/abs/2006.08806)

## The Replicating Portfolio of a Constant Product Market

Authors: Joseph Clark

> We derive the replicating portfolio of a constant product market. This is structurally short volatility (selling options) which explains why positive transaction costs are needed to induce liquidity providers to participate. Where futures and options markets do not exist, this payoff can be used to create them.

* [https://papers.ssrn.com/sol3/papers.cfm?abstract\_id=3550601](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3550601)

---

# Soroswap AMM Protocol



---

# How Soroswap AMM Works

###

### Quick Reference

<figure><img src="../.gitbook/assets/Captura de pantalla 2025-04-24 a las 15.07.19.png" alt=""><figcaption></figcaption></figure>

Soroswap AMM is an _automated liquidity protocol_ powered by a [constant product formula](04-glossary.md#constant-product-formula) and implemented in a system of non-upgradeable smart contracts on the [Soroban](https://developers.stellar.org/docs/smart-contracts) blockchain. It obviates the need for trusted intermediaries, prioritizing **decentralization**, **censorship resistance**, and **security**. Soroswap is **open-source software** licensed under the [Apache 2.0 Licence](https://github.com/soroswap/core/blob/main/LICENSE).

Each Soroswap Pair smart contract, manages a liquidity pool made up of reserves of two tokens. These can be either (1) Soroban native tokens implemeting the [Soroban Token Interface](https://developers.stellar.org/docs/smart-contracts/tokens/token-interface), or (2) [Stellar Assets](https://developers.stellar.org/docs/issuing-assets/anatomy-of-an-asset)

Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. These tokens track pro-rata LP shares of the total reserves, and can be redeemed for the underlying assets at any time.



<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-20 a las 15.42.48.png" alt=""><figcaption></figcaption></figure>

Pairs act as automated market makers, standing ready to accept one token for the other as long as the “constant product” formula is preserved. This formula, most simply expressed as `x * y = k`, states that trades must not change the product (`k`) of a pair’s reserve balances (`x` and `y`). Because `k` remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones.

In practice, Soroswap applies a 0.30% fee to trades, which is added to reserves. As a result, each trade actually increases `k`. This functions as a payout to LPs, which is realized when they burn their pool tokens to withdraw their portion of total reserves. In the future, this fee may be reduced to 0.25%, with the remaining 0.05% withheld as a protocol-wide charge. This is the only change that the protocol accepts. The total 0.30% fee it's hardcoded in the code and cannot be changed.



<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-20 a las 16.20.55.png" alt=""><figcaption></figcaption></figure>

Because the relative price of the two pair assets can only be changed through trading, divergences between the Soroswap price and external prices create arbitrage opportunities. This mechanism ensures that Soroswap prices always trend toward the market-clearing price.

## Further reading

To see how token swaps work in practice, and to walk through the lifecycle of a swap, check out [Swaps](broken-reference). Or, to see how liquidity pools work, see [Pools](../01-concepts/02-pools.md).

Ultimately, of course, the Soroswap protocol is just smart contract code running on Soroban. To understand how they work, head over to [The Soroban Home Page](https://developers.stellar.org/docs/smart-contracts).

---

# AMM Audits

**Audit Report by OtterSec:** [View the report](https://github.com/soroswap/core/blob/main/audits/2024-02-22_soroswap_ottersec_audit.pdf)

For a detailed evaluation of Soroswap’s security and compliance, refer to the audit report conducted by [**OtterSec**](https://osec.io). The audit provides an in-depth analysis of the Soroswap core protocol, identifying any vulnerabilities and ensuring adherence to best practices.

---

# Glossary

#### Asset

Are digital tokens representing various forms of value, including cryptocurrencies, fiat currencies, and other financial instruments. They are uniquely identified by their **asset code** and the **issuer’s public key**, with [assets ](https://developers.stellar.org/docs/learn/fundamentals/stellar-data-structures/assets)created through payment operations by the issuing account.

Assets in Soroban, the smart contract platform of Stellar are also identified by the [Stellar Asset Contract](https://developers.stellar.org/docs/build/guides/tokens) (SAC), which is the address of the smart contract associated to the asset. 

For example, for the USDC token, a stable coin emmited by Circle, we have several ways to identify this asset

```
{
      "code": "USDC",
      "issuer": "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
      "contract": "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      "name": "USD Coin"
    }
```

In Soroswap we use either the SAC contract address, or the CODE:ISSUER combination

#### Automated market maker

An automated market maker is a smart contract on Soroban that holds on-chain liquidity reserves. Users can trade against these reserves at prices set by an automated market making formula.

#### Constant product formula

The automated market making algorithm used by Soroswap. See [x\*y=k](04-glossary.md#x--y--k).

**Core**\
Smart contracts that are essential for Soroswap to exist. Upgrading to a new version of core would require a liquidity migration.

**Factory**\
A smart contract that deploys a unique smart contract for any trading pair.

**Flash swap**\
A trade that uses the tokens being purchased before paying for them. Currently flash swaps are not supported in Soroswap as Soroban does not support reentrancy.

**Invariant**\
The "k" value in the constant product formula.

**Liquidity provider / LP**\
A liquidity provider is someone who deposits an equivalent value of two tokens into the liquidity pool within a pair. Liquidity providers take on price risk and are compensated with fees.

**Mid price**\
The price between what users can buy and sell tokens at a given moment. In Soroswap, this is the ratio of the two token reserves.

**Pair**\
A smart contract deployed from the Soroswap Factory that enables trading between two tokens. Pair contracts are also called "Pools" because they are the contracts that hold the liquidity of both tokens.

Example: The [`CDJDRGUCHANJDXALZVJ5IZVB76HX4MWCON5SHF4DE5HB64CBBR7W2ZCD`](https://stellar.expert/explorer/public/contract/CDJDRGUCHANJDXALZVJ5IZVB76HX4MWCON5SHF4DE5HB64CBBR7W2ZCD) contract is the Pair/Pool contract that holds liquidity for the XLM-USDx pair.

Check all Soroswap AMM pairs in https://dune.com/queries/4341139/7289687 

**Periphery**\
External smart contracts that are useful, but not required for Soroswap to exist. New periphery contracts can always be deployed without migrating liquidity.

**Price impact**\
The difference between the mid-price and the execution price of a trade.

**Pool**\
Liquidity within a pair is pooled across all liquidity providers. See "Pair"

**Slippage**\
The amount the price moves in a trading pair between when a transaction is submitted and when it is executed. Is the same as "price impact", and often is expressed in percentage.

**Token Interface**

Token interface standar. [Read more](https://developers.stellar.org/docs/smart-contracts/tokens/token-interface)

---

# Technical Reference

The Soroswap Protocol is inspired in [UniswapV2](https://github.com/Uniswap/v2-core/). Contracts are written in rust using the Soroban SDK, implementing all the functionalities of UniswapV2, with some limitations of rust (see further)

The Soroswap.Finance protocol consists in:

1.- A **Pair** contract (liquidity pool) (The **SoroswapPair** contract): They serve as automated market makers (AMM) and keep track of pool token balances. In Soroban, these contracts implements the Stellar token interface

2.- A **Factory** contract (The **SoroswapFactory** contract): Creates one Liquidity Pool Token smart contract per unique token pair.

With this approach, any user can start a new liquidity pool pair from the front-end, and hence without knowing how to code, or without needing to manually deploy a smart contract using the soroban-cli software.



Check all the code of the Soroswap AMM in [http://github.com/soroswap/core](http://github.com/soroswap/core)

---

# Smart Contracts Overview

Soroswap is a smart contract system. [Core](./#core) contracts provide fundamental safety guarantees for all parties interacting with Soroswap. [Periphery](./#periphery) contracts interact with one or more core contracts but are not themselves part of the core.

## Core

[Source code](https://github.com/soroswap/core)

The core consists of a singleton [factory](./#factory) and many [pairs](./#pairs), which the factory is responsible for creating and indexing. These contracts are quite minimal, even brutalist. The simple rationale for this is that contracts with a smaller surface area are easier to reason about, less bug-prone, and more functionally elegant. Perhaps the biggest upside of this design is that many desired properties of the system can be asserted directly in the code, leaving little room for error. One downside, however, is that core contracts are somewhat user-unfriendly. In fact, interacting directly with these contracts is not recommended for most use cases. Instead, a periphery contract should be used.

### SoroswapFactory:

[Reference documentation](02-soroswapfactory.md)

The factory holds the generic bytecode responsible for powering pairs. Its primary job is to create one and only one smart contract per unique token pair. It also contains logic to turn on the protocol charge.

### SoroswapPairs:

[Reference documentation](01-soroswappair.md)

Pairs have two primary purposes: serving as automated market makers and keeping track of pool token balances. They also expose data which can be used to build decentralized price oracles.

## Periphery:

[Source code](https://github.com/soroswap/core/tree/main/contracts)

The periphery is a constellation of smart contracts designed to support domain-specific interactions with the core. Because of Soroswap's permissionless nature, the contracts described below have no special privileges, and are in fact only a small subset of the universe of possible periphery-like contracts. However, they are useful examples of how to safely and efficiently interact with the Soroswap Protocol.

### SoroswapLibrary:

[Reference documentation](03-soroswaplibrary.md)

The library provides a variety of convenience functions for fetching data and pricing.

### SoroswapRouter:

[Reference documentation](04-soroswaprouter.md)

The router, which uses the library, fully supports all the basic requirements of a front-end offering trading and liquidity management functionality.&#x20;

---

# SoroswapPair Contract

The SoroswapPair Contract implements the token interface (hence, it has the same functions that any Stellar Asset Contract) and it also has the specific functions for a liquidity pool to exist.\
\
Check the code here: [https://github.com/soroswap/core/tree/main/contracts/pair](https://github.com/soroswap/core/tree/main/contracts/pair)

Here is the contract interface:

```rust
pub trait SoroswapPairTrait{
    /// Initializes a new Soroswap pair by setting token addresses, factory, and initial reserves.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    /// * `factory` - The address of the Soroswap factory contract.
    /// * `token_0` - The address of the first token in the pair.
    /// * `token_1` - The address of the second token in the pair.
    fn initialize(e: Env, factory: Address, token_0: Address, token_1: Address)-> Result<(), SoroswapPairError>;

    /// Deposits tokens into the Soroswap pair and mints LP tokens in return.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    /// * `to` - The address where the minted LP tokens will be sent.
    ///
    /// # Returns
    /// The amount of minted LP tokens.
    /// Possible errors:
    /// - `SoroswapPairError::NotInitialized`: The Soroswap pair has not been initialized.
    /// - `SoroswapPairError::DepositInsufficientAmountToken0`: Insufficient amount of token 0 sent.
    /// - `SoroswapPairError::DepositInsufficientAmountToken1`: Insufficient amount of token 1 sent.
    /// - `SoroswapPairError::DepositInsufficientFirstLiquidity`: Insufficient first liquidity minted.
    /// - `SoroswapPairError::DepositInsufficientLiquidityMinted`: Insufficient liquidity minted.
    /// - `SoroswapPairError::UpdateOverflow`: Overflow occurred during update.
    fn deposit(e:Env, to: Address)  -> Result<i128, SoroswapPairError>;

    /// Executes a token swap within the Soroswap pair.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    /// * `amount_0_out` - The desired amount of the first token to receive.
    /// * `amount_1_out` - The desired amount of the second token to receive.
    /// * `to` - The address where the swapped tokens will be sent.
    ////// # Errors
    /// Returns an error if the swap cannot be executed. Possible errors include:
    /// - `SoroswapPairError::NotInitialized`
    /// - `SoroswapPairError::SwapInsufficientOutputAmount`
    /// - `SoroswapPairError::SwapNegativesOutNotSupported`
    /// - `SoroswapPairError::SwapInsufficientLiquidity`
    /// - `SoroswapPairError::SwapInvalidTo`
    /// - `SoroswapPairError::SwapInsufficientInputAmount`
    /// - `SoroswapPairError::SwapNegativesInNotSupported`
    /// - `SoroswapPairError::SwapKConstantNotMet`: If the K constant condition is not met after the swap.
    fn swap(e: Env, amount_0_out: i128, amount_1_out: i128, to: Address) -> Result<(), SoroswapPairError>;

    /// Withdraws liquidity from the Soroswap pair, burning LP tokens and returning the corresponding tokens to the user.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    /// * `to` - The address where the withdrawn tokens will be sent.
    ///
    /// # Returns
    /// A tuple containing the amounts of token 0 and token 1 withdrawn from the pair.
    fn withdraw(e: Env, to: Address) -> Result<(i128, i128), SoroswapPairError>;

    /// Skims excess tokens from reserves and sends them to the specified address.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    /// * `to` - The address where the excess tokens will be sent.
    fn skim(e: Env, to: Address);

    /// Forces reserves to match current balances.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    fn sync(e: Env);

    /// Returns the address of the first token in the Soroswap pair.
    fn token_0(e: Env) -> Address;
    
    /// Returns the address of the second token in the Soroswap pair.
    fn token_1(e: Env) -> Address;
    
    /// Returns the address of the Soroswap factory contract.
    fn factory(e: Env) -> Address;

    /// Returns the value of the last product of reserves (`K`) stored in the contract.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    ///
    /// # Returns
    /// The value of the last product of reserves (`K`).
    fn k_last(e: Env) -> i128;

    /// Returns the current reserves and the last block timestamp.
    ///
    /// # Arguments
    /// * `e` - The runtime environment.
    ///
    /// # Returns
    /// A tuple containing the reserves of token 0 and token 1.
    fn get_reserves(e: Env) -> (i128, i128);

}


#[contract]
pub struct SoroswapPairToken;

#[contractimpl]
impl SoroswapPairToken {

    pub fn total_supply(e: Env) -> i128;
}

#[contractimpl]
impl token::Interface for SoroswapPairToken {

    fn allowance(e: Env, from: Address, spender: Address) -> i128;

    fn approve(e: Env, from: Address, spender: Address, amount: i128, expiration_ledger: u32)
    
    fn balance(e: Env, id: Address) -> i128;

    fn transfer(e: Env, from: Address, to: Address, amount: i128);

    fn transfer_from(e: Env, spender: Address, from: Address, to: Address, amount: i128);

    fn burn(e: Env, from: Address, amount: i128);

    fn burn_from(e: Env, spender: Address, from: Address, amount: i128);

    fn decimals(e: Env) -> u32;

    fn name(e: Env) -> Bytes;

    fn symbol(e: Env) -> Bytes;
}

```

---

# SoroswapFactory Contract

Creates one SoroswapPair (Liquidity Pool) smart contract per unique token pair. It does receive as initialization argument the WASM hash of a already installed SoroswapPair smart contract.

Check the code here: [https://github.com/soroswap/core/tree/main/contracts/factory/src](https://github.com/soroswap/core/tree/main/contracts/factory/src)

Here is the contract interface:

```rust

pub trait SoroswapFactoryTrait {

    /*  *** Read-only functions: *** */

    /// Returns the recipient of the fee.
    fn fee_to(e: Env) -> Result<Address, FactoryError>;

    /// Returns the address allowed to change `fee_to`.
    fn fee_to_setter(e: Env) -> Result<Address, FactoryError>;

    /// Checks if fees are enabled.
    fn fees_enabled(e: Env) -> Result<bool, FactoryError>;

    /// Returns the total number of pairs created through the factory so far.
    fn all_pairs_length(e: Env) -> Result<u32, FactoryError>;

    /// Returns the address of the pair for `token_a` and `token_b`, if it has been created.
    fn get_pair(e: Env, token_a: Address, token_b: Address) -> Result<Address, FactoryError>;

    /// Returns the address of the nth pair (0-indexed) created through the factory.
    fn all_pairs(e: Env, n: u32) -> Result<Address, FactoryError>;

    /// Returns a boolean indicating if a pair exists for the given `token_a` and `token_b`.
    fn pair_exists(e: Env, token_a: Address, token_b: Address) -> Result<bool, FactoryError>;

    /*  *** State-Changing Functions: *** */

    /// Sets the `fee_to_setter` address and initializes the factory.
    /// 
    /// # Arguments
    /// 
    /// * `e` - An instance of the `Env` struct.
    /// * `setter` - The address to set as the `fee_to_setter`.
    /// * `pair_wasm_hash` - The Wasm hash of the SoroswapPair contract.
    fn initialize(e: Env, setter: Address, pair_wasm_hash: BytesN<32>) -> Result<(), FactoryError>;

    /// Sets the `fee_to` address.
    /// 
    /// # Arguments
    /// 
    /// * `e` - An instance of the `Env` struct.
    /// * `to` - The address to set as the `fee_to`.
    fn set_fee_to(e: Env, to: Address)-> Result<(), FactoryError>;

    /// Sets the `fee_to_setter` address.
    /// 
    /// # Arguments
    /// 
    /// * `e` - An instance of the `Env` struct.
    /// * `new_setter` - The address to set as the new `fee_to_setter`.
    fn set_fee_to_setter(e: Env, new_setter: Address)-> Result<(), FactoryError>;

    /// Sets whether fees are enabled or disabled.
    /// 
    /// # Arguments
    /// 
    /// * `e` - An instance of the `Env` struct.
    /// * `is_enabled` - A boolean indicating whether fees are enabled or disabled.
    fn set_fees_enabled(e: Env, is_enabled: bool)-> Result<(), FactoryError>;

    /// Creates a pair for `token_a` and `token_b` if one doesn't exist already.
    /// 
    /// # Arguments
    /// 
    /// * `e` - An instance of the `Env` struct.
    /// * `token_a` - The address of the first token in the pair.
    /// * `token_b` - The address of the second token in the pair.
    fn create_pair(e: Env, token_a: Address, token_b: Address) -> Result<Address, FactoryError>;
}

```

---

# SoroswapRouter Contract

The `SoroswapRouter` contract is a smart contract on the Soroban blockchain that provides functions for token swapping and liquidity management in token pairs. It is designed for use in decentralized exchanges (DEX) and other DeFi applications on the Soroban platform.\
\
Check the code here: [https://github.com/soroswap/core/tree/main/contracts/router](https://github.com/soroswap/core/tree/main/contracts/router)



Here is the contract interface:

```rust
pub trait SoroswapRouterTrait {

    /// Initializes the contract and sets the factory address
    fn initialize(e: Env, factory: Address) -> Result<(), CombinedRouterError>;

    /// Adds liquidity to a token pair's pool, creating it if it doesn't exist. Ensures that exactly the desired amounts
    /// of both tokens are added, subject to minimum requirements.
    ///
    /// This function is responsible for transferring tokens from the user to the pool and minting liquidity tokens in return.
    ///
    /// # Arguments
    /// * `e` - The contract environment (`Env`) in which the contract is executing.
    /// * `token_a` - The address of the first token to add liquidity for.
    /// * `token_b` - The address of the second token to add liquidity for.
    /// * `amount_a_desired` - The desired amount of the first token to add.
    /// * `amount_b_desired` - The desired amount of the second token to add.
    /// * `amount_a_min` - The minimum required amount of the first token to add.
    /// * `amount_b_min` - The minimum required amount of the second token to add.
    /// * `to` - The address where the liquidity tokens will be minted and sent.
    /// * `deadline` - The deadline for executing the operation.
    ///
    /// # Returns
    /// A tuple containing the actual amounts of token A and B added to the pool, as well as the amount of liquidity tokens minted.
    fn add_liquidity(
        e: Env,
        token_a: Address,
        token_b: Address,
        amount_a_desired: i128,
        amount_b_desired: i128,
        amount_a_min: i128,
        amount_b_min: i128,
        to: Address,
        deadline: u64,
    ) -> Result<(i128, i128, i128), CombinedRouterError>;

    /// Removes liquidity from a token pair's pool.
    ///
    /// This function facilitates the removal of liquidity from a Soroswap Liquidity Pool by burning a specified amount
    /// of Liquidity Pool tokens (`liquidity`) owned by the caller. In return, it transfers back the corresponding
    /// amounts of the paired tokens (`token_a` and `token_b`) to the caller's specified address (`to`).
    ///
    /// # Arguments
    /// * `token_a` - The address of the first token in the Liquidity Pool.
    /// * `token_b` - The address of the second token in the Liquidity Pool.
    /// * `liquidity` - The desired amount of Liquidity Pool tokens to be burned.
    /// * `amount_a_min` - The minimum required amount of the first token to receive.
    /// * `amount_b_min` - The minimum required amount of the second token to receive.
    /// * `to` - The address where the paired tokens will be sent to, and from where the LP tokens will be taken.
    /// * `deadline` - The deadline for executing the operation.
    ///
    /// # Returns
    /// A tuple containing the amounts of `token_a` and `token_b` withdrawn from the pool.  
    fn remove_liquidity(
        e: Env,
        token_a: Address,
        token_b: Address,
        liquidity: i128,
        amount_a_min: i128,
        amount_b_min: i128,
        to: Address,
        deadline: u64,
    ) -> Result<(i128, i128), CombinedRouterError>;

    /// Swaps an exact amount of input tokens for as many output tokens as possible
    /// along the specified trading route. The route is determined by the `path` vector,
    /// where the first element is the input token, the last is the output token, 
    /// and any intermediate elements represent pairs to trade through if a direct pair does not exist.
    ///
    /// # Arguments
    /// * `amount_in` - The exact amount of input tokens to be swapped.
    /// * `amount_out_min` - The minimum required amount of output tokens to receive.
    /// * `path` - A vector representing the trading route, where the first element is the input token 
    ///            and the last is the output token. Intermediate elements represent pairs to trade through.
    /// * `to` - The address where the output tokens will be sent to.
    /// * `deadline` - The deadline for executing the operation.
    ///
    /// # Returns
    /// A vector containing the amounts of tokens received at each step of the trading route.
    fn swap_exact_tokens_for_tokens(
        e: Env,
        amount_in: i128,
        amount_out_min: i128,
        path: Vec<Address>,
        to: Address,
        deadline: u64,
    ) -> Result<Vec<i128>, CombinedRouterError>;

    /// Swaps tokens for an exact amount of output token, following the specified trading route.
    /// The route is determined by the `path` vector, where the first element is the input token,
    /// the last is the output token, and any intermediate elements represent pairs to trade through.
    ///
    /// # Arguments
    /// * `amount_out` - The exact amount of output token to be received.
    /// * `amount_in_max` - The maximum allowed amount of input tokens to be swapped.
    /// * `path` - A vector representing the trading route, where the first element is the input token 
    ///            and the last is the output token. Intermediate elements represent pairs to trade through.
    /// * `to` - The address where the output tokens will be sent to.
    /// * `deadline` - The deadline for executing the operation.
    ///
    /// # Returns
    /// A vector containing the amounts of tokens used at each step of the trading route.
    fn swap_tokens_for_exact_tokens(
        e: Env,
        amount_out: i128,
        amount_in_max: i128,
        path: Vec<Address>,
        to: Address,
        deadline: u64,
    ) -> Result<Vec<i128>, CombinedRouterError>;

    /*  *** Read only functions: *** */

    /// This function retrieves the factory contract's address associated with the provided environment.
    /// It also checks if the factory has been initialized and raises an assertion error if not.
    /// If the factory is not initialized, this code will raise an assertion error with the message "SoroswapRouter: not yet initialized".
    ///
    /// # Arguments
    /// * `e` - The contract environment (`Env`) in which the contract is executing.
    fn get_factory(e: Env) -> Result<Address, CombinedRouterError>;

    /*
    LIBRARY FUNCTIONS:
    */

    /// Calculates the deterministic address for a pair without making any external calls.
    /// check <https://github.com/paltalabs/deterministic-address-soroban>
    ///
    /// # Arguments
    ///
    /// * `e` - The environment.
    /// * `token_a` - The address of the first token.
    /// * `token_b` - The address of the second token.
    ///
    /// # Returns
    ///
    /// Returns `Result<Address, SoroswapLibraryError>` where `Ok` contains the deterministic address for the pair, and `Err` indicates an error such as identical tokens or an issue with sorting.
    fn router_pair_for(e: Env, token_a: Address, token_b: Address) -> Result<Address, CombinedRouterError>;

    /// Given some amount of an asset and pair reserves, returns an equivalent amount of the other asset.
    ///
    /// # Arguments
    ///
    /// * `amount_a` - The amount of the first asset.
    /// * `reserve_a` - Reserves of the first asset in the pair.
    /// * `reserve_b` - Reserves of the second asset in the pair.
    ///
    /// # Returns
    ///
    /// Returns `Result<i128, SoroswapLibraryError>` where `Ok` contains the calculated equivalent amount, and `Err` indicates an error such as insufficient amount or liquidity
    fn router_quote(amount_a: i128, reserve_a: i128, reserve_b: i128) -> Result<i128, CombinedRouterError>;

    /// Given an input amount of an asset and pair reserves, returns the maximum output amount of the other asset.
    ///
    /// # Arguments
    ///
    /// * `amount_in` - The input amount of the asset.
    /// * `reserve_in` - Reserves of the input asset in the pair.
    /// * `reserve_out` - Reserves of the output asset in the pair.
    ///
    /// # Returns
    ///
    /// Returns `Result<i128, SoroswapLibraryError>` where `Ok` contains the calculated maximum output amount, and `Err` indicates an error such as insufficient input amount or liquidity.
    fn router_get_amount_out(amount_in: i128, reserve_in: i128, reserve_out: i128) -> Result<i128, CombinedRouterError>;

    /// Given an output amount of an asset and pair reserves, returns a required input amount of the other asset.
    ///
    /// # Arguments
    ///
    /// * `amount_out` - The output amount of the asset.
    /// * `reserve_in` - Reserves of the input asset in the pair.
    /// * `reserve_out` - Reserves of the output asset in the pair.
    ///
    /// # Returns
    ///
    /// Returns `Result<i128, SoroswapLibraryError>` where `Ok` contains the required input amount, and `Err` indicates an error such as insufficient output amount or liquidity.
    fn router_get_amount_in(amount_out: i128, reserve_in: i128, reserve_out: i128) -> Result<i128, CombinedRouterError>;

    /// Performs chained get_amount_out calculations on any number of pairs.
    ///
    /// # Arguments
    ///
    /// * `e` - The environment.
    /// * `amount_in` - The input amount.
    /// * `path` - Vector of token addresses representing the path.
    ///
    /// # Returns
    ///
    /// Returns `Result<Vec<i128>, SoroswapLibraryError>` where `Ok` contains a vector of calculated amounts, and `Err` indicates an error such as an invalid path.
    fn router_get_amounts_out(e: Env, amount_in: i128, path: Vec<Address>) -> Result<Vec<i128>, CombinedRouterError>;
    
    /// Performs chained get_amount_in calculations on any number of pairs.
    ///
    /// # Arguments
    ///
    /// * `e` - The environment.
    /// * `amount_out` - The output amount.
    /// * `path` - Vector of token addresses representing the path.
    ///
    /// # Returns
    ///
    /// Returns `Result<Vec<i128>, SoroswapLibraryError>` where `Ok` contains a vector of calculated amounts, and `Err` indicates an error such as an invalid path.
    fn router_get_amounts_in(e: Env, amount_out: i128, path: Vec<Address>) -> Result<Vec<i128>, CombinedRouterError>;

}

```

## Initialization

### `initialize`

`initialize(e: Env, factory: Address)`

Initializes the router contract by setting the address of the factory contract, which manages pairs of tokens. This function should be called once to set up the router.

* `e` (Env): The contract environment.
* `factory` (Address): The address of the factory contract.

## Liquidity Management

### `add_liquidity`

````
```rust
dede

```
````

`add_liquidity(e: Env, token_a: Address, token`



`_b: Address, amount_a_desired: i128, amount_b_desired: i128, amount_a_min: i`

`128, amount_b_min: i128, to: Address, deadline: u64) -> (i128, i128, i128)`

Adds liquidity to a token pair's pool, creating it if it doesn't exist. Ensures that exactly the desired amounts of both tokens are added, subject to minimum requirements. This function is responsible for transferring tokens from the user to the pool and minting liquidity tokens in return.

* `e` (Env): The contract environment.
* `token_a` (Address): The address of the first token.
* `token_b` (Address): The address of the second token.
* `amount_a_desired` (i128): The desired amount of the first token.
* `amount_b_desired` (i128): The desired amount of the second token.
* `amount_a_min` (i128): The minimum required amount of the first token.
* `amount_b_min` (i128): The minimum required amount of the second token.
* `to` (Address): The address where the liquidity tokens will be minted and sent.
* `deadline` (u64): The deadline for executing the operation.

Returns a tuple containing:

* `amount_a` (i128): The actual amount of the first token added to the pool.
* `amount_b` (i128): The actual amount of the second token added to the pool.
* `liquidity` (i128): The amount of liquidity tokens minted.

***

### `remove_liquidity`

`remove_liquidity(e: Env, token_a: Address, token_b: Address, liquidity: i128, amount_a_min: i128, amount_b_min: i128, to: Address, deadline: u64) -> (i128, i128)`

Removes liquidity from a pool of token pairs. It transfers liquidity tokens from the user to the pool and returns the corresponding amounts of the two tokens.

* `e` (Env): The contract environment.
* `token_a` (Address): The address of the first token.
* `token_b` (Address): The address of the second token.
* `liquidity` (i128): The amount of liquidity tokens to remove.
* `amount_a_min` (i128): The minimum required amount of the first token.
* `amount_b_min` (i128): The minimum required amount of the second token.
* `to` (Address): The address where the removed tokens will be sent.
* `deadline` (u64): The deadline for executing the operation.

Returns a tuple containing:

* `amount_a` (i128): The actual amount of the first token received.
* `amount_b` (i128): The actual amount of the second token received.

## Token Swapping

### `swap_exact_tokens_for_tokens`

`swap_exact_tokens_for_tokens(e: Env, amount_in: i128, amount_out_min: i128, path: Vec<Address>, to: Address, deadline: u64) -> Vec<i128>`

Swaps an exact amount of input tokens for as many output tokens as possible. The swapping route is determined by the provided path, where the first element is the input token and the last is the output token.

* `e` (Env): The contract environment.
* `amount_in` (i128): The exact amount of input tokens to swap.
* `amount_out_min` (i128): The minimum required amount of output tokens.
* `path` (Vec): An array of token addresses representing the swap route.
* `to` (Address): The address where the output tokens will be sent.
* `deadline` (u64): The deadline for executing the operation.

Returns an array of amounts that represent the actual output tokens received.

***

### `swap_tokens_for_exact_tokens`

`swap_tokens_for_exact_tokens(e: Env, amount_out: i128, amount_in_max: i128, path: Vec<Address>, to: Address, deadline: u64) -> Vec<i128>`

Swaps tokens for an exact amount of output tokens. The swapping route is determined by the provided path, where the first element is the input token and the last is the output token.

* `e` (Env): The contract environment.
* `amount_out` (i128): The exact amount of output tokens to receive.
* `amount_in_max` (i128): The maximum allowed amount of input tokens.
* `path` (Vec): An array of token addresses representing the swap route.
* `to` (Address): The address where the input tokens will be taken from.
* `deadline` (u64): The deadline for executing the operation.

Returns an array of amounts that represent the actual input tokens used for the swap.

## Library Functions

These functions exist in the SoroswapRouter contract, but will use the SoroswapLibrary code:

### `router_quote`

`router_quote(amount_a: i128, reserve_a: i128, reserve_b: i128) -> i128`

Given some amount of an asset and pair reserves, returns an equivalent amount of the other asset.

* `amount_a` (i128): The input amount.
* `reserve_a` (i128): The reserve amount of the first asset.
* `reserve_b` (i128): The reserve amount of the second asset.

Returns the equivalent amount of the second asset.

***

### `router_get_amount_out`

`router_get_amount_out(amount_in: i128, reserve_in: i128, reserve_out: i128) -> i128`

Given an input amount of an asset and pair reserves, returns the maximum output amount of the other asset.

* `amount_in` (i128): The input amount.
* `reserve_in` (i128): The reserve amount of the input asset.
* `reserve_out` (i128): The reserve amount of the output asset.

Returns the maximum output amount of the output asset.

***

### `router_get_amount_in`

`router_get_amount_in(amount_out: i128, reserve_in: i128, reserve_out: i128) -> i128`

Given an output amount of an asset and pair reserves, returns a required input amount of the other asset.

* `amount_out` (i128): The output amount.
* `reserve_in` (i128): The reserve amount of the input asset.
* `reserve_out` (i128): The reserve amount of the output asset.

Returns the required input amount of the input asset.

### `router_get_amounts_out`

```rust
fn router_get_amounts_out(e: Env, amount_in: i128, path: Vec<Address>) -> Vec<i128>
```

Performs chained `getAmountOut` calculations on any number of pairs. Given an input amount, it calculates the expected output amounts through the specified token path.

### `router_get_amounts_in`

```rust
fn router_get_amounts_in(e: Env, amount_out: i128, path: Vec<Address>) -> Vec<i128>
```

Performs chained `getAmountIn` calculations on any number of pairs. Given an output amount, it calculates the required input amounts through the specified token path.

These library functions are used in the router to facilitate various operations, such as estimating amounts, performing swaps, and managing liquidity. They play a crucial role in ensuring accurate and efficient token exchange within the Soroswap ecosystem.

---

# SoroswapLibrary Contract

The SoroswapLibrary is a rust crate that anyone can implement in their smart contracts. Check all the documentation here: [https://docs.rs/soroswap-library/latest/soroswap\_library/](https://docs.rs/soroswap-library/latest/soroswap_library/)



### Code

You can find the Soroswap library code on the [Soroswap GitHub repository](https://github.com/soroswap/core/tree/main/contracts/library).  in [https://github.com/soroswap/core/tree/main/contracts/library](https://github.com/soroswap/core/tree/main/contracts/library)





### Usage as a crate



1.- Add this to your Cargo.toml:

\[dependencies] soroswap-library = ""

2.- Import it:

```
use soroswap_library;
```

3.- Use it:

```
let quote = soroswap_library::quote(amount_a, reserve_a, reserve_b)

```

### Internal Functions

#### sort\_tokens

```rust
fn sort_tokens(token_a: Address, token_b: Address) -> (Address, Address);
```

Sorts token addresses.

#### pair\_for

```rust
fn pair_for(e: Env, factory: Address, token_a: Address, token_b: Address) -> Address;
```

Calculates the address for a pair without making any external calls.

#### get\_reserves

```rust
fn get_reserves(e: Env, factory: Address, token_a: Address, token_b: Address) -> (i128, i128);
```

Fetches and sorts the reserves for a pair.

#### quote

```rust
fn quote(amount_a: i128, reserve_a: i128, reserve_b: i128) -> i128;
```

Given some asset amount and reserves, returns an amount of the other asset representing an equivalent value.

* Useful for calculating optimal token amounts before calling `deposit`.

#### get\_amount\_out

```rust
fn get_amount_out(amount_in: i128, reserve_in: i128, reserve_out: i128) -> i128;
```

Given an input asset amount, returns the maximum output amount of the other asset (accounting for fees) given reserves.

* Used in `get_amounts_out`.

#### get\_amount\_in

```rust
fn get_amount_in(amount_out: i128, reserve_in: i128, reserve_out: i128) -> i128;
```

Returns the minimum input asset amount required to buy the given output asset amount (accounting for fees) given reserves.

* Used in `get_amounts_in`.

#### get\_amounts\_out

```rust
fn get_amounts_out(e: Env, factory: Address, amount_in: i128, path: Vec<Address>) -> Vec<i128>;
```

Given an input asset amount and an array of token addresses, calculates all subsequent maximum output token amounts by calling `get_reserves` for each pair of token addresses in the path in turn and using these to call `get_amount_out`.

* Useful for calculating optimal token amounts before calling `swap`.

#### get\_amounts\_in

```rust
fn get_amounts_in(e: Env, factory: Address, amount_out: i128, path: Vec<Address>) -> Vec<i128>;
```

Given an output asset amount and an array of token addresses, calculates all preceding minimum input token amounts by calling `get_reserves` for each pair of token addresses in the path in turn and using these to call `get_amount_in`.

* Useful for calculating optimal token amounts before calling `swap`.

This Soroswap library is designed to facilitate efficient and precise token swapping and handling in the Soroswap.Finance ecosystem. It includes a range of functions to support various aspects of token management, from sorting token addresses to calculating reserves and performing chained calculations for different pairs. These functions are crucial for the optimal functioning of Soroswap in the Stellar network.

---

# Deployed Addresses

## Mainnet Addresses

Soroswap.Finance is live on **Mainnet**

* Deployer Address: [`GAYPUMZFDKUEUJ4LPTHVXVG2GD5B6AV5GGLYDMSZXCSI4QILQKSY25JI`](https://stellar.expert/explorer/public/account/GAYPUMZFDKUEUJ4LPTHVXVG2GD5B6AV5GGLYDMSZXCSI4QILQKSY25JI)
* SoroswapFactory: `CA4HEQTL2WPEUYKYKCDOHCDNIV4QHNJ7EL4J4NQ6VADP7SYHVRYZ7AW2`
  * [See in Stellar.Expert](https://stellar.expert/explorer/public/contract/CA4HEQTL2WPEUYKYKCDOHCDNIV4QHNJ7EL4J4NQ6VADP7SYHVRYZ7AW2)
  * [Se in StellarChain](https://stellarchain.io/contracts/3872426bd59e4a61585086e3886d457903b53f22f89e361ea806ffcb07ac719f)
  * [See in SorobanExp](https://www.sorobanexp.com/blockchain/ct/contract/CAG5LRYQ5JVEUI5TEID72EYOVX44TTUJT5BQR2J6J77FH65PCCFAJDDH)
* SoroswapRouter: `CAG5LRYQ5JVEUI5TEID72EYOVX44TTUJT5BQR2J6J77FH65PCCFAJDDH`
  * [See in Stellar.Expert](https://stellar.expert/explorer/public/contract/CAG5LRYQ5JVEUI5TEID72EYOVX44TTUJT5BQR2J6J77FH65PCCFAJDDH)
  * [See in StellarChain](https://stellarchain.io/contracts/0dd5c710ea6a4a23b32207fd130eadf9c9ce899f4308e93e4ffe53fbaf108a04)
  * [See in SorobanExp](https://www.sorobanexp.com/blockchain/ct/contract/CAG5LRYQ5JVEUI5TEID72EYOVX44TTUJT5BQR2J6J77FH65PCCFAJDDH)

These addreesses can also be found in [https://github.com/soroswap/core/blob/main/public/mainnet.contracts.json](https://github.com/soroswap/core/blob/main/public/mainnet.contracts.json)

## Testnet Addresses

Check the current Testnet addresses in [https://github.com/soroswap/core/blob/main/public/testnet.contracts.json](https://github.com/soroswap/core/blob/main/public/testnet.contracts.json)

---

# Error Codes

Error Codes in the Soroswap AMM Smart Contractws are organized by Contrract

**SoroswapPair** returns errors in **100s**

**SoroswapFactory** returns errors in **200s**

**SorowsapRouter** returns errors in **500s**

```rust

pub enum SoroswapPairError {
    /// SoroswapPair: already initialized
    InitializeAlreadyInitialized = 101,
    /// SoroswapPair: not yet initialized
    NotInitialized = 102,

    /// SoroswapPair: token_0 must be less than token_1 while initializing
    InitializeTokenOrderInvalid = 103,

    /// SoroswapPair: insufficient amount of token 0 sent while doing deposit
    DepositInsufficientAmountToken0 = 104,
    /// SoroswapPair: insufficient amount of token 1 sent while doing deposit
    DepositInsufficientAmountToken1 = 105,
    /// SoroswapPair: insufficient first liquidity minted while doing deposit
    DepositInsufficientFirstLiquidity = 106,
    /// SoroswapPair: insufficient liquidity minted while doing deposit
    DepositInsufficientLiquidityMinted = 107,
    /// SoroswapPair: insufficient output amount while doing deposDepositit

    SwapInsufficientOutputAmount = 108,
    /// SoroswapPair: negatives amounts out dont supported while doing swap
    SwapNegativesOutNotSupported = 109,
    /// SoroswapPair: insufficient liquidity to do the swap
    SwapInsufficientLiquidity = 110,
    /// SoroswapPair: invalid to to do the swap
    SwapInvalidTo = 111,
    /// SoroswapPair: insufficient input amount while doing swap
    SwapInsufficientInputAmount = 112,
    /// SoroswapPair: negatives amounts in dont supported while doing swap
    SwapNegativesInNotSupported = 113,
    /// SoroswapPair: K constant is not met while doing swap
    SwapKConstantNotMet = 114,

    /// SoroswapPair: liquidity was not initialized yet while doing withdraw
    WithdrawLiquidityNotInitialized = 115,
    /// SoroswapPair: insufficient sent shares while doing withdraw
    WithdrawInsufficientSentShares = 116,
    /// SoroswapPair: insufficient liquidity burned while doing withdraw
    WithdrawInsufficientLiquidityBurned = 117,

    /// SoroswapPair: OVERFLOW while updating
    UpdateOverflow = 118,
}

pub enum FactoryError {
    /// SoroswapFactory: not yet initialized
    NotInitialized = 201,

    /// SoroswapFactory: token_a and token_b have identical addresses
    CreatePairIdenticalTokens = 202,
    /// SoroswapFactory: pair already exists between token_a and token_b
    CreatePairAlreadyExists = 203,

    /// SoroswapFactory: already initialized
    InitializeAlreadyInitialized = 204,

    /// SoroswapFactory: pair does not exist
    PairDoesNotExist = 205,

    /// SoroswapFactory: index does not exist
    IndexDoesNotExist = 206,
}

pub enum CombinedRouterError {
    RouterNotInitialized = 501,
    RouterNegativeNotAllowed = 502,
    RouterDeadlineExpired = 503,
    RouterInitializeAlreadyInitialized = 504,
    RouterInsufficientAAmount = 505,
    RouterInsufficientBAmount = 506,
    RouterInsufficientOutputAmount = 507,
    RouterExcessiveInputAmount = 508,
    RouterPairDoesNotExist = 509,

    LibraryInsufficientAmount = 510,
    LibraryInsufficientLiquidity = 511,
    LibraryInsufficientInputAmount = 512,
    LibraryInsufficientOutputAmount = 513,
    LibraryInvalidPath = 514,
    LibrarySortIdenticalTokens = 515,
}
```

---

# Design Decisions

The following sections describe some of the notable design decisions made in the Soroswap Protocol. These are safe to skip unless you're interested in gaining a deep technical understanding of how the protocol works under the hood, or writing smart contract integrations!

## Sending Tokens

Typically, smart contracts which need tokens to perform some functionality require would-be interactors to first make an approval on the token contract, then call a function that in turn calls transferFrom on the token contract. This is _not_ how V2 pairs accept tokens. Instead, pairs check their token balances at the _end_ of every interaction. Then, at the beginning of the _next_ interaction, current balances are differenced against the stored values to determine the amount of tokens that were sent by the current interactor. See the [whitepaper](../../whitepaper.pdf) for a justification of why this is the case, but the takeaway is that **tokens must be transferred to the pair before calling any token-requiring method** (the one exception to this rule is [Flash Swaps](../../01-concepts/03-flash-swaps.md#flash-swaps)).

The router fully supports interacting with any WETH pair via ETH.

## Minimum Liquidity

To ameliorate rounding errors and increase the theoretical minimum tick size for liquidity provision, pairs burn the first [MINIMUM\_LIQUIDITY](02-design-decisions.md#minimum-liquidity) pool tokens. For the vast majority of pairs, this will represent a trivial value. The burning happens automatically during the first liquidity provision, after which point the [totalSupply](02-design-decisions.md) is forevermore bounded.

---

# Using Soroswap with TypeScript

The Soroswap protocol allows you to interact with Stellar's smart contract platform: Soroban. In this section, we will explore how to write TypeScript scripts to use the contracts in our own automations or applications:

### Prerequisites:

Before starting, it is necessary to clarify that to understand what we are doing here, you need to have a good understanding of TypeScript, smart contracts, and how a blockchain works. In addition, you need to know how to use [stellar-sdk](https://stellar.github.io/js-stellar-sdk/#usage) since we will use its [TransactionBuilder](https://stellar.github.io/js-stellar-sdk/TransactionBuilder.html) class to create operations, simulate, sign, and send transactions. Additionally, some types and functions for transforming values.

> \[!Tip] If you need practical examples of how to create a transaction builder or how to use the SDK in general, you can guide yourself from our projects [soroswap/core](https://github.com/soroswap/core/tree/main/scripts) and [paltalabs/mercury-client.](https://github.com/paltalabs/mercury-client)

## Build, sign & send:

> \[!Warning] For educational purposes, we will use an adaptation of the TransactionBuilder used in the [soroswap/core](https://github.com/soroswap/core/) repository. The code will need adjustments depending on your project and work methodology, so we recommend always working hand-in-hand with the official Stellar SDK [Documentation](https://stellar.github.io/js-stellar-sdk/#usage) to be able to build one tailored to your needs.

#### Installing Stellar SDK

In this guide, we will be using the `^11.2.2` version of Stellar SDK, available through npm or yarn as["@stellar/stellar-sdk"](https://www.npmjs.com/package/@stellar/stellar-sdk). To do this, we will install it as follows:

```bash
npm i soroswap-router-sdk@11.2.2
```

or

```bash
yarn add soroswap-router-sdk@11.2.2
```

### Building the transaction:

In order to execute our operations on the blockchain, we will first need to create a transaction to send ([Forward](09-using-soroswap-with-typescript.md#methods) in this guide you will find the available methods and their predefined parameters):

First, we must create an instance of the router contract using the Contract class, giving as an argument the Address of the contract and using its call method, we create the operation delivering as arguments the method of the operation (for example: "swap\_exact\_assets\_for\_assets") and the parameters defined to then create the transaction with our TransactionBuilder:

> \[!Tip] If you need to thoroughly review all the methods available in the router contract or simply want to know how the contract works, you can review it directly [here](https://github.com/soroswap/core/blob/febe01d8bbd9677a902863925efcc509129b0306/contracts/router/src/lib.rs) in the official repository of Soroswap.

> \[!Tip] To obtain the routerAddress respective to the network on which you want to operate, you can make a direct call to the Soroswap api in the following way:
>
> ```curl
> curl -XGET -H "Content-type: application/json" 'https://api.soroswap.finance/api/${network}/router'
> ```

```typescript
const horizonServer = stellarSDK.Horizon.Server("horizon-rpc url");
const createTx = async (account: Keypair, routerAddress: Address, method: String) => {
  const createTxBuilder = async (account: Keypair): Promise<TransactionBuilder> => {
      try {
        const account: Account = await horizonServer.getAccount(account.publicKey());
        return new TransactionBuilder(account, {
          fee: stellarSdk.BASE_FEE,
          timebounds: { minTime: 0, maxTime: 0 },
          networkPassphrase: NETWORK.PASSPHRASE,
        });
      } catch (e: any) {
        console.error(e);
        throw Error("unable to create txBuilder");
      }
    }
    const contractInstance = new Contract(routerAddress);
    const contractOperation = contractInstance.call( method, ...params );
    const txBuilder = await createTxBuilder(account);
    txBuilder.addOperation(contractOperation);
    const tx = txBuilder.build();
  return tx;
}
```

### Simulate, sign & send the transaction:

Once you have created the transaction, we must deliver it as an argument to our function to invoke transactions together with the keypair of the account with which we are going to operate. This function will be responsible for simulating the transaction (to verify the validity of this same one) and if everything is correct, we will proceed to assemble, sign and send the transaction:

```typescript
const horizonServer = stellarSDK.Horizon.Server("horizon-rpc url");
const invokeTransaction = async (tx: Transaction, source: Keypair) => {
  const simulatedTx = await server.simulateTransaction(tx);
  //If you only want to review the transaction, you can return the simulatedTx object to explore it in detail.
  // return simulatedTx;
  const txResources = simulatedTx.transactionData.build().resources();
  simulatedTx.minResourceFee = (Number(simulatedTx.minResourceFee) + 10000000).toString();
  const sim_tx_data = simulatedTx.transactionData
    .setResources(
      txResources.instructions() == 0 ? 0 : txResources.instructions() + 500000,
      txResources.readBytes(),
      txResources.writeBytes()
    )
    .build();
  const assemble_tx = SorobanRpc.assembleTransaction(tx, simulatedTx);
  sim_tx_data.resourceFee(
    xdr.Int64.fromString((Number(sim_tx_data.resourceFee().toString()) + 100000).toString())
  );
  const prepped_tx = assemble_tx.setSorobanData(sim_tx_data).build();
  prepped_tx.sign(source);
  const tx_hash = prepped_tx.hash().toString("hex");

  console.log("submitting tx...");
  let response: txResponse = await horizonServer.sendTransaction(prepped_tx);
  let status: txStatus = response.status;
  console.log(`Hash: ${tx_hash}`);
  // Poll this until the status is not "NOT_FOUND"
  while (status === "PENDING" || status === "NOT_FOUND") {
    // See if the transaction is complete
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("checking tx...");
    response = await horizonServer.getTransaction(tx_hash);
    status = response.status;
  }
  return response;
}
```

After calling this function, we can inspect the `response` object to verify that everything went as expected.

## Methods:

> \[!Note] The operations available in the router contract that we will review in this documentation are:
>
> * [Add\_liquidity](09-using-soroswap-with-typescript.md#add-liquidity-to-a-pool): "add\_liquidity"
> * [Remove\_liquidity](09-using-soroswap-with-typescript.md#remove-liquidity-from-a-pool): "remove\_liquidity"
> * [Swap](09-using-soroswap-with-typescript.md#swap): "swap\_exact\_assets\_for\_assets"

### Add liquidity to a pool:

> \[!Note] `method: "add_liquidity"` [Reference](03-smart-contracts/04-soroswaprouter.md#add\_liquidity)

To add liquidity to a Soroswap pool (or deposit funds), we will need to define the following parameters:

```typescript
asset_a: Address;
asset_b: Address;
amount_a_desired: Number | BigNumber;
amount_b_desired: Number | BigNumber;
amount_a_min: Number | BigNumber;
amount_b_min: Number | BigNumber;
account: Address;
getCurrentTimePlusOneHour: Number;
```

* \[asset\_a, asset\_b]: These are the respective addresses of the asset pair to which we want to add liquidity.
* \[amount\_a\_desired, amount\_b\_desired]: These are the liquidity amounts you want to add to the respective assets.
* \[amount\_a\_min, amount\_b\_min]: These are the minimum amounts required to add to each asset, respectively.
* account: This is the address where the tokens will be sent.
* getCurrentTimePlusOneHour: This is the maximum date by which the transaction can be executed.

> \[!Note] All of these values must be converted to [ScVal](https://gist.github.com/Smephite/09b40e842ef454effe4693e0d18246d7#scval-low-level-description) as shown below.

```typescript

const addLiquidityParams: xdr.ScVal[] = [
  new Address(asset_a.contract).toScVal(),
  new Address(asset_a.contract).toScVal(),
  nativeToScVal(amount_a_desired, { type: "i128" }),
  nativeToScVal(amount_b_desired, { type: "i128" }),
  nativeToScVal(amount_a_min, { type: "i128" }),
  nativeToScVal(amount_b_min, { type: "i128" }),
  new Address(account.publicKey()).toScVal(),
  nativeToScVal(getCurrentTimePlusOneHour(), { type: "u64" }),
];
```

### Remove liquidity from a pool:

> \[!Note] `method: "remove_liquidity"` [Reference](03-smart-contracts/04-soroswaprouter.md#remove\_liquidity)

To remove liquidity from a Soroswap pool (or withdraw funds), we will need to define the following parameters:

```typescript
asset_a: Address;
asset_b: Address;
liquidity: Number | BigNumber;
amount_a_min: Number | BigNumber;
amount_b_min: Number | BigNumber;
account: Address;
getCurrentTimePlusOneHour: Number;

```

* \[asset\_a, asset\_b]: These are the respective addresses of the asset pair from which we want to remove liquidity.
* Liquidity: This represents the desired amount of assets to remove from the liquidity pool.
* \[amount\_a\_min, amount\_b\_min]: These are the minimum amounts required to receive from each asset, respectively.
* account: This is the address where the tokens will be sent.
* getCurrentTimePlusOneHour: This is the maximum date by which the transaction can be executed.

> \[!Note] All of these values must be converted to [ScVal](https://gist.github.com/Smephite/09b40e842ef454effe4693e0d18246d7#scval-low-level-description) as shown below.

```typescript
const removeLiquidityParams: xdr.ScVal[] = [
  new Address(token0.contract).toScVal(),
  new Address(token1.contract).toScVal(),
  nativeToScVal(lpBalance, { type: "i128" }),
  nativeToScVal(0, { type: "i128" }),
  nativeToScVal(0, { type: "i128" }),
  new Address(testAccount.publicKey()).toScVal(),
  nativeToScVal(getCurrentTimePlusOneHour(), { type: "u64" }),
];
```

### Swap:

> \[!Note] `method: "swap_exact_assets_for_assets"` [Reference](03-smart-contracts/04-soroswaprouter.md#swap\_exact\_tokens\_for\_tokens)

To create a Swap operation on Soroswap, we will need to define the following parameters:

```typescript
amount_in: Number | BigNumber;
amount_out_min: Number | BigNumber;
path: Address[];
account: KeyPair;
getCurrentTimePlusOneHour: Number;
```

* amount\_in: Represents the desired amount to be exchanged.
* amount\_out\_min: Represents the minimum acceptable amount to receive for this operation.
* path: Represents the exchange path to follow to obtain the requested asset.
* account: Represents the account where the transaction will be executed.
* getCurrentTimePlusOneHour: Represents the maximum date by which this transaction can be executed.

> \[!Note] All of these values must be converted to [ScVal](https://gist.github.com/Smephite/09b40e842ef454effe4693e0d18246d7#scval-low-level-description) as shown below.

```typescript
const swapParams: xdr.ScVal[] = [
    nativeToScVal(amount_in, { type: "i128" }),
    nativeToScVal(amount_out_min, { type: "i128" }),
    nativeToScVal(path, { type: "Vec" }),
    new Address(account.publicKey()).toScVal(),
    nativeToScVal(getCurrentTimePlusOneHour(), { type: "u64" }),
];
```

## Finding the Most Optimal Path:

It is important to note that: the swap methods in the router will iterate through the path array step by step, performing the indicated exchanges between assets (0 <-> 1, 1 <-> 2, ... n <-> n+1) until the entire route is completed. This is why it is crucial to find the most optimal route to avoid wasting resources on unnecessary transactions.

This is why we at Soroswap have developed [soroswap-router-sdk](https://github.com/soroswap/soroswap-router-sdk), a tool that helps you find the most efficient route for exchanging assets, taking into account the available reserves in Soroswap's liquidity pools.

To utilize this tool, we'll install the `1.2.4` version of Soroswap Router SDK into our project. It's available through npm or yarn as ["soroswap-router-sdk"](https://www.npmjs.com/package/soroswap-router-sdk).

```bash
npm i soroswap-router-sdk
```

or

```bash
yarn add soroswap-router-sdk
```

Then, we import it into our project and use it to calculate the optimal path.

```typescript
import {
  Router,
  Token,
  CurrencyAmount,
  TradeType,
  Networks,
} from "soroswap-router-sdk";

const asset0_address = "address0_address";
const asset1_address = "address1_address";

const ASSEET0_TOKEN = new Token(
  Networks.TESTNET,
  asset0_address,
  7, //Number of decimals
  "asset0_symbol",
  "asset0_name"
);

const USDC_TOKEN = new Token(
  Networks.TESTNET,
  asset1_address,
  7, //Number of decimals
  "asset1_symbol",
  "asset1_name"
);

const amount = 10000000; //In stellar Stroops

const router = new Router({
  backendUrl: "https://my-backend.com/", //soroswap backend
  backendApiKey: "my-api-key", // soroswap backend api key
  pairsCacheInSeconds: 20, // pairs cache duration in seconds
  protocols: [Protocols.SOROSWAP], // protocols to be used
  network: Networks.TESTNET, // network to be used
});

const currencyAmount = CurrencyAmount.fromRawAmount(USDC_TOKEN, amount);
const quoteCurrency = ASSEET0_TOKEN;

const route = await router.route(
  currencyAmount,
  quoteCurrency,
  TradeType.EXACT_INPUT
);

console.log(route.trade.path);

//Output: ["0x...", "0x...", "0x..."]

```

This will give us the `route` object, which contains an ordered array of addresses representing the most optimal route for the exchange within the `trade.path` property. If you need more information on how to use the Router-sdk or how it works, you can do it directly in the repository of [soroswap/soroswap-router-sdk](https://github.com/soroswap/soroswap-router-sdk)

## Putting it All Together:

Once we have created our methods for interacting with the blockchain and defined the type of operation to be performed along with its parameters, we only need to call the functions to execute our transaction:

for this example we will perform a swap operation on testnet with a random account:

```typescript
const executeSwap = async () => {
  const account = stellarSdk.Keypair.random();
  const routerAddress = axios.get("https://api.soroswap.finance/api/testnet/router");
  const method = "swap_exact_assets_for_assets";
  const amount_in = 2500000; //In stellar stroops
  const amount_out_min = 0; //In stellar stroops
  const path = route.trade.path;
  const swapParams: xdr.ScVal[] = [
      nativeToScVal(amount_in, { type: "i128" }),
      nativeToScVal(amount_out_min, { type: "i128" }),
      nativeToScVal(path, { type: "Vec" }),
      new Address(account.publicKey()).toScVal(),
      nativeToScVal(getCurrentTimePlusOneHour(), { type: "u64" })
  ];
  const tx = await createTx(account, routerAddress, method);
  const res = await invokeTransaction(tx, account);
  console.log(res);
}

executeSwap();
```

---

# Smart Contract Integration

How can I integrate Soroswap Liquidity Pools in my DeFi protocols using smart contracts?

---

# Soroswap vs UniswapV2

Here we can see a comparison of the implementation of UniswapV2 and Soroswap.

| **Feature**             | **UniswapV2**                                                   | **Soroswap**                                                       |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Algorithm**           | Automated Market Maker (AMM) with constant product formula      | Optimized routing algorithm for multi-pool efficiency              |
| **Liquidity Pools**     | Direct swaps between two tokens; liquidity in equal value pairs | Supports multi-hop swaps through intermediate pools                |
| **Smart Contracts**     | Two core contracts: factory and router                          | Advanced contracts with aggregated liquidity and custom routing    |
| **Routing**             | Direct matching within or between pools                         | Sophisticated routing with multiple paths for optimal rates        |
| **Efficiency**          | Fast execution; may not always provide optimal rates            | Improved efficiency with better trading rates through optimization |
| **Liquidity Provision** | 50/50 ratio token pairs; straightforward addition/removal       | Complex arrangements; support for multiple AMMs and protocols      |
| **Incentives**          | Fees from trades within pools                                   | Aggregated fees and potentially higher returns                     |
| **Security**            | Extensive testing and audits; proven track record               | Rigorous audits; advanced security measures                        |
| **User Experience**     | Simple, user-friendly interface                                 | Enhanced features; advanced routing and multi-chain support        |
| **Documentation**       | Well-established, extensive community support                   | Comprehensive documentation and support for new features           |

---

# SoroswapPair vs UniswapV2Pair

The sources for the following two sections are:

* [https://blog.uniswap.org/uniswap-v2](https://blog.uniswap.org/uniswap-v2) &#x20;
* [https://rskswap.com/audit.html](https://rskswap.com/audit.html)

&#x20; The Pair contract for Soroswap, written in Rust, is inspired by the UniswapV2Pair contract, which is written in Solidity. However, in its first version (0.0.1), the SoroswapPairV0.0.1 does not currently implement many functions, variables, events, and other features that are present in the UniswapV2Pair contract.

In the next two sections, we will compare the Soroswap pair contract with the UniswapV2 pair contract, using the latter as a reference point. This allows us to discuss why certain features are implemented or not implemented in the Soroswap pair contract.

## Events: Included!

The UniswapV2 pair contract has four events: Mint, Burn, Swap and Sync. The corresponding events in the Soroswap pair contract are: deposit, withdraw, swap, and sync.

```javascript
 event Mint(address indexed sender, uint amount0, uint amount1);
 event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
 event Swap(
     address indexed sender,
     uint amount0In,
     uint amount1In,
     uint amount0Out,
     uint amount1Out,
     address indexed to 
 );
 event Sync(uint112 reserve0, uint112 reserve1);
```

Since Mint already exists as an event in the SAC token interface, an alternative name is necessary. For context, Ethereum's ERC20 protocol emits a Transfer event when a token is minted. Refer to [https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol) for details.

Mint may not be the most descriptive name for this event, as the arguments are amount0 and amount1. A more fitting name is deposit, which represents the user's deposit of amount0 units of token0 and amount1 units of token1. Further, tracking the minted tokens is unnecessary, as the Mint event (LP units of LP tokens) is already being emitted. As a result, we've chosen to use deposit for this event.

Similarly, Burn has been replaced with withdraw. In Soroban, msg.sender is not utilized, so the event implementation becomes:

```rust
events::withdraw(&e, to, out_a, out_b, to)
```

The Swap event is implemented in Rust in a manner essentially equivalent to UniswapV2:

```rust
pub(crate) fn swap(
    e: &Env,
    sender: Address,
    amount_0_in: i128,
    amount_1_in: i128,
    amount_0_out: i128,
    amount_1_out: i128,
    to: Address,
) {
    let topics = (PAIR, Symbol::new(e, "swap"), sender);
    e.events().publish(topics, (amount_0_in, amount_1_in, amount_0_out,amount_1_out,  to));
}
```

The sync event is used in Rust to update the reserves after each change.

```rust
pub(crate) fn sync(e: &Env, reserve_0: u64, reserve_1: u64) {
    let topics = (PAIR, Symbol::new(e, "sync"));
    e.events().publish(topics, (reserve_0, reserve_1));
}
```

**These features are all implemented in the code!**

***

***

## SafeMath: Included!

In Solidity, the SafeMath library is used to validate arithmetic operations and prevent integer overflow and underflow. When such a situation arise, the library throws an exception, which effectively reverts the transaction.

In Rust, we can achieve a similar level of protection by enabling the [overflow check](https://doc.rust-lang.org/rustc/codegen-optionsindex.html#overflow-checks) flag during the compilation process with the following code:

```
[profile.release]
overflow-checks = true
```

In addition, we have an overflow-safe implementation of functions `checked_add`, `checked_mul`, `checked_div`, and `checked_sub`. You can explore these functions and test their functionality in this repository: [https://github.com/esteblock/overflow-soroban/](https://github.com/esteblock/overflow-soroban/)

When it comes to preventing overflow in Soroban, we have the two solutions mentioned above: using the compiler flag or the overflow-safe functions. Yet, as we will see in the oracle section, there are cases where overflow is the intended result. Hence, we will bypass the compiler flag option, choosing instead to use overflow-safe functions for our arithmetic operations. Exceptions will be made only in those unique cases where overflow is desirable.

***

About underflow, it is worth noting that since we are using i128, a signed integer type, underflow will not occur as it would simply result in negative numbers. However, to ensure the integrity of our calculations, we've implemented checks where necessary. For instance:

```rust
fn put_reserve_a(e: &Env, amount: i128) {
    if amount < 0 {
        panic!("put_reserve_a: amount cannot be negative")
    }
    e.storage().set(&DataKey::Reserve0, &amount)
}
```

**Overflow and underflow safety are included in the code!**

***

***

## Reserves Function: included!

In UniswapV2, the reserves function returns the reserves of token0 and token1, along with the timestamp of the last block.

```javascript
 function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast) {
     _reserve0 = reserve0;
     _reserve1 = reserve1;
     _blockTimestampLast = blockTimestampLast;
 }
```

Soroswap adopts a similar approach, implementing this functionality in the get\_reserves function.

```rust
  fn get_reserves(e: Env) -> (i128, i128, i128) {
       (get_reserve_a(&e), get_reserve_b(&e), get_block_timestamp_last(&e))
   }

fn get_reserve_0(e: &Env) -> i128 {
   e.storage().get_unchecked(&DataKey::Reserve0).unwrap()
}

fn get_reserve_1(e: &Env) -> i128 {
   e.storage().get_unchecked(&DataKey::Reserve1).unwrap()
}
```

Additionally, the `get_block_timestamp_last` function in Soroswap returns the timestamp of the last block, defaulting to 0 if it doesn't exist.

```rust
fn get_block_timestamp_last(e: &Env) -> u64 {

   if let Some(block_timestamp_last) = e.storage().get(&DataKey::BlockTimestampLast) {
       block_timestamp_last.unwrap()
   } else {
       0
   }
}
```

**This functionality is integrated directly into the Soroswap codebase!**

***

***

## Name of Pairs: included!

In UniswapV2, the name and symbol of the token pairs are designated as follows:

```javascript
string public constant name = 'Uniswap V2';
string public constant symbol = 'UNI-V2';
```

Soroswap has similarly implemented the assignment of names and symbols for token pairs:

```rust
Bytes::from_slice(&e, b"Soroswap Pair Token"),
Bytes::from_slice(&e, b"SOROSWAP-LP"),
```

**This feature has been seamlessly integrated into the Soroswap codebase!**

***

***

## Mint (Deposit)

In UniswapV2, the mint function is invoked when a user adds liquidity to the pool, resulting in the creation of pool tokens. Before calling the swap function, the seller transfers the asset to the core contract. The contract then measures the received asset quantity by comparing the last recorded balance with its current balance. This approach makes the core contract agnostic to how the trader transfers the asset. Instead of transferFrom, a meta transaction or any other future mechanism for authorizing the transfer of ERC-20s can be used.

```javascript

 // this low-level function should be called from a contract which performs important safety checks
 function mint(address to) external lock returns (uint liquidity) {
    (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings
    uint balance0 = IERC20(token0).balanceOf(address(this));
    uint balance1 = IERC20(token1).balanceOf(address(this));
    uint amount0 = balance0.sub(_reserve0);
    uint amount1 = balance1.sub(_reserve1);

    bool feeOn = _mintFee(_reserve0, _reserve1);
    uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee
    if (_totalSupply == 0) {
        liquidity = Math.sqrt(amount0.mul(amount1)).sub(MINIMUM_LIQUIDITY);
       _mint(address(0), MINIMUM_LIQUIDITY); // permanently lock the first MINIMUM_LIQUIDITY tokens
    } else {
        liquidity = Math.min(amount0.mul(_totalSupply) / _reserve0, amount1.mul(_totalSupply) / _reserve1);
    }
    require(liquidity > 0, 'UniswapV2: INSUFFICIENT_LIQUIDITY_MINTED');
    _mint(to, liquidity);

    _update(balance0, balance1, _reserve0, _reserve1);
    if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date
    emit Mint(msg.sender, amount0, amount1);
}

```

### Comments for Soroswap implementation:

* The equivalent function in Soroswap is named deposit. To avoid confusion with the mint function of the token interface, we have opted to keep deposit as the function name.
* This function in UniswapV2 employs a reentrancy guard. Since reentrancy is not currently possible in Soroban, we have not implemented this guard.
* In UniswapV2, the router contract sends (with approval) tokens from the user to the Pair contract before executing the mint function. This design isn't necessary in Soroban (read [https://stellar.org/developers-blog/sorobans-technical-design-decisions-learnings-from-ethereum](https://stellar.org/developers-blog/sorobans-technical-design-decisions-learnings-from-ethereum)) because tokens can be sent using from.require\_auth();, which is checked in the token contract itself.
* However, we need to consider tokens that do not implement require\_auth. In such cases, we can follow Uniswap's design and implement a `Router` with a `addLiquidity_with_transfer_from` and a standard `addLiquidity` with `require_auth`.
* For now, our objective is simply to implement the UniswapV2 Pair and Factory contracts, so we'll maintain the current design:

```rust
 fn deposit(e: Env, to: Address, desired_a: i128, min_a: i128, desired_b: i128, min_b: i128) {
        to.require_auth();
        ...
        let amounts = get_deposit_amounts(desired_a, min_a, desired_b, min_b, reserve_0, reserve_1);
        ...
        token_a_client.transfer(&to, &e.current_contract_address(), &amounts.0);
        token_b_client.transfer(&to, &e.current_contract_address(), &amounts.1);
```

In the next iteration, when Periphery contracts will be implemented (see [https://github.com/Uniswap/v2-periphery](https://github.com/Uniswap/v2-periphery)) this function will change and will require the tokens to be sent before executing the  `deposit` function.

* &#x20;We've implemented bool feeOn = \_mintFee(\_reserve0, \_reserve1);.
* &#x20;As there's no `totalSupply` in the Soroban token interface, we've implemented a `get_total_shares` and a `put_total_shares` function.
* UniswapV2Pair compares whether `totalSupply == 0` to send the “first” LP with `sqrt(x*y)` because it mints a `MINIMUM_LIQUIDITY` to the zero address to permanently lock it forever. This ensures there's always some level of liquidity available, preventing scenarios where liquidity providers could fully drain a pool.

Uniswap defines the least amount of liquidity as 1e-15 of the total pool shares, which equates to 1000 times the smallest possible unit of pool shares. To illustrate, UniswapV2 LP tokens operate with 18 decimal places, meaning one token unit corresponds to 1e-18.

However, in the Stellar-based soroban-examples liquidity pool contract, such a minimum liquidity requirement is absent.

Soroswap emulates this approach by creating 1000 times the smallest possible unit of tokens, equating to 10\*\*3 as the minimum liquidity. In line with the traditional Stellar assets, which have 7 decimals, Soroswap also uses 7 decimals places for this initial version. As such, this minimum liquidity represents 1e-4 of the total pool shares.

***

***

## Swap

This function is invoked when a user swaps tokens. Emits Swap and Sync events.

```javascript

    // this low-level function should be called from a contract which performs important safety checks
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external lock {
        require(amount0Out > 0 || amount1Out > 0, 'UniswapV2: INSUFFICIENT_OUTPUT_AMOUNT');
        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings
        require(amount0Out < _reserve0 && amount1Out < _reserve1, 'UniswapV2: INSUFFICIENT_LIQUIDITY');

        uint balance0;
        uint balance1;
        { // scope for _token{0,1}, avoids stack too deep errors
        address _token0 = token0;
        address _token1 = token1;
        require(to != _token0 && to != _token1, 'UniswapV2: INVALID_TO');
        if (amount0Out > 0) _safeTransfer(_token0, to, amount0Out); // optimistically transfer tokens
        if (amount1Out > 0) _safeTransfer(_token1, to, amount1Out); // optimistically transfer tokens
        if (data.length > 0) IUniswapV2Callee(to).uniswapV2Call(msg.sender, amount0Out, amount1Out, data);
        balance0 = IERC20(_token0).balanceOf(address(this));
        balance1 = IERC20(_token1).balanceOf(address(this));
        }
        uint amount0In = balance0 > _reserve0 - amount0Out ? balance0 - (_reserve0 - amount0Out) : 0;
        uint amount1In = balance1 > _reserve1 - amount1Out ? balance1 - (_reserve1 - amount1Out) : 0;
        require(amount0In > 0 || amount1In > 0, 'UniswapV2: INSUFFICIENT_INPUT_AMOUNT');
        { // scope for reserve{0,1}Adjusted, avoids stack too deep errors
        uint balance0Adjusted = balance0.mul(1000).sub(amount0In.mul(3));
        uint balance1Adjusted = balance1.mul(1000).sub(amount1In.mul(3));
        require(balance0Adjusted.mul(balance1Adjusted) >= uint(_reserve0).mul(_reserve1).mul(1000**2), 'UniswapV2: K');
        }

        _update(balance0, balance1, _reserve0, _reserve1);
        emit Swap(msg.sender, amount0In, amount1In, amount0Out, amount1Out, to);
    }

```

The equivalent function in Soroswap is as follows:

```rust
   fn swap(e: Env, to: Address, buy_0: bool, amount_out: i128, amount_in_max: i128) {
        to.require_auth();

        /*
        UniswapV2 implements 2 things that Soroswap it's not going to implement for now:
        1.- FlashSwaps. Soroban is not allowing reentrancy for the moment. So no data as a parameter.
        2.- uint amount0Out as parameter. Soroswap will impleent all the login in the Router contract.

        All this logic will change in this contract when the Router contract is implemented
        */
        
        if amount_out <= 0 { panic!("insufficient output amount") }
        if to == get_token_0(&e) || to == get_token_1(&e) {panic!("invalid to")}
        
        
        let (reserve_0, reserve_1) = (get_reserve_0(&e), get_reserve_1(&e));
        let (reserve_in, reserve_out) = if buy_0 {
            (reserve_1, reserve_0)
        } else {
            (reserve_0, reserve_1)
        };
        
        // First calculate how much needs to be sold to buy amount amount_out from the pool
        let n = reserve_in.checked_mul(amount_out).unwrap().checked_mul(1000).unwrap();
        let d = (reserve_out.checked_sub(amount_out).unwrap()).checked_mul(997).unwrap();
        let amount_in = (n.checked_div(d).unwrap()).checked_add(1).unwrap();

        if amount_in > amount_in_max {panic!("amount in is over max") }
        if amount_in <= 0 { panic!("insufficient input amount")}
        
        // Transfer the amount_in being sold to the contract
        let sell_token = if buy_0 { get_token_1(&e) } else { get_token_0(&e) };
        let sell_token_client = TokenClient::new(&e, &sell_token);
        sell_token_client.transfer(&to, &e.current_contract_address(), &amount_in);

        let (balance_0, balance_1) = (get_balance_0(&e), get_balance_1(&e));

        // residue_numerator and residue_denominator are the amount that the invariant considers after
        // deducting the fee, scaled up by 1000 to avoid fractions
        let residue_numerator: i128 = 997;
        let residue_denominator: i128 = 1000;
        let zero = 0;

        let new_invariant_factor = |balance: i128, reserve: i128, amount_out: i128| {
            let delta = balance.checked_sub(reserve).unwrap().checked_sub(amount_out).unwrap();
            let adj_delta = if delta > zero {
                //residue_numerator * delta
                residue_numerator.checked_mul(delta).unwrap()
            } else {
              //  residue_denominator * delta
                residue_denominator.checked_mul(delta).unwrap()
            };
            //residue_denominator * reserve + adj_delta
            residue_denominator.checked_mul(reserve).unwrap().checked_add(adj_delta).unwrap()
        };

        let (amount_0_in, amount_1_in) = if buy_0 { (0, amount_in) } else { (amount_in, 0) };
        let (amount_0_out, amount_1_out) = if buy_0 { (amount_out, 0) } else { (0, amount_out) };

        let new_inv_a = new_invariant_factor(balance_0, reserve_0, amount_0_out);
        let new_inv_b = new_invariant_factor(balance_1, reserve_1, amount_1_out);
        //let old_inv_a = residue_denominator * reserve_0;
        let old_inv_a = residue_denominator.checked_mul(reserve_0).unwrap();
        //let old_inv_b = residue_denominator * reserve_1;
        let old_inv_b = residue_denominator.checked_mul(reserve_1).unwrap();

        // if new_inv_a * new_inv_b < old_inv_a  * old_inv_b {
        if new_inv_a.checked_mul(new_inv_b).unwrap() < old_inv_a.checked_mul(old_inv_b).unwrap() {
            panic!("constant product invariant does not hold");
        }

        if buy_0 {
            transfer_token_0_from_pair(&e, to.clone(), amount_0_out);
        } else {
            transfer_token_1_from_pair(&e, to.clone(), amount_1_out);
        }

        let new_balance_0 = balance_0.checked_sub(amount_0_out).unwrap();
        let new_balance_1 = balance_1.checked_sub(amount_1_out).unwrap();
        update(&e, new_balance_0, new_balance_1, reserve_0.try_into().unwrap(), reserve_1.try_into().unwrap());
        event::swap(&e, to.clone(), amount_0_in, amount_1_in, amount_0_out, amount_1_out, to);
    } fn swap
```

***

***

## Burn (Withdraw)

This function is invoked when a user withdraws liquidity from the pool. Emits Burn, Transfer and Sync events.

```javascript

    // this low-level function should be called from a contract which performs important safety checks
    function burn(address to) external lock returns (uint amount0, uint amount1) {
        (uint112 _reserve0, uint112 _reserve1,) = getReserves(); // gas savings
        address _token0 = token0;                                // gas savings
        address _token1 = token1;                                // gas savings
        uint balance0 = IERC20(_token0).balanceOf(address(this));
        uint balance1 = IERC20(_token1).balanceOf(address(this));
        uint liquidity = balanceOf[address(this)];

        bool feeOn = _mintFee(_reserve0, _reserve1);
        uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee
        amount0 = liquidity.mul(balance0) / _totalSupply; // using balances ensures pro-rata distribution
        amount1 = liquidity.mul(balance1) / _totalSupply; // using balances ensures pro-rata distribution
        require(amount0 > 0 && amount1 > 0, 'UniswapV2: INSUFFICIENT_LIQUIDITY_BURNED');
        _burn(address(this), liquidity);
        _safeTransfer(_token0, to, amount0);
        _safeTransfer(_token1, to, amount1);
        balance0 = IERC20(_token0).balanceOf(address(this));
        balance1 = IERC20(_token1).balanceOf(address(this));

        _update(balance0, balance1, _reserve0, _reserve1);
        if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date
        emit Burn(msg.sender, amount0, amount1, to);
    }

```

The equivalent function in Soroswap is as follows:

````rust
fn withdraw(e: Env, to: Address, share_amount: i128, min_a: i128, min_b: i128) -> (i128, i128) {
        to.require_auth();
        // We get the original reserves before the action:
        let (mut reserve_0, mut reserve_1) = (get_reserve_0(&e), get_reserve_1(&e));
        
        /*
        For now we are sending the pair token to the contract here.
        This will change with a Router contract that will send the tokens to us.
        */
        Token::transfer(e.clone(), to.clone(), e.current_contract_address(), share_amount);
        // address _token0 = token0;                                // gas savings
        // address _token1 = token1;                                // gas savings
        // uint balance0 = IERC20(_token0).balanceOf(address(this));
        // uint balance1 = IERC20(_token1).balanceOf(address(this));
        // uint liquidity = balanceOf[address(this)];
        let (mut balance_0, mut balance_1) = (get_balance_0(&e), get_balance_1(&e));
        let user_sent_shares = get_balance_shares(&e).checked_sub(MINIMUM_LIQUIDITY).unwrap();
        
        // bool feeOn = _mintFee(_reserve0, _reserve1);
        let fee_on: bool = mint_fee(&e, reserve_0, reserve_1);

        // uint _totalSupply = totalSupply; // gas savings, must be defined here since totalSupply can update in _mintFee
        let total_shares = get_total_shares(&e);

        // Now calculate the withdraw amounts
        let out_0 = (balance_0.checked_mul(user_sent_shares).unwrap()).checked_div(total_shares).unwrap();
        let out_1 = (balance_1.checked_mul(user_sent_shares).unwrap()).checked_div(total_shares).unwrap();

        if out_0 <= 0 || out_1 <= 0 {
            panic!("insufficient amount_0 or amount_1");
        }

        // TODO: In the next iteration this should be in the Router contract
        if out_0 < min_a || out_1 < min_b {
            panic!("min not satisfied");
        }

        // _burn(address(this), liquidity);
        burn_shares(&e, user_sent_shares);
        transfer_token_0_from_pair(&e, to.clone(), out_0.clone());
        transfer_token_1_from_pair(&e, to.clone(), out_1.clone());
        (balance_0, balance_1) = (get_balance_0(&e), get_balance_1(&e));

        // _update(balance0, balance1, _reserve0, _reserve1);
        update(&e, balance_0, balance_1, reserve_0.try_into().unwrap(), reserve_1.try_into().unwrap());
        // Update reserve_0 and reserve_1 after being updated in update() function:
        (reserve_0, reserve_1) = (get_reserve_0(&e), get_reserve_1(&e)); 
        // if (feeOn) kLast = uint(reserve0).mul(reserve1); // reserve0 and reserve1 are up-to-date
        if fee_on {
            put_klast(&e, reserve_0.checked_mul(reserve_1).unwrap());
        }

        event::withdraw(&e, to.clone(), user_sent_shares, out_0, out_1, to);
      
        (out_0, out_1)
    }



## Reentrancy Guards: Currently not implemented

In UniswapV2, a reentrancy guard is employed to prevent recursive calls. Here is the corresponding code snippet:

```javascript
    uint private unlocked = 1;
    modifier lock() {
        require(unlocked == 1, 'UniswapV2: LOCKED');
        unlocked = 0;
        _;
        unlocked = 1;
    }
````

For now, Soroban does not permit reentrancy. Further information is available at these sources:

* [https://github.com/esteblock/reentrancy-soroban](https://github.com/esteblock/reentrancy-soroban)
* [https://discord.com/channels/897514728459468821/993874836336152576](https://discord.com/channels/897514728459468821/993874836336152576)

We plan to revisit this aspect if the allowance of reentrancy is considered in the future.

**Current Status: Not implemented**

***

***

## Protocol Fee Mechanism: Mint Fee Implemented!

UniswapV2 incorporates a protocol fee of 0.05%, which can be toggled on or off. When activated, this fee is routed to an address, `feeTo`, specified in the factory contract. Initially, `feeTo` isn't set, and hence, no fees are collected. There is a designated address, `feeToSetter`, with the power to invoke the `setFeeTo` function on the UniswapV2 factory contract, altering the `feeTo` value. `feeToSetter` can also change its address via the `setFeeToSetter` function.

```javascript
uint public constant MINIMUM_LIQUIDITY = 10**3;
uint public kLast; // reserve0 * reserve1, as of immediately after the most recent liquidity event

 // if fee is on, mint liquidity equivalent to 1/6th of the growth in sqrt(k)
    function _mintFee(uint112 _reserve0, uint112 _reserve1) private returns (bool feeOn) {
        address feeTo = IUniswapV2Factory(factory).feeTo();
        feeOn = feeTo != address(0);
        uint _kLast = kLast; // gas savings
        if (feeOn) {
            if (_kLast != 0) {
                uint rootK = Math.sqrt(uint(_reserve0).mul(_reserve1));
                uint rootKLast = Math.sqrt(_kLast);
                if (rootK > rootKLast) {
                    uint numerator = totalSupply.mul(rootK.sub(rootKLast));
                    uint denominator = rootK.mul(5).add(rootKLast);
                    uint liquidity = numerator / denominator;
                    if (liquidity > 0) _mint(feeTo, liquidity);
                }
            }
        } else if (_kLast != 0) {
            kLast = 0;
        }
    }
```

The Soroswap equivalent to the above code is:

```rust
fn mint_fee(e: &Env, reserve_0: i128, reserve_1: i128) -> bool{
    let factory = get_factory(&e);
    let factory_client = FactoryClient::new(&e, &factory);
    //  address feeTo = IUniswapV2Factory(factory).feeTo();
    //  feeOn = feeTo != address(0);
    let fee_on = factory_client.fees_enabled();
    let klast = get_klast(&e);
     
    if fee_on{
        let fee_to: Address = factory_client.fee_to();

        if klast != 0 {
            let root_k = (reserve_0.checked_mul(reserve_1).unwrap()).sqrt();
            let root_klast = (klast).sqrt();
            if root_k > root_klast{
                // uint numerator = totalSupply.mul(rootK.sub(rootKLast));
                let total_shares = get_total_shares(&e);
                let numerator = total_shares.checked_mul(root_k.checked_sub(root_klast).unwrap()).unwrap();
        
                // uint denominator = rootK.mul(5).add(rootKLast);
                let denominator = root_k.checked_mul(5_i128).unwrap().checked_add(root_klast).unwrap();
                // uint liquidity = numerator / denominator;

                let liquidity_pool_shares_fees = numerator.checked_div(denominator).unwrap();

                // if (liquidity > 0) _mint(feeTo, liquidity);
                if liquidity_pool_shares_fees > 0 {
                    mint_shares(&e, fee_to,    liquidity_pool_shares_fees);
                }
            }
        }
    } else if klast != 0{
        put_klast(&e, 0);
    }

    fee_on
}
```

In this code, we have utilized the `checked_add`, `checked_sub`, `checked_mult` and `checked_div` functions to prevent potential overflows.

**This functionality has been successfully integrated into the code!**

***

***

## Oracles:

The marginal price of a token pair is calculated by dividing the reserve of one token by the reserve of the other token. Since arbitrageurs will trade against the pair contract to make profits, the marginal price of the pair contract will tend to follow the market price, so maybe we can use the marginal price as an oracle for the market price.

However, this is not enough to reliably use this price as an on-chain oracle. An attacker could manipulate the price at an specific moment. If the attacker can get a dApp to check the oracle at the precise instant when the price has been manipulated, then they can cause significant harm to the system. UniswapV1 was vulnerable to this attack, as we can see [here](https://samczsun.com/taking-undercollateralized-loans-for-fun-and-for-profit/). In UniswapV2, the oracle function was modified to prevent this attack, and we will use this oracle function as a reference for our implementation.

The solution is to use a cumulative price, which is the sum of the marginal prices over a period of time. The oracle measures and stores the price before the first trade of each block. This price is more difficult to manipulate than the prices in the middle of a block. If the attacker tries to manipulate the price at the start of the block, another arbitrageur can send a transaction to trade back the manipulated price to the real price, so the attacker can't profit from the manipulation. A miner or an attacker that uses enough gas to fill an entire block can try to manipulate the price at the end of the block, but this will be useless if they mine the following block themselves. The miners can't know if they will mine the next block, so they can't profit from this manipulation.

So, we know that the price at the start of the block is difficult to manipulate, but we still need to know how to use it as an oracle.

### A note on arithmetic operations and data types:

The design of oracle functions requires some consideration of arithmetic operations and data types, given that neither Solidity nor Soroban support floating-point numbers or non-integer number data types natively. Both systems employ custom-made fixed-point number data types, conforming to the [Q format](https://en.wikipedia.org/wiki/Q\_\(number\_format\)), which are stored as integers.

The Q format is a [fixed-point number](https://en.wikipedia.org/wiki/Fixed-point\_arithmetic) format that specifies the number of bits used for the integer and fractional parts. Both UniswapV2 and Soroswap utilize the **unsigned** variant of the Q format, called UQ, only diverging in the number of bits assigned for the integer and fractional components. A UQn.m number is stored as an unsigned integer of n+m bits, where the first n bits are used for the integer part, and the last m bits are used for the fractional part.

For illustration, suppose that we have a UQ4.4 format. It means that we are using 4 bits for the integer part and 4 bits for the fractional part. The whole number is stored as an 8-bit unsigned integer. Some examples of UQ4.4 numbers are:

* The number 1.5 in UQ4.4 format is represented as 00011000 in binary. The first four bits (0001) represent the integer part 1, and the last four bits (1000) represent the fractional part 0.5.
* The number 3.75 in UQ4.4 format is represented as 00111100 in binary. The first four bits (0011) represent the integer    part 3, and the last four bits (1100) represent the fractional part 0.75.

To convert the binary number back to a decimal number, we divide the value represented by the fractional part by 2 to the power of m. In the case of UQ4.4 format, we divide by $2^4$ = 16. So, 00011000 would be converted to 1 (from the integer part) plus 8/16 (from the fractional part), or 1.5.

In the case of UniswapV2, the [UQ112.112](https://github.com/Uniswap/v2-core/blob/master/contracts/libraries/UQ112x112.sol) is used, in contrast to the UQ64.64 used in Soroswap whose implementation is on [https://github.com/esteblock/fractions-soroban](https://github.com/esteblock/fractions-soroban)

```javascript
using UQ112x112 for uint224;
...
uint112 private reserve0;           // uses single storage slot, accessible via getReserves
uint112 private reserve1;           // uses single storage slot, accessible via getReserves
uint public price0CumulativeLast;
uint public price1CumulativeLast;
uint32  private blockTimestampLast; // uses single storage slot, accessible via getReserves
...
// update reserves and, on the first call per block, price accumulators
function _update(uint balance0, uint balance1, uint112 _reserve0, uint112 _reserve1) private {
    require(balance0 <= uint112(-1) && balance1 <= uint112(-1), 'UniswapV2: OVERFLOW');
    uint32 blockTimestamp = uint32(block.timestamp % 2**32);
    uint32 timeElapsed = blockTimestamp - blockTimestampLast; // overflow is desired
    if (timeElapsed > 0 && _reserve0 != 0 && _reserve1 != 0) {
        // * never overflows, and + overflow is desired
        price0CumulativeLast += uint(UQ112x112.encode(_reserve1).uqdiv(_reserve0)) * timeElapsed;
        price1CumulativeLast += uint(UQ112x112.encode(_reserve0).uqdiv(_reserve1)) * timeElapsed;
    }
    reserve0 = uint112(balance0);
    reserve1 = uint112(balance1);
    blockTimestampLast = blockTimestamp;
    emit Sync(reserve0, reserve1);
}

```

Here, many things are happening:

* Balances need to fit within the uint112 data type to be encoded into UQ112x112 and undergo division operations.
  * **For Soroswap:** Balances will need to fit within an u64 type to be encoded into UQ64X64.
* Block timestamps are obtained by using the modulo operator to fit them within the uint32 data type. This is done for gas optimization purposes, as described in the whitepaper. Consequently, each set of 224-bit reserves (two reserves as 112-bit) is accompanied by a 32-bit timestamp within a single 256-bit storage slot.
  * **For Soroswap:** We won't pay much attention for now in gas usage. Can be u32 or u64
* The block timestamp has the potential to overflow, with the next overflow occurring on 02/07/2106. Oracles are required to account for this and ensure proper functionality by checking prices at least once within each interval of 2^ 32 - 1 seconds (approximately 136 years).
  * **For Soroswap:** Block timestamp can be stored in u64, and will overflow in the year 2554, so we are safe.
* The variables price0CumulativeLast and price1CumulativeLast are stored using 224 bits each because they hold a sum and multiplications of UQ112X112.\

  * **For Soroswap:** price0CumulativeLast will need to be u128.
* The price itself will not overflow, but the accumulated price over an interval may exceed the 224-bit limit. To address this, an additional 32 bits are allocated in the storage slots for the accumulated prices of the ratios token A/token B and token B/token A. These extra bits handle any overflow resulting from repeated summations of prices.
  * **For Soroswap:** By default price0CumulativeLast won't be able to overflow in soroban due to the `overflow-checks = true`. Also, there are no bigger integer types in Soroban. See [https://soroban.stellar.org/docs/fundamentals-and-concepts/built-in-types](https://soroban.stellar.org/docs/fundamentals-and-concepts/built-in-types)

As per the official Uniswap audit [remarks](https://rskswap.com/audit.html#orgc9b3190), we permit overflow in the case of  accumulators. This is primarily a protective strategy; an overflow-induced revert might result in a liveness failure. This  means that a revert in the \_update could impede trade operations as well as hinder the entry and exit of liquidity providers (LPs).

The necessity for price0CumulativeLast to overflow is emphasized to prevent the protocol from reaching a panic state. The audit illustrates this through a simulation:

> Assuming that the ratio of the reserves in a given pair will be the same as the ratio of the dollar prices of one wei of each token, we can solve for a example pair consisting of a 36 decimal token and a 2 decimal token where the unit value of the 2 decimal token is 100 times that of the 36 decimal token: giving ≈ 8 months until overflow!
>
> Authors of oracles that build upon the price accumulator functionality in the core should therefore take care that the their oracles do not introduce spikes or discontinuities in the reported price at the overflow point, if price accumulator overflow is a realistic possibility for the assets involved.

**What this means for Soroswap?**\
This means that Soroswap should allow overflow, hence not using overflow-checks = true, but using `checked_fn` every time the overflow it is NOT DESIRED (all parts except for price0CumulativeLast)

* The reserves are stored using 112 bits for each token.

**For Soroswap:** We will use u64

**Implemented!**

***

***

***

***

## Skim

From UniswapV2 Whitepaper:

> To protect against bespoke token implementations that can update the pair contract’s balance, and to more gracefully handle tokens whose total supply can be greater than $2^{112}$, Uniswap v2 has two bail-out functions: sync()and skim().
>
> sync() functions as a recovery mechanism in the case that a token asynchronously deflates the balance of a pair. In this case, trades will receive sub-optimal rates, and if no liquidity provider is willing to rectify the situation, the pair is stuck. sync() exists to set the reserves of the contract to the current balances, providing a somewhat graceful recovery from this situation.
>
> skim() functions as a recovery mechanism in case enough tokens are sent to an pair to overflow the two uint112 storage slots for reserves, which could otherwise cause trades to fail. skim() allows a user to withdraw the difference between the current balance of the pair and 2\*\*2112 − 1 to the caller, if that difference is greater than 0.

```javascript
function sync() external lock {
         _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)), reserve0, reserve1);
     }

// force balances to match reserves
    function skim(address to) external lock {
         address _token0 = token0; // gas savings
         address _token1 = token1; // gas savings
         _safeTransfer(_token0, to, IERC20(_token0).balanceOf(address(this)).sub(reserve0));
         _safeTransfer(_token1, to, IERC20(_token1).balanceOf(address(this)).sub(reserve1));
    }

```

Implementation in Soroban:

```rust
  // force balances to match reserves
    fn skim(e: Env, to: Address) {
        let (balance_0, balance_1) = (get_balance_0(&e), get_balance_1(&e));
        let (reserve_0, reserve_1) = (get_reserve_0(&e), get_reserve_1(&e));
        transfer_token_0_from_pair(&e, to.clone(), balance_0.checked_sub(reserve_0).unwrap());
        transfer_token_1_from_pair(&e, to, balance_1.checked_sub(reserve_1).unwrap());
    }
```

***

***

## Safe Transfer: not needed

The `_safeTransfer` function is specific to Solidity and isn't necessary to be implemented in Soroban.

```javascript
bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));

function _safeTransfer(address token, address to, uint value) private {
    (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));
    require(success && (data.length == 0 || abi.decode(data, (bool))), 'UniswapV2: TRANSFER_FAILED');
}
```

***

***

## Constructor: not needed

In Soroban, the `constructor()` and `initialize()` functions are the same, thus there's no need to separate them.

```javascript
    constructor() public {
        factory = msg.sender;
    }
    // called once by the factory at time of deployment
    function initialize(address _token0, address _token1) external {
        require(msg.sender == factory, 'UniswapV2: FORBIDDEN'); // sufficient check
        token0 = _token0;
        token1 = _token1; 
    }
```

---

# SoroswapRouter vs UniswapV2Router

## The Router Contract: Comparison between Soroswap and UniswapV2

Until now, we have developed the Factory and the Pair contract. The factory knows how many pairs it has created and can give us their contract addresses. Also, if we want to trade between token A and token B, and if that pair exists, the Factory will also give us the corresponding pair contract address.

But what happens if there are two pairs, A-B and B-C, and a user wants to make a trade between A and C? We could first trade A to B and then B to C! This is why we have the Router Contract.

The Router Contract allows swapping of tokens when a direct pair does not exist. It also handles liquidity provision and manages deposit and withdrawal functions for liquidity providers within the Soroswap ecosystem.

## The native token: ETH, WETH, and XLM.

In the `UniswapV2Router02`, there is a very important distinction between any ERC20 tokens and the native token ETH (and its wrapped version WETH). In particular, in the contract we find:

```javascript
address public immutable override WETH;
```

With UniswapV2Router02, if you are using ETH, you'll need to use special functions:

* `addLiquidityETH` instead of `addLiquidity`
* `removeLiquidityETH` instead of `removeLiquidity`
* `removeLiquidityETHWithPermit` instead of `removeLiquidityWithPermit`
* Instead of just having `swapExactTokensForTokens` and `swapTokensForExactTokens`; Uniswap Router needs to add 4 extra functions: `swapExactETHForTokens`, `swapTokensForExactETH`, `swapExactTokensForETH`, `swapETHForExactTokens`.
* Instead of just having `swapExactTokensForTokensSupportingFeeOnTransferTokens`, Uniswap Router needs to add 2 extra functions: `swapExactETHForTokensSupportingFeeOnTransferTokens` and `swapExactTokensForETHSupportingFeeOnTransferTokens`

This is because it's very common that in Blockchains, the native token (in this case ETH in Ethereum) is treated differently, so the smart contract needs to trigger different functions when transferring the native token.

**What about in Soroban?**

Well, in Soroban, we won't need to have all these extra functions! This is because the native XML token has its own token contract address and can be treated as any other token complying with the token interface.

You can find more information about this in the Soroban Token Playground Chapter 8, 9, 10, and 11.

**Conclusion:** Only the following functions will be written:

```javascript
function addLiquidity
function removeLiquidityWithPermit
function swapExactTokensForTokens
function swapTokensForExactTokens
function swapExactTokensForTokensSupportingFeeOnTransferTokens

```

The following functions won't be written:

```javascript
function addLiquidityETH
function removeLiquidityETH
function removeLiquidityETHWithPermit
function swapExactETHForTokens
function swapTokensForExactETH
function swapExactTokensForETH
function swapETHForExactTokens
function swapExactETHForTokensSupportingFeeOnTransferTokens
function swapExactTokensForETHSupportingFeeOnTransferTokens
```

Also, because we will treat XML as any other token, we won't need to define its address. We won't need to write something like:

```javascript
address public immutable override WETH;
```

Finally, there is also no need for this function:

```javascript
receive() external payable {
        assert(msg.sender == WETH); // only accept ETH via fallback from the WETH contract
    }
```

as XML can only be sent using the native contract.

## SafeMath

In Solidity, the SafeMath library is used to validate arithmetic operations and prevent integer overflow/underflow. Should such a situation arise, the library throws an exception, which effectively reverts the transaction.

In Rust, we can achieve similar functionality by activating the overflow check flag during the compilation process with the following code:

```toml
[profile.release]
overflow-checks = true

```

Additionally, we use an overflow-safe implementation of functions `checked_add`, `checked_mul`, `checked_div`, and `checked_sub`. You can explore these functions and test their functionality in this repository: [Overflow Soroban Repository](https://github.com/esteblock/overflow-soroban/)

Also, we have overflow-safe functions `checked_add`, `checked_mul`, `checked_div` and `checked_sub`

You can check and test these techniques in the following repository: [Overflow Soroban Repository](https://github.com/esteblock/overflow-soroban/)

In conclusion, Soroswap prevents overflows by leveraging these techniques.

## Deadlines

In Ethereum we can send a transaction with low gas price, and that transaction could be accepted 5, 10 or more minutes later. In order to avoid unwanted transactions after a period of time, Uniswap introduces the `deadline` parameter and the `ensure(deadline)` modifier:

```javascript
modifier ensure(uint deadline) {
        require(deadline >= block.timestamp, 'UniswapV2Router: EXPIRED');
        _;
    }
```

In Soroban, we can think that having a transaction waiting for minutes is something that can never happen. But because we don't want to say **never**, Soroswap will include this "deadline modifier."

Modifiers do not currently exist in the `soroban-sdk`. So we'll need to build a special function using the `env.ledger().timestamp()` object.

## Permit

In `UniswapV2Router02` we use the `permit` method of the `UniswapV2ERC20.sol` contracts that is defined [here](https://github.com/Uniswap/v2-core/blob/master/contracts/UniswapV2ERC20.sol):

```javascript
 function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external {
        require(deadline >= block.timestamp, 'UniswapV2: EXPIRED');
        bytes32 digest = keccak256(
            abi.encodePacked(
                '\x19\x01',
                DOMAIN_SEPARATOR,
                keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))
            ) 
        );
        address recoveredAddress = ecrecover(digest, v, r, s);
        require(recoveredAddress != address(0) && recoveredAddress == owner, 'UniswapV2: INVALID_SIGNATURE');
        _approve(owner, spender, value);
    }
```

This function implements [EIP-2612](https://eips.ethereum.org/EIPS/eip-2612). This avoids the user to use 2 transactions `approve` and \`transfer, which allows users to modify the allowance mapping using a signed message. this function allows a token holder to grant permission for a specific address (spender) to spend their tokens up to a certain amount (value) with a specified expiration time (deadline). The signature ensures the authenticity of the permit, and the function enforces that the permit hasn't expired and that it was signed by the legitimate token owner.

In Soroban we don't need to implement something like this, as we use the `require.auth()` method when sending tokens from the user into the smart contract.

**Conclusion:** We don't need to impement the `removeLiquidityWithPermit`, neither the `removeLiquidityETHWithPermit` functions (neither `removeLiquidityETHWithPermitSupportingFeeOnTransferTokens`)

## Fees on Transfer

In UniswapV2, there is a special function that allows the user to swap tokens that charge a fee when doing a transfer. This tokens are popular in the **deflactionist community**, and indeed it made Uniswap upgrade their original [UniswapV2Router](https://github.com/Uniswap/v2-periphery/blob/master/contracts/UniswapV2Router01.sol) (latter called UniswapV2Router01) contract to a [UniswapV2Router02](https://github.com/Uniswap/v2-periphery/blob/master/contracts/UniswapV2Router02.sol) version!

You can read all the discussion of the Uniswap design in [this issue](https://github.com/Uniswap/interface/issues/835)

In the code we see many functions that have the word `SupportingFeeOnTransferTokens`:

* `_swapSupportingFeeOnTransferTokens`
* `swapExactTokensForTokensSupportingFeeOnTransferTokens`
* `swapExactETHForTokensSupportingFeeOnTransferTokens`
* `swapExactTokensForETHSupportingFeeOnTransferTokens`
* `removeLiquidityETHSupportingFeeOnTransferTokens`

But in fact there is only two functions that do all the work: `_swapSupportingFeeOnTransferTokens` and `removeLiquidityETHSupportingFeeOnTransferTokens`

These functions work equal to `_swap` and `removeLiquidityETH` but succeeds for tokens that take a fee on transfer.

Because in Soroswap we want to support all types of tokens, we will implement these logics in the SoroswapRouter contract!

## library UniswapV2Library

UniswapV2Router uses the UniswapV2Library. This is something that Soroswap will also develop

## What's next?

Write rust!

---

# SoroswapLibrary vs UniswapV2Library

The `UniswapV2Library` contract is a contract that helps the router, or any other Uniswap Client Contract to interact with the `Pair` contract. It helps sort tokens (remember that for the pair contract it's not the same token0 than token1), get reserves for an specific pair, and calculates the optimal in/out amount someone needs to send to swap an specific quantity of an specific token.

In the following we are going to analize each function or characteristic of the `UniswapV2Library` contract, originally written in Solidity for EVM's, and we are going to think on how we could implement those functionalities and functions in rust for Soroban:

## Safe Math:

In Solidity, the SafeMath library is used to validate arithmetic operations and prevent integer overflow/underflow. Should such a situation arise, the library throws an exception, which effectively reverts the transaction.

In Rust, we can achieve similar functionality by activating the overflow check flag during the compilation process with the following code:

```toml
[profile.release]
overflow-checks = true

```

Additionally, we use an overflow-safe implementation of functions `checked_add`, `checked_mul`, `checked_div`, and `checked_sub`. You can explore these functions and test their functionality in this repository: [Overflow Soroban Repository](https://github.com/esteblock/overflow-soroban/)

Also, we have overflow-safe functions `checked_add`, `checked_mul`, `checked_div` and `checked_sub`

You can check and test these techniques in the following repository: [Overflow Soroban Repository](https://github.com/esteblock/overflow-soroban/)

In conclusion, Soroswap prevents overflows by leveraging these techniques.

## The `sortTokens` function:

This function returns sorted token addresses, used to handle return values from pairs sorted in this order.

In Solidity the code is like this:

```javascript
function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1) {
        require(tokenA != tokenB, 'UniswapV2Library: IDENTICAL_ADDRESSES');
        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'UniswapV2Library: ZERO_ADDRESS');
    }
```

As you can see on our SoroswapPair contract, we have imposed that:

```rust
if token_a >= token_b {
            panic!("token_a must be less than token_b");
        }
```

Hence, we will implement an order of this type.

Regarding the zero address, in Soroban there is no such as zero address ([read this discussion](https://discord.com/channels/897514728459468821/1077831317175144528/1077831317175144528)), so the last `require` statement won't be implemented.

## The `pairFor` function

This function calculates the CREATE2 address for a pair without making any external calls. This is because UniswapV2Factory uses the CREATE2 opcode by carefully selecting a unique salt value in order to have a deterministic contract address for each (factory, token0, token1) combination (and of course the same pair contract code)

The whole idea of this function is to avoid an external call to the Factory contract in order to ask it what the pair address is... In Soroban this external call won't be expensive... and it's not event direct that calculating this address will be cheaper than the external call

Can we do the same with Soroban? The answer is **yes!**

In our SoroswapFactory contract, when we deploy a new Pair contract, we do it like this:

```
e.deployer()
    .with_current_contract(token_pair.salt(&e)) // Use the salt as a unique identifier for the new contract instance
    .deploy(pair_wasm_hash) // Deploy the new contract instance using the given pair_wasm_hash value
```

Here, the `salt` is an unique identifier that will be used to calculate the new smart contract address. In fact, the new smart contract address depends only in the combination of **the deployer address and the salt**.

In fact, in the `salt` in the factory is created by a combination of the `token_0` and `token_1` address:

```rust
impl Pair {
    pub fn new(a: Address, b: Address) -> Self {
        if a < b {
            Pair(a, b)
        } else {
            Pair(b, a)
        }
    }

    pub fn salt(&self, e: &Env) -> BytesN<32> {
        let mut salt = Bytes::new(e);

        // Append the bytes of token_a and token_b to the salt
        salt.append(&self.0.clone().to_xdr(e)); // can be simplified to salt.append(&self.clone().to_xdr(e)); but changes the hash
        salt.append(&self.1.clone().to_xdr(e));

        // Hash the salt using SHA256 to generate a new BytesN<32> value
        e.crypto().sha256(&salt)
    }

    pub fn token_a(&self) -> &Address {
        &self.0
    }

    pub fn token_b(&self) -> &Address {
        &self.1
    }
}
```

If you want to be sure about what we say here, please check this playground repo: https://github.com/paltalabs/deterministic-address-soroban

So, in Soroban we can also calculate the pair contract address without doing a cross-contract call to the Factory contract, we just need the salt explined above + the Factory address like this:

```rust
pub fn calculate_address(
    env: Env, 
    deployer: Address,
    salt: BytesN<32>,
) -> Address {
   
    let deployer_with_address = env.deployer().with_address(deployer.clone(), salt);
    
    // Calculate deterministic address:
    // This function can be called at anytime, before or after the contract is deployed, because contract addresses are deterministic.
    // https://docs.rs/soroban-sdk/20.0.0-rc2/soroban_sdk/deploy/struct.DeployerWithAddress.html#method.deployed_address
    let deterministic_address = deployer_with_address.deployed_address();
    deterministic_address
}
```

## The `getReserves` function

This function fetches and sorts the reserves for a pair.

It's code in Solidity is:

```javascript
function getReserves(address factory, address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB) {
        (address token0,) = sortTokens(tokenA, tokenB);
        (uint reserve0, uint reserve1,) = IUniswapV2Pair(pairFor(factory, tokenA, tokenB)).getReserves();
        (reserveA, reserveB) = tokenA == token0 ? (reserve0, reserve1) : (reserve1, reserve0);
    }
```

It is a set of simple external and internal function calls, so it will be easy to implement in Soroban

## The `quote` function

This function given some amount of an asset and pair reserves, returns an equivalent amount of the other asset

It's code in Solidity is:

```javascript
function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB) {
        require(amountA > 0, 'UniswapV2Library: INSUFFICIENT_AMOUNT');
        require(reserveA > 0 && reserveB > 0, 'UniswapV2Library: INSUFFICIENT_LIQUIDITY');
        amountB = amountA.mul(reserveB) / reserveA;
    }
```

It's a set of restrictions and arithmetics operations, so it will be implemented in Soroban without any problem.

## The `getAmount...` functions

There are four important functions in Uniswap's code: `getAmountOut`, `getAmountIn`, `getAmountsOut` and `getAmountsIn` that are similar. These functions are used for making trades and managing liquidity in Uniswap.

* \`getAmountOut\`\` calculates how much of one token you can get when you put in another token, considering fees and available reserves.
* `getAmountIn` does the opposite, determining how much you need to put in to get a specific amount of another token.
* `getAmountsOut` and \`getAmountsIn\`\` help with more complex trades that involve multiple steps, like going from Token A to Token B to Token C. They make sure you get the right amount at each step.

These operations involve math and checks. These same operations can be easily recreated in Rust and Soroban.

---

# Deploy Soroswap Yourself

\[SECTION IS OUT DATED, CHECK INSTRUCTIONS OUR README OF CORE REPO]

---

# Environment Setup

In order to experiment with this contracts, you'll need to

1.- Clone the SoroswapFinance `core` repo:

```bash
git clone https://github.com/soroswap/core
```

2.- Run the `quickstart.sh` script

```bash
cd core
bash quickstart.sh standalone
```

This script will create the `soroban-network` Docker network, and will open two Docker containers: (a) A Stellar Quickstart container that will be used to run a local standalone soroban blockchain. (b) A Soroban-Preview docker container. Currently in PREVIEW-9

This last container is important for developers that might be developing different projects with different SDK versions. Currently, Soroswap.Finance is supporting PREVIEW-9, so the Docker image to be used will be:

* `stellar/quickstart:soroban-dev@sha256:a057ec6f06c6702c005693f8265ed1261e901b153a754e97cf18b0962257e872`
* `esteblock/soroban-preview:9`

3.- Enter to the `soroban-preview-9` docker container in order to run scripts inside:

```bash
docker exec -it soroban-preview-9 bash
```

Also, if you don't want to copy or write this line all the time, you can just run the `run.sh` script

```bash
bash run.sh
```

As this is optional, this is important to be able to interact with the protocol using the correct soroban CLI version.

Once you are inside the `soroban-preview-9` container, you are ready to experiment with the `SoroswapPair` or the `SoroswapFactory` contract!

---

# Experiment with Pair Contract

Once you are inside the `soroban-preview-9` container (by `bash quickstart.sh` and `bash run.sh`) you can start experimenting with the SoroswapPair contract.

## 1. Open and read the contract:

Open in your favourite IDE or text editor, and check the `pair` folder:

In the `pair/src` folder you will find:

* The `lib.rs` file with the `SoroswapPair` functions
* The `token` folder, which is a fork of the `token` contract from `soroban-examples`, with two added functions: The `internal_burn` and the `internal_mint` function. As the `SoroswapPair` contract is a token itself, if it's not making a cross-contract call to iself in order to mint or burn tokens, it will have problems with `require_auth`. Read more about this in the following issue: [#16](https://github.com/soroswap/core/issues/16)
* The `test.rs`.
* The `events.rs` to emmit events
* The `factory.rs` used as a Interface of some of the factory functions
* The `create` folder, that contains the `create mod`, used in testings in order to create the pair contract.

Also, you will see that in the root folder, there is a `./soroban_token_contract.wasm` file. This was taken by compiling the \[]`soroban-examples/token contract v0.8.4`]\(https://github.com/stellar/soroban-examples/releases/tag/v0.8.4)

## 2. Compile the contract

We can compile both contracts by just calling `make build` from the root directory, however, we can go contract by contract:

```
cd pair
make build
```

## 3. Read and run the tests:

```bash
make test
```

## 4.- Experiment with the SoroswapFactory contract using the soroban CLI:

You can see the followng step-by-step. However, if you decide you can read and just run the `initialize_factory.sh` contract:

```
bash initialize_pair.sh
```

### 1.- First, set your enviromental variables

Here, as we are using the `soroban-network` docker network, containers can call each other just using their name. In the case of the stellar quickstart container, it's name is `stellar`:

Choose your network. In this example we will use `standalone`, but you can also use `futurenet`:

```bash
NETWORK="standalone"
```

Then:

```bash
SOROBAN_RPC_HOST="http://stellar:8000"
SOROBAN_RPC_URL="$SOROBAN_RPC_HOST/soroban/rpc"
SOROBAN_NETWORK_PASSPHRASE="Standalone Network ; February 2017"
FRIENDBOT_URL="$SOROBAN_RPC_HOST/friendbot"

echo Add the $NETWORK network to cli client
  soroban config network add "$NETWORK" \
    --rpc-url "$SOROBAN_RPC_URL" \
    --network-passphrase "$SOROBAN_NETWORK_PASSPHRASE"

echo Create the token-admin identity
  soroban config identity generate token-admin

TOKEN_ADMIN_SECRET="$(soroban config identity show token-admin)"
TOKEN_ADMIN_ADDRESS="$(soroban config identity address token-admin)"

echo "We are using the following TOKEN_ADMIN_ADDRESS: $TOKEN_ADMIN_ADDRESS"
echo "$TOKEN_ADMIN_SECRET" > .soroban/token_admin_secret
echo "$TOKEN_ADMIN_ADDRESS" > .soroban/token_admin_address

echo Fund token-admin account from friendbot
  echo This will fail if the account already exists, but it\' still be fine.
  curl  -X POST "$FRIENDBOT_URL?addr=$TOKEN_ADMIN_ADDRESS"

ARGS="--network $NETWORK --source token-admin"
echo "Using ARGS: $ARGS"
```

### 2.- Let's create two dummy tokens:

We need to create 2 tokens in order to interact with the Pair contract

```bash
mkdir -p .soroban
PAIR_WASM="pair/target/wasm32-unknown-unknown/release/soroswap_pair_contract.wasm"
TOKEN_WASM="soroban_token_contract.wasm"

echo Deploying TOKEN_A
  TOKEN_A_ID="$( soroban contract deploy $ARGS --wasm $TOKEN_WASM)"

echo "Initializing TOKEN_A. Executing:
    fn initialize(e: Env, admin: Address, decimal: u32, name: Bytes,symbol: Bytes)"

  soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_A_ID \
  -- \
  initialize \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --decimal 7 \
  --name 'AA' \
  --symbol 'AA'
  echo "--"
  echo "--"


echo Deploying TOKEN_B
  TOKEN_B_ID="$(soroban contract deploy $ARGS --wasm $TOKEN_WASM)"
  
echo Initializing TOKEN_B

  soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_B_ID \
  -- \
  initialize \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --decimal 7 \
  --name 'BB' \
  --symbol 'BB'
  echo "--"
  echo "--"

echo Current TOKEN_A_ID: $TOKEN_A_ID
echo Current TOKEN_B_ID: $TOKEN_B_ID
```

Because the Pair token always uses token\_a and token\_b so `token_a<token_b`, this is something we need to check before initializing the pair contract with our two tokens. Later, this is something that will be done automatically by the Factory contract:

```bash
if [[ "$TOKEN_B_ID" > "$TOKEN_A_ID" ]]; then
  echo "TOKEN_B_ID is greater than TOKEN_A_ID"
  echo "This is the correct order"
else
  echo "TOKEN_B_ID is less than or equal to TOKEN_A_ID"
  echo "We will invert the order of the tokens"
  TOKEN_A_ID_NEW=$TOKEN_B_ID
  TOKEN_B_ID=$TOKEN_A_ID
  TOKEN_A_ID=$TOKEN_A_ID_NEW

fi
echo Current TOKEN_A_ID: $TOKEN_A_ID
echo Current TOKEN_B_ID: $TOKEN_B_ID
  echo "--"
  echo "--"


echo -n "$TOKEN_A_ID" > .soroban/token_a_id
echo -n "$TOKEN_B_ID" > .soroban/token_b_id
```

### 3.- Build, deploy and initialize the Pair contract

```bash
echo Build the SoroswapPair contract
    cd pair
    make build
    cd ..
    PAIR_WASM="pair/target/wasm32-unknown-unknown/release/soroswap_pair_contract.wasm"
echo "--"

echo Deploy the Pair 
    PAIR_ID="$(soroban contract deploy $ARGS --wasm $PAIR_WASM)"
echo "$PAIR_ID" > .soroban/pair_wasm_hash
echo "SoroswapPair deployed succesfully with PAIR_ID: $PAIR_ID"
echo "--"

echo "Initialize the Pair contract using the Admin address as Factory"
echo "Calling: fn initialize_pair( e: Env, factory: Address, token_a: BytesN<32>, token_b: BytesN<32>);"

soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  initialize_pair \
  --factory "$TOKEN_ADMIN_ADDRESS" \
  --token_a "$TOKEN_A_ID" \
  --token_b "$TOKEN_B_ID" 
```

### 4.- Creare a USER account and mint tokens to that account.

```bash
echo In the following we are going to use a new USER account:
  echo Creating the user identity
  soroban config identity generate user
  USER_SECRET="$(soroban config identity show user)"
  USER_ADDRESS="$(soroban config identity address user)"
  echo "We are using the following USER_ADDRESS: $USER_ADDRESS"
  echo "$USER_SECRET" > .soroban/user_secret
  echo "$USER_ADDRESS" > .soroban/user_address

echo Fund user account from friendbot
    echo This will fail if the account already exists, but it\' still be fine.
    curl  -X POST "$FRIENDBOT_URL?addr=$USER_ADDRESS"

  
echo "Mint 1000 units of token A user -- calling from TOKEN_ADMIN"

soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_A_ID \
  -- \
  mint \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --to "$USER_ADDRESS" \
  --amount "1000" 

echo "Mint 1000 units of token B to user"

soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_B_ID \
  -- \
  mint \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --to "$USER_ADDRESS" \
  --amount "1000" 

echo "Check that user has 1000 units of each token"
echo "Check TOKEN_A"
soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo "Check TOKEN_A"
soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id $USER_ADDRESS
```

### 5.- Deposit tokens in the PAIR contract

Now is the fun part! Interacting with our pair contract!!!

```bash
echo "Deposit these tokens into the Pool contract"
    echo "This will be called by the user"
    ARGS_USER="--network $NETWORK --source user"
    echo "Hence we use ARG_USER: $ARGS_USER"
echo "Calling: fn deposit( e: Env, 
                to: Address,
                desired_a: i128, 
                min_a: i128, 
                desired_b: i128, 
                min_b: i128)"

soroban contract invoke \
  $ARGS_USER \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  deposit \
  --to "$USER_ADDRESS" \
  --desired_a 100 \
  --min_a 100 \
  --desired_b 100 \
  --min_b 100

```

After this, you should receive a `sucess` message... But how do we know that we actually deposited 100 units of each token? The user shoud have new pair tokens, and it should have 100 token\_a less and 100 token\_b less!

```bash
echo Check that the user\'s pair tokens balance is 100

echo "Check PAIR_ID"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $PAIR_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo Now the user should have: 900 units of TOKEN_A
echo "Check user\'s TOKEN_A balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo Now the user should have: 900 units of TOKEN_B
echo "Check user\'s TOKEN_B balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo And the Pair contract should hold:
PAIR_CONTRACT_ADDRESS="{\"address\": {\"contract\":\"$PAIR_ID\"}}"

echo 100 tokens of TOKEN_A
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"

echo 100 tokens of TOKEN_B
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"


echo And none of its own tokens -- the pair tokens --
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $PAIR_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"
echo "--"
echo "--"
echo "--"
echo "--"
```

### 6.- Swap tokens.

Once the SoroswapPair contract (which is a liquidity pool) has been initialized with some units of token\_a and token\_b, any user can perform a trade executing the `swap` function.

Here we will call the `fn swap(e: Env, to: Address, buy_a: bool, out: i128, in_max: i128)` function. If "buy\_a" is true, the swap will buy token\_a and sell token\_b. This is flipped if "buy\_a" is false "out" is the amount being bought, with in\_max being a safety to make sure you receive at least that amount. The swap function will transfer the selling token "to" to this contract, and then the contract will transfer the buying token to "to".

```bash

echo Now we will SWAP 

soroban contract invoke \
  $ARGS_USER \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  swap \
  --to "$USER_ADDRESS" \
  --out 49 \
  --in_max 100 


echo Now the user should have:
echo 803 units of TOKEN_A
echo "Check user\'s TOKEN_A balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo 949 units of TOKEN_B
echo "Check user\'s TOKEN_B balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo And the Pair contract should hold:
PAIR_CONTRACT_ADDRESS="{\"address\": {\"contract\":\"$PAIR_ID\"}}"

echo 197 tokens of TOKEN_A
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"

echo 51 tokens of TOKEN_B
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"
```

### 7.- The final part: Withdraw

The final test is when the user want's to exit the liquidity pool and withdraw its tokens by giving back the pair\_tokens that it has:

The function here will be

```rust
fn withdraw(    e: Env,
                to: Address,
                share_amount: i128, 
                min_a: i128, 
                min_b: i128) -> (i128, i128)
```

```bash

soroban contract invoke \
  $ARGS_USER \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  withdraw \
  --to "$USER_ADDRESS" \
  --share_amount 100 \
  --min_a 197 \
  --min_b 51 
```

If you want to continue experimenting directly with the CLI, here aresome env variable setting that might be useful <3

```bash
ARGS="--network $NETWORK --source token-admin"
PAIR_WASM="pair/target/wasm32-unknown-unknown/release/soroswap_pair_contract.wasm"
PAIR_ID=$(cat .soroban/pair_wasm_hash)
TOKEN_ADMIN_ADDRESS=$(cat .soroban/token_admin_address)
USER_ADDRESS=$(cat .soroban/user_address)
TOKEN_A_ID=$(cat .soroban/token_a_id)
TOKEN_B_ID=$(cat .soroban/token_b_id)
ARGS_USER="--network $NETWORK --source user"


echo In the next we will use:
echo ARGS = $ARGS
echo ARGS_USER = $ARGS_USER
echo PAIR_WASM = $PAIR_WASM
echo PAIR_ID = $PAIR_ID
echo TOKEN_ADMIN_ADDRESS = $TOKEN_ADMIN_ADDRESS
echo USER_ADDRESS = $USER_ADDRESS
echo TOKEN_A_ID = $TOKEN_A_ID
echo TOKEN_B_ID = $TOKEN_B_ID
echo "--"
echo "--"
```

***

You can go through all this steps just by doing:

```bash
bash initialize_pair.sh
```

***

In the next, we will experiment the creation of Pair contracts through the SoroswapFactory contract!

---

# Experiment with Factory Contract

Once you are inside the `soroban-preview-8` container (by `bash quickstart.sh` and `bash run.sh`) you can start experimenting with the SoroswapFactory contract.

Remember that the Factory contract will help users to create new Pair contracts that will act as liquidity pools for every pair of `(token_a, token_b)` pair:

## 1. Open and read the contract:
Open in your favourite IDE or text editor, and check the `factory` folder:

In the `factory/src` folder you will find:
- The `lib.rs` file with the `SoroswapFactory` functions
- The `pair.rs` file that basically imports the pair contract `wasm` from the `core/pair` folder
- The `event.rs` file that defines the events that will be trigered
- The `test.rs` file.

## 2. Compile the contract
You can compile both contracts by just calling `make build` from the root directory, however, we can go contract by contract:
```
cd factory
make build
```

## 3. Read and run the tests:
```bash
make test
```


### 1.- First, set your enviromental variables
Read step 1) from the previous chapter

### 2.- Let's create two dummy tokens:
Read step 2) from the previous chapter

### 3.- Build both the Pair and the Factory contract
And set the `FACTORY_WASM` and `PAIR_WASM` that will tell where to find the build wasm for each contract:

```bash
make build
FACTORY_WASM="factory/target/wasm32-unknown-unknown/release/soroswap_factory_contract.wasm"
PAIR_WASM="pair/target/wasm32-unknown-unknown/release/soroswap_pair_contract.wasm"
```

### 4.- Install the Pair contract WASM
The Factory contract will deploy several instances of the Pair contract (one for each pair), so it requires that the pair contract has been installed in the ledger (but not necesarilly deployed!). Then, the Factory will use the `pair wasm hash` of the installed contract to deploy new instances of the Pair contract.

```bash
echo Install the Pair contract WASM
echo Install a WASM file to the ledger without creating a contract instance

PAIR_WASM_HASH="$(
soroban contract install $ARGS \
  --wasm $PAIR_WASM
)"
echo "$PAIR_WASM_HASH" > .soroban/pair_wasm_hash
echo "SoroswapPair installed succesfully with PAIR_WASM_HASH: $PAIR_WASM_HASH"

```

### 5.- Deploy and initialize the Factory contract
```bash

echo Deploy the Factory contract
FACTORY_ID="$(
  soroban contract deploy $ARGS \
    --wasm $FACTORY_WASM
)"
echo "$FACTORY_ID" > .soroban/factory_id
echo "SoroswapFactory deployed succesfully with FACTORY_ID: $FACTORY_ID"

echo "Initialize the SoroswapFactory contract"
soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  initialize \
  --setter "$TOKEN_ADMIN_ADDRESS" \
  --pair_wasm_hash "$PAIR_WASM_HASH" 
```

### 6.- Create a Pair contrract using the SoroswapFactory contract.
By calling the `create_pair` function inside the `SoroswapFactory` contract, the Factory will create a new Pair contract, and it will return its contract id:

```bash
echo "Create a pair using the SoroswapFactory contract, token_a and token_b"
PAIR_ID=$(soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  create_pair \
  --token_a "$TOKEN_A_ID" \
  --token_b "$TOKEN_B_ID" )
# Assuming the variable PAIR_ID contains the returned ID with apostrophes
PAIR_ID=$(echo $PAIR_ID | tr -d '"')
echo Pair created succesfully with PAIR_ID=$PAIR_ID
echo $PAIR_ID > .soroban/pair_id

echo "--"
echo "--"
```

You might want to call the `all_pairs_length` and `get_pair` functions to test that they work as expected:

```bash
echo Test that now there is 1 pair
soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  all_pairs_length \

echo We should be able to get the same PAIR_ID calling to get_pair function:
soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  get_pair \
  --token_a "$TOKEN_A_ID" \
  --token_b "$TOKEN_B_ID" 

echo Also if we ask for the inverse order

soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  get_pair \
  --token_a "$TOKEN_B_ID" \
  --token_b "$TOKEN_A_ID" 


```

### 7.-  Test the Pair contract.
Now that a new Pair contract has been deployed by the Factory contract, it should behave as seen in the previous chapter. So, once you have the Pair contract_id given in step (6) now you can test all its functions.

In order to do this, please follow steps 5-7 from the previous chapter:

___

If you want to continue experimenting directly with the CLI, here aresome env variable setting that might be useful <3

```bash
ARGS="--network $NETWORK --source token-admin"
PAIR_WASM="pair/target/wasm32-unknown-unknown/release/soroswap_pair_contract.wasm"
PAIR_ID=$(cat .soroban/pair_wasm_hash)
TOKEN_ADMIN_ADDRESS=$(cat .soroban/token_admin_address)
USER_ADDRESS=$(cat .soroban/user_address)
TOKEN_A_ID=$(cat .soroban/token_a_id)
TOKEN_B_ID=$(cat .soroban/token_b_id)
ARGS_USER="--network $NETWORK --source user"


echo In the next we will use:
echo ARGS = $ARGS
echo ARGS_USER = $ARGS_USER
echo PAIR_WASM = $PAIR_WASM
echo PAIR_ID = $PAIR_ID
echo TOKEN_ADMIN_ADDRESS = $TOKEN_ADMIN_ADDRESS
echo USER_ADDRESS = $USER_ADDRESS
echo TOKEN_A_ID = $TOKEN_A_ID
echo TOKEN_B_ID = $TOKEN_B_ID
echo "--"
echo "--"
```
___

You can go through all this steps just by doing:
```bash
bash initialize_pair.sh
```

---

# Deployments

There are already some contracts ready to interact with in Futurenet! The contract id's are:

The Factory contract: `1486c77ba3a9639226dbbe64d1ac6f73a7dd6122201c6bc335d382981ec566b4`

This is the only address in theory you need to interact with the protocol.

There is an already written script to interact with this contract. You can just do:

```bash
bash interact_futurenet.sh
```

So if you want to test the protocol yourself you can follow these instructions:

### 1.- First, set your enviromental variables

Here, as we are using the `soroban-network` docker network, containers can call each other just using their name. In the case of the stellar quickstart container, it's name is `stellar`:

Let's start by setting the FACTORY\_ID and the NETWORK

```bash

NETWORK="futurenet"
FACTORY_ID="1486c77ba3a9639226dbbe64d1ac6f73a7dd6122201c6bc335d382981ec566b4"

# If soroban-cli is called inside the soroban-preview docker containter,
# it can call the stellar standalone container just using its name "stellar"
# if [[ "$IS_USING_DOCKER" == "true" ]]; then
  SOROBAN_RPC_HOST="http://stellar:8000"
# else
  # SOROBAN_RPC_HOST="http://localhost:8000"
# fi

SOROBAN_RPC_URL="$SOROBAN_RPC_HOST/soroban/rpc"

echo "Using Futurenet network"
SOROBAN_NETWORK_PASSPHRASE="Test SDF Future Network ; October 2022"
FRIENDBOT_URL="https://friendbot-futurenet.stellar.org/"

#if !(soroban config network ls | grep "$NETWORK" 2>&1 >/dev/null); then
# Always set a net configuration 
  echo Add the $NETWORK network to cli client
  soroban config network add "$NETWORK" \
    --rpc-url "$SOROBAN_RPC_URL" \
    --network-passphrase "$SOROBAN_NETWORK_PASSPHRASE"
#fi

if !(soroban config identity ls | grep token-admin 2>&1 >/dev/null); then
  echo Create the token-admin identity
  soroban config identity generate token-admin
fi
TOKEN_ADMIN_SECRET="$(soroban config identity show token-admin)"
TOKEN_ADMIN_ADDRESS="$(soroban config identity address token-admin)"

echo "We are using the following TOKEN_ADMIN_ADDRESS: $TOKEN_ADMIN_ADDRESS"
echo "--"
echo "--"
# TODO: Remove this once we can use `soroban config identity` from webpack.
echo "$TOKEN_ADMIN_SECRET" > .soroban/token_admin_secret
echo "$TOKEN_ADMIN_ADDRESS" > .soroban/token_admin_address

# This will fail if the account already exists, but it'll still be fine.
echo Fund token-admin account from friendbot
echo This will fail if the account already exists, but it\' still be fine.
curl  -X POST "$FRIENDBOT_URL?addr=$TOKEN_ADMIN_ADDRESS"

ARGS="--network $NETWORK --source token-admin"
echo "Using ARGS: $ARGS"
```

### 2.- Let's create two dummy tokens:

We need to create 2 tokens in order to interact with the Pair contract

```bash
mkdir -p .soroban
PAIR_WASM="pair/target/wasm32-unknown-unknown/release/soroswap_pair_contract.wasm"
TOKEN_WASM="soroban_token_contract.wasm"

echo Deploying TOKEN_A
  TOKEN_A_ID="$( soroban contract deploy $ARGS --wasm $TOKEN_WASM)"

echo "Initializing TOKEN_A. Executing:
    fn initialize(e: Env, admin: Address, decimal: u32, name: Bytes,symbol: Bytes)"

  soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_A_ID \
  -- \
  initialize \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --decimal 7 \
  --name 'AA' \
  --symbol 'AA'
  echo "--"
  echo "--"


echo Deploying TOKEN_B
  TOKEN_B_ID="$(soroban contract deploy $ARGS --wasm $TOKEN_WASM)"
  
echo Initializing TOKEN_B

  soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_B_ID \
  -- \
  initialize \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --decimal 7 \
  --name 'BB' \
  --symbol 'BB'
  echo "--"
  echo "--"

echo Current TOKEN_A_ID: $TOKEN_A_ID
echo Current TOKEN_B_ID: $TOKEN_B_ID
```

Because the Pair token always uses token\_a and token\_b so `token_a<token_b`, this is something we need to check before initializing the pair contract with our two tokens. Later, this is something that will be done automatically by the Factory contract:

```bash
if [[ "$TOKEN_B_ID" > "$TOKEN_A_ID" ]]; then
  echo "TOKEN_B_ID is greater than TOKEN_A_ID"
  echo "This is the correct order"
else
  echo "TOKEN_B_ID is less than or equal to TOKEN_A_ID"
  echo "We will invert the order of the tokens"
  TOKEN_A_ID_NEW=$TOKEN_B_ID
  TOKEN_B_ID=$TOKEN_A_ID
  TOKEN_A_ID=$TOKEN_A_ID_NEW

fi
echo Current TOKEN_A_ID: $TOKEN_A_ID
echo Current TOKEN_B_ID: $TOKEN_B_ID
  echo "--"
  echo "--"


echo -n "$TOKEN_A_ID" > .soroban/token_a_id
echo -n "$TOKEN_B_ID" > .soroban/token_b_id
```

## Create a pair and experiment

```bash

echo "Create a pair using the SoroswapFactory contract, token_a and token_b"
PAIR_ID=$(soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  create_pair \
  --token_a "$TOKEN_A_ID" \
  --token_b "$TOKEN_B_ID" )
# Assuming the variable PAIR_ID contains the returned ID with apostrophes
PAIR_ID=$(echo $PAIR_ID | tr -d '"')
echo Pair created succesfully with PAIR_ID=$PAIR_ID
echo $PAIR_ID > .soroban/pair_id

echo "--"
echo "--"


echo How many pairs already exist??
soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  all_pairs_length \

echo We should be able to get the same PAIR_ID calling to get_pair function:
soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  get_pair \
  --token_a "$TOKEN_A_ID" \
  --token_b "$TOKEN_B_ID" 

echo Also if we ask for the inverse order

soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  get_pair \
  --token_a "$TOKEN_B_ID" \
  --token_b "$TOKEN_A_ID" 

echo "---"
echo "---"
echo "---"
echo "---"
echo "-- Now we will test functions calling the Pair contract"

echo Lets see if the token adddresses in the Pair contract are correct
echo Lets ask for token_0 -- TOKEN_A_ID -- 
echo We have TOKEN_A_ID = $TOKEN_A_ID

soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  token_0 

echo "---"
echo "---"


echo Lets see if the token adddresses in the Pair contract are correct
echo Lets ask for token_1 -- TOKEN_B_ID -- 
echo We have TOKEN_B_ID = $TOKEN_B_ID

soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  token_1 

echo "---"
echo "---"
echo Now lets test the created Pair. 


echo "---"
echo "---"


echo Finally::: check that if we try to create the same pair, the contract will panic:
soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  create_pair \
  --token_a "$TOKEN_A_ID" \
  --token_b "$TOKEN_B_ID" 

soroban contract invoke \
  $ARGS \
  --wasm $FACTORY_WASM \
  --id $FACTORY_ID \
  -- \
  create_pair \
  --token_a "$TOKEN_B_ID" \
  --token_b "$TOKEN_A_ID" 




echo "---"
echo "---"

echo "---"
echo "---"

echo "---"
echo "---"



echo In the following we are going to use a new USER account:
  echo Creating the user identity
  soroban config identity generate user
  USER_SECRET="$(soroban config identity show user)"
  USER_ADDRESS="$(soroban config identity address user)"
  echo "We are using the following USER_ADDRESS: $USER_ADDRESS"
  echo "$USER_SECRET" > .soroban/user_secret
  echo "$USER_ADDRESS" > .soroban/user_address
  



echo "Mint 1000 units of token A user -- calling from TOKEN_ADMIN"

soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_A_ID \
  -- \
  mint \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --to "$USER_ADDRESS" \
  --amount "1000" 

echo "Mint 1000 units of token B to user"

soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM \
  --id $TOKEN_B_ID \
  -- \
  mint \
  --admin "$TOKEN_ADMIN_ADDRESS" \
  --to "$USER_ADDRESS" \
  --amount "1000" 


echo "Check that user has 1000 units of each token"
echo "Check TOKEN_A"
soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo "Check TOKEN_A"
soroban contract invoke \
  $ARGS \
  --wasm $TOKEN_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id $USER_ADDRESS


echo "test get_rsrvs"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $PAIR_ID \
  -- \
  get_rsrvs


echo "Deposit these tokens into the Pool contract"
echo "This will be called by the user"
ARGS_USER="--network $NETWORK --source user"
echo "Hence we use ARG_USER: $ARGS_USER"

echo Fund user account from friendbot
echo This will fail if the account already exists, but it\' still be fine.
curl  -X POST "$FRIENDBOT_URL?addr=$USER_ADDRESS"


echo "
Calling:
    fn deposit( e: Env, 
                to: Address,
                desired_a: i128, 
                min_a: i128, 
                desired_b: i128, 
                min_b: i128) {


"

echo In the next we will use:
echo ARGS = $ARGS
echo ARGS_USER = $ARGS_USER
echo PAIR_WASM = $PAIR_WASM
echo PAIR_ID = $PAIR_ID
echo TOKEN_ADMIN_ADDRESS = $TOKEN_ADMIN_ADDRESS
echo USER_ADDRESS = $USER_ADDRESS
echo TOKEN_A_ID = $TOKEN_A_ID
echo TOKEN_B_ID = $TOKEN_B_ID
echo "--"
echo "--"

soroban contract invoke \
  $ARGS_USER \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  deposit \
  --to "$USER_ADDRESS" \
  --desired_a 100 \
  --min_a 100 \
  --desired_b 100 \
  --min_b 100

echo Check that the user pair tokens balance is 100


echo "Check PAIR_ID"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $PAIR_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo Now the user should have:
echo 900 units of TOKEN_A
echo "Check user\'s TOKEN_A balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo 900 units of TOKEN_B
echo "Check user\'s TOKEN_B balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo And the Pair contract should hold:
PAIR_CONTRACT_ADDRESS="{\"address\": {\"contract\":\"$PAIR_ID\"}}"

echo 100 tokens of TOKEN_A
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"

echo 100 tokens of TOKEN_B
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"


echo And none of its own tokens -- the pair tokens --
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $PAIR_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"
echo "--"
echo "--"
echo "--"
echo "--"

echo Now we will SWAP 

# If "buy_a" is true, the swap will buy token_a and sell token_b. This is flipped if "buy_a" is false.
# "out" is the amount being bought, with in_max being a safety to make sure you receive at least that amount.
#  swap will transfer the selling token "to" to this contract, and then the contract will transfer the buying token to "to".
#     fn swap(e: Env, to: Address, buy_a: bool, out: i128, in_max: i128);

# In this case we are selling token_a and buying token_b

soroban contract invoke \
  $ARGS_USER \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  swap \
  --to "$USER_ADDRESS" \
  --out 49 \
  --in_max 100 



echo Now the user should have:
echo 803 units of TOKEN_A
echo "Check user\'s TOKEN_A balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo 949 units of TOKEN_B
echo "Check user\'s TOKEN_B balance"
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id $USER_ADDRESS

echo And the Pair contract should hold:
PAIR_CONTRACT_ADDRESS="{\"address\": {\"contract\":\"$PAIR_ID\"}}"

echo 197 tokens of TOKEN_A
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_A_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"

echo 51 tokens of TOKEN_B
soroban contract invoke \
  $ARGS \
  --wasm $PAIR_WASM\
  --id $TOKEN_B_ID \
  -- \
  balance \
  --id "$PAIR_CONTRACT_ADDRESS"


echo "---"
echo "---"
echo "---"
echo "---"
echo "WITHDRAW: The final step"

echo "Calling: 
    fn withdraw(  e: Env,
                  to: Address,
                  share_amount: i128, 
                  min_a: i128, 
                  min_b: i128) -> (i128, i128) {"

soroban contract invoke \
  $ARGS_USER \
  --wasm $PAIR_WASM \
  --id $PAIR_ID \
  -- \
  withdraw \
  --to "$USER_ADDRESS" \
  --share_amount 100 \
  --min_a 197 \
  --min_b 51 

```

---

# Using the Soroswap Testnet



---

# Soroswap Aggregator



---

# Supported AMMs

Automated Market Makers (AMMs) are essential to decentralized finance (DeFi), enabling the efficient exchange of assets without centralized intermediaries or traditional order books. The Stellar network supports several AMMs that each offer unique features to improve liquidity and decentralized trading. Below is an overview of key AMMs supported by Soroswap Finance:

* [**Soroswap AMM**](https://soroswap.finance)\
  Soroswap.Finance is a decentralized AMM on Stellar, providing users with seamless asset swaps through liquidity pools. The platform employs algorithms that automatically adjust asset prices based on the pool's asset ratios, ensuring liquidity and price stability. Soroswap is tailored to the Stellar ecosystem and focuses on user-friendly, efficient swaps, making it a preferred choice for decentralized trading.
* [**Phoenix AMM**](https://github.com/Phoenix-Protocol-Group/docs/blob/main/Initial%20Phoenix%20Whitepaper.pdf)\
  The Phoenix AMM is part of the Phoenix Protocol ecosystem, a suite of decentralized applications on Stellar. It integrates with the Phoenix DEX and other DeFi services, ensuring that liquidity is provided autonomously through smart contracts. Phoenix AMM's primary goal is to enhance the Stellar ecosystem by offering decentralized, efficient trading across its applications.
* [**Aquarius AMM**](https://aqua.network) **(Coming Soon)**\
  Aquarius incentivizes liquidity provision and market-making on the Stellar network. The AQUA token community votes to determine which markets receive liquidity incentives, and top-voted markets reward Stellar DEX market makers and AMM liquidity providers. As Aquarius AMMs evolve, rewards will gradually shift from Stellar AMMs to Aquarius-specific AMMs, bringing more control and governance into the hands of the community.

---

# Aggregator Audits

The **Soroswap Aggregator Smart Contracts** were audited by [**Runtime Verification**](https://runtimeverification.com), a renowned firm specializing in formal verification and smart contract security audits. The audit reviewed the business logic, code, and interactions between the system’s modules to identify potential security vulnerabilities, functional errors, and opportunities for optimization.

[The audit](https://github.com/soroswap/aggregator/blob/main/audits/2024-08-31_Soroswap_Aggregator_Audit_by_RuntimeVerification.pdf) ensured that the Aggregator contracts operate securely and efficiently, protecting users' funds and ensuring the smooth execution of token swaps across the various protocols supported by the [Aggregator.](https://docs.soroswap.finance/01-concepts/aggregator)

[Read the report here](https://github.com/soroswap/aggregator/blob/main/audits/2024-08-31_Soroswap_Aggregator_Audit_by_RuntimeVerification.pdf)

---

# Aggregator Disclaimer

The Aggregator protocol interacts with various subcontracts through Adapter contracts and directly with exchange protocols. It is important to note that some of these protocols may upgrade their WebAssembly (WASM) code. While upgrades can bring new features and improvements, they also pose potential risks, including the introduction of malicious code. Similarly, tokens themselves can be upgraded or may contain malicious code, especially when dealing with unknown or unverified assets.

#### Risk Description:
When using the Aggregator, transactions transitively call multiple subcontracts. If the signature of a transaction passes the `require_auth` checks at each level, the called contracts can fully manipulate the signer's funds. This means that if a protocol the Aggregator accesses or a token being traded is upgraded to malicious code, there is a risk that a transaction could lead to the loss of some or all of the signer's funds, even if it passes the minimum or maximum checks on dynamic assets (e.g., `swap_exact_tokens_for_tokens`).

#### User Guidance:
- **Inspect Contracts and Tokens:** Users should carefully inspect and understand the footprint and authorization payloads of each contract call within a transaction, as well as the nature and history of the tokens being traded.
- **Understand the Risk:** We acknowledge that not every user may have the technical knowledge to discern when a transaction might have malicious effects. Therefore, we recommend users educate themselves on the potential risks involved with protocol upgrades, subcontract calls, and token interactions.
- **Educational Resources:** For more information on understanding contract interactions, token risks, and the dangers associated with protocol and token upgrades, please refer to the following [resources](https://developers.stellar.org/docs/build/smart-contracts/example-contracts/auth#require_auth).

By using the Aggregator, you acknowledge the potential risks associated with subcontract calls, protocol upgrades, and token interactions. Please use this service responsibly and remain vigilant when interacting with any smart contracts and tokens.

---

# Aggregator Technical Reference



---

# How Aggregator Works

The **Soroswap Aggregator** is a smart contract that enables users to swap assets across multiple protocols simultaneously, optimizing returns. Built on the [Soroban](https://developers.stellar.org) platform within the Stellar network, it allows users to split trades between different liquidity platforms.

### Aggregator Architecture

* **Aggregator Contract**: The core of the system, responsible for managing swap requests. It uses a mechanism called **`DexDistribution`** to calculate the best way to split the trade among different DEXs. This contract handles the coordination between different protocols and ensures that swaps are executed efficiently.
* **Adapters**: Each integrated DEX has a dedicated adapter, which acts as a bridge between the Aggregator and the specific DEX. These adapters manage the details of how the Aggregator interacts with each protocol, ensuring seamless communication.
* **Deployer Contract**: To ensure security, the deployment and initialization of adapters are handled by a dedicated Deployer Contract. This contract automates the process, reducing the risk of errors and preventing the integration of insecure adapters.

### How the DexDistribution is Calculated

The **`DexDistribution`** mechanism is crucial for optimizing swaps across different DEXs. The [**Soroswap.Finance Aggregator** ](https://github.com/soroswap/aggregator/blob/main/audits/2024-08-31_Soroswap_Aggregator_Audit_Summary_by_RuntimeVerification.pdf)utilizes a [**Zephyr Indexer** ](https://github.com/soroswap/phoenix-zephyr-indexer)table for each underlying protocol. This indexer collects data on liquidity and rates available across various DEXs. Using this information, the [**Soroswap Router SDK**](https://docs.soroswap.finance/soroswap-router-sdk) calculates the optimal distribution of the swap across the supported protocols, ensuring that the swap is divided in the most efficient way possible, maximizing returns and minimizing costs.\
For more details on [The Importance of Indexers in Blockchain Ecosystems](https://docs.soroswap.finance/04-partners/01-mercury-subquery#the-importance-of-indexers-in-blockchain-ecosystems)

### Operational Flow

**Deployment and Initialization**: When the Aggregator is deployed, the administrator initializes the contract and registers the supported DEX protocols. The Deployer Contract ensures that only properly configured adapters are integrated into the system.

<figure><img src="../../.gitbook/assets/Captura de pantalla 2024-09-06 a las 10.38.26.png" alt=""><figcaption><p><strong>Aggregator Initialization Diagram</strong>.</p></figcaption></figure>

**Swap Requests**: Whenever a user initiates a swap, the [**Soroswap Router SDK** ](https://docs.soroswap.finance/soroswap-router-sdk)calculates the optimal way to distribute the swap using **`DexDistribution`**`.` This process is illustrated in **Figure: Aggregator Function Diagram** and involves:

* **Protocols used for the swap**: Selecting the best DEXs for the transaction.
* **Fractions of the total amount to be swapped**: Determining how much of the swap will be executed on each DEX.
* **Path of the swap**: Defining the sequence of tokens from the input to the output.

<figure><img src="../../.gitbook/assets/Captura de pantalla 2024-09-06 a las 10.42.11.png" alt=""><figcaption><p><strong>Aggregator Function Diagram</strong></p></figcaption></figure>

**Error Handling and Validation**: The system includes validation steps to ensure that swap paths are correctly formed and that the transactions adhere to the defined rules. If any issues are detected, the transaction is rejected to protect the user’s funds.

{% hint style="warning" %}
**Prevention of Malicious Code**: Use the [**Deployer Contract**](https://developers.stellar.org/docs/build/smart-contracts/example-contracts/deployer) to add adapters to the Aggregator. This ensures that only trusted and properly initialized adapters are integrated, minimizing the risk of malicious code.
{% endhint %}

**Route Validation**: Follow the **Strict Rules** for validating swap routes, as shown in **Figure: Aggregator Function Diagram**. This will prevent the use of malformed paths that could lead to failed transactions or losses.

{% hint style="info" %}
**Documentation and User Education**: Read the **Clear Documentation** and engage in **User Education** to understand how to interact safely with the [Aggregator.](https://github.com/soroswap/aggregator/blob/main/audits/2024-08-31_Soroswap_Aggregator_Audit_Summary_by_RuntimeVerification.pdf) Be aware of the risks associated with swaps and follow best practices for using the platform securely.
{% endhint %}

**Optimization of Validations**: Take advantage of **Validation Optimization** at the adapter level to reduce costs and avoid redundant checks. This ensures that only necessary checks are performed, improving overall system efficiency.

### Conclusion

The **Soroswap.Finance Aggregator** is designed to enhance the user experience by ensuring efficient and secure token swaps across multiple DEXs. Through careful coordination and validation, the Aggregator maximizes returns and minimizes risks. For more detailed technical information, users can refer to the audit reports and documentation linked below:

* [Security Audit Report](https://github.com/soroswap/aggregator/blob/main/audits/2024-08-31_Soroswap_Aggregator_Audit_by_RuntimeVerification.pdf)
* [Security Audit Findings Summary](https://github.com/soroswap/aggregator/blob/main/audits/2024-08-31_Soroswap_Aggregator_Audit_Summary_by_RuntimeVerification.pdf)

---

# Aggregator Design

## Abstract

In the dynamic and fragmented landscape of decentralized finance (DeFi), achieving optimal trade execution across various decentralized exchanges (DEXs) presents a significant challenge. The Soroswap-Aggregator, proposed for development on the Soroban platform, aims to address this challenge by intelligently aggregating liquidity from multiple DEXs. This paper revisits the conceptual underpinnings and developmental strategies for the Soroswap-Aggregator smart contract. It emphasizes an optimization algorithm designed to minimize slippage and gas costs while maximizing trade efficiency. Through a blend of technical rigor and strategic foresight, this investigation outlines the functions, optimization processes, and key considerations essential for the smart contract's successful implementation.

## 1. Introduction

Amidst the burgeoning DeFi ecosystem, the dispersion of liquidity across numerous DEXs complicates the pursuit of efficient trade execution. The Soroswap-Aggregator concept harnesses the Soroban platform's capabilities to consolidate this liquidity, facilitating superior trade outcomes. By navigating the complexities of variable gas fees, DEX transaction fees, slippage, and liquidity depth, the aggregator seeks to offer a solution that optimizes swaps for end-users.

## 2. System Architecture and Core Functions

### 2.1 The Swap Function: A Closer Look

Central to the Soroswap-Aggregator is the `swap` function, designed with the following parameters for a user-centric trading experience:

* `fromToken` and `destToken`: Specifies the trading pair for the swap.
* `amount`: The volume of `fromToken` to be exchanged.
* `amount_out_min`: Ensures the trade is executed only if the return in `destToken` meets or exceeds this threshold, guarding against undesirable slippage.
* `distribution`: A strategic array dictating the apportionment of the trade across selected DEXs for optimal execution.

### 2.2 Optimizing Trade Execution

The underlying optimization algorithm is tasked with generating the `distribution` array. This process entails a comprehensive analysis incorporating:

* **Gas Costs and DEX Fees**: Balancing the trade-off between transaction fees and optimal execution paths.
* **Slippage Mitigation**: Estimating and minimizing the price impact of trades across various liquidity depths.
* **Liquidity Analysis**: Assessing available liquidity to ensure the aggregator routes trades through the most efficient DEXs.

## 3. Developmental Considerations

### 3.1 Scalability and Flexibility

The smart contract architecture prioritizes scalability, allowing for the incorporation of additional DEXs and tokens as the DeFi ecosystem evolves.

### 3.2 Security Measures

A foundational pillar of the development process is a rigorous security protocol, including comprehensive audits and testing phases, to safeguard against vulnerabilities and ensure user asset protection.

### 3.3 Efficiency and User Experience

Efficiency in trade execution and gas usage is matched by a commitment to a seamless user experience, with transparent processes and intuitive interfaces guiding interaction with the aggregator.

## 4. Conclusion

The conceptualization and forthcoming development of the Soroswap-Aggregator on Soroban represent a significant leap forward in DeFi trade optimization. By intelligently navigating the complexities of the DEX landscape, this smart contract aims to set a new standard for liquidity aggregation, offering users unparalleled efficiency and security in their trading endeavors. As we advance, the focus will remain on refining the optimization algorithm, enhancing security protocols, and ensuring the scalability and adaptability of the Soroswap-Aggregator to meet the future demands of the DeFi marketplace.

## Future Directions

The next phases of this project will delve deeper into the specifics of algorithm development, the integration of emerging DEX platforms, and continuous improvements in user interface design, all while maintaining an agile approach to accommodate the fast-paced evolution of the DeFi sector.

---

# Aggregator Technical Overview

## Smart Contract Structure and Operation

The Soroswap-Aggregator smart contract is designed to optimize trade execution across multiple decentralized exchanges (DEXes) on the Soroban platform. The contract's primary function is to receive user trade requests, including the tokens to be swapped, the amount, and a distribution array that dictates how the trade is split across available DEXes.

## Core Components

1. **DEX Registry**: A dynamic list within the smart contract that maintains the addresses and interfaces of integrated DEXes. This registry allows the aggregator to interact with different liquidity pools directly.
2. **Swap Functionality**: The core `swap` function which processes trades based on the input parameters:
   * `fromToken` and `destToken`: Addresses of the trading pair.
   * `amount`: The total amount of `fromToken` to be swapped.
   * `minReturn`: The minimum acceptable return amount in `destToken`.
   * `distribution`: An array specifying how the trade should be distributed across the DEXes.

## Optimization Algorithm

The optimization algorithm plays a pivotal role outside of the smart contract, typically running off-chain due to its computational complexity. It analyzes current market conditions, including liquidity depth, gas costs, slippage, and DEX fees, to generate the optimal `distribution` array for a given trade. This array is then passed to the smart contract along with the swap request.

### How the Optimization Works:

1. **Data Collection**: Gather real-time data from each DEX in the registry regarding prices, liquidity depths, and fees.
2. **Scenario Analysis**: Calculate the potential outcome of distributing the trade across different combinations of DEXes.
3. **Cost-Benefit Calculation**: Evaluate the trade-off between transaction costs (including gas fees and DEX fees) and the benefits (minimized slippage and maximized returns).
4. **Distribution Generation**: Output the optimal distribution strategy that offers the best return after all costs.

## Smart Contract Execution

Upon receiving a trade request with the specified `distribution`, the smart contract performs the following steps:

1. **Validation**: Verify that the sum of the distribution array matches the total `amount` to be traded and that the `minReturn` is achievable.
2. **DEX Mapping**: Identify which DEXes correspond to each element of the distribution array using the DEX registry.
3. **Trade Execution**: For each non-zero element in the distribution array, interact with the corresponding DEX's smart contract to execute the portion of the trade allocated to it.
4. **Result Aggregation**: Collect and aggregate the results of each partial trade to ensure the total return meets or exceeds the `minReturn`. If the aggregation meets the criteria, complete the transaction; otherwise, revert all partial trades to protect the user from unfavorable execution.

## Challenges and Considerations

* **Gas Efficiency**: Executing multiple trades across different DEXes can be gas-intensive. The smart contract and optimization algorithm must prioritize gas efficiency to ensure the benefits of aggregation outweigh the costs.
* **Security and Risk Management**: Interacting with multiple DEXes increases exposure to smart contract vulnerabilities. Rigorous security audits and continuous monitoring of integrated DEXes are essential.

## DEX Management

### Static Integration with Dynamic Address Management

* **Integrated DEX List with Admin-Controlled Updates**: The Soroswap-Aggregator smart contract will feature a hardcoded list of supported DEXes, chosen based on their reliability, liquidity, and compatibility with the aggregator's objectives. This list includes specific functionalities and interfaces required to interact with each DEX, ensuring that swaps are executed efficiently and securely.
* **Dynamic Address Management**: To retain the ability to respond to changes within the DEX landscape—such as contract updates, migrations, or critical protocol upgrades—the smart contract will implement a mechanism for dynamically updating the addresses of the integrated DEXes. This functionality will be restricted to an admin role, specifically designated to the contract's maintainers or developers.
  * **Admin-Controlled `updateDEXAddress` Function**: The contract will include an `updateDEXAddress` function, allowing the admin to update the contract address of any DEX in the list. This function requires two inputs: the identifier of the DEX (which could be an index or a name) and the new smart contract address for the DEX.

### Key Considerations

* **Security and Integrity**: The ability to update DEX addresses is a powerful feature that must be handled with the utmost care to maintain the aggregator's integrity and user trust. Measures such secure key management, and thorough testing of address updates are essential to mitigate risks.
* **Transparency and Accountability**: Maintaining transparency regarding any changes made to DEX addresses is crucial. Detailed logs and justifications for each update should be readily available to users, ensuring accountability and maintaining confidence in the platform.
* **Monitoring and Verification**: Continuous monitoring of integrated DEXes for updates or security advisories is critical. The admin team must have procedures in place to quickly verify and implement required changes to DEX addresses, ensuring the aggregator remains functional and secure against evolving threats.

## Understanding the `DexDistribution` Struct

The `DexDistribution` struct is designed to instruct the aggregator on how to split and execute a swap across multiple DEX protocols. Each `DexDistribution` object contains three key pieces of information:

* **index**: Identifies the specific DEX protocol where the swap will be executed.
* **path**: Specifies the token swap path required by some DEXes, particularly useful for multi-hop swaps where a direct pair might not be available.
* **parts**: Indicates how many parts of the total swap amount should be routed through this particular DEX protocol.

## Example Explanation

Consider a scenario where a user wants to swap Token A for Token B, but to optimize the swap, the trade is split across two different DEX protocols, each possibly requiring a different path for the swap. The distribution for this swap might look something like this:

```rust
let distribution = vec![
    DexDistribution {
        index: 0, // Protocol 0, e.g., "Soroswap"
        path: vec![TOKEN_A, TOKEN_B, TOKEN_C], // Required swap path for Soroswap
        parts: 3, // 3 parts of the trade to go through Soroswap
    },
    DexDistribution {
        index: 1, // Protocol 1, e.g., "Phoenix"
        path: vec![TOKEN_A, TOKEN_C], // Required swap path for Phoenix
        parts: 2, // 2 parts of the trade to go through Phoenix
    }
];
```

In this distribution:

* 3/5 of the total swap amount is routed through Protocol 0 (Soroswap), following the path \[TOKEN\_A, TOKEN\_B, TOKEN\_C].
* The remaining 2/5 is routed through Protocol 1 (Phoenix), following the path \[TOKEN\_A, TOKEN\_C].

## Swap Execution Process

When executing the swap, the aggregator will:

1. **Calculate the Total Parts**: Sum the `parts` from each `DexDistribution` object to determine the total number of parts the swap amount will be divided into. In this example, the total is 5 parts.
2. **Determine Amount per Part**: Divide the total swap amount by the total number of parts to find out how much each part represents.
3. **Execute Swaps Based on Distribution**: For each `DexDistribution` in the array:
   * Calculate the specific amount to swap through each protocol by multiplying the amount per part by the `parts` specified in the `DexDistribution`.
   * Execute the swap on the specified protocol (`index`) using the determined amount and following the provided `path`.
   * Ensure that each swap meets or exceeds any minimum output requirements and is completed before the specified `deadline`.

## Key Points

* The `path` allows for flexibility in handling swaps that require multiple hops, accommodating the specific requirements of different DEX protocols.
* The `parts` attribute allows the aggregator to dynamically allocate the swap amount across different protocols, optimizing for factors like slippage, gas fees, or liquidity depth.
* The `index` serves as a straightforward way to reference each protocol. While this example uses integer indices for simplicity, it's crucial in the actual implementation to map these indices to the specific smart contract addresses or interface methods required to interact with each DEX.

## Conclusion

The Soroswap-Aggregator smart contract represents a sophisticated tool for optimizing DEX trades on the Soroban platform, requiring a carefully crafted balance between on-chain efficiency and off-chain computational complexity. The success of the aggregator hinges on its ability to dynamically adapt to the DeFi marketplace's fluidity, ensuring secure, efficient, and optimal trade execution for users.

---

# Aggregator Operation

### **Aggregator Initialization**

When the [Aggregator](https://github.com/soroswap/aggregator/) contract is deployed, the user who initializes it becomes the protocol administrator. During initialization, compatible underlying protocols are registered in the contract's storage, as shown in Figure 1.

<figure><img src="../../.gitbook/assets/Captura de pantalla 2024-09-05 a las 11.37.59.png" alt=""><figcaption><p><strong>Figure 1: Aggregator <code>initialize</code> function operations diagram.</strong></p></figcaption></figure>

### **Token Swap Process**

The Aggregator facilitates token swaps through two primary functions:

* **`swap_exact_tokens_for_tokens (when you want to have an exact input)`**
* **`swap_tokens_for_exact_tokens (when you want ot have an exact output)`**

These functions require users to specify:

* The input token (`token_in`).
* The output token (`token_out`).
* The amounts involved.
* A distribution vector (`DexDistribution`).

This vector contains information on how the swap should be split across different protocols and the paths to be followed for the operation.

<figure><img src="../../.gitbook/assets/Captura de pantalla 2024-09-05 a las 11.22.43.png" alt=""><figcaption><p>Figure 2: Aggregator <code>swap</code> functions operations diagram.</p></figcaption></figure>

### **Distribution Calculation**

To calculate the amounts to be swapped in each protocol, the **`calculate_distribution_amounts`** function is used. The mathematical formula applied is:

$$
\text{amount}_i = \left\lfloor \frac{\text{total\_amount} \times \text{dist}_i.\text{parts}}{\text{total\_parts}} \right\rfloor ; \quad \forall i \in Z \text{ s.t. } 1 \leq i < n
$$

This formula calculates the amount to be swapped for each protocol (i), where:

* `total_amount` is the total amount to be swapped.
* `total_parts` is the sum of all parts specified in `DexDistribution`.

$$
(\text{dist}_i.\text{parts})  is  the fraction  assigned  to  protocol  (i).
$$

$$
(Z)  represents   the  set  of  integers, and  (1 \leq i < n)  specifies
$$

$$
that  (i)   is  within  the  range  of  protocols  involved  in  the  swap.
$$

This formula ensures that the total amount to be swapped is correctly distributed among the selected protocols.

### **Administrative Functions**

The Aggregator includes administrative functions that allow management of the contract, such as:

* Initializing the contract.
* Registering, pausing, and removing protocols.
* Modifying the administrator address.

These functions ensure that the administrator has control over the protocols used in swaps and that only trusted protocols are utilized.

### **Adapter Interface and Protocols**

The Aggregator communicates with protocols via adapters, which implement the **`SoroswapAggregatorAdapterTrait`** interface. This interface defines standard functions such as:

* **`initialize`**: Sets up the adapter with necessary information.
* **`swap_exact_tokens_for_tokens`**: Executes swaps specifying the minimum token amounts.
* **`swap_tokens_for_exact_tokens`**: Executes swaps specifying the maximum input tokens.

Each adapter handles the specifics of its respective protocol, as shown in **Figure 3**.

<figure><img src="../../.gitbook/assets/Captura de pantalla 2024-09-05 a las 12.02.52.png" alt=""><figcaption><p><strong>Figure 3: Adapter swap functions and data fetchers diagram.</strong></p></figcaption></figure>

---

# Aggregator Smart Contracts



---

# SoroswapAggregator Contract



---

# Adapter Trait



---

# SoroswapAdapter Contract



---

# Aggregator Inspirations



---

# 1inch Inspiration

**Introduction:** 1inch Network is a decentralized finance (DeFi) aggregator, primarily known for its ability to optimize and route trades across multiple decentralized exchanges (DEXes). This study encompasses the insights and technical aspects of the 1inch Aggregator, particularly focusing on its OneSplit smart contract.

**Understanding 1inch Aggregator:**

* The 1inch Aggregator sources liquidity from various DEXes to provide users with the best possible trading rates. It achieves this by splitting transactions across multiple DEXes, effectively minimizing slippage and maximizing trade efficiency.
* Key to its operation is the OneSplit smart contract, which automates the process of finding the best execution for a trade.

**OneSplit Smart Contract:**

* **Functionality:** OneSplit smart contract is responsible for splitting orders into parts and routing them through the most efficient path. It calculates the expected return for a given trade, considering various factors like liquidity depth and token prices in real-time across different DEXes.
* **Parts and Distribution:** The concept of 'parts' in OneSplit plays a crucial role. It refers to how a trade is divided for execution across DEXes. The contract determines the optimal way to allocate these parts to different DEXes, which is reflected in the distribution array. The OneSplit contract holds a list of DEXes from where it choses where to trade.
* **Execution of Trades:** The standard `swap` method in OneSplit handles multi-step trades, while the `swapMulti` method allows for executing a sequence of distinct swaps in a single transaction.

### OneSplit Flow

**getExpectedReturn:** Everything starts in [here](https://github.com/1inch/1inchProtocol/blob/811f7b69b67d1d9657e3e9c18a2e97f3e2b2b33a/OneSplitAudit.full.sol#L806) it receives `fromToken`, `destToken`, `amount`, `parts`, `flags` you check the flags [here](https://github.com/1inch/1inchProtocol/blob/811f7b69b67d1d9657e3e9c18a2e97f3e2b2b33a/OneSplitAudit.full.sol#L723). this will return and object like this:

```json
{
  returnAmount: 625685622893,
  distribution: [1,0,0,0,0,0,4,0,0,0]
}
```

The `parts` input indicates how many parts the trade should be split into, and the `distribution` array shows the allocation of these parts across different DEXes. The `returnAmount` represents the expected return for the trade.

as you can see it returns an expected amount and a distribution array, this distribution array is a list of exchanges inside the contract where it can perform the swaps, in this example is suggesting to swap 1 part on exchange #0 and 4 parts on exchange #6, 5 parts in total.

To find the best distribution it has a `_findBestDistribution` function which receives the `parts` and a matrix of expected amounts and then returns the distribution. This Matrix is built calculating the expected return for each exchange and each accumulated parts. For example: `matrix[i][j]` is the expected return of using exchange `i` with `j` parts minus gas.

This matrix is build using an array of functions. Which could be tricky to understand:

```solidity
    function(IERC20,IERC20,uint256,uint256,uint256) view returns(uint256[] memory, uint256)[DEXES_COUNT] memory reserves = _getAllReserves(flags);
```

The function `_getAllReserves(flags)` returns an array of functions, each function is a calculate function for a different protocol, for example, the array could be `[calculateUniswap, calculateBancor, ... , calculateOasis]`.

**\_findBestDristribution:** This function is responsible for finding the best distribution of the parts, it receives the `parts` and a matrix of expected amounts. it builds two arrays, answer and parent. First, the answer array stores the expected return of exchange and parts combinations. For example, `answer[i][j]` stores the best expected amount using `j` parts, which could be swapping `j-k` for one (or multiple) exchange and `k` for the exchange `i`. Second, the parent array stores the number of parts that are left to use in another exchange. The answer array is a matrix of `int[n][s+1]` and the parent array is a matrix of `uint[n][s+1]` where `n` is the number of exchanges and `s` is the number of parts.

```solidity
        int256[][] memory answer = new int256[][](n); // int[n][s+1]
        uint256[][] memory parent = new uint256[][](n); // int[n][s+1]
```

The inizialization of the arrays looks like:

```solidity
for (uint j = 0; j <= s; j++) {
    answer[0][j] = amounts[0][j];
    for (uint i = 1; i < n; i++) {
        answer[i][j] = -1e72;
    }
    parent[0][j] = 0;
}
```

Which means that the expected return for the first exchange is the expected return of using the first exchange with `j` parts, and the expected return for the rest of the exchanges is -1e72 (a very low number) and the parent for the first exchange is 0.

The main part of the algorithm is here:

```solidity
        for (uint i = 1; i < n; i++) {
            for (uint j = 0; j <= s; j++) {
                answer[i][j] = answer[i - 1][j];
                parent[i][j] = j;

                for (uint k = 1; k <= j; k++) {
                    if (answer[i - 1][j - k] + amounts[i][k] > answer[i][j]) {
                        answer[i][j] = answer[i - 1][j - k] + amounts[i][k];
                        parent[i][j] = j - k;
                    }
                }
            }
        }
```

Here, first it initializes the answer and parent arrays with the expected return of using the first exchange with `j` parts and the parent for the first exchange is `j`. Then it loops through the rest of the exchanges and parts, checking if the expected return of using one exchange with `j` parts is greater than the expected return of using the previous exchange with `j` parts, if it is then it updates the answer and parent arrays with the new expected return and the new parent.

Finally, it returns the distribution and the expected return:

```solidity
        distribution = new uint256[](DEXES_COUNT);

        uint256 partsLeft = s;
        for (uint curExchange = n - 1; partsLeft > 0; curExchange--) {
            distribution[curExchange] = partsLeft - parent[curExchange][partsLeft];
            partsLeft = parent[curExchange][partsLeft];
        }

        returnAmount = (answer[n - 1][s] == VERY_NEGATIVE_VALUE) ? 0 : answer[n - 1][s];
```

After getting the expected return (which could be done by the front) then you can call the swap function on the contract.

**Swap:** To perform a swap on the aggregator it receives `fromToken`, `destToken`, `amount`, `minReturn`, `distribution`, `flags`. this function can be found [here](https://github.com/1inch/1inchProtocol/blob/811f7b69b67d1d9657e3e9c18a2e97f3e2b2b33a/OneSplit.full.sol#L3782) it gets all the swaps functions, differents for each router/protocol and then loops through the distribution matching the corresponding swap protocol with the amounts, here is a snippet of how it is performing the swap:

```solidity
for (uint i = 0; i < distribution.length; i++) {
    if (distribution[i] == 0) {
        continue;
    }

    uint256 swapAmount = amount.mul(distribution[i]).div(parts);
    if (i == lastNonZeroIndex) {
        swapAmount = remainingAmount;
    }
    remainingAmount -= swapAmount;
    reserves[i](fromToken, destToken, swapAmount, flags);
}
```

reserves\[i] is the array with the swap functions for each protocol, in the case of Soroswap this could be an array with \[swapSoroswap, swapPhoenix, swapComet] for example. The swap amounts as shown in the snippet is the amount to swap times the corresponding distribution divided by the parts, in the prevoius example this would mean that the OneSplit smart contract is going to perform 2 swaps, in the first exchange it would do 1/5 of the total amount to swap and the second swap would be on the 6th exchange for 4/5 (or the remaining amount) of the total amount.

[1inch Protocol Repository](https://github.com/1inch/1inchProtocol).

---

# Other AMMs in Soroban



---

# Phoenix AMM

## Multihop Swap

The Phoenix Protocol enables swaps across multiple liquidity pools through a specialized smart contract known as [Multihop](https://github.com/Phoenix-Protocol-Group/phoenix-contracts/tree/main/contracts/multihop). This section outlines the key features and usage of the Multihop contract.

### Swap Function Parameters

The primary function of interest in Multihop is `swap`, which accepts the following parameters:

- `recipient`: The address of the contract designated to receive the swapped amount.
- `referral`: An optional address for the referral entity. If provided, this entity receives a commission bonus for the swap. (Note: This feature is currently commented out in the contract.)
- `operations`: A vector (`Vec<Swap>`) detailing the swap operations, including addresses of the assets being asked for and offered.
- `max_belief_price`: An optional `i64` value representing the maximum price the user is willing to accept for the swap.
- `max_spread_bps`: An optional `i64` value indicating the maximum permitted spread (in basis points) between the asking and offering prices.
- `amount`: An `i128` value specifying the amount offered for the swap.

### Swap Struct

Multihop processes an array of `Swap` structures. Here is the `Swap` struct definition in Rust:

```rust
pub struct Swap {
    pub ask_asset: Address,
    pub offer_asset: Address,
}
```

For a successful operation, the contract iterates through this array, retrieves the corresponding pool address from the factory using `ask_asset` and `offer_asset`, and then executes the swaps. The array structure is crucial and should follow this pattern: `[{token_a, token_b}, {token_b, token_c}, {token_c, token_d}]`. If a user wishes to swap `token_a` for `token_d`, they must specify the intermediary pairs. A panic occurs if any pair lacks an existing liquidity pool.

### Swap Function Implementation

Below is a code snippet illustrating the implementation of the swap function:

```rust
let mut next_offer_amount: i128 = amount;
let factory_client = factory_contract::Client::new(&env, &get_factory(&env));

operations.iter().for_each(|op| {
  let liquidity_pool_addr: Address = factory_client
      .query_for_pool_by_token_pair(&op.clone().offer_asset, &op.ask_asset.clone());

  let lp_client = lp_contract::Client::new(&env, &liquidity_pool_addr);
  next_offer_amount = lp_client.swap(
      &recipient,
      &op.offer_asset,
      &next_offer_amount,
      &max_belief_price,
      &max_spread_bps,
  );
});
```

## Factory Contract

The factory contract is a crucial component of Phoenix Protocol, offering various functions to manage and retrieve information about liquidity pools:

### Key Functions

- `query_pools(env: Env) -> Vec<Address>`: Returns a vector of addresses for all pools.
- `query_pool_details(env: Env, pool_address: Address) -> LiquidityPoolInfo`: Retrieves details of a specific pool.
- `query_all_pools_details(env: Env) -> Vec<LiquidityPoolInfo>`: Obtains details for all pools.
- `query_for_pool_by_token_pair(env: Env, token_a: Address, token_b: Address) -> Address`: Fetches the address of a specific pool based on token pair addresses.

The Multihop contract predominantly uses `query_for_pool_by_token_pair()` to acquire the address of a specific liquidity pool based on the provided token addresses.

---

# Soroswap API

The **Soroswap API** is built for developers and teams who want to integrate Soroswap's decentralized infrastucture into their apps. Whether you're building a wallet, a frontend, or another kind of product on Stellar, the API gives you access data from real-time pricing and routing to transaction generation.

## Key features

- 🔁 **Fetch quotes and optimal routes** for token swaps across multiple protocols (Soroswap, Phoenix, Aqua, Comet)  
- 📊 **Retrieve token and liquidity data**, including pool stats and available trading pairs  
- 🧾 **Build XDR transactions** for on-chain execution
- 🚀 **(Limited-time)** Enable **gasless transactions** via LaunchTube integration  

> 🔗 **Explore the full API reference here**:  
👉 [https://api.soroswap.finance/docs](https://api.soroswap.finance/docs)

---

# Optimal Route API

Soroswap Optimal Routing is a key component of the Soroswap protocol, designed to find the most efficient route for executing swaps. By leveraging a combination of the solutions implemented by 1Inch and Uniswap, Soroswap aims to provide users with the best possible trading experience.

## Background

We explored 3 protocols: Uniswap, PancakeSwap and 1Inch

### Uniswap & PancakeSwap

How it works: Uniswap and PancakeSwap work in a similar way: In the frontend they use an sdk to get the best route.

The algorithm to get the best route is the following:

1. Retrieving Available Pools: The algorithm starts by fetching all the available pools on the client side. This is done by querying the subgraph to get the list of pools. ([see here](https://github.com/Uniswap/smart-order-router/blob/9dda6a965e7f5c0e48efa8214363a660ed034350/src/providers/v2/subgraph-provider.ts#L78)).
2. Computing All Routes: Once the pools are obtained, the algorithm computes all possible routes for a given swap. The maximum number of pools that a route can have is determined by a parameter called maxHops. This step is implemented in the computeAllRoutes function. (see [computeAllRoutes](https://github.com/Uniswap/smart-order-router/blob/9dda6a965e7f5c0e48efa8214363a660ed034350/src/routers/alpha-router/functions/compute-all-routes.ts#L67)). MaxHops is the maximum number of pools that the route can have.
3. Splitting the Route: In order to optimize the routing process, the algorithm splits the route into smaller segments. This is done by defining a minimum percentage for a split. The algorithm creates an array by dividing 100% by the minimum percentage. For example, if the minimum percentage is 5%, then the array will be \[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]. Each segment represents a portion of the total route. ([see here](https://github.com/Uniswap/smart-order-router/blob/main/src/routers/alpha-router/functions/best-swap-route.ts#L146))
4. Obtaining Quotes: For each segment of the route, the algorithm obtains a quote. This quote represents the estimated amount of tokens that will be received (exact input) or sent (exact output) for that particular segment of the route.
5. Combining and Validating Routes: After obtaining quotes for each segment, the algorithm combines and validates all the routes along with their respective quotes. This step ensures that the combined routes form a valid and optimal path for the swap.
6. Choosing the Best Quote: Finally, the algorithm selects the best quote based on certain criteria. This can be either the minimum amount of tokens to be sent (amountIn) or the maximum amount of tokens to be received (amountOut). The quote with the best value is chosen as the optimal route for executing the swap.

They also keep routes on cache

Useful links:

* [getQuote function on clientSideSmartOrderRouter](https://github.com/Uniswap/interface/blob/4ee70bfa34d4435d992cc54d2510572ec9de3d4d/apps/web/src/lib/hooks/routing/clientSideSmartOrderRouter.ts)
* [best swap route](https://github.com/Uniswap/smart-order-router/blob/main/src/routers/alpha-router/functions/best-swap-route.ts#L146)
* [generateRoute example](https://github.com/Uniswap/examples/blob/main/v3-sdk/routing/src/example/Example.tsx)
* [pancakeSwap smart route example](https://github.com/pancakeswap/smart-router-example/tree/master/src)
* [Pancake Swap Frontend Smart Route implementation](https://github.com/pancakeswap/pancake-frontend/tree/develop/packages/smart-router)
* [Uniswap Blog on Auto Router](https://blog.uniswap.org/auto-router-v2)

### 1Inch

They call an API called Pathfinder to get the best route across multiple protocols. However, the API is not open source and we don't know how it works.

1inch also have their OneSplit smartcontract which serves as an agregator, the information can be found [here](../../soroswap-aggregator/technical-reference/inspirations/01-1inch.md)

## Soroswap Optimal Routing

The technical architecture for Soroswap Optimal Routing involves several interconnected parts. At the core, we have the Soroswap-router-sdk, responsible for managing all the logic related to the optimal route swap. This component utilizes a similar algorithm to Uniswap and PancakeSwap, enabling it to compute the best route for a given swap.

![](../../03-technical-reference/07-optimal-route/images/draw.png)

### Frontend

[Github Repository](https://github.com/soroswap/frontend)

The frontend will have the following functions:

```javascript
generateRoute(tokenIn, tokenOut, TradeType, ...options);
executeRoute(swapRoute);
```

These functions call directly the `@soroswap-router-sdk` methods to implement it

generateRoute will call the sdk to get the transaction data of the optimal route and then executeRoute will run the transaction.

### soroswap-router-sdk

[Github Repository](https://github.com/soroswap/soroswap-router-sdk)

Overall, we need the following methods:

```javascript
class router {
   getPools(tokenIn, tokenOut)
   getBestRoute(tokenIn, tokenOut, TradeType, ...options)
}
```

getPools will comunicate with the backend to get the data of the pools (token0, token1, reserve0, reserve1).

getBestRoute will utilize the pools data and run the algorithm to generate the optimal route for the swap returning the necessary data to execute the transaction.

#### Validation with token lists

Soroswap will build routes with only known trusted tokens.

Thus, Soroswap will maintain a token of known list of tokens. See [here](https://github.com/soroswap/token-list).

This list will be used to validate the tokens used in the swap. This will be done inside the private method `_getAllRoutes`, by the function `_validateKnownTokens`. Inside the soroswap-router-sdk.

`_validateKnownTokens` will fetch the known tokens list from the `token-list` repository and validate that the tokens used in the swap are in the list.

This will protect Soroswap from executing a transaction with a malicious token in the middle of the route. Also it will allow Soroswap to allow an advanced user to swap a token that is not in the known tokens list with proper warnings and disclaimers.

### Backend

[Github Repository](https://github.com/soroswap/backend.git)

Data requests summary:

* Instance storage of Factory Contract
* Persistent storage of Factory Contract
* Instance storage of all the pairs

The backend plays a crucial role in the optimal routing process. It communicates with the `@mercury-sdk` to retrieve the necessary data required by the `@soroswap-router-sdk`. Specifically, the backend needs endpoints to fetch pools with reserves from the `mercury-sdk`.

The difference between Mercury and subgraph is that Mercury give us the data we need in XDR. We just need to add a method to parse the data to use it in the `@soroswap-router-sdk`

It will have the endpoints to be called by the `soroswap-router-sdk` It will have the following functions:

```javascript
getPairCounter();
getPairAddresses();
subscribeToNewPairs();
getPairsWithTokenAndReserves();
```

`getPairCounter` will return the number of pairs stored in the Factory contract. This is stored in **instance** storage. `getPairAddresses` will return the addresses of the pairs stored in the Factory contract. It will use the `getPairCounter` to know how many pairs are stored in the Factory contract, this will help us to create all the needed `key_xdr` to get the data from Mercury in just one query. This is stored in **persistent** storage. `subscribeToNewPairs` will subscribe to the Factory's new pairs when pools are created. `getPairsWithTokenAndReserves` will return the pairs with the reserves of the tokens. It will use the `getPairAddresses` to get the addresses of the pairs. We will precompute all the needed `key_xdr` to get the data from Mercury in just one query. This is stored in **instance** storage.

### Mercury-sdk

[Github Repository](https://github.com/paltalabs/mercury-sdk.git)

Mercury sdk is utilized to subscribe and query from mercury.

Here we will need to create the queries to return data from the pools, and subscribe to the addresses we need to track.

Subscribe to factory ledger entries, then query and get pair counter (Thus, get how many pairs exist) and their pair adresses. Subscribe to all pair ledger entries, then query to get token0, token1, reserve0, reserve1.

## Soroswap Aggregator

Additionally, Soroswap Aggregator extends the optimal routing capabilities by incorporating pools from other protocols, such as Comet, Phoenix and SDEX. Subscription methods are created to fetch pools from these protocols, and the same logic as Soroswap is applied.

---

# Tutorials Overview



---

# Soroswap Testnet Overview

Soroswap is an Automated Market Maker (AMM) built on Soroban, designed to facilitate token trading and liquidity provision. With its user-friendly interface, Soroswap offers a seamless and intuitive experience for users to engage with decentralized finance (DeFi) on the Soroban and Stellar

## User-Friendly Interface

Soroswap boasts a user-friendly interface that ensures a smooth and enjoyable trading experience. The intuitive design caters to both beginners and experienced traders, making it easy to navigate the platform and interact with its features.

## Key Features and Benefits

**Currently Soroswap works only on Soroban Testnet,** and provides several key features and benefits for users:

* **Balance Section:** Conveniently view your test token balances in the Balance section. This feature allows you to keep track of your assets and monitor their availability for transactions within the app.
* **Swap Section:** Easily exchange one token for another within the liquidity pool using Soroswap's Swap section. This feature provides a straightforward and efficient solution for diversifying your portfolio or making specific token swaps.
* **Liquidity Section:** Empowers users to add or remove liquidity from the pools. By participating in liquidity provision, you contribute to the stability and efficiency of the Soroswap ecosystem. Effectively manage your liquidity positions in the Liquidity section for a smooth and rewarding experience.

Soroswap on the Sorosban Testnet allows users to fully explore and test the platform using test tokens. This enables you to experience the complete functionality of the app without risking real funds. It provides an opportunity to familiarize yourself with the features, understand the process of adding liquidity, performing swaps, and removing liquidity.

By utilizing Soroswap on the testnet, you can gain hands-on experience with decentralized exchanges and DeFi concepts. It serves as a valuable learning tool and a safe environment to experiment with different trading strategies and liquidity provision.

In the following sections, we will provide step-by-step instructions on how to use Soroswap on the testnet, including installing the Freighter wallet, adding liquidity, performing swaps, and removing liquidity. These instructions will help you navigate the platform and make the most of the features and benefits offered by Soroswap. Let's dive in!

Did you like it? Please give us feedback. Join our Discord channel: https://discord.gg/wyesAQhP

---

# Installing Freighter Wallet

In this section, we will guide you through the installation process of Freighter, a non-custodial Stellar wallet extension that will empower you to engage with Soroswap.Finance

## Step 1: Installing Freighter on your Browser

Freighter works as a Extension in Chrome (Google Chrome, Brave) and Firefox:

1. Visit the [Freighter Official Website](https://www.freighter.app/), to install Freighter into your browser.
2. Click on "Create Account" and choose a secure password.

## Step 2: Safeguarding Your Wallet

Upon creating your account, you will be presented with a secret recovery phrase. This phrase acts as a backup for your wallet's private key, allowing you to restore your wallet in case of loss, theft, or device damage.

![](02-installing-freighter/images/phrase.png)

Follow these important guidelines to protect your funds:

* **Save the Seed Phrase**: Keep your seed phrase in a safe place. Treat it as a valuable key to your funds and store it confidentially.
* **Secure Storage**: Store the seed phrase in a secure location, such as a locked drawer or a password-protected digital storage solution. Ensure it is shielded from unauthorized access and potential loss.
* **Exercise Caution**: Remember, anyone with access to your seed phrase can gain control over your wallet and its contents. Take the necessary precautions to safeguard it diligently.

## Step 3: Confirming Your Seed Phrase

To ensure accuracy, you will be asked to confirm your seed phrase in the same order. This step guarantees that you have correctly noted down your recovery phrase.

![](02-installing-freighter/images/confirm-phrase.png)

## Step 4: Accessing Your Wallet

Congratulations! You are now ready to use your Freighter wallet. Follow these final steps:

1.  Open the Freighter extension in your browser.

    ![](02-installing-freighter/images/account.png)
2. Your account will be displayed, labeled as "Account 1," along with your unique account address. This address serves as an identifier for receiving funds or transactions from other users or entities on the blockchain network.

## Step 5: Access to Testnet with Soroban

Because Soroban is still in the "experimental" side of Tesnet, you first need to allow Freighter to connect to experimental API's. To do this:

1.  Open the Settings menu, by clicking the gear in the botom right corner:

    ![](02-installing-freighter/images/gear.png)
2.  Open the Preference menu

    ![](02-installing-freighter/images/preferences.png)
3.  Enable experimental mode

    ![](02-installing-freighter/images/experimental-mode.png)
4. Finally, go back and click on the "Main Net" button located at the top right corner to explore the networks:
   * **Mainnet**: The live and fully operational blockchain network where real transactions occur.
   * **Testnet**: A simulated environment for testing and experimentation
5.  Since Soroswap is currently in the Soroban Testnet environment, we will proceed with the tutorial using the Testnet setting. By utilizing the testnet, we can safely explore and demonstrate the functionalities of Soroswap without any concerns about real-world financial implications.

    ![](02-installing-freighter/images/testnet.png)

## Step 6: Let's Dive into the Tutorial

Congratulations! You are now fully equipped to embark on an exciting journey with Soroswap on the testnet. Get ready to explore and make the most of Soroswap's comprehensive range of features within this secure testing environment. Let's dive right into the tutorial and unlock the full potential of your Soroswap experience!

---

# Soroswap Interface Sections

Soroswap offers a user-friendly interface with various sections to enhance your crypto experience. Let's explore the key sections available:

## Balance Section

In the Balance section, you can conveniently view your test token balances. This feature allows you to keep track of your assets and monitor their availability for transactions within the app. Additionally, you have the ability to mint tokens, enabling you to interact seamlessly with the application.

![](03-soroswap-sections/images/balance.png)

## Swap Section

The Swap section is where the magic happens! Here, you can easily swap tokens that are part of the liquidity pool. Whether you're looking to exchange one token for another or simply diversify your portfolio, the Swap section provides a straightforward and efficient solution.

![](03-soroswap-sections/images/swap.png)

## Liquidity Section

The Liquidity section empowers you to add or remove liquidity from the pools. By participating in liquidity provision, you contribute to the stability and efficiency of the Soroswap ecosystem. This section allows you to manage your liquidity positions effectively, ensuring a smooth and rewarding experience.

![](03-soroswap-sections/images/liquidity.png)

**Select a liquidity pool:** In this section, you can choose a specific liquidity pool to view its information and take further actions such as adding or removing liquidity.

![](03-soroswap-sections/images/liquidity2.png)

**Adding liquidity:** By accessing the "Adding liquidity" section, you can contribute to a liquidity pool by depositing values of two different tokens. This process helps maintain the balance and liquidity within the pool, allowing for efficient trading and transactions.

![](03-soroswap-sections/images/addliquidity.png)

**Removing liquidity:** In the "Removing liquidity" section, you have the option to withdraw your share of liquidity from a specific pool. This action allows you to reclaim your tokens and adjust your liquidity positions as needed.

![](03-soroswap-sections/images/removeliquidity.png)

With these three essential sections, Soroswap offers a comprehensive platform for you to explore, trade, and engage with the world of cryptocurrencies. Now that we have familiarized ourselves with these sections, let's continue with the tutorial, where we will delve into each section in more detail. Get ready to dive deeper into Soroswap and discover the exciting features it has to offer!

---

# Adding Liquidity Tutorial

Now that we have our wallet set up correctly in the testnet, we are ready to use the [Soroswap app](https://soroswap.finance). Let's start by adding liquidity to a pool.

## Step 1: Setup

To begin adding liquidity, we need to first mint test tokens to interact with the app.

1. Go to the Balances page.
2. Click the "Mint test tokens" button.

![](04-adding-liquidity/images/balances.png)

After minting your test tokens, ensure that your wallet is funded with at least 1XLM in Stellar. To fund your wallet in the testnet, you can use the friendbot. Simply go to your wallet and click "Fund with Friendbot".

![](04-adding-liquidity/images/fund.png)

Verify that your account has been funded with XLM, and now we are ready to continue navigating the app.

## Step 2: Go to the Add Liquidity page

1. Navigate to the Liquidity page, where you will find all the liquidity positions.
2. Click the "Add Liquidity" button.

This will take you to a page like this:

![](04-adding-liquidity/images/addliquidity.png)

## Step 3: Select the tokens and provide liquidity

1. Click the token selectors.
2. Select the tokens for which you would like to provide liquidity.
3. Enter the amount you want to provide.
4. Click "Supply".

This will open a modal where you can view information about the liquidity position, such as the amount of Liquidity Pool Tokens that will be created and your share percentage of the pool.

![](04-adding-liquidity/images/addliquiditymodal.png)

5. Click the "Add liquidity" button, and you will see a transaction in your Freighter wallet.

![](04-adding-liquidity/images/transaction.png)

6. Click "Approve" and wait for the transaction to be confirmed.
7. Once the transaction is complete, you will see a success message like this:

![](04-adding-liquidity/images/success.png)

Congratulations! You have successfully added liquidity. Now you can view your liquidity position on the Liquidity page.

![](04-adding-liquidity/images/liquiditypage.png)

Now we can continue with the tutorial. The next steps will involve swapping tokens for the ones you have provided liquidity for.

---

# Swap Tutorial

Now that you have successfully added liquidity to a pool, let's move on to the next step: doing swaps. Swapping tokens on Soroswap allows you to exchange one token for another within the liquidity pool. Follow the steps below to perform a swap:

## Step 1: Access Soroswap

Visit the official [Soroswap.Finance](https://soroswap.finance/) website.

Click the “Launch App” button on the homepage to access Soroswap’s decentralized platform. This action will direct you to the swap interface.

##

<figure><img src="../.gitbook/assets/Captura de pantalla 2025-04-25 a las 12.24.18.png" alt=""><figcaption></figcaption></figure>

## Step 2: Connect Your Wallet to Soroswap.Finance

1. **Choose a Stellar Wallet:** Select a wallet compatible with the Stellar network. For assistance, refer to this article: [Guide to Choosing a Stellar Wallet](https://dev.to/soroswap/guide-to-choosing-wallet-for-the-stellar-network-53k1).

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 18.21.42.png" alt=""><figcaption></figcaption></figure>

2. **Acquire Stellar (XLM):** Purchase XLM from a reputable exchange or transfer it from another wallet if you already possess some.
3. **Deposit XLM into Your Wallet:** Transfer the XLM to your Stellar wallet address.

> If this is your first time, ensure you acquire and transfer Stellar (XLM) to your wallet.

## Step 3: Navigate the Soroswap Finance Interface

Once your Stellar wallet is connected, familiarize yourself with the Soroswap dashboard. It displays your account details, token balances, and options for swapping tokens and managing your assets.

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 18.44.15.png" alt=""><figcaption></figcaption></figure>

## Step 4: Execute a Token Swap

1. **Select Tokens:** Choose the tokens you wish to swap from and to.

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 18.28.46 (1).png" alt=""><figcaption></figcaption></figure>

2. **Enter Amount:** Specify the amount of tokens you want to exchange.

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 18.51.21.png" alt=""><figcaption></figcaption></figure>

## Step 5: Trustlines

When swapping a new token for the first time on Soroswap.Finance, you’ll need to sign a "trustline" transaction. Trustlines authorize your account to hold and exchange the specific asset.

1. **Transaction Request:** A transaction request will be sent to authorize your wallet to hold and trade the new token.

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 18.30.06.png" alt=""><figcaption></figcaption></figure>

2. **Sign the Trustline Transaction:** Sign the transaction to authorize the trustline, allowing your wallet to manage the new asset.

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 19.16.39.png" alt=""><figcaption></figcaption></figure>

For more information, refer to the official documentation on [trustlines](https://docs.soroswap.finance/01-concepts/trustlines).

## Step 6: Confirm the transaction

1. **Sign the Transaction:** Your Freighter wallet will display the transaction details. Review and click “Approve” to confirm the swap.

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 16.20.22.png" alt=""><figcaption></figcaption></figure>

Congratulations! You have successfully completed a swap on Soroswap.Finance Now.\


<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 21.01.45.png" alt=""><figcaption></figcaption></figure>

## Step 7: Check That Your Transaction Went Through

After signing the transaction, it's important to confirm that everything went smoothly. To do this, check the details in your wallet or by using one of the blockchain explorers. This step ensures that the token swap has been completed and that the new tokens are now visible in your balance.

<figure><img src="../.gitbook/assets/Captura de pantalla 2024-09-18 a las 21.58.54.png" alt=""><figcaption></figcaption></figure>

Once the transaction is confirmed, you’ll see a success message indicating the swap is complete. At this point, you can review the transaction details by selecting one of these options:

* [**View in Stellar.Expert**](https://stellar.expert/explorer)
* [**View in StellarChain**](https://stellarchain.io/)

### **Best Practices**

1. **Sufficient XLM for Fees:** Ensure your wallet contains enough XLM to cover transaction fees.
2. **Review Trustlines:** Confirm that all necessary trustlines are established before initiating a swap.
3. **Check Transaction History:** Verify in your wallet that the swap is complete and that the new tokens are reflected in your balance.

---

# Remove Liquidity Tutorial

Now that we have learned how to add liquidity and perform swaps on Soroswap, let's explore how to remove liquidity from our liquidity positions.

## Step 1: Navigate to the Liquidity page

1. Go to the Soroswap app and click on the "Liquidity" tab in the navigation menu.

![Liquidity page](06-remove-liquidity/images/liquidity1.png)

## Step 2: Select the liquidity position

1. Find the liquidity position from which you want to remove liquidity.
2. Click on the liquidity position to view its details.

![Select liquidity position](06-remove-liquidity/images/liquidity2.png)

You will see a modal displaying the liquidity pool information, balances, and your share of the pool.

3. Click the "Remove" button to proceed to the remove liquidity page.

## Step 3: Remove liquidity

1. In the "Remove Liquidity" section, use the slider or enter the amount of liquidity you would like to remove.

![Remove liquidity](06-remove-liquidity/images/liquidity3.png)

2. Click the "Remove" button.

![Confirm removal](06-remove-liquidity/images/liquidity4.png)

3. Review the details of the removal, including the amount of tokens you will receive.
4. If everything looks correct, click the "Confirm" button.

## Step 5: Confirm the transaction

1. Your Freighter wallet will open, displaying the transaction details.
2. Review the transaction information and click "Approve" to confirm the removal.
3. Wait for the transaction to be confirmed on the blockchain.

## Step 6: View the transaction details

1. Once the transaction is confirmed, you will see a success message indicating that the liquidity removal was completed.
2. You can also view the transaction details with the transaction hash or by clicking "View on explorer".

Congratulations! You have successfully removed liquidity from a pool on Soroswap. You can now explore other liquidity positions or continue to engage with the exciting world of decentralized finance.

---

# Bridge Tutorial

**Navigate to the Bridge section:**

From the navigation bar (located at the top of the application \[or bottom if you are on a mobile device]), click on the **"Bridge"** button.

**Connect your Stellar wallet:**

* In the top right corner of the screen, you will find a button with the text **"Connect Wallet"**. Click on it and a window will appear showing you all the wallets available to connect on Soroswap.
* Connect your preferred Stellar wallet.

> \[!NOTE] (You may be asked for your credentials and your approval to connect to the site if this is the first time you are entering with that wallet).

![](08-Bridge/images/Connect_Button_Stellar.png)

![](08-Bridge/images/Connect_Modal_Stellar.png)

**Connect your Pendulum wallet:**

* Click on the button that says **"Connect Pendulum wallet"** located in the lower center of the screen.
* A window will appear showing you all the Pendulum wallets currently available on Soroswap.
* Choose your preferred wallet and connect it to the application.

![](08-Bridge/images/Connect_Button_pendulum.png)

![](08-Bridge/images/Connect_Modal_Pendulum.png)

**Select the asset and the type of operation:**

* To see the available bridge options, click on the drop-down menu with the text "Select token".
* Select the chain from which you want to Issue/redeem assets.

> \[!NOTE] Keep in mind that from Stellar it will create an "Issue" operation, while from Pendulum it will create a "Redeem" operation for the selected asset.

![](08-Bridge/images/Select_token_button.png)

![](08-Bridge/images/Select_token_modal_Stellar.png)

**Enter an amount:**

* Back on the main Bridge view, you can enter an amount in the designated field.

![](08-Bridge/images/Ammount.png)

**Create the transaction:**

* Click on the button with the text "Send" to create the transaction and a window will open showing the details of the operation to be performed.

![](08-Bridge/images/Send_Button.png)

**Review the transaction:**

* In this new window you can review details such as the amount to "issue" / "claim", the associated fees and the networks between which the bridge will be made.
* Once you have verified that the data is correct, click on the **"Confirm"** button.

![](08-Bridge/images/Review_transaction.png)

**Confirm the transaction in your Pendulum wallet:**

* After confirming the data, your Pendulum wallet will open and ask you to approve this transaction.
* Once approved, wait patiently for the window content to refresh

> \[!WARNING] Do not close this window or the transaction may fail.

![](08-Bridge/images/Approve_Pendulum_Modal.png)

![](08-Bridge/images/Confirm_Pendulum_wallet.png)

**(Optional) Make the payment with your Stellar wallet:**

* If you are requesting to issue assets in Pendulum, you will have to deliver the equivalent value in Stellar assets, please make sure you have sufficient funds to perform the operation, otherwise it will fail.
* Confirm the payment in your wallet and wait patiently for the information to be registered on the blockchain.

![](08-Bridge/images/Approve_stellar_modal.png)

![](08-Bridge/images/Sign_with_stellar.png)

> \[!TIP] After successfully completing these steps, the balances in your wallet should be updated. You can review the details of the operation directly by clicking on the **"view in explorer"** button.

![](08-Bridge/images/Transaction_completed.png)

---

# Tutorial Conclusions

In this guide, we have explored the key features and benefits of using Soroswap on the Stellar testnet. Soroswap is a decentralized exchange (DEX) that allows users to trade and provide liquidity for various tokens in a user-friendly and intuitive manner.

By utilizing Soroswap on the testnet, users can gain hands-on experience with decentralized exchanges and decentralized finance (DeFi) concepts. The user-friendly interface ensures a seamless trading experience for both beginners and experienced traders.

Throughout this guide, we have covered the following topics:

1. **User-Friendly Interface:** Soroswap offers a user-friendly interface that makes it easy to navigate and interact with the platform. The intuitive design ensures a smooth experience for users.
2. **Adding Liquidity:** Users can contribute to the stability and efficiency of the Soroswap ecosystem by adding liquidity to the pools. This allows for efficient trading and transactions on the platform.
3. **Performing Swaps:** Soroswap enables users to exchange one token for another within the liquidity pool. This feature provides flexibility and diversification options for users.
4. **Removing Liquidity:** Users can manage their liquidity positions by removing liquidity from the pools. This allows users to effectively control their positions and receive tokens in return.

By following the step-by-step instructions provided in this guide, users can fully explore and utilize Soroswap on the testnet. The testnet environment allows users to experiment with different trading strategies and liquidity provision without risking real funds.

Soroswap on the testnet serves as a valuable learning tool for users interested in decentralized exchanges and DeFi. It provides a safe environment to familiarize oneself with the features and functionalities of Soroswap before engaging with the live network.

We hope this guide has provided you with a comprehensive overview of Soroswap on the testnet. Now it's time for you to dive in, explore the platform, and experience the exciting world of decentralized finance. Happy trading!

---

# Using Stellar Classic Assets

These guides will help you seamlessly integrate and interact with Stellar Classic assets on Soroswap

## Wrapping Stellar Classic Assets

Learn the importance of wrapping and how to convert your Stellar Classic assets into a Soroban-compatible format for full functionality within the network. This process is vital for engaging with smart contracts and trading on Soroswap. [Start Wrapping](01-wrapping-stellar-classic-assets.md)

## Swap Stellar Classic Assets

Discover how to exchange Stellar Classic assets with other tokens on Soroswap. This guide walks you through the swap interface and the simple steps to add Stellar Classic assets to your trading repertoire. [Begin Swapping](02-swap-stellar-classic-assets.md)

## Test Stellar Classic Assets on Testnet

Ensure your assets and trading strategies are sound by testing them on the Soroswap testnet. Follow our instructions to use the provided API endpoint for accessing test tokens and simulating the wrapping and swapping processes. [Test Assets Now](03-test-stellar-assets-in-testnet.md)

Dive into these tutorials to unlock the full potential of Soroswap and the Soroban network, and elevate your trading experience with Stellar Classic assets.

---

# Wrapping Stellar Classic Assets

## Understanding the Importance of Wrapping Stellar Assets for Soroban

The Soroban network introduces a new era of smart contract functionality to the Stellar ecosystem. To fully leverage these advanced features, assets from the traditional Stellar network—often referred to as "Stellar Classic" assets—need to be adapted for compatibility. This is where the concept of 'wrapping' comes into play.

### What is Wrapping?

Wrapping is the process of representing a Stellar Classic asset on the Soroban network. It involves issuing a Soroban-native asset that is pegged on a 1:1 basis with the original Stellar asset. This wrapped version works seamlessly with Soroban's smart contracts and decentralized applications (dApps).

### Why Wrap Stellar Assets?

#### Seamless Integration

Wrapped assets can interact with the Soroban network as if they were originally part of it, allowing for smooth transactions and smart contract interactions.

#### Trading and Liquidity

Wrapping assets unlock the ability to trade on decentralized exchanges like Soroswap, providing liquidity and access to new markets within the Soroban ecosystem.

#### Enhanced Functionality

Wrapped assets can utilize the full suite of functionalities offered by Soroban's advanced smart contract capabilities, which are not available to unwrapped assets.

### How Does Wrapping Benefit You?

#### Accessibility

Enjoy access to a wider range of tokens and trading pairs on Soroswap, enhancing your trading experience.

#### Efficiency

Execute transactions and smart contract operations with the speed and low cost associated with the Soroban network.

#### Opportunity

Participate in new financial services and products developed on Soroban, from staking to yield farming.

Wrapping is a simple yet vital step in bridging the gap between Stellar Classic assets and the innovative Soroban network. By wrapping your assets, you're not just preparing for trading on Soroswap; you're unlocking a world of possibilities that only Soroban-enabled assets can offer.

***

## Wrapping Assets Directly on Soroswap

Soroswap simplifies the wrapping process by integrating it directly into the user interface. If you're looking to swap or provide liquidity with a Stellar Classic asset, Soroswap's intuitive search modal will assist you every step of the way.

### Wrapping via the Search Modal

Soroswap's search modal allows you to find your desired token. If you enter a `CODE:ISSUER` combination for a Stellar asset that isn't wrapped:

1. Soroswap will detect this and prompt you with a suggestion to wrap the asset.
2. A modal will appear, presenting you with the option to "Wrap Asset."
3. Upon confirming your choice, you will be prompted to sign the transaction with your wallet.
4. Once signed, the transaction is submitted, and the asset is wrapped into a Soroban-compatible format.

![](../07-using-stellar-classic-assets/01-wrapping-stellar-classic-assets/images/wrapping_process_modal.png) ![](../07-using-stellar-classic-assets/01-wrapping-stellar-classic-assets/images/wrapping-view.png)

### Post-Wrapping: What’s Next?

After wrapping, the new Soroban-wrapped asset will appear in your Soroswap token list, ready to be traded or added to liquidity pools. You can now enjoy all the benefits of the Soroban network, including faster transaction speeds and reduced costs, with the added flexibility of engaging with the wider Stellar ecosystem.

_You will probably be shown this warning view if it is an unknown asset for us_ ![](../07-using-stellar-classic-assets/01-wrapping-stellar-classic-assets/images/warning.png)

_If everything goes as expected you should now have your token selected_ ![](../07-using-stellar-classic-assets/01-wrapping-stellar-classic-assets/images/swap_view.png)

By integrating asset wrapping into the swapping process, Soroswap ensures that users have a seamless experience, bridging the gap between Stellar Classic and Soroban networks. This feature not only enhances the usability of Soroswap but also enriches the overall ecosystem by fostering interoperability and ease of use.

Wrap your Stellar Classic assets on Soroswap today, and unlock the full potential of your trading experience on the Soroban network.

---

# Swap Stellar Classic Assets

With Soroswap you can now swap stellar classic assets, this allows you to exchange one token for a stellar assets or viceversa. Follow the steps below to perform a swap:

## Step 1: Navigate to the Swap page

1. In the swap page you can now paste/use stellar assets CODE:ISSUER or its corresponding Soroban address.

![](../07-using-stellar-classic-assets/02-swap-stellar-classic-assets/images/swap1.png)

## Step 2: Select the token

if the token isn't known for us we will ask you to accept the following popup, this will also add the token to your tokens list.

![](../07-using-stellar-classic-assets/02-swap-stellar-classic-assets/images/swa_add_token.png)

## Step 3: Continue

You can follow the steps on [Doing Swap](../05-doing-swap.md)

Congratulations! you have successfully swapped a Stellar Classic Assets

---

# Test Stellar Assets in Testnet

Experimenting with Stellar Classic assets on the Soroswap testnet is straightforward. Our API endpoint `/api/random_tokens` provides you with a variety of test tokens, including Stellar Classic assets that can be wrapped and used within the Soroban network.

## Accessing Test Tokens

To access the test tokens, follow these steps:

1. Navigate to the API endpoint for random tokens:
   * In a local enviroment: `http://localhost:8010/api/random_tokens`
   * In production/testnet: `https://api.soroswap.finance/api/random_tokens`
2. The API will return a JSON object containing an array of tokens indexed by network. Tokens with only the `asset` and `symbol` keys are Stellar Classic assets, whereas Soroban tokens will have additional information such as `address`, `name`, and `decimals`. To test remember to select the tokens from the network you are on.

Example response from the API:

```json
{
  "tokens": [
    // Soroban tokens with detailed information
    {
      "address": "CANYI627Y23JOJKXWMRSRIJLWUFBW5YPFMHGBMEX5A4OEH6QJYYSDVMS",
      "name": "axlnia",
      "symbol": "AXLN",
      "logoURI": "",
      "decimals": 7
    },
    // Stellar Classic assets with just asset code and issuer
    {
      "asset": "JAMN:GAYIZTTI7QKLRKA5GXH5OFFCW3QLU4LNSN5N3XIYXB4P56HHBIXC73X6",
      "symbol": "JAMN"
    }
    // ... more tokens
  ]
}
```

## Testing Wrapping Functionality

To test the wrapping functionality with Stellar Classic assets:

1. From the API's response, copy a Stellar Classic asset in the format `CODE:ISSUER`.
2. Go to the Soroswap testnet interface.
3. Paste the copied `CODE:ISSUER` into the search input from the Swap or Add liquidity pages, and select the asset from the results.
4. The interface will recognize that the asset is a Stellar Classic asset and offer you the option to wrap it for use on the Soroban network.

![](../07-using-stellar-classic-assets/01-wrapping-stellar-classic-assets/images/wrapping_process_modal.png)

5. Click on the asset, and a wrapping modal will appear, guiding you through the wrapping process.

![](../07-using-stellar-classic-assets/01-wrapping-stellar-classic-assets/images/wrapping-view.png)

6. Once you initiate the wrapping process, you will be prompted to sign the transaction with your wallet.

After wrapping, the asset will be available in your Soroswap testnet account, ready for trading or adding to liquidity pools. This process allows you to interact with the asset as if it were native to the Soroban network, all within the safety of the testnet environment.

Testing Stellar Classic assets on Soroswap testnet is not only a valuable step for ensuring your assets are ready for live trading but also provides a risk-free way to familiarize yourself with the wrapping process and the broader Soroban ecosystem.

---

# Import Stellar Classic Assets

#### Introduction

This tutorial will guide you through the process of importing testnet tokens, specifically Stellar Classic assets, and wrapping them for use with Soroban. We will use a Bash script to automate this process.

#### Prerequisites

- Basic understanding of blockchain concepts and the Stellar network.
- A system with Bash shell.
- The `jq` tool installed for JSON processing.

#### Overview of the Script

The provided Bash script performs several key functions:

- Reading and merging asset lists from JSON files.
- Wrapping each asset to be compatible with Soroban.
- Updating a token list with new Soroban addresses.

you can find this script here [setup_stellar_classic_assets.sh](https://github.com/soroswap/core/blob/main/scripts/setup_stellar_classic_assets.sh)

#### Script Breakdown

1. **Setting Environment Variables and Directories**

   ```bash
   ASSETS_DIRECTORY="/path/to/known_stellar_classic_assets.json"
   GENERATED_STELLAR_ASSETS="/path/to/generated_stellar_assets.json"
   ```

   - `ASSETS_DIRECTORY` and `GENERATED_STELLAR_ASSETS` point to the JSON files containing asset information.
   - `known_stellar_classic_assets.json` example

   ```json
   {
     "tokens": [
       {
         "symbol": "USDC",
         "name": "centre.ioUSDCoin",
         "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
         "asset": "USDC:GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5"
       }
     ]
   }
   ```

2. **Reading and Merging Asset Lists**

```bash
CLASSIC_ASSETS_JSON=$(jq '.tokens' "$ASSETS_DIRECTORY")
GENERATED_ASSETS_JSON=$(jq '.tokens' "$GENERATED_STELLAR_ASSETS")
```

These commands extract the token lists from JSON files and merge them.

3. **Wrapping Assets**

   ```bash
   TOKEN_ADDRESS=$(soroban lab token id --network "$NETWORK" --asset "$ASSET")
   ```

   This is the critical line where each asset is wrapped. The `soroban lab token id` command retrieves the Soroban-compatible address for each asset.

4. **Looping Through Assets**
   The script loops through each asset in the merged list, wrapping them and updating the token list with their new Soroban addresses.

5. **Updating the Token List**
   The updated token addresses are saved back to the `TOKENS_DIRECTORY`, ensuring that the assets are now usable in Soroban.

6. **Error Handling and Outputs**
   The script includes checks to handle errors and provide informative output messages throughout the process.

#### Running the Script

1. Ensure you have the necessary JSON files in the specified directories.
2. Run the script in your Bash shell:
   ```bash
   ./setup_stellar_classic_assets.sh [network]
   ```
   Replace `[network]` with the desired network type (e.g., `testnet`).

#### Conclusion

Following these steps, you can efficiently wrap Stellar Classic assets for use with Soroban. This script automates the process, simplifying the integration of various assets into the Soroban ecosystem.

---

# Partnerships

We first started to collaborate with the following indexers: Mercury and Subquery

---

# Mercury and SubQuery Collaboration

This article outlines the outcomes and walkthroughs of our collaborative projects with Mercury and SubQuery indexers. We aim to achieve two primary objectives:

1. Introduce developers from the Stellar and Soroban ecosystems to the capabilities of indexer services.
2. Assist indexers in refining their offerings by reporting bugs and providing documentation feedback we've uncovered through our usage.

## The Importance of Indexers in Blockchain Ecosystems

Utilizing indexers is crucial for efficient data retrieval, thereby enabling developers to offer a seamless user experience. Although blockchains inherently ensure transactional integrity, extracting an entire history directly from a node is computationally intensive. Therefore, indexers serve as invaluable tools. This article serves two main goals:

* Demonstrate practical uses of the indexer as an example or initial repository.
* Test various indexer solutions, offering constructive feedback on bugs and documentation.

## Mercury: Subscription-Based Indexing Solutions

Mercury offers a subscription-based indexing service equipped with numerous features such as alert systems and code execution environments. As a fully managed service, Mercury obviates the need for developers to manage any GraphQL service themselves.

In our repository, you'll find a Node.js client pre-configured with queries to inspect a specific contract, specified through the repository's environment variables.

### Getting Started with Mercury

**Prerequisites**: Docker installation on your machine

1. Clone the repository: `https://github.com/paltalabs/mercury-client.git`
2. Duplicate `.env.example` as `.env`
3. Request Mercury access [here](https://developers.mercurydata.app/requesting-access)
4. Populate the `MERCURY_ACCESS_TOKEN` in `.env`. For usage exceeding 7 days, also complete `MERCURY_TESTER_EMAIL` and `MERCURY_TESTER_PASSWORD`.
5. Update `CONTRACT_ADDRESS` if you are interested in a contract other than the Soroswap's Factory contract.
6. Run the container (Node 18.8.2): `bash run.sh`
7. Install dependencies: `yarn`
8.  Use predefined scripts to interact with the contract:

    ```
    node scripts/subscribeToEntries.js
    node scripts/getAllEntriesForContract.js
    node scripts/getEntrySubscriptions.js
    node scripts/getEventSubscriptions.js
    ```

## SubQuery: Versatile Indexing for Multiple Platforms

SubQuery is a comprehensive indexer that interfaces seamlessly with multiple blockchain platforms, including Stellar and Soroban. We've developed a customized SubQuery project capable of IPFS deployment and management through SubQuery's Managed Service.

However, storing blockchain history requires access to an archive node, which can be a limitation. While several projects are developing Soroban-compatible archive nodes, none are publicly available yet.

### Getting Started with SubQuery

**Requirements**: Docker

Our setup incorporates Docker inside a Node.js image to manage the required Node.js version and to prevent the need for a global `subql` package installation. If you prefer to install node, docker and subql locally you can start from step 4.

1. Run the container: `bash run.sh`
2.  Install Docker and SubQuery:

    ```
    bash install_docker.sh
    bash setup_subquery.sh
    ```
3.  Navigate to `subql-starter` directory and execute:

    ```
    yarn
    dockerd &
    ```
4.  In another terminal

    ```
    bash connect.sh
    ```

    and (if you prefer to install node, docker and subql locally you can start from here)

    ```
    cd subql-starter
    yarn codegen
    yarn build
    yarn start:docker
    ```
5. Begin querying by navigating to `http://localhost:3000/graphql`
6.  To publish your project to IPFS, run:

    ```
    cd subql-starter
    subql publish
    ```

### Conclusion

We've demonstrated how to leverage both Mercury and SubQuery indexers, reporting bugs and providing documentation feedback along the way. Each service offers unique approaches to solving data availability issues. While SubQuery provides a more mature and UI-rich solution, its requirement for an archive node adds complexity. Mercury, however, simplifies the process by only requiring subscriptions and queries, thereby eliminating the need to manage additional infrastructure.

---

# Business Partnerships



---

# Support & Resources

### 🛠️ Support Center

Having an issue or need personalized assistance?\
Join our **Discord** and head to the **support section** — our team will be ready to assist you.

<figure><img src="../.gitbook/assets/Captura de pantalla 2025-04-28 a las 20.28.00.png" alt=""><figcaption></figcaption></figure>

### 🤝 Soroswap Community

Join our communities to get help from other users, stay updated, and participate in events:

* [**Official Discord** ](https://discord.gg/A2rQ3cm9XG)— Technical support channels, updates, and general discussions.
* [**Twitter (X)**](https://x.com/SoroswapFinance) — Latest news, announcements, and events.

---

# About Us

[**Soroswap**](https://soroswap.finance) is the first decentralized exchange (DEX) aggregator built on the [Stellar ](https://stellar.org)blockchain, developed by [**PaltaLabs**](https://paltalabs.io).\
Our mission is to unlock financial access by providing a powerful, easy-to-integrate platform for seamless token swaps, liquidity provision, and global DeFi participation.

At Soroswap, we believe in:

* **Innovation:** Combining smart routing and Stellar’s speed to deliver the best trading experience.
* **Accessibility:** Empowering anyone with a Stellar wallet to trade directly, without intermediaries.
* **Transparency:** Building open-source technology and maintaining full transparency with our community.&#x20;
* **Decentralization:** Enabling permissionless finance through smart contracts and decentralized infrastructure.

Our team, powered by PaltaLabs, consists of passionate blockchain developers, builders, and innovators committed to shaping the future of decentralized finance on Stellar.

### 🤝 Soroswap Community

Join our communities to get help from other users, stay updated, and participate in events:\
\
🔹 [Launch App](https://app.soroswap.finance)

🔹[**Official Discord** ](https://discord.gg/A2rQ3cm9XG)

🔹[**Twitter (X)**](https://x.com/SoroswapFinance)&#x20;

---

# General FAQ

**What is Soroswap.Finance?**\
Soroswap.Finance is a decentralized exchange (DEX) and AMM protocol built on Soroban . It allows permissionless token swaps and liquidity provision without intermediaries.\


**Q2: How do I connect my wallet?**\
A: Go to [soroswap.finance](https://soroswap.finance/), click **Launch App**, then select and approve your Stellar/Soroban-compatible wallet (e.g., Freighter, xBull, Lobstr).

For additional information and resources, visit:\
&#x20;[Website](https://www.soroswap.finance) | [GitHub](https://github.com/soroswap) | [Twitter](https://x.com/SoroswapFinance) | [Documentation](https://docs.soroswap.finance)

---

# Additional Resources

### :globe\_with\_meridians: **Official Channels**

* Official Website: [https://soroswap.finance/](https://soroswap.finance/)
* Soroswap Info: [https://dune.com/paltalabs/soroswap](https://dune.com/paltalabs/soroswap)
* GitHub Repository: [https://github.com/soroswap/](https://github.com/soroswap/)
* Discord : [https://discord.gg/A2rQ3cm9XG](https://discord.gg/A2rQ3cm9XG)
* Twitter: [https://x.com/SoroswapFinance](https://x.com/SoroswapFinance)
* LinkedIn: [https://www.linkedin.com/company/soroswap/](https://www.linkedin.com/company/soroswap/)
* YouTube: [https://www.youtube.com/@Soroswap.Finance](https://www.youtube.com/@Soroswap.Finance)
* Blog: [https://dev.to/soroswap](https://dev.to/soroswap)
* Medium: [https://medium.com/soroswap](https://medium.com/soroswap)

###

---

# Bridges



---

