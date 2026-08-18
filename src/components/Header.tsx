import { TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">MT5 Dashboard</h1>
              <p className="text-xs text-gray-400">Real-time Trading</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden sm:flex items-center gap-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="/charts" className="text-gray-300 hover:text-white transition-colors">
              Charts
            </a>
            <a href="/watchlist" className="text-gray-300 hover:text-white transition-colors">
              Watchlist
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="sm:hidden pb-4 border-t border-gray-700">
            <a href="/" className="block py-2 text-gray-300 hover:text-white">
              Dashboard
            </a>
            <a href="/charts" className="block py-2 text-gray-300 hover:text-white">
              Charts
            </a>
            <a href="/watchlist" className="block py-2 text-gray-300 hover:text-white">
              Watchlist
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
