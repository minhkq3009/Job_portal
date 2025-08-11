import { useMemo, useState } from "react";
import clsx from "clsx";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid"; // Use Heroicons (filled)

const statusStyles = {
  default: "border-gray-100 focus:border-primary-500",
  success: "border-green-600 text-green-700",
  error: "border-red-500 text-red-600",
};

const iconMap = {
  success: <CheckCircleIcon className="w-5 h-5 text-green-600" />,
  error: <ExclamationCircleIcon className="w-5 h-5 text-red-600" />,
};

/**
 * Generic input component (supports controlled and uncontrolled usage)
 * @param {object} props
 * @param {string} [props.placeholder]
 * @param {"default"|"success"|"error"} [props.status]
 * @param {string} [props.type]
 * @param {boolean} [props.iconRight] - show status icon on the right
 * @param {boolean} [props.showToggle] - show password visibility toggle
 * @param {string} [props.name]
 * @param {string} [props.id]
 * @param {string} [props.value] - controlled value
 * @param {function} [props.onChange] - controlled change handler
 * @param {string} [props.className] - extra class for the outer wrapper
 * @param {string} [props.inputClassName] - extra class for the input element
 * @param {any} [props.required]
 * @param {any} [props.disabled]
 * @param {any} [props.autoComplete]
 */
export default function InputField({
  placeholder,
  status = "default",
  type = "text",
  iconRight = false,
  showToggle = false,
  name,
  id,
  value: controlledValue,
  onChange: controlledOnChange,
  className = "",
  inputClassName = "",
  required,
  disabled,
  autoComplete,
}) {
  const isControlled = useMemo(() => controlledValue !== undefined, [controlledValue]);
  const [uncontrolledValue, setUncontrolledValue] = useState("");
  const [show, setShow] = useState(false);

  const isPassword = showToggle && type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const handleChange = (e) => {
    if (isControlled) {
      controlledOnChange && controlledOnChange(e);
    } else {
      setUncontrolledValue(e.target.value);
    }
  };

  return (
    <div className={clsx("relative w-full", className)}>
      <input
        id={id}
        name={name}
        type={inputType}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        className={clsx(
          // Size and base styles
          "h-12 w-full px-4 rounded-lg border outline-none transition-all",
          "text-body-md placeholder:text-gray-400",
          // Focus styles
          "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
          // Status styles
          statusStyles[status],
          // Extra right padding when showing right-side icons
          (iconRight || showToggle) && "pr-11",
          inputClassName
        )}
      />

      {/* Right-side status icon */}
      {iconRight && status !== "default" && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {iconMap[status]}
        </div>
      )}

      {/* Password visibility toggle */}
      {showToggle && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <EyeSlashIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
}
