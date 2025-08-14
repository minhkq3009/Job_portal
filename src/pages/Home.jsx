import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveHeader from "../components/Header/ResponsiveHeader";
import KeywordInput from "../components/InputField/KeywordInput";
import { MapPin, ArrowRight } from "lucide-react";
import CompanyCard from "../components/Card/CompanyCard";
import CategoryCard from "../components/Categories/CategoryCard";
import PopularVacancyItem from "../components/Card/PopularVacancyItem";
import WorkStep from "../components/Card/WorkStep";
import Button from "../components/Button/Button";
import NavigationButton from "../components/Button/NavigationButton";
import JobCardHorizontal from "../components/Card/JobCardHorizontal";
import JobCardVertical from "../components/Card/JobCardVertical";
import TestimonialCard from "../components/Card/TestimonialCard";
import Illustration from "../assets/images/Illustration.svg";
import starIcon from "../assets/icons/star.svg";
import quoteIcon from "../assets/icons/Quote.svg";
import { featuredJobs, topCompanies, categoriesData as popularCategories, statsData, testimonialsData, popularVacancies } from "../data/index";
import CallToRegisterCard from "../components/Card/CallToRegisterCard";
import Footer from "../components/Footer/Footer";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const companiesPerSlide = 8;
  const totalSlides = Math.ceil(topCompanies.length / companiesPerSlide);

  // Testimonial carousel state
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const testimonialsPerSlide = 3; // 3 testimonials per slide
  
  // Category tabs state
  const [currentCategoryTab, setCurrentCategoryTab] = useState(0);
  
  // Ensure testimonialsData is defined
  const safeTestimonialsData = testimonialsData || [];
  const totalTestimonialSlides = Math.ceil(safeTestimonialsData.length / testimonialsPerSlide);





  // Touch/swipe state for testimonials
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

  // Touch handlers for testimonial swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && testimonialSlide < totalTestimonialSlides - 1) {
      nextTestimonialSlide();
    }
    if (isRightSwipe && testimonialSlide > 0) {
      prevTestimonialSlide();
    }
  };

  const getCurrentCompanies = (slideIndex = null) => {
    const slide = slideIndex !== null ? slideIndex : currentSlide;
    const start = slide * companiesPerSlide;
    const companies = topCompanies.slice(start, start + companiesPerSlide);
    return companies;
  };



  return (
    <>
      <ResponsiveHeader />

      <style jsx>{`
        .companies-swiper .swiper-pagination {
          position: relative;
          margin-top: 1rem;
        }
        
        .companies-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .companies-swiper .swiper-pagination-bullet-active {
          width: 24px;
          height: 8px;
          background: #3B82F6;
          border-radius: 4px;
        }

        .categories-swiper .swiper-pagination {
          position: relative;
          margin-top: 1rem;
        }
        
        .categories-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .categories-swiper .swiper-pagination-bullet-active {
          width: 24px;
          height: 8px;
          background: #3B82F6;
          border-radius: 4px;
        }

        .vacancies-swiper .swiper-pagination {
          position: relative;
          margin-top: 1rem;
        }
        
        .vacancies-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .vacancies-swiper .swiper-pagination-bullet-active {
          width: 24px;
          height: 8px;
          background: #3B82F6;
          border-radius: 4px;
        }
      `}</style>

      <main className="bg-gray-50">
        {/* Hero + Categories Section */}
        <section className="py-12 md:py-16 lg:py-[100px]">
          {/* Hero */}
          <div className="container mx-auto px-4 md:px-6 lg:px-0 grid grid-cols-12 items-center gap-6 lg:gap-10 mb-12 md:mb-16 lg:mb-[100px]">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-display-01 text-gray-900 font-medium mb-4 lg:mb-6">
                Find a job that suits <br className="hidden sm:block" /> your interest & skills.
              </h1>
              <p className="text-gray-600 text-base lg:text-body-lg max-w-lg">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6 max-w-4xl">
              {/* Desktop Search Form */}
              <div className="hidden md:flex items-center bg-white rounded-md p-3 gap-2 w-full shadow-sm border border-gray-100">
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
                  className="px-3 py-2 md:px-4 md:py-3 h-10 md:h-12 rounded-md bg-primary-500 text-white font-medium hover:bg-primary-600 transition-all shrink-0 whitespace-nowrap min-w-fit flex items-center justify-center text-sm md:text-base"
                >
                  Find Job
                </Link>
              </div>

              {/* Mobile Search Form */}
              <div className="md:hidden space-y-3">
                <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                  <KeywordInput placeholder="Job title, keyword..." className="border-0 shadow-none" />
                </div>
                <div className="bg-white rounded-md p-3 shadow-sm border border-gray-100">
                  <KeywordInput 
                    Icon={MapPin}
                    placeholder="Your Location" 
                    className="border-0 shadow-none"
                  />
                </div>
                <Link 
                  to="/find-job"
                  className="w-full px-3 py-2 md:px-4 md:py-3 h-10 md:h-12 rounded-md bg-primary-500 text-white font-medium hover:bg-primary-600 transition-all flex items-center justify-center text-sm md:text-base"
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
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {statsData.map((stat, index) => (
                <div key={index}>
                  <CategoryCard 
                    icon={stat.icon}
                    title={stat.title}
                    subtitle={stat.subtitle}
                    titleSize="heading-04"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Vacancies Section */}
        <section className="bg-white py-12 md:py-16 lg:py-[100px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <h2 className="text-xl md:text-heading-01 font-semibold mb-7 md:mb-12">
              Most Popular Vacancies
            </h2>
            
            {/* Mobile Layout - Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="vacancies-swiper"
              >
                {/* First tab - 3 vacancies */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-6">
                    {popularVacancies.slice(0, 3).map((job, index) => (
                      <PopularVacancyItem
                        key={`mobile-tab1-${index}`}
                        title={job.title}
                        count={job.count}
                        isLink={job.isLink}
                      />
                    ))}
                  </div>
                </SwiperSlide>

                {/* Second tab - 3 vacancies */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-6">
                    {popularVacancies.slice(3, 6).map((job, index) => (
                      <PopularVacancyItem
                        key={`mobile-tab2-${index}`}
                        title={job.title}
                        count={job.count}
                        isLink={job.isLink}
                      />
                    ))}
                  </div>
                </SwiperSlide>

                {/* Third tab - 3 vacancies */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-6">
                    {popularVacancies.slice(6, 9).map((job, index) => (
                      <PopularVacancyItem
                        key={`mobile-tab3-${index}`}
                        title={job.title}
                        count={job.count}
                        isLink={job.isLink}
                      />
                    ))}
                  </div>
                </SwiperSlide>

                {/* Fourth tab - 3 vacancies */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-6">
                    {popularVacancies.slice(9, 12).map((job, index) => (
                      <PopularVacancyItem
                        key={`mobile-tab4-${index}`}
                        title={job.title}
                        count={job.count}
                        isLink={job.isLink}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-y-10 gap-x-6 text-sm">
              {popularVacancies.map((job, index) => (
                <PopularVacancyItem
                  key={`desktop-${index}`}
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
          <div className="container mx-auto px-4 md:px-6 lg:px-0 text-center">
            <h2 className="text-xl md:text-heading-01 font-semibold mb-8 md:mb-10 lg:mb-[50px]">
              How jobpilot work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
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
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            {/* Header */}
            <div className="flex flex-row sm:flex-row sm:items-center items-center justify-between gap-4 mb-8 md:mb-10 lg:mb-[50px]">
              <h2 className="text-xl md:text-heading-01 font-semibold text-gray-900">Popular category</h2>
              <Button 
                variant="tertiary" 
                size="medium"
                rightIcon={ArrowRight}
                className="self-auto sm:self-start px-3 py-2 md:px-6 md:py-3 text-sm md:text-button"
              >
                View All
              </Button>
            </div>

            {/* Mobile Layout - Swiper with dots */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="categories-swiper"
                onSlideChange={(swiper) => setCurrentCategoryTab(swiper.activeIndex)}
                initialSlide={currentCategoryTab}
              >
                {/* First slide - 3 categories */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-3">
                    {popularCategories.slice(0, 3).map((category, index) => (
                      <CategoryCard
                        key={`mobile-slide1-${index}`}
                        icon={category.icon}
                        title={category.title}
                        subtitle={category.subtitle}
                        titleSize="body-lg"
                        subtitleSize="body-sm"
                      />
                    ))}
                  </div>
                </SwiperSlide>

                {/* Second slide - 3 categories */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-3">
                    {popularCategories.slice(3, 6).map((category, index) => (
                      <CategoryCard
                        key={`mobile-slide2-${index}`}
                        icon={category.icon}
                        title={category.title}
                        subtitle={category.subtitle}
                        titleSize="body-lg"
                        subtitleSize="body-sm"
                      />
                    ))}
                  </div>
                </SwiperSlide>

                {/* Third slide - 3 categories */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-3">
                    {popularCategories.slice(6, 9).map((category, index) => (
                      <CategoryCard
                        key={`mobile-slide3-${index}`}
                        icon={category.icon}
                        title={category.title}
                        subtitle={category.subtitle}
                        titleSize="body-lg"
                        subtitleSize="body-sm"
                      />
                    ))}
                  </div>
                </SwiperSlide>

                {/* Fourth slide - 3 categories */}
                <SwiperSlide>
                  <div className="grid grid-cols-1 gap-3">
                    {popularCategories.slice(9, 12).map((category, index) => (
                      <CategoryCard
                        key={`mobile-slide4-${index}`}
                        icon={category.icon}
                        title={category.title}
                        subtitle={category.subtitle}
                        titleSize="body-lg"
                        subtitleSize="body-sm"
                      />
                    ))}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Desktop Layout - Grid */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <CategoryCard
                  key={`desktop-category-${index}`}
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
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            {/* Header */}
            <div className="flex flex-row items-center justify-between gap-4 mb-8 md:mb-10 lg:mb-[50px]">
              <h2 className="text-xl md:text-heading-01 font-semibold text-gray-900">Featured job</h2>
              <Button 
                variant="tertiary" 
                size="small"
                rightIcon={ArrowRight}
                className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-button"
              >
                View All
              </Button>
            </div>

            {/* Job list */}
            <div className="grid grid-cols-1 md:flex md:flex-col gap-4 md:gap-6">
              {featuredJobs.slice(0, 3).map((job, index) => (
                <div key={index} className="md:hidden">
                  <JobCardVertical {...job} compact={true} />
                </div>
              ))}
              {featuredJobs.map((job, index) => (
                <div key={`desktop-${index}`} className="hidden md:block">
                  <JobCardHorizontal {...job} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Companies Section */}
        <section className="pb-8 md:pb-12 lg:pb-[100px] bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8 lg:mb-[50px]">
              <h2 className="text-xl md:text-heading-01 font-semibold text-gray-900">
                Top companies
              </h2>
              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden md:flex gap-2">
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

            {/* Mobile Layout - Swiper */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                className="companies-swiper"
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                initialSlide={currentSlide}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <SwiperSlide key={`mobile-slide-${slideIndex}`}>
                    <div className="grid grid-cols-1 gap-3">
                      {getCurrentCompanies(slideIndex).slice(0, 3).map((company, index) => (
                        <CompanyCard
                          key={`mobile-${slideIndex}-${index}`}
                          logoText={company.logoText}
                          company={company.company}
                          location={company.location}
                          showBookmark={false}
                          onOpen={() => {}}
                          compact={true}
                        />
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop Layout - 2 rows x 4 columns - Hidden on mobile */}
            <div className="hidden md:block">
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

              {/* Desktop Dots Indicator */}
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
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-50 py-12 md:py-[100px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            <h2 className="text-center text-heading-04 md:text-heading-01 text-gray-900 font-semibold mb-8 md:mb-12">
              Clients Testimonial
            </h2>

            {/* Mobile Layout - Horizontal scroll */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {safeTestimonialsData.map((item, idx) => (
                  <div key={`mobile-testimonial-${idx}`} className="flex-shrink-0 w-[280px]">
                    <div className="rounded-xl bg-white shadow-sm flex flex-col w-full p-4">
                      {/* Stars and Content */}
                      <div className="text-sm h-[120px] overflow-hidden">
                        {/* Stars */}
                        <div className="flex gap-1 mb-3">
                          {Array.from({ length: item.rating || 5 }).map((_, starIdx) => (
                            <img
                              key={starIdx}
                              src={starIcon}
                              alt="star"
                              className="w-5 h-5"
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-gray-600 leading-relaxed text-sm line-clamp-4 overflow-hidden">{item.content}</p>
                      </div>

                      {/* Author and Quote */}
                      <div className="flex items-center justify-between w-full mt-4">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="rounded-full object-cover flex-shrink-0 w-8 h-8"
                          />
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-semibold text-gray-900 truncate text-sm">{item.name}</span>
                            <span className="text-gray-500 truncate text-xs">{item.title}</span>
                          </div>
                        </div>

                        <img
                          src={quoteIcon}
                          alt="quote"
                          className="text-gray-300 flex-shrink-0 w-8 h-8"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout - Carousel with navigation buttons */}
            <div className="hidden md:flex items-center gap-8">
              {/* Left Navigation Button */}
              <div style={{ transform: 'translateY(-40px)' }}>
                <NavigationButton
                  direction="left"
                  onClick={prevTestimonialSlide}
                  disabled={testimonialSlide === 0}
                  active={testimonialSlide > 0}
                />
              </div>

              {/* Testimonials Container with smooth animation */}
              <div className="overflow-hidden relative mb-8 flex-1" style={{ minHeight: '320px' }}>
                {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => {
                  const startIndex = slideIndex * testimonialsPerSlide;
                  const endIndex = startIndex + testimonialsPerSlide;
                  const slideTestimonials = safeTestimonialsData.slice(startIndex, endIndex);
                  
                  return (
                    <div 
                      key={slideIndex}
                      className="transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
                      style={{ 
                        transform: `translateX(${(slideIndex - testimonialSlide) * 100}%)`,
                        position: slideIndex === 0 ? 'relative' : 'absolute',
                        top: slideIndex === 0 ? 'auto' : 0,
                        left: slideIndex === 0 ? 'auto' : 0,
                        right: slideIndex === 0 ? 'auto' : 0,
                        width: '100%'
                      }}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                        {slideTestimonials.map((item, idx) => (
                          <TestimonialCard key={`slide-${slideIndex}-${idx}`} {...item} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Navigation Button */}
              <div style={{ transform: 'translateY(-40px)' }}>
                <NavigationButton
                  direction="right"
                  onClick={nextTestimonialSlide}
                  disabled={testimonialSlide === totalTestimonialSlides - 1}
                  active={testimonialSlide < totalTestimonialSlides - 1}
                />
              </div>
            </div>

            {/* Desktop Dots Indicator */}
            <div className="hidden md:flex justify-center gap-3">
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
        </section>

        {/* Call to Register Section */}
        <section className="py-12 md:py-16 lg:py-[100px] bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-0">
            {/* Mobile Layout - Stacked */}
            <div className="md:hidden space-y-4">
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

            {/* Desktop Layout - Side by side */}
            <div className="hidden md:grid md:grid-cols-2 gap-6">
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