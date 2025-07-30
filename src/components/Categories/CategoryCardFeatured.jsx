// CategoryCardFeatured.jsx
import React from "react";
import { PenTool } from "lucide-react";

export default function CategoryCardFeatured() {
  return (
    <div className="rounded-xl bg-white p-8 inline-flex flex-col items-center text-center shadow-sm outline outline-1 outline-gray-100 hover:outline-primary-500 hover:shadow-primary transition-all duration-200">
      <div className="bg-primary-50 p-4 rounded-full mb-6">
        <PenTool className="text-primary-500 w-10 h-10" />
      </div>
      <div className="flex flex-col gap-[6px] items-center">
        <h3 className="text-body-lg font-semibold text-gray-900">Graphics & Design</h3>
        <p className="text-body-sm text-gray-500">357 Open position</p>
      </div>
    </div>
  );
}
