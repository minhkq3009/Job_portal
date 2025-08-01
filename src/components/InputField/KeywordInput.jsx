import React, { useRef, useState } from "react";
import { Search } from "lucide-react";

// eslint-disable-next-line no-unused-vars
const KeywordInput = ({ Icon = Search, placeholder = "Job title, keyword, company" }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  return (
    <div className="flex items-center rounded-[5px] px-[18px] py-4 gap-3 w-full bg-white relative">
      <Icon size={24} className="text-primary-500 z-10" />
      <div className="relative flex-1 h-full">
        {/* Custom placeholder */}
        {value === "" && (
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 text-md text-gray-400 pointer-events-none w-full whitespace-nowrap overflow-hidden text-ellipsis block pr-2"
            style={{ zIndex: 1 }}
          >
            {placeholder}
          </span>
        )}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="outline-none text-md w-full bg-transparent relative z-10"
          style={{ position: "relative", background: "transparent" }}
        />
      </div>
    </div>
  );
};

export default KeywordInput;
