import Header from "../../components/Header/Header.jsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import KeywordInput from "../../components/InputField/KeywordInput";
import CategorySelect from "../../components/InputField/CategorySelect";
import Button from "../../components/Button/Button";
import FilterTag from "../../components/Label/FilterTag";
import Dropdown from "../../components/Dropdown/Dropdown";
import ViewModeToggle from "../../components/Button/ViewModeToggle";
import Pagination from "../../components/Button/Pagination";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import { MapPin, Search, Layers, Send } from "lucide-react";

export default function FindEmployers() {
  const [filters, setFilters] = useState(["Technology", "San Francisco"]);
  const [selectedSort, setSelectedSort] = useState("latest");
  const [selectedPerPage, setSelectedPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);

  // Mock employers data
  const allEmployers = [
    {
      id: 1,
      name: "Google",
      industry: "Technology",
      location: "Mountain View, CA",
      employees: "100,000+",
      openJobs: 45,
      logo: "/logo-google.png",
      description: "A multinational technology company that specializes in Internet-related services and products.",
      founded: "1998",
      website: "https://google.com"
    },
    {
      id: 2,
      name: "Microsoft",
      industry: "Technology", 
      location: "Redmond, WA",
      employees: "50,000-100,000",
      openJobs: 32,
      logo: "/logo-microsoft.png",
      description: "An American multinational technology corporation which produces computer software, consumer electronics.",
      founded: "1975",
      website: "https://microsoft.com"
    },
    {
      id: 3,
      name: "Apple",
      industry: "Technology",
      location: "Cupertino, CA", 
      employees: "100,000+",
      openJobs: 28,
      logo: "/logo-apple.png",
      description: "An American multinational technology company that designs, develops, and sells consumer electronics.",
      founded: "1976",
      website: "https://apple.com"
    },
    {
      id: 4,
      name: "Facebook",
      industry: "Social Media",
      location: "Menlo Park, CA",
      employees: "50,000-100,000", 
      openJobs: 38,
      logo: "/logo-facebook.png",
      description: "A social networking service company that operates the Facebook social networking platform.",
      founded: "2004",
      website: "https://facebook.com"
    },
    {
      id: 5,
      name: "Amazon",
      industry: "E-commerce",
      location: "Seattle, WA",
      employees: "100,000+",
      openJobs: 67,
      logo: "/logo-amazon.png", 
      description: "An American multinational technology company focusing on e-commerce, cloud computing, and AI.",
      founded: "1994",
      website: "https://amazon.com"
    },
    {
      id: 6,
      name: "Netflix",
      industry: "Entertainment",
      location: "Los Gatos, CA",
      employees: "10,000-50,000",
      openJobs: 15,
      logo: "/logo-netflix.png",
      description: "An American subscription streaming service and production company.",
      founded: "1997", 
      website: "https://netflix.com"
    }
  ];

  // Calculate pagination
  const totalEmployers = allEmployers.length;
  const totalPages = Math.ceil(totalEmployers / selectedPerPage);
  const startIndex = (currentPage - 1) * selectedPerPage;
  const endIndex = startIndex + selectedPerPage;
  const currentEmployers = allEmployers.slice(startIndex, endIndex);

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

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter(filter => filter !== filterToRemove));
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <Header />
      
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="pt-8 pb-6">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Find Employers", href: "/find-employers" }
              ]} 
            />
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-xl p-8 mb-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
              {/* Keyword Input */}
              <div className="lg:col-span-4">
                <KeywordInput 
                  placeholder="Company name, industry..."
                  icon={Search}
                />
              </div>

              {/* Location Input */}
              <div className="lg:col-span-3">
                <CategorySelect 
                  placeholder="Location"
                  icon={MapPin}
                  options={[
                    { label: "San Francisco, CA", value: "sf" },
                    { label: "New York, NY", value: "ny" },
                    { label: "Seattle, WA", value: "seattle" },
                    { label: "Austin, TX", value: "austin" }
                  ]}
                />
              </div>

              {/* Industry Input */}
              <div className="lg:col-span-3">
                <CategorySelect 
                  placeholder="Industry"
                  icon={Layers}
                  options={[
                    { label: "Technology", value: "tech" },
                    { label: "Finance", value: "finance" },
                    { label: "Healthcare", value: "healthcare" },
                    { label: "Education", value: "education" }
                  ]}
                />
              </div>

              {/* Search Button */}
              <div className="lg:col-span-2">
                <Button 
                  variant="primary" 
                  size="large" 
                  rightIcon={Send}
                  className="w-full"
                >
                  Find Employers
                </Button>
              </div>
            </div>
          </div>

          {/* Filters & Results */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Active Filters */}
              {filters.length > 0 && (
                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-body-lg font-medium text-gray-900">Active Filters</h3>
                    <button 
                      onClick={clearAllFilters}
                      className="text-sm text-primary-500 hover:text-primary-600"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {filters.map((filter, index) => (
                      <FilterTag 
                        key={index}
                        label={filter}
                        onRemove={() => removeFilter(filter)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Results Header */}
              <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-body-lg font-medium text-gray-900">
                      Showing {startIndex + 1}-{Math.min(endIndex, totalEmployers)} of {totalEmployers} employers
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2">
                      <span className="text-body-sm text-gray-600">Sort by:</span>
                      <Dropdown 
                        options={sortOptions}
                        defaultValue="Latest"
                        onSelect={(option) => setSelectedSort(option.value)}
                      />
                    </div>

                    {/* Per Page Dropdown */}
                    <div className="flex items-center gap-2">
                      <Dropdown 
                        options={perPageOptions}
                        defaultValue="12 per page"
                        onSelect={(option) => setSelectedPerPage(option.value)}
                      />
                    </div>

                    {/* View Mode Toggle */}
                    <ViewModeToggle 
                      viewMode={viewMode}
                      onViewModeChange={setViewMode}
                    />
                  </div>
                </div>
              </div>

              {/* Employers Grid */}
              <div className={`grid gap-6 mb-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {currentEmployers.map((employer) => (
                  <div
                    key={employer.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-600">
                          {employer.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-body-lg font-semibold text-gray-900 mb-1">
                          {employer.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                          <MapPin size={14} />
                          <span>{employer.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{employer.employees} employees</span>
                          <span>•</span>
                          <span className="text-primary-600 font-medium">
                            {employer.openJobs} open jobs
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-body-sm text-gray-600 mb-4 line-clamp-2">
                      {employer.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Founded {employer.founded}</span>
                        <span>•</span>
                        <span>{employer.industry}</span>
                      </div>
                      <Button variant="secondary" size="small">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
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