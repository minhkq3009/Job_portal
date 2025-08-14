import React from "react";
import { MapPin, Clock, Bookmark, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LabelTag from "../Label/LabelTag.jsx";
import Button from "../Button/Button";
import LogoCompany from "../Company/LogoCompany.jsx";

export default function JobCardHorizontal({
  location = "United Kingdom",
  title = "Senior UX Designer",
  salary = "$50k-80k/month",
  time = "4 Days Remaining",
  topLabel,
  topVariant = "danger",
  typeLabel = "Full-Time",
  typeVariant = "primary",
  logo,
  logoText = "D",
  featured = false,
  companyId,
  isBookmarked = false,
  isExpired = false,
  onApply,
  onBookmark,
  onClick,

}) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent navigation when clicking on buttons
    if (e.target.closest('button')) {
      return;
    }
    
    // If custom onClick is provided, use it
    if (onClick) {
      onClick();
      return;
    }
    
    // Navigate to company info if companyId is provided, otherwise job details
    if (companyId !== undefined) {
      navigate(`/companies/${companyId}`);
    } else {
      navigate(`/jobs/job-details`);
    }
  };
  return (
    <div
      onClick={handleCardClick}
      className={`rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-200 flex justify-between items-center gap-5 hover:border-primary-500 cursor-pointer ${
        featured ? "bg-gradient-to-r from-[#FFF6E6] to-[#FFFFFF]" : "bg-white"
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <LogoCompany logo={logo} logoText={logoText} size="lg" companyName={title} />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-body-lg font-medium text-gray-900">{title}</h3>
            {topLabel && topLabel.trim() !== "" && <LabelTag label={topLabel} variant={topVariant} />}
            {typeLabel && typeLabel.trim() !== "" && <LabelTag label={typeLabel} variant={typeVariant} />}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-body-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
            <span>{salary}</span>
            {time && time.trim() !== "" && (
              <div className="flex items-center gap-1">
                <Clock size={18} />
                <span>{time}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <Bookmark 
          className={`w-5 h-5 cursor-pointer transition-colors ${
            isBookmarked 
              ? 'text-primary-500 fill-primary-500' 
              : 'text-gray-400 hover:text-primary-500'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onBookmark && onBookmark();
          }}
        />
        <Button
          variant="secondary"
          size="medium"
          rightIcon={isExpired ? null : ArrowRight}
          disabled={isExpired}
          onClick={(e) => {
            e.stopPropagation();
            if (!isExpired && onApply) {
              onApply();
            }
          }}
        >
          {isExpired ? "Deadline Expired" : "Apply Job"}
        </Button>
      </div>
    </div>
  );
}
