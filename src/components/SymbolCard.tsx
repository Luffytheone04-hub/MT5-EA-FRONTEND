import { TrendingUp, TrendingDown } from 'lucide-react';
import type { MarketData } from '../types/market';

interface SymbolCardProps {
  data: MarketData;
  isSelected?: boolean;
  onClick?: () => void;
}

export function SymbolCard({ data, isSelected = false, onClick }: SymbolCardProps) {
  const isPositive = data.change >= 0;
  const displayChange = Math.abs(data.change).toFixed(2);
  const displayChangePercent = Math.abs(data.changePercent).toFixed(2);

  return (
    <div
      onClick={onClick}
      className={`
        p-4 rounded-lg border transition-all duration-200 cursor-pointer
        ${isSelected
          ? 'bg-blue-900/30 border-blue-500 shadow-lg shadow-blue-500/20'
          : 'bg-gray-800 border-gray-700 hover:border-gray-600 hover:bg-gray-750'
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-white text-lg">{data.symbol}</h3>
        {isPositive ? (
          <TrendingUp className="w-5 h-5 text-green-400" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-400" />
        )}
      </div>

      {/* Prices */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">Bid</p>
          <p className="text-lg font-semibold text-white">${data.bid.toFixed(4)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Ask</p>
          <p className="text-lg font-semibold text-white">${data.ask.toFixed(4)}</p>
        </div>
      </div>

      {/* Change */}
      <div className={`
        px-3 py-2 rounded-lg text-center
        ${isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}
      `}>
        <p className={`text-sm font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : '-'}{displayChange} ({displayChangePercent}%)
        </p>
      </div>

      {/* Volume */}
      <div className="mt-3 text-xs text-gray-400">
        <p>Vol: {(data.volume / 1000000).toFixed(2)}M</p>
      </div>
    </div>
  );
}
