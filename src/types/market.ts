// Market data types
export interface Candle {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Symbol {
  symbol: string;
  description: string;
  bid: number;
  ask: number;
  last: number;
  change: number;
  changePercent: number;
  volume: number;
  volumeAvg: number;
  marketCap: number;
  pe: number;
  eps: number;
  eps_estimate_next_quarter: number;
  eps_estimate_next_year: number;
  ex_dividend_date: string;
  dividend_rate: number;
  yield: number;
  fifty_two_week_high: number;
  fifty_two_week_low: number;
  fifty_ma: number;
  two_hundred_ma: number;
  shares_outstanding: number;
  float_shares: number;
  short_float: number;
  short_ratio: number;
  target_price: number;
  recommendations: string;
  earnings_date: string;
  earnings_average: number;
  earnings_low: number;
  earnings_high: number;
  revenue_average: number;
  revenue_low: number;
  revenue_high: number;
  gross_margin: number;
  operating_margin: number;
  profit_margin: number;
  assetType: string;
}

export interface MarketData {
  symbol: string;
  bid: number;
  ask: number;
  spread: number;
  change: number;
  changePercent: number;
  volume: number;
  lastUpdate: number;
}

export interface ChartData {
  symbols: string[];
  timeframe: '1m' | '5m' | '15m' | '30m' | '1h' | '4h' | '1d';
  candles: Record<string, Candle[]>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: number;
}
