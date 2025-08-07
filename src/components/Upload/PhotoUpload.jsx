import React, { useState, useRef } from "react";
import { Upload, X, Camera } from "lucide-react";
import Button from "../Button/Button";

const PhotoUpload = React.memo(function PhotoUpload({ 
  currentPhoto = null, 
  onPhotoChange,
  maxSize = 5 * 1024 * 1024, // 5MB default
  acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
}) {
  const [preview, setPreview] = useState(currentPhoto);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    if (!file) return false;

    // Check file type
    if (!acceptedTypes.includes(file.type)) {
      setError(`Please upload a valid image file (${acceptedTypes.map(type => type.split('/')[1]).join(', ')})`);
      return false;
    }

    // Check file size
    if (file.size > maxSize) {
      setError(`File size must be less than ${Math.round(maxSize / (1024 * 1024))}MB`);
      return false;
    }

    setError('');
    return true;
  };

  const handleFileSelect = (file) => {
    if (!validateFile(file)) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setPreview(imageUrl);
      onPhotoChange?.(file, imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleRemovePhoto = () => {
    setPreview(null);
    setError('');
    onPhotoChange?.(null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      {/* Label */}
      <label className="block text-body-sm font-medium text-gray-700">
        Profile Photo
      </label>

      {/* Upload Area */}
      <div className="relative">
        {/* Drag & Drop Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer relative overflow-hidden
            ${isDragging 
              ? 'border-primary-500 bg-primary-50' 
              : 'border-gray-300 hover:border-gray-400'
            }
          `}
          onClick={handleUploadClick}
        >
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Profile preview"
                className="w-full h-48 object-cover rounded-md"
              />
              {/* Remove button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemovePhoto();
                }}
                className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                title="Remove photo"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Camera size={24} className="text-gray-400" />
                </div>
              </div>
              
              <div>
                <p className="text-body-sm font-medium text-gray-900">
                  Click to upload or drag and drop
                </p>
                <p className="text-body-xs text-gray-500 mt-1">
                  PNG, JPG, WEBP up to {Math.round(maxSize / (1024 * 1024))}MB
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Upload Button */}
        <div className="mt-4">
          <Button
            variant="secondary"
            size="medium"
            leftIcon={Upload}
            onClick={handleUploadClick}
            className="w-full sm:w-auto"
          >
            Choose File
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-body-xs text-red-600">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {preview && !error && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-body-xs text-green-600">
              ✓ Photo uploaded successfully
            </p>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes.join(',')}
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Help Text */}
      <div className="text-body-xs text-gray-500">
        <p>• Recommended size: 400x400px or larger</p>
        <p>• Keep file size under {Math.round(maxSize / (1024 * 1024))}MB for best performance</p>
        <p>• Square images work best for profile photos</p>
      </div>
    </div>
  );
});

export default PhotoUpload;