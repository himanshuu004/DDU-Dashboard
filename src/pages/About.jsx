import { Building2, Users, Target, TrendingUp, MapPin, BarChart3 } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: 'District-wise Analysis',
      description: 'Detailed insights for each of the 13 districts of Uttarakhand with comprehensive data visualization.'
    },
    {
      icon: BarChart3,
      title: 'Overall State Insights',
      description: 'Auto-calculated aggregated statistics for the entire state, derived from district-level data.'
    },
    {
      icon: Users,
      title: 'Youth Statistics',
      description: 'Comprehensive data on registered youth, education levels, preferred sectors, and employment locations.'
    },
    {
      icon: Building2,
      title: 'Employer Analytics',
      description: 'Detailed information about employer organizations, sector distribution, and job opportunities.'
    },
    {
      icon: Target,
      title: 'Predictive Insights',
      description: 'Future-oriented projections including settlement probability, employment readiness, and sector alignment.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Calculations',
      description: 'All statistics are automatically calculated from district data - no hard-coded values.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-200">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-govBlue-700 via-govBlue-600 to-govGreen-600 dark:from-govBlue-400 dark:via-govBlue-300 dark:to-govGreen-400 bg-clip-text text-transparent mb-2 tracking-tight">
            About the Dashboard
          </h1>
          <p className="text-black dark:text-gray-400 text-sm md:text-base mt-2">
            Learn more about the Uttarakhand Youth Employment Dashboard
          </p>
        </div>
        {/* Overview Section */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8 transition-colors duration-200" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-black dark:text-gray-200 mb-4">Overview</h2>
            <p className="text-black dark:text-gray-300 mb-4 leading-relaxed">
              The Uttarakhand Youth Employment Dashboard is a comprehensive data visualization platform designed to 
              provide insights into youth employment trends, employer statistics, and future projections across all 
              13 districts of Uttarakhand.
            </p>
            <p className="text-black dark:text-gray-300 leading-relaxed">
              This dashboard serves as a tool for policymakers, researchers, and stakeholders to understand the 
              employment landscape, identify trends, and make data-driven decisions for youth development initiatives 
              in the state.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-gray-200 mb-6" data-aos="fade-up">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-lg dark:hover:shadow-gray-900 transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-govBlue-100 dark:bg-govBlue-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-govBlue-600 dark:text-govBlue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-gray-200 mb-2">{feature.title}</h3>
                  <p className="text-sm text-black dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-8 transition-colors duration-200" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-black dark:text-gray-200 mb-4">Technical Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-gray-200 mb-3">Tech Stack</h3>
                <ul className="space-y-2 text-black dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govBlue-600 rounded-full"></span>
                    React.js (Vite)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govBlue-600 rounded-full"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govBlue-600 rounded-full"></span>
                    Chart.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govBlue-600 rounded-full"></span>
                    CountUp.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govBlue-600 rounded-full"></span>
                    Lucide Icons
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-gray-200 mb-3">Data Management</h3>
                <ul className="space-y-2 text-black dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govGreen-600 rounded-full"></span>
                    Static data files per district
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govGreen-600 rounded-full"></span>
                    Auto-calculation from district data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govGreen-600 rounded-full"></span>
                    Real-time aggregation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govGreen-600 rounded-full"></span>
                    No API or backend required
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-govGreen-600 rounded-full"></span>
                    Easy data updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Districts Covered */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-black dark:text-gray-200 mb-4">Districts Covered</h2>
            <p className="text-black dark:text-gray-300 mb-4">
              The dashboard includes data for all 13 districts of Uttarakhand:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                'Almora', 'Bageshwar', 'Chamoli', 'Champawat',
                'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal',
                'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal',
                'Udham Singh Nagar', 'Uttarkashi'
              ].map((district, index) => (
                <div
                  key={index}
                  className="bg-govBlue-50 dark:bg-govBlue-900/50 px-4 py-2 rounded-lg text-center text-sm font-medium text-govBlue-700 dark:text-govBlue-300 hover:bg-govBlue-100 dark:hover:bg-govBlue-900/70 transition-colors"
                >
                  {district}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

