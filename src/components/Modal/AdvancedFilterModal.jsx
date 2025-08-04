import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Button from "../Button/Button";
import { 
  experienceOptions, 
  salaryOptions, 
  jobTypes, 
  educations, 
  jobLevels 
} from "../../data/filterOptions";

export default function AdvancedFilterModal({ isOpen, onClose, onApply, currentFilters = {} }) {
  const [filters, setFilters] = useState({
    experience: "",
    salary: "",
    jobTypes: [],
    education: [],
    level: "",
  });

  // Update filters when currentFilters changes
  useEffect(() => {
    setFilters({
      experience: currentFilters.experience || "",
      salary: currentFilters.salary || "",
      jobTypes: currentFilters.jobTypes || [],
      education: currentFilters.education || [],
      level: currentFilters.level || "",
    });
  }, [currentFilters]);

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-start justify-center pt-72">
        <Dialog.Panel className="bg-white w-full p-6 rounded-xl shadow-lg border border-gray-200 container mx-auto">
          <div className="grid grid-cols-5 gap-4">
            {/* Experience */}
            <div>
              <h3 className="text-body-lg font-medium text-gray-900 mb-[18px]">Experience</h3>
              <div className="space-y-4">
                {experienceOptions.map((exp) => (
                  <label key={exp.value} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="experience"
                      checked={filters.experience === exp.value}
                      onChange={() => setFilters({ ...filters, experience: exp.value })}
                      className="w-[22px] h-[22px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                    />
                    <span className={exp.value === "freshers" ? "text-body-sm text-gray-600" : "text-body-md text-gray-900"}>
                      {exp.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary */}
            <div>
              <h3 className="text-body-lg font-medium text-gray-900 mb-[18px]">Salary</h3>
              <div className="space-y-4">
                {salaryOptions.map((sal) => (
                  <label key={sal.value} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="salary"
                      checked={filters.salary === sal.value}
                      onChange={() => setFilters({ ...filters, salary: sal.value })}
                      className="w-[22px] h-[22px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                    />
                    <span className="text-body-md text-gray-900">{sal.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Job Type */}
            <div>
              <h3 className="text-body-lg font-medium text-gray-900 mb-[18px]">Job Type</h3>
              <div className="space-y-4">
                {jobTypes.map((jt) => (
                  <label key={jt.value} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={filters.jobTypes.includes(jt.value)}
                      onChange={(e) => {
                        const newTypes = e.target.checked
                          ? [...filters.jobTypes, jt.value]
                          : filters.jobTypes.filter((v) => v !== jt.value);
                        setFilters({ ...filters, jobTypes: newTypes });
                      }}
                      className="w-[22px] h-[22px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                    />
                    <span className="text-body-md text-gray-900">{jt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-body-lg font-medium text-gray-900 mb-[18px]">Education</h3>
              <div className="space-y-4">
                {educations.map((ed) => (
                  <label key={ed.value} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={filters.education.includes(ed.value)}
                      onChange={(e) => {
                        const newEd = e.target.checked
                          ? [...filters.education, ed.value]
                          : filters.education.filter((v) => v !== ed.value);
                        setFilters({ ...filters, education: newEd });
                      }}
                      className="w-[22px] h-[22px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0"
                    />
                    <span className="text-body-md text-gray-900">{ed.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Job Level */}
            <div>
              <h3 className="text-body-lg font-medium text-gray-900 mb-[18px]">Job Level</h3>
              <div className="space-y-4">
                {jobLevels.map((lv) => (
                  <label key={lv.value} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="level"
                      checked={filters.level === lv.value}
                      onChange={() => setFilters({ ...filters, level: lv.value })}
                      className="w-[22px] h-[22px] text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                    />
                    <span className="text-body-md text-gray-900">{lv.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button
              variant="tertiary"
              size="medium"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={handleApply}
            >
              Find Job
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
} 