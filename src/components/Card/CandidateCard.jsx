import React from "react";
import { MapPin, Star, Clock, Bookmark, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LabelTag from "../Label/LabelTag.jsx";
import Button from "../Button/Button.jsx";

export default function CandidateCard({
  id,
  name = "Sarah Johnson",
  title = "Senior UX Designer",
  location = "San Francisco, CA",
  experience = "5+ years",
  skills = ["UI/UX Design", "Figma", "Prototyping"],
  avatar,
  rating = 4.9,
  hourlyRate = "$85/hour",
  availability = "Available",
  topLabel,
  topVariant = "danger",
  typeLabel = "Full-Time",
  typeVariant = "primary",
  featured = false,
  onViewProfile,
  useModal = true, // true for modal, false for page navigation
}) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent navigation when clicking on buttons
    if (e.target.closest('button')) {
      return;
    }
    if (useModal && onViewProfile) {
      onViewProfile(id);
    } else {
      navigate(`/candidates/${id}`);
    }
  };

  const availabilityColor = availability === "Available" ? "text-green-600" : "text-orange-600";

  return (
    <div
      onClick={handleCardClick}
      className={`rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-200 flex justify-between items-center gap-5 hover:border-primary-500 cursor-pointer ${
        featured ? "bg-gradient-to-r from-[#FFF6E6] to-[#FFFFFF]" : "bg-white"
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-body-lg font-medium text-gray-900">{name}</h3>
            {topLabel && topLabel.trim() !== "" && <LabelTag label={topLabel} variant={topVariant} />}
            {typeLabel && typeLabel.trim() !== "" && <LabelTag label={typeLabel} variant={typeVariant} />}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-body-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-700">{title}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={18} />
              <span>{location}</span>
            </div>
            <span>{experience} experience</span>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="font-medium">{rating}</span>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                {skill}
              </span>
            ))}
            {skills.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                +{skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-3">
        <div className="text-right">
          <div className="text-body-lg font-semibold text-gray-900">{hourlyRate}</div>
          <div className={`text-body-sm ${availabilityColor}`}>{availability}</div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="small"
            leftIcon={Bookmark}
            onClick={(e) => {
              e.stopPropagation();
              // Handle bookmark
            }}
          />
          <Button
            variant="secondary"
            size="medium"
            rightIcon={ArrowRight}
            onClick={(e) => {
              e.stopPropagation();
              if (useModal && onViewProfile) {
                onViewProfile(id);
              } else {
                navigate(`/candidates/${id}`);
              }
            }}
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}