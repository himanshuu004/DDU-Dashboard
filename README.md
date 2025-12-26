# Uttarakhand Youth Employment Dashboard

A clean, modern, and stylish React.js dashboard for showcasing youth growth and employment data across Uttarakhand districts.

## Features

- **District Selection**: Dropdown to select from 13 Uttarakhand districts
- **Animated Statistics**: CountUp.js animations for key metrics
- **Interactive Charts**: Bar charts and Pie charts using Chart.js
- **Responsive Design**: Fully responsive layout for mobile and desktop
- **Government-Style UI**: Professional design with blue and green color scheme
- **Smooth Animations**: AOS animations for section entry

## Tech Stack

- React.js (Vite)
- Tailwind CSS
- Chart.js
- CountUp.js
- Lucide Icons
- AOS (Animate On Scroll)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
 ├─ components/
 │   ├─ DistrictSelect.jsx
 │   ├─ StatCard.jsx
 │   ├─ Charts/
 │   │   ├─ BarChart.jsx
 │   │   └─ PieChart.jsx
 ├─ data/
 │   └─ districtData.js
 ├─ pages/
 │   └─ Dashboard.jsx
 ├─ App.jsx
 └─ main.jsx
```

## Default District

The dashboard defaults to "Udham Singh Nagar" district. All data is static and hard-coded in `src/data/districtData.js`.

