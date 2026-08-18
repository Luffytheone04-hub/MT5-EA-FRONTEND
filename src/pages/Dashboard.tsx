import { useEffect } from 'react';
import { useMarketStore } from '../hooks/useMarketStore';
import { Header } from '../components/Header';
import { SymbolCard } from '../components/SymbolCard';

export function Dashboard() {
  const {
    symbols,
    selectedSymbol,
    marketData,
    loading,
    error,
    initializeSymbols,
    selectSymbol,
  } = useMarketStore();

  useEffect(() => {
    initializeSymbols();
  }, [initializeSymbols]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Market Overview Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Market Overview</h2>
          {loading && symbols.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {symbols.map((symbol) => (
                <SymbolCard
                  key={symbol.symbol}
                  data={
                    marketData[symbol.symbol] || {
                      symbol: symbol.symbol,
                      bid: 0,
                      ask: 0,
                      spread: 0,
                      change: 0,
                      changePercent: 0,
                      volume: 0,
                      lastUpdate: Date.now(),
                    }
                  }
                  isSelected={selectedSymbol === symbol.symbol}
                  onClick={() => selectSymbol(symbol.symbol)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
