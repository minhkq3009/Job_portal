import React from 'react';
import { jobStats } from '../../data/mockJobs';

const JobStats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Millions
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Join the largest job platform connecting talented professionals with amazing opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {jobStats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <p className="text-white text-lg mb-4">
              "This platform helped me find my dream job in just 2 weeks. The process was smooth and the opportunities were amazing!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">John Doe</div>
                <div className="text-blue-200 text-sm">Software Engineer at Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobStats;