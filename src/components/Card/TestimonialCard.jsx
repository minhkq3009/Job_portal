import React from "react";
import { Quote } from "lucide-react";
import starIcon from "../../assets/icons/star.svg";

export default function TestimonialCard({ rating = 5, content, name, title, avatar }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm p-8 flex flex-col gap-6 max-w-[360px] w-full">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, idx) => (
          <img
            key={idx}
            src={starIcon}
            alt="star"
            className="w-5 h-5"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 text-body-md">{content}</p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-gray-900">{name}</span>
            <span className="text-xs text-gray-400">{title}</span>
          </div>
        </div>

        <Quote size={24} className="text-gray-300" />
      </div>
    </div>
  );
}