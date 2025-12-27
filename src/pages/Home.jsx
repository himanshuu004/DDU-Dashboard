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

    // Sort sectors by count in descending order
    const sortedSectors = Object.entries(sectorCounts)
      .sort((a, b) => b[1] - a[1])
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});

    // Calculate percentages for sectors based on total youth (recalculated)
    const sectorPercentages = {};
    Object.entries(sortedSectors).forEach(([sector, count]) => {
      sectorPercentages[sector] = parseFloat(((count / totalYouth) * 100).toFixed(2));
    });

    // 4. Youth Distribution by District
    const districtYouthCounts = {};
    Object.entries(districtDataMap).forEach(([districtName, district]) => {
      districtYouthCounts[districtName] = district.youth?.totalRegisteredYouth || 0;
    });

    // Recalculate district percentages based on total youth
    const districtPercentages = {};
    Object.entries(districtYouthCounts).forEach(([district, count]) => {
      districtPercentages[district] = parseFloat(((count / totalYouth) * 100).toFixed(2));
    });

    // Prepare district-specific preferred job sectors with percentages for tooltip
    const districtSectors = {};
    Object.entries(districtDataMap).forEach(([districtName, district]) => {
      if (district.youth?.preferredJobSector) {
        // Get top 3 sectors with their percentages for this district
        const sectors = Object.entries(district.youth.preferredJobSector)
          .map(([sector, data]) => ({ 
            sector, 
            count: data.number || 0,
            percentage: data.percentage || 0
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 3)
          .map(item => ({ 
            sector: item.sector, 
            percentage: parseFloat(item.percentage).toFixed(1) 
          }));
        districtSectors[districtName] = sectors;
      }
    });

    // 5. Preferred Employment Location (Overall) - Recalculate from aggregated counts
    const locationCounts = {};
    Object.values(districtDataMap).forEach(district => {
      if (district.youth?.preferredEmploymentLocation) {
        Object.entries(district.youth.preferredEmploymentLocation).forEach(([location, data]) => {
          locationCounts[location] = (locationCounts[location] || 0) + (data.number || 0);
        });
      }
    });

    // Recalculate location percentages based on total youth
    const totalLocationCount = Object.values(locationCounts).reduce((sum, count) => sum + count, 0);
    const locationPercentages = {};
    Object.entries(locationCounts).forEach(([location, count]) => {
      locationPercentages[location] = parseFloat(((count / totalLocationCount) * 100).toFixed(2));
    });

    // 6. Overall Minimum Education Distribution - Recalculate from aggregated counts
    const educationCounts = {};
    Object.values(districtDataMap).forEach(district => {
      if (district.youth?.educationLevel) {
        Object.entries(district.youth.educationLevel).forEach(([level, data]) => {
          educationCounts[level] = (educationCounts[level] || 0) + (data.number || 0);
        });
      }
    });

    // Recalculate education percentages based on total youth
    const totalEducationCount = Object.values(educationCounts).reduce((sum, count) => sum + count, 0);
    const educationPercentages = {};
    Object.entries(educationCounts).forEach(([level, count]) => {
      educationPercentages[level] = parseFloat(((count / totalEducationCount) * 100).toFixed(2));
    });

    // Sort education levels from higher to lower education
    const educationOrder = ['PG', 'UG', '12th', '11th', '10th', '9th', 'Up to 8th', 'Other'];
    const sortedEducationCounts = {};
    const sortedEducationPercentages = {};
    
    educationOrder.forEach(level => {
      if (educationCounts[level] !== undefined) {
        sortedEducationCounts[level] = educationCounts[level];
        sortedEducationPercentages[level] = educationPercentages[level];
      }
    });

    return {
      totalYouth,
      totalEmployers,
      sectorCounts: sortedSectors,
      sectorPercentages,
      districtYouthCounts,
      districtPercentages,
      districtSectors,
      locationCounts,
      locationPercentages,
      educationCounts: sortedEducationCounts,
      educationPercentages: sortedEducationPercentages
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-[#7053bc] mb-2 tracking-tight">
            Uttarakhand Youth aspiration and incrementsl demand
          </h1>
        </div>

        {/* Key Statistics Cards */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#7053bc] dark:text-purple-400 mb-6" data-aos="fade-up">
            Key Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard
              title="Surveyed Youth"
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
              districtSectors={overallData.districtSectors}
            />
          </div>
        </section>

        {/* Charts Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#7053bc] dark:text-purple-400 mb-6" data-aos="fade-up">
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
              showDetailsPanel={true}
            />
          </div>

          {/* Overall Minimum Education Distribution */}
          <div className="mb-8">
            <BarChart
              title="Overall Minimum Education Distribution"
              data={overallData.educationCounts}
              xAxisLabel="Education Level"
              yAxisLabel="Number of Youth"
              color="govGreen"
              showPercentage={true}
              percentageData={overallData.educationPercentages}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

