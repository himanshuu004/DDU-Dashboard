// Static data for Chamoli district
export const districtData = {
  youth: {
    totalRegisteredYouth: 300,
    educationLevel: {
      '12th': { number: Math.round(300 * 0.4767), percentage: 47.67 },
      'UG': { number: Math.round(300 * 0.2800), percentage: 28.00 },
      'PG': { number: Math.round(300 * 0.1500), percentage: 15.00 },
      '10th': { number: Math.round(300 * 0.0700), percentage: 7.00 },
      '11th': { number: Math.round(300 * 0.0167), percentage: 1.67 },
      'Up to 8th': { number: Math.round(300 * 0.0067), percentage: 0.67 }
    },
    blockWise: {
      'Karanprayag': { number: Math.round(300 * 0.2267), percentage: 22.67 },
      'Nandanagar (Ghat)': { number: Math.round(300 * 0.2233), percentage: 22.33 },
      'Narayanabagar': { number: Math.round(300 * 0.1333), percentage: 13.33 },
      'Gairsain': { number: Math.round(300 * 0.1133), percentage: 11.33 },
      'Dasholi': { number: Math.round(300 * 0.1100), percentage: 11.00 },
      'Joshimath': { number: Math.round(300 * 0.0933), percentage: 9.33 },
      'Pokhari': { number: Math.round(300 * 0.0533), percentage: 5.33 },
      'Tharali': { number: Math.round(300 * 0.0267), percentage: 2.67 },
      'Dewal': { number: Math.round(300 * 0.0200), percentage: 2.00 }
    },
    preferredJobSector: {
      'Apparel': { number: 87, percentage: 29.00 },
      'Beauty & Wellness': { number: 42, percentage: 14.00 },
      'Healthcare': { number: 33, percentage: 11.00 },
      'Agriculture': { number: 24, percentage: 8.00 }
    },
    preferredEmploymentLocation: {
      'Within Domicile District': { number: Math.round(300 * 0.6689), percentage: 66.89 },
      'Within Domicile State': { number: Math.round(300 * 0.3106), percentage: 31.06 },
      'Outside State': { number: Math.round(300 * 0.0171), percentage: 1.71 },
      'Outside Country': { number: Math.round(300 * 0.0034), percentage: 0.34 }
    }
  },
  employer: {
    totalEmployerOrganizations: 90,
    expectedNewJobs: 120,
    sectorDistribution: {
      'Tourism': { number: 22, percentage: 24.44 },
      'Agriculture': { number: 18, percentage: 20.00 },
      'Healthcare': { number: 14, percentage: 15.56 },
      'Retail': { number: 11, percentage: 12.22 },
      'Education': { number: 9, percentage: 10.00 },
      'Manufacturing': { number: 7, percentage: 7.78 },
      'Government': { number: 5, percentage: 5.56 },
      'IT': { number: 4, percentage: 4.44 }
    }
  }
};
