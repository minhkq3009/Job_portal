import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function Dropdown({ 
  options = [], 
  defaultValue = "Select option",
  onSelect,
  className = "",
  ...props 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedValue(option.label);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Determine text color based on state
  const getTextColor = () => {
    if (selectedValue !== defaultValue) {
      return "text-gray-700"; // selected state
    }
    if (isOpen || isHovered) {
      return "text-gray-900"; // open/hover state
    }
    return "text-gray-500"; // default state
  };

  return (
    <div className={clsx("relative", className)} ref={dropdownRef} {...props}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={clsx(
          "w-full flex items-center justify-between",
          "border border-gray-100 rounded-md",
          "px-4 py-3.5", // padding 14px (3.5 * 4) vertical, 16px horizontal
          "text-sm font-medium",
          "transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
          getTextColor()
        )}
      >
        <span className="truncate">{selectedValue}</span>
        <ChevronDown 
          className={clsx(
            "w-4 h-4 transition-transform duration-200",
            {
              "rotate-180": isOpen,
              "rotate-0": !isOpen,
            }
          )} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={option.value || index}
                type="button"
                onClick={() => handleSelect(option)}
                className={clsx(
                  "w-full text-left px-4 py-3", // same padding as main button
                  "text-sm text-gray-700",
                  "hover:bg-gray-50 hover:text-gray-900",
                  "transition-colors duration-150",
                  "focus:outline-none focus:bg-gray-50",
                  {
                    "bg-gray-50 text-gray-900": selectedValue === option.label,
                  }
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}