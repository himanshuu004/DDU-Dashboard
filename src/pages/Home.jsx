import { useMemo } from 'react';
import StatCard from '../components/StatCard';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import { UserCheck, Factory } from 'lucide-react';
import { districtDataMap } from '../data/districtDataLoader';
import { districts } from '../data/districts';

const Home = () => {
  // Auto-calculate overall statistics from all districts
  const overallData = useMemo(() => {
    // 1. Total Youth Registered
    const totalYouth = Object.values(districtDataMap).reduce(
      (sum, district) => sum + (district.youth?.totalRegisteredYouth || 0),
      0
    );

    // 2. Total Employer Organizations
    const totalEmployers = Object.values(districtDataMap).reduce(
      (sum, district) => sum + (district.employer?.totalEmployerOrganizations || 0),
      0
    );

    // 3. Overall Preferred Job Sectors (aggregate from all districts)
    const sectorCounts = {};
    Object.values(districtDataMap).forEach(district => {
      if (district.youth?.preferredJobSector) {
        Object.entries(district.youth.preferredJobSector).forEach(([sector, data]) => {
          sectorCounts[sector] = (sectorCounts[sector] || 0) + (data.number || 0);
        });
      }
    });

    // Calculate percentages for sectors
    const sectorPercentages = {};
    Object.entries(sectorCounts).forEach(([sector, count]) => {
      sectorPercentages[sector] = ((count / totalYouth) * 100).toFixed(2);
    });

    // 4. Youth Distribution by District
    const districtYouthCounts = {};
    Object.entries(districtDataMap).forEach(([districtName, district]) => {
      districtYouthCounts[districtName] = district.youth?.totalRegisteredYouth || 0;
    });

    const districtPercentages = {};
    Object.entries(districtYouthCounts).forEach(([district, count]) => {
      districtPercentages[district] = ((count / totalYouth) * 100).toFixed(2);
    });

    // 5. Preferred Employment Location (Overall)
    const locationCounts = {};
    Object.values(districtDataMap).forEach(district => {
      if (district.youth?.preferredEmploymentLocation) {
        Object.entries(district.youth.preferredEmploymentLocation).forEach(([location, data]) => {
          locationCounts[location] = (locationCounts[location] || 0) + (data.number || 0);
        });
      }
    });

    const locationPercentages = {};
    Object.entries(locationCounts).forEach(([location, count]) => {
      locationPercentages[location] = ((count / totalYouth) * 100).toFixed(2);
    });

    // 6. Overall Minimum Education Distribution
    const educationCounts = {};
    Object.values(districtDataMap).forEach(district => {
      if (district.youth?.educationLevel) {
        Object.entries(district.youth.educationLevel).forEach(([level, data]) => {
          educationCounts[level] = (educationCounts[level] || 0) + (data.number || 0);
        });
      }
    });

    const educationPercentages = {};
    Object.entries(educationCounts).forEach(([level, count]) => {
      educationPercentages[level] = ((count / totalYouth) * 100).toFixed(2);
    });

    return {
      totalYouth,
      totalEmployers,
      sectorCounts,
      sectorPercentages,
      districtYouthCounts,
      districtPercentages,
      locationCounts,
      locationPercentages,
      educationCounts,
      educationPercentages
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-200">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-govBlue-700 via-govBlue-600 to-govGreen-600 dark:from-govBlue-400 dark:via-govBlue-300 dark:to-govGreen-400 bg-clip-text text-transparent mb-2 tracking-tight">
            Uttarakhand – Overall Insights
          </h1>
        </div>

        {/* Key Statistics Cards */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-black dark:text-gray-200 mb-6" data-aos="fade-up">
            Key Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard
              title="Total Youth Registered (Uttarakhand)"
              value={overallData.totalYouth}
              icon={UserCheck}
              prefix=""
              suffix=""
            />
            <StatCard
              title="Total Employer Organizations (Uttarakhand)"
              value={overallData.totalEmployers}
              icon={Factory}
              prefix=""
              suffix=""
            />
          </div>
        </section>

        {/* Youth Distribution by District */}
        <section className="mb-12">
          <div className="mb-8">
            <PieChart
              title="Youth Distribution by District"
              data={overallData.districtYouthCounts}
              percentageData={overallData.districtPercentages}
            />
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-black dark:text-gray-200 mb-6" data-aos="fade-up">
            Overall Analysis
          </h2>

          {/* Overall Preferred Job Sectors */}
          <div className="mb-8">
            <BarChart
              title="Overall Preferred Job Sectors"
              data={overallData.sectorCounts}
              xAxisLabel="Sector"
              yAxisLabel="Number of Youth"
              color="govBlue"
              showPercentage={true}
              percentageData={overallData.sectorPercentages}
            />
          </div>

          {/* Preferred Employment Location */}
          <div className="mb-8">
            <PieChart
              title="Preferred Employment Location (Overall)"
              data={overallData.locationCounts}
              percentageData={overallData.locationPercentages}
            />
          </div>

          {/* Overall Minimum Education Distribution */}
          <div className="mb-8">
            <BarChart
              title="Overall Minimum Education Distribution"
              data={overallData.educationPercentages}
              xAxisLabel="Education Level"
              yAxisLabel="Percentage (%)"
              color="govGreen"
              showPercentage={true}
              percentageData={overallData.educationPercentages}
              numberData={overallData.educationCounts}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

