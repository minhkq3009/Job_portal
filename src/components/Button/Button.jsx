// Button.jsx
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'tertiary' | 'ghost'
  size = "medium",     // 'small' | 'medium' | 'large'
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded transition-colors duration-200";

  const sizeStyles = clsx({
    "px-3 py-2 text-sm": size === "small", // Small padding with smaller text
    "px-6 py-3 text-button": size === "medium", // 48px height with padding
    "px-8 py-4 text-button": size === "large", // 32px x 16px
  });

  const gapStyles = clsx({
    "gap-1": size === "small",
    "gap-2": size === "medium",
    "gap-3": size === "large",
  });

  const variantStyles = clsx({
    // Primary
    "bg-primary-500 text-white hover:bg-primary-600":
      variant === "primary" && !disabled,
    "bg-primary-100 text-white cursor-not-allowed":
      variant === "primary" && disabled,

    // Secondary
    "bg-primary-50 text-primary-500 hover:bg-primary-100":
      variant === "secondary" && !disabled,
    "bg-primary-50 text-primary-300 cursor-not-allowed":
      variant === "secondary" && disabled,

    // Tertiary
    "border border-primary-100 text-primary-500 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-600":
      variant === "tertiary" && !disabled,
    "border border-primary-100 text-primary-300 cursor-not-allowed":
      variant === "tertiary" && disabled,

    // Ghost
    "text-gray-500 hover:text-gray-700 hover:bg-gray-100":
      variant === "ghost" && !disabled,
    "text-gray-300 cursor-not-allowed":
      variant === "ghost" && disabled,
  });

  const iconSize = size === "large" ? 20 : size === "small" ? 24 : 16;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyles, sizeStyles, gapStyles, variantStyles, className)}
      {...props}
    >
      {LeftIcon && <LeftIcon size={iconSize} />}
      {children}
      {RightIcon && <RightIcon size={iconSize} />}
    </button>
  );
}