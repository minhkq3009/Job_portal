import React from "react";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import Button from "../Button/Button";

export default function CallToRegisterCard({ title, desc, variant = "light" }) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-xl p-[50px] w-full h-full",
        variant === "dark"
          ? "bg-primary-700 text-white"
          : "bg-gray-100 text-gray-900"
      )}
    >
      <div className="flex-1">
        <h3 className="text-heading-03 font-semibold mb-4">{title}</h3>
        <div className="h-[60px]">
          <p className={clsx(
            "text-body-small",
            variant === "dark" ? "text-white" : "text-gray-500"
          )}>{desc}</p>
        </div>
      </div>

      <div className="mt-[26px]">
        <div className="inline-block bg-white rounded">
          <Button
            rightIcon={ArrowRight}
            variant="tertiary"
            size="medium"
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
}