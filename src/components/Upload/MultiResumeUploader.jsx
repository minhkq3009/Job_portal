import React, { useState } from "react";
import ResumeUploader from "./ResumeUploader";

export default function MultiResumeUploader({ onChange }) {
  const [resumes, setResumes] = useState([null]); // Bắt đầu với 1 slot trống

  const handleResumeChange = (index, file) => {
    const newResumes = [...resumes];
    newResumes[index] = file;
    
    // Nếu file được thêm vào slot cuối và không phải null, thêm slot mới
    if (file && index === resumes.length - 1) {
      newResumes.push(null);
    }
    
    // Nếu file bị xóa, loại bỏ slot trống (trừ slot cuối)
    if (!file && index < resumes.length - 1) {
      newResumes.splice(index, 1);
    }
    
    setResumes(newResumes);
    
    // Gửi danh sách file (loại bỏ null) về parent
    const validFiles = newResumes.filter(resume => resume !== null);
    onChange(validFiles);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {resumes.map((resume, index) => (
        <div key={index} className="w-80 flex-shrink-0">
          <ResumeUploader 
            onChange={(file) => handleResumeChange(index, file)}
            initialFile={resume}
          />
        </div>
      ))}
    </div>
  );
}