import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DistrictWise from './pages/DistrictWise';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'district':
        return <DistrictWise />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      {/* Footer */}
      <footer className="bg-[#7053bc] text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Logo and Name */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="/logo.png" 
                  alt="DDU-GKY Logo" 
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="text-xl font-bold">DDU-GKY</h3>
                  <p className="text-sm text-purple-200">Uttarakhand Dashboard</p>
                </div>
              </div>
              <p className="text-sm text-purple-100 text-center md:text-left">
                Deen Dayal Upadhyaya Grameen Kaushalya Yojana - Empowering rural youth through skill development and employment opportunities.
              </p>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="text-purple-100 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('district')}
                    className="text-purple-100 hover:text-white transition-colors text-sm"
                  >
                    District-wise Insights
                  </button>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h4 className="text-lg font-bold mb-4">About</h4>
              <p className="text-sm text-purple-100 mb-2">
                This dashboard provides comprehensive insights into youth aspirations and employment opportunities across Uttarakhand districts.
              </p>
              <p className="text-sm text-purple-200">
                Data showcases youth preferences, employer distributions, and sector-wise analysis for informed decision-making.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-purple-400 pt-4 text-center">
            <p className="text-sm text-purple-200">
              © {new Date().getFullYear()} DDU-GKY Uttarakhand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
