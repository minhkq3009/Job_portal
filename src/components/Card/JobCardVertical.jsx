import React from "react";
import { MapPin } from "lucide-react";

export default function JobCardVertical({ featured }) {
  return (
    <div className="rounded-xl p-8 bg-white hover:shadow-lg transition-all duration-200 border border-gray-100 space-y-6">
      {/* Logo & Header */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded bg-pink-500 flex items-center justify-center text-white font-bold">
          {/* Logo Placeholder */}
          <span>D</span>
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-2">
            <span className="text-body-md font-medium text-gray-900">Dribbble</span>
            {featured && (
              <span className="text-xs px-2 py-[2px] rounded-md bg-rose-100 text-rose-600 font-medium">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <MapPin size={18} className="" />
            <span>California</span>
          </div>
        </div>
      </div>

      {/* Job Title */}
        <div className="flex flex-col gap-2">
            <h3 className="text-body-xl font-medium text-gray-900">
                Senior UX Designer.
            </h3>

            <div className="text-body-sm text-gray-500 flex items-center gap-2">
                <span>Full-Time</span>
                <span>•</span>
                <span>$50k-80k/month</span>
            </div>
        </div>
    </div>
  );
}
