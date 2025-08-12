import { LayoutGrid, List } from "lucide-react";
import clsx from "clsx";

export default function ViewModeToggle({ viewMode = "list", onViewModeChange }) {
  return (
    <div className="flex items-center gap-1 p-2 bg-white border border-gray-100 rounded-md">
      <button
        onClick={() => onViewModeChange("list")}
        className={clsx(
          "p-1.5 rounded-md transition-colors duration-200",
          viewMode === "list" ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:text-gray-600"
        )}
        title="List View"
      >
        <List className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewModeChange("grid")}
        className={clsx(
          "p-1.5 rounded-md transition-colors duration-200",
          viewMode === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:text-gray-600"
        )}
        title="Grid View"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
    </div>
  );
} 