import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Candle } from '../types/market';

interface ChartProps {
  data: Candle[];
  symbol: string;
  isLoading?: boolean;
}

export function Chart({ data, symbol, isLoading = false }: ChartProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-800 rounded-lg text-gray-400">
        No data available for {symbol}
      </div>
    );
  }

  const chartData = data.map((candle) => ({
    time: new Date(candle.time).toLocaleTimeString(),
    close: candle.close,
    open: candle.open,
    high: candle.high,
    low: candle.low,
    volume: candle.volume,
  }));

  const minPrice = Math.min(...data.map((c) => c.low)) * 0.99;
  const maxPrice = Math.max(...data.map((c) => c.high)) * 1.01;

  return (
    <div className="chart-fade bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">{symbol} Price Chart</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
          <XAxis 
            dataKey="time" 
            stroke="#9ca3af" 
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            domain={[minPrice, maxPrice]} 
            stroke="#9ca3af"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#f3f4f6',
            }}
          />
          <Area 
            type="monotone" 
            dataKey="close" 
            stroke="#3b82f6" 
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorClose)" 
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gray-700 p-3 rounded">
          <p className="text-xs text-gray-400">High</p>
          <p className="font-semibold text-white">${Math.max(...data.map((c) => c.high)).toFixed(4)}</p>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <p className="text-xs text-gray-400">Low</p>
          <p className="font-semibold text-white">${Math.min(...data.map((c) => c.low)).toFixed(4)}</p>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <p className="text-xs text-gray-400">Open</p>
          <p className="font-semibold text-white">${data[0]?.open.toFixed(4) || '—'}</p>
        </div>
        <div className="bg-gray-700 p-3 rounded">
          <p className="text-xs text-gray-400">Close</p>
          <p className="font-semibold text-white">${data[data.length - 1]?.close.toFixed(4) || '—'}</p>
        </div>
      </div>
    </div>
  );
}
