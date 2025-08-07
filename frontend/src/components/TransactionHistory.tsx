'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  ExternalLink, 
  ArrowDownCircle, 
  ArrowUpCircle, 
  RefreshCw,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  Search
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'rebalance';
  amount: string;
  asset: string;
  txHash: string;
  timestamp: Date;
  status: 'pending' | 'success' | 'failed';
  gasCost: string;
}

interface TransactionHistoryProps {
  userAddress?: string;
}

export default function TransactionHistory({ userAddress }: TransactionHistoryProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'deposit' | 'withdraw' | 'rebalance'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock transaction data for demo
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockTransactions: Transaction[] = [
        {
          id: '1',
          type: 'deposit',
          amount: '500.00',
          asset: 'USDC',
          txHash: 'GCZYLNGU7DFNYNWUAVR...NK5VZQQ',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          status: 'success',
          gasCost: '$0.0008'
        },
        {
          id: '2',
          type: 'rebalance',
          amount: '1,250.00',
          asset: 'USDC',
          txHash: 'HBZYLNGU7DFNYNWUAVR...NK5VZQR',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
          status: 'success',
          gasCost: '$0.0012'
        },
        {
          id: '3',
          type: 'deposit',
          amount: '750.00',
          asset: 'USDC',
          txHash: 'ICZYLNGU7DFNYNWUAVR...NK5VZQS',
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
          status: 'success',
          gasCost: '$0.0006'
        },
        {
          id: '4',
          type: 'withdraw',
          amount: '200.00',
          asset: 'USDC',
          txHash: 'JCZYLNGU7DFNYNWUAVR...NK5VZQT',
          timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
          status: 'success',
          gasCost: '$0.0005'
        },
        {
          id: '5',
          type: 'deposit',
          amount: '1,000.00',
          asset: 'USDC',
          txHash: 'KCZYLNGU7DFNYNWUAVR...NK5VZQU',
          timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
          status: 'success',
          gasCost: '$0.0009'
        }
      ];
      
      setTransactions(mockTransactions);
      setIsLoading(false);
    }, 1000);
  }, [userAddress]);

  const getTransactionIcon = (type: string, status: string) => {
    if (status === 'pending') return <Clock className="w-5 h-5 text-warning" />;
    if (status === 'failed') return <AlertCircle className="w-5 h-5 text-error" />;
    
    switch (type) {
      case 'deposit':
        return <ArrowDownCircle className="w-5 h-5 text-success" />;
      case 'withdraw':
        return <ArrowUpCircle className="w-5 h-5 text-error" />;
      case 'rebalance':
        return <RefreshCw className="w-5 h-5 text-primary" />;
      default:
        return <CheckCircle className="w-5 h-5 text-success" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium";
    
    switch (status) {
      case 'success':
        return <span className={`${baseClasses} bg-success/10 text-success`}>Success</span>;
      case 'pending':
        return <span className={`${baseClasses} bg-warning/10 text-warning`}>Pending</span>;
      case 'failed':
        return <span className={`${baseClasses} bg-error/10 text-error`}>Failed</span>;
      default:
        return <span className={`${baseClasses} bg-gray-100 dark:bg-gray-800 text-muted`}>Unknown</span>;
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesFilter = filter === 'all' || tx.type === filter;
    const matchesSearch = searchTerm === '' || 
      tx.txHash.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.amount.includes(searchTerm);
    
    return matchesFilter && matchesSearch;
  });

  const filterOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'deposit', label: 'Deposits' },
    { value: 'withdraw', label: 'Withdrawals' },
    { value: 'rebalance', label: 'Rebalances' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
            <History className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-display">Transaction History</h3>
            <p className="text-sm text-muted font-medium">Track all your portfolio activity</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="status-dot status-dot-success">
            <span className="text-xs font-medium">Live</span>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-lg pl-12"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-muted" />
            <span className="text-sm font-medium text-muted">Filter:</span>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="input w-auto min-w-36 font-medium"
          >
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Transaction List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredTransactions.length === 0 ? (
        <div className="card p-12 text-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <History className="w-8 h-8 text-muted" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No transactions found</h3>
          <p className="text-muted">
            {searchTerm || filter !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Your transaction history will appear here once you start using the platform'
            }
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card-interactive p-6 group"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {getTransactionIcon(transaction.type, transaction.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold capitalize text-lg">
                      {transaction.type}
                    </span>
                    {getStatusBadge(transaction.status)}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span>{formatTimestamp(transaction.timestamp)}</span>
                    <span>Fee: {transaction.gasCost}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`font-bold text-xl ${
                    transaction.type === 'withdraw' ? 'text-error' : 'text-success'
                  }`}>
                    {transaction.type === 'withdraw' ? '-' : '+'}${transaction.amount}
                  </div>
                  <div className="text-sm text-muted font-medium">{transaction.asset}</div>
                </div>
                
                <motion.button 
                  onClick={() => window.open(`https://stellar.expert/explorer/public/tx/${transaction.txHash}`, '_blank')}
                  className="btn btn-ghost btn-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="View on Stellar Explorer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Transaction Hash */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Transaction Hash:</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(transaction.txHash)}
                    className="font-mono text-muted hover:text-foreground transition-colors"
                    title="Click to copy"
                  >
                    {transaction.txHash}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Load More Button (for future pagination) */}
      {filteredTransactions.length > 0 && (
        <div className="text-center">
          <button className="btn btn-secondary">
            Load More Transactions
          </button>
        </div>
      )}
    </div>
  );
}