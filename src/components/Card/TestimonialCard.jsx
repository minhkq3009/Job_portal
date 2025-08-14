import React from "react";
import starIcon from "../../assets/icons/star.svg";
import quoteIcon from "../../assets/icons/Quote.svg";

export default function TestimonialCard({ rating = 5, content, name, title, avatar, compact = false }) {
  return (
    <div className={`rounded-xl bg-white shadow-sm flex flex-col w-full ${
      compact ? "p-4" : "p-6"
    }`}>
      {/* Stars and Content */}
      <div className={`overflow-hidden ${
        compact ? "text-sm h-[120px]" : "text-body-md h-[164px]"
      }`}>
        {/* Stars */}
        <div className="flex gap-1 mb-3 md:mb-4">
          {Array.from({ length: rating }).map((_, idx) => (
            <img
              key={idx}
              src={starIcon}
              alt="star"
              className={compact ? "w-5 h-5" : "w-7 h-7"}
            />
          ))}
        </div>

        {/* Content */}
        <p className={`text-gray-600 leading-relaxed overflow-hidden ${
          compact ? "text-sm line-clamp-4" : "text-body-md line-clamp-6"
        }`}>{content}</p>
      </div>

      {/* Author and Quote */}
      <div className={`flex items-center justify-between w-full ${
        compact ? "mt-4" : "mt-8"
      }`}>
        <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
          <img
            src={avatar}
            alt={name}
            className={`rounded-full object-cover flex-shrink-0 ${
              compact ? "w-8 h-8" : "w-12 h-12"
            }`}
          />
          <div className="flex flex-col flex-1 min-w-0">
            <span className={`font-semibold text-gray-900 truncate ${
              compact ? "text-sm" : "text-body-md"
            }`}>{name}</span>
            <span className={`text-gray-500 truncate ${
              compact ? "text-xs" : "text-body-small"
            }`}>{title}</span>
          </div>
        </div>

        <img
          src={quoteIcon}
          alt="quote"
          className={`text-gray-300 flex-shrink-0 ${
            compact ? "w-8 h-8" : "w-12 h-12"
          }`}
        />
      </div>
    </div>
  );
}