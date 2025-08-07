import { 
  SorobanRpc, 
  Contract, 
  Keypair, 
  Networks, 
  TransactionBuilder, 
  BASE_FEE,
  Operation,
  Address,
  nativeToScVal,
  scValToNative
} from '@stellar/stellar-sdk';

// Contract addresses (these should match deployment.json)
export const CONTRACTS = {
  ROUTER: 'CCC5UULMUFFA5C7OQM2DTMPVHPDSGTWMUVSQOSP25RJL3WID6EWVKKX5',
  UYT: 'CBSA3AKJONECSP6LI4WJUVPTJO6HGEUDLUX6FJOHI2H34VAB2BPBZXQ2',
  FACTORY: 'CAAMWDCAELZ4OPHC7IA67THCRZZ3POKXFCSELMXU6WV7KNFRF6OCAIFE'
};

// Stellar testnet configuration
export const STELLAR_CONFIG = {
  network: Networks.TESTNET,
  rpcUrl: 'https://soroban-testnet.stellar.org',
  networkPassphrase: Networks.TESTNET
};

export class YieldwayClient {
  private rpc: SorobanRpc.Server;
  private routerContract: Contract;
  private uytContract: Contract;

  constructor() {
    this.rpc = new SorobanRpc.Server(STELLAR_CONFIG.rpcUrl);
    this.routerContract = new Contract(CONTRACTS.ROUTER);
    this.uytContract = new Contract(CONTRACTS.UYT);
  }

  /**
   * Get the combined APY from the router contract
   */
  async getCombinedAPY(): Promise<number> {
    try {
      const account = await this.rpc.getAccount('GDNRX6CJLCPJSKKRQHHBZK2NLXJEOWHOADUVTR23OBOTWEHPYXXW2VPA');
      
      const transaction = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: STELLAR_CONFIG.networkPassphrase,
      })
        .addOperation(this.routerContract.call('get_combined_apy'))
        .setTimeout(30)
        .build();

      const simulated = await this.rpc.simulateTransaction(transaction);
      
      if (SorobanRpc.Api.isSimulationSuccess(simulated)) {
        const result = scValToNative(simulated.result!.retval);
        return result / 100; // Convert from basis points to percentage
      }
      
      throw new Error('Failed to simulate transaction');
    } catch (error) {
      console.error('Error getting combined APY:', error);
      return 20.5; // Fallback value
    }
  }

  /**
   * Get user's UYT token balance
   */
  async getUserBalance(userAddress: string): Promise<string> {
    try {
      const account = await this.rpc.getAccount('GDNRX6CJLCPJSKKRQHHBZK2NLXJEOWHOADUVTR23OBOTWEHPYXXW2VPA');
      
      const transaction = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: STELLAR_CONFIG.networkPassphrase,
      })
        .addOperation(this.uytContract.call('balance_of', Address.fromString(userAddress)))
        .setTimeout(30)
        .build();

      const simulated = await this.rpc.simulateTransaction(transaction);
      
      if (SorobanRpc.Api.isSimulationSuccess(simulated)) {
        const result = scValToNative(simulated.result!.retval);
        return result.toString();
      }
      
      return '0';
    } catch (error) {
      console.error('Error getting user balance:', error);
      return '0';
    }
  }

  /**
   * Deposit assets into the yield aggregator
   */
  async deposit(userKeypair: Keypair, amount: bigint): Promise<string> {
    try {
      const account = await this.rpc.getAccount(userKeypair.publicKey());
      
      const transaction = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: STELLAR_CONFIG.networkPassphrase,
      })
        .addOperation(this.routerContract.call(
          'deposit',
          Address.fromString(userKeypair.publicKey()),
          nativeToScVal(amount, { type: 'u128' })
        ))
        .setTimeout(30)
        .build();

      // Sign the transaction
      transaction.sign(userKeypair);

      // Submit the transaction
      const submitted = await this.rpc.sendTransaction(transaction);
      
      if (submitted.status === 'PENDING') {
        // Poll for completion
        let getResponse = await this.rpc.getTransaction(submitted.hash);
        while (getResponse.status === 'NOT_FOUND') {
          await new Promise(resolve => setTimeout(resolve, 1000));
          getResponse = await this.rpc.getTransaction(submitted.hash);
        }

        if (getResponse.status === 'SUCCESS') {
          return submitted.hash;
        }
      }
      
      throw new Error('Transaction failed');
    } catch (error) {
      console.error('Error depositing:', error);
      throw error;
    }
  }

  /**
   * Withdraw assets from the yield aggregator
   */
  async withdraw(userKeypair: Keypair, amount: bigint): Promise<string> {
    try {
      const account = await this.rpc.getAccount(userKeypair.publicKey());
      
      const transaction = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: STELLAR_CONFIG.networkPassphrase,
      })
        .addOperation(this.routerContract.call(
          'withdraw',
          Address.fromString(userKeypair.publicKey()),
          nativeToScVal(amount, { type: 'u128' })
        ))
        .setTimeout(30)
        .build();

      // Sign the transaction
      transaction.sign(userKeypair);

      // Submit the transaction
      const submitted = await this.rpc.sendTransaction(transaction);
      
      if (submitted.status === 'PENDING') {
        // Poll for completion
        let getResponse = await this.rpc.getTransaction(submitted.hash);
        while (getResponse.status === 'NOT_FOUND') {
          await new Promise(resolve => setTimeout(resolve, 1000));
          getResponse = await this.rpc.getTransaction(submitted.hash);
        }

        if (getResponse.status === 'SUCCESS') {
          return submitted.hash;
        }
      }
      
      throw new Error('Transaction failed');
    } catch (error) {
      console.error('Error withdrawing:', error);
      throw error;
    }
  }

  /**
   * Trigger rebalancing
   */
  async rebalance(userKeypair: Keypair): Promise<string> {
    try {
      const account = await this.rpc.getAccount(userKeypair.publicKey());
      
      const transaction = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase: STELLAR_CONFIG.networkPassphrase,
      })
        .addOperation(this.routerContract.call('rebalance'))
        .setTimeout(30)
        .build();

      // Sign the transaction
      transaction.sign(userKeypair);

      // Submit the transaction
      const submitted = await this.rpc.sendTransaction(transaction);
      
      if (submitted.status === 'PENDING') {
        // Poll for completion
        let getResponse = await this.rpc.getTransaction(submitted.hash);
        while (getResponse.status === 'NOT_FOUND') {
          await new Promise(resolve => setTimeout(resolve, 1000));
          getResponse = await this.rpc.getTransaction(submitted.hash);
        }

        if (getResponse.status === 'SUCCESS') {
          return submitted.hash;
        }
      }
      
      throw new Error('Transaction failed');
    } catch (error) {
      console.error('Error rebalancing:', error);
      throw error;
    }
  }
}

export const yieldwayClient = new YieldwayClient();