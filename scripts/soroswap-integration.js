#!/usr/bin/env node

/**
 * Soroswap Staging API Integration for Yieldway
 * Using staging environment for hackathon
 */

require('dotenv').config();
const axios = require('axios');

// Staging API Configuration
const SOROSWAP_API_BASE = 'https://soroswap-api-staging-436722401508.us-central1.run.app';
const API_KEY = 'sk_e2acb3e0b5248f286023ef7ce9a5cde7e087c12579ae85fb3e9e318aeb11c6ce';
const NETWORK = 'testnet'; // Using testnet for hackathon

// Create axios instance with default config
const soroswapAPI = axios.create({
  baseURL: SOROSWAP_API_BASE,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

class SoroswapIntegration {
  
  /**
   * Get health status of the API
   */
  async getHealth() {
    try {
      const response = await soroswapAPI.get('/health');
      return response.data;
    } catch (error) {
      console.error('Health check failed:', error.message);
      throw error;
    }
  }

  /**
   * Get available testnet tokens
   */
  async getTestnetTokens() {
    try {
      const response = await soroswapAPI.get('/api/tokens');
      return response.data;
    } catch (error) {
      console.error('Failed to get testnet tokens:', error.message);
      throw error;
    }
  }

  /**
   * Get router contract addresses
   */
  async getContracts() {
    try {
      const response = await soroswapAPI.get(`/api/${NETWORK}/router`);
      return response.data;
    } catch (error) {
      console.error('Failed to get contracts:', error.message);
      throw error;
    }
  }

  /**
   * Get optimal quote for token swap
   * Essential for Yieldway's zero-slippage rebalancing
   */
  async getQuote({
    assetIn,
    assetOut,
    amount,
    tradeType = 'EXACT_IN',
    protocols = ['soroswap'],
    slippageTolerance = 50,
    gaslessTrustline = false,
    feeBps = 50
  }) {
    try {
      const response = await soroswapAPI.post(`/quote?network=${NETWORK}`, {
        assetIn,
        assetOut,
        amount,
        tradeType,
        protocols,
        slippageTolerance,
        gaslessTrustline,
        feeBps
      });
      return response.data;
    } catch (error) {
      console.error('Failed to get quote:', error.message);
      throw error;
    }
  }

  /**
   * Build transaction from quote
   */
  async buildTransaction({ quote, sponsor, from, referralId }) {
    try {
      const response = await soroswapAPI.post(`/quote/build?network=${NETWORK}`, {
        quote,
        sponsor,
        from,
        referralId
      });
      return response.data;
    } catch (error) {
      console.error('Failed to build transaction:', error.message);
      throw error;
    }
  }

  /**
   * Get all liquidity pools
   */
  async getPools(protocol = 'soroswap') {
    try {
      const response = await soroswapAPI.get(`/pools?network=${NETWORK}&protocol=${protocol}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get pools:', error.message);
      throw error;
    }
  }

  /**
   * Get specific pool for token pair
   */
  async getPool(tokenA, tokenB) {
    try {
      const response = await soroswapAPI.get(`/pools/${tokenA}/${tokenB}?network=${NETWORK}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get pool:', error.message);
      throw error;
    }
  }

  /**
   * Add liquidity to pool
   */
  async addLiquidity({
    assetA,
    assetB,
    amountA,
    amountB,
    to,
    slippageTolerance = 100
  }) {
    try {
      const response = await soroswapAPI.post(`/liquidity/add?network=${NETWORK}`, {
        assetA,
        assetB,
        amountA,
        amountB,
        to,
        slippageTolerance
      });
      return response.data;
    } catch (error) {
      console.error('Failed to add liquidity:', error.message);
      throw error;
    }
  }

  /**
   * Remove liquidity from pool
   */
  async removeLiquidity({
    assetA,
    assetB,
    liquidity,
    amountA,
    amountB,
    to,
    slippageTolerance = 100
  }) {
    try {
      const response = await soroswapAPI.post(`/liquidity/remove?network=${NETWORK}`, {
        assetA,
        assetB,
        liquidity,
        amountA,
        amountB,
        to,
        slippageTolerance
      });
      return response.data;
    } catch (error) {
      console.error('Failed to remove liquidity:', error.message);
      throw error;
    }
  }

  /**
   * Get user's liquidity positions
   */
  async getLiquidityPositions(address) {
    try {
      const response = await soroswapAPI.get(`/liquidity/positions/${address}?network=${NETWORK}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get liquidity positions:', error.message);
      throw error;
    }
  }

  /**
   * Get asset prices
   */
  async getPrices(assets) {
    try {
      const assetList = Array.isArray(assets) ? assets.join(',') : assets;
      const response = await soroswapAPI.get(`/price?network=${NETWORK}&asset=${assetList}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get prices:', error.message);
      throw error;
    }
  }

  /**
   * Get available protocols
   */
  async getProtocols() {
    try {
      const response = await soroswapAPI.get(`/protocols?network=${NETWORK}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get protocols:', error.message);
      throw error;
    }
  }

  /**
   * Get asset lists
   */
  async getAssetList(name = 'soroswap') {
    try {
      const response = await soroswapAPI.get(`/asset-list?name=${name}`);
      return response.data;
    } catch (error) {
      console.error('Failed to get asset list:', error.message);
      throw error;
    }
  }

  /**
   * Calculate optimal rebalancing for Yieldway
   * This is a custom function that uses multiple Soroswap endpoints
   */
  async calculateOptimalRebalancing({
    currentAllocation,
    targetAllocation,
    userAddress,
    assets
  }) {
    try {
      console.log('🔄 Calculating optimal rebalancing strategy...');

      // Get current prices for all assets
      const prices = await this.getPrices(assets);
      
      // Get optimal quotes for rebalancing trades
      const rebalancingTrades = [];
      
      for (const trade of targetAllocation.trades) {
        const quote = await this.getQuote({
          assetIn: trade.assetIn,
          assetOut: trade.assetOut,
          amount: trade.amount,
          tradeType: 'EXACT_IN',
          protocols: ['soroswap'],
          slippageTolerance: 50,
          gaslessTrustline: false
        });
        
        rebalancingTrades.push({
          ...trade,
          quote,
          priceImpact: quote.priceImpactPct
        });
      }

      return {
        success: true,
        rebalancingTrades,
        totalPriceImpact: rebalancingTrades.reduce((sum, trade) => sum + parseFloat(trade.priceImpact), 0),
        estimatedGasCost: rebalancingTrades.length * 0.001, // Estimated XLM
        prices
      };

    } catch (error) {
      console.error('Failed to calculate optimal rebalancing:', error.message);
      throw error;
    }
  }
}

// Test function to verify integration
async function testSoroswapIntegration() {
  console.log('🧪 Testing Soroswap Staging API Integration...\n');
  
  const soroswap = new SoroswapIntegration();
  
  try {
    // Test health check
    console.log('1. Testing health check...');
    const health = await soroswap.getHealth();
    console.log('✅ Health check passed:', health);

    // Test getting testnet tokens
    console.log('\n2. Getting testnet tokens...');
    const tokens = await soroswap.getTestnetTokens();
    console.log('✅ Testnet tokens retrieved:', tokens?.length || 0, 'tokens');

    // Test getting protocols
    console.log('\n3. Getting available protocols...');
    const protocols = await soroswap.getProtocols();
    console.log('✅ Protocols retrieved:', protocols);

    // Test getting pools
    console.log('\n4. Getting Soroswap pools...');
    const pools = await soroswap.getPools();
    console.log('✅ Pools retrieved:', pools?.length || 0, 'pools');

    console.log('\n🎉 Soroswap integration test completed successfully!');
    
  } catch (error) {
    console.error('❌ Integration test failed:', error.message);
    throw error;
  }
}

// Export for use in other modules
module.exports = {
  SoroswapIntegration,
  testSoroswapIntegration,
  SOROSWAP_API_BASE,
  NETWORK
};

// Run test if this file is executed directly
if (require.main === module) {
  testSoroswapIntegration().catch(console.error);
} 