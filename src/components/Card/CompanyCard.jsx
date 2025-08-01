import React from "react";
import { MapPin, Bookmark } from "lucide-react";
import Button from "../Button/Button";

const CompanyCard = ({
  logoText = "D",
  company = "Dribbble",
  location = "New York",
  onBookmark,
  onOpen,
}) => {
  return (
    <div className="group rounded-2xl p-8 bg-white outline outline-gray-100 transition-all flex flex-col items-start gap-8 w-auto max-w-fit hover:outline-primary-500 hover:shadow-primary">
      {/* Top section: logo + name + location */}
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="w-[56px] h-[56px] rounded bg-pink-500 flex items-center justify-center text-white font-bold text-lg">
          {logoText}
        </div>

        {/* Name + Location */}
        <div className="flex flex-col">
          <span className="text-body-lg font-medium text-gray-900">{company}</span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Bottom section: Bookmark + Button */}
      <div className="flex items-center justify-between gap-3">
        <div
            onClick={onBookmark}
            className="w-12 h-12 rounded-[5px]  flex items-center justify-center text-primary-500 hover:border-primary-300 cursor-pointer transition-all"
            >
            <Bookmark size={18} />
            </div>
        <Button
          label="Open Position"
          type="secondary"
          size="medium"
          onClick={onOpen}
        />
      </div>
    </div>
  );
};

export default CompanyCard;
