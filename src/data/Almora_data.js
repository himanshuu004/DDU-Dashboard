// Static data for Almora district
export const districtData = {
  youth: {
    totalRegisteredYouth: 376,
    educationLevel: {
      '12th': { number: Math.round(376 * 0.5762), percentage: 57.62 },
      'UG': { number: Math.round(376 * 0.1468), percentage: 14.68 },
      '10th': { number: Math.round(376 * 0.1385), percentage: 13.85 },
      'Up to 8th': { number: Math.round(376 * 0.0831), percentage: 8.31 },
      'PG': { number: Math.round(376 * 0.0471), percentage: 4.71 },
      '9th': { number: Math.round(376 * 0.0083), percentage: 0.83 }
    },
    blockWise: {
      'Dwarahat': { number: Math.round(376 * 0.3029), percentage: 30.29 },
      'Sult': { number: Math.round(376 * 0.1099), percentage: 10.99 },
      'Hawalbag': { number: Math.round(376 * 0.0992), percentage: 9.92 },
      'Dhauladevi': { number: Math.round(376 * 0.0912), percentage: 9.12 },
      'Bhaisiyachana': { number: Math.round(376 * 0.0697), percentage: 6.97 },
      'Tarikhet': { number: Math.round(376 * 0.0697), percentage: 6.97 },
      'Chaukhutia': { number: Math.round(376 * 0.0670), percentage: 6.70 },
      'Takula': { number: Math.round(376 * 0.0670), percentage: 6.70 },
      'Lamgara': { number: Math.round(376 * 0.0617), percentage: 6.17 },
      'Bhikiyasain': { number: Math.round(376 * 0.0322), percentage: 3.22 },
      'Syaldey': { number: Math.round(376 * 0.0295), percentage: 2.95 }
    },
    preferredJobSector: {
      'Apparel': { number: 117, percentage: 31.12 },
      'Beauty & Wellness': { number: 54, percentage: 14.43 },
      'Agriculture': { number: 26, percentage: 6.90 },
      'BFSI': { number: 8, percentage: 2.01 },
      'Automotive': { number: 3, percentage: 0.75 }
    },
    preferredEmploymentLocation: {
      'Within Domicile District': { number: Math.round(376 * 0.7346), percentage: 73.46 },
      'Within Domicile State': { number: Math.round(376 * 0.2440), percentage: 24.40 },
      'Outside State': { number: Math.round(376 * 0.0214), percentage: 2.14 }
    }
  },
  employer: {
    totalEmployerOrganizations: 120,
    expectedNewJobs: 150,
    sectorDistribution: {
      'Tourism': { number: 30, percentage: 25.00 },
      'Agriculture': { number: 25, percentage: 20.83 },
      'Education': { number: 20, percentage: 16.67 },
      'Retail': { number: 15, percentage: 12.50 },
      'Healthcare': { number: 10, percentage: 8.33 },
      'Government': { number: 10, percentage: 8.33 },
      'Manufacturing': { number: 5, percentage: 4.17 },
      'IT': { number: 5, percentage: 4.17 }
    }
  }
};
