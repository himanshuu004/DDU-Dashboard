// Static data for Udham Singh Nagar district
export const usNagarData = {
  // Youth Statistics
  youth: {
    totalRegisteredYouth: 220,
    
    educationLevel: {
      '12th': { number: 79, percentage: 35.91 },
      'UG': { number: 59, percentage: 26.82 },
      'PG': { number: 46, percentage: 20.91 },
      '10th': { number: 27, percentage: 12.27 },
      '11th': { number: 4, percentage: 1.82 },
      'Up to 8th': { number: 3, percentage: 1.36 },
      '9th': { number: 2, percentage: 0.91 }
    },
    
    villageWise: {
      'Gadarpur': { number: 26, percentage: 11.82 },
      'Gularbhoj': { number: 11, percentage: 5.00 },
      'Barhaini': { number: 10, percentage: 4.55 },
      'Bazpur Gaon': { number: 8, percentage: 3.64 },
      'Naugwathaggu': { number: 8, percentage: 3.64 },
      // Others will be calculated
    },
    
    preferredJobSector: {
      'BFSI': { number: 86, percentage: 39.09 },
      'Beauty & Wellness': { number: 67, percentage: 30.45 },
      'Agriculture': { number: 60, percentage: 27.27 },
      'Healthcare': { number: 56, percentage: 25.45 },
      'Electronics': { number: 43, percentage: 19.55 }
    },
    
    preferredEmploymentLocation: {
      'Within Domicile District': { number: 134, percentage: 60.91 },
      'Within Domicile State': { number: 48, percentage: 21.82 }
    }
  },
  
  // Employer Statistics
  employer: {
    totalEmployerOrganizations: 254,
    expectedNewJobs: 320, // Estimated based on employer organizations
    
    sectorDistribution: {
      'Auto': { number: 18, percentage: 7.09 },
      'Food': { number: 14, percentage: 5.51 },
      'Healthcare': { number: 4, percentage: 1.57 },
      'Packaging': { number: 3, percentage: 1.18 },
      'Electronic': { number: 2, percentage: 0.79 },
      'Pharma': { number: 2, percentage: 0.79 },
      'Food Processing': { number: 2, percentage: 0.79 },
      'Plywood': { number: 1, percentage: 0.39 },
      'Steel': { number: 1, percentage: 0.39 },
      'Hotel': { number: 1, percentage: 0.39 },
      'Textile': { number: 1, percentage: 0.39 },
      'Mining': { number: 1, percentage: 0.39 },
      'Rubber': { number: 1, percentage: 0.39 },
      'Plastic': { number: 1, percentage: 0.39 },
      'Agriculture': { number: 1, percentage: 0.39 },
      'Electronics': { number: 1, percentage: 0.39 }
    }
  }
};

// Helper functions to format data for charts
export const getEducationLevelData = () => {
  const data = usNagarData.youth.educationLevel;
  const result = {};
  Object.keys(data).forEach(key => {
    result[key] = data[key].percentage;
  });
  return result;
};

export const getEducationLevelNumberData = () => {
  const data = usNagarData.youth.educationLevel;
  const result = {};
  Object.keys(data).forEach(key => {
    result[key] = data[key].number;
  });
  return result;
};

export const getEducationLevelPercentageData = () => {
  const data = usNagarData.youth.educationLevel;
  const result = {};
  Object.keys(data).forEach(key => {
    result[key] = data[key].percentage;
  });
  return result;
};

export const getVillageWiseData = () => {
  const data = usNagarData.youth.villageWise;
  const top5 = {};
  let othersCount = 0;
  let othersPercentage = 0;
  
  // Get top 5 villages
  const sorted = Object.entries(data)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 5);
  
  sorted.forEach(([village, stats]) => {
    top5[village] = stats.number;
  });
  
  // Calculate others (remaining villages)
  const totalFromTop5 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  othersCount = usNagarData.youth.totalRegisteredYouth - totalFromTop5;
  othersPercentage = ((othersCount / usNagarData.youth.totalRegisteredYouth) * 100).toFixed(2);
  
  if (othersCount > 0) {
    top5['Others'] = othersCount;
  }
  
  return top5;
};

export const getVillageWisePercentageData = () => {
  const data = usNagarData.youth.villageWise;
  const result = {};
  const sorted = Object.entries(data)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 5);
  
  sorted.forEach(([village, stats]) => {
    result[village] = stats.percentage;
  });
  
  // Calculate others percentage
  const totalFromTop5 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  const othersCount = usNagarData.youth.totalRegisteredYouth - totalFromTop5;
  if (othersCount > 0) {
    result['Others'] = parseFloat(((othersCount / usNagarData.youth.totalRegisteredYouth) * 100).toFixed(2));
  }
  
  return result;
};

export const getPreferredJobSectorData = () => {
  const data = usNagarData.youth.preferredJobSector;
  const result = {};
  Object.keys(data).forEach(key => {
    result[key] = data[key].number;
  });
  return result;
};

export const getPreferredJobSectorPercentageData = () => {
  const data = usNagarData.youth.preferredJobSector;
  const result = {};
  Object.keys(data).forEach(key => {
    result[key] = data[key].percentage;
  });
  return result;
};

export const getPreferredEmploymentLocationData = () => {
  const data = usNagarData.youth.preferredEmploymentLocation;
  const result = {};
  Object.keys(data).forEach(key => {
    result[key] = data[key].number;
  });
  return result;
};

export const getPreferredEmploymentLocationPercentageData = () => {
  const data = usNagarData.youth.preferredEmploymentLocation;
  const result = {};
  Object.keys(data).forEach(key => {
    result[key] = data[key].percentage;
  });
  return result;
};

export const getEmployerSectorDistributionData = () => {
  const data = usNagarData.employer.sectorDistribution;
  
  // Sort by number and get top 8
  const sorted = Object.entries(data)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 8);
  
  const result = {};
  let othersCount = 0;
  
  sorted.forEach(([sector, stats]) => {
    result[sector] = stats.number;
  });
  
  // Calculate others
  const totalFromTop8 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  othersCount = usNagarData.employer.totalEmployerOrganizations - totalFromTop8;
  
  if (othersCount > 0) {
    result['Others'] = othersCount;
  }
  
  return result;
};

export const getEmployerSectorDistributionPercentageData = () => {
  const data = usNagarData.employer.sectorDistribution;
  const sorted = Object.entries(data)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 8);
  
  const result = {};
  sorted.forEach(([sector, stats]) => {
    result[sector] = stats.percentage;
  });
  
  // Calculate others percentage
  const totalFromTop8 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  const othersCount = usNagarData.employer.totalEmployerOrganizations - totalFromTop8;
  if (othersCount > 0) {
    result['Others'] = parseFloat(((othersCount / usNagarData.employer.totalEmployerOrganizations) * 100).toFixed(2));
  }
  
  return result;
};

