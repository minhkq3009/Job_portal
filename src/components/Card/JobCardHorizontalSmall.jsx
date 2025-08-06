import React from "react";
import { MapPin, DollarSign, Calendar, Check, X } from "lucide-react";
import Button from "../Button/Button";
import LogoCompany from "../Company/LogoCompany";
import LabelTag from "../Label/LabelTag";

export default function JobCardHorizontalSmall({
  logo,
  logoText,
  title,
  type = "Full Time",
  location,
  salary,
  datePosted,
  status = "Active",
  onViewDetail,
}) {
  const getStatusConfig = (status) => {
    switch (status) {
      case "Active":
        return {
          icon: <Check size={14} />,
          textColor: "text-green-600",
          bgColor: "bg-green-50"
        };
      case "Expire":
        return {
          icon: <X size={14} />,
          textColor: "text-red-600", 
          bgColor: "bg-red-50"
        };
      default:
        return {
          icon: <Check size={14} />,
          textColor: "text-green-600",
          bgColor: "bg-green-50"
        };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <div className="flex items-center justify-between bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all duration-200 cursor-pointer">
      {/* Logo & Info */}
      <div className="flex items-center gap-4">
        <LogoCompany 
          logo={logo} 
          logoText={logoText} 
          size="sm" 
          companyName={title} 
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <LabelTag label={type} variant="primary" />
          </div>
          <div className="flex items-center gap-4 text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {location}
            </span>
            <span className="flex items-center gap-1">
              <DollarSign size={14} /> {salary}
            </span>
          </div>
        </div>
      </div>

      {/* Date, Status, View */}
      <div className="flex items-center gap-6">
        <div className="text-gray-500 flex items-center gap-1">
          <Calendar size={14} className="text-pink-500" />
          {datePosted}
        </div>
        <div className={`${statusConfig.textColor} flex items-center gap-1`}>
          {statusConfig.icon} {status}
        </div>
        <Button
          variant="secondary"
          size="medium"
          onClick={onViewDetail}
          className="text-sm px-3 py-1"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}