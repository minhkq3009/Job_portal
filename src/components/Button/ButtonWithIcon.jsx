import clsx from "clsx";

export default function ButtonWithIcon({
  icon: Icon,
  label,
  type = "primary", // 'primary' | 'secondary' | 'tertiary'
  size = "medium",  // 'medium' | 'large'
  disabled = false,
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded transition-colors duration-200";

  const sizeStyles = clsx({
    "px-6 py-3 text-button gap-2": size === "medium", // 24px x 12px
    "px-8 py-4 text-button gap-3": size === "large", // 32px x 16px
  });

  const typeStyles = clsx({
    // Primary
    "bg-primary-500 text-white hover:bg-primary-600":
      type === "primary" && !disabled,
    "bg-primary-100 text-white cursor-not-allowed":
      type === "primary" && disabled,

    // Secondary
    "bg-primary-50 text-primary-500 hover:bg-primary-100":
      type === "secondary" && !disabled,
    "bg-primary-50 text-primary-300 cursor-not-allowed":
      type === "secondary" && disabled,

    // Tertiary
    "border border-primary-100 text-primary-500 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-600":
      type === "tertiary" && !disabled,
    "border border-primary-100 text-primary-300 cursor-not-allowed":
      type === "tertiary" && disabled,
  });

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, sizeStyles, typeStyles)}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {label}
    </button>
  );
}