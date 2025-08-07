#!/bin/bash

# Yieldway Progress Checker
echo "🚀 YIELDWAY DEVELOPMENT PROGRESS"
echo "================================"
echo ""

# Extract key metrics from PROGRESS.md
if [ -f "PROGRESS.md" ]; then
    echo "📊 CURRENT STATUS:"
    grep "Overall Progress" PROGRESS.md
    echo ""
    
    echo "🎯 ACTIVE PHASE:"
    grep "Project Status" PROGRESS.md
    echo ""
    
    echo "✅ COMPLETED PHASES:"
    grep "✅.*COMPLETED" PROGRESS.md | head -3
    echo ""
    
    echo "🔄 IN PROGRESS:"
    grep "🔄.*IN PROGRESS" PROGRESS.md | head -3
    echo ""
    
    echo "⏳ NEXT UP:"
    grep "⏳.*PENDING" PROGRESS.md | head -3
    echo ""
    
    echo "📈 QUICK STATS:"
    grep "Total Files Created" PROGRESS.md
    grep "Lines of Code" PROGRESS.md
    grep "Smart Contracts" PROGRESS.md
    echo ""
    
    echo "🎯 IMMEDIATE ACTION ITEMS:"
    echo "1. 🔧 Install development environment (Rust + Soroban CLI)"
    echo "2. 🧪 Test contract compilation"
    echo "3. 💰 Run testnet account setup"
    echo "4. ⚡ Implement router deposit logic"
    echo ""
    
    echo "📖 For full details, run: cat PROGRESS.md"
else
    echo "❌ Progress file not found. Please ensure you're in the project root."
fi 