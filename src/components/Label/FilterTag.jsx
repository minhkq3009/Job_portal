import { X } from "lucide-react";

export default function FilterTag({ label, onRemove }) {
  return (
    <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-body-sm hover:bg-gray-100 transition-colors duration-200">
      <span>{label}</span>
      <button
        onClick={onRemove}
        className="w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
        aria-label="Remove filter"
      >
        <X className="w-3.5 h-3.5 text-gray-500" />
      </button>
    </div>
  );
} 