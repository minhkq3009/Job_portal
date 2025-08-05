import React from "react";

export default function JobOverviewItem({ icon: Icon, label, value, isLast = false, className = "" }) {
  const defaultWidth = className.includes('w-') ? '' : 'w-1/3';
  
  return (
    <div className={`flex flex-col items-start gap-4 ${defaultWidth} ${className} ${isLast ? 'mb-0' : 'mb-6'}`}>
      <Icon className="text-blue-600" size={32} />
      <div className="flex flex-col gap-1">
        <p className="text-body-xs text-gray-500 uppercase">{label}</p>
        <p className="text-body-sm text-gray-900">{value}</p>
      </div>
    </div>
  );
}