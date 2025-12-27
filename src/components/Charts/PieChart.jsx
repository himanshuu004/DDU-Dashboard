import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ title, data, percentageData = null, districtSectors = null, showDetailsPanel = false }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
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
          
          // Show only percentage for smaller segments, full label for larger ones
          const segmentPercentage = (value / total) * 100;
          if (segmentPercentage > 1) {
            // For segments > 5%, show label and percentage
            if (segmentPercentage > 5) {
              // Truncate long labels
              const maxLabelLength = 15;
              const truncatedLabel = label.length > maxLabelLength 
                ? label.substring(0, maxLabelLength) + '...' 
                : label;
              return `${truncatedLabel}\n${percentage}%`;
            } else {
              // For smaller segments, show only percentage
              return `${percentage}%`;
            }
          }
          return '';
        },
        font: {
          size: 10,
          weight: 'bold',
        },
        color: '#ffffff',
        textStrokeColor: '#000000',
        textStrokeWidth: 1.5,
        padding: 3,
        textAlign: 'center',
        clip: false,
        overflow: 'hidden',
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          weight: 'bold',
        },
        color: isDark ? '#a78bfa' : '#7053bc',
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        enabled: true,
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
        displayColors: false,
        callbacks: {
          title: function (context) {
            const label = context[0].label || '';
            const value = context[0].parsed || 0;
            const total = context[0].dataset.data.reduce((a, b) => a + b, 0);
            const percentage = percentageData && percentageData[label]
              ? percentageData[label]
              : ((value / total) * 100).toFixed(1);
            
            // Update hovered item immediately when tooltip appears (desktop only)
            if ((districtSectors || showDetailsPanel) && label && window.innerWidth >= 768) {
              requestAnimationFrame(() => {
                setHoveredItem(label);
              });
            }
            
            return `${label} - ${percentage}%`;
          },
          label: function (context) {
            // Simple tooltip - just return empty for district sectors
            if (districtSectors) {
              return '';
            }
            // Default behavior for other pie charts
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${value.toLocaleString()} (${percentage}%)`;
          },
        },
        external: (districtSectors || showDetailsPanel) ? function(context) {
          // On mobile, don't use hover - use click instead
          if (window.innerWidth < 768) {
            return;
          }
          
          // Track hover state for right panel - immediate updates (desktop only)
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            // Tooltip hidden - clear hovered item immediately
            setHoveredItem(null);
            return;
          }
          
          // Get item name from title and update state
          const titleLines = tooltipModel.title || [];
          if (titleLines.length > 0) {
            const itemName = titleLines[0].split(' - ')[0] || '';
            requestAnimationFrame(() => {
              setHoveredItem(itemName);
            });
          }
        } : undefined,
        onClick: (event, elements, chart) => {
          // Handle click on mobile devices
          if (window.innerWidth < 768 && (districtSectors || showDetailsPanel)) {
            if (elements.length > 0) {
              const elementIndex = elements[0].index;
              const label = chart.data.labels[elementIndex];
              setClickedItem(clickedItem === label ? null : label);
              setHoveredItem(clickedItem === label ? null : label);
            } else {
              setClickedItem(null);
              setHoveredItem(null);
            }
          }
        }
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1500,
      easing: 'easeInOutQuart',
    },
    onClick: (event, elements, chart) => {
      // Handle click on mobile devices
      if (window.innerWidth < 768 && (districtSectors || showDetailsPanel)) {
        if (elements.length > 0) {
          const elementIndex = elements[0].index;
          const label = chart.data.labels[elementIndex];
          setClickedItem(clickedItem === label ? null : label);
          setHoveredItem(clickedItem === label ? null : label);
        } else {
          setClickedItem(null);
          setHoveredItem(null);
        }
      }
    },
  };

  // Determine chart size based on whether details panel is shown and screen size
  const showPanel = districtSectors || showDetailsPanel;
  const chartHeight = isMobile 
    ? (showPanel ? 'h-[400px]' : 'h-[350px]')
    : (showPanel ? 'h-[600px]' : 'h-[500px]');
  const chartMaxWidth = showPanel ? 'max-w-2xl' : 'max-w-2xl';

  // Get data for selected item (hovered on desktop, clicked on mobile)
  const activeItem = hoveredItem || clickedItem;
  const selectedSectors = activeItem && districtSectors ? districtSectors[activeItem] : null;
  const selectedPercentage = activeItem && percentageData ? percentageData[activeItem] : null;
  const selectedValue = activeItem && data ? data[activeItem] : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300" data-aos="fade-up">
      <h3 className="text-lg font-bold text-black dark:text-gray-200 mb-6">{title}</h3>
      <div className={`flex ${showPanel ? (isMobile ? 'flex-col gap-4' : 'flex-row gap-6 items-start') : 'justify-center items-center'}`}>
        {/* Pie Chart */}
        <div 
          className={`${chartHeight} ${showPanel ? (isMobile ? 'w-full' : 'w-2/3') : 'w-full'} ${chartMaxWidth} ${showPanel && !isMobile ? '' : 'mx-auto'}`}
          onMouseLeave={() => {
            if (showPanel && !isMobile) {
              // Clear immediately when mouse leaves (desktop only)
              setHoveredItem(null);
            }
          }}
          onClick={(e) => {
            // On mobile, clicking outside clears selection
            if (isMobile && showPanel && e.target === e.currentTarget) {
              setClickedItem(null);
              setHoveredItem(null);
            }
          }}
        >
          <Pie data={chartData} options={options} />
        </div>
        
        {/* Details Panel - Below chart on mobile, right side on desktop */}
        {showPanel && (
          <div className={`${isMobile ? 'w-full' : 'w-1/3'} flex flex-col`}>
            {activeItem && (selectedSectors || selectedPercentage) ? (
              <div className={`bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-800 rounded-lg ${isMobile ? 'p-3' : 'p-4'} border-2 border-purple-200 dark:border-gray-600 ${isMobile ? '' : 'sticky top-4'} transition-colors duration-300`}>
                {/* Item Name and Percentage */}
                <div className="mb-4">
                  <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-[#7053bc] dark:text-purple-400 mb-1`}>{activeItem}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedPercentage}% {districtSectors ? 'of Total Youth' : 'of Total'}
                  </p>
                  {selectedValue && (
                    <p className="text-sm text-gray-500 mt-1">
                      Count: {selectedValue.toLocaleString()}
                    </p>
                  )}
                </div>
                
                {/* Top Preferred Job Sectors - Only for district sectors */}
                {selectedSectors && (
                  <div>
                    <h5 className="text-sm font-bold text-[#7053bc] dark:text-purple-400 mb-3 pb-2 border-b-2 border-purple-300 dark:border-gray-600">
                      Top Preferred Job Sectors:
                    </h5>
                    <div className="space-y-2">
                      {selectedSectors.map((sectorData, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-[#7053bc] dark:text-purple-400 font-bold text-sm min-w-[20px]">
                            {index + 1}.
                          </span>
                          <div className="flex-1">
                            <p className="text-black dark:text-gray-200 font-semibold text-sm">
                              {sectorData.sector}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              {sectorData.percentage}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default PieChart;
