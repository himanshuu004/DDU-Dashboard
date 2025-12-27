import CountUp from 'react-countup';

const StatCard = ({ title, value, icon: Icon, isHighlighted = false, suffix = '', prefix = '' }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg ${
        isHighlighted
          ? 'border-2 border-govGreen-500 bg-gradient-to-br from-govGreen-50 to-govBlue-50'
          : 'border border-gray-200'
      }`}
      data-aos="fade-up"
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-lg ${
            isHighlighted
              ? 'bg-govGreen-500 text-white'
              : 'bg-govBlue-100 text-govBlue-600'
          }`}
        >
          <Icon size={24} />
        </div>
        {isHighlighted && (
          <span className="px-2 py-1 text-xs font-semibold text-govGreen-700 bg-govGreen-200 rounded">
            Featured
          </span>
        )}
      </div>
      <div>
        <p className="text-sm text-black mb-2 font-medium">{title}</p>
        <p
          className={`text-3xl font-bold ${
            isHighlighted ? 'text-govGreen-700' : 'text-govBlue-700'
          }`}
        >
          <CountUp
            start={0}
            end={value}
            duration={2}
            decimals={value % 1 !== 0 ? 1 : 0}
            separator=","
            prefix={prefix}
            suffix={suffix}
          />
        </p>
      </div>
    </div>
  );
};

export default StatCard;

