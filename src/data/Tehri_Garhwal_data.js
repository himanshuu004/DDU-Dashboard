// Static data for Tehri Garhwal district
export const districtData = {
  youth: {
    totalRegisteredYouth: 624,
    educationLevel: {
      '12th': { number: Math.round(624 * 0.4856), percentage: 48.56 },
      'UG': { number: Math.round(624 * 0.1522), percentage: 15.22 },
      '10th': { number: Math.round(624 * 0.1058), percentage: 10.58 },
      'Other': { number: Math.round(624 * 0.0849), percentage: 8.49 },
      'Up to 8th': { number: Math.round(624 * 0.0769), percentage: 7.69 },
      '11th': { number: Math.round(624 * 0.0721), percentage: 7.21 },
      'PG': { number: Math.round(624 * 0.0208), percentage: 2.08 }
    },
    blockWise: {
      'Jaunpur': { number: Math.round(624 * 0.1939), percentage: 19.39 },
      'Chamba': { number: Math.round(624 * 0.1875), percentage: 18.75 },
      'Narendra Nagar': { number: Math.round(624 * 0.1378), percentage: 13.78 },
      'Thauldhar': { number: Math.round(624 * 0.1010), percentage: 10.10 },
      'Devparyag': { number: Math.round(624 * 0.0897), percentage: 8.97 },
      'Bhilangana': { number: Math.round(624 * 0.0849), percentage: 8.49 },
      'Pratap Nagar': { number: Math.round(624 * 0.0657), percentage: 6.57 },
      'New Tehri': { number: Math.round(624 * 0.0561), percentage: 5.61 },
      'Kirtinagar': { number: Math.round(624 * 0.0497), percentage: 4.97 },
      'Jakhnidhar': { number: Math.round(624 * 0.0288), percentage: 2.88 },
      'Dhanolti': { number: Math.round(624 * 0.0048), percentage: 0.48 }
    },
    preferredJobSector: {
      'Apparel': { number: 181, percentage: 29.00 },
      'Beauty & Wellness': { number: 87, percentage: 14.00 },
      'Healthcare': { number: 75, percentage: 12.00 },
      'Agriculture': { number: 50, percentage: 8.00 }
    },
    preferredEmploymentLocation: {
      'Within Domicile District': { number: Math.round(624 * 0.7612), percentage: 76.12 },
      'Within Domicile State': { number: Math.round(624 * 0.1154), percentage: 11.54 },
      'Outside Country': { number: Math.round(624 * 0.0625), percentage: 6.25 },
      'Outside Domicile State': { number: Math.round(624 * 0.0609), percentage: 6.09 }
    }
  },
  employer: {
    totalEmployerOrganizations: 140,
    expectedNewJobs: 180,
    sectorDistribution: {
      'Tourism': { number: 28, percentage: 20.00 },
      'Agriculture': { number: 22, percentage: 15.71 },
      'Healthcare': { number: 18, percentage: 12.86 },
      'Retail': { number: 15, percentage: 10.71 },
      'Education': { number: 12, percentage: 8.57 },
      'Manufacturing': { number: 10, percentage: 7.14 },
      'Government': { number: 10, percentage: 7.14 },
      'IT': { number: 5, percentage: 3.57 }
    }
  }
};
