import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import DashboardMenuItem from "../../components/Dashboard/DashboardMenuItem";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import PhotoUpload from "../../components/Upload/PhotoUpload";
import ResumeUploader from "../../components/Upload/ResumeUploader";
import Dropdown from "../../components/Dropdown/Dropdown";
import { 
  LayoutDashboard, 
  FileText, 
  Heart, 
  Bell, 
  Settings, 
  LogOut,
  User,
  UserCircle,
  Share2,
  Shield
} from "lucide-react";

export default function Setting() {
  const [activeMenu, setActiveMenu] = useState('settings');
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    fullname: '',
    title: '',
    experience: '',
    education: '',
    website: '',
    profilePhoto: null,
    resume: null
  });
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

  const settingTabs = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'profile', label: 'Profile', icon: UserCircle },
    { id: 'social', label: 'Social', icon: Share2 },
    { id: 'account', label: 'Account Setting', icon: Shield },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDropdownChange = (field, option) => {
    setFormData(prev => ({
      ...prev,
      [field]: option.value
    }));
  };

  // Experience options
  const experienceOptions = [
    { label: "Fresh Graduate", value: "fresh" },
    { label: "1-2 years", value: "1-2" },
    { label: "3-5 years", value: "3-5" },
    { label: "5-10 years", value: "5-10" },
    { label: "10+ years", value: "10+" },
  ];

  // Education options
  const educationOptions = [
    { label: "High School", value: "high-school" },
    { label: "Associate Degree", value: "associate" },
    { label: "Bachelor's Degree", value: "bachelor" },
    { label: "Master's Degree", value: "master" },
    { label: "PhD", value: "phd" },
    { label: "Other", value: "other" },
  ];

  const handlePhotoChange = (file, imageUrl) => {
    setFormData(prev => ({
      ...prev,
      profilePhoto: { file, imageUrl }
    }));
  };

  const handleResumeChange = (file) => {
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSave = () => {
    console.log('Save form data:', formData);
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
                        } else if (item.id === 'alerts') {
                          navigate('/dashboard/job-alert');
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
                  Settings
                </h1>
              </div>

              {/* Setting Tabs */}
              <div className="mb-6">
                <div className="flex items-center gap-8 border-b border-gray-200">
                  {settingTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 pb-4 px-1 border-b-2 transition-colors ${
                          activeTab === tab.id
                            ? 'border-primary-500 text-primary-500'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="text-body-sm font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'personal' && (
                <div>
                  {/* Basic Information Section */}
                  <div className="mb-8">
                    <h2 className="text-heading-05 font-semibold text-gray-900 mb-6">
                      Basic Information
                    </h2>

                    {/* 2 Column Layout */}
                    <div className="grid grid-cols-12 gap-8">
                      {/* Left Column - Upload Photo */}
                      <div className="col-span-5">
                        <PhotoUpload
                          currentPhoto={formData.profilePhoto?.imageUrl}
                          onPhotoChange={handlePhotoChange}
                          maxSize={5 * 1024 * 1024} // 5MB
                          acceptedTypes={['image/jpeg', 'image/jpg', 'image/png', 'image/webp']}
                          className="[&_img]:aspect-square [&_img]:object-cover [&_.border-dashed]:aspect-square [&_.border-dashed]:h-auto"
                        />
                      </div>

                      {/* Right Column - Form Fields */}
                      <div className="col-span-7">
                        {/* Form Fields - 2 columns */}
                        <div className="grid grid-cols-2 gap-6">
                          {/* Full Name */}
                          <div>
                            <h3 className="text-body-sm font-medium text-gray-900 mb-3">Full Name</h3>
                            <InputField
                              placeholder="Enter your full name"
                              value={formData.fullname}
                              onChange={(value) => handleInputChange('fullname', value)}
                            />
                          </div>

                          {/* Title */}
                          <div>
                            <h3 className="text-body-sm font-medium text-gray-900 mb-3">Title</h3>
                            <InputField
                              placeholder="e.g. Senior Frontend Developer"
                              value={formData.title}
                              onChange={(value) => handleInputChange('title', value)}
                            />
                          </div>

                          {/* Experience */}
                          <div>
                            <h3 className="text-body-sm font-medium text-gray-900 mb-3">Experience</h3>
                            <Dropdown
                              options={experienceOptions}
                              defaultValue="Select experience level"
                              onSelect={(option) => handleDropdownChange('experience', option)}
                              className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                            />
                          </div>

                          {/* Education */}
                          <div>
                            <h3 className="text-body-sm font-medium text-gray-900 mb-3">Education</h3>
                            <Dropdown
                              options={educationOptions}
                              defaultValue="Select education level"
                              onSelect={(option) => handleDropdownChange('education', option)}
                              className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                            />
                          </div>
                        </div>

                        {/* Personal Website - Full Width */}
                        <div className="mt-6">
                          <h3 className="text-body-sm font-medium text-gray-900 mb-3">Personal Website</h3>
                          <InputField
                            placeholder="https://yourwebsite.com"
                            value={formData.website}
                            onChange={(value) => handleInputChange('website', value)}
                          />
                        </div>

                        {/* Save Button */}
                        <div className="mt-8">
                          <Button
                            variant="primary"
                            size="medium"
                            onClick={handleSave}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload Section */}
                  <div className="mt-8">
                    <h2 className="text-heading-05 font-semibold text-gray-900 mb-6">
                      Resume/CV
                    </h2>
                    <ResumeUploader onChange={handleResumeChange} />
                  </div>

                  {/* Test Resume Upload Section */}
                  <div className="mt-8">
                    <h2 className="text-heading-05 font-semibold text-gray-900 mb-6">
                      Test Resume Upload (for checking)
                    </h2>
                    <ResumeUploader onChange={(file) => console.log('Test upload:', file)} />
                  </div>
                </div>
              )}

              {/* Other Tab Contents - Placeholder */}
              {activeTab !== 'personal' && (
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <Settings size={48} className="mx-auto" />
                    </div>
                    <h3 className="text-heading-05 font-semibold text-gray-900 mb-2">
                      {settingTabs.find(tab => tab.id === activeTab)?.label}
                    </h3>
                    <p className="text-body-sm text-gray-500">
                      This section is coming soon...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}