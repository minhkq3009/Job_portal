import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const NavLinkWithIcon = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group flex items-center justify-between gap-0.5 py-[14px] px-0 bg-gray-50 text-body-sm rounded-none font-medium focus:outline-none",
        isActive
          ? "text-primary-500"
          : "text-gray-400 hover:text-gray-900"
      )}
    >
      <span>{label}</span>
      <ChevronDown
        className={clsx(
          "w-4 h-4",
          isActive
            ? "text-primary-500"
            : "text-gray-400 group-hover:text-gray-900"
        )}
      />
    </button>
  );
};

export default NavLinkWithIcon;
