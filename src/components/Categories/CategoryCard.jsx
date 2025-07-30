import React from "react";
import { PenTool } from "lucide-react";

export default function CategoryCard() {
  return (
    <div className="group rounded-xl bg-white p-6 inline-flex items-center gap-4 outline outline-1 outline-gray-100 hover:outline-none hover:shadow-primary transition-all duration-200">
      {/* Icon container */}
      <div className="p-[18px] rounded-lg flex items-center justify-center bg-primary-50 transition-all duration-200 group-hover:bg-primary-500">
        <PenTool className="w-8 h-8 text-primary-500 transition-all duration-200 group-hover:text-white" />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-[6px]">
        <h3 className="text-body-lg font-semibold text-gray-900">Graphics & Design</h3>
        <p className="text-body-sm text-gray-500">357 Open position</p>
      </div>
    </div>
  );
}
