import React, { useState } from "react";
import { Search } from "lucide-react";

const KeywordInput = ({ 
  Icon = Search, 
  placeholder = "Job title, keyword, company",
  className = "",
  showIcon = true,
  ...props 
}) => {
  const [value, setValue] = useState("");

  return (
    <div className={`flex items-center rounded-md px-4 py-3 gap-3 w-full bg-white border border-gray-100 focus-within:border-primary-500 transition-colors ${className}`}>
      {showIcon && Icon && <Icon size={20} className="text-primary-500 shrink-0" />}
              <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 text-body-md outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
          }}
          {...props}
        />
    </div>
  );
};

export default KeywordInput;
