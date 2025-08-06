import React from 'react';
import { Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/find-job" element={<FindJob />} />
      <Route path="/find-employers" element={<FindEmployers />} />
      <Route path="/find-candidates" element={<FindCandidate />} />
      <Route path="/find-candidates/:candidateId" element={<FindCandidate />} />
      <Route path="/dashboard" element={<DashboardOverview />} />
      <Route path="/jobs/job-details" element={<JobDetails />} />
      <Route path="/companies/:id" element={<CompanyInfo />} />
    </Routes>
  );
}

export default App;
