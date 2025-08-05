import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterSidebar() {
  const [radius, setRadius] = useState(32);
  const [showRadius, setShowRadius] = useState(true);
  const [showOrgType, setShowOrgType] = useState(true);

  const organizationTypes = [
    "Government",
    "Semi Government",
    "NGO",
    "Private Company",
    "International Agencies",
    "Others",
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-gray-100">
      {/* Location Radius */}
      <div className="pt-8 px-8 pb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowRadius(!showRadius)}
        >
          <h3 className="text-body-lg font-medium text-gray-900">
            Location Radius: <span className="text-body-lg font-normal">{radius} miles</span>
          </h3>
          {showRadius ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>

        {showRadius && (
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="100"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full accent-blue-600"
            />
          </div>
        )}
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-100"></div>

      {/* Organization Type */}
      <div className="pt-6 px-8 pb-8">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowOrgType(!showOrgType)}
        >
          <h3 className="text-body-lg font-medium text-gray-900">Organization Type</h3>
          {showOrgType ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>

        {showOrgType && (
          <div className="mt-5 space-y-4">
            {organizationTypes.map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="organization"
                  className="w-[22px] h-[22px] form-radio accent-blue-600"
                />
                <span className="text-body-sm text-gray-900">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}