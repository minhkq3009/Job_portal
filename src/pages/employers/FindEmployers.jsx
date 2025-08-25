import CandidateHeader from "../../components/Header/CandidateHeader.jsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import KeywordInput from "../../components/InputField/KeywordInput";
import CategorySelect from "../../components/InputField/CategorySelect";
import Button from "../../components/Button/Button";

import Dropdown from "../../components/Dropdown/Dropdown";
import ViewModeToggle from "../../components/Button/ViewModeToggle";
import FilterSidebar from "../../components/Filter/FilterSidebar";
import JobCardHorizontal from "../../components/Card/JobCardHorizontal";
import Pagination from "../../components/Button/Pagination";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import { MapPin, Filter, Briefcase } from "lucide-react";
import { topCompanies } from "../../data/index";

export default function FindEmployers() {
  const [selectedSort, setSelectedSort] = useState("latest");
  const [selectedPerPage, setSelectedPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);

  // Get all companies and add a random jobCount
  const allCompanies = topCompanies.map((company) => ({
    ...company,
    jobCount: Math.floor(Math.random() * 8) + 1, // Random 1-8 jobs
  }));

  // Calculate pagination
  const totalCompanies = allCompanies.length;
  const totalPages = Math.ceil(totalCompanies / selectedPerPage);
  const startIndex = (currentPage - 1) * selectedPerPage;
  const endIndex = startIndex + selectedPerPage;
  const companies = allCompanies.slice(startIndex, endIndex);

  const sortOptions = [
    { label: "Latest", value: "latest" },
    { label: "Oldest", value: "oldest" },
    { label: "Most Jobs", value: "most-jobs" },
    { label: "Company Size", value: "company-size" }
  ];

  const perPageOptions = [
    { label: "12 per page", value: 12 },
    { label: "24 per page", value: 24 },
    { label: "36 per page", value: 36 }
  ];

  return (
    <>
      <CandidateHeader />
      
      <Breadcrumb title="Find Employers" />
      <div className="bg-gray-50 pb-8">
        <div className="container mx-auto">
          <div className="bg-white p-3 rounded-md">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex flex-col md:flex-row gap-4 items-center flex-1 w-full md:w-auto">
                <div className="flex-1 min-w-0 w-full md:w-auto">
                  <KeywordInput placeholder="Company name, industry..." className="border-0 shadow-none w-full" />
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-50" />
                <div className="flex-1 min-w-0 w-full md:w-auto">
                  <KeywordInput 
                    Icon={MapPin}
                    placeholder="Your Location" 
                    className="border-0 shadow-none w-full"
                  />
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-50" />
                <div className="flex-1 min-w-0 w-full md:w-auto">
                  <CategorySelect />
                </div>
              </div>
              <div className="md:ml-3 w-full md:w-auto">
                <Button variant="primary" size="medium" className="w-full md:w-auto">
                  Find Employers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="container mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-[18px]">
          {/* Filter Button - Left */}
          <div className="flex items-center">
            <Button variant="secondary" size="medium" leftIcon={Filter}>
              Filter
            </Button>
          </div>

          {/* Controls - Right */}
          <div className="flex items-center gap-3">
            {/* Sort dropdown */}
            <div className="flex items-center gap-2">
              <Dropdown
                options={sortOptions}
                defaultValue={selectedSort === "latest" ? "Latest" : "Oldest"}
                onSelect={(option) => setSelectedSort(option.value)}
                className="w-32"
              />
            </div>

            {/* Per page dropdown */}
            <div className="flex items-center gap-2">
              <Dropdown
                options={perPageOptions}
                defaultValue={selectedPerPage === 12 ? "12 per page" : selectedPerPage === 24 ? "24 per page" : "36 per page"}
                onSelect={(option) => {
                  setSelectedPerPage(option.value);
                  setCurrentPage(1); // Reset to first page
                }}
                className="w-32"
              />
            </div>

            {/* View mode toggle */}
            <ViewModeToggle
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto mt-5 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filter Sidebar - 4 columns */}
          <div className="lg:col-span-4">
            <FilterSidebar />
          </div>
          
          {/* Main Content Area - 8 columns */}
          <div className="lg:col-span-8">
            {/* Results Header */}
            <div className="mb-4 sm:mb-6">
              {/* Desktop/Tablet full text */}
              <h2 className="text-body-sm font-medium text-gray-500 hidden md:block">
                Showing {startIndex + 1} to {Math.min(endIndex, totalCompanies)} of {totalCompanies} results
              </h2>
            </div>
            
            <div className="space-y-6 mb-6">
              {companies.map((company, idx) => (
                <JobCardHorizontal
                  key={idx}
                  title={company.company}
                  location={company.location}
                  salary={
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span>{company.jobCount} open Job{company.jobCount > 1 ? 's' : ''}</span>
                    </div>
                  }
                  time="" // Pass empty to hide
                  topLabel="" // Hide top tag
                  typeLabel="" // Hide side tag (blue tag)
                  logoText={company.logoText}
                  companyId={startIndex + idx} // Pass company ID for navigation
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-6 sm:mt-8">
              {/* Mobile: hide info */}
              <div className="w-full sm:hidden flex justify-center">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={totalCompanies}
                  itemsPerPage={selectedPerPage}
                  onPageChange={setCurrentPage}
                  showInfo={false}
                />
              </div>
              {/* Tablet/Desktop: show info */}
              <div className="hidden sm:flex w-full justify-center">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={totalCompanies}
                  itemsPerPage={selectedPerPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}