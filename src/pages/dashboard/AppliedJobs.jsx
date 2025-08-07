import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import JobCardHorizontalSmall from "../../components/Card/JobCardHorizontalSmall";
import Button from "../../components/Button/Button";
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

export default function AppliedJobs() {
  const [activeMenu, setActiveMenu] = useState('applied');
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

  // Create applied jobs data from existing jobs data with application details
  const appliedJobsData = allJobs.map((job, index) => ({
    id: index + 1,
    logoText: job.logoText,
    companyName: job.company,
    title: job.title,
    type: job.typeLabel,
    location: job.location,
    salary: job.salary,
    dateApplied: `Dec ${15 - index}, 2023`,
    status: index % 4 === 0 ? "In Review" : 
            index % 4 === 1 ? "Applied" : 
            index % 4 === 2 ? "Interview" : "Rejected"
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
                        } else if (item.id === 'favorite') {
                          navigate('/dashboard/favorite-jobs');
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
                  Applied Jobs ({appliedJobsData.length})
                </h1>
              </div>

              {/* Applied Jobs Table */}
              <div className="bg-white rounded-lg">

                {/* Table Header */}
                <div className="px-6 py-4 rounded-md bg-gray-50 text-body-sm font-medium text-gray-500">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">Job</div>
                    <div className="flex items-center gap-12">
                      <div className="min-w-[120px]">Date Applied</div>
                      <div className="min-w-[100px]">Status</div>
                      <div className="min-w-[120px]">Action</div>
                    </div>
                  </div>
                </div>

                {/* Job Cards */}
                <div className="space-y-4 pt-6">
                  {appliedJobsData.map((job) => (
                    <div key={job.id}>
                      <JobCardHorizontalSmall
                        logoText={job.logoText}
                        companyName={job.companyName}
                        title={job.title}
                        type={job.type}
                        location={job.location}
                        salary={job.salary}
                        datePosted={job.dateApplied}
                        status={job.status}
                        onViewDetail={() => console.log('View details')}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(appliedJobsData.length / 8)}
                    totalItems={appliedJobsData.length}
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