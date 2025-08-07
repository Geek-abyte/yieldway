'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, Clock, BarChart3, PieChart } from 'lucide-react';

interface ChartData {
  time: string;
  timestamp: number;
  soroswap: number;
  defindex: number;
  combined: number;
}

interface RealtimeChartProps {
  currentAPY?: number;
}

export default function RealtimeChart({ currentAPY = 20.52 }: RealtimeChartProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [timeframe, setTimeframe] = useState<'1h' | '24h' | '7d' | '30d'>('24h');
  const [isLoading, setIsLoading] = useState(true);

  // Generate mock historical data
  useEffect(() => {
    setIsLoading(true);
    
    const generateData = () => {
      const now = Date.now();
      let points: number;
      let interval: number;
      
      switch (timeframe) {
        case '1h':
          points = 12;
          interval = 5 * 60 * 1000; // 5 minutes
          break;
        case '24h':
          points = 24;
          interval = 60 * 60 * 1000; // 1 hour
          break;
        case '7d':
          points = 7;
          interval = 24 * 60 * 60 * 1000; // 1 day
          break;
        case '30d':
          points = 30;
          interval = 24 * 60 * 60 * 1000; // 1 day
          break;
        default:
          points = 24;
          interval = 60 * 60 * 1000;
      }
      
      const data: ChartData[] = [];
      
      for (let i = points - 1; i >= 0; i--) {
        const timestamp = now - (i * interval);
        const baseAPY = currentAPY;
        
        // Add some realistic variance
        const variance = 0.5; // 0.5% variance
        const soroswapAPY = Math.max(0, baseAPY * 0.6 + (Math.random() - 0.5) * variance);
        const defindexAPY = Math.max(0, baseAPY * 1.4 + (Math.random() - 0.5) * variance);
        const combinedAPY = Math.max(0, (soroswapAPY * 0.3 + defindexAPY * 0.7));
        
        data.push({
          time: timeframe === '1h' || timeframe === '24h' 
            ? new Date(timestamp).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })
            : new Date(timestamp).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
              }),
          timestamp,
          soroswap: parseFloat(soroswapAPY.toFixed(2)),
          defindex: parseFloat(defindexAPY.toFixed(2)),
          combined: parseFloat(combinedAPY.toFixed(2))
        });
      }
      
      return data;
    };
    
    // Simulate API loading time
    setTimeout(() => {
      setChartData(generateData());
      setIsLoading(false);
    }, 500);
  }, [timeframe, currentAPY]);

  const timeframes = [
    { value: '1h', label: '1H' },
    { value: '24h', label: '24H' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-4 shadow-lg">
          <p className="text-sm font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted capitalize">{entry.dataKey}:</span>
              <span className="font-semibold">{entry.value}%</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const calculateChange = () => {
    if (chartData.length < 2) return 0;
    const current = chartData[chartData.length - 1].combined;
    const previous = chartData[chartData.length - 2].combined;
    return ((current - previous) / previous) * 100;
  };

  const change = calculateChange();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-display">Performance Chart</h3>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted font-medium">Current APY:</span>
              <span className="font-bold text-success text-lg">{currentAPY}%</span>
              {Math.abs(change) > 0 && (
                <motion.span 
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                    change >= 0 ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <TrendingUp className={`w-3 h-3 ${change < 0 ? 'rotate-180' : ''}`} />
                  {Math.abs(change).toFixed(2)}%
                </motion.span>
              )}
              <div className="status-dot status-dot-success">
                <span className="text-xs font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex bg-surface rounded-xl p-1 border border-border/50">
          {timeframes.map((tf) => (
            <motion.button
              key={tf.value}
              onClick={() => setTimeframe(tf.value as any)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                timeframe === tf.value
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-muted hover:text-foreground hover:bg-background/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tf.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        {isLoading ? (
          <div className="w-full h-full bg-surface rounded-lg flex items-center justify-center">
            <div className="flex items-center gap-2 text-muted">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              Loading chart data...
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="combinedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="defindexGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="soroswapGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#737373' }}
              />
              <YAxis 
                domain={['dataMin - 0.5', 'dataMax + 0.5']}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#737373' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip />} />
              
              <Area
                type="monotone"
                dataKey="combined"
                stroke="#2563eb"
                strokeWidth={3}
                fill="url(#combinedGradient)"
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
              />
              
              <Line
                type="monotone"
                dataKey="defindex"
                stroke="#8b5cf6"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
              
              <Line
                type="monotone"
                dataKey="soroswap"
                stroke="#059669"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span className="text-sm font-medium">Combined APY</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-1 bg-accent" />
          <span className="text-sm text-muted">DeFindex</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-1 bg-success" />
          <span className="text-sm text-muted">Soroswap</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div 
          className="metric-card bg-gradient-to-br from-success/5 to-success/10 border border-success/20"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-sm text-muted font-semibold mb-2">24h High</div>
          <div className="text-2xl font-bold text-success">
            {Math.max(...chartData.map(d => d.combined)).toFixed(2)}%
          </div>
        </motion.div>
        <motion.div 
          className="metric-card bg-gradient-to-br from-error/5 to-error/10 border border-error/20"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-sm text-muted font-semibold mb-2">24h Low</div>
          <div className="text-2xl font-bold text-error">
            {Math.min(...chartData.map(d => d.combined)).toFixed(2)}%
          </div>
        </motion.div>
        <motion.div 
          className="metric-card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-sm text-muted font-semibold mb-2">Average</div>
          <div className="text-2xl font-bold text-primary">
            {(chartData.reduce((acc, d) => acc + d.combined, 0) / chartData.length).toFixed(2)}%
          </div>
        </motion.div>
      </div>
    </div>
  );
}