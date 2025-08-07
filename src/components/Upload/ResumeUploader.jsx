import { Plus, FileText, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";

export default function ResumeUploader({ onChange, initialFile = null }) {
  const [uploadedFile, setUploadedFile] = useState(initialFile);
  const [showMenu, setShowMenu] = useState(false);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
      onChange(file);
    } else {
      alert("Only PDF files are allowed.");
    }
  }, [onChange]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setUploadedFile(file);
      onChange(file);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const handleDelete = () => {
    setUploadedFile(null);
    onChange(null);
    setShowMenu(false);
  };

  const handleEdit = () => {
    document.querySelector('input[type="file"]').click();
    setShowMenu(false);
  };

  const formatFileSize = (bytes) => {
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const truncateFileName = (fileName, maxLength = 25) => {
    if (fileName.length <= maxLength) return fileName;
    const extension = fileName.split('.').pop();
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const truncatedName = nameWithoutExt.substring(0, maxLength - extension.length - 4);
    return `${truncatedName}...${extension}`;
  };

  if (uploadedFile) {
    // Uploaded state
    return (
      <div className="flex items-center justify-between w-full p-5 border-2 border-dashed border-gray-300 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <FileText className="w-8 h-8 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-body-sm font-medium text-gray-900" title={uploadedFile.name}>
              {truncateFileName(uploadedFile.name)}
            </span>
            <span className="text-body-sm text-gray-600">{formatFileSize(uploadedFile.size)}</span>
          </div>
        </div>
        
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[140px] whitespace-nowrap">
              <button
                onClick={handleEdit}
                className="w-full flex items-center gap-2 px-4 py-3 text-left text-body-sm text-gray-700 hover:bg-gray-50"
              >
                <Edit className="w-4 h-4" />
                Edit Resume
              </button>
              <button
                onClick={handleDelete}
                className="w-full flex items-center gap-2 px-4 py-3 text-left text-body-sm text-red-600 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Upload state
  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex items-center gap-3 w-full p-5 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition"
    >
      <div className="w-8 h-8 flex items-center justify-center border border-blue-500 text-blue-500 rounded-full">
        <Plus className="w-8 h-8" />
      </div>
      <label className="flex flex-col cursor-pointer">
        <span className="text-body-sm font-medium text-gray-900">Add Cv/Resume</span>
        <span className="text-body-sm text-gray-600">
          Browse file or drop here. only pdf
        </span>
        <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
      </label>
    </div>
  );
}