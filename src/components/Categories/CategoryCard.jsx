import React from "react";

export default function CategoryCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="group rounded-xl bg-white p-5 flex items-center gap-4 hover:shadow-primary transition-all duration-200 cursor-pointer w-full">
      {/* Icon container */}
      <div className="w-16 h-16 md:w-18 md:h-18 lg:w-[72px] lg:h-[72px] rounded-lg flex items-center justify-center bg-primary-50 text-primary-500 transition-all duration-200 group-hover:bg-primary-500 group-hover:text-white">
        <Icon className="w-10 h-10 transition-all duration-200" />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-heading-04 font-semibold text-gray-900">{title}</h3>
        <p className="text-body-md text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}
