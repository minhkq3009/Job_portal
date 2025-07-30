import React from "react";
import { Layers, ChevronDown } from "lucide-react";

const CategorySelect = () => {
  return (
    <div className="flex items-center rounded-[5px] px-[18px] py-4 w-full md:w-auto gap-3 bg-white">
      <Layers size={24} className="text-primary-500" />
      <span className="text-md text-gray-400">Select Category</span>
      <ChevronDown size={24} className="ml-auto text-gray-400" />
    </div>
  );
};

export default CategorySelect;
