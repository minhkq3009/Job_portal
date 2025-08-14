import React from "react";

export default function CategoryCard({ icon, title, subtitle, titleSize = "heading-04", subtitleSize = "body-md" }) {
  // Map custom size names to actual Tailwind classes
  const getTitleClass = (size) => {
    switch (size) {
      case "heading-01":
        return "md:text-heading-01";
      case "heading-02":
        return "md:text-heading-02";
      case "heading-03":
        return "md:text-heading-03";
      case "heading-04":
        return "md:text-heading-04";
      case "body-lg":
        return "md:text-body-lg";
      case "text-xl":
        return "md:text-xl";
      case "text-lg":
        return "md:text-lg";
      default:
        return "md:text-heading-04";
    }
  };

  const getSubtitleClass = (size) => {
    switch (size) {
      case "body-md":
        return "md:text-body-md";
      case "body-sm":
        return "md:text-body-sm";
      case "text-sm":
        return "md:text-sm";
      case "text-base":
        return "md:text-base";
      default:
        return "md:text-body-md";
    }
  };

  return (
    <div className="group rounded-xl bg-white p-2 md:p-5 flex items-center gap-2 md:gap-4 hover:shadow-primary transition-all duration-200 cursor-pointer w-full">
      {/* Icon container */}
      <div className="w-10 h-10 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] rounded-lg flex items-center justify-center bg-primary-50 text-primary-500 transition-all duration-200 group-hover:bg-primary-500 group-hover:text-white">
        {React.createElement(icon, { className: "w-5 h-5 md:w-10 md:h-10 transition-all duration-200" })}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-0.5 md:gap-[6px]">
        <h3 className={`text-body-md ${getTitleClass(titleSize)} font-semibold text-gray-900`}>{title}</h3>
        <p className={`text-body-xs ${getSubtitleClass(subtitleSize)} text-gray-500`}>{subtitle}</p>
      </div>
    </div>
  );
}
