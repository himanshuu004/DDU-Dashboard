// Static data for Pithoragarh district
export const districtData = {
  youth: {
    totalRegisteredYouth: 208,
    educationLevel: {
      '12th': { number: Math.round(208 * 0.4615), percentage: 46.15 },
      'UG': { number: Math.round(208 * 0.2019), percentage: 20.19 },
      '10th': { number: Math.round(208 * 0.2019), percentage: 20.19 },
      'PG': { number: Math.round(208 * 0.0962), percentage: 9.62 },
      '11th': { number: Math.round(208 * 0.0240), percentage: 2.40 },
      'Up to 8th': { number: Math.round(208 * 0.0096), percentage: 0.96 },
      '9th': { number: Math.round(208 * 0.0048), percentage: 0.48 }
    },
    blockWise: {
      'Bin': { number: Math.round(208 * 0.3942), percentage: 39.42 },
      'Munsiyari': { number: Math.round(208 * (0.1346 + 0.1346)), percentage: 26.92 },
      'Kanalichina': { number: Math.round(208 * 0.1298), percentage: 12.98 },
      'Dharchula': { number: Math.round(208 * 0.0769), percentage: 7.69 },
      'Didihat': { number: Math.round(208 * 0.0721), percentage: 7.21 },
      'Pithoragarh': { number: Math.round(208 * 0.0337), percentage: 3.37 },
      'Berinag': { number: Math.round(208 * 0.0144), percentage: 1.44 },
      'Gangolihat': { number: Math.round(208 * 0.0096), percentage: 0.96 }
    },
    preferredJobSector: {
      'Apparel': { number: 62, percentage: 30.00 },
      'Beauty & Wellness': { number: 29, percentage: 14.00 },
      'Healthcare': { number: 25, percentage: 12.00 },
      'Agriculture': { number: 15, percentage: 7.00 }
    },
    preferredEmploymentLocation: {
      'Within Domicile District': { number: Math.round(208 * 0.3990), percentage: 39.90 },
      'Within Domicile State': { number: Math.round(208 * 0.3654), percentage: 36.54 },
      'Outside State': { number: Math.round(208 * 0.1394), percentage: 13.94 },
      'Outside Country': { number: Math.round(208 * 0.0962), percentage: 9.62 }
    }
  },
  employer: {
    totalEmployerOrganizations: 80,
    expectedNewJobs: 100,
    sectorDistribution: {
      'Tourism': { number: 20, percentage: 25.00 },
      'Agriculture': { number: 16, percentage: 20.00 },
      'Healthcare': { number: 12, percentage: 15.00 },
      'Retail': { number: 10, percentage: 12.50 },
      'Education': { number: 8, percentage: 10.00 },
      'Manufacturing': { number: 6, percentage: 7.50 },
      'Government': { number: 4, percentage: 5.00 },
      'IT': { number: 4, percentage: 5.00 }
    }
  }
};
