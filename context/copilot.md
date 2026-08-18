You are building the frontend for an MT5 trading dashboard.

THIS IS A FRONTEND-ONLY PROJECT.

The backend already exists and is deployed at:

https://scoldsjobforea.onrender.com

The backend repository/API documentation is separate from this frontend repository.

Do NOT:
- rebuild the backend
- create another backend
- create another database
- modify the MT5 EA
- invent fake trading data
- create mock production functionality
- add unnecessary authentication infrastructure
- use Replit
- use Java
- expose BACKEND_API_KEY in the frontend

==================================================
PRIMARY DESIGN REQUIREMENT
==================================================

The attached/reference video is the PRIMARY UI/UX DESIGN TARGET.

The finished application MUST look and behave like the interface shown in that video.

Do not interpret the video as vague inspiration.

Study the reference carefully and reproduce its:
- overall composition
- visual hierarchy
- spacing
- typography
- navigation structure
- card/container treatment
- chart placement
- trading information density
- status indicators
- tables
- buttons
- controls
- animations
- transitions
- responsive behavior
- dark visual language
- depth/layering
- glass/metallic surfaces where present
- background treatment
- micro-interactions

Do not make a generic "modern trading dashboard."

Do not make a generic SaaS dashboard.

Do not make a typical Tailwind admin template.

The reference video should be immediately recognizable as the design direction when someone compares the finished frontend against it.

Where the reference contains visual elements that cannot be reproduced literally, recreate their visual effect and interaction using CSS, GSAP, Canvas, Three.js, SVG, or appropriate React components.

==================================================
TECHNOLOGY
==================================================

Use:

- React
- TypeScript
- Vite
- Tailwind CSS where useful
- GSAP
- Three.js where appropriate
- Lucide React or another clean icon library
- A proper financial charting library for candlestick/market charts
- vite-plugin-pwa

Keep dependencies reasonable.

Do not add libraries merely because they exist.

==================================================
REFERENCE ANALYSIS
==================================================

Before writing the UI:

1. Inspect the existing repository.
2. Inspect the reference video carefully.
3. Break the reference interface into:
   - global layout
   - navigation
   - header
   - dashboard sections
   - market/chart area
   - signal area
   - positions
   - account information
   - status information
   - controls
   - mobile behavior
4. Determine which parts should be reusable React components.
5. Build the visual system before filling the application with data.

Do not start by generating generic cards.

==================================================
APPLICATION
==================================================

Build a professional MT5 trading dashboard/PWA.

Primary sections should include:

- Dashboard
- Signals
- Positions
- Market
- EA Status
- Settings

Use the reference video to determine how these should actually be presented.

The Dashboard is the primary experience.

==================================================
REAL BACKEND
==================================================

Backend:

https://scoldsjobforea.onrender.com

The existing backend contract is authoritative.

Before implementing API calls, inspect the backend documentation/API contract available in the project/context.

Use the actual endpoint names and response structures.

Do NOT invent API endpoints.

Expected EA data includes:

Signals:
- symbol
- timeframe
- direction
- score
- reason
- risk percentage
- take-profit RR
- source
- timestamp

Positions:
- ticket
- symbol
- direction
- volume
- open price
- current price
- stop loss
- take profit
- profit
- swap
- magic number
- open time

Market:
- symbol
- bid
- ask
- spread
- candles
- OHLC
- volume
- M1/M5/M15 data

Heartbeat:
- EA status
- account
- symbol
- magic number
- trading enabled
- backend configured
- terminal build
- timestamp

==================================================
LIVE DATA
==================================================

The dashboard must consume REAL backend data.

Do not populate the interface with fake prices, fake positions, fake signals, fake balances, or fake charts.

If the backend has no data:

show a polished empty state.

Example:

"Waiting for EA data"

If the API is unavailable:

show a proper connection state.

Do not pretend the system is live.

Implement lightweight polling appropriate for a trading dashboard.

Avoid unnecessarily aggressive requests.

Show:
- last update
- connection status
- backend status
- EA heartbeat freshness

==================================================
CHART
==================================================

The market chart is one of the most important parts of the UI.

It should feel like the chart shown in the reference video.

Use actual backend candle data.

Support available:
- M1
- M5
- M15

Include appropriate:
- candlesticks
- price scale
- time scale
- current price
- OHLC information
- volume if available
- timeframe selector
- crosshair/tooltips if supported

Do not create fake historical candles.

If the backend returns insufficient data, handle it elegantly.

==================================================
ANIMATION
==================================================

Use GSAP intentionally.

Animations should reproduce the feeling of the reference video.

Use animation for things such as:
- initial dashboard reveal
- navigation transitions
- panel entrance
- signal appearance
- status transitions
- numerical value changes
- chart transitions
- hover interactions
- active navigation state
- loading transitions

Animations should be subtle and fast enough for a trading interface.

Do not turn the UI into an animated advertisement.

Three.js may be used for:
- atmospheric background
- subtle 3D visual treatment
- particles
- depth effects

Only use it where it contributes to the reference aesthetic.

==================================================
RESPONSIVE UX
==================================================

Desktop and mobile are both first-class experiences.

Desktop should closely reproduce the reference.

Mobile should preserve the same visual language rather than simply shrinking the desktop layout.

Implement:
- mobile navigation
- responsive chart
- responsive position/signal layouts
- touch-friendly controls
- appropriate information prioritization
- compact status indicators

The application must work particularly well on Android.

==================================================
PWA
==================================================

Turn the frontend into a proper installable PWA.

Implement:
- manifest
- icons
- theme color
- standalone display mode
- service worker
- appropriate static asset caching
- offline application shell

Do NOT cache live trading data as if it were current.

The application must clearly distinguish:
- live data
- stale data
- unavailable data

When installed on Android, it should feel like a dedicated trading application.

==================================================
AUTHENTICATION
==================================================

The dashboard API uses dashboard authentication.

Do NOT expose:

BACKEND_API_KEY

The EA's backend key belongs only to MT5.

Do not commit secrets.

If DASHBOARD_API_KEY is required directly by the browser under the current backend architecture, do not pretend that a browser environment variable is secret.

Implement the cleanest approach compatible with the existing backend and document the security limitation if one exists.

==================================================
CODE QUALITY
==================================================

Use a clean component architecture.

Suggested structure:

src/
  components/
  layouts/
  pages/
  hooks/
  lib/
    api/
  types/
  utils/
  styles/

Create reusable components for:
- navigation
- market chart
- signal display
- position display
- metric display
- status indicators
- loading states
- empty states
- error states
- notifications

Do not duplicate large UI blocks.

Use TypeScript properly.

Avoid `any` unless genuinely unavoidable.

==================================================
VISUAL QUALITY BAR
==================================================

This is the most important instruction:

DO NOT STOP AT "FUNCTIONAL."

The application must look polished enough to show directly to the client.

Compare the implementation against the reference video repeatedly while building.

If a section technically works but visually does not resemble the reference, improve the visual implementation.

Pay particular attention to:
- exact spacing relationships
- panel proportions
- typography hierarchy
- border treatment
- shadows
- background depth
- chart prominence
- information density
- navigation behavior
- animation timing
- mobile composition

Do not use generic Tailwind defaults.

Do not use placeholder lorem ipsum.

Do not use emoji.

Do not add random gradients.

==================================================
ENVIRONMENT
==================================================

Create:

.env.example

with:

VITE_API_URL=https://scoldsjobforea.onrender.com

Do not commit secrets.

==================================================
DEPLOYMENT
==================================================

The frontend must build successfully for production.

Ensure:

npm install
npm run build

work correctly.

Configure it for deployment as a static React/Vite application on Render.

Ensure SPA routes work after deployment.

Ensure PWA assets are included in the production build.

==================================================
VERIFICATION
==================================================

Before declaring the work finished:

1. Run TypeScript checks.
2. Run the production build.
3. Test all API requests.
4. Verify no fake trading data remains.
5. Verify the dashboard handles empty backend data.
6. Verify API errors are handled.
7. Verify mobile layout.
8. Verify PWA installation requirements.
9. Verify BACKEND_API_KEY is nowhere in frontend source.
10. Check the UI against the reference video again.
11. Fix visual inconsistencies instead of simply documenting them.

At the end, provide:
- files changed
- API endpoints used
- environment variables
- build command
- deployment instructions
- remaining limitations, if any

Do not modify backend code unless a concrete API incompatibility prevents the frontend from functioning.
