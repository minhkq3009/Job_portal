import { useState } from "react";
import clsx from "clsx";

export default function ToggleField({
  label,
  description,
  defaultValue = false,
  onChange,
  className = "",
}) {
  const [isEnabled, setIsEnabled] = useState(defaultValue);

  const handleToggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Title */}
      <h3 className="text-body-md text-gray-900 font-medium">
        {label}
      </h3>
      
      {/* Toggle + Description */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleToggle}
          className={clsx(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
            isEnabled ? "bg-primary-500" : "bg-gray-200"
          )}
        >
          <span
            className={clsx(
              "inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out",
              isEnabled ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        
        <div className="flex items-center gap-2">
          <span className={clsx(
            "text-body-sm font-medium",
            isEnabled ? "text-success-500" : "text-danger-500"
          )}>
            {isEnabled ? "Yes" : "No"}
          </span>
          
          {description && (
            <span className="text-body-sm text-gray-600">
              {description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}