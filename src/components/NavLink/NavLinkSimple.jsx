import clsx from "clsx";

export default function NavLinkSimple({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "text-left py-[14px] px-0 bg-gray-50 rounded-none text-body-sm focus:outline-none",
        isActive
          ? "text-primary-500 font-medium shadow-[inset_0_-2px_0_0_theme('colors.primary.500')]"
          : "text-gray-400 hover:text-gray-900 focus:shadow-[inset_0_-2px_0_0_theme('colors.primary.500')]"
      )}
    >
      {label}
    </button>
  );
}
