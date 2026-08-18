import { create } from 'zustand';
import apiClient from '../config/api';
import { DEFAULT_WATCHLIST, DEFAULT_SYMBOL } from '../config/watchlist';
import type { Symbol, MarketData } from '../types/market';

interface MarketStore {
  symbols: Symbol[];
  selectedSymbol: string | null;
  marketData: Record<string, MarketData>;
  loading: boolean;
  error: string | null;
  
  // Actions
  initializeSymbols: () => void;
  selectSymbol: (symbol: string) => void;
  fetchMarketData: (symbol: string) => Promise<void>;
  clearError: () => void;
}

export const useMarketStore = create<MarketStore>((set, get) => ({
  symbols: [],
  selectedSymbol: null,
  marketData: {},
  loading: false,
  error: null,

  initializeSymbols: () => {
    // Initialize with default watchlist
    const symbols: Symbol[] = DEFAULT_WATCHLIST.map(symbol => ({
      symbol,
      description: symbol,
      bid: 0,
      ask: 0,
      last: 0,
      change: 0,
      changePercent: 0,
      volume: 0,
      volumeAvg: 0,
      marketCap: 0,
      pe: 0,
      eps: 0,
      eps_estimate_next_quarter: 0,
      eps_estimate_next_year: 0,
      ex_dividend_date: '',
      dividend_rate: 0,
      yield: 0,
      fifty_two_week_high: 0,
      fifty_two_week_low: 0,
      fifty_ma: 0,
      two_hundred_ma: 0,
      shares_outstanding: 0,
      float_shares: 0,
      short_float: 0,
      short_ratio: 0,
      target_price: 0,
      recommendations: '',
      earnings_date: '',
      earnings_average: 0,
      earnings_low: 0,
      earnings_high: 0,
      revenue_average: 0,
      revenue_low: 0,
      revenue_high: 0,
      gross_margin: 0,
      operating_margin: 0,
      profit_margin: 0,
      assetType: 'forex',
    }));
    set({ symbols });
    // Auto-select default symbol and fetch its data
    set({ selectedSymbol: DEFAULT_SYMBOL });
    get().fetchMarketData(DEFAULT_SYMBOL);
  },

  selectSymbol: (symbol: string) => {
    set({ selectedSymbol: symbol });
    get().fetchMarketData(symbol);
  },

  fetchMarketData: async (symbol: string) => {
    set({ loading: true, error: null });
    try {
      const response = await apiClient.get(`/api/v1/dashboard/market/${symbol}`);
      const data = response.data.data || response.data;
      
      set((state) => ({
        marketData: {
          ...state.marketData,
          [symbol]: {
            symbol,
            bid: data.bid || 0,
            ask: data.ask || 0,
            spread: (data.ask || 0) - (data.bid || 0),
            change: data.change || 0,
            changePercent: data.changePercent || 0,
            volume: data.volume || 0,
            lastUpdate: Date.now(),
          },
        },
      }));
    } catch (error) {
      let errorMessage = 'Failed to load market data';
      
      // Check if it's an Axios error with response
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as any;
        if (axiosError.response?.status === 401) {
          const dashboardApiKey = import.meta.env.VITE_DASHBOARD_API_KEY;
          if (!dashboardApiKey) {
            errorMessage = 'API Key not configured. Set VITE_DASHBOARD_API_KEY environment variable.';
          } else {
            errorMessage = 'Authentication failed. Invalid API key.';
          }
        } else if (axiosError.response?.status === 404) {
          errorMessage = `Market data not available for ${symbol}`;
        } else if (axiosError.response?.status) {
          errorMessage = `API Error ${axiosError.response.status}: ${axiosError.response.data?.message || 'Unknown error'}`;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
