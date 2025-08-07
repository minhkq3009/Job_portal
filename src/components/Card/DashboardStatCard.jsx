import React from "react";
import clsx from "clsx";

const bgMap = {
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-600",
};

const iconWrapperMap = {
  blue: "bg-white text-blue-600",
  orange: "bg-white text-orange-500",
  green: "bg-white text-green-600",
};

export default function DashboardStatCard({
  count,
  label,
  icon,
  color = "blue", // 'blue' | 'orange' | 'green'
}) {
  return (
    <div className={clsx("flex items-center justify-between p-6 rounded-lg", bgMap[color])}>
      <div>
        <div className="text-heading-04 font-semibold text-black">{count}</div>
        <div className="text-body-sm text-gray-600">{label}</div>
      </div>
      <div
        className={clsx(
          "w-16 h-16 rounded-md flex items-center justify-center",
          iconWrapperMap[color]
        )}
      >
        {icon}
      </div>
    </div>
  );
}