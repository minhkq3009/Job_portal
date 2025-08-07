import React from "react";
import { MapPin, DollarSign, Calendar, Check, X } from "lucide-react";
import Button from "../Button/Button";
import LogoCompany from "../Company/LogoCompany";
import LabelTag from "../Label/LabelTag";

export default function JobCardHorizontalSmall({
  logo,
  logoText,
  companyName,
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
    <div className="flex items-center justify-between bg-white rounded-lg border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all duration-200 cursor-pointer">
      {/* Logo & Info */}
      <div className="flex items-center gap-4">
        <LogoCompany 
          logo={logo} 
          logoText={logoText} 
          size="sm" 
          companyName={companyName} 
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <LabelTag label={type} variant="primary" />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1">
              <MapPin size={20} className="text-gray-200" />
              <span className="text-body-sm text-gray-600 ml-0.5">{location}</span>
            </span>
            <span className="flex items-center gap-1">
              <DollarSign size={20} className="text-gray-200" />
              <span className="text-body-sm text-gray-600 ml-0.5">{salary}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Date, Status, View - Spaced out */}
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-1 min-w-[120px]">
          <Calendar size={20} className="text-gray-200" />
          <span className="text-body-sm text-gray-600 ml-0.5">{datePosted}</span>
        </div>
        <div className={`${statusConfig.textColor} flex items-center gap-1 min-w-[100px]`}>
          {statusConfig.icon} {status}
        </div>
        <div className="min-w-[120px]">
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
    </div>
  );
}