import React from "react";
import { Search } from "lucide-react";

const KeywordInput = () => {
  return (
    <div className="flex items-center rounded-[5px] px-[18px] py-4 gap-3 w-full bg-white">
      <Search size={24} className="text-primary-500" />
      <input
        type="text"
        placeholder="Job title, keyword, company"
        className="outline-none text-md w-full bg-transparent"
      />
    </div>
  );
};

export default KeywordInput;
