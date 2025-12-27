// Static data for Champawat district
export const districtData = {
  youth: {
    totalRegisteredYouth: 332,
    educationLevel: {
      '12th': { number: Math.round(332 * 0.4281), percentage: 42.81 },
      'UG': { number: Math.round(332 * 0.2538), percentage: 25.38 },
      '10th': { number: Math.round(332 * 0.1621), percentage: 16.21 },
      'Up to 8th': { number: Math.round(332 * 0.0887), percentage: 8.87 },
      'PG': { number: Math.round(332 * 0.0673), percentage: 6.73 }
    },
    blockWise: {
      'Lohaghat': { number: Math.round(332 * 0.5061), percentage: 50.61 },
      'Champawat': { number: Math.round(332 * 0.2485), percentage: 24.85 },
      'Barakot': { number: Math.round(332 * 0.1595), percentage: 15.95 },
      'Pati': { number: Math.round(332 * (0.0736 + 0.0092 + 0.0031)), percentage: 8.59 }
    },
    preferredJobSector: {
      'Apparel': { number: 96, percentage: 29.00 },
      'Beauty & Wellness': { number: 50, percentage: 15.00 },
      'Healthcare': { number: 40, percentage: 12.00 },
      'Agriculture': { number: 23, percentage: 7.00 }
    },
    preferredEmploymentLocation: {
      'Within Domicile District': { number: Math.round(332 * 0.5260), percentage: 52.60 },
      'Within Domicile State': { number: Math.round(332 * 0.2385), percentage: 23.85 },
      'Outside Domicile State': { number: Math.round(332 * 0.1407), percentage: 14.07 },
      'Outside Country': { number: Math.round(332 * 0.0948), percentage: 9.48 }
    }
  },
  employer: {
    totalEmployerOrganizations: 100,
    expectedNewJobs: 130,
    sectorDistribution: {
      'Tourism': { number: 25, percentage: 25.00 },
      'Agriculture': { number: 20, percentage: 20.00 },
      'Healthcare': { number: 15, percentage: 15.00 },
      'Retail': { number: 12, percentage: 12.00 },
      'Education': { number: 10, percentage: 10.00 },
      'Manufacturing': { number: 8, percentage: 8.00 },
      'Government': { number: 5, percentage: 5.00 },
      'IT': { number: 5, percentage: 5.00 }
    }
  }
};
