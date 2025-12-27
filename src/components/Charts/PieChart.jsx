import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ title, data, percentageData = null, districtSectors = null }) => {
  const colors = [
    'rgba(0, 121, 230, 0.8)',
    'rgba(0, 154, 85, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(201, 203, 207, 0.8)',
    'rgba(255, 159, 64, 0.8)',
  ];

  const borderColors = [
    'rgba(0, 121, 230, 1)',
    'rgba(0, 154, 85, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(201, 203, 207, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: colors.slice(0, Object.keys(data).length),
        borderColor: borderColors.slice(0, Object.keys(data).length),
        borderWidth: 2,
      },
    ],
  };

  // Calculate total for percentages
  const total = Object.values(data).reduce((a, b) => a + b, 0);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        formatter: function(value, context) {
          const label = context.chart.data.labels[context.dataIndex];
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = percentageData && percentageData[label]
            ? percentageData[label]
            : ((value / total) * 100).toFixed(1);
          
          // Show location name and percentage on chart if segment is large enough
          // Lower threshold to show more labels
          if ((value / total) * 100 > 1) {
            return `${label}\n${percentage}%`;
          }
          return '';
        },
        font: {
          size: 13,
          weight: 'bold',
        },
        color: '#ffffff',
        textStrokeColor: '#000000',
        textStrokeWidth: 2,
        padding: 4,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#000000',
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 16,
        titleFont: {
          size: 16,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        cornerRadius: 8,
        borderColor: 'rgba(0, 121, 230, 0.3)',
        borderWidth: 2,
        displayColors: false,
        titleColor: '#1f2937',
        bodyColor: '#374151',
        callbacks: {
          title: function (context) {
            const label = context[0].label || '';
            const value = context[0].parsed || 0;
            const total = context[0].dataset.data.reduce((a, b) => a + b, 0);
            const percentage = percentageData && percentageData[label]
              ? percentageData[label]
              : ((value / total) * 100).toFixed(1);
            return `${label} - ${percentage}%`;
          },
          label: function (context) {
            // If districtSectors is provided, show top 3 sectors
            if (districtSectors) {
              const districtName = context.label || '';
              const sectors = districtSectors[districtName] || [];
              
              if (sectors.length > 0) {
                return [
                  'Top Preferred Job Sectors:',
                  ...sectors.map((sector, index) => `  ${index + 1}. ${sector}`)
                ];
              }
              return 'No sector data available';
            }
            
            // Default behavior for other pie charts
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1500,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
      <h3 className="text-lg font-bold text-black mb-6">{title}</h3>
      <div className="flex justify-center items-center">
        {/* Pie Chart - Centered and Larger */}
        <div className="h-[500px] w-full max-w-2xl">
          <Pie data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
