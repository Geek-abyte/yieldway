'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  Target,
  BarChart3,
  Globe,
  Award,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: any;
  topics: string[];
  completed?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Modern learning module card
const ModuleCard = ({ 
  module, 
  onComplete,
  delay = 0 
}: { 
  module: LearningModule;
  onComplete: (id: string) => void;
  delay?: number;
}) => {
  const Icon = module.icon;
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success/10 text-success';
      case 'Intermediate': return 'bg-warning/10 text-warning';
      case 'Advanced': return 'bg-error/10 text-error';
      default: return 'bg-gray-100 dark:bg-gray-800 text-muted';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="card p-6 h-full group hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
          module.completed ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary group-hover:bg-primary/20'
        }`}>
          {module.completed ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">{module.title}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
              {module.difficulty}
            </span>
          </div>
          
          <p className="text-muted text-sm mb-4 leading-relaxed">{module.description}</p>
          
          <div className="flex items-center gap-4 mb-4 text-sm text-muted">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>{module.topics.length} topics</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        {module.topics.map((topic, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
            <span className="text-muted">{topic}</span>
          </div>
        ))}
      </div>
      
      <button
        onClick={() => onComplete(module.id)}
        disabled={module.completed}
        className={`btn w-full ${
          module.completed ? 'btn-secondary cursor-default' : 'btn-primary'
        }`}
      >
        {module.completed ? (
          <>
            <CheckCircle className="w-4 h-4" />
            Completed
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Start Learning
          </>
        )}
      </button>
    </motion.div>
  );
};

// FAQ accordion component
const FAQAccordion = ({ faqs }: { faqs: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="card">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-surface/50 transition-colors"
          >
            <h3 className="font-semibold pr-4">{faq.question}</h3>
            <ChevronRight className={`w-5 h-5 text-muted transition-transform ${
              openIndex === index ? 'rotate-90' : ''
            }`} />
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6"
            >
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function LearnPage() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const learningModules: LearningModule[] = [
    {
      id: 'defi-basics',
      title: 'DeFi Fundamentals',
      description: 'Learn the basics of decentralized finance, yield farming, and how DeFi protocols work.',
      duration: '15 min',
      difficulty: 'Beginner',
      icon: BookOpen,
      topics: ['What is DeFi?', 'Yield Farming Basics', 'Smart Contracts', 'Wallet Security'],
      completed: completedModules.includes('defi-basics')
    },
    {
      id: 'apy-understanding',
      title: 'Understanding APY',
      description: 'Master the concept of Annual Percentage Yield and how compound interest works in DeFi.',
      duration: '10 min',
      difficulty: 'Beginner',
      icon: TrendingUp,
      topics: ['APY vs APR', 'Compound Interest', 'Risk Factors', 'Calculating Returns'],
      completed: completedModules.includes('apy-understanding')
    },
    {
      id: 'stellar-ecosystem',
      title: 'Stellar Ecosystem',
      description: 'Discover why Stellar is the ideal blockchain for DeFi with low fees and fast transactions.',
      duration: '12 min',
      difficulty: 'Intermediate',
      icon: Zap,
      topics: ['Stellar Network', 'Soroban Smart Contracts', 'Gas Fees', 'Transaction Speed'],
      completed: completedModules.includes('stellar-ecosystem')
    },
    {
      id: 'yield-strategies',
      title: 'Yield Optimization Strategies',
      description: 'Learn advanced strategies for maximizing returns while managing risk effectively.',
      duration: '20 min',
      difficulty: 'Advanced',
      icon: Target,
      topics: ['Portfolio Allocation', 'Auto-Rebalancing', 'Risk Management', 'Diversification'],
      completed: completedModules.includes('yield-strategies')
    },
    {
      id: 'security-best-practices',
      title: 'Security & Risk Management',
      description: 'Essential security practices for DeFi investing and protecting your assets.',
      duration: '18 min',
      difficulty: 'Intermediate',
      icon: Shield,
      topics: ['Wallet Security', 'Smart Contract Risks', 'Impermanent Loss', 'Scam Prevention'],
      completed: completedModules.includes('security-best-practices')
    },
    {
      id: 'yieldway-features',
      title: 'Yieldway Platform Guide',
      description: 'Complete guide to using Yieldway\'s features for optimal yield farming.',
      duration: '25 min',
      difficulty: 'Beginner',
      icon: BarChart3,
      topics: ['Platform Overview', 'Deposit & Withdraw', 'Auto-Rebalancing', 'Analytics Dashboard'],
      completed: completedModules.includes('yieldway-features')
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "What is the minimum amount I can invest?",
      answer: "There's no minimum investment required. You can start with any amount you're comfortable with. However, keep in mind that very small amounts might be affected by network fees."
    },
    {
      question: "How often does auto-rebalancing occur?",
      answer: "Our AI-powered system monitors market conditions 24/7 and rebalances your portfolio automatically when better opportunities arise. This typically happens several times per week, but can be more frequent during volatile market conditions."
    },
    {
      question: "Is my money safe on Yieldway?",
      answer: "Security is our top priority. Your funds are secured by smart contracts on the Stellar blockchain, which has been audited and tested extensively. We never have custody of your funds - they remain in decentralized protocols at all times."
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer: "Yes! You can withdraw your funds at any time without lock-up periods or penalties. Withdrawals are typically processed within a few minutes on the Stellar network."
    },
    {
      question: "What are the fees?",
      answer: "Yieldway charges a 2.5% performance fee on profits generated. There are no deposit or withdrawal fees. Network fees on Stellar are typically less than $0.001 per transaction."
    },
    {
      question: "How are the APY rates calculated?",
      answer: "APY rates are calculated based on the weighted average returns from all integrated protocols, updated in real-time. The displayed APY includes compound interest and is based on historical performance, though future returns may vary."
    }
  ];

  const completeModule = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Redesigned */}
      <div className="bg-gradient-to-br from-surface via-background to-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
                <BookOpen className="w-4 h-4" />
                Educational Hub
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-display mb-8 leading-tight">
                Master DeFi &{' '}
                <span className="gradient-text">Maximize Yields</span>
              </h1>
              <p className="text-xl md:text-2xl text-body leading-relaxed max-w-3xl mx-auto">
                Comprehensive educational resources designed to help you understand decentralized finance 
                and optimize your investment strategy with professional confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Progress Overview - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-elevated p-10 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-display">Your Learning Journey</h2>
                  <p className="text-muted text-lg">Master DeFi concepts through structured educational modules</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Progress</span>
                  <span className="text-2xl font-bold gradient-text">
                    {Math.round((completedModules.length / learningModules.length) * 100)}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 shadow-inner">
                  <motion.div
                    className="h-4 rounded-full bg-gradient-primary shadow-sm"
                    initial={{ width: 0 }}
                    animate={{ width: `${(completedModules.length / learningModules.length) * 100}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>{completedModules.length} completed</span>
                  <span>{learningModules.length - completedModules.length} remaining</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="metric-card">
                <div className="text-5xl font-bold gradient-text mb-2">
                  {completedModules.length}/{learningModules.length}
                </div>
                <div className="text-caption mb-4">Modules Completed</div>
                {completedModules.length === learningModules.length ? (
                  <div className="badge badge-success">
                    <Award className="w-3 h-3" />
                    Expert Level
                  </div>
                ) : (
                  <div className="badge badge-primary">
                    <BookOpen className="w-3 h-3" />
                    In Progress
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Modules - Enhanced */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-display mb-4">Learning Modules</h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              Step-by-step courses designed to take you from beginner to expert in DeFi yield optimization 
              and professional investment strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningModules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                onComplete={completeModule}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>

        {/* Quick Start CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-elevated p-12 mb-16 text-center gradient-primary text-white rounded-2xl"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-xl opacity-90 mb-8">
              Put your knowledge to work and start earning passive income with institutional-grade DeFi strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="btn bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <DollarSign className="w-5 h-5" />
                Start Investing
              </Link>
              <Link
                href="/onboarding"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
              >
                <Target className="w-5 h-5" />
                Take Assessment
              </Link>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Find answers to common questions about DeFi, yield farming, and using the Yieldway platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          
          <div className="text-center mt-12">
            <div className="card p-8 max-w-md mx-auto">
              <h3 className="font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted mb-6">Our team is here to help you succeed</p>
              <button className="btn btn-primary w-full">
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}