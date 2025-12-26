import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DistrictWise from './pages/DistrictWise';
import About from './pages/About';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'district':
        return <DistrictWise />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="flex-grow">
          {renderPage()}
        </div>
        {/* Footer */}
        <footer className="bg-govBlue-800 dark:bg-gray-900 text-white dark:text-gray-200 py-6 mt-12 border-t border-gray-700 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-govBlue-200 dark:text-gray-400">
              © 2024 Uttarakhand Youth Employment Dashboard | Government Data Showcase
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
