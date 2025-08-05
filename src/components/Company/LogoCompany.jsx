// src/components/Company/LogoCompany.jsx
import React from "react";
import clsx from "clsx";

export default function LogoCompany({ logo, logoText = "?", alt = "", size = "md", companyName }) {
  const sizeMap = {
    sm: "w-10 h-10 text-base",
    md: "w-14 h-14 text-xl",
    lg: "w-[4.25rem] h-[4.25rem] text-2xl",
    xl: "w-20 h-20 text-3xl",
  };

  // Auto-generate logo URL from company name if no logo provided
  const getLogoUrl = (name) => {
    if (!name) return null;
    const domainMap = {
      'Dribbble': 'dribbble.com',
      'Upwork': 'upwork.com',
      'Slack': 'slack.com',
      'Freepik': 'freepik.com',
      'Google': 'google.com',
      'Facebook': 'facebook.com',
      'Apple': 'apple.com',
      'Microsoft': 'microsoft.com',
      'Netflix': 'netflix.com',
      'Twitter': 'twitter.com',
      'LinkedIn': 'linkedin.com',
      'Amazon': 'amazon.com',
      'Figma': 'figma.com'
    };
    
    const domain = domainMap[name];
    return domain ? `https://logo.clearbit.com/${domain}` : null;
  };

  const logoUrl = logo || getLogoUrl(companyName);

  return (
    <div className={clsx("rounded bg-transparent flex items-center justify-center text-gray-900 font-bold", sizeMap[size])}>
      {logoUrl ? <img src={logoUrl} alt={alt} className="w-full h-full object-cover rounded" /> : logoText}
    </div>
  );
}
