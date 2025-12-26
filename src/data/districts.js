// List of all Uttarakhand districts
export const districts = [
  'Almora',
  'Bageshwar',
  'Chamoli',
  'Champawat',
  'Dehradun',
  'Haridwar',
  'Nainital',
  'Pauri Garhwal',
  'Pithoragarh',
  'Rudraprayag',
  'Tehri Garhwal',
  'Udham Singh Nagar',
  'Uttarkashi'
];

// Helper function to get district file name
export const getDistrictFileName = (districtName) => {
  const nameMap = {
    'Udham Singh Nagar': 'US_naga_data',
    'Pauri Garhwal': 'Pauri_Garhwal_data',
    'Tehri Garhwal': 'Tehri_Garhwal_data'
  };
  return nameMap[districtName] || districtName.replace(/\s+/g, '_') + '_data';
};

