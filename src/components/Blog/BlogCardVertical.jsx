import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";

export default function BlogCardVertical({
  image,
  title,
  description,
  buttonLabel = "Read More",
  onButtonClick
}) {
  const handleCardClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg hover:border-primary-500 transition-all duration-200 cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-body-xl font-semibold text-gray-900 leading-snug mb-3">
          {title}
        </h3>
        <p className="text-body-sm text-gray-500 mb-4 flex-grow">{description}</p>
        <div className="pt-2">
          <Button
            variant="tertiary"
            size="medium"
            rightIcon={ArrowRight}
            onClick={onButtonClick}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
