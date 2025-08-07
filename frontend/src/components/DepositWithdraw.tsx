'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDownCircle, 
  ArrowUpCircle, 
  DollarSign, 
  Loader2,
  CheckCircle,
  AlertCircle,
  Wallet,
  TrendingUp
} from 'lucide-react';
import { yieldwayClient } from '../lib/stellar';

interface DepositWithdrawProps {
  isWalletConnected: boolean;
  userBalance?: string;
  onTransactionSuccess?: (txHash: string) => void;
}

type TransactionType = 'deposit' | 'withdraw';
type TransactionStatus = 'idle' | 'pending' | 'success' | 'error';

export default function DepositWithdraw({ 
  isWalletConnected, 
  userBalance = '0',
  onTransactionSuccess 
}: DepositWithdrawProps) {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState<TransactionType>('deposit');
  const [status, setStatus] = useState<TransactionStatus>('idle');
  const [txHash, setTxHash] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleTransaction = async () => {
    if (!isWalletConnected) {
      setError('Please connect your wallet first');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    try {
      setStatus('pending');
      setError('');
      
      // Simulate transaction processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful transaction
      const mockTxHash = 'tx_' + Math.random().toString(36).substr(2, 9);
      setTxHash(mockTxHash);
      setStatus('success');
      
      if (onTransactionSuccess) {
        onTransactionSuccess(mockTxHash);
      }
      
      // Reset form after success
      setTimeout(() => {
        setAmount('');
        setStatus('idle');
        setTxHash('');
      }, 3000);
      
    } catch (err) {
      console.error('Transaction failed:', err);
      setError(err instanceof Error ? err.message : 'Transaction failed');
      setStatus('error');
    }
  };

  const quickAmounts = ['10', '50', '100', '500'];
  const availableBalance = parseFloat(userBalance.replace(',', ''));

  return (
    <div className="space-y-6">
      {/* Transaction Type Toggle - Robinhood Style */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        <motion.button
          onClick={() => setTransactionType('deposit')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all font-medium ${
            transactionType === 'deposit'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowDownCircle className="w-4 h-4" />
          Deposit
        </motion.button>
        <motion.button
          onClick={() => setTransactionType('withdraw')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all font-medium ${
            transactionType === 'withdraw'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowUpCircle className="w-4 h-4" />
          Withdraw
        </motion.button>
      </div>

      {/* Amount Input */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-900">
              Amount (USDC)
            </label>
            {transactionType === 'withdraw' && (
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 font-medium">
                  Available: <span className="text-gray-900 font-semibold">${availableBalance.toLocaleString()}</span>
                </span>
              </div>
            )}
          </div>
          
          <div className="relative group">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <DollarSign className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full pl-12 pr-4 py-3 text-xl font-semibold text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={status === 'pending'}
            />
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {quickAmounts.map((quickAmount) => (
            <motion.button
              key={quickAmount}
              onClick={() => setAmount(quickAmount)}
              className="btn btn-secondary btn-sm font-semibold"
              disabled={status === 'pending'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ${quickAmount}
            </motion.button>
          ))}
        </div>

        {/* Max Button for Withdraw */}
        {transactionType === 'withdraw' && availableBalance > 0 && (
          <button
            onClick={() => setAmount(availableBalance.toString())}
            className="btn btn-ghost btn-sm w-full"
            disabled={status === 'pending'}
          >
            Use Maximum Available
          </button>
        )}
      </div>

      {/* Transaction Info */}
      {amount && parseFloat(amount) > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="card p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 space-y-4"
        >
          <div className="flex justify-between text-sm">
            <span className="text-muted">Transaction Fee</span>
            <span className="font-medium">~$0.001</span>
          </div>
          
          {transactionType === 'deposit' && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Estimated APY</span>
                <span className="font-medium text-success">20.52%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted">Monthly Yield Estimate</span>
                <span className="font-medium">
                  ${(parseFloat(amount) * 0.2052 / 12).toFixed(2)}
                </span>
              </div>
            </>
          )}
          
          <div className="border-t border-border pt-3">
            <div className="flex justify-between">
              <span className="font-medium">
                {transactionType === 'deposit' ? 'You will deposit' : 'You will receive'}
              </span>
              <span className="font-bold">
                ${parseFloat(amount).toLocaleString()}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 p-4 bg-error/10 border border-error/20 rounded-lg text-error"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </motion.div>
      )}

      {/* Success Message */}
      {status === 'success' && txHash && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 p-4 bg-success/10 border border-success/20 rounded-lg text-success"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <div className="text-sm">
            <div className="font-medium">
              {transactionType === 'deposit' ? 'Deposit' : 'Withdrawal'} successful!
            </div>
            <div className="text-success/80">
              Transaction: {txHash}
            </div>
          </div>
        </motion.div>
      )}

      {/* Action Button */}
      {!isWalletConnected ? (
        <button className="btn btn-secondary w-full" disabled>
          <Wallet className="w-4 h-4" />
          Connect Wallet to Continue
        </button>
      ) : (
        <button
          onClick={handleTransaction}
          disabled={
            !amount || 
            parseFloat(amount) <= 0 || 
            status === 'pending' ||
            (transactionType === 'withdraw' && parseFloat(amount) > availableBalance)
          }
          className={`btn w-full ${
            transactionType === 'deposit' ? 'btn-primary' : 'btn-secondary'
          } disabled:opacity-50`}
        >
          {status === 'pending' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing {transactionType}...
            </>
          ) : (
            <>
              {transactionType === 'deposit' ? (
                <>
                  <ArrowDownCircle className="w-4 h-4" />
                  Deposit ${amount || '0'}
                </>
              ) : (
                <>
                  <ArrowUpCircle className="w-4 h-4" />
                  Withdraw ${amount || '0'}
                </>
              )}
            </>
          )}
        </button>
      )}

      {/* Additional Info */}
      <div className="text-center space-y-2">
        <p className="text-xs text-muted">
          {transactionType === 'deposit' 
            ? 'Funds will be automatically allocated across optimized protocols'
            : 'Withdrawals are processed instantly with no lock-up periods'
          }
        </p>
        
        {transactionType === 'deposit' && (
          <div className="flex items-center justify-center gap-1 text-xs text-muted">
            <TrendingUp className="w-3 h-3" />
            <span>Start earning immediately after deposit confirmation</span>
          </div>
        )}
      </div>
    </div>
  );
}