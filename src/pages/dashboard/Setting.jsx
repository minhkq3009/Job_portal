import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import DashboardMenuItem from "../../components/Dashboard/DashboardMenuItem";

import InputField from "../../components/InputField/InputField";
import SearchInput from "../../components/InputField/SearchInput";
import Button from "../../components/Button/Button";
import SquarePhotoUpload from "../../components/Upload/SquarePhotoUpload";
import MultiResumeUploader from "../../components/Upload/MultiResumeUploader";
import Dropdown from "../../components/Dropdown/Dropdown";
import PhoneInput from "../../components/InputField/PhoneInput";
import KeywordInput from "../../components/InputField/KeywordInput";
import Checkbox from "../../components/Form/Checkbox";
import ToggleField from "../../components/InputField/ToggleField";
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
  Shield,
  Calendar,
  Plus,
  X,
  MapPin,
  Mail,
  Briefcase
} from "lucide-react";

export default function Setting() {
  const [activeMenu, setActiveMenu] = useState('settings');
  const navigate = useNavigate();
  const { tab } = useParams();
  const dateInputRef = useRef(null);
  
  // Get active tab from URL params or default to 'personal'
  const getActiveTab = () => {
    return ['personal', 'profile', 'social', 'account'].includes(tab) ? tab : 'personal';
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTab());
  
  // Sync activeTab with URL params changes
  useEffect(() => {
    const validTab = ['personal', 'profile', 'social', 'account'].includes(tab) ? tab : 'personal';
    setActiveTab(validTab);
  }, [tab]);
  
  const [formData, setFormData] = useState({
    fullname: '',
    title: '',
    experience: '',
    education: '',
    website: '',
    profilePhoto: null,
    resumes: [],
    // Profile tab fields
    nationality: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    profileEducation: '',
    profileExperience: '',
    biography: '',
    // Social links
    socialLinks: [],
    // Account Settings fields
    contactInfo: {
      mapLocation: '',
      phone: '',
      email: '',
    },
    notifications: {
      shortlisted: false,
      jobExpire: false,
      jobAlerts: false,
      profileSaved: false,
      rejected: false,
    },
    jobAlertsSettings: {
      jobRole: '',
      location: '',
    },
    privacy: {
      profilePrivacy: false,
      resumePrivacy: false,
    },
    passwords: {
      current: '',
      new: '',
      confirm: '',
    }
  });
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const handleTabChange = (tabId) => {
    if (tabId === 'personal') {
      // For personal tab, use base URL without params to avoid double loading
      navigate('/dashboard/settings');
    } else {
      navigate(`/dashboard/settings/${tabId}`);
    }
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

  const handleDateInputChange = (value) => {
    // Remove all non-digits first
    const digitsOnly = value.replace(/\D/g, '');
    
    // Limit to 8 digits (ddmmyyyy)
    const limitedDigits = digitsOnly.substring(0, 8);
    
    // Format as dd/mm/yyyy
    let formattedValue = limitedDigits;
    if (limitedDigits.length >= 3) {
      formattedValue = limitedDigits.substring(0, 2) + '/' + limitedDigits.substring(2);
    }
    if (limitedDigits.length >= 5) {
      formattedValue = limitedDigits.substring(0, 2) + '/' + limitedDigits.substring(2, 4) + '/' + limitedDigits.substring(4);
    }
    
    setFormData(prev => ({
      ...prev,
      dateOfBirth: formattedValue
    }));
  };

  // Social links handlers
  const handleAddSocialLink = () => {
    const newSocialLink = {
      id: Date.now(), // Simple ID generation
      platform: '',
      url: ''
    };
    setFormData(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, newSocialLink]
    }));
  };

  const handleRemoveSocialLink = (id) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter(link => link.id !== id)
    }));
  };

  // Account Settings handlers
  const handleContactInfoChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      contactInfo: { ...prev.contactInfo, [field]: value }
    }));
  };

  const handleNotificationChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value }
    }));
  };

  const handleJobAlertsChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      jobAlertsSettings: { ...prev.jobAlertsSettings, [field]: value }
    }));
  };

  const handlePrivacyChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      privacy: { ...prev.privacy, [field]: value }
    }));
  };

  const handlePasswordChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      passwords: { ...prev.passwords, [field]: value }
    }));
  };

  const handleSocialLinkChange = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.map(link =>
        link.id === id ? { ...link, [field]: value } : link
      )
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

  // Profile tab options
  const nationalityOptions = [
    { label: "United States", value: "us" },
    { label: "Vietnam", value: "vn" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "ca" },
    { label: "Australia", value: "au" },
    { label: "Germany", value: "de" },
    { label: "France", value: "fr" },
    { label: "Japan", value: "jp" },
    { label: "South Korea", value: "kr" },
    { label: "Singapore", value: "sg" },
    { label: "Other", value: "other" },
  ];

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
    { label: "Prefer not to say", value: "prefer-not-to-say" },
  ];

  const maritalStatusOptions = [
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Divorced", value: "divorced" },
    { label: "Widowed", value: "widowed" },
    { label: "Prefer not to say", value: "prefer-not-to-say" },
  ];

  // Social platform options
  const socialPlatformOptions = [
    { label: "Facebook", value: "facebook" },
    { label: "Twitter", value: "twitter" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "Instagram", value: "instagram" },
    { label: "YouTube", value: "youtube" },
    { label: "GitHub", value: "github" },
    { label: "Behance", value: "behance" },
    { label: "Dribbble", value: "dribbble" },
    { label: "Website", value: "website" },
    { label: "Other", value: "other" },
  ];



  const handlePhotoChange = (file, imageUrl) => {
    setFormData(prev => ({
      ...prev,
      profilePhoto: { file, imageUrl }
    }));
  };

  const handleResumeChange = (files) => {
    setFormData(prev => ({
      ...prev,
      resumes: files
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
                        onClick={() => handleTabChange(tab.id)}
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
                    <div className="grid grid-cols-12 gap-4">
                      {/* Left Column - Upload Photo */}
                      <div className="col-span-4">
                        <SquarePhotoUpload
                          currentPhoto={formData.profilePhoto?.imageUrl}
                          onPhotoChange={handlePhotoChange}
                          maxSize={5 * 1024 * 1024} // 5MB
                          acceptedTypes={['image/jpeg', 'image/jpg', 'image/png', 'image/webp']}
                        />
                      </div>

                      {/* Right Column - Form Fields */}
                      <div className="col-span-8">
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
                    <MultiResumeUploader onChange={handleResumeChange} />
                  </div>


                </div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                  <h2 className="text-heading-05 font-semibold text-gray-900 mb-6">
                    Profile Information
                  </h2>
                  
                  {/* Form Fields - 2 columns */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Nationality */}
                    <div>
                      <h3 className="text-body-sm font-medium text-gray-900 mb-3">Nationality</h3>
                      <Dropdown
                        options={nationalityOptions}
                        defaultValue="Select nationality"
                        onSelect={(option) => handleDropdownChange('nationality', option)}
                        className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <h3 className="text-body-sm font-medium text-gray-900 mb-3">Date of Birth</h3>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="dd/mm/yyyy"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleDateInputChange(e.target.value)}
                          className="w-full h-12 px-4 pr-12 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-body-md"
                          maxLength="10"
                        />
                        <input
                          ref={dateInputRef}
                          type="date"
                          value={formData.dateOfBirth ? formData.dateOfBirth.split('/').reverse().join('-') : ''}
                          onChange={(e) => {
                            if (e.target.value) {
                              const [year, month, day] = e.target.value.split('-');
                              handleDateInputChange(`${day}${month}${year}`);
                            }
                          }}
                          className="absolute opacity-0 pointer-events-none"
                          style={{ left: '-9999px' }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            if (dateInputRef.current) {
                              dateInputRef.current.showPicker?.() || dateInputRef.current.focus();
                            }
                          }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Calendar size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Gender */}
                    <div>
                      <h3 className="text-body-sm font-medium text-gray-900 mb-3">Gender</h3>
                      <Dropdown
                        options={genderOptions}
                        defaultValue="Select gender"
                        onSelect={(option) => handleDropdownChange('gender', option)}
                        className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                      />
                    </div>

                    {/* Marital Status */}
                    <div>
                      <h3 className="text-body-sm font-medium text-gray-900 mb-3">Marital Status</h3>
                      <Dropdown
                        options={maritalStatusOptions}
                        defaultValue="Select marital status"
                        onSelect={(option) => handleDropdownChange('maritalStatus', option)}
                        className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                      />
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-body-sm font-medium text-gray-900 mb-3">Education</h3>
                      <Dropdown
                        options={educationOptions}
                        defaultValue="Select education level"
                        onSelect={(option) => handleDropdownChange('profileEducation', option)}
                        className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                      />
                    </div>

                    {/* Experience */}
                    <div>
                      <h3 className="text-body-sm font-medium text-gray-900 mb-3">Experience</h3>
                      <Dropdown
                        options={experienceOptions}
                        defaultValue="Select experience level"
                        onSelect={(option) => handleDropdownChange('profileExperience', option)}
                        className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                      />
                    </div>
                  </div>

                  {/* Biography - Full Width */}
                  <div className="mt-6">
                    <h3 className="text-body-sm font-medium text-gray-900 mb-3">Biography</h3>
                    <textarea
                      placeholder="Write a brief description about yourself, your skills, and experience..."
                      value={formData.biography}
                      onChange={(e) => handleInputChange('biography', e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-body-md"
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
              )}

              {/* Social Tab */}
              {activeTab === 'social' && (
                <div className="bg-white rounded-lg border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-heading-05 font-semibold text-gray-900">
                      Social Links
                    </h2>
                    <Button
                      variant="secondary"
                      size="medium"
                      leftIcon={Plus}
                      onClick={handleAddSocialLink}
                      className="w-full md:w-auto"
                    >
                      Add New Social Link
                    </Button>
                  </div>

                  {/* Social Links List */}
                  <div className="space-y-4">
                    {formData.socialLinks.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Share2 size={48} className="mx-auto mb-4 text-gray-300" />
                        <p className="text-body-md">No social links added yet.</p>
                        <p className="text-body-sm">Click "Add New Social Link" to get started.</p>
                      </div>
                    ) : (
                      formData.socialLinks.map((link) => (
                        <div key={link.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                          {/* Platform Dropdown */}
                          <div className="w-48">
                            <Dropdown
                              options={socialPlatformOptions}
                              defaultValue={link.platform || "Select platform"}
                              onSelect={(option) => handleSocialLinkChange(link.id, 'platform', option.value)}
                              className="[&>button]:h-12 [&>button]:text-body-md [&>button]:px-4"
                            />
                          </div>

                          {/* URL Input */}
                          <div className="flex-1">
                            <InputField
                              placeholder="Enter your profile URL"
                              value={link.url}
                              onChange={(value) => handleSocialLinkChange(link.id, 'url', value)}
                              className="h-12"
                            />
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => handleRemoveSocialLink(link.id)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                            title="Remove social link"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Save Button */}
                  {formData.socialLinks.length > 0 && (
                    <div className="mt-8">
                      <Button
                        variant="primary"
                        size="medium"
                        onClick={handleSave}
                      >
                        Save Changes
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {/* Account Settings Tab */}
              {activeTab === 'account' && (
                <div className="space-y-8">
                  {/* Section 1: Contact Info */}
                  <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <h2 className="text-body-lg font-semibold text-gray-900 mb-6">
                      Contact Info
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-body-md text-gray-700 mb-2">
                          Map Location
                        </label>
                        <KeywordInput
                          Icon={MapPin}
                          value={formData.contactInfo.mapLocation}
                          onChange={(e) => handleContactInfoChange('mapLocation', e.target.value)}
                          placeholder="Enter your location"
                          className="[&_svg]:text-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-body-md text-gray-700 mb-2">
                          Phone
                        </label>
                        <PhoneInput
                          value={formData.contactInfo.phone}
                          onChange={(value) => handleContactInfoChange('phone', value)}
                          placeholder="Phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-body-md text-gray-700 mb-2">
                          Email
                        </label>
                        <KeywordInput
                          Icon={Mail}
                          value={formData.contactInfo.email}
                          onChange={(e) => handleContactInfoChange('email', e.target.value)}
                          placeholder="Email address"
                          className="[&_svg]:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button variant="primary">
                        Save Changes
                      </Button>
                    </div>
                  </div>

                  {/* Section 2: Notification */}
                  <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <h2 className="text-body-lg font-semibold text-gray-900 mb-6">
                      Notification
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Checkbox
                        label="Notify me when employers shortlisted me"
                        defaultChecked={formData.notifications.shortlisted}
                        onChange={(value) => handleNotificationChange('shortlisted', value)}
                      />
                      
                      <Checkbox
                        label="Notify me when my applied jobs are expire"
                        defaultChecked={formData.notifications.jobExpire}
                        onChange={(value) => handleNotificationChange('jobExpire', value)}
                      />
                      
                      <Checkbox
                        label="Notify me when i have up to 5 job alerts"
                        defaultChecked={formData.notifications.jobAlerts}
                        onChange={(value) => handleNotificationChange('jobAlerts', value)}
                      />
                      
                      <Checkbox
                        label="Notify me when employers saved my profile"
                        defaultChecked={formData.notifications.profileSaved}
                        onChange={(value) => handleNotificationChange('profileSaved', value)}
                      />
                      
                      <Checkbox
                        label="Notify me when employers rejected me"
                        defaultChecked={formData.notifications.rejected}
                        onChange={(value) => handleNotificationChange('rejected', value)}
                        className="md:col-span-2"
                      />
                    </div>
                  </div>

                  {/* Section 3: Job Alerts */}
                  <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <h2 className="text-body-lg font-semibold text-gray-900 mb-6">
                      Job Alerts
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <KeywordInput
                          Icon={Briefcase}
                          value={formData.jobAlertsSettings.jobRole}
                          onChange={(e) => handleJobAlertsChange('jobRole', e.target.value)}
                          placeholder="Your job roles"
                          className="[&_svg]:text-gray-400"
                        />
                      </div>
                      
                      <div>
                        <KeywordInput
                          Icon={MapPin}
                          value={formData.jobAlertsSettings.location}
                          onChange={(e) => handleJobAlertsChange('location', e.target.value)}
                          placeholder="City, state, country name"
                          className="[&_svg]:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button variant="primary">
                        Save Changes
                      </Button>
                    </div>
                  </div>

                  {/* Section 4: Profile Privacy & Resume Privacy */}
                  <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ToggleField
                        label="Profile Privacy"
                        description="Your profile is public now"
                        defaultValue={formData.privacy.profilePrivacy}
                        onChange={(value) => handlePrivacyChange('profilePrivacy', value)}
                      />
                      
                      <ToggleField
                        label="Resume Privacy"
                        description="Your resume is public now"
                        defaultValue={formData.privacy.resumePrivacy}
                        onChange={(value) => handlePrivacyChange('resumePrivacy', value)}
                      />
                    </div>
                  </div>

                  {/* Section 5: Change Password */}
                  <div className="bg-white rounded-lg border border-gray-100 p-6">
                    <h2 className="text-body-lg font-semibold text-gray-900 mb-6">
                      Change Password
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-body-md text-gray-700 mb-2">
                          Current Password
                        </label>
                        <InputField
                          type="password"
                          placeholder="Current password"
                          showToggle={true}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-body-md text-gray-700 mb-2">
                          New Password
                        </label>
                        <InputField
                          type="password"
                          placeholder="New password"
                          showToggle={true}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-body-md text-gray-700 mb-2">
                          Confirm Password
                        </label>
                        <InputField
                          type="password"
                          placeholder="Confirm password"
                          showToggle={true}
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button variant="primary">
                        Save Changes
                      </Button>
                    </div>
                  </div>

                  {/* Section 6: Delete Account */}
                  <div className="bg-white rounded-lg border border-red-200 p-6">
                    <h2 className="text-body-lg font-semibold text-gray-900 mb-4">
                      Delete Your Account
                    </h2>
                    
                    <p className="text-body-sm text-gray-400 mb-6 leading-relaxed">
                      If you delete your Jobpilot account, you will no longer be able to get information about the matched jobs, following employers, and job alert, shortlisted jobs and more. You will be abandoned from all the services of Jobpilot.com.
                    </p>

                    <Button variant="tertiary" className="border-red-500 text-red-500 hover:bg-red-50">
                      Close Account
                    </Button>
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