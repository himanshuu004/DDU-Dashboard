import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage - default to light mode
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    }
    return false;
  });

  // Sync DOM with state on mount and whenever isDark changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const theme = isDark ? 'dark' : 'light';
      
      // Update localStorage
      localStorage.setItem('theme', theme);
      
      // Force update DOM class
      if (isDark) {
        root.classList.add('dark');
      } else {
        // Force remove dark class - try multiple methods
        root.classList.remove('dark');
        // Also check if it's still there and remove again
        if (root.classList.contains('dark')) {
          root.classList.remove('dark');
        }
      }
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev;
      
      // Immediately update DOM before state update
      if (typeof window !== 'undefined') {
        const root = document.documentElement;
        const theme = newValue ? 'dark' : 'light';
        
        localStorage.setItem('theme', theme);
        
        if (newValue) {
          root.classList.add('dark');
        } else {
          // Aggressively remove dark class
          root.classList.remove('dark');
          // Double check and remove if still present
          setTimeout(() => {
            if (root.classList.contains('dark')) {
              root.classList.remove('dark');
            }
          }, 0);
        }
      }
      
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
