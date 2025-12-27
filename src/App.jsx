import { useState } from 'react';
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      {/* Footer */}
      <footer className="bg-govBlue-800 text-white py-6 mt-12 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-govBlue-200">
            DDU-GKY (Deen Dayal Upadhyaya Grameen Kaushalya Yojana)
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
