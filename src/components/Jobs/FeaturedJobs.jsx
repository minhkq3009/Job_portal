import React from 'react';
import { mockJobs } from '../../data/mockJobs';
import JobCardHorizontal from '../Card/JobCardHorizontal';
import { ArrowRight, Briefcase } from 'lucide-react';

const FeaturedJobs = () => {
  // Get first 4 jobs for featured section
  const featuredJobs = mockJobs.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}Jobs
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the most exciting opportunities from top companies worldwide.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 text-blue-600">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">{mockJobs.length}+ jobs available</span>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {featuredJobs.map((job) => (
            <JobCardHorizontal
              key={job.id}
              title={job.title}
              location={job.location}
              salary={job.salary}
              time={job.timePosted}
              topLabel={job.topLabel}
              topVariant={job.topVariant}
              typeLabel={job.typeLabel}
              typeVariant={job.typeVariant}
              logo={job.logo}
              logoText={job.logoText}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg">
            View All Jobs
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;