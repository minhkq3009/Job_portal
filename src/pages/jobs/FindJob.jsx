import CandidateHeader from "../../components/Header/CandidateHeader.jsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import KeywordInput from "../../components/InputField/KeywordInput";
import CategorySelect from "../../components/InputField/CategorySelect";
import Button from "../../components/Button/Button";
import FilterTag from "../../components/Label/FilterTag";
import Dropdown from "../../components/Dropdown/Dropdown";
import ViewModeToggle from "../../components/Button/ViewModeToggle";
import JobCardVertical from "../../components/Card/JobCardVertical";
import JobCardHorizontal from "../../components/Card/JobCardHorizontal";
import Pagination from "../../components/Button/Pagination";
import AdvancedFilterModal from "../../components/Modal/AdvancedFilterModal";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import { MapPin, Search, Layers, SlidersHorizontal, Send, Filter } from "lucide-react";
import { allJobs } from "../../data/index";
import { filterOptions } from "../../data/index";

const { experienceOptions, salaryOptions, jobTypes, educations, jobLevels } = filterOptions;

export default function FindJob() {
  const [showAdvance, setShowAdvance] = useState(false);
  const [filters, setFilters] = useState(["Design", "New York"]);
  const [selectedSort, setSelectedSort] = useState("latest");
  const [selectedPerPage, setSelectedPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [advancedFilters, setAdvancedFilters] = useState({});

  // Calculate pagination
  const totalJobs = allJobs.length;
  const totalPages = Math.ceil(totalJobs / selectedPerPage);
  const startIndex = (currentPage - 1) * selectedPerPage;
  const endIndex = startIndex + selectedPerPage;
  const currentJobs = allJobs.slice(startIndex, endIndex);

  const handleAdvancedFilterApply = (filters) => {
    setAdvancedFilters(filters);
    // Reset to first page when applying new filters
    setCurrentPage(1);
  };

  // Helper function to get display label for filter values
  const getFilterDisplayLabel = (filterType, value) => {
    const optionMaps = {
      experience: experienceOptions,
      salary: salaryOptions,
      jobTypes: jobTypes,
      education: educations,
      level: jobLevels
    };

    const options = optionMaps[filterType];
    if (options) {
      const option = options.find(opt => opt.value === value);
      return option ? option.label : value;
    }
    return value;
  };

  // Helper function to get filter type display name
  const getFilterTypeDisplayName = (filterType) => {
    const displayNames = {
      experience: "Experience",
      salary: "Salary",
      jobTypes: "Job Type",
      education: "Education",
      level: "Job Level"
    };
    return displayNames[filterType] || filterType;
  };

  // Generate filter tags from advanced filters
  const generateAdvancedFilterTags = () => {
    const tags = [];
    
    Object.entries(advancedFilters).forEach(([key, value]) => {
      // Skip if value is empty, null, undefined, or empty array
      if (!value || value === "" || (Array.isArray(value) && value.length === 0)) {
        return;
      }
      
      if (Array.isArray(value) && value.length > 0) {
        value.forEach((v, index) => {
          // Skip "all" values as they represent no specific filter
          if (v === "all") return;
          
          const displayLabel = getFilterDisplayLabel(key, v);
          tags.push({
            id: `${key}-${index}`,
            label: `${getFilterTypeDisplayName(key)}: ${displayLabel}`,
            filterType: key,
            value: v,
            isArray: true
          });
        });
      } else if (value && value !== "" && value !== "all") {
        const displayLabel = getFilterDisplayLabel(key, value);
        tags.push({
          id: key,
          label: `${getFilterTypeDisplayName(key)}: ${displayLabel}`,
          filterType: key,
          value: value,
          isArray: false
        });
      }
    });
    
    return tags;
  };

  const handleRemoveAdvancedFilter = (tag) => {
    const newFilters = { ...advancedFilters };
    
    if (tag.isArray) {
      // Remove specific item from array
      newFilters[tag.filterType] = newFilters[tag.filterType].filter(item => item !== tag.value);
      if (newFilters[tag.filterType].length === 0) {
        delete newFilters[tag.filterType];
      }
    } else {
      // Remove single value - reset to empty string for radio buttons
      newFilters[tag.filterType] = "";
    }
    
    setAdvancedFilters(newFilters);
  };

  const advancedFilterTags = generateAdvancedFilterTags();

  return (
    <>
      <CandidateHeader />
      <Breadcrumb title="Find Job" />
      <div className="bg-gray-50 pb-8">
        <div className="container mx-auto">
          <div className="bg-white p-3 rounded-md">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex flex-col md:flex-row gap-4 items-center flex-1">
                <div className="flex-1 min-w-0">
                  <KeywordInput placeholder="Job title, keyword..." className="border-0 shadow-none" />
                </div>
                <div className="w-px h-12 bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <KeywordInput 
                    Icon={MapPin}
                    placeholder="Your Location" 
                    className="border-0 shadow-none"
                  />
                </div>
                <div className="w-px h-12 bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <CategorySelect />
                </div>
                <div className="w-px h-12 bg-gray-50" />
                <Button variant="tertiary" size="medium" className="w-full md:w-auto border-0" onClick={() => setShowAdvance(true)} leftIcon={Filter}>
                  Advance Filter
                </Button>
              </div>
              <div className="md:ml-3">
                <Button variant="primary" size="medium" className="w-full md:w-auto">
                  Find Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start gap-4 py-[18px] bg-white rounded-lg">
          {/* Filter tags */}
          <div className="flex flex-wrap items-center gap-2 flex-1">
            {filters.length > 0 ? (
              filters.map((filter, index) => (
                <FilterTag
                  key={index}
                  label={filter}
                  onRemove={() => setFilters(filters.filter(f => f !== filter))}
                />
              ))
            ) : null}
            {advancedFilterTags.map((tag) => (
              <FilterTag
                key={tag.id}
                label={tag.label}
                onRemove={() => handleRemoveAdvancedFilter(tag)}
              />
            ))}
            {filters.length === 0 && advancedFilterTags.length === 0 && (
              <span className="text-gray-500 text-sm">No filters applied</span>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Sort dropdown */}
            <Dropdown
              options={[
                { value: "latest", label: "Latest" },
                { value: "popular", label: "Popular" },
              ]}
              defaultValue={selectedSort === "latest" ? "Latest" : "Popular"}
              onSelect={(option) => setSelectedSort(option.value)}
              className="w-32"
            />

            {/* Per page dropdown */}
            <Dropdown
              options={[
                { value: 12, label: "12 per page" },
                { value: 24, label: "24 per page" },
              ]}
              defaultValue={selectedPerPage === 12 ? "12 per page" : "24 per page"}
              onSelect={(option) => setSelectedPerPage(option.value)}
              className="w-32"
            />

            {/* View mode toggle */}
            <ViewModeToggle
              view={viewMode}
              onChange={(mode) => setViewMode(mode)}
            />
          </div>
        </div>
      </div>

      {/* Job List */}
      <div className="container mx-auto mt-5 pb-8">
        {viewMode === "grid" ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobs.map((job, index) => (
              <JobCardVertical
                key={index}
                jobId={job.id || index + 1}
                company={job.logoText === "Up" ? "Upwork" : 
                        job.logoText === "Ap" ? "Apple" :
                        job.logoText === "Fg" ? "Figma" :
                        job.logoText === "Ud" ? "Udemy" :
                        job.logoText === "Fb" ? "Facebook" :
                        job.logoText === "G" ? "Google" : "Company"}
                location={job.location}
                title={job.title}
                salary={job.salary}
                topLabel={job.topLabel}
                topVariant={job.topVariant}
                typeLabel={job.typeLabel}
                logo={job.logo}
                featured={job.featured}
              />
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4">
            {currentJobs.map((job, index) => (
              <JobCardHorizontal
                key={index}
                jobId={job.id || index + 1}
                location={job.location}
                title={job.title}
                salary={job.salary}
                time={job.time}
                topLabel={job.topLabel}
                topVariant={job.topVariant}
                typeLabel={job.typeLabel}
                typeVariant={job.typeVariant || "primary"}
                logo={job.logo}
                featured={job.featured}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 mb-16">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={totalJobs}
            itemsPerPage={selectedPerPage}
            showInfo={true}
          />
        </div>
      </div>

      {/* Advanced Filter Modal */}
      <AdvancedFilterModal
        isOpen={showAdvance}
        onClose={() => setShowAdvance(false)}
        onApply={handleAdvancedFilterApply}
        currentFilters={advancedFilters}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}