import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NavigationButton({ 
  direction = "left", // "left" | "right"
  onClick, 
  disabled = false,
  active = false
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 flex items-center justify-center rounded-md border transition-all ${
        disabled
          ? "border-gray-100 text-gray-300 cursor-not-allowed bg-white"
          : active
          ? "border-primary-500 text-primary-500 bg-white hover:bg-primary-50"
          : "border-gray-200 text-gray-500 bg-white hover:text-primary-500 hover:border-primary-500 hover:bg-primary-50"
      }`}
    >
      <Icon size={20} />
    </button>
  );
}