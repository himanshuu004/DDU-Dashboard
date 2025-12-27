import { ChevronDown, MapPin } from 'lucide-react';

const DistrictSelect = ({ districts, selectedDistrict, onDistrictChange }) => {
  return (
    <div data-aos="fade-down">
      <label htmlFor="district-select" className="block text-sm font-semibold text-black mb-3 flex items-center gap-2">
        <MapPin className="w-4 h-4 text-govBlue-600" />
        Select District
      </label>
      <div className="relative">
        <select
          id="district-select"
          value={selectedDistrict}
          onChange={(e) => onDistrictChange(e.target.value)}
          className="w-full px-4 py-3 pr-12 border-2 border-govBlue-300 rounded-lg bg-white text-black font-medium focus:outline-none focus:ring-2 focus:ring-govBlue-500 focus:border-govBlue-500 appearance-none cursor-pointer transition-all duration-200 hover:border-govBlue-400 shadow-sm hover:shadow-md"
        >
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-govBlue-600" />
        </div>
      </div>
      <p className="mt-2 text-xs text-black">
        Currently viewing: <span className="font-semibold text-govBlue-700">{selectedDistrict}</span>
      </p>
    </div>
  );
};

export default DistrictSelect;

