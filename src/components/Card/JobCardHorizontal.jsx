import React from "react";
import { MapPin, Clock, Bookmark, ArrowRight } from "lucide-react";
import LabelTag from "../Label/LabelTag.jsx";
import Button from "../Button/Button.jsx";
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
}) {
  return (
    <div className="rounded-xl p-8 bg-white border border-gray-100 hover:shadow-lg transition-all duration-200 flex justify-between items-center gap-5 hover:ring-1 hover:outline-primary-500 hover:shadow-primary">
      {/* Left */}
      <div className="flex items-center gap-4">
        <LogoCompany logo={logo} logoText={logoText} size="lg" />

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-body-lg font-medium text-gray-900">{title}</h3>
            {topLabel && <LabelTag label={topLabel} variant={topVariant} />}
            <LabelTag label={typeLabel} variant={typeVariant} />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-body-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
            <span>{salary}</span>
            <div className="flex items-center gap-1">
              <Clock size={18} />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
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
}
