import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ title, data, percentageData = null }) => {
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

  // Prepare data list for right side
  const dataList = Object.entries(data).map(([label, value], index) => {
    const percentage = percentageData && percentageData[label]
      ? percentageData[label]
      : ((value / total) * 100).toFixed(1);
    return {
      label,
      value,
      percentage: parseFloat(percentage),
      color: colors[index % colors.length],
      borderColor: borderColors[index % borderColors.length]
    };
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend since we show data on right
      },
      datalabels: {
        display: true,
        formatter: function(value, context) {
          const label = context.chart.data.labels[context.dataIndex];
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = percentageData && percentageData[label]
            ? percentageData[label]
            : ((value / total) * 100).toFixed(1);
          
          // Show number and percentage on chart if segment is large enough
          if ((value / total) * 100 > 5) {
            return `${value}\n${percentage}%`;
          }
          return '';
        },
        font: {
          size: 12,
          weight: 'bold',
        },
        color: '#fff',
        textStrokeColor: '#000',
        textStrokeWidth: 2,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          weight: 'bold',
        },
        color: window.matchMedia('(prefers-color-scheme: dark)').matches || document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#1f2937',
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        bodyFont: {
          size: 13,
        },
        cornerRadius: 6,
        callbacks: {
          label: function (context) {
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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 transition-colors duration-200" data-aos="fade-up">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Pie Chart - Left Side */}
        <div className="h-96 lg:h-[400px]">
          <Pie data={chartData} options={options} />
        </div>

        {/* Data List - Right Side */}
        <div className="grid grid-cols-2 gap-2">
          {dataList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-2.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-l-4"
              style={{ borderLeftColor: item.color }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-xs truncate">
                  {item.label}
                </span>
              </div>
              <div className="ml-4">
                <div className="font-bold text-gray-900 dark:text-gray-100 text-sm">
                  {item.value.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {item.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
