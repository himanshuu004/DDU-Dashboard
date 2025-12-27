// Static data for Rudraprayag district
export const districtData = {
  youth: {
    totalRegisteredYouth: 110,
    educationLevel: {
      '12th': { number: Math.round(110 * 0.4364), percentage: 43.64 },
      'UG': { number: Math.round(110 * 0.3545), percentage: 35.45 },
      '10th': { number: Math.round(110 * 0.0909), percentage: 9.09 },
      'PG': { number: Math.round(110 * 0.0636), percentage: 6.36 },
      'Up to 8th': { number: Math.round(110 * 0.0545), percentage: 5.45 }
    },
    blockWise: {
      'Ukhimath': { number: Math.round(110 * 0.6636), percentage: 66.36 },
      'Agustmuni': { number: Math.round(110 * 0.2273), percentage: 22.73 },
      'Jakholi': { number: Math.round(110 * 0.1091), percentage: 10.91 }
    },
    preferredJobSector: {
      'Apparel': { number: 35, percentage: 32.00 },
      'Beauty & Wellness': { number: 15, percentage: 14.00 },
      'Healthcare': { number: 12, percentage: 11.00 },
      'Agriculture': { number: 8, percentage: 7.00 }
    },
    preferredEmploymentLocation: {
      'Within Domicile District': { number: Math.round(110 * 0.5909), percentage: 59.09 },
      'Within Domicile State': { number: Math.round(110 * 0.4091), percentage: 40.91 }
    }
  },
  employer: {
    totalEmployerOrganizations: 50,
    expectedNewJobs: 65,
    sectorDistribution: {
      'Tourism': { number: 12, percentage: 24.00 },
      'Agriculture': { number: 10, percentage: 20.00 },
      'Healthcare': { number: 8, percentage: 16.00 },
      'Retail': { number: 6, percentage: 12.00 },
      'Education': { number: 5, percentage: 10.00 },
      'Manufacturing': { number: 4, percentage: 8.00 },
      'Government': { number: 3, percentage: 6.00 },
      'IT': { number: 2, percentage: 4.00 }
    }
  }
};
