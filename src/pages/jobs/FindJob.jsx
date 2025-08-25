import CandidateHeader from "../../components/Header/CandidateHeader";
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
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [advancedFilters, setAdvancedFilters] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
      // Remove from array
      const currentValues = newFilters[tag.filterType] || [];
      newFilters[tag.filterType] = currentValues.filter(v => v !== tag.value);
      
      // If array is empty, remove the key entirely
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
      
      {/* Search Section */}
      <div className="bg-gray-50 pb-4 md:pb-6 lg:pb-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-0">
          <div className="bg-white p-3 md:p-3 rounded-md shadow-sm">
            {/* Mobile: Stack vertically */}
            <div className="block md:hidden space-y-3">
              <div className="flex-1 min-w-0">
                <KeywordInput placeholder="Job title, keyword..." className="border-0 shadow-none px-4" />
              </div>
              
              {/* Location dropdown */}
              <div className="flex-1 min-w-0">
                <Dropdown
                  options={[
                    { value: "", label: "Select Location" },
                    { value: "new-york", label: "New York" },
                    { value: "los-angeles", label: "Los Angeles" },
                    { value: "chicago", label: "Chicago" },
                    { value: "houston", label: "Houston" },
                    { value: "phoenix", label: "Phoenix" },
                    { value: "philadelphia", label: "Philadelphia" },
                    { value: "san-antonio", label: "San Antonio" },
                    { value: "san-diego", label: "San Diego" },
                    { value: "dallas", label: "Dallas" },
                    { value: "san-jose", label: "San Jose" }
                  ]}
                  defaultValue={selectedLocation || "Select Location"}
                  onSelect={(option) => setSelectedLocation(option.value)}
                  className="w-full"
                />
              </div>
              
              {/* Category dropdown */}
              <div className="flex-1 min-w-0">
                <Dropdown
                  options={[
                    { value: "", label: "Select Category" },
                    { value: "design", label: "Design" },
                    { value: "development", label: "Development" },
                    { value: "marketing", label: "Marketing" },
                    { value: "sales", label: "Sales" },
                    { value: "customer-service", label: "Customer Service" },
                    { value: "finance", label: "Finance" },
                    { value: "hr", label: "Human Resources" },
                    { value: "operations", label: "Operations" },
                    { value: "product", label: "Product" },
                    { value: "engineering", label: "Engineering" }
                  ]}
                  defaultValue={selectedCategory || "Select Category"}
                  onSelect={(option) => setSelectedCategory(option.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="tertiary" 
                  size="small" 
                  className="flex-1 border-0 h-10 text-sm" 
                  onClick={() => setShowAdvance(true)} 
                  leftIcon={Filter}
                >
                  Filter
                </Button>
                <Button variant="primary" size="small" className="flex-1 h-10 text-sm">
                  Find Job
                </Button>
              </div>
            </div>

            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex flex-col lg:flex-row gap-4 items-center flex-1">
                <div className="flex-1 min-w-0">
                  <KeywordInput placeholder="Job title, keyword..." className="border-0 shadow-none px-4" />
                </div>
                <div className="w-px h-12 bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <KeywordInput 
                    Icon={MapPin}
                    placeholder="Your Location" 
                    className="border-0 shadow-none px-4"
                  />
                </div>
                <div className="w-px h-12 bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <CategorySelect />
                </div>
                <div className="w-px h-12 bg-gray-50" />
                <Button variant="tertiary" size="medium" className="w-full lg:w-auto border-0" onClick={() => setShowAdvance(true)} leftIcon={Filter}>
                  Advanced Filter
                </Button>
              </div>
              <div className="lg:ml-3">
                <Button variant="primary" size="medium" className="w-full lg:w-auto">
                  Find Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 py-[18px] bg-white rounded-lg">
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Sort dropdown */}
            <Dropdown
              options={[
                { value: "latest", label: "Latest" },
                { value: "popular", label: "Popular" },
              ]}
              defaultValue={selectedSort === "latest" ? "Latest" : "Popular"}
              onSelect={(option) => setSelectedSort(option.value)}
              className="w-full sm:w-32"
            />

            {/* Per page dropdown */}
            <Dropdown
              options={[
                { value: 12, label: "12 per page" },
                { value: 24, label: "24 per page" },
              ]}
              defaultValue={selectedPerPage === 12 ? "12 per page" : "24 per page"}
              onSelect={(option) => setSelectedPerPage(option.value)}
              className="w-full sm:w-32"
            />

            {/* View mode toggle - Hidden on mobile */}
            <div className="hidden md:block">
              <ViewModeToggle
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="container mx-auto px-4 md:px-6 lg:px-0 py-6 md:py-8">
        {/* Mobile: Always grid view */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {currentJobs.map((job) => (
              <div key={job.id}>
                <JobCardVertical
                  company={job.company}
                  location={job.location}
                  title={job.title}
                  salary={job.salary}
                  topLabel={job.topLabel}
                  topVariant={job.topVariant}
                  typeLabel={job.typeLabel}
                  logo={job.logo}
                  logoText={job.logoText}
                  featured={job.featured}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Toggle between grid and list view */}
        <div className="hidden md:block">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 md:gap-6">
              {currentJobs.map((job) => (
                <div key={job.id} className="col-span-4 lg:col-span-3">
                  <JobCardVertical
                    company={job.company}
                    location={job.location}
                    title={job.title}
                    salary={job.salary}
                    topLabel={job.topLabel}
                    topVariant={job.topVariant}
                    typeLabel={job.typeLabel}
                    logo={job.logo}
                    logoText={job.logoText}
                    featured={job.featured}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {currentJobs.map((job) => (
                <JobCardHorizontal
                  key={job.id}
                  location={job.location}
                  title={job.title}
                  salary={job.salary}
                  time={job.time}
                  topLabel={job.topLabel}
                  topVariant={job.topVariant}
                  typeLabel={job.typeLabel}
                  typeVariant={job.typeVariant}
                  logo={job.logo}
                  logoText={job.logoText}
                  featured={job.featured}
                  companyId={job.companyId}
                  isBookmarked={job.isBookmarked}
                  isExpired={job.isExpired}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="w-full flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showInfo={false}
              className="justify-center sm:justify-center"
            />
          </div>
        </div>
      </div>

      {/* Advanced Filter Modal */}
      <AdvancedFilterModal
        isOpen={showAdvance}
        onClose={() => setShowAdvance(false)}
        onApply={handleAdvancedFilterApply}
        currentFilters={advancedFilters}
      />

      <Footer />
    </>
  );
}