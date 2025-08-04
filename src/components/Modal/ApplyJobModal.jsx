import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";

export default function ApplyJobModal({ 
  isOpen, 
  onClose, 
  onApply, 
  jobTitle = "Job Position" 
}) {
  const [selectedResume, setSelectedResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  // Resume options
  const resumeOptions = [
    { label: "Resume_John_Doe_2024.pdf", value: "resume1" },
    { label: "CV_John_Doe_Senior_Designer.pdf", value: "resume2" },
    { label: "Portfolio_Resume_2024.pdf", value: "resume3" },
  ];

  const handleSubmit = () => {
    if (selectedResume && coverLetter.trim()) {
      onApply({ selectedResume, coverLetter });
      handleClose();
    }
  };

  const handleClose = () => {
    setSelectedResume("");
    setCoverLetter("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-body-lg font-semibold text-gray-900">
              Apply Job: {jobTitle}
            </Dialog.Title>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Choose Resume */}
            <div>
              <label className="block text-body-md font-medium text-gray-900 mb-2">
                Choose Resume
              </label>
              <Dropdown
                options={resumeOptions}
                defaultValue="Select your resume"
                onSelect={(option) => setSelectedResume(option.value)}
                className="w-full"
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-body-md font-medium text-gray-900 mb-2">
                Cover Letter
              </label>
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                placeholder="Write your cover letter here..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-100 rounded-md text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="secondary"
              size="medium"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={handleSubmit}
              disabled={!selectedResume || !coverLetter.trim()}
            >
              Apply
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}