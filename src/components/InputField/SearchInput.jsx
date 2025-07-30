import { ChevronDown, Search } from "lucide-react";
import React from "react";

export default function SearchInput() {
  return (
    <div className="flex items-center justify-start px-[24px] py-[9px] w-[600px] bg-white rounded-[5px] shadow-sm outline outline-1 outline-gray-100 gap-5">
      {/* Quốc gia */}
      <button className="flex items-center gap-3 text-gray-700 h-full">
        <img
          src="https://flagcdn.com/w40/in.png"
          alt="India Flag"
          className="w-5 h-4 object-cover rounded-sm"
        />
        <span className="text-sm font-medium text-gray-900">India</span>
        <ChevronDown size={16} className="text-gray-500 w-4 h-4 min-w-[16px]" />
      </button>

      {/* Divider */}
      <div className="w-px h-8 bg-gray-100" />

      {/* Icon + Input */}
      <div className="flex items-center gap-2 flex-1 text-gray-500 h-full">
        <Search size={20} className="text-primary-500 w-5 h-5 min-w-[20px]" />
        <input
          type="text"
          placeholder="Job title, keyword, company"
          className="flex-1 text-sm focus:outline-none text-gray-800 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}
