import React from "react";
import { Calendar, MessageSquare, ArrowRight } from "lucide-react";
import Button from "../Button/Button";

export default function BlogCardHorizontal({
  image,
  date,
  commentsCount,
  title,
  description,
  buttonLabel = "Read More",
  onButtonClick,
  variant = "default" // "default" | "compact"
}) {
  const handleCardClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  if (variant === "compact") {
    return (
      <div 
        onClick={handleCardClick}
        className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
      >
        <img 
          src={image} 
          alt={title}
          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 text-body-sm text-gray-500 mb-1">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              <span>{commentsCount} comments</span>
            </div>
          </div>
          <h4 className="text-body-md font-medium text-gray-900 leading-tight">
            {title}
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={handleCardClick}
      className="flex flex-col sm:flex-row w-full bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary-500 transition-all duration-200 cursor-pointer"
    >
      <img src={image} alt={title} className="w-full sm:w-48 h-48 sm:h-auto object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{commentsCount} Comments</span>
          </div>
        </div>
        <h3 className="mt-2 text-body-xl font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        {description && <p className="mt-2 text-body-sm text-gray-500">{description}</p>}
        <div className="mt-auto pt-4">
          <Button
            variant="tertiary"
            size="medium"
            rightIcon={ArrowRight}
            onClick={onButtonClick}
            className="self-start"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
