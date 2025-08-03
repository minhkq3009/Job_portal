import React from "react";

export default function CategoryCard({ icon, title, subtitle, titleSize = "heading-04", subtitleSize = "body-md" }) {
  // Map custom size names to actual Tailwind classes
  const getTitleClass = (size) => {
    switch (size) {
      case "heading-04":
        return "text-heading-04";
      case "body-lg":
        return "text-body-lg";
      case "text-xl":
        return "text-xl";
      case "text-lg":
        return "text-lg";
      default:
        return "text-heading-04";
    }
  };

  const getSubtitleClass = (size) => {
    switch (size) {
      case "body-md":
        return "text-body-md";
      case "body-sm":
        return "text-body-sm";
      case "text-sm":
        return "text-sm";
      case "text-base":
        return "text-base";
      default:
        return "text-body-md";
    }
  };

  return (
    <div className="group rounded-xl bg-white p-5 flex items-center gap-4 hover:shadow-primary transition-all duration-200 cursor-pointer w-full">
      {/* Icon container */}
      <div className="w-16 h-16 md:w-18 md:h-18 lg:w-[72px] lg:h-[72px] rounded-lg flex items-center justify-center bg-primary-50 text-primary-500 transition-all duration-200 group-hover:bg-primary-500 group-hover:text-white">
        {React.createElement(icon, { className: "w-10 h-10 transition-all duration-200" })}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-[6px]">
        <h3 className={`${getTitleClass(titleSize)} font-semibold text-gray-900`}>{title}</h3>
        <p className={`${getSubtitleClass(subtitleSize)} text-gray-500`}>{subtitle}</p>
      </div>
    </div>
  );
}
