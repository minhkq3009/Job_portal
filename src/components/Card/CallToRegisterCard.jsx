import React from "react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import Button from "../Button/Button";

export default function CallToRegisterCard({ title, desc, variant = "light" }) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-xl p-4 md:p-6 lg:p-[50px] w-full h-full",
        variant === "dark"
          ? "bg-primary-700 text-white"
          : "bg-gray-100 text-gray-900"
      )}
    >
      <div className="flex-1">
        <h3 className="text-lg md:text-xl lg:text-heading-03 font-semibold mb-3 md:mb-4">{title}</h3>
        <div className="min-h-[40px] md:h-[60px]">
          <p className={clsx(
            "text-sm md:text-body-small",
            variant === "dark" ? "text-white" : "text-gray-500"
          )}>{desc}</p>
        </div>
      </div>

      <div className="mt-4 md:mt-[26px]">
        <div className="inline-block bg-white rounded">
          <Button
            rightIcon={ArrowRight}
            variant="tertiary"
            size="small"
            className="text-sm md:text-base px-3 py-2 md:px-4 md:py-3"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
}