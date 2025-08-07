'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown, 
  BarChart3, 
  Lock, 
  Clock,
  Star,
  CheckCircle,
  Award,
  Users,
  DollarSign,
  Percent,
  Eye,
  EyeOff,
  Play,
  Sparkles
} from 'lucide-react';



export default function HomePage() {
  const [email, setEmail] = useState('');
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Rotating metrics for hero section
  const metrics = [
    { value: '20.52%', label: 'Current APY', trend: '+2.4%' },
    { value: '$2.1M', label: 'Total Value Locked', trend: '+15.3%' },
    { value: '1,247', label: 'Active Users', trend: '+8.7%' },
    { value: '<$0.001', label: 'Transaction Cost', trend: null },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('yieldway_signup_email', email);
      window.location.href = '/onboarding';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Stripe Style */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Yieldway</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#performance" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Performance
              </a>
              <a href="#security" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Security
              </a>
              <Link href="/learn" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Docs
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Link 
                href="/dashboard"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Stripe-Inspired Minimalist Design */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        {/* Stripe's signature gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(100, 116, 139, 0.15) 1px, transparent 0)
            `,
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Clean content container */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24 z-10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Stripe-style product badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                New: Professional DeFi Platform
              </motion.div>
              
              {/* Clean, impactful headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-none"
              >
                Financial{' '}
                <span className="text-blue-600">infrastructure</span>{' '}
                for DeFi
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Millions of users trust Yieldway to maximize their DeFi returns with automated rebalancing and institutional-grade security.
              </motion.p>

              {/* Stripe's signature CTA styling */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/onboarding"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Start earning now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  View demo
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 pt-8"
              >
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  Audited
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-blue-600" />
                  Non-custodial
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-yellow-600" />
                  Sub-second
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stripe's iconic dashboard mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              {/* Main dashboard card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">Portfolio Dashboard</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      Live
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Key metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">
                        {metrics[currentMetric].value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metrics[currentMetric].label}
                      </div>
                      {metrics[currentMetric].trend && (
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <TrendingUp className="w-3 h-3" />
                          {metrics[currentMetric].trend}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-gray-900">$2.1M</div>
                      <div className="text-sm text-gray-600">Total Value</div>
                      <div className="flex items-center gap-1 text-xs text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        +15.3%
                      </div>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 h-32 flex items-end justify-between">
                    {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-blue-500 rounded-sm w-4"
                        style={{ height: `${height}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                      />
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Deposit
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold py-2 px-3 rounded-full shadow-lg"
              >
                +{metrics[currentMetric].trend || '8.7%'}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-medium text-gray-900">Stellar Network</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom stats bar - Stripe style */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 mt-20 border-t border-gray-200"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">$2.1M+</div>
              <div className="text-sm text-gray-600">Assets managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Active users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">20.52%</div>
              <div className="text-sm text-gray-600">Average APY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">&lt;$0.001</div>
              <div className="text-sm text-gray-600">Transaction cost</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Stripe Style */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A complete financial stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to maximize DeFi returns with institutional-grade security and automated optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated rebalancing</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered algorithms continuously optimize your portfolio allocation across multiple protocols for maximum risk-adjusted returns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Institutional security</h3>
              <p className="text-gray-600 leading-relaxed">
                Multi-layered security with smart contract audits, automated risk controls, and non-custodial architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Sub-second transactions and near-zero fees on Stellar network. Withdraw anytime without lock-up periods.
              </p>
            </motion.div>
          </div>

          {/* Additional features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-time analytics</h4>
                  <p className="text-gray-600">Live performance metrics, risk analysis, and detailed transaction history.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Non-custodial</h4>
                  <p className="text-gray-600">Your funds remain in your control. We never have custody of your assets.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">24/7 monitoring</h4>
                  <p className="text-gray-600">Continuous monitoring with automated circuit breakers and emergency protocols.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Global accessibility</h4>
                  <p className="text-gray-600">Access from anywhere in the world with institutional-grade infrastructure.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Section - Stripe Style */}
      <section id="performance" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for performance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Live performance metrics and transparency you can trust. Track your yields in real-time with institutional-grade analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-green-800 uppercase tracking-wide">Current APY</span>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-900 mb-2">20.52%</div>
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <ArrowRight className="w-4 h-4" />
                  <span>+2.4% vs last month</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Total Value Locked</div>
                  <div className="text-2xl font-bold text-gray-900">$2.1M</div>
                  <div className="text-xs text-green-600 font-medium">+15.3%</div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Active Users</div>
                  <div className="text-2xl font-bold text-gray-900">1,247</div>
                  <div className="text-xs text-green-600 font-medium">+8.7%</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Risk Metrics</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sharpe Ratio</span>
                    <span className="font-semibold text-gray-900">2.84</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Max Drawdown</span>
                    <span className="font-semibold text-gray-900">-3.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Volatility</span>
                    <span className="font-semibold text-gray-900">15.7%</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right: Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Portfolio Performance</h3>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Live
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Simplified chart visualization */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">DeFindex Protocol</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">70%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div 
                        className="bg-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>22.5% APY</span>
                      <span>$1.47M</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Soroswap Pools</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">30%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div 
                        className="bg-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '30%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>14.55% APY</span>
                      <span>$0.63M</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="text-center">
                    <div className="text-sm text-blue-600 font-medium mb-1">Combined Weighted APY</div>
                    <div className="text-2xl font-bold text-blue-900">20.52%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section - Stripe Style */}
      <section id="security" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Security you can trust
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security with multiple audits, non-custodial architecture, and institutional standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audited contracts</h3>
              <p className="text-gray-600 leading-relaxed">
                Multiple security audits by leading firms ensure smart contract safety and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-custodial</h3>
              <p className="text-gray-600 leading-relaxed">
                Your funds remain in your control. We never have access to your private keys or assets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous monitoring with automated emergency protocols and risk management systems.
              </p>
            </motion.div>
          </div>

          {/* Security stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Open source</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-sm text-gray-600">Security incidents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-sm text-gray-600">Security audits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$10M+</div>
              <div className="text-sm text-gray-600">Bug bounty</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Stripe Style */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start building today
            </h2>
            
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Join thousands of users who trust Yieldway for professional DeFi yield optimization with institutional security.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start earning now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                View demo
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Withdraw anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Non-custodial</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Stripe Style */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Yieldway</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Professional DeFi yield optimization with institutional security and automated rebalancing.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Built on Stellar Network</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/onboarding" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Get started
                  </Link>
                </li>
                <li>
                  <a href="#performance" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Performance
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Learn</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/learn" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    API reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Risk disclosure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>© 2025 Yieldway. All rights reserved.</span>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span>Powered by Stellar</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Audited
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  <Lock className="w-3 h-3" />
                  Non-custodial
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}