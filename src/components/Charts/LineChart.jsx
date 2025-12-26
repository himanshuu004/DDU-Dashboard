import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({ title, data, xAxisLabel, yAxisLabel, color = 'govBlue' }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: yAxisLabel || 'Value',
        data: data.values,
        borderColor:
          color === 'govBlue'
            ? 'rgba(0, 121, 230, 1)'
            : 'rgba(0, 154, 85, 1)',
        backgroundColor:
          color === 'govBlue'
            ? 'rgba(0, 121, 230, 0.1)'
            : 'rgba(0, 154, 85, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor:
          color === 'govBlue'
            ? 'rgba(0, 121, 230, 1)'
            : 'rgba(0, 154, 85, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 12,
            weight: '500',
          },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 15,
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold',
        },
        color: '#1f2937',
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
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 11,
            weight: '500',
          },
        },
        title: {
          display: true,
          text: xAxisLabel || 'Category',
          font: {
            size: 12,
            weight: 'bold',
          },
          color: '#ffffff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
          font: {
            size: 11,
            weight: '500',
          },
          beginAtZero: true,
        },
        title: {
          display: true,
          text: yAxisLabel || 'Value',
          font: {
            size: 12,
            weight: 'bold',
          },
          color: '#ffffff',
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 h-80 transition-colors duration-200" data-aos="fade-up">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;

