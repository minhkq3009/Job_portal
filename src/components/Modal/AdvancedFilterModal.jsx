import { Dialog } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { Search, ChevronDown } from "lucide-react";
import Button from "../Button/Button";
import { filterOptions } from "../../data/index";
import { createPortal } from "react-dom";

const { experienceOptions, salaryOptions, jobTypes, educations, jobLevels } = filterOptions;

// Mobile Filter Dropdown Component
function MobileFilterDropdown({ options, value, onChange, type = "radio", isOpen, onToggle }) {
  const [shouldFlipUp, setShouldFlipUp] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef(null);

  // Calculate dropdown position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const dropdownHeight = Math.min(options.length * 60 + 24, 320);
      
      setShouldFlipUp(spaceBelow < dropdownHeight);
      setDropdownPosition({
        top: shouldFlipUp ? rect.top - dropdownHeight : rect.bottom,
        left: rect.left,
        width: rect.width
      });
    }
  }, [isOpen, options.length, shouldFlipUp]);

  const getDisplayValue = () => {
    if (type === "checkbox" && Array.isArray(value)) {
      if (value.length === 0) return "All Job Types";
      if (value.length === 1) return options.find(opt => opt.value === value[0])?.label || "Selected";
      return `${value.length} selected`;
    }
    if (type === "radio") {
      const selectedOption = options.find(opt => opt.value === value);
      if (!selectedOption) {
        // Return default text based on filter type
        if (options === experienceOptions) return "All Experience Levels";
        if (options === salaryOptions) return "All Salary Ranges";
        if (options === jobLevels) return "All Job Levels";
        return "Select";
      }
      return selectedOption.label;
    }
    return "Select";
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-left text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="truncate">{getDisplayValue()}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && createPortal(
        <div 
          className="fixed bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            width: `${dropdownPosition.width}px`
          }}
        >
          <div className="p-3 space-y-2">
            {options.map((option) => (
              <label key={option.value} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded cursor-pointer">
                <input
                  type={type}
                  checked={type === "checkbox" ? value.includes(option.value) : value === option.value}
                  onChange={(e) => {
                    if (type === "checkbox") {
                      const newValue = e.target.checked
                        ? [...value, option.value]
                        : value.filter((v) => v !== option.value);
                      onChange(newValue);
                    } else {
                      // Radio button: chọn xong thì đóng dropdown
                      onChange(option.value);
                      onToggle();
                    }
                  }}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0"
                />
                <span className="text-base text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

export default function AdvancedFilterModal({ isOpen, onClose, onApply, currentFilters = {} }) {
  const [filters, setFilters] = useState({
    experience: "",
    salary: "",
    jobTypes: [],
    education: [],
    level: "",
  });

  const [openDropdown, setOpenDropdown] = useState(null);

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

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" />
      <div className="fixed inset-0 flex items-start justify-center pt-4 md:pt-72">
        <Dialog.Panel className="bg-white w-full mx-4 md:container md:mx-auto p-4 md:p-6 rounded-xl shadow-lg border border-gray-200 max-h-[90vh] md:max-h-none overflow-y-auto">
          {/* Mobile Layout - 5 Dropdowns */}
          <div className="md:hidden">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Advanced Filters</h2>
            <div className="grid grid-cols-1 gap-4">
              <MobileFilterDropdown
                label="Experience"
                options={experienceOptions}
                value={filters.experience}
                onChange={(value) => setFilters({ ...filters, experience: value })}
                type="radio"
                isOpen={openDropdown === "experience"}
                onToggle={() => toggleDropdown("experience")}
              />
              <MobileFilterDropdown
                label="Salary"
                options={salaryOptions}
                value={filters.salary}
                onChange={(value) => setFilters({ ...filters, salary: value })}
                type="radio"
                isOpen={openDropdown === "salary"}
                onToggle={() => toggleDropdown("salary")}
              />
              <MobileFilterDropdown
                label="Job Type"
                options={jobTypes}
                value={filters.jobTypes}
                onChange={(value) => setFilters({ ...filters, jobTypes: value })}
                type="checkbox"
                isOpen={openDropdown === "jobType"}
                onToggle={() => toggleDropdown("jobType")}
              />
              <MobileFilterDropdown
                label="Education"
                options={educations}
                value={filters.education}
                onChange={(value) => setFilters({ ...filters, education: value })}
                type="checkbox"
                isOpen={openDropdown === "education"}
                onToggle={() => toggleDropdown("education")}
              />
              <MobileFilterDropdown
                label="Job Level"
                options={jobLevels}
                value={filters.level}
                onChange={(value) => setFilters({ ...filters, level: value })}
                type="radio"
                isOpen={openDropdown === "level"}
                onToggle={() => toggleDropdown("level")}
              />
            </div>
          </div>

          {/* Desktop Layout - 5 Columns Grid */}
          <div className="hidden md:grid md:grid-cols-5 md:gap-4">
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