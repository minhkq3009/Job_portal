import { ChevronDown, Search } from "lucide-react";
import React from "react";
import IndiaFlag from "../../assets/images/India.svg";

export default function SearchInput({ className = "" }) {
  return (
    <div className={`flex items-center justify-start px-6 py-2 w-full bg-white rounded-md shadow-sm border border-gray-100 gap-5 ${className}`}>
      {/* Country Selector */}
      <button className="flex items-center gap-3 text-gray-700 shrink-0">
        <img
          src={IndiaFlag}
          alt="India Flag"
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span className="text-body-sm font-medium text-gray-900">India</span>
        <ChevronDown size={16} className="text-gray-500" />
      </button>

      {/* Divider */}
      <div className="w-px h-8 bg-gray-200" />

      {/* Search Input */}
      <div className="flex items-center gap-2 flex-1">
        <Search size={20} className="text-primary-500 shrink-0" />
        <input
          type="text"
          placeholder="Job title, keyword, company"
          className="flex-1 text-body-sm focus:outline-none text-gray-800 placeholder:text-gray-400 bg-transparent"
        />
      </div>
    </div>
  );
}
