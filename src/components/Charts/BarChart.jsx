import { useState, useEffect } from 'react';
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
  // Check if dark mode is active
  const isDark = document.documentElement.classList.contains('dark');
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect large screen (>= 1024px)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const values = Object.values(data);
  const labels = Object.keys(data);
  const total = showPercentage && percentageData ? Object.values(percentageData).reduce((a, b) => a + b, 0) : values.reduce((a, b) => a + b, 0);
  
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: yAxisLabel || 'Count',
        data: values,
        backgroundColor: 'rgba(112, 83, 188, 0.7)', // #7053bc with opacity
        borderColor: 'rgba(112, 83, 188, 1)', // #7053bc
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
        color: isDark ? '#a78bfa' : '#7053bc',
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
        display: isLargeScreen,
        anchor: 'end',
        align: 'top',
        formatter: function(value, context) {
          const label = context.chart.data.labels[context.dataIndex];
          
          // For large screens, show category name and value
          if (isLargeScreen) {
            let displayText = `${label}\n${value.toLocaleString()}`;
            
            // Add percentage if available
            if (showPercentage && percentageData && percentageData[label]) {
              const percentage = percentageData[label];
              displayText += `\n${percentage}%`;
            } else if (showPercentage) {
              const percentage = ((value / total) * 100).toFixed(1);
              displayText += `\n${percentage}%`;
            }
            
            return displayText;
          }
          
          // For smaller screens, show only percentage
          if (showPercentage && percentageData && percentageData[label]) {
            const percentage = percentageData[label];
            return `${percentage}%`;
          } 
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
        font: {
          size: 11,
          weight: 'bold',
        },
        color: '#ffffff',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 6,
        padding: {
          top: 6,
          bottom: 6,
          left: 8,
          right: 8
        },
        textStrokeColor: '#000000',
        textStrokeWidth: 1,
        textAlign: 'center',
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
          color: '#ffffff',
        },
      },
      y: {
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
        ticks: {
          color: isDark ? '#e5e7eb' : '#000000',
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
          color: isDark ? '#ffffff' : '#000000',
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart',
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-80 transition-colors duration-300" data-aos="fade-up">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

