/**
 * Default watchlist of trading symbols.
 * These symbols will be displayed in the dashboard market overview.
 * The frontend will request market data for each symbol from:
 * GET /api/v1/dashboard/market/:symbol
 */

export const DEFAULT_WATCHLIST = [
  'EURUSD',
  'GBPUSD',
  'USDJPY',
  'AUDUSD',
  'NZDUSD',
  'USDCAD',
  'USDCHF',
  'EURGBP',
  'EURJPY',
  'GBPJPY',
];

export const DEFAULT_SYMBOL = 'EURUSD';
