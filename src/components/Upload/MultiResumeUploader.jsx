import React, { useState } from "react";
import ResumeUploader from "./ResumeUploader";

export default function MultiResumeUploader({ onChange }) {
  const [resumes, setResumes] = useState([null]); // Start with 1 empty slot

  const handleResumeChange = (index, file) => {
    const newResumes = [...resumes];
    newResumes[index] = file;
    
    // If a file is added to the last slot and it's not null, append a new slot
    if (file && index === resumes.length - 1) {
      newResumes.push(null);
    }
    
    // If a file is removed, remove the empty slot (except the last one)
    if (!file && index < resumes.length - 1) {
      newResumes.splice(index, 1);
    }
    
    setResumes(newResumes);
    
    // Send the file list (filtered nulls) to parent
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