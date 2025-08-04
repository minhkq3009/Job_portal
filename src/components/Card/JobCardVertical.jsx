import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LabelTag from "../Label/LabelTag.jsx";
import Button from "../Button/Button.jsx";
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
  featured = false, // thêm prop featured
  jobId = 1, // thêm prop jobId
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jobs/job-details`);
  };
  return (
    <div
      onClick={handleCardClick}
      className={`rounded-xl p-8 hover:shadow-lg transition-all duration-200 border border-gray-100 space-y-6 hover:border-primary-500 cursor-pointer ${
        featured ? "bg-gradient-to-r from-[#FFF6E6] to-[#FFFFFF]" : "bg-white"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <LogoCompany logo={logo} logoText={logoText} size="md" />
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-2">
            <span className="text-body-md font-medium text-gray-900">{company}</span>
            {topLabel && <LabelTag label={topLabel} variant={topVariant} />}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-body-xl font-medium text-gray-900">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-body-sm text-gray-500">{typeLabel}</span>
          <span className="text-body-sm text-gray-500">•</span>
          <span className="text-body-sm text-gray-500">{salary}</span>
        </div>
      </div>

      {/* Apply Button */}
      <div className="pt-2">
        <Button
          variant="secondary"
          size="medium"
          rightIcon={ArrowRight}
          className="w-full"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}
