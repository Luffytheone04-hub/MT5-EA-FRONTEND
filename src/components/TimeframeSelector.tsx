interface TimeframeSelectorProps {
  currentTimeframe: string;
  onTimeframeChange: (timeframe: '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '1d') => void;
}

const timeframes = [
  { label: '1M', value: '1m' as const },
  { label: '5M', value: '5m' as const },
  { label: '15M', value: '15m' as const },
  { label: '30M', value: '30m' as const },
  { label: '1H', value: '1h' as const },
  { label: '4H', value: '4h' as const },
  { label: '1D', value: '1d' as const },
];

export function TimeframeSelector({ currentTimeframe, onTimeframeChange }: TimeframeSelectorProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {timeframes.map((tf) => (
        <button
          key={tf.value}
          onClick={() => onTimeframeChange(tf.value)}
          className={`
            px-3 py-2 rounded text-sm font-medium transition-all
            ${currentTimeframe === tf.value
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }
          `}
        >
          {tf.label}
        </button>
      ))}
    </div>
  );
}
