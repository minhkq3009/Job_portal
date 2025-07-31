// src/components/Company/LogoCompany.jsx
import React from "react";
import clsx from "clsx";

export default function LogoCompany({ logo, logoText = "?", alt = "", size = "md" }) {
  const sizeMap = {
    sm: "w-10 h-10 text-base",
    md: "w-14 h-14 text-xl",
    lg: "w-[4.25rem] h-[4.25rem] text-2xl",
  };

  return (
    <div className={clsx("rounded bg-pink-500 flex items-center justify-center text-white font-bold", sizeMap[size])}>
      {logo ? <img src={logo} alt={alt} className="w-full h-full object-cover rounded" /> : logoText}
    </div>
  );
}
