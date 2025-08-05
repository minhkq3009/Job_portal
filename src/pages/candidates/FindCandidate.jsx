import React, { useState, useEffect } from "react";
import { MapPin, Search, Filter, ChevronDown, Briefcase, GraduationCap, User, Clock, Calendar, Globe, DollarSign } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
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
import Pagination from "../../components/Button/Pagination";
import JobOverviewItem from "../../components/Job/JobOverviewItem";
import { candidatesData } from "../../data/index";

export default function FindCandidate() {
  const [selectedSort, setSelectedSort] = useState("most-relevant");
  const [selectedPerPage, setSelectedPerPage] = useState(12);
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const navigate = useNavigate();
  const { candidateId } = useParams();

  // Pagination logic
  const totalCandidates = candidatesData.length;
  const totalPages = Math.ceil(totalCandidates / selectedPerPage);
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

  // Handle candidate modal
  useEffect(() => {
    if (candidateId) {
      const candidate = candidatesData.find(c => c.id === parseInt(candidateId));
      setSelectedCandidate(candidate);
      document.body.style.overflow = 'hidden';
    } else {
      setSelectedCandidate(null);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [candidateId]);

  const handleViewProfile = (candidateId) => {
    navigate(`/find-candidates/${candidateId}`);
  };

  const handleCloseModal = () => {
    navigate('/find-candidates');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedCandidate) {
        handleCloseModal();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [selectedCandidate]);





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
                  setCurrentPage(1); // Reset to first page when changing items per page
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
            <FilterSidebar type="candidates" />
          </div>
          
          {/* Main Content Area - 8 columns */}
          <div className="lg:col-span-8">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-body-sm text-gray-500">
                  Showing {startIndex + 1}-{Math.min(endIndex, totalCandidates)} of {totalCandidates} candidates
                </p>
              </div>
            </div>

            {/* Candidates List */}
            <div className="space-y-4 mb-6">
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
                    onViewProfile={handleViewProfile}
                  />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalCandidates}
                itemsPerPage={selectedPerPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Candidate Profile Modal */}
      {selectedCandidate && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl transform transition-all duration-300 ease-out scale-100 opacity-100">
            {/* Header with close button */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-xl">
              <h1 className="text-heading-04 font-semibold text-gray-900">
                {selectedCandidate.name} - Profile
              </h1>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Avatar Section - Full Width */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={selectedCandidate.avatar} 
                      alt={selectedCandidate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-body-lg font-semibold text-gray-900">{selectedCandidate.name}</h2>
                    <p className="text-body-sm text-gray-500">{selectedCandidate.title}</p>
                  </div>
                </div>
                <Button 
                  variant="primary" 
                  size="medium" 
                  className="flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Mail
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex gap-6">
              {/* Left column */}
              <div className="flex-1">
                {/* Biography */}
                <div className="mb-6">
                  <h3 className="text-body-sm font-semibold text-gray-800 mb-2">BIOGRAPHY</h3>
                  <p className="text-body-sm text-gray-600 leading-relaxed">
                    I've been passionate about {selectedCandidate.title.toLowerCase()} from an early age with a keen interest in 
                    modern technologies and user-centered design. I can create high-quality and aesthetically pleasing 
                    solutions in a quick turnaround time. With {selectedCandidate.experience} of experience in {selectedCandidate.skills.slice(0, 3).join(', ')}, 
                    I bring both technical expertise and creative vision to every project.
                  </p>
                </div>

                {/* Cover letter */}
                <div>
                  <h3 className="text-body-sm font-semibold text-gray-800 mb-2">COVER LETTER</h3>
                  <p className="text-body-sm text-gray-600 mb-4 leading-relaxed">
                    Dear Hiring Manager,
                    <br /><br />
                    I am writing to express my strong interest in joining your team as a {selectedCandidate.title}. 
                    With {selectedCandidate.experience} of hands-on experience and a proven track record of delivering 
                    exceptional results, I am confident that I would be a valuable addition to your organization.
                    <br /><br />
                    Sincerely,<br />
                    {selectedCandidate.name}
                  </p>
                  <p className="text-body-sm text-gray-600 font-medium mt-4">Follow me on Social Media</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-body-xs font-medium">Li</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-body-xs font-medium">Tw</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-body-xs font-medium">Fb</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="w-72 flex-shrink-0">
                {/* Experience Overview */}
                <div className="mb-6">
                  <div className="rounded-lg p-6 border border-gray-100">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <JobOverviewItem
                      icon={Briefcase}
                      label="Experience"
                      value={selectedCandidate.experience}
                      className="w-full"
                    />
                    <JobOverviewItem
                      icon={GraduationCap}
                      label="Education"
                      value={selectedCandidate.education}
                      className="w-full"
                    />
                    <JobOverviewItem
                      icon={Calendar}
                      label="Date of Birth"
                      value="14 June, 1990"
                      className="w-full"
                    />
                    <JobOverviewItem
                      icon={Globe}
                      label="Nationality"
                      value="American"
                      className="w-full"
                    />
                    <JobOverviewItem
                      icon={User}
                      label="Gender"
                      value={selectedCandidate.gender}
                      className="w-full"
                    />
                    <JobOverviewItem
                      icon={DollarSign}
                      label="Hourly Rate"
                      value={selectedCandidate.hourlyRate}
                      className="w-full"
                      isLast={true}
                    />
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <p className="text-body-sm font-semibold text-gray-800 mb-2">Contact Information</p>
                  <ul className="space-y-3 text-body-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      🌐 www.{selectedCandidate.name.toLowerCase().replace(' ', '')}.com
                    </li>
                    <li className="flex items-start gap-2">
                      📍 {selectedCandidate.location}
                    </li>
                    <li className="flex items-center gap-2">
                      📞 {selectedCandidate.phone}
                    </li>
                    <li className="flex items-center gap-2">
                      📧 {selectedCandidate.email}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}