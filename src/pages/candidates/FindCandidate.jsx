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
          <div className="bg-white w-10/12 max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl transform transition-all duration-300 ease-out scale-100 opacity-100">
            {/* Header with close button */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-12 py-6 flex items-center justify-between rounded-t-xl">
              <h1 className="text-heading-04 font-semibold text-gray-900">
                Profile
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
            <div className="px-12 pt-12 pb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img 
                      src={selectedCandidate.avatar} 
                      alt={selectedCandidate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-heading-04 font-semibold text-gray-900">{selectedCandidate.name}</h2>
                    <p className="text-body-md text-gray-500">{selectedCandidate.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 border border-gray-200 hover:bg-gray-100 rounded-[5px] transition-colors flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
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
            </div>

            {/* Content */}
            <div className="px-12 pb-12 flex gap-8">
              {/* Left column */}
              <div className="flex-1">
                {/* Biography */}
                <div className="mb-8">
                  <h3 className="text-body-md font-semibold text-gray-800 mb-6">BIOGRAPHY</h3>
                  <p className="text-body-md text-gray-600 leading-relaxed">
                    I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 my-8"></div>

                {/* Cover letter */}
                <div className="mb-8">
                  <h3 className="text-body-md font-semibold text-gray-800 mb-6">COVER LETTER</h3>
                                     <p className="text-body-md text-gray-600 mb-4 leading-relaxed">
                     Dear Sir,
                     <div className="h-3"></div>
                     I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice posted on JobZone, IPFW's job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.
                    <div className="h-3"></div>
                    I have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.
                    <div className="h-3"></div>
                    Sincerely,<div className="h-3"></div>
                                         Esther Howard
                   </p>
                 </div>

                 {/* Divider */}
                 <div className="border-t border-gray-100 my-8"></div>

                 {/* Social Media */}
                 <div>
                   <p className="text-body-sm text-gray-600 font-medium mb-4">Follow me on Social Media</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 cursor-pointer transition-colors">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 cursor-pointer transition-colors">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
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

                {/* Download My Resume */}
                <div className="mb-6">
                  <div className="rounded-lg p-6 border border-gray-100">
                    <h3 className="text-body-md font-semibold text-gray-900 mb-4">Download My Resume</h3>
                    
                    <div className="flex items-center justify-between">
                      {/* Left side: File icon + Info */}
                      <div className="flex items-center gap-3">
                        {/* File icon 48x48 */}
                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        
                        {/* File info */}
                        <div className="flex flex-col">
                          <span className="text-body-xs text-gray-500">{selectedCandidate.name}</span>
                                                     <span className="text-body-sm text-gray-900 font-medium">PDF</span>
                        </div>
                      </div>
                      
                      {/* Right side: Download icon */}
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                                 {/* Contact Info */}
                 <div>
                   <div className="rounded-lg p-6 border border-gray-100">
                     <h3 className="text-body-md font-semibold text-gray-900 mb-6">Contact Information</h3>
                    
                    <div className="space-y-0">
                      {/* Website */}
                      <div className="flex items-center gap-3 pb-5">
                        <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-body-xs text-gray-500">Website</span>
                                                     <span className="text-body-sm text-gray-900">www.{selectedCandidate.name.toLowerCase().replace(' ', '')}.com</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-100 my-5"></div>

                      {/* Location */}
                      <div className="flex items-start gap-3 py-5">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col">
                            <span className="text-body-xs text-gray-500">Location</span>
                                                         <span className="text-body-sm text-gray-900">Beverly Hills, California 90202</span>
                           </div>
                           <div className="text-body-sm text-gray-600">
                            {selectedCandidate.location}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-100 my-5"></div>

                      {/* Phone */}
                      <div className="flex items-start gap-3 py-5">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col">
                            <span className="text-body-xs text-gray-500">Phone</span>
                                                         <span className="text-body-sm text-gray-900">{selectedCandidate.phone}</span>
                           </div>
                           <div className="flex flex-col">
                             <span className="text-body-xs text-gray-500">Second Phone</span>
                             <span className="text-body-sm text-gray-900">+1 (555) 987-6543</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-100 my-5"></div>

                      {/* Email */}
                      <div className="flex items-center gap-3 pt-5">
                        <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-body-xs text-gray-500">Email</span>
                                                     <span className="text-body-sm text-gray-900">{selectedCandidate.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}