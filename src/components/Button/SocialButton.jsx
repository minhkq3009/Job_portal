import clsx from "clsx";

export default function SocialButton({ 
  icon, 
  children, 
  variant = "default", // "facebook" | "google" | "default"
  className = "",
  ...props 
}) {
  const baseStyles = "flex-1 flex items-center justify-center gap-2 border rounded-md text-body-sm text-gray-700 font-medium transition-colors duration-200";
  
  const variantStyles = clsx({
    // Default style
    "border-gray-100 bg-white hover:bg-gray-50": variant === "default",
    // Facebook style (if needed)
    "border-blue-600 bg-blue-600 text-white hover:bg-blue-700": variant === "facebook",
    // Google style (if needed)  
    "border-red-500 bg-red-500 text-white hover:bg-red-600": variant === "google",
  });

  const paddingStyles = "py-3 px-6"; // 12px vertical, 24px horizontal

  return (
    <button 
      className={clsx(baseStyles, variantStyles, paddingStyles, className)}
      {...props}
    >
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
      {children}
    </button>
  );
}