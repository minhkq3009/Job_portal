import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import JobCardHorizontal from "../../components/Card/JobCardHorizontal";
import Pagination from "../../components/Button/Pagination";
import DashboardMenuItem from "../../components/Dashboard/DashboardMenuItem";
import { 
  LayoutDashboard, 
  FileText, 
  Heart, 
  Bell, 
  Settings, 
  LogOut
} from "lucide-react";
import { allJobs } from "../../data/index";

export default function JobAlert() {
  const [activeMenu, setActiveMenu] = useState('alerts');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewedJobs, setViewedJobs] = useState(new Set());
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'applied', label: 'Applied Jobs', icon: FileText },
    { id: 'favorite', label: 'Favorite Job', icon: Heart },
    { id: 'alerts', label: 'Job Alert', icon: Bell, count: 3 },
    { id: 'settings', label: 'Setting', icon: Settings },
  ];

  // Create job alert data - mix of new and old jobs
  const jobAlertData = allJobs.slice(0, 15).map((job, index) => ({
    id: index + 1,
    logo: job.logo,
    logoText: job.logoText,
    companyName: job.company,
    title: job.title,
    type: job.typeLabel,
    typeVariant: job.typeVariant,
    location: job.location,
    salary: job.salary,
    time: job.time,
    topLabel: job.topLabel,
    topVariant: job.topVariant,
    description: job.description,
    requirements: job.requirements,
    benefits: job.benefits,
    postedDate: job.postedDate,
    category: job.category,
    isBookmarked: false,
    isExpired: index % 5 === 0, // Every 5th job is expired
    isNew: index < 3, // First 3 jobs are new
    alertDate: index < 3 ? "Today" : index < 6 ? "Yesterday" : `${index - 5} days ago`
  }));

  const handleJobView = (jobId) => {
    setViewedJobs(prev => new Set([...prev, jobId]));
    console.log('Viewed job:', jobId);
  };

  const handleBookmark = (jobId) => {
    console.log('Toggle bookmark for job:', jobId);
  };

  const handleApply = (jobId) => {
    console.log('Apply to job:', jobId);
  };

  return (
    <>
      <CandidateHeader />
      
      <div className="bg-white min-h-screen">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-12 min-h-screen">
            {/* Left Menu - 3/12 cols */}
            <div className="col-span-3">
              <div className="bg-white h-full flex flex-col">
                {/* Menu Items */}
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <DashboardMenuItem
                      key={item.id}
                      icon={item.icon}
                      text={item.label}
                      count={item.count}
                      isActive={activeMenu === item.id}
                      onClick={() => {
                        setActiveMenu(item.id);
                        if (item.id === 'overview') {
                          navigate('/dashboard-authenticated');
                        } else if (item.id === 'applied') {
                          navigate('/dashboard/applied-jobs');
                        } else if (item.id === 'favorite') {
                          navigate('/dashboard/favorite-jobs');
                        } else if (item.id === 'settings') {
                          navigate('/dashboard/settings');
                        }
                      }}
                    />
                  ))}
                </nav>

                {/* Logout at bottom */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-2.5 text-left text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={24} />
                    <span className="text-body-sm font-medium">Logout</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - 9/12 cols */}
            <div className="col-span-9 border-l border-gray-100 pl-8">
              {/* Page Title */}
              <div className="mb-6">
                <h1 className="text-body-lg font-semibold text-gray-900">
                  Job Alert ({jobAlertData.length})
                </h1>
              </div>

              {/* Job Alert List */}
              <div className="bg-white rounded-lg">

                {/* Job Cards */}
                <div className="space-y-4">
                  {jobAlertData.map((job) => {
                    const isViewed = viewedJobs.has(job.id);
                    const isNewJob = job.isNew && !isViewed;
                    
                    return (
                      <div 
                        key={job.id}
                        className="relative"
                      >
                        {isNewJob && (
                          <div className="absolute -top-2 -right-2 z-10">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              NEW
                            </span>
                          </div>
                        )}
                        
                        <JobCardHorizontal
                          logo={job.logo}
                          logoText={job.logoText}
                          companyName={job.companyName}
                          title={job.title}
                          typeLabel={job.type}
                          typeVariant={job.typeVariant}
                          location={job.location}
                          salary={job.salary}
                          time={job.alertDate}
                          topLabel={job.topLabel}
                          topVariant={job.topVariant}
                          isBookmarked={job.isBookmarked}
                          isExpired={job.isExpired}
                          onApply={() => {
                            handleApply(job.id);
                            handleJobView(job.id);
                          }}
                          onBookmark={() => handleBookmark(job.id)}
                          onClick={() => handleJobView(job.id)}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(jobAlertData.length / 8)}
                    totalItems={jobAlertData.length}
                    itemsPerPage={8}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}