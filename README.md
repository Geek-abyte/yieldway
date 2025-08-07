# 🌊 Yieldway
## The Cross-Chain Yield Aggregator for Stellar

[![Built on Stellar](https://img.shields.io/badge/Built%20on-Stellar-brightgreen)](https://stellar.org)
[![Soroban Smart Contracts](https://img.shields.io/badge/Smart%20Contracts-Soroban-blue)](https://soroban.stellar.org)
[![Testnet Status](https://img.shields.io/badge/Testnet-Active-green)](https://stellar.org/developers/guides/get-started/create-account.html)

Yieldway is a one-click yield aggregator that optimizes returns across Soroswap liquidity pools and DeFindex vaults while enabling cross-chain yield farming via Stellar's low-cost infrastructure.

## 🎯 Key Features

- **🔄 Smart Rebalancing**: Automatically optimizes allocations between Soroswap AMM and DeFindex vaults
- **⚡ Zero-Slippage Routing**: Uses Soroswap's Swap Route API for optimal execution
- **🌉 Cross-Chain Yield**: Farm yields from other chains via Stellar's native bridges
- **💰 Sub-Cent Fees**: Enable micro-adjustments impossible on Ethereum
- **📱 Mobile-First**: PWA with excellent mobile experience

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Smart          │    │   Analytics     │
│   (Next.js)     │◄──►│   Contracts      │◄──►│   Dashboard     │
│                 │    │   (Soroban)      │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Soroswap      │    │   DeFindex       │    │   Cross-Chain   │
│   Integration   │    │   Integration    │    │   Bridges       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- [Rust](https://rustup.rs/) and [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup)
- [Node.js 18+](https://nodejs.org/)
- [Stellar CLI](https://developers.stellar.org/docs/tools/developer-tools)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/yieldway.git
cd yieldway

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Build contracts
npm run contracts:build

# Start frontend development server
npm run dev
```

### Testnet Setup

```bash
# Set up testnet accounts and fund them
npm run setup:testnet

# Deploy contracts to testnet
npm run deploy:testnet
```

## 📁 Project Structure

```
yieldway/
├── contracts/           # Soroban smart contracts
│   ├── router/         # YieldwayRouter contract
│   ├── uyt/           # Universal Yield Token
│   └── factory/       # Factory contract
├── frontend/          # Next.js application
├── scripts/           # Deployment and utility scripts
│   ├── testnet/       # Testnet-specific scripts
│   └── deploy/        # Deployment automation
├── tests/            # Testing suite
│   ├── unit/         # Unit tests
│   ├── integration/  # Integration tests
│   └── e2e/          # End-to-end tests
└── docs/             # Documentation
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run contract tests only
npm run test:contracts

# Run frontend tests only
npm run test:frontend

# Run end-to-end tests
npm run test:e2e
```

## 🚀 Deployment

### Testnet Deployment

```bash
# Deploy to Stellar testnet
npm run deploy:testnet
```

### Production Deployment

```bash
# Build for production
npm run build

# Deploy contracts to mainnet
npm run deploy:mainnet

# Deploy frontend
vercel deploy --prod
```

## 🛠️ Development

### Smart Contracts

Smart contracts are written in Rust using the Soroban framework:

- **YieldwayRouter**: Core routing and rebalancing logic
- **UYT**: Universal Yield Token (ERC-1155-like functionality)
- **YieldwayFactory**: Contract deployment and management

### Frontend

Built with Next.js 13+ and modern tooling:

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS
- **State Management**: React Query + Zustand
- **Wallet Integration**: Freighter, Albedo, WalletConnect

## 📖 Documentation

- [Technical Architecture](./docs/YIELDWAY_DEVELOPMENT_ROADMAP.md)
- [Smart Contract API](./docs/contracts-api.md)
- [Frontend Components](./docs/frontend-components.md)
- [Deployment Guide](./docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Testnet Information

- **Network**: Stellar Testnet
- **Contracts**: [View on StellarExpert](https://stellar.expert/explorer/testnet)
- **Frontend**: [Live Demo](https://yieldway-testnet.vercel.app)

## 🔗 Links

- [Stellar](https://stellar.org)
- [Soroban](https://soroban.stellar.org)
- [Soroswap](https://soroswap.finance)
- [DeFindex](https://defindex.io)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This software is in active development and has not been audited. Use at your own risk. Never invest more than you can afford to lose. 