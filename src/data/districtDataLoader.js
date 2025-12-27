// Data loader for all districts
import { usNagarData } from './US_naga_data';

// Import all district data files
import { districtData as AlmoraData } from './Almora_data';
import { districtData as BageshwarData } from './Bageshwar_data';
import { districtData as ChamoliData } from './Chamoli_data';
import { districtData as ChampawatData } from './Champawat_data';
import { districtData as PithoragarhData } from './Pithoragarh_data';
import { districtData as RudraprayagData } from './Rudraprayag_data';
import { districtData as TehriGarhwalData } from './Tehri_Garhwal_data';
import { districtData as UttarkashiData } from './Uttarkashi_data';

// Map district names to their data
export const districtDataMap = {
  'Udham Singh Nagar': usNagarData,
  'Almora': AlmoraData,
  'Bageshwar': BageshwarData,
  'Chamoli': ChamoliData,
  'Champawat': ChampawatData,
  'Pithoragarh': PithoragarhData,
  'Rudraprayag': RudraprayagData,
  'Tehri Garhwal': TehriGarhwalData,
  'Uttarkashi': UttarkashiData
};

// Get data for a specific district
export const getDistrictData = (districtName) => {
  return districtDataMap[districtName] || districtDataMap['Udham Singh Nagar'];
};

// Helper functions that work with any district data
export const getEducationLevelData = (data) => {
  const educationData = data.youth.educationLevel;
  const result = {};
  Object.keys(educationData).forEach(key => {
    result[key] = educationData[key].percentage;
  });
  return result;
};

export const getEducationLevelNumberData = (data) => {
  const educationData = data.youth.educationLevel;
  const result = {};
  Object.keys(educationData).forEach(key => {
    result[key] = educationData[key].number;
  });
  return result;
};

export const getEducationLevelPercentageData = (data) => {
  const educationData = data.youth.educationLevel;
  const result = {};
  Object.keys(educationData).forEach(key => {
    result[key] = educationData[key].percentage;
  });
  return result;
};

export const getVillageWiseData = (data) => {
  const villageData = data.youth.villageWise;
  const top5 = {};
  
  const sorted = Object.entries(villageData)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 5);
  
  sorted.forEach(([village, stats]) => {
    top5[village] = stats.number;
  });
  
  const totalFromTop5 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  const othersCount = data.youth.totalRegisteredYouth - totalFromTop5;
  
  if (othersCount > 0) {
    top5['Others'] = othersCount;
  }
  
  return top5;
};

export const getVillageWisePercentageData = (data) => {
  const villageData = data.youth.villageWise;
  const result = {};
  const sorted = Object.entries(villageData)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 5);
  
  sorted.forEach(([village, stats]) => {
    result[village] = stats.percentage;
  });
  
  const totalFromTop5 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  const othersCount = data.youth.totalRegisteredYouth - totalFromTop5;
  if (othersCount > 0) {
    result['Others'] = parseFloat(((othersCount / data.youth.totalRegisteredYouth) * 100).toFixed(2));
  }
  
  return result;
};

export const getPreferredJobSectorData = (data) => {
  const sectorData = data.youth.preferredJobSector;
  const result = {};
  Object.keys(sectorData).forEach(key => {
    result[key] = sectorData[key].number;
  });
  return result;
};

export const getPreferredJobSectorPercentageData = (data) => {
  const sectorData = data.youth.preferredJobSector;
  const result = {};
  Object.keys(sectorData).forEach(key => {
    result[key] = sectorData[key].percentage;
  });
  return result;
};

export const getPreferredEmploymentLocationData = (data) => {
  const locationData = data.youth.preferredEmploymentLocation;
  const result = {};
  Object.keys(locationData).forEach(key => {
    result[key] = locationData[key].number;
  });
  return result;
};

export const getPreferredEmploymentLocationPercentageData = (data) => {
  const locationData = data.youth.preferredEmploymentLocation;
  const result = {};
  Object.keys(locationData).forEach(key => {
    result[key] = locationData[key].percentage;
  });
  return result;
};

export const getEmployerSectorDistributionData = (data) => {
  const sectorData = data.employer.sectorDistribution;
  
  const sorted = Object.entries(sectorData)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 8);
  
  const result = {};
  sorted.forEach(([sector, stats]) => {
    result[sector] = stats.number;
  });
  
  const totalFromTop8 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  const othersCount = data.employer.totalEmployerOrganizations - totalFromTop8;
  
  if (othersCount > 0) {
    result['Others'] = othersCount;
  }
  
  return result;
};

export const getEmployerSectorDistributionPercentageData = (data) => {
  const sectorData = data.employer.sectorDistribution;
  const sorted = Object.entries(sectorData)
    .sort((a, b) => b[1].number - a[1].number)
    .slice(0, 8);
  
  const result = {};
  sorted.forEach(([sector, stats]) => {
    result[sector] = stats.percentage;
  });
  
  const totalFromTop8 = sorted.reduce((sum, [, stats]) => sum + stats.number, 0);
  const othersCount = data.employer.totalEmployerOrganizations - totalFromTop8;
  if (othersCount > 0) {
    result['Others'] = parseFloat(((othersCount / data.employer.totalEmployerOrganizations) * 100).toFixed(2));
  }
  
  return result;
};


