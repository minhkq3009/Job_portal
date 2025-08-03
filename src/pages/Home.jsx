import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import KeywordInput from "../components/InputField/KeywordInput";
import { MapPin, ArrowRight } from "lucide-react";
import CompanyCard from "../components/Card/CompanyCard";
import CategoryCard from "../components/Categories/CategoryCard";
import PopularVacancyItem from "../components/Card/PopularVacancyItem";
import WorkStep from "../components/Card/WorkStep";
import Button from "../components/Button/Button";
import NavigationButton from "../components/Button/NavigationButton";
import JobCardHorizontal from "../components/Card/JobCardHorizontal";
import TestimonialCard from "../components/Card/TestimonialCard";
import Illustration from "../assets/images/Illustration.svg";
import { featuredJobs } from "../data/jobsData";
import { popularCategories } from "../data/categoriesData";
import { popularVacancies } from "../data/vacanciesData";
import { statsData } from "../data/statsData";
import { topCompanies } from "../data/companiesData";
import { testimonialsData } from "../data/testimonialsData";
import CallToRegisterCard from "../components/Card/CallToRegisterCard";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const companiesPerSlide = 8;
  const totalSlides = Math.ceil(topCompanies.length / companiesPerSlide);



  // Testimonial carousel state
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const testimonialsPerSlide = 3; // 3 testimonials per slide
  const totalTestimonialSlides = Math.ceil(testimonialsData.length / testimonialsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Testimonial carousel functions
  const nextTestimonialSlide = () => {
    setTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides);
  };

  const prevTestimonialSlide = () => {
    setTestimonialSlide((prev) => (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides);
  };

  const getCurrentCompanies = () => {
    const start = currentSlide * companiesPerSlide;
    return topCompanies.slice(start, start + companiesPerSlide);
  };

  const getCurrentTestimonials = () => {
    const start = testimonialSlide * testimonialsPerSlide;
    return testimonialsData.slice(start, start + testimonialsPerSlide);
  };

  return (
    <>
      <Header />

      <main className="bg-gray-50">
        {/* Hero + Categories Section */}
        <section className="py-12 md:py-16 lg:py-[100px]">
          {/* Hero */}
          <div className="container grid grid-cols-12 items-center gap-10 mb-12 md:mb-16 lg:mb-[100px]">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-8">
              <h1 className="text-display-01 text-gray-900 font-medium mb-6">
                Find a job that suits <br /> your interest & skills.
              </h1>
              <p className="text-gray-600 text-body-lg max-w-lg">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
              </p>
            </div>

            <div className="flex flex-col gap-6 max-w-4xl">
              <div className="flex items-center bg-white rounded-md p-3 gap-2 w-full shadow-sm border border-gray-100">
                <div className="flex-1 min-w-0">
                  <KeywordInput placeholder="Job title, keyword..." className="border-0 shadow-none" />
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="flex-1 min-w-0">
                  <KeywordInput 
                    Icon={MapPin}
                    placeholder="Your Location" 
                    className="border-0 shadow-none"
                  />
                </div>
                                <Link 
                  to="/find-job"
                  className="px-4 py-3 h-12 rounded-md bg-primary-500 text-white font-medium hover:bg-primary-600 transition-all shrink-0 whitespace-nowrap min-w-fit flex items-center justify-center"
                >
                  Find Job
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                Suggestion:{" "}
                <span className="text-primary-500 font-medium">
                  Designer, Programming, Digital Marketing
                </span>
                , Video, Animation.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block col-span-7">
            <img
              src={Illustration}
              alt="Hero illustration"
              className="h-[382px] w-full object-contain object-right"
            />
          </div>
          </div>

          {/* Categories */}
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="col-span-3">
                  <CategoryCard 
                    icon={stat.icon}
                    title={stat.title}
                    subtitle={stat.subtitle}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Vacancies Section */}
        <section className="bg-white py-12 md:py-16 lg:py-[100px]">
          <div className="container">
            <h2 className="text-heading-01 font-semibold mb-12">
              Most Popular Vacancies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-sm">
              {popularVacancies.map((job, index) => (
                <PopularVacancyItem
                  key={index}
                  title={job.title}
                  count={job.count}
                  isLink={job.isLink}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How Jobpilot Work Section */}
        <section className="bg-gray-50 py-12 md:py-16 lg:py-[100px]">
          <div className="container text-center">
            <h2 className="text-heading-01 font-semibold mb-8 md:mb-10 lg:mb-[50px]">
              How jobpilot work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <WorkStep
                iconName="userPlus"
                title="Create account"
                desc="Aliquam facilisis egestas sapien, nec tempor leo tristique at."
              />
              <WorkStep
                iconName="uploadCloud"
                title="Upload CV/Resume"
                desc="Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales"
              />
              <WorkStep
                iconName="search"
                title="Find suitable job"
                desc="Phasellus quis eleifend ex. Morbi nec fringilla nibh."
              />
              <WorkStep
                iconName="send"
                title="Apply job"
                desc="Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus."
              />
            </div>
          </div>
        </section>

        {/* Popular Category Section */}
        <section className="py-12 md:py-16 lg:py-[100px] bg-white border-b border-gray-200">
          <div className="container">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 md:mb-10 lg:mb-[50px]">
              <h2 className="text-heading-01 font-semibold text-gray-900">Popular category</h2>
              <Button 
                variant="tertiary" 
                size="medium"
                rightIcon={ArrowRight}
              >
                View All
              </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <CategoryCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  subtitle={category.subtitle}
                  titleSize="body-lg"
                  subtitleSize="body-sm"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Job Section */}
        <section className="py-12 md:py-16 lg:py-[100px] bg-white">
          <div className="container">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 md:mb-10 lg:mb-[50px]">
              <h2 className="text-heading-01 font-semibold text-gray-900">Featured job</h2>
              <Button 
                variant="tertiary" 
                size="medium"
                rightIcon={ArrowRight}
              >
                View All
              </Button>
            </div>

            {/* Job list */}
            <div className="flex flex-col gap-6">
              {featuredJobs.map((job, index) => (
                <JobCardHorizontal key={index} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies Section */}
        <section className="pb-12 md:pb-16 lg:pb-[100px] bg-white">
          <div className="container">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 md:mb-10 lg:mb-[50px]">
              <h2 className="text-heading-01 font-semibold text-gray-900">
                Top companies
              </h2>
              <div className="flex gap-2">
                <NavigationButton
                  direction="left"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  active={currentSlide > 0}
                />
                <NavigationButton
                  direction="right"
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  active={currentSlide < totalSlides - 1}
                />
              </div>
            </div>

            {/* Grid - 2 rows x 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
              {/* First row */}
              {getCurrentCompanies().slice(0, 4).map((company, index) => (
                <CompanyCard
                  key={`${currentSlide}-row1-${index}`}
                  logoText={company.logoText}
                  company={company.company}
                  location={company.location}
                  showBookmark={false}
                  onOpen={() => {}}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Second row */}
              {getCurrentCompanies().slice(4, 8).map((company, index) => (
                <CompanyCard
                  key={`${currentSlide}-row2-${index}`}
                  logoText={company.logoText}
                  company={company.company}
                  location={company.location}
                  showBookmark={false}
                  onOpen={() => {}}
                />
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-2 bg-primary-500"
                      : "w-2 h-2 bg-gray-300 hover:bg-primary-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-50 py-[100px]">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-heading-01 text-gray-900 font-semibold mb-12">
              Clients Testimonial
            </h2>

            <div className="relative px-16">
              {/* Navigation Buttons */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <NavigationButton
                  direction="left"
                  onClick={prevTestimonialSlide}
                  disabled={testimonialSlide === 0}
                  active={testimonialSlide > 0}
                />
              </div>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <NavigationButton
                  direction="right"
                  onClick={nextTestimonialSlide}
                  disabled={testimonialSlide === totalTestimonialSlides - 1}
                  active={testimonialSlide < totalTestimonialSlides - 1}
                />
              </div>

              {/* Testimonials Container */}
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {getCurrentTestimonials().map((item, idx) => (
                    <TestimonialCard key={`${testimonialSlide}-${idx}`} {...item} />
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3">
                {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      testimonialSlide === index
                        ? "w-8 h-2 bg-primary-500"
                        : "w-2 h-2 bg-gray-300 hover:bg-primary-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Register Section */}
        <section className="py-[100px] bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CallToRegisterCard
                title="Become a Candidate"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur."
                variant="light"
              />
              <CallToRegisterCard
                title="Become an Employers"
                desc="Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor."
                variant="dark"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}