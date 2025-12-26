import { useState, useMemo } from 'react';
import { districts } from '../data/districts';
import DistrictSelect from '../components/DistrictSelect';
import StatCard from '../components/StatCard';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';
import {
  UserCheck,
  Factory,
  Target,
  AlertCircle,
  CheckCircle2,
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

  // Calculate Predictive Insights
  const predictiveInsights = useMemo(() => {
    const totalRegisteredYouth = currentDistrictData.youth.totalRegisteredYouth;
    const expectedNewJobs = currentDistrictData.employer.expectedNewJobs;

    // 1. Youth Settlement Probability
    const settlementProbability = totalRegisteredYouth > 0
      ? Math.min(100, ((expectedNewJobs / totalRegisteredYouth) * 100).toFixed(1))
      : 0;

    // 2. Employment Absorption Capacity
    const absorptionCapacity = totalRegisteredYouth > 0
      ? (expectedNewJobs / totalRegisteredYouth).toFixed(2)
      : 0;

    // 3. Sector Alignment Score
    const youthSectors = Object.keys(currentDistrictData.youth.preferredJobSector);
    const employerSectors = Object.keys(currentDistrictData.employer.sectorDistribution);
    
    // Normalize sector names for comparison
    const normalizeSector = (sector) => sector.toLowerCase().replace(/[^a-z0-9]/g, '');
    const youthSectorsNormalized = youthSectors.map(normalizeSector);
    const employerSectorsNormalized = employerSectors.map(normalizeSector);
    
    const commonSectors = youthSectorsNormalized.filter(ys =>
      employerSectorsNormalized.some(es => 
        es.includes(ys) || ys.includes(es) || 
        (ys.includes('healthcare') && es.includes('health')) ||
        (ys.includes('agriculture') && es.includes('agriculture')) ||
        (ys.includes('electronics') && es.includes('electronic'))
      )
    );
    
    const alignmentScore = commonSectors.length >= 3 ? 'High' :
      commonSectors.length >= 2 ? 'Medium' : 'Low';

    // 4. Projected Employment Trend (2024-2026)
    const baseEmployed = Math.min(expectedNewJobs, totalRegisteredYouth);
    const projectedTrend = {
      labels: ['2024', '2025', '2026'],
      values: [
        baseEmployed,
        Math.min(totalRegisteredYouth, Math.round(baseEmployed * 1.1)),
        Math.min(totalRegisteredYouth, Math.round(baseEmployed * 1.21))
      ]
    };

    // 5. Employment Readiness
    const readinessScore = expectedNewJobs > totalRegisteredYouth ? 'High' :
      expectedNewJobs > totalRegisteredYouth * 0.7 ? 'Medium' : 'Low';

    // 6. Migration Risk (inverse of settlement probability)
    const migrationRisk = parseFloat(settlementProbability) < 40 ? 'High' :
      parseFloat(settlementProbability) < 60 ? 'Medium' : 'Low';

    return {
      settlementProbability: parseFloat(settlementProbability),
      absorptionCapacity: parseFloat(absorptionCapacity),
      alignmentScore,
      projectedTrend,
      readinessScore,
      migrationRisk
    };
  }, [currentDistrictData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-200">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8" data-aos="fade-down">
          <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-govBlue-700 via-govBlue-600 to-govGreen-600 dark:from-govBlue-400 dark:via-govBlue-300 dark:to-govGreen-400 bg-clip-text text-transparent mb-2 tracking-tight">
            District-wise Insights
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">
            Select a district to view detailed statistics and analytics
          </p>
        </div>
        {/* District Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/50 p-6 mb-8 transition-colors duration-200" data-aos="fade-down">
          <DistrictSelect
            districts={districts}
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
          />
        </div>

        {/* Youth Statistics Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-govBlue-600 to-govBlue-700 text-white px-6 py-4 rounded-lg shadow-md mb-6" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-bold">
              Youth Statistics
            </h2>
          </div>

          {/* Total Registered Youth Card */}
          <div className="mb-8">
            <StatCard
              title="Total Registered Youth"
              value={currentDistrictData.youth.totalRegisteredYouth}
              icon={UserCheck}
              prefix=""
              suffix=""
            />
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

        {/* Predictive Statistics Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-lg shadow-md mb-6" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-bold">
              Future Insights
            </h2>
          </div>

          {/* Summary Insight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 transition-colors duration-200" data-aos="fade-up">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-govBlue-100 dark:bg-govBlue-900/50 text-govBlue-600 dark:text-govBlue-400">
                  <Target size={24} />
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded ${
                  predictiveInsights.readinessScore === 'High'
                    ? 'bg-govGreen-200 dark:bg-govGreen-900/50 text-govGreen-700 dark:text-govGreen-300'
                    : predictiveInsights.readinessScore === 'Medium'
                    ? 'bg-yellow-200 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300'
                    : 'bg-red-200 dark:bg-red-900/50 text-red-700 dark:text-red-300'
                }`}>
                  {predictiveInsights.readinessScore}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                Estimated Employment Readiness
              </p>
              <p className="text-2xl font-bold text-govBlue-700 dark:text-govBlue-400">
                {predictiveInsights.readinessScore}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 transition-colors duration-200" data-aos="fade-up">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-govGreen-100 dark:bg-govGreen-900/50 text-govGreen-600 dark:text-govGreen-400">
                  <CheckCircle2 size={24} />
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded ${
                  predictiveInsights.alignmentScore === 'High'
                    ? 'bg-govGreen-200 dark:bg-govGreen-900/50 text-govGreen-700 dark:text-govGreen-300'
                    : predictiveInsights.alignmentScore === 'Medium'
                    ? 'bg-yellow-200 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300'
                    : 'bg-red-200 dark:bg-red-900/50 text-red-700 dark:text-red-300'
                }`}>
                  {predictiveInsights.alignmentScore}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                Sector Alignment Level
              </p>
              <p className="text-2xl font-bold text-govGreen-700 dark:text-govGreen-400">
                {predictiveInsights.alignmentScore}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                  <AlertCircle size={24} />
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded ${
                  predictiveInsights.migrationRisk === 'Low'
                    ? 'bg-govGreen-200 text-govGreen-700'
                    : predictiveInsights.migrationRisk === 'Medium'
                    ? 'bg-yellow-200 text-yellow-700'
                    : 'bg-red-200 text-red-700'
                }`}>
                  {predictiveInsights.migrationRisk}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">
                Migration Risk Indicator
              </p>
              <p className="text-2xl font-bold text-orange-700">
                {predictiveInsights.migrationRisk}
              </p>
            </div>
          </div>

          {/* Charts and Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <LineChart
              title="Projected Youth Employment Trend"
              data={predictiveInsights.projectedTrend}
              xAxisLabel="Year"
              yAxisLabel="Estimated Employed Youth"
              color="govBlue"
            />

            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
              <h3 className="text-lg font-bold text-gray-800 mb-6">
                Youth Settlement Probability
              </h3>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Estimated Probability
                  </span>
                  <span className="text-2xl font-bold text-govBlue-700">
                    {predictiveInsights.settlementProbability}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div
                    className={`h-6 rounded-full transition-all duration-1000 flex items-center justify-end pr-2 ${
                      predictiveInsights.settlementProbability >= 60
                        ? 'bg-govGreen-500'
                        : predictiveInsights.settlementProbability >= 40
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{
                      width: `${Math.min(100, predictiveInsights.settlementProbability)}%`,
                    }}
                  >
                    {predictiveInsights.settlementProbability > 10 && (
                      <span className="text-xs font-semibold text-white">
                        {predictiveInsights.settlementProbability}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Job Absorption Capacity Indicator
                </p>
                <p className="text-3xl font-bold text-govGreen-700">
                  {predictiveInsights.absorptionCapacity}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Jobs per registered youth
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 border-l-4 border-govBlue-500 p-4 rounded" data-aos="fade-up">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> These insights are indicative and based on available survey data. 
              Projections are calculated using simple mathematical models and should not be considered as 
              definitive predictions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
