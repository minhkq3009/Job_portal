import { LayoutGrid, List } from "lucide-react";
import clsx from "clsx";

export default function ViewModeToggle({ view = "grid", onChange }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-white border border-gray-100 rounded-md">
      <button
        onClick={() => onChange("grid")}
        className={clsx(
          "p-1.5 rounded-md transition",
          view === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-400"
        )}
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onChange("list")}
        className={clsx(
          "p-1.5 rounded-md transition",
          view === "list" ? "bg-gray-100 text-gray-900" : "text-gray-400"
        )}
      >
        <List className="w-5 h-5" />
      </button>
    </div>
  );
} 