import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import JobCategories from '../components/Categories/JobCategories';
import FeaturedJobs from '../components/Jobs/FeaturedJobs';
import JobStats from '../components/Stats/JobStats';
import TrustedCompanies from '../components/Company/TrustedCompanies';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Footer from '../components/Footer/Footer';

export default function NavLinkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <JobCategories />
        <FeaturedJobs />
        <JobStats />
        <TrustedCompanies />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
