import React from "react";
import { MapPin, Bookmark } from "lucide-react";
import Button from "../Button/Button";

const CompanyCard = ({
  logoText = "D",
  company = "Dribbble",
  location = "New York",
  onBookmark,
  onOpen,
  showBookmark = true,
  className = "",
  compact = false,
}) => {
  return (
    <div className={`group rounded-2xl p-4 md:p-8 bg-white border border-gray-100 transition-all flex flex-col items-start gap-4 md:gap-8 w-full hover:border-primary-500 hover:shadow-primary ${className}`}>
      {/* Top section: logo + name + location */}
      <div className="flex items-start gap-3 md:gap-4 w-full">
        {/* Logo */}
        <div className={`rounded bg-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0 ${
          compact ? "w-[40px] h-[40px] text-sm" : "w-[48px] h-[48px] md:w-[56px] md:h-[56px] text-base md:text-lg"
        }`}>
          {logoText}
        </div>

        {/* Name + Location */}
        <div className="flex flex-col flex-1 min-w-0">
          <span className={`font-medium text-gray-900 truncate ${
            compact ? "text-sm" : "text-body-md md:text-body-lg"
          }`}>{company}</span>
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin size={compact ? 14 : 16} className="md:w-[18px] md:h-[18px]" />
            <span className={`truncate ${
              compact ? "text-xs" : "text-sm"
            }`}>{location}</span>
          </div>
        </div>
      </div>

      {/* Bottom section: Bookmark + Button */}
      <div className="flex items-center gap-3 w-full">
        {showBookmark && (
          <div
              onClick={onBookmark}
              className={`rounded-[5px] flex items-center justify-center text-primary-500 hover:border-primary-300 cursor-pointer transition-all flex-shrink-0 ${
                compact ? "w-8 h-8" : "w-10 h-10 md:w-12 md:h-12"
              }`}
              >
              <Bookmark size={compact ? 14 : 16} className="md:w-[18px] md:h-[18px]" />
              </div>
        )}
        <Button
          variant="secondary"
          size={compact ? "small" : "medium"}
          onClick={onOpen}
          className={`${showBookmark ? "flex-1" : "w-full"}`}
        >
          Open Position
        </Button>
      </div>
    </div>
  );
};

export default CompanyCard;
