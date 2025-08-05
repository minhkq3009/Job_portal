import React, { useState } from "react";
import { MapPin, Search, Filter, ChevronDown } from "lucide-react";
import EmployerHeader from "../../components/Header/EmployerHeader";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import FilterSidebar from "../../components/Filter/FilterSidebar";
import KeywordInput from "../../components/InputField/KeywordInput";
import CategorySelect from "../../components/InputField/CategorySelect";
import Dropdown from "../../components/Dropdown/Dropdown";
import ViewModeToggle from "../../components/Button/ViewModeToggle";
import CandidateCard from "../../components/Card/CandidateCard";
import { candidatesData } from "../../data/candidatesData";

export default function FindCandidate() {
  const [selectedSort, setSelectedSort] = useState("most-relevant");
  const [selectedPerPage, setSelectedPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalCandidates = candidatesData.length;
  const startIndex = (currentPage - 1) * selectedPerPage;
  const endIndex = startIndex + selectedPerPage;
  const candidates = candidatesData.slice(startIndex, endIndex);

  const sortOptions = [
    { label: "Most Relevant", value: "most-relevant" },
    { label: "Highest Rated", value: "highest-rated" },
    { label: "Lowest Rate", value: "lowest-rate" },
    { label: "Most Experienced", value: "most-experienced" },
    { label: "Recently Active", value: "recently-active" }
  ];

  const perPageOptions = [
    { label: "12 per page", value: 12 },
    { label: "24 per page", value: 24 },
    { label: "36 per page", value: 36 }
  ];

  return (
    <>
      <EmployerHeader />
      <Breadcrumb title="Find Candidates" />
      
      <div className="bg-gray-50 pb-8">
        <div className="container mx-auto">
          <div className="bg-white p-3 rounded-md">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col md:flex-row gap-4 items-center flex-1">
              <div className="flex-1 min-w-0">
                <KeywordInput placeholder="Candidate name, skills, title..." className="border-0 shadow-none" />
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
            </div>
            <div className="md:ml-3">
              <Button variant="primary" size="medium" className="w-full md:w-auto">
                Find Candidates
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
                defaultValue={selectedSort === "most-relevant" ? "Most Relevant" : selectedSort === "highest-rated" ? "Highest Rated" : selectedSort === "lowest-rate" ? "Lowest Rate" : selectedSort === "most-experienced" ? "Most Experienced" : "Recently Active"}
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
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Filter Sidebar - 4 columns */}
          <div className="lg:col-span-4">
            <FilterSidebar type="candidates" />
          </div>
          
          {/* Main Content Area - 8 columns */}
          <div className="lg:col-span-8">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-body-xl font-semibold text-gray-900">
                  {totalCandidates} Candidates Found
                </h2>
                <p className="text-body-sm text-gray-500 mt-1">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalCandidates)} of {totalCandidates} candidates
                </p>
              </div>
            </div>

            {/* Candidates List */}
            <div className="space-y-4">
              {candidates.map((candidate) => (
                <CandidateCard
                  key={candidate.id}
                  id={candidate.id}
                  name={candidate.name}
                  title={candidate.title}
                  location={candidate.location}
                  experience={candidate.experience}
                  skills={candidate.skills}
                  avatar={candidate.avatar}
                  rating={candidate.rating}
                  hourlyRate={candidate.hourlyRate}
                  availability={candidate.availability}
                  topLabel={candidate.topLabel}
                  topVariant={candidate.topVariant}
                  typeLabel={candidate.typeLabel}
                  typeVariant={candidate.typeVariant}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}