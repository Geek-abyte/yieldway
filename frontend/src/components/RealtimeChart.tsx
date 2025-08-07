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
    <div className="space-y-4">
      {/* Robinhood-style timeframe selector */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex space-x-1">
          {timeframes.map((tf) => (
            <button
              key={tf.value}
              onClick={() => setTimeframe(tf.value as any)}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                timeframe === tf.value
                  ? 'text-gray-900 bg-gray-100'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>
        
        {/* Performance indicator */}
        {Math.abs(change) > 0 && (
          <div className={`text-sm font-medium ${
            change >= 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {change >= 0 ? '+' : ''}{change.toFixed(2)}%
          </div>
        )}
      </div>

      {/* Chart - Robinhood Style */}
      <div className="h-80">
        {isLoading ? (
          <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
              Loading chart data...
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="combinedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: '#9CA3AF' }}
                hide={timeframe === '1h' || timeframe === '24h'}
              />
              <YAxis 
                domain={['dataMin - 0.5', 'dataMax + 0.5']}
                axisLine={false}
                tickLine={false}
                tick={false}
                width={0}
              />
              
              <Area
                type="monotone"
                dataKey="combined"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#combinedGradient)"
                dot={false}
                activeDot={{ r: 4, stroke: '#10b981', strokeWidth: 2, fill: '#fff' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Current APY display */}
      <div className="text-center pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-600">Current APY</div>
        <div className="text-lg font-semibold text-green-600">
          {currentAPY.toFixed(2)}%
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