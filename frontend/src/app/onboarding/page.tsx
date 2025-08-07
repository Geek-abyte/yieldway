'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Wallet, 
  TrendingUp,
  Shield, 
  Target,
  DollarSign,
  ArrowRight
} from 'lucide-react';

interface UserProfile {
  email: string;
  experience: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  investmentAmount: string;
  walletConnected: boolean;
}

const steps = [
  {
    id: 'profile',
    title: 'Investment Profile',
    description: 'Help us understand your experience and objectives',
    icon: Target
  },
  {
    id: 'risk',
    title: 'Risk Assessment',
    description: 'Determine your risk tolerance and preferences',
    icon: Shield
  },
  {
    id: 'allocation',
    title: 'Portfolio Strategy',
    description: 'Review your recommended allocation strategy',
    icon: TrendingUp
  },
  {
    id: 'wallet',
    title: 'Connect Wallet',
    description: 'Secure connection to begin investing',
    icon: Wallet
  }
];

// Stripe-style step indicator
const StepIndicator = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => (
  <div className="flex items-center justify-center space-x-2">
    {Array.from({ length: totalSteps }, (_, index) => (
      <div key={index} className="flex items-center">
        <motion.div 
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
            index <= currentStep
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-500'
          }`}
          initial={false}
          animate={{ 
            scale: index === currentStep ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
        </motion.div>
        {index < totalSteps - 1 && (
          <motion.div 
            className={`w-12 h-0.5 mx-2 transition-all duration-500 ${
              index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: index < currentStep ? 1 : 0.3 }}
          />
        )}
      </div>
    ))}
  </div>
);

// Stripe-style selection card
const SelectionCard = ({ 
  title, 
  description, 
  isSelected, 
  onClick,
  icon: Icon 
}: {
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  icon?: any;
}) => (
  <motion.button
    onClick={onClick}
    className={`w-full p-6 text-left rounded-lg border transition-all duration-200 ${
      isSelected
        ? 'border-blue-600 bg-blue-50 shadow-sm'
        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white'
    }`}
    whileHover={{ y: -1 }}
    whileTap={{ scale: 0.99 }}
  >
    <div className="flex items-start gap-4">
      {Icon && (
        <div 
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
            isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div className="flex-1">
        <div className={`font-semibold mb-1 transition-colors ${
          isSelected ? 'text-blue-900' : 'text-gray-900'
        }`}>{title}</div>
        <div className="text-sm text-gray-600 leading-relaxed">{description}</div>
      </div>
      {isSelected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center"
        >
          <Check className="w-3 h-3 text-white" />
        </motion.div>
      )}
    </div>
  </motion.button>
);

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<Partial<UserProfile>>({
    email: typeof window !== 'undefined' ? localStorage.getItem('yieldway_signup_email') || '' : '',
    goals: [],
    walletConnected: false
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Save profile and redirect to dashboard
      localStorage.setItem('yieldway_user_profile', JSON.stringify(profile));
      window.location.href = '/dashboard';
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 0:
        return profile.email && profile.experience;
      case 1:
        return profile.riskTolerance && profile.investmentAmount;
      case 2:
        return true; // Review step is always complete
      case 3:
        return profile.walletConnected;
      default:
        return false;
    }
  };

  const connectWallet = async () => {
    try {
      if (typeof window !== 'undefined' && (window as any).freighterApi) {
        await (window as any).freighterApi.requestAccess();
        setProfile({ ...profile, walletConnected: true });
      } else {
        alert('Please install Freighter wallet extension');
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const getRecommendedStrategy = () => {
    if (!profile.riskTolerance) return null;
    
    const strategies = {
      conservative: {
        name: 'Capital Preservation',
        allocation: { defindex: 80, soroswap: 20 },
        expectedReturn: '15-18%',
        description: 'Focus on stable yields with minimal volatility and maximum capital protection'
      },
      moderate: {
        name: 'Balanced Growth',
        allocation: { defindex: 65, soroswap: 35 },
        expectedReturn: '18-22%',
        description: 'Balanced approach optimizing risk-adjusted returns with moderate exposure'
      },
      aggressive: {
        name: 'Maximum Yield',
        allocation: { defindex: 50, soroswap: 50 },
        expectedReturn: '22-25%',
        description: 'Higher risk tolerance for maximum yield potential and capital growth'
      }
    };
    
    return strategies[profile.riskTolerance];
  };

  const experienceOptions = [
          {
            value: 'beginner',
      title: 'Beginner', 
      description: 'New to DeFi and yield farming',
      icon: Target
          },
          {
            value: 'intermediate',
      title: 'Intermediate', 
      description: 'Some experience with DeFi protocols',
      icon: TrendingUp
          },
          {
            value: 'advanced',
      title: 'Advanced', 
      description: 'Experienced DeFi user and yield farmer',
      icon: Shield
    }
  ];

  const riskOptions = [
          {
            value: 'conservative',
            title: 'Conservative',
      description: 'Prioritize capital preservation over high returns',
      icon: Shield
          },
          {
            value: 'moderate',
            title: 'Moderate',
      description: 'Balance between growth and security',
      icon: TrendingUp
          },
          {
            value: 'aggressive',
            title: 'Aggressive',
      description: 'Willing to accept higher risk for maximum returns',
      icon: Target
    }
  ];

  const investmentAmounts = ['$100', '$500', '$1,000', '$5,000+'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Stripe Style */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Yieldway</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500">
                Step {currentStep + 1} of {steps.length}
              </div>
              <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="h-2 bg-gradient-primary rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress - Redesigned */}
      <div className="bg-surface border-b border-border py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
          
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                {React.createElement(steps[currentStep].icon, { className: "w-6 h-6 text-white" })}
              </div>
              <h2 className="text-2xl font-bold text-display">{steps[currentStep].title}</h2>
            </div>
            <p className="text-lg text-muted max-w-2xl mx-auto">{steps[currentStep].description}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Step 1: Profile */}
            {currentStep === 0 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold mb-4 text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profile.email || ''}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="input input-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-6 text-foreground">
                    DeFi Experience Level
                  </label>
                  <div className="space-y-3">
                    {experienceOptions.map((option) => (
                      <SelectionCard
                        key={option.value}
                        title={option.title}
                        description={option.description}
                        isSelected={profile.experience === option.value}
                        onClick={() => setProfile({ ...profile, experience: option.value as any })}
                        icon={option.icon}
                      />
                    ))}
              </div>
                </div>
              </div>
            )}

            {/* Step 2: Risk Assessment */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium mb-4">
                    Risk Tolerance
                  </label>
                  <div className="space-y-3">
                    {riskOptions.map((option) => (
                      <SelectionCard
                        key={option.value}
                        title={option.title}
                        description={option.description}
                        isSelected={profile.riskTolerance === option.value}
                        onClick={() => setProfile({ ...profile, riskTolerance: option.value as any })}
                        icon={option.icon}
                      />
        ))}
      </div>
      </div>
      
                <div>
                  <label className="block text-sm font-medium mb-4">
                    Initial Investment Amount
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {investmentAmounts.map((amount) => (
          <button
            key={amount}
                        onClick={() => setProfile({ ...profile, investmentAmount: amount })}
                        className={`p-4 rounded-lg border-2 transition-all font-medium ${
                          profile.investmentAmount === amount
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border hover:border-border-strong'
                        }`}
                      >
                        {amount}
          </button>
        ))}
      </div>
                </div>
              </div>
            )}

            {/* Step 3: Strategy Review */}
            {currentStep === 2 && (
              <div className="space-y-8">
                {getRecommendedStrategy() && (
                  <div className="card p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {getRecommendedStrategy()!.name}
                      </h3>
                      <p className="text-muted">
                        {getRecommendedStrategy()!.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-4 bg-surface rounded-lg">
                        <div className="text-sm text-muted mb-1">Expected Annual Return</div>
                        <div className="text-2xl font-bold text-success">
                          {getRecommendedStrategy()!.expectedReturn}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-surface rounded-lg">
                        <div className="text-sm text-muted mb-1">Risk Level</div>
                        <div className="text-2xl font-bold capitalize">
                          {profile.riskTolerance}
          </div>
        </div>
      </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Protocol Allocation</h4>
                      
                      {/* Allocation visualization */}
                      <div className="flex h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="bg-primary h-full" 
                          style={{ width: `${getRecommendedStrategy()!.allocation.defindex}%` }}
                        />
                        <div 
                          className="bg-accent h-full" 
                          style={{ width: `${getRecommendedStrategy()!.allocation.soroswap}%` }}
                        />
      </div>
      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-primary rounded-full" />
                          <span className="text-sm">DeFindex</span>
                          <span className="font-semibold ml-auto">
                            {getRecommendedStrategy()!.allocation.defindex}%
                          </span>
          </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-accent rounded-full" />
                          <span className="text-sm">Soroswap</span>
                          <span className="font-semibold ml-auto">
                            {getRecommendedStrategy()!.allocation.soroswap}%
                          </span>
          </div>
        </div>
            </div>
          </div>
        )}
      </div>
            )}

            {/* Step 4: Wallet Connection */}
            {currentStep === 3 && (
              <div className="text-center space-y-8">
                {!profile.walletConnected ? (
                  <div className="card p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Wallet className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Connect Your Wallet</h3>
                    <p className="text-muted mb-8">
                      Connect your Freighter wallet to begin investing with your personalized strategy.
                    </p>
                    <button
                      onClick={connectWallet}
                      className="btn btn-primary btn-lg mb-6"
                    >
                      <Wallet className="w-5 h-5" />
                      Connect Freighter Wallet
                    </button>
                    <p className="text-sm text-muted">
                      Don't have Freighter? 
        <a
          href="https://freighter.app"
          target="_blank"
          rel="noopener noreferrer"
                        className="text-primary hover:underline ml-1"
        >
                        Download here
        </a>
                    </p>
      </div>
                ) : (
                  <div className="card p-8">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-success" />
      </div>
                    <h3 className="text-xl font-semibold text-success mb-4">Wallet Connected Successfully!</h3>
                    <p className="text-muted mb-8">
                      You're all set! Your portfolio is ready to start generating yields with your personalized strategy.
                    </p>
                    <div className="bg-surface p-4 rounded-lg">
                      <div className="text-sm text-muted mb-1">Ready to start with</div>
                      <div className="text-lg font-semibold">{getRecommendedStrategy()?.name}</div>
          </div>
        </div>
                )}
      </div>
            )}
      
            {/* Navigation - Redesigned */}
            <div className="flex justify-between pt-12">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="btn btn-secondary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>
              
              <button
                onClick={handleNext}
                disabled={!isStepComplete()}
                className="btn btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {currentStep === steps.length - 1 ? (
                  <>
                    Complete Setup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                ) : (
                  <>
                    Continue
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
            </motion.div>
          </AnimatePresence>
      </main>
    </div>
  );
}