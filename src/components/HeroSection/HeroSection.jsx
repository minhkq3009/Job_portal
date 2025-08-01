import React from 'react';
import { Search, MapPin, Briefcase, TrendingUp } from 'lucide-react';
import Button from '../button/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 pt-20 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {" "}Dream Job
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Discover amazing career opportunities from top companies worldwide.
            <br />
            Your next career move is just a click away.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              {/* Job Title/Keyword */}
              <div className="md:col-span-5 relative">
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4">
                  <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="md:col-span-4 relative">
                <div className="flex items-center bg-gray-50 rounded-xl px-4 py-4">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    className="w-full bg-transparent text-gray-900 placeholder-gray-500 outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="md:col-span-3">
                <Button
                  size="large"
                  variant="primary"
                  className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                50K+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Jobs Available</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                12K+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Companies</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                100K+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Job Seekers</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                25K+
              </div>
              <div className="text-blue-200 text-sm md:text-base">Success Stories</div>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-12">
            <p className="text-blue-200 mb-4">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer', 'Marketing Manager'].map((term) => (
                <button
                  key={term}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors border border-white/20"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
          <TrendingUp className="w-8 h-8 mb-2" />
          <div className="text-sm opacity-90">Job Growth</div>
          <div className="text-2xl font-bold">+25%</div>
        </div>
      </div>

      <div className="absolute bottom-20 left-20 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20">
          <Briefcase className="w-8 h-8 mb-2" />
          <div className="text-sm opacity-90">New Jobs Today</div>
          <div className="text-2xl font-bold">1,247</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;