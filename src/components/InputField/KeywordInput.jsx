import React, { useState } from "react";
import { Search } from "lucide-react";

const KeywordInput = ({ 
  Icon = Search, 
  placeholder = "Job title, keyword, company",
  className = "",
  showIcon = true,
  value: controlledValue,
  onChange: controlledOnChange,
  ...props 
}) => {
  const [internalValue, setInternalValue] = useState("");
  
  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const onChange = controlledOnChange || ((e) => setInternalValue(e.target.value));

  return (
    <div className={`flex items-center rounded-md px-3 py-2 md:py-3 gap-3 w-full bg-white border border-gray-100 focus-within:border-primary-500 transition-colors ${className}`}>
      {showIcon && Icon && <Icon size={20} className="text-primary-500 shrink-0" />}
              <input
        type="text"
        value={value}
        onChange={onChange}
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
