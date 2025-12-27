# Dashboard Display Guide - Udham Singh Nagar Data

This document explains how the data from `US_naga_data.js` is displayed on the dashboard.

## 📊 Youth Statistics Section

### 1. Total Registered Youth
- **Display**: Big number card with icon
- **Value**: 220
- **Component**: StatCard
- **Features**: CountUp animation, UserCheck icon
- **Location**: Top of Youth Statistics section

### 2. Percentage of Minimum Education (All Students)
- **Display**: Bar Chart
- **X-axis**: Education Level (12th, UG, PG, 10th, 11th, Up to 8th, 9th)
- **Y-axis**: Percentage (%)
- **Data Source**: `getEducationLevelData()` - returns percentages
- **Features**: 
  - Shows percentage values on Y-axis
  - Tooltip displays: "Education Level: Percentage (XX%)"
  - Blue color scheme
- **Component**: BarChart with `showPercentage={true}`

### 3. Village-wise Students Distribution
- **Display**: Pie Chart
- **Data**: Top 5 villages + "Others"
- **Top 5 Villages**:
  - Gadarpur (26 students, 11.82%)
  - Gularbhoj (11 students, 5.00%)
  - Barhaini (10 students, 4.55%)
  - Bazpur Gaon (8 students, 3.64%)
  - Naugwathaggu (8 students, 3.64%)
- **Others**: Remaining students
- **Component**: PieChart
- **Features**: Shows percentage in tooltip, color-coded segments

### 4. Preferred Job Sector (Top 5)
- **Display**: Bar Chart
- **X-axis**: Sector name
- **Y-axis**: Number of students
- **Top 5 Sectors**:
  - BFSI (86 students, 39.09%)
  - Beauty & Wellness (67 students, 30.45%)
  - Agriculture (60 students, 27.27%)
  - Healthcare (56 students, 25.45%)
  - Electronics (43 students, 19.55%)
- **Component**: BarChart
- **Features**: Green color scheme, animated bars

### 5. Preferred Employment Location
- **Display**: Pie Chart
- **Data**:
  - Within Domicile District (134 students, 60.91%)
  - Within Domicile State (48 students, 21.82%)
- **Component**: PieChart
- **Features**: Shows percentage in tooltip, clear labels

## 🏢 Employer Statistics Section

### 1. Total Employer Organizations
- **Display**: Big number card with icon
- **Value**: 254
- **Component**: StatCard
- **Features**: CountUp animation, Factory icon
- **Location**: Top of Employer Statistics section

### 2. Sector-wise Employer Distribution
- **Display**: Bar Chart
- **X-axis**: Sector name
- **Y-axis**: Number of employers
- **Data**: Top 8 sectors + "Others"
- **Top Sectors**:
  - Auto (18, 7.09%)
  - Food (14, 5.51%)
  - Healthcare (4, 1.57%)
  - Packaging (3, 1.18%)
  - Electronic (2, 0.79%)
  - Pharma (2, 0.79%)
  - Food Processing (2, 0.79%)
  - Plus more...
- **Others**: Remaining sectors combined
- **Component**: BarChart
- **Features**: Blue color scheme, clean and readable

## 📁 File Structure

```
src/
 ├─ data/
 │   └─ US_naga_data.js          # All static data
 ├─ components/
 │   ├─ StatCard.jsx             # Number cards with CountUp
 │   ├─ Charts/
 │   │   ├─ BarChart.jsx         # Bar charts with percentage support
 │   │   └─ PieChart.jsx         # Pie charts with percentage labels
 └─ pages/
     └─ Dashboard.jsx            # Main dashboard page
```

## 🔧 Helper Functions

All helper functions are in `US_naga_data.js`:

- `getEducationLevelData()` - Returns education percentages for bar chart
- `getVillageWiseData()` - Returns top 5 villages + Others for pie chart
- `getPreferredJobSectorData()` - Returns top 5 job sectors for bar chart
- `getPreferredEmploymentLocationData()` - Returns employment locations for pie chart
- `getEmployerSectorDistributionData()` - Returns top 8 sectors + Others for bar chart

## 🎨 Visual Features

1. **CountUp Animation**: All number cards animate from 0 to final value
2. **Smooth Chart Animations**: All charts animate on load (1.5s duration)
3. **Responsive Design**: Works on mobile and desktop
4. **Color Scheme**: 
   - Blue for employer data
   - Green for youth preferences
   - Government-style professional look
5. **AOS Animations**: Sections fade in on scroll

## 📝 Notes

- All data is static and hard-coded
- No API calls required
- All percentages are calculated and stored in the data file
- "Others" category is automatically calculated for pie/bar charts
- Tooltips show detailed information on hover


