// Static data for Bageshwar district
export const districtData = {
  youth: {
    totalRegisteredYouth: 130,
    educationLevel: {
      '12th': { number: Math.round(130 * 0.7287), percentage: 72.87 },
      'UG': { number: Math.round(130 * 0.2248), percentage: 22.48 },
      '10th': { number: Math.round(130 * 0.0233), percentage: 2.33 },
      'PG': { number: Math.round(130 * 0.0233), percentage: 2.33 }
    },
    blockWise: {
      'Bageshwar': { number: Math.round(130 * 0.3953), percentage: 39.53 },
      'Garur': { number: Math.round(130 * 0.3876), percentage: 38.76 },
      'Kapkote': { number: Math.round(130 * 0.2171), percentage: 21.71 }
    },
    preferredJobSector: {
      'Apparel': { number: 39, percentage: 30.00 },
      'Beauty & Wellness': { number: 20, percentage: 15.00 },
      'Agriculture': { number: 10, percentage: 7.50 }
    },
    preferredEmploymentLocation: {
      'Within Domicile State': { number: Math.round(130 * 0.5969), percentage: 59.69 },
      'Within Domicile District': { number: Math.round(130 * 0.4031), percentage: 40.31 }
    }
  },
  employer: {
    totalEmployerOrganizations: 60,
    expectedNewJobs: 80,
    sectorDistribution: {
      'Tourism': { number: 15, percentage: 25.00 },
      'Agriculture': { number: 12, percentage: 20.00 },
      'Healthcare': { number: 9, percentage: 15.00 },
      'Retail': { number: 7, percentage: 11.67 },
      'Education': { number: 6, percentage: 10.00 },
      'Manufacturing': { number: 5, percentage: 8.33 },
      'Government': { number: 3, percentage: 5.00 },
      'IT': { number: 3, percentage: 5.00 }
    }
  }
};
