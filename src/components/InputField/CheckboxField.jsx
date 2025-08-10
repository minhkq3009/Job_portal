import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";

export default function CheckboxField({
  label,
  defaultChecked = false,
  onChange,
  className = "",
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <button
        type="button"
        onClick={handleChange}
        className={clsx(
          "flex items-center justify-center w-5 h-5 rounded border-2 transition-colors duration-200 mt-0.5",
          isChecked
            ? "bg-primary-500 border-primary-500"
            : "bg-white border-gray-300 hover:border-gray-400"
        )}
      >
        {isChecked && (
          <Check size={12} className="text-white" />
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
