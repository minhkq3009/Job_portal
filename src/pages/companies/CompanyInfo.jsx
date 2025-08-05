import React from "react";
import { useParams } from "react-router-dom";
import { ArrowRight, Calendar, Building, Users, Briefcase, Globe, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import LogoCompany from "../../components/Company/LogoCompany";
import JobOverviewItem from "../../components/Job/JobOverviewItem";
import JobCardVertical from "../../components/Card/JobCardVertical";
import { topCompanies } from "../../data/companiesData";
import { featuredJobs } from "../../data/jobsData";
import companiesImage from "../../assets/images/companies.png";

export default function CompanyInfo() {
  const { id } = useParams();
  
  // Find company by ID (for now, use index as ID)
  const company = topCompanies[parseInt(id)] || topCompanies[0];

  return (
    <>
      <CandidateHeader />
      <Breadcrumb 
        title={`${company.company} Information`}
        customBreadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Find Employers', path: '/find-employers' },
          { label: company.company, isLast: true }
        ]}
      />
      
      {/* Companies Image with Overlay */}
      <div className="w-full flex justify-center relative">
        <img 
          src={companiesImage} 
          alt="Companies" 
          className="w-full h-auto object-cover"
          style={{ maxWidth: '1600px' }}
        />
        
        {/* Company Info Overlay - Half on image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full">
          <div className="container mx-auto">
            <div className="flex items-center justify-between p-10 bg-white rounded-xl shadow-sm border border-gray-100">
              {/* Left: Logo + Info */}
              <div className="flex items-center gap-6">
                {/* Logo */}
                <LogoCompany 
                  logoText={company.logoText} 
                  size="xl" 
                  companyName={company.company}
                />
                {/* Info */}
                <div>
                  <h3 className="text-heading-04 font-semibold text-gray-900 mb-2.5">{company.company}</h3>
                  <p className="text-body-md text-gray-500">Information Technology (IT)</p>
                </div>
              </div>

              {/* Right: Button */}
              <Button variant="primary" size="medium" rightIcon={ArrowRight}>
                View Open Position
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white min-h-screen">
        <div className="container mx-auto pb-16">
          <div className="pt-32 space-y-12">
            
            {/* Main content layout: Description left, Overview right */}
            <div className="flex">
              {/* Left: Description - flexible width */}
              <div className="flex-1 space-y-9" style={{marginRight: '60px'}}>
            
            {/* Description Section */}
            <div>
              <h2 className="text-body-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-body-md text-gray-600 leading-relaxed">
                Fusce et erat at nibh maximus fermentum. Mauris ac justo nibh. Praesent nec lorem lorem. Donec ullamcorper lacus mollis tortor pretium malesuada. In quis porta nisi, quis fringilla orci. Donec porttitor, odio a efficitur blandit, orci nisl porta elit, eget vulputate quam nibh ut tellus. Sed ut posuere risus, vitae commodo velit. Nullam in lorem dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tincidunt ac quam quis vehicula. Quisque sagittis ullamcorper magna. Vivamus elementum eu leo et gravida. Sed dignissim placerat diam, ac laoreet eros rutrum sit amet. Donec imperdiet in leo et imperdiet. In hac habitasse platea dictumst. Sed quis nisl molestie diam ullamcorper condimentum. Sed aliquet, arcu eget pretium bibendum, odio enim rutrum arcu, quis suscipit mauris turpis in neque. Vestibulum id vestibulum odio. Sed dolor felis, iaculis eget turpis eu, lobortis imperdiet massa.
              </p>
            </div>

            {/* Company Benefits Section */}
            <div>
              <h2 className="text-body-xl font-semibold text-gray-900 mb-4">Company Benefits</h2>
              <div className="space-y-4">
                <p className="text-body-md text-gray-600">
                  Donec dignissim nunc eu tellus malesuada fermentum. Sed blandit in magna at accumsan. Etiam imperdiet massa aliquam, consectetur leo in, auctor neque.
                </p>
                <ul className="space-y-3 text-body-md text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    In hac habitasse platea dictumst.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sed aliquet, arcu eget pretium bibendum, odio enim rutrum arcu.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Vestibulum id vestibulum odio.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Etiam libero ante accumsan id tellus venenatis rhoncus vulputate velit.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nam condimentum sit amet ipsum id malesuada.
                  </li>
                </ul>
              </div>
            </div>

            {/* Company Vision Section */}
            <div>
              <h2 className="text-body-xl font-semibold text-gray-900 mb-4">Company Vision</h2>
              <p className="text-body-md text-gray-600 leading-relaxed">
                Praesent ultrices mauris at nisi euismod, ut venenatis augue blandit. Etiam massa risus, accumsan nec tempus nec, venenatis in nisl. Maecenas nulla ex, blandit in magna id, pellentesque facilisis sapien. In feugiat auctor mi, eget commodo lectus convallis ac.
              </p>
            </div>

            {/* Share Profile Section */}
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-900 font-medium whitespace-nowrap">
                Share this profile:
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

              {/* Right: Company Overview + Contact Info - 5/12 columns */}
              <div className="w-5/12 space-y-6">
                
                {/* Company Overview */}
                <div className="grid grid-cols-2 gap-6 p-8 border-2 border-gray-50 rounded-xl">
                  {[
                    { icon: Calendar, label: "Founded in:", value: "14 June, 2021" },
                    { icon: Building, label: "Organization type:", value: "Private Company" },
                    { icon: Users, label: "Team size:", value: "120-300 Candidates" },
                    { icon: Briefcase, label: "Industry types:", value: "Technology" }
                  ].map((item, index, array) => (
                    <JobOverviewItem 
                      key={index}
                      icon={item.icon} 
                      label={item.label} 
                      value={item.value}
                      isLast={index === array.length - 1}
                      className="w-full [&_p]:whitespace-nowrap"
                    />
                  ))}
                </div>

                {/* Contact Information */}
                <div className="p-8 border-2 border-gray-50 rounded-xl space-y-6">
                  <h2 className="text-body-xl font-semibold text-gray-900">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {/* Website */}
                    <div className="flex items-start gap-6">
                      <Globe className="text-blue-600 mt-1" size={24} />
                      <div className="flex flex-col gap-1">
                        <p className="text-body-xs text-gray-500 uppercase">Website</p>
                        <p className="text-body-md text-gray-900">www.estherhoward.com</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Phone */}
                    <div className="flex items-start gap-6">
                      <Phone className="text-blue-600 mt-1" size={24} />
                      <div className="flex flex-col gap-1">
                        <p className="text-body-xs text-gray-500 uppercase">Phone</p>
                        <p className="text-body-md text-gray-900">(406) 555-0120</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Email */}
                    <div className="flex items-start gap-6">
                      <Mail className="text-blue-600 mt-1" size={24} />
                      <div className="flex flex-col gap-1">
                        <p className="text-body-xs text-gray-500 uppercase">Email</p>
                        <p className="text-body-md text-gray-900">contact@company.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Follow Us On Section */}
                <div className="p-8 border-2 border-gray-50 rounded-xl">
                  <h2 className="text-body-lg font-semibold text-gray-900 mb-4">Follow us on:</h2>
                  
                  <div className="flex items-center gap-3">
                    <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                      <Facebook className="text-blue-600" size={16} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                      <Twitter className="text-sky-500" size={16} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                      <Linkedin className="text-blue-700" size={16} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                      <Globe className="text-green-600" size={16} />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-heading-01 font-semibold text-gray-900 mb-8">Open Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredJobs.slice(0, 4).map((job) => (
              <JobCardVertical
                key={job.id}
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
                hideButton={true}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}