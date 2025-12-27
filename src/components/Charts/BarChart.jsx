import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const BarChart = ({ title, data, xAxisLabel, yAxisLabel, color = 'govBlue', showPercentage = false, percentageData = null, numberData = null }) => {

  const values = Object.values(data);
  const labels = Object.keys(data);
  const total = showPercentage && percentageData ? Object.values(percentageData).reduce((a, b) => a + b, 0) : values.reduce((a, b) => a + b, 0);
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: yAxisLabel || 'Count',
        data: values,
        backgroundColor:
          color === 'govBlue'
            ? 'rgba(0, 121, 230, 0.7)'
            : 'rgba(0, 154, 85, 0.7)',
        borderColor:
          color === 'govBlue'
            ? 'rgba(0, 121, 230, 1)'
            : 'rgba(0, 154, 85, 1)',
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#000000',
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
          label: function(context) {
            const value = context.parsed.y;
            if (showPercentage && percentageData) {
              const label = context.label;
              const percentage = percentageData[label] || ((value / total) * 100).toFixed(2);
              return `${label}: ${value} (${percentage}%)`;
            }
            return `${context.dataset.label}: ${value}`;
          }
        }
      },
      datalabels: {
        display: true,
        anchor: 'end',
        align: 'top',
        formatter: function(value, context) {
          const label = context.chart.data.labels[context.dataIndex];
          let displayText = '';
          
          // Always show only percentage
          if (showPercentage && percentageData && percentageData[label]) {
            const percentage = percentageData[label];
            displayText = `${percentage}%`;
          } 
          // Calculate percentage from value
          else {
            const percentage = ((value / total) * 100).toFixed(1);
            displayText = `${percentage}%`;
          }
          
          return displayText;
        },
        font: {
          size: 12,
          weight: 'bold',
        },
        color: '#ffffff',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 4,
        padding: {
          top: 4,
          bottom: 4,
          left: 6,
          right: 6
        },
        textStrokeColor: '#000000',
        textStrokeWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#000000',
          font: {
            size: 12,
            weight: 'bold',
          },
          maxRotation: 45,
          minRotation: 0,
        },
        title: {
          display: true,
          text: xAxisLabel || 'Category',
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#000000',
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
        ticks: {
          color: '#000000',
          font: {
            size: 12,
            weight: 'bold',
          },
          beginAtZero: true,
        },
        title: {
          display: true,
          text: yAxisLabel || 'Count',
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#000000',
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-80" data-aos="fade-up">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

