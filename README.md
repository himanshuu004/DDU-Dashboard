# Uttarakhand Youth Employment Dashboard

A comprehensive React.js dashboard for visualizing youth employment statistics and employer data across all 13 districts of Uttarakhand.

## 🚀 Features

- **District-wise Analysis**: Detailed insights for each of the 13 districts
- **Overall State Insights**: Auto-calculated aggregated statistics
- **Interactive Charts**: Bar charts, Pie charts, and Line charts with data labels
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Real-time Calculations**: All statistics computed dynamically from district data

## 🛠️ Tech Stack

- **React.js** (Vite)
- **Tailwind CSS**
- **Chart.js** with react-chartjs-2
- **chartjs-plugin-datalabels**
- **react-countup**
- **Lucide React** (Icons)
- **AOS** (Animate On Scroll)

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy to Vercel

This project is ready to deploy on Vercel for free:

1. **Connect GitHub Repository**:
   - Go to [Vercel](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import the repository: `himanshuu004/DDU-Dashboard`

2. **Configure Project** (Auto-detected):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your project
   - Your dashboard will be live at `https://your-project.vercel.app`

## 📁 Project Structure

```
src/
├── components/
│   ├── Charts/
│   │   ├── BarChart.jsx
│   │   ├── PieChart.jsx
│   │   └── LineChart.jsx
│   ├── DistrictSelect.jsx
│   ├── Navbar.jsx
│   └── StatCard.jsx
├── contexts/
│   └── ThemeContext.jsx
├── data/
│   ├── districtDataLoader.js
│   ├── districts.js
│   └── [district]_data.js (13 district files)
├── pages/
│   ├── Home.jsx
│   ├── DistrictWise.jsx
│   └── About.jsx
├── App.jsx
└── main.jsx
```

## 📊 Data Structure

Each district has a separate data file in `src/data/` with the following structure:

```javascript
{
  youth: {
    totalRegisteredYouth: number,
    educationLevel: { ... },
    villageWise: { ... },
    preferredJobSector: { ... },
    preferredEmploymentLocation: { ... }
  },
  employer: {
    totalEmployerOrganizations: number,
    expectedNewJobs: number,
    sectorDistribution: { ... }
  }
}
```

## 🎨 Features

### Pages
- **Home**: Overall state-level statistics
- **District-wise Insights**: Detailed district analysis with dropdown selection
- **About**: Dashboard information and technical details

### Charts
- Bar Charts: Education levels, job sectors, employer distribution
- Pie Charts: Village distribution, employment locations, district distribution
- Line Charts: Projected employment trends

### Theme
- Light/Dark mode toggle
- Persistent theme preference
- System preference detection

## 📝 License

This project is created for government data showcase purposes.

## 👨‍💻 Author

Created for Uttarakhand Youth Employment Dashboard
