# MT5 Trading Dashboard Frontend

A modern, real-time trading dashboard frontend for MT5, built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Real-time Market Data**: Live price updates and trading statistics from the backend
- **Interactive Charts**: Responsive price charts with multiple timeframes (1m, 5m, 15m, 30m, 1h, 4h, 1d)
- **Market Overview**: Grid-based symbol cards showing bid/ask prices and market change
- **PWA Support**: Installable as a progressive web app on mobile and desktop
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Dark Theme**: Professional dark theme optimized for trader comfort

## Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview  # Preview production build locally
```

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=https://scoldsjobforea.onrender.com
```

**Important**: Never commit the `.env` file. Use `.env.example` for team collaboration.

## Project Structure

```
src/
├── pages/           # Page components (Dashboard, Charts, etc.)
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks (useMarketStore)
├── config/          # Configuration files (API client)
├── types/           # TypeScript type definitions
└── App.tsx          # Root component
```

## Key Technologies

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Zustand**: Lightweight state management
- **Recharts**: Interactive charts
- **Lucide React**: SVG icons
- **Axios**: HTTP client
- **Vite PWA Plugin**: Progressive Web App support

## API Integration

The frontend connects to a backend API running at `https://scoldsjobforea.onrender.com`. Key endpoints:

- `GET /api/symbols` - Get available trading symbols
- `GET /api/quote/:symbol` - Get current market data for a symbol
- `GET /api/candles/:symbol?timeframe=1h&limit=100` - Get OHLC candle data

API responses are cached and managed by Zustand store for optimal performance.

## Development

### Running Tests

```bash
npm run test
```

### Building

```bash
npm run build      # Production build with PWA support
npm run preview    # Preview production build
```

### Code Quality

The project uses:
- **TypeScript** for type safety
- **ESLint** for code linting

## Mobile Support

The application is fully optimized for mobile devices with:
- Touch-friendly controls and spacing
- Responsive grid layouts
- Mobile-optimized navigation
- PWA installation support on Android and iOS
- Offline support via service worker

## PWA Features

Install the app on your device:

1. **Desktop**: Click the install icon in the address bar
2. **Mobile**: Use "Add to Home Screen" from the share menu

The app includes:
- Service worker for offline support
- Manifest for installability
- App icons and theme colors
- Static asset caching strategy

## Performance

- Lazy-loaded charts and market data
- Code splitting for optimized bundle size
- Efficient state management with Zustand
- CSS-in-JS optimization with Tailwind
- Image optimization for icons

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers on iOS 14+ and Android 10+

## Troubleshooting

### API Connection Issues
- Verify `VITE_API_URL` is correctly set in `.env`
- Check backend is running at the specified URL
- Open DevTools (F12) to see network requests

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf dist .vite`

### Chart Not Displaying
- Check browser console for errors (F12)
- Verify API endpoint returns valid OHLC candle data
- Ensure timeframe parameter matches backend format

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build and verify with `npm run build`
5. Submit a pull request

## License

Proprietary - All rights reserved

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
