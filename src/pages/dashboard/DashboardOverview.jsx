import React, { useState } from "react";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import DashboardMenuItem from "../../components/Dashboard/DashboardMenuItem";
import DashboardStatCard from "../../components/Card/DashboardStatCard";
import JobCardHorizontalSmall from "../../components/Card/JobCardHorizontalSmall";
import ProfileAlert from "../../components/Alert/ProfileAlert";
import Avatar from "../../assets/images/Image-1.png";
import { LogOut, Home, Settings, User, Bell, Folder, FileText, Image, Users, Briefcase, TrendingUp } from "lucide-react";

export default function DashboardOverview() {
  const [isFilesExpanded, setIsFilesExpanded] = useState(false);
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);

  return (
    <>
      <CandidateHeader />
      
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Dashboard Components Test</h2>
          
          {/* Profile Alert */}
          <div className="mb-6">
            <ProfileAlert 
              profileCompleted={false}
              user={{
                avatar: Avatar,
                name: "John Doe"
              }}
            />
          </div>
          
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <DashboardStatCard
              count="1,234"
              label="Total Users"
              icon={<Users className="w-8 h-8" />}
              color="blue"
            />
            <DashboardStatCard
              count="567"
              label="Active Jobs"
              icon={<Briefcase className="w-8 h-8" />}
              color="orange"
            />
            <DashboardStatCard
              count="89%"
              label="Success Rate"
              icon={<TrendingUp className="w-8 h-8" />}
              color="green"
            />
          </div>

          {/* Job Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Jobs</h3>
            <div className="space-y-3">
              <JobCardHorizontalSmall
                logoText="G"
                title="Senior Frontend Developer"
                type="Full Time"
                location="San Francisco, CA"
                salary="$120k - $150k"
                datePosted="2 days ago"
                status="Active"
                onViewDetail={() => console.log('View job details')}
              />
              <JobCardHorizontalSmall
                logoText="M"
                title="UI/UX Designer"
                type="Part Time"
                location="Remote"
                salary="$80k - $100k"
                datePosted="1 week ago"
                status="Active"
                onViewDetail={() => console.log('View job details')}
              />
              <JobCardHorizontalSmall
                logoText="A"
                title="Backend Engineer"
                type="Contract"
                location="New York, NY"
                salary="$90k - $120k"
                datePosted="3 days ago"
                status="Expire"
                onViewDetail={() => console.log('View job details')}
              />
            </div>
          </div>

          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Menu Items</h3>
          
          <div className="space-y-3">
            <DashboardMenuItem 
              icon={Home}
              text="Dashboard"
              isActive={true}
              onClick={() => console.log('Dashboard clicked')}
            />
            
            <DashboardMenuItem 
              icon={User}
              text="Profile"
              onClick={() => console.log('Profile clicked')}
            />
            
            {/* Expandable Files Menu */}
            <DashboardMenuItem 
              icon={Folder}
              text="Files"
              count={12}
              isExpandable={true}
              isExpanded={isFilesExpanded}
              onToggle={() => setIsFilesExpanded(!isFilesExpanded)}
            >
              <DashboardMenuItem 
                icon={FileText}
                text="Documents"
                count={8}
                onClick={() => console.log('Documents clicked')}
              />
              <DashboardMenuItem 
                icon={Image}
                text="Images"
                count={4}
                onClick={() => console.log('Images clicked')}
              />
            </DashboardMenuItem>
            
            {/* Expandable Settings Menu */}
            <DashboardMenuItem 
              icon={Settings}
              text="Settings"
              isExpandable={true}
              isExpanded={isSettingsExpanded}
              onToggle={() => setIsSettingsExpanded(!isSettingsExpanded)}
            >
              <DashboardMenuItem 
                icon={User}
                text="Account"
                onClick={() => console.log('Account clicked')}
              />
              <DashboardMenuItem 
                icon={Bell}
                text="Notifications"
                onClick={() => console.log('Notification Settings clicked')}
              />
            </DashboardMenuItem>
            
            <DashboardMenuItem 
              icon={Bell}
              text="Notifications"
              count={5}
              onClick={() => console.log('Notifications clicked')}
            />
            
            <DashboardMenuItem 
              icon={LogOut}
              text="Log-out"
              onClick={() => console.log('Logout clicked')}
            />
          </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}