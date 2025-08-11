import React from "react";
import starIcon from "../../assets/icons/star.svg";
import quoteIcon from "../../assets/icons/Quote.svg";

export default function TestimonialCard({ rating = 5, content, name, title, avatar }) {
  return (
    <div className="rounded-xl bg-white shadow-sm p-6 flex flex-col w-full">
      {/* Stars and Content - Fixed height 164px */}
      <div className="text-body-md h-[164px]">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, idx) => (
            <img
              key={idx}
              src={starIcon}
              alt="star"
              className="w-7 h-7"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-600 text-body-md leading-relaxed">{content}</p>
      </div>

      {/* Author and Quote - 32px from the block above */}
      <div className="flex items-center justify-between w-full mt-8">
        <div className="flex items-center gap-3 flex-1">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col flex-1">
            <span className="text-body-md font-semibold text-gray-900">{name}</span>
            <span className="text-body-small text-gray-500">{title}</span>
          </div>
        </div>

        <img
          src={quoteIcon}
          alt="quote"
          className="w-12 h-12 text-gray-300 flex-shrink-0"
        />
      </div>
    </div>
  );
}