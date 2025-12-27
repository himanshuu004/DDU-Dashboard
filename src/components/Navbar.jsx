import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ currentPage, onPageChange }) => {
  const { isDark, toggleTheme } = useTheme();
  const navItems = [
    { id: 'home', label: 'Home', path: 'home' },
    { id: 'district', label: 'District-wise Insights', path: 'district' }
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="cursor-pointer group" onClick={() => onPageChange('home')}>
            <img 
              src="/logo.png" 
              alt="Uttarakhand Logo" 
              className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              style={{
                imageRendering: 'auto',
                filter: 'contrast(1.15) brightness(1.08) saturate(1.1)',
                WebkitFilter: 'contrast(1.15) brightness(1.08) saturate(1.1)',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              }}
              loading="eager"
              decoding="async"
              width="auto"
              height="64"
              onError={(e) => {
                // Fallback if image doesn't load
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.path)}
                className={`relative px-4 py-2 rounded-lg font-medium text-base transition-all duration-300 ${
                  currentPage === item.path
                    ? 'text-[#7053bc] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30'
                    : 'text-black dark:text-gray-200 hover:text-[#7053bc] dark:hover:text-purple-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
                {currentPage === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7053bc] dark:bg-purple-400 rounded-full"></span>
                )}
                <span className="absolute inset-0 rounded-lg bg-govBlue-100 dark:bg-purple-800/20 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </button>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
              className="p-2 rounded-lg text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.path);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
                className={`px-4 py-2 rounded-lg font-medium text-left transition-all duration-300 ${
                  currentPage === item.path
                    ? 'text-[#7053bc] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-[#7053bc] dark:border-purple-400'
                    : 'text-black dark:text-gray-200 hover:text-[#7053bc] dark:hover:text-purple-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

