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

export default function FavoriteJobs() {
  const [activeMenu, setActiveMenu] = useState('favorite');
  const [currentPage, setCurrentPage] = useState(1);
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

  // Create favorite jobs data from existing jobs data - take first 17 jobs
  const favoriteJobsData = allJobs.slice(0, 17).map((job, index) => ({
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
    isBookmarked: true, // Always bookmarked since this is favorite jobs
    isExpired: index % 3 === 0 // Every 3rd job is expired for demo
  }));

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
                        } else if (item.id === 'alerts') {
                          navigate('/dashboard/job-alert');
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
                  Favorite Jobs ({favoriteJobsData.length})
                </h1>
              </div>

              {/* Favorite Jobs List */}
              <div className="bg-white rounded-lg">

                {/* Job Cards */}
                <div className="space-y-4">
                  {favoriteJobsData.map((job) => (
                    <div key={job.id}>
                      <JobCardHorizontal
                        logo={job.logo}
                        logoText={job.logoText}
                        companyName={job.companyName}
                        title={job.title}
                        typeLabel={job.type}
                        typeVariant={job.typeVariant}
                        location={job.location}
                        salary={job.salary}
                        time={job.time}
                        topLabel={job.topLabel}
                        topVariant={job.topVariant}
                        isBookmarked={job.isBookmarked}
                        isExpired={job.isExpired}
                        onApply={() => console.log('Apply to job:', job.title)}
                        onBookmark={() => console.log('Toggle bookmark:', job.title)}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(favoriteJobsData.length / 8)}
                    totalItems={favoriteJobsData.length}
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