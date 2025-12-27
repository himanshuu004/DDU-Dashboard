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
    // Check localStorage first, default to light theme (false)
    const saved = localStorage.getItem('theme');
    // Only return true if explicitly set to 'dark', otherwise default to light
    if (saved === 'dark') {
      return true;
    }
    // Default to light theme
    return false;
  });

  useEffect(() => {
    // Apply theme class to html element
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Ensure light theme is applied and saved
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Initialize theme on mount - ensure light theme is default
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      // If no theme saved, explicitly set to light
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

