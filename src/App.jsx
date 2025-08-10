import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Register from './pages/auth/Register.jsx';
import Login from './pages/auth/Login.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';
import EmailVerification from './pages/auth/EmailVerification.jsx';
import ResetPassword from './pages/auth/ResetPassword.jsx';
import FindJob from './pages/jobs/FindJob.jsx';
import JobDetails from './pages/jobs/JobDetails.jsx';
import FindEmployers from './pages/employers/FindEmployers.jsx';
import CompanyInfo from './pages/companies/CompanyInfo.jsx';
import FindCandidate from './pages/candidates/FindCandidate.jsx';
import DashboardOverview from './pages/dashboard/DashboardOverview.jsx';
import AppliedJobs from './pages/dashboard/AppliedJobs.jsx';
import FavoriteJobs from './pages/dashboard/FavoriteJobs.jsx';
import JobAlert from './pages/dashboard/JobAlert.jsx';
import Setting from './pages/dashboard/Setting.jsx';
import Blog from './pages/blog/Blog.jsx';
import BlogDetail from './pages/blog/BlogDetail.jsx';
import Contact from './pages/contact/Contact.jsx';
import LoginRequired from './pages/auth/LoginRequired.jsx';
import ProtectedRoute from './components/Auth/ProtectedRoute.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/find-job" element={<FindJob />} />
      <Route path="/find-employers" element={<FindEmployers />} />
      <Route path="/find-candidates" element={<FindCandidate />} />
      <Route path="/find-candidates/:candidateId" element={<FindCandidate />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/blog/category/:categorySlug" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<LoginRequired />} />
      <Route path="/dashboard-authenticated" element={
        <ProtectedRoute>
          <DashboardOverview />
        </ProtectedRoute>
      } />
      <Route path="/dashboard/applied-jobs" element={
        <ProtectedRoute>
          <AppliedJobs />
        </ProtectedRoute>
      } />
      <Route path="/dashboard/favorite-jobs" element={
        <ProtectedRoute>
          <FavoriteJobs />
        </ProtectedRoute>
      } />
      <Route path="/dashboard/job-alert" element={
        <ProtectedRoute>
          <JobAlert />
        </ProtectedRoute>
      } />
      {/* Settings routes with tabs */}
      <Route path="/dashboard/settings" element={
        <ProtectedRoute>
          <Setting />
        </ProtectedRoute>
      } />
      <Route path="/dashboard/settings/:tab" element={
        <ProtectedRoute>
          <Setting />
        </ProtectedRoute>
      } />
      <Route path="/jobs/job-details" element={<JobDetails />} />
      <Route path="/companies/:id" element={<CompanyInfo />} />
    </Routes>
  );
}

export default App;
