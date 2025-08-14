import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LabelTag from "../Label/LabelTag.jsx";
import Button from "../Button/Button";
import LogoCompany from "../Company/LogoCompany.jsx";

export default function JobCardVertical({
  company = "Dribbble",
  location = "California",
  title = "Senior UX Designer",
  salary = "$50k-80k/month",
  topLabel, // optional
  topVariant = "danger",
  typeLabel = "Full-Time",
  logo,
  logoText = "D",
  featured = false, // enable gradient background for featured job
  hideButton = false, // hide Apply button
  compact = false, // compact mode for mobile
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jobs/job-details`);
  };
  return (
    <div
      onClick={handleCardClick}
      className={`rounded-xl hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-primary-500 cursor-pointer ${
        featured ? "bg-gradient-to-r from-[#FFF6E6] to-[#FFFFFF]" : "bg-white"
      } ${
        compact 
          ? "p-4 space-y-3" 
          : "p-8 space-y-6"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <LogoCompany 
          logo={logo} 
          logoText={logoText} 
          size={compact ? "sm" : "md"} 
        />
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-2">
            <span className={`font-medium text-gray-900 ${
              compact ? "text-sm" : "text-body-md"
            }`}>{company}</span>
            {topLabel && <LabelTag label={topLabel} variant={topVariant} />}
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin size={compact ? 14 : 18} />
            <span className={compact ? "text-xs" : "text-sm"}>{location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className={`font-medium text-gray-900 ${
          compact ? "text-base" : "text-body-xl"
        }`}>{title}</h3>
        <div className="flex items-center gap-2">
          <span className={`text-gray-500 ${
            compact ? "text-xs" : "text-body-sm"
          }`}>{typeLabel}</span>
          <span className={`text-gray-500 ${
            compact ? "text-xs" : "text-body-sm"
          }`}>•</span>
          <span className={`text-gray-500 ${
            compact ? "text-xs" : "text-body-sm"
          }`}>{salary}</span>
        </div>
      </div>

      {/* Apply Button */}
      {!hideButton && (
        <div className="pt-2">
          <Button
            variant="secondary"
            size={compact ? "small" : "medium"}
            rightIcon={ArrowRight}
            className="w-full"
          >
            Apply Now
          </Button>
        </div>
      )}
    </div>
  );
}
