import { useState } from "react";
import clsx from "clsx";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid"; // Dùng Heroicons dạng fill

const statusStyles = {
  default: "border-gray-100 focus:border-primary-500",
  success: "border-green-600 text-green-700",
  error: "border-red-500 text-red-600",
};

const iconMap = {
  success: <CheckCircleIcon className="w-5 h-5 text-green-600" />,
  error: <ExclamationCircleIcon className="w-5 h-5 text-red-600" />,
};

export default function InputField({
  placeholder,
  status = "default", // default | success | error
  type = "text",
  iconRight = false,   // hiện icon trạng thái bên phải
  showToggle = false,  // toggle hiện/ẩn mật khẩu
}) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const isPassword = showToggle && type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={clsx(
          // Kích thước chuẩn
          "h-12 w-full px-4 rounded-md border outline-none transition-all",
          "text-body-md placeholder:text-gray-400",

          // Text color based on status and value
          status === "default" && "text-gray-800",

          // Viền & màu text theo trạng thái
          statusStyles[status],

          // Dịch padding phải nếu có icon
          (iconRight || showToggle) && "pr-11"
        )}
      />

      {/* Icon trạng thái bên phải */}
      {iconRight && status !== "default" && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {iconMap[status]}
        </div>
      )}

      {/* Toggle mật khẩu */}
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
