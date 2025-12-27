import { useState, useMemo } from 'react';
import { districts } from '../data/districts';
import DistrictSelect from '../components/DistrictSelect';
import StatCard from '../components/StatCard';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import {
  UserCheck,
  Factory,
} from 'lucide-react';
import {
  getDistrictData,
  getEducationLevelData,
  getEducationLevelNumberData,
  getEducationLevelPercentageData,
  getVillageWiseData,
  getVillageWisePercentageData,
  getPreferredJobSectorData,
  getPreferredJobSectorPercentageData,
  getPreferredEmploymentLocationData,
  getPreferredEmploymentLocationPercentageData,
  getEmployerSectorDistributionData,
  getEmployerSectorDistributionPercentageData
} from '../data/districtDataLoader';

const Dashboard = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('Udham Singh Nagar');

  // Get data for selected district
  const currentDistrictData = useMemo(() => {
    return getDistrictData(selectedDistrict);
  }, [selectedDistrict]);

  // Get formatted data for charts
  const educationData = useMemo(() => getEducationLevelData(currentDistrictData), [currentDistrictData]);
  const educationNumberData = useMemo(() => getEducationLevelNumberData(currentDistrictData), [currentDistrictData]);
  const educationPercentageData = useMemo(() => getEducationLevelPercentageData(currentDistrictData), [currentDistrictData]);
  
  const villageData = useMemo(() => getVillageWiseData(currentDistrictData), [currentDistrictData]);
  const villagePercentageData = useMemo(() => getVillageWisePercentageData(currentDistrictData), [currentDistrictData]);
  
  const preferredSectorData = useMemo(() => getPreferredJobSectorData(currentDistrictData), [currentDistrictData]);
  const preferredSectorPercentageData = useMemo(() => getPreferredJobSectorPercentageData(currentDistrictData), [currentDistrictData]);
  
  const employmentLocationData = useMemo(() => getPreferredEmploymentLocationData(currentDistrictData), [currentDistrictData]);
  const employmentLocationPercentageData = useMemo(() => getPreferredEmploymentLocationPercentageData(currentDistrictData), [currentDistrictData]);
  
  const employerSectorData = useMemo(() => getEmployerSectorDistributionData(currentDistrictData), [currentDistrictData]);
  const employerSectorPercentageData = useMemo(() => getEmployerSectorDistributionPercentageData(currentDistrictData), [currentDistrictData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-govBlue-700 via-govBlue-600 to-govGreen-600 bg-clip-text text-transparent mb-2 tracking-tight">
            District-wise Insights
          </h1>
          <p className="text-black text-sm md:text-base mt-2">
            Select a district to view detailed statistics and analytics
          </p>
        </div>
        {/* District Selection and Surveyed Youth - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* District Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-down">
            <DistrictSelect
              districts={districts}
              selectedDistrict={selectedDistrict}
              onDistrictChange={setSelectedDistrict}
            />
          </div>

          {/* Surveyed Youth Card */}
          <div className="flex items-center" data-aos="fade-down">
            <StatCard
              title="Surveyed Youth"
              value={currentDistrictData.youth.totalRegisteredYouth}
              icon={UserCheck}
              prefix=""
              suffix=""
            />
          </div>
        </div>

        {/* Youth Statistics Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-govBlue-600 to-govBlue-700 text-white px-6 py-4 rounded-lg shadow-md mb-6" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-bold">
              Youth Statistics
            </h2>
          </div>

          {/* Education Level Bar Chart */}
          <div className="mb-8">
            <BarChart
              title="Percentage of Minimum Education (All Youth)"
              data={educationData}
              xAxisLabel="Education Level"
              yAxisLabel="Percentage (%)"
              color="govBlue"
              showPercentage={true}
              percentageData={educationPercentageData}
              numberData={educationNumberData}
            />
          </div>

          {/* Village-wise Pie Chart */}
          <div className="mb-8">
            <PieChart
              title="Village-wise Youth Distribution"
              data={villageData}
              percentageData={villagePercentageData}
            />
          </div>

          {/* Preferred Job Sector Bar Chart */}
          <div className="mb-8">
            <BarChart
              title="Preferred Job Sector (Top 5)"
              data={preferredSectorData}
              xAxisLabel="Sector"
              yAxisLabel="Number of Youth"
              color="govGreen"
              showPercentage={true}
              percentageData={preferredSectorPercentageData}
            />
          </div>

          {/* Preferred Employment Location Pie Chart */}
          <div className="mb-8">
            <PieChart
              title="Preferred Employment Location"
              data={employmentLocationData}
              percentageData={employmentLocationPercentageData}
            />
          </div>
        </section>

        {/* Employer Statistics Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-govGreen-600 to-govGreen-700 text-white px-6 py-4 rounded-lg shadow-md mb-6" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-bold">
              Employer Statistics
            </h2>
          </div>

          {/* Total Employer Organizations Card */}
          <div className="mb-8">
            <StatCard
              title="Total Employer Organizations"
              value={currentDistrictData.employer.totalEmployerOrganizations}
              icon={Factory}
              prefix=""
              suffix=""
            />
          </div>

          {/* Sector-wise Employer Distribution Bar Chart */}
          <div className="mb-8">
            <BarChart
              title="Sector-wise Employer Distribution"
              data={employerSectorData}
              xAxisLabel="Sector"
              yAxisLabel="Number of Employers"
              color="govBlue"
              showPercentage={true}
              percentageData={employerSectorPercentageData}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
