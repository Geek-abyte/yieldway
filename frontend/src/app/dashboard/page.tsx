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
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
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
      {/* Main Navigation - Matching Landing Page */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Yieldway</span>
            </Link>

            <div className="flex items-center space-x-3">
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
      </nav>

      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Portfolio Dashboard</h1>
            </div>
            <div className="text-xs text-gray-500">
              {apyData?.lastUpdate && (
                <span>Last updated: {apyData.lastUpdate.toLocaleTimeString()}</span>
              )}
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
                
            {/* Charts and Actions - Robinhood Style */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Performance Chart */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                >
                  {/* Robinhood-style header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
                        <p className="text-sm text-gray-600 mt-1">Past 30 days</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          Live
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart area with Robinhood styling */}
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {balanceVisible 
                          ? new Intl.NumberFormat('en-US', { 
                              style: 'currency', 
                              currency: 'USD' 
                            }).format(portfolioValue)
                          : '••••••'
                        }
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-green-600 text-sm font-medium">
                          +{new Intl.NumberFormat('en-US', { 
                            style: 'currency', 
                            currency: 'USD' 
                          }).format(dailyChange)} ({((dailyChange / portfolioValue) * 100).toFixed(2)}%)
                        </div>
                        <div className="text-xs text-gray-500">Today</div>
                      </div>
                    </div>
                    <div className="h-80">
                      <RealtimeChart currentAPY={apyData?.combined || 0} />
                    </div>
                  </div>
                </motion.div>
              </div>
                  
              {/* Quick Actions and Allocation - Robinhood Style */}
              <div className="space-y-4">
                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => {/* Handle deposit */}}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <ArrowUpCircle className="w-4 h-4" />
                      Deposit
                    </button>
                    <button
                      onClick={() => {/* Handle withdraw */}}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    >
                      <ArrowDownCircle className="w-4 h-4" />
                      Withdraw
                    </button>
                    <button
                      onClick={() => {/* Handle rebalance */}}
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 text-green-600 font-medium text-sm hover:bg-green-50 rounded-lg transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Auto-Rebalance
                    </button>
                  </div>
                </motion.div>

                {/* Holdings - Robinhood Style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Holdings</h3>
                    <div className="text-xs text-gray-500">Live</div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Visual allocation */}
                    <div className="flex h-2 bg-gray-100 rounded-full overflow-hidden">
                      {allocations.map((allocation, index) => (
                        <motion.div
                          key={allocation.protocol}
                          className={`h-full ${allocation.protocol === 'DeFindex' ? 'bg-green-500' : 'bg-blue-500'}`}
                          style={{ width: `${allocation.percentage}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${allocation.percentage}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                        />
                      ))}
                    </div>
                    
                    {/* Holdings list */}
                    <div className="space-y-3">
                      {allocations.map((allocation, index) => (
                        <motion.div 
                          key={allocation.protocol} 
                          className="flex items-center justify-between py-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${allocation.protocol === 'DeFindex' ? 'bg-green-500' : 'bg-blue-500'}`} />
                            <div>
                              <div className="font-medium text-gray-900 text-sm">{allocation.protocol}</div>
                              <div className="text-xs text-gray-500">{allocation.apy.toFixed(2)}% APY</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">{allocation.percentage}%</div>
                            <div className="text-xs text-gray-500">
                              {new Intl.NumberFormat('en-US', { 
                                style: 'currency', 
                                currency: 'USD',
                                maximumFractionDigits: 0
                              }).format(portfolioValue * allocation.percentage / 100)}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Total APY */}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Combined APY</span>
                        <span className="text-lg font-bold text-green-600">
                          {allocations.reduce((acc, curr) => acc + (curr.percentage * curr.apy / 100), 0).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Today's Movement - Robinhood signature feature */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Today</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Portfolio Value</span>
                      <span className="font-medium text-gray-900">
                        {new Intl.NumberFormat('en-US', { 
                          style: 'currency', 
                          currency: 'USD' 
                        }).format(portfolioValue)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Today's Return</span>
                      <div className="text-right">
                        <div className="font-medium text-green-600">
                          +{new Intl.NumberFormat('en-US', { 
                            style: 'currency', 
                            currency: 'USD' 
                          }).format(dailyChange)}
                        </div>
                        <div className="text-xs text-green-600">
                          +{((dailyChange / portfolioValue) * 100).toFixed(2)}%
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Return</span>
                      <div className="text-right">
                        <div className="font-medium text-green-600">
                          +{new Intl.NumberFormat('en-US', { 
                            style: 'currency', 
                            currency: 'USD' 
                          }).format(monthlyYield * 6)}
                        </div>
                        <div className="text-xs text-green-600">+15.3%</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Robinhood-style Transaction Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trade</h3>
                <p className="text-gray-600">Buy and sell DeFi yield positions</p>
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
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Holdings</h1>
              <p className="text-gray-600">Your DeFi protocol positions and allocations</p>
            </div>
                  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Portfolio Distribution - Robinhood Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Portfolio Distribution</h3>
                  <PieChart className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="space-y-6">
                  {/* Visual allocation */}
                  <div className="flex h-3 bg-gray-100 rounded-full overflow-hidden">
                    {allocations.map((allocation, index) => (
                      <motion.div
                        key={allocation.protocol}
                        className={`h-full ${allocation.protocol === 'DeFindex' ? 'bg-green-500' : 'bg-blue-500'}`}
                        style={{ width: `${allocation.percentage}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${allocation.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    ))}
                  </div>
                  
                  {/* Protocol details */}
                  <div className="space-y-3">
                    {allocations.map((allocation, index) => (
                      <motion.div 
                        key={allocation.protocol} 
                        className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${allocation.protocol === 'DeFindex' ? 'bg-green-500' : 'bg-blue-500'}`} />
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{allocation.protocol}</div>
                            <div className="text-xs text-gray-500">Active Protocol</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-gray-900">{allocation.percentage}%</div>
                          <div className="text-xs text-gray-500">Allocation</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Protocol Performance - Robinhood Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Protocol Performance</h3>
                <div className="space-y-4">
                  {allocations.map((allocation, index) => (
                    <motion.div 
                      key={allocation.protocol}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${allocation.protocol === 'DeFindex' ? 'bg-green-500' : 'bg-blue-500'}`} />
                          <span className="font-medium text-gray-900">{allocation.protocol}</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs font-medium">
                          <TrendingUp className="w-3 h-3" />
                          Active
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-xl font-bold text-green-600">{allocation.apy.toFixed(2)}%</div>
                          <div className="text-xs text-gray-500">Current APY</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900">{allocation.percentage}%</div>
                          <div className="text-xs text-gray-500">Portfolio Share</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Combined Performance Summary */}
                  <motion.div 
                    className="p-6 bg-green-600 rounded-lg text-white mt-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="text-center">
                      <div className="text-green-100 text-sm mb-2">Combined Weighted APY</div>
                      <div className="text-3xl font-bold mb-1">{apyData.combined.toFixed(2)}%</div>
                      <div className="text-sm text-green-100">Optimized allocation performance</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {activeView === 'transactions' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Activity</h1>
              <p className="text-gray-600">Your transaction history and portfolio activity</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg border border-gray-200"
            >
              <TransactionHistory />
            </motion.div>
          </div>
        )}

        {activeView === 'analytics' && apyData && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h1>
              <p className="text-gray-600">Detailed performance metrics and portfolio insights</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Performance Chart - Robinhood Style */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
                      <p className="text-sm text-gray-600">Historical performance and trend analysis</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      Live Data
                    </div>
                  </div>
                  <div className="h-80">
                    <RealtimeChart currentAPY={apyData.combined} />
                  </div>
                </motion.div>
              </div>
              
              {/* Risk Metrics Sidebar - Robinhood Style */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Metrics</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Sharpe Ratio</div>
                          <div className="text-xl font-bold text-gray-900">2.84</div>
                        </div>
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Max Drawdown</div>
                          <div className="text-xl font-bold text-green-600">-3.2%</div>
                        </div>
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <TrendingDown className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Volatility</div>
                          <div className="text-xl font-bold text-gray-900">15.7%</div>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Activity className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Liquidity Metrics</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Total TVL</div>
                          <div className="text-xl font-bold text-gray-900">
                            ${(apyData.soroswap.totalLiquidity / 1000000).toFixed(1)}M
                          </div>
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Withdrawal Time</div>
                          <div className="text-xl font-bold text-green-600">&lt; 30s</div>
                        </div>
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-green-600" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Avg Slippage</div>
                          <div className="text-xl font-bold text-green-600">0.1%</div>
                        </div>
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-600" />
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