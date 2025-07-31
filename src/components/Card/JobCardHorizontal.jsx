import React from "react";
import { MapPin, Clock, Bookmark, ArrowRight } from "lucide-react";
import LabelTag from "../Label/LabelTag.jsx";
import Button from "../Button/Button.jsx";

const JobCardHorizontal = ({ featured }) => {
  return (
    <div className="rounded-xl p-8 bg-white border border-gray-100 hover:shadow-lg transition-all duration-200 flex justify-between items-center gap-5">
      {/* Left side: Logo + Info */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="w-[4.25rem] h-[4.25rem] bg-pink-500 rounded flex items-center justify-center text-white font-bold">
          D
        </div>

        {/* Details */}
        <div className="flex flex-col gap-3">
          {/* Title + Tags */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-body-lg font-medium text-gray-900">
              Senior UX Designer
            </h3>
            {featured && <LabelTag label="Featured" variant="danger" />}
            <LabelTag label="Full-Time" variant="primary" />
          </div>

          {/* Location + Salary + Time */}
          <div className="flex flex-wrap items-center gap-4 text-body-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin size={22} className="" />
              <span>United Kingdom</span>
            </div>
            <span>$50k-80k/month</span>
            <div className="flex items-center gap-1">
              <Clock size={22} className="" />
              <span>4 Days Remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Bookmark + Button */}
      <div className="flex items-center gap-4">
        <Bookmark className="w-5 h-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
        <Button
          label={
            <span className="flex items-center gap-2">
              Apply Now <ArrowRight className="w-4 h-4" />
            </span>
          }
          type="secondary"
          size="medium"
        />
      </div>
    </div>
  );
};

export default JobCardHorizontal;
