import { UserPlus, UploadCloud, Search, Send } from "lucide-react";

const iconMap = {
  userPlus: UserPlus,
  uploadCloud: UploadCloud,
  search: Search,
  send: Send,
};

export default function WorkStep({ title, desc, iconName, highlight = false }) {
  const IconComponent = iconMap[iconName];
  
  return (
    <div
      className={`group flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-primary ${
        highlight
          ? "bg-white shadow-primary border border-primary-100 rounded-xl"
          : "bg-transparent hover:bg-white hover:rounded-xl"
      }`}
    >
      <div
        className={`w-[72px] h-[72px] rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
          highlight
            ? "bg-primary-100 text-primary-600 group-hover:bg-white group-hover:text-primary-500"
            : "bg-white border border-primary-100 text-primary-500 hover:bg-primary-500 hover:text-white hover:border-primary-500"
        }`}
      >
        {IconComponent && <IconComponent className="w-8 h-8" />}
      </div>
      <h3 className="text-body-lg font-semibold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-500 text-body-sm mb-0">{desc}</p>
    </div>
  );
} 