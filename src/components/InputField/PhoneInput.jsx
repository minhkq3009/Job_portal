import { useState } from "react";
import { ChevronDown } from "lucide-react";
import IndiaFlag from "../../assets/images/India.svg";
import USFlag from "../../assets/images/FlagUS.svg";

const countries = [
  { code: "+91", name: "India", flag: IndiaFlag },
  { code: "+1", name: "USA", flag: USFlag },
];

export default function PhoneInput({
  value = "",
  onChange,
  placeholder = "Phone number",
  className = "",
}) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center justify-start px-4 py-3 w-full bg-white rounded-md border border-gray-100 gap-3">
        {/* Country Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-gray-700 shrink-0 hover:bg-gray-50 px-2 py-1 rounded"
          >
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} Flag`}
              className="w-5 h-4 object-cover rounded-sm"
            />
            <span className="text-body-sm font-medium text-gray-900">
              {selectedCountry.code}
            </span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className="w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} Flag`}
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span className="text-body-sm text-gray-900">
                    {country.code} {country.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* Phone Input */}
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 text-body-md focus:outline-none text-gray-800 placeholder:text-gray-400 bg-transparent"
        />
      </div>
    </div>
  );
}
