import React from "react";
import { ChevronDown } from "lucide-react";

const DashboardMenuItem = ({ 
  icon: Icon, 
  text, 
  onClick, 
  isActive = false,
  count,
  children,
  isExpandable = false,
  isExpanded = false,
  onToggle,
  className = "" 
}) => {
  const handleClick = () => {
    if (isExpandable && onToggle) {
      onToggle();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className={className}>
      <div 
        className={`flex items-center gap-4 px-5 py-2.5 cursor-pointer transition-all duration-200 focus:outline-none ${
          isActive 
            ? "bg-primary-50 text-primary-500 border-l-[3px] border-primary-500" 
            : "text-gray-500 hover:text-gray-900 focus:bg-primary-50 focus:text-primary-500 focus:border-l-[3px] focus:border-primary-500"
        }`}
        onClick={handleClick}
        tabIndex={0}
      >
        {Icon && (
          <Icon 
            className={`w-6 h-6 transition-colors duration-200 ${
              isActive ? "text-primary-500" : "text-current"
            }`}
            strokeWidth={2}
          />
        )}
        <span className="text-base font-medium flex-1">
          {text}
        </span>
        
        {count && (
          <span className="text-body-xs bg-red-500 text-white px-2 py-0.5 rounded-full min-w-[20px] text-center">
            {count}
          </span>
        )}

        {isExpandable && (
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            } ${isActive ? "text-primary-500" : "text-current"}`}
            strokeWidth={2}
          />
        )}
      </div>

      {/* Submenu */}
      {isExpandable && isExpanded && children && (
        <div className="ml-6 mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default DashboardMenuItem;