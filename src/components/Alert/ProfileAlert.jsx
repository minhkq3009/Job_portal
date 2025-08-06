import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../Button/Button";

export default function ProfileAlert({ profileCompleted, user }) {
  if (profileCompleted) return null;

  return (
    <div className="flex items-center justify-between bg-red-500 text-white p-8 rounded-md">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="space-y-2">
          <p className="text-body-lg font-medium">Your profile editing is not completed.</p>
          <p className="text-body-sm text-white/80">
            Complete your profile editing & build your custom Resume
          </p>
        </div>
      </div>
      <Button 
        variant="tertiary" 
        size="medium"
        rightIcon={ArrowRight}
        className="!bg-white !text-red-500 !border-white hover:!bg-red-50 hover:!text-red-600"
      >
        Edit Profile
      </Button>
    </div>
  );
}