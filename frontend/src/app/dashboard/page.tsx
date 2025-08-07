'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Percent, 
  Calendar, 
  Activity,
  PieChart,
  BarChart3,
  Wallet,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  ArrowUpCircle,
  ArrowDownCircle,
  Eye,
  EyeOff,
  Zap
} from 'lucide-react';
import DepositWithdraw from '../../components/DepositWithdraw';
import RealtimeChart from '../../components/RealtimeChart';
import TransactionHistory from '../../components/TransactionHistory';



// Types
interface APYData {
  soroswap: {
    weighted: number;
    totalLiquidity: number;
    pools: Array<{
      pair: string;
      apy: number;
      liquidity: number;
    }>;
  };
  defindex: number;
  combined: number;
  optimal_allocation: {
    soroswap: number;
    defindex: number;
  };
  lastUpdate?: Date;
  isLive?: boolean;
}

interface UserProfile {
  email: string;
  experience: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  investmentAmount: string;
  walletConnected: boolean;
}

export default function Dashboard() {
  const [apyData, setApyData] = useState<APYData | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userBalance, setUserBalance] = useState('1,250.00');
  const [userAddress, setUserAddress] = useState('');
  const [activeView, setActiveView] = useState('overview');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Load user profile
  useEffect(() => {
    const savedProfile = localStorage.getItem('yieldway_user_profile');
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile));
    }
  }, []);

  // Fetch real-time APY data
  const fetchAPYData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/apy');
      if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
      }
      
      const data = await response.json();
      setApyData({
        ...data,
        lastUpdate: new Date(),
        isLive: true
      });
    } catch (error) {
      console.error('Failed to fetch APY data:', error);
      // Fallback to mock data
      setApyData({
        soroswap: {
          weighted: 14.55,
          totalLiquidity: 21352419,
          pools: [
            { pair: 'USDC/XLM', apy: 19.73, liquidity: 1008000 },
            { pair: 'USDC/EURC', apy: 19.52, liquidity: 6641 },
            { pair: 'XLM/EURC', apy: 19.19, liquidity: 949843 }
          ]
        },
        defindex: 22.50,
        combined: 20.52,
        optimal_allocation: {
          soroswap: 30,
          defindex: 70
        },
        lastUpdate: new Date(),
        isLive: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Check wallet connection
  const checkWalletConnection = async () => {
    try {
      if (typeof window !== 'undefined' && (window as any).freighterApi) {
        const isConnected = await (window as any).freighterApi.isConnected();
        setIsWalletConnected(isConnected);
        
        if (isConnected) {
          const publicKey = await (window as any).freighterApi.getPublicKey();
            setUserAddress(publicKey);
        }
      }
    } catch (error) {
      console.error('Wallet connection check failed:', error);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchAPYData();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  useEffect(() => {
    fetchAPYData();
    checkWalletConnection();
    
    const interval = setInterval(fetchAPYData, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleTransactionSuccess = () => {
    fetchAPYData();
  };

  if (isLoading && !apyData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  const portfolioValue = parseFloat(userBalance.replace(',', ''));
  const dailyChange = 47.82;
  const monthlyYield = portfolioValue * (apyData?.combined || 20.52) / 100 / 12;

  const allocations = apyData ? [
    {
      protocol: 'DeFindex',
      percentage: apyData.optimal_allocation.defindex,
      apy: apyData.defindex,
      color: 'bg-primary'
    },
    {
      protocol: 'Soroswap',
      percentage: apyData.optimal_allocation.soroswap,
      apy: apyData.soroswap.weighted,
      color: 'bg-accent'
    }
  ] : [];

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'allocations', label: 'Allocations', icon: PieChart },
    { id: 'transactions', label: 'Activity', icon: Activity },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Stripe Style */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Yieldway</h1>
                  <div className="hidden md:block">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Portfolio Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              
              <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200">
                {isWalletConnected ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Connected</div>
                      <div className="text-sm font-medium font-mono text-gray-900">
                        {userAddress?.slice(0, 6)}...{userAddress?.slice(-4)}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Wallet</div>
                      <div className="text-sm font-medium text-gray-900">Not Connected</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation - Stripe Style */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <nav className="flex space-x-1">
            {navigationTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`flex items-center gap-2 py-4 px-6 text-sm font-medium transition-all duration-200 border-b-2 ${
                    activeView === tab.id
                      ? 'text-blue-600 border-blue-600'
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        {activeView === 'overview' && (
          <div className="space-y-8">
            {/* Portfolio Summary - Stripe Style */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Portfolio Overview</h2>
                  <p className="text-gray-600">Real-time performance and metrics</p>
                </div>
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="inline-flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  {balanceVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {balanceVisible ? 'Hide' : 'Show'} Balance
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      +3.47%
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Portfolio Value</div>
                    {isLoading ? (
                      <div className="h-8 bg-gray-200 rounded animate-pulse" />
                    ) : (
                      <div className="text-2xl font-bold text-gray-900">
                        {balanceVisible 
                          ? new Intl.NumberFormat('en-US', { 
                              style: 'currency', 
                              currency: 'USD' 
                            }).format(portfolioValue)
                          : '••••••'
                        }
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Percent className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      +0.23%
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Current APY</div>
                    {isLoading ? (
                      <div className="h-8 bg-gray-200 rounded animate-pulse" />
                    ) : (
                      <div className="text-2xl font-bold text-green-600">
                        {(apyData?.combined || 20.52).toFixed(2)}%
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      +1.82%
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Monthly Yield</div>
                    {isLoading ? (
                      <div className="h-8 bg-gray-200 rounded animate-pulse" />
                    ) : (
                      <div className="text-2xl font-bold text-gray-900">
                        {balanceVisible 
                          ? new Intl.NumberFormat('en-US', { 
                              style: 'currency', 
                              currency: 'USD' 
                            }).format(monthlyYield)
                          : '••••'
                        }
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                      <TrendingUp className="w-4 h-4" />
                      +2.15%
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Today's P&L</div>
                    {isLoading ? (
                      <div className="h-8 bg-gray-200 rounded animate-pulse" />
                    ) : (
                      <div className="text-2xl font-bold text-gray-900">
                        {balanceVisible 
                          ? new Intl.NumberFormat('en-US', { 
                              style: 'currency', 
                              currency: 'USD' 
                            }).format(dailyChange)
                          : '••••'
                        }
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
                </div>
                
            {/* Charts and Actions - Redesigned */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Performance Chart */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="card-elevated p-8"
                >
                  <div className="flex items-center justify-between mb-8">
                  <div>
                      <h3 className="text-xl font-bold text-display">Performance Chart</h3>
                      <p className="text-muted">Real-time yield performance and historical data</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="badge badge-success">
                        <div className="status-dot status-dot-success" />
                        Live
                      </div>
                    </div>
                  </div>
                  <div className="h-80">
                    <RealtimeChart currentAPY={apyData?.combined || 0} />
                  </div>
                </motion.div>
                  </div>
                  
              {/* Quick Actions and Allocation */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="card-elevated p-6"
                >
                  <h3 className="text-lg font-bold text-display mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <button
                      onClick={() => {/* Handle deposit */}}
                      className="btn btn-primary w-full group"
                    >
                      <Wallet className="w-4 h-4" />
                      Deposit Funds
                      <ArrowUpCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => {/* Handle withdraw */}}
                      className="btn btn-secondary w-full group"
                    >
                      <ArrowDownCircle className="w-4 h-4" />
                      Withdraw
                      <TrendingDown className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => {/* Handle rebalance */}}
                      className="btn btn-ghost w-full group"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Auto Rebalance
                      <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                {/* Enhanced Allocation Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="card-elevated p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-display">Portfolio Allocation</h3>
                    <PieChart className="w-5 h-5 text-muted" />
                  </div>
                  
                  <div className="space-y-6">
                    {/* Visual allocation bar */}
                    <div className="flex h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      {allocations.map((allocation, index) => (
                        <motion.div
                          key={allocation.protocol}
                          className={`h-full ${allocation.color === 'bg-primary' ? 'bg-gradient-primary' : 'bg-gradient-success'}`}
                          style={{ width: `${allocation.percentage}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${allocation.percentage}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                        />
                      ))}
                    </div>
                    
                    {/* Allocation details */}
                    <div className="space-y-4">
                      {allocations.map((allocation, index) => (
                        <motion.div 
                          key={allocation.protocol} 
                          className="flex items-center justify-between p-3 bg-surface rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${allocation.color === 'bg-primary' ? 'bg-gradient-primary' : 'bg-gradient-success'}`} />
                            <span className="font-medium">{allocation.protocol}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">{allocation.percentage}%</div>
                            <div className="text-xs text-muted">{allocation.apy}% APY</div>
                          </div>
                        </motion.div>
                      ))}
                </div>

                    {/* Total weighted APY */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                        <span className="font-semibold">Combined Weighted APY</span>
                        <span className="text-2xl font-bold gradient-text">
                          {allocations.reduce((acc, curr) => acc + (curr.percentage * curr.apy / 100), 0).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Deposit/Withdraw Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="card-elevated p-8"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-display mb-2">Manage Position</h3>
                <p className="text-muted">Deposit or withdraw funds from your portfolio with instant execution</p>
              </div>
              <DepositWithdraw 
                isWalletConnected={isWalletConnected}
                userBalance={userBalance}
                onTransactionSuccess={handleTransactionSuccess}
              />
            </motion.div>
                </div>
        )}

        {activeView === 'allocations' && apyData && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-display mb-2">Protocol Allocations</h1>
              <p className="text-muted">Detailed breakdown of current protocol distribution and performance</p>
                  </div>
                  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Enhanced Allocation Visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-elevated p-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-display">Portfolio Distribution</h3>
                  <PieChart className="w-6 h-6 text-muted" />
                </div>
                
                <div className="space-y-6">
                  {/* Enhanced visual allocation */}
                  <div className="flex h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    {allocations.map((allocation, index) => (
                      <motion.div
                        key={allocation.protocol}
                        className={`h-full ${allocation.color === 'bg-primary' ? 'bg-gradient-primary' : 'bg-gradient-success'}`}
                        style={{ width: `${allocation.percentage}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${allocation.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    ))}
                  </div>
                  
                  {/* Protocol details */}
                  <div className="space-y-4">
                    {allocations.map((allocation, index) => (
                      <motion.div 
                        key={allocation.protocol} 
                        className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${allocation.color === 'bg-primary' ? 'bg-gradient-primary' : 'bg-gradient-success'} shadow-sm`} />
                          <div>
                            <span className="font-semibold">{allocation.protocol}</span>
                            <div className="text-xs text-muted">Active Protocol</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-xl">{allocation.percentage}%</div>
                          <div className="text-xs text-muted">Allocation</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Protocol Performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card-elevated p-8"
              >
                <h3 className="text-xl font-bold text-display mb-8">Protocol Performance</h3>
                <div className="space-y-6">
                  {allocations.map((allocation, index) => (
                    <motion.div 
                      key={allocation.protocol}
                      className="metric-card bg-gradient-to-br from-surface to-surface/50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${allocation.color === 'bg-primary' ? 'bg-gradient-primary' : 'bg-gradient-success'}`} />
                          <span className="font-semibold">{allocation.protocol}</span>
                        </div>
                        <div className="badge badge-success">
                          <TrendingUp className="w-3 h-3" />
                          Active
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-2xl font-bold gradient-text-success">{allocation.apy}%</div>
                          <div className="text-caption">Current APY</div>
                      </div>
                      <div className="text-right">
                          <div className="text-lg font-bold">{allocation.percentage}%</div>
                          <div className="text-caption">Portfolio Share</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Combined Performance Summary */}
                  <motion.div 
                    className="p-6 bg-gradient-primary rounded-2xl text-white"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="text-center">
                      <div className="text-caption text-white/80 mb-2">Combined Weighted APY</div>
                      <div className="text-4xl font-bold mb-2">{apyData.combined}%</div>
                      <div className="text-sm text-white/80">Optimized allocation performance</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeView === 'transactions' && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-display mb-2">Transaction History</h1>
              <p className="text-muted">Complete record of portfolio activity and performance</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-elevated p-8"
            >
              <TransactionHistory />
            </motion.div>
          </div>
        )}

        {activeView === 'analytics' && apyData && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-display mb-2">Portfolio Analytics</h1>
              <p className="text-muted">Detailed performance metrics, risk analysis, and insights</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Enhanced Performance Chart */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-elevated p-8"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-display">Performance Analytics</h3>
                      <p className="text-muted">Historical performance and trend analysis</p>
                    </div>
                    <div className="badge badge-success">
                      <TrendingUp className="w-3 h-3" />
                      Live Data
                    </div>
                  </div>
                  <div className="h-96">
                    <RealtimeChart currentAPY={apyData.combined} />
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced Metrics Sidebar */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="card-elevated p-6"
                >
                  <h3 className="text-lg font-bold text-display mb-6">Risk Metrics</h3>
                  <div className="space-y-4">
                    <div className="metric-card bg-gradient-to-br from-surface to-surface/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-caption">Sharpe Ratio</div>
                          <div className="text-2xl font-bold">2.84</div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="metric-card bg-gradient-to-br from-surface to-surface/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-caption">Max Drawdown</div>
                          <div className="text-2xl font-bold text-success">-3.2%</div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                          <TrendingDown className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="metric-card bg-gradient-to-br from-surface to-surface/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-caption">Volatility</div>
                          <div className="text-2xl font-bold">15.7%</div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Activity className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="card-elevated p-6"
                >
                  <h3 className="text-lg font-bold text-display mb-6">Liquidity Metrics</h3>
                  <div className="space-y-4">
                    <div className="metric-card bg-gradient-to-br from-surface to-surface/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-caption">Total TVL</div>
                          <div className="text-2xl font-bold">
                            ${(apyData.soroswap.totalLiquidity / 1000000).toFixed(1)}M
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="metric-card bg-gradient-to-br from-surface to-surface/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-caption">Withdrawal Time</div>
                          <div className="text-2xl font-bold text-success">&lt; 30s</div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="metric-card bg-gradient-to-br from-surface to-surface/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-caption">Avg Slippage</div>
                          <div className="text-2xl font-bold text-success">0.1%</div>
                        </div>
                        <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}