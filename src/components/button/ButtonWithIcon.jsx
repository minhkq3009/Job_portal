// ButtonWithIcon.jsx
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function ButtonWithIcon({
  label,
  type = "primary",           // 'primary' | 'secondary' | 'tertiary'
  size = "medium",            // 'medium' | 'large'
  disabled = false,
  onClick,
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-all duration-200 gap-3";

  const sizeStyles = clsx({
    "px-6 py-3 text-sm": size === "medium",
    "px-8 py-4 text-base": size === "large",
  });

  const typeStyles = {
    primary: clsx({
      "bg-primary-500 text-white hover:bg-primary-600": !disabled,
      "bg-primary-100 text-white cursor-not-allowed": disabled,
    }),
    secondary: clsx({
      "bg-primary-50 text-primary-600 hover:bg-primary-100": !disabled,
      "bg-primary-50 text-primary-300 cursor-not-allowed": disabled,
    }),
    tertiary: clsx({
      "border border-primary-500 text-primary-600 hover:bg-primary-50": !disabled,
      "border border-primary-100 text-primary-300 cursor-not-allowed": disabled,
    }),
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, sizeStyles, typeStyles[type])}
    >
      <span>{label}</span>
      <ArrowRight size={16} />
    </button>
  );
}
