import CandidateHeader from "../../components/Header/CandidateHeader.jsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import LabelTag from "../../components/Label/LabelTag";
import LogoCompany from "../../components/Company/LogoCompany";
import Footer from "../../components/Footer/Footer";
import JobOverviewItem from "../../components/Job/JobOverviewItem";
import JobCardVertical from "../../components/Card/JobCardVertical";
import NavigationButton from "../../components/Button/NavigationButton";
import ApplyJobModal from "../../components/Modal/ApplyJobModal";
import React, { useState } from "react";
import { MapPin, Clock, DollarSign, Users, ArrowRight, Bookmark, Share2, Instagram, Phone, Mail, Calendar, Briefcase, Wallet, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import dribbbleLogo from "../../assets/icons/figma.svg"; // Sử dụng figma logo làm ví dụ cho Dribbble
import { featuredJobs, popularJobs } from "../../data/jobsData";

export default function JobDetails() {
  // Related jobs carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Apply modal state
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  // Use data from jobsData instead of hardcoded array
  const relatedJobs = [...featuredJobs, ...popularJobs].slice(0, 12);

  const jobsPerSlide = 6; // 2 hàng x 3 cột = 6 jobs mỗi slide
  const totalSlides = Math.ceil(relatedJobs.length / jobsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentJobs = () => {
    const start = currentSlide * jobsPerSlide;
    return relatedJobs.slice(start, start + jobsPerSlide);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Apply modal functions
  const handleApplyClick = () => {
    setIsApplyModalOpen(true);
  };

  const handleApplySubmit = (applicationData) => {
    // Handle apply logic here
    console.log("Applied with:", applicationData);
    setIsApplyModalOpen(false);
  };

  const handleApplyCancel = () => {
    setIsApplyModalOpen(false);
  };

  // Use data from jobsData and extend with additional fields
  const baseJob = featuredJobs[0]; // Use first featured job as base
  const jobData = {
    ...baseJob,
    id: 1,
    company: "Upwork", // From baseJob logoText/title
    level: "Senior Level",
    experience: "3-5 Years",
    posted: "2 days ago",
    deadline: baseJob.time || "4 Days Remaining",
    applicants: "25 Applications",
    description: `Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.

Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in neque sit amet orci interdum tincidunt.`,
    responsibilities: `• Quisque semper gravida est et consectetur.
• Curabitur blandit lorem velit, vitae pretium leo placerat eget.
• Morbi mattis in ipsum ac tempus.
• Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.
• vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.
• lobortis vel lectus. Nulla at risus ut diam.
• commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.
• odio metus posuere lorem, id condimentum erat velit nec neque.
• dui sodales ut. Curabitur tempus augue.`,
    benefits: [
      "Health Insurance",
      "Dental Insurance", 
      "Vision Insurance",
      "401(k) Retirement Plan",
      "Flexible Working Hours",
      "Remote Work Options",
      "Professional Development",
      "Paid Time Off"
    ]
  };

  return (
    <>
      <CandidateHeader />
      <Breadcrumb title="Job Details" />
      
      <div className="bg-white pb-8">
        <div className="container mx-auto">
          {/* Job Header */}
          <div className="bg-white py-8 rounded-xl mb-4">
            <div className="flex items-center justify-between gap-6">
              {/* Left Side - Avatar + Job Info */}
              <div className="flex items-center gap-6">
                {/* Company Avatar 96x96 */}
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={jobData.logo} 
                    alt={`${jobData.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Job Info Column - cách avatar 24px */}
                <div className="flex flex-col gap-2">
                  {/* Title + Tags - cách nhau 8px */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-heading-04 font-medium text-gray-900">{jobData.title}</h1>
                    <LabelTag label="Featured" variant="warning" />
                    <LabelTag label="Urgent" variant="danger" />
                  </div>
                  
                  {/* Company Info - icon cách text 6px, các khối cách nhau 20px */}
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5">
                      <Instagram size={16} className="text-gray-500" />
                      <span className="text-body-sm text-primary-500 hover:underline cursor-pointer">@dribbble</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone size={16} className="text-gray-500" />
                      <span className="text-body-sm text-gray-700">+1-202-555-0178</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail size={16} className="text-gray-500" />
                      <span className="text-body-sm text-primary-500 hover:underline cursor-pointer">contact@dribbble.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Actions */}
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-3">
                  {/* Bookmark Icon */}
                  <button className="w-14 h-14 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Bookmark size={24} className="text-gray-500" />
                  </button>
                  
                  {/* Apply Button */}
                  <Button 
                    variant="primary" 
                    size="large" 
                    rightIcon={ArrowRight}
                    onClick={handleApplyClick}
                  >
                    Apply Now
                  </Button>
                </div>
                
                {/* Job Expire Text */}
                <p className="text-body-sm text-gray-500">
                  Job expire in: <span className="text-gray-900 font-medium">{jobData.deadline}</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
            {/* Left Side - Job Description */}
            <div className="lg:w-[65%]">
              <div className="bg-white rounded-xl">
                <h2 className="text-body-lg font-semibold text-gray-900 mb-4">Job Description</h2>
                <div className="prose prose-gray max-w-none mb-8">
                  <div className="whitespace-pre-line text-body-md text-gray-600" style={{lineHeight: '1.75'}}>
                    {jobData.description}
                  </div>
                </div>
                
                <h2 className="text-body-lg font-semibold text-gray-900 mb-4">Responsibilities</h2>
                <div className="prose prose-gray max-w-none mb-8">
                  <div className="whitespace-pre-line text-body-md text-gray-600" style={{lineHeight: '1.75'}}>
                    {jobData.responsibilities}
                  </div>
                </div>

                {/* Share Job */}
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-900 font-medium whitespace-nowrap">
                    Share this job:
                  </span>

                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border text-blue-600 border-blue-100 hover:bg-blue-50 transition">
                    <Facebook size={16} />
                    Facebook
                  </button>

                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border text-sky-500 border-blue-100 hover:bg-blue-50 transition">
                    <Twitter size={16} />
                    Twitter
                  </button>

                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border text-blue-700 border-blue-100 hover:bg-blue-50 transition">
                    <Linkedin size={16} />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Job Overview */}
            <div className="lg:w-[35%]">
              <section className="p-8 border-2 border-gray-50 rounded-xl bg-white">
                <h2 className="text-body-xl font-semibold mb-6">Job Overview</h2>
                <div className="flex flex-wrap">
                  {[
                    { icon: Calendar, label: "Job Posted:", value: "14 June, 2021" },
                    { icon: Clock, label: "Job Expire In:", value: "14 July, 2021" },
                    { icon: Briefcase, label: "Education", value: "Graduation" },
                    { icon: Wallet, label: "Salary:", value: "$50k-80k/month" },
                    { icon: MapPin, label: "Location:", value: "New York, USA" },
                    { icon: Briefcase, label: "Job Type:", value: "Full Time" },
                    { icon: Briefcase, label: "Experience", value: "10–15 Years" }
                  ].map((item, index, array) => (
                    <JobOverviewItem 
                      key={index}
                      icon={item.icon} 
                      label={item.label} 
                      value={item.value}
                      isLast={index === array.length - 1}
                    />
                  ))}
                </div>
              </section>

              {/* Company Info Card */}
              <div className="p-8 rounded-xl border-2 border-gray-50 bg-white max-w-xl space-y-8 mt-4">
                {/* Header */}
                <div className="flex items-start gap-8">
                  <img
                    src={jobData.logo}
                    alt="Instagram"
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-body-xl font-semibold">Instagram</h2>
                    <p className="text-body-sm text-gray-500">Social networking service</p>
                  </div>
                </div>

                {/* Info rows */}
                <div className="space-y-4">
                  <div className="flex justify-between w-full">
                    <p className="text-body-md text-gray-600">Founded in:</p>
                    <p className="text-body-md text-gray-900">March 21, 2006</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <p className="text-body-md text-gray-600">Organization type:</p>
                    <p className="text-body-md text-gray-900">Private Company</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <p className="text-body-md text-gray-600">Company size:</p>
                    <p className="text-body-md text-gray-900">120–300 Employers</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <p className="text-body-md text-gray-600">Phone:</p>
                    <p className="text-body-md text-gray-900">(406) 555-0120</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <p className="text-body-md text-gray-600">Email:</p>
                    <p className="text-body-md text-gray-900">twitter@gmail.com</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <p className="text-body-md text-gray-600">Website:</p>
                    <p className="text-body-md text-blue-600">https://twitter.com</p>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
                    <Facebook className="text-blue-600" size={18} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
                    <Twitter className="text-blue-600" size={18} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
                    <Instagram className="text-blue-600" size={18} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200">
                    <Youtube className="text-blue-600" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Jobs */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-heading-01 font-semibold text-gray-900">Related Jobs</h2>
            <div className="flex items-center gap-2">
              <NavigationButton 
                direction="left" 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                active={currentSlide > 0}
              />
              <NavigationButton 
                direction="right" 
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                active={currentSlide < totalSlides - 1}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {getCurrentJobs().map((job) => (
              <div
                key={job.id}
                onClick={() => window.location.href = `/jobs/job-details`}
                className={`rounded-xl p-8 hover:shadow-lg transition-all duration-200 border border-gray-100 space-y-6 hover:border-primary-500 cursor-pointer ${
                  job.featured ? "bg-gradient-to-r from-[#FFF6E6] to-[#FFFFFF]" : "bg-white"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <LogoCompany logo={dribbbleLogo} logoText={job.logoText} size="md" />
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-center gap-2">
                      <span className="text-body-md font-medium text-gray-900">{job.company}</span>
                      {job.topLabel && <LabelTag label={job.topLabel} variant={job.topVariant} />}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <MapPin size={18} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-body-xl font-medium text-gray-900">{job.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-body-sm text-gray-500">{job.typeLabel}</span>
                    <span className="text-body-sm text-gray-500">•</span>
                    <span className="text-body-sm text-gray-500">{job.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 h-2 bg-primary-500"
                    : "w-2 h-2 bg-gray-300 hover:bg-primary-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Apply Job Modal */}
      <ApplyJobModal
        isOpen={isApplyModalOpen}
        onClose={handleApplyCancel}
        onApply={handleApplySubmit}
        jobTitle={jobData.title}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}