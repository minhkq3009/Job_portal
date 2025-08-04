import CandidateHeader from "../../components/Header/CandidateHeader.jsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import LabelTag from "../../components/Label/LabelTag";
import LogoCompany from "../../components/Company/LogoCompany";
import Footer from "../../components/Footer/Footer";
import JobOverviewItem from "../../components/Job/JobOverviewItem";
import React from "react";
import { MapPin, Clock, DollarSign, Users, ArrowRight, Bookmark, Share2, Instagram, Phone, Mail, Calendar, Briefcase, Wallet } from "lucide-react";
import dribbbleLogo from "../../assets/icons/figma.svg"; // Sử dụng figma logo làm ví dụ cho Dribbble

export default function JobDetails() {
  // Mock data - trong thực tế sẽ lấy từ props hoặc API
  const jobData = {
    id: 1,
    title: "Senior UX Designer",
    company: "Dribbble",
    location: "California, USA",
    salary: "$50k-80k/month",
    type: "Full-Time",
    level: "Senior Level",
    experience: "3-5 Years",
    posted: "2 days ago",
    deadline: "4 Days Remaining",
    applicants: "25 Applications",
    featured: true,
    logo: dribbbleLogo,
    logoText: "D",
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
          <div className="bg-white p-8 rounded-xl mb-4">
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
                  <Button variant="primary" size="large" rightIcon={ArrowRight}>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Left Side - Job Description */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl">
                <h2 className="text-body-lg text-gray-900 mb-4">Job Description</h2>
                <div className="prose prose-gray max-w-none mb-6">
                  <div className="whitespace-pre-line text-body-md text-gray-600" style={{lineHeight: '1.75'}}>
                    {jobData.description}
                  </div>
                </div>
                
                <h2 className="text-body-lg text-gray-900 mb-4">Responsibilities</h2>
                <div className="prose prose-gray max-w-none">
                  <div className="whitespace-pre-line text-body-md text-gray-600" style={{lineHeight: '1.75'}}>
                    {jobData.responsibilities}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Job Overview */}
            <div className="lg:col-span-2">
              <section className="p-8 border rounded-xl bg-white">
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
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}