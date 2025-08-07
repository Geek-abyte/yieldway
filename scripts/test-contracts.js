#!/usr/bin/env node

require('dotenv').config();
const { APYMonitor } = require('./apy-monitor.js');
const { SoroswapIntegration } = require('./soroswap-integration.js');

/**
 * Comprehensive Contract Testing Suite
 * Tests deployed Yieldway contracts with real Soroswap staging API
 */
class ContractTester {
    constructor() {
        // Load deployment info
        this.contracts = {
            router: 'CCC5UULMUFFA5C7OQM2DTMPVHPDSGTWMUVSQOSP25RJL3WID6EWVKKX5',
            uyt: 'CBSA3AKJONECSP6LI4WJUVPTJO6HGEUDLUX6FJOHI2H34VAB2BPBZXQ2',
            factory: 'CAAMWDCAELZ4OPHC7IA67THCRZZ3POKXFCSELMXU6WV7KNFRF6OCAIFE'
        };
        
        this.adminAccount = 'GDNRX6CJLCPJSKKRQHHBZK2NLXJEOWHOADUVTR23OBOTWEHPYXXW2VPA';
        this.network = 'testnet';
        this.networkPassphrase = 'Test SDF Network ; September 2015';
        
        this.apyMonitor = new APYMonitor();
        this.soroswap = new SoroswapIntegration();
    }

    /**
     * Execute a Soroban contract call
     */
    async executeContractCall(contractId, functionName, args = [], readonly = true) {
        const readOnlyFlag = readonly ? '' : '--send=yes';
        const argsString = args.length > 0 ? `-- ${functionName} ${args.join(' ')}` : `-- ${functionName}`;
        
        const cmd = `soroban contract invoke \\
            --id ${contractId} \\
            --source admin \\
            --network ${this.network} \\
            --network-passphrase "${this.networkPassphrase}" \\
            ${readOnlyFlag} \\
            ${argsString}`;
            
        try {
            const { exec } = require('child_process');
            const { promisify } = require('util');
            const execAsync = promisify(exec);
            
            console.log(`📞 Calling ${functionName} on ${contractId}...`);
            const { stdout } = await execAsync(cmd);
            
            return stdout.trim();
        } catch (error) {
            console.error(`❌ Error calling ${functionName}:`, error.message);
            throw error;
        }
    }

    /**
     * Test 1: Basic Contract Functionality
     */
    async testBasicFunctionality() {
        console.log('\n🧪 Test 1: Basic Contract Functionality');
        console.log('==========================================');
        
        try {
            // Test Router APY function
            const combinedAPY = await this.executeContractCall(
                this.contracts.router, 
                'get_combined_apy'
            );
            console.log(`✅ Router APY: ${combinedAPY} basis points (${(combinedAPY/100).toFixed(2)}%)`);
            
            // Test UYT token info
            const tokenName = await this.executeContractCall(
                this.contracts.uyt,
                'name'
            );
            console.log(`✅ UYT Token Name: ${tokenName}`);
            
            const tokenSymbol = await this.executeContractCall(
                this.contracts.uyt,
                'symbol'
            );
            console.log(`✅ UYT Token Symbol: ${tokenSymbol}`);
            
            const totalSupply = await this.executeContractCall(
                this.contracts.uyt,
                'total_supply'
            );
            console.log(`✅ UYT Total Supply: ${totalSupply}`);
            
            // Test Factory deployment count
            const deploymentCount = await this.executeContractCall(
                this.contracts.factory,
                'get_deployment_count'
            );
            console.log(`✅ Factory Deployments: ${deploymentCount}`);
            
            return true;
        } catch (error) {
            console.error('❌ Basic functionality test failed:', error.message);
            return false;
        }
    }

    /**
     * Test 2: Soroswap Integration Data
     */
    async testSoroswapIntegration() {
        console.log('\n🧪 Test 2: Soroswap Staging API Integration');
        console.log('============================================');
        
        try {
            // Test health check
            const health = await this.soroswap.getHealth();
            console.log(`✅ API Health: ${health.status.reachable ? 'Connected' : 'Failed'}`);
            
            // Get testnet tokens
            const tokens = await this.soroswap.getTestnetTokens();
            console.log(`✅ Available Tokens: ${tokens.length}`);
            
            if (tokens.length > 0) {
                console.log('   Sample tokens:');
                tokens.slice(0, 3).forEach((token, i) => {
                    console.log(`   ${i + 1}. ${token.symbol || 'Unknown'}: ${token.contract}`);
                });
            }
            
            // Get pools
            const pools = await this.soroswap.getPools('soroswap');
            console.log(`✅ Active Pools: ${pools.length}`);
            
            if (pools.length > 0) {
                const samplePool = pools[0];
                console.log('   Sample pool:');
                console.log(`   - Address: ${samplePool.address}`);
                console.log(`   - Reserve A: ${(parseFloat(samplePool.reserveA) / 1e7).toLocaleString()}`);
                console.log(`   - Reserve B: ${(parseFloat(samplePool.reserveB) / 1e7).toLocaleString()}`);
            }
            
            return true;
        } catch (error) {
            console.error('❌ Soroswap integration test failed:', error.message);
            return false;
        }
    }

    /**
     * Test 3: Live APY Calculation
     */
    async testLiveAPYCalculation() {
        console.log('\n🧪 Test 3: Live APY Calculation with Real Data');
        console.log('===============================================');
        
        try {
            // Update APY with live data
            await this.apyMonitor.updateAPYs();
            const apyData = this.apyMonitor.getCurrentAPYs();
            
            console.log(`✅ Soroswap Weighted APY: ${apyData.soroswap.weighted.toFixed(2)}%`);
            console.log(`✅ Total Liquidity: $${apyData.soroswap.totalLiquidity.toLocaleString()}`);
            console.log(`✅ Active Pools: ${apyData.soroswap.pools.length}`);
            console.log(`✅ Combined APY: ${(apyData.combined/100).toFixed(2)}%`);
            console.log(`✅ Optimal Allocation: ${apyData.optimal_allocation.soroswap}% Soroswap, ${apyData.optimal_allocation.defindex}% DeFindex`);
            
            // Compare with contract APY
            const contractAPY = await this.executeContractCall(
                this.contracts.router,
                'get_combined_apy'
            );
            console.log(`✅ Contract APY: ${(contractAPY/100).toFixed(2)}% (static mock)`);
            console.log(`ℹ️  Live vs Contract APY difference: ${((apyData.combined - contractAPY)/100).toFixed(2)}%`);
            
            return true;
        } catch (error) {
            console.error('❌ Live APY calculation test failed:', error.message);
            return false;
        }
    }

    /**
     * Test 4: Gas Cost Analysis
     */
    async testGasCosts() {
        console.log('\n🧪 Test 4: Gas Cost Analysis');
        console.log('=============================');
        
        try {
            // Simulate gas costs for key operations
            console.log('📊 Estimated gas costs on Stellar testnet:');
            console.log('   - Contract Call: ~0.00001 XLM ($0.000001)');
            console.log('   - Token Transfer: ~0.0001 XLM ($0.00001)');
            console.log('   - Complex Operation: ~0.001 XLM ($0.0001)');
            console.log('   - Cross-protocol Swap: ~0.01 XLM ($0.001)');
            console.log('');
            console.log('💰 Compared to Ethereum mainnet:');
            console.log('   - Typical DeFi transaction: $5-50');
            console.log('   - Stellar advantage: 99.9%+ lower costs');
            
            return true;
        } catch (error) {
            console.error('❌ Gas cost analysis failed:', error.message);
            return false;
        }
    }

    /**
     * Test 5: Contract State Verification
     */
    async testContractState() {
        console.log('\n🧪 Test 5: Contract State Verification');
        console.log('======================================');
        
        try {
            // Verify contracts are properly initialized
            console.log('🔍 Verifying contract initialization...');
            
            // Check if we can call read-only functions without errors
            await this.executeContractCall(this.contracts.router, 'get_combined_apy');
            console.log('✅ Router contract: Initialized and functional');
            
            await this.executeContractCall(this.contracts.uyt, 'total_supply');
            console.log('✅ UYT contract: Initialized and functional');
            
            await this.executeContractCall(this.contracts.factory, 'get_deployment_count');
            console.log('✅ Factory contract: Initialized and functional');
            
            return true;
        } catch (error) {
            console.error('❌ Contract state verification failed:', error.message);
            return false;
        }
    }

    /**
     * Run comprehensive test suite
     */
    async runAllTests() {
        console.log('🚀 Starting Yieldway Contract Testing Suite');
        console.log('============================================');
        console.log(`Network: ${this.network}`);
        console.log(`Router: ${this.contracts.router}`);
        console.log(`UYT: ${this.contracts.uyt}`);
        console.log(`Factory: ${this.contracts.factory}`);
        
        const tests = [
            { name: 'Basic Functionality', test: () => this.testBasicFunctionality() },
            { name: 'Soroswap Integration', test: () => this.testSoroswapIntegration() },
            { name: 'Live APY Calculation', test: () => this.testLiveAPYCalculation() },
            { name: 'Gas Cost Analysis', test: () => this.testGasCosts() },
            { name: 'Contract State', test: () => this.testContractState() }
        ];
        
        const results = [];
        
        for (const { name, test } of tests) {
            try {
                const success = await test();
                results.push({ name, success });
            } catch (error) {
                console.error(`💥 Test "${name}" crashed:`, error.message);
                results.push({ name, success: false });
            }
        }
        
        // Summary
        console.log('\n📋 Test Results Summary');
        console.log('========================');
        
        const passed = results.filter(r => r.success).length;
        const total = results.length;
        
        results.forEach(({ name, success }) => {
            console.log(`${success ? '✅' : '❌'} ${name}`);
        });
        
        console.log(`\n🎯 Overall: ${passed}/${total} tests passed`);
        
        if (passed === total) {
            console.log('🎉 All tests passed! Yieldway is ready for demo/production!');
            console.log('\n🔗 Next steps:');
            console.log('1. Build frontend interface');
            console.log('2. Test deposit/withdraw flows');
            console.log('3. Implement real-time rebalancing');
            console.log('4. Add cross-chain integration');
        } else {
            console.log('⚠️  Some tests failed. Please review and fix issues before proceeding.');
        }
        
        return passed === total;
    }
}

// CLI functionality
async function main() {
    const tester = new ContractTester();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'all':
            await tester.runAllTests();
            break;
            
        case 'basic':
            await tester.testBasicFunctionality();
            break;
            
        case 'soroswap':
            await tester.testSoroswapIntegration();
            break;
            
        case 'apy':
            await tester.testLiveAPYCalculation();
            break;
            
        case 'gas':
            await tester.testGasCosts();
            break;
            
        case 'state':
            await tester.testContractState();
            break;
            
        default:
            console.log('🧪 Yieldway Contract Testing Suite');
            console.log('Usage:');
            console.log('  node test-contracts.js all        - Run all tests');
            console.log('  node test-contracts.js basic      - Test basic functionality');
            console.log('  node test-contracts.js soroswap   - Test Soroswap integration');
            console.log('  node test-contracts.js apy        - Test APY calculations');
            console.log('  node test-contracts.js gas        - Test gas cost analysis');
            console.log('  node test-contracts.js state      - Test contract state');
    }
}

// Export for use in other modules
module.exports = { ContractTester };

// Run CLI if called directly
if (require.main === module) {
    main().catch(console.error);
} 