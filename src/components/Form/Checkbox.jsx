import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";

export default function Checkbox({
  label,
  defaultChecked = false,
  onChange,
  className = "",
  size = "medium", // "small" | "medium" | "large"
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5", 
    large: "w-6 h-6"
  };

  const iconSizes = {
    small: 10,
    medium: 12,
    large: 14
  };

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <button
        type="button"
        onClick={handleChange}
        className={clsx(
          "flex items-center justify-center rounded border-2 transition-colors duration-200 mt-0.5",
          sizeClasses[size],
          isChecked
            ? "bg-primary-500 border-primary-500"
            : "bg-white border-gray-300 hover:border-gray-400"
        )}
      >
        {isChecked && (
          <Check size={iconSizes[size]} className="text-white" />
        )}
      </button>
      
      <label 
        onClick={handleChange}
        className="text-body-md text-gray-900 cursor-pointer flex-1"
      >
        {label}
      </label>
    </div>
  );
}