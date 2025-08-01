import React from 'react';
import { trustedCompanies } from '../../data/mockJobs';

const TrustedCompanies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Top Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join thousands of companies that trust our platform to find the best talent.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {trustedCompanies.map((company) => (
            <div
              key={company.id}
              className="group flex items-center justify-center"
            >
              <div className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105 w-full h-24 flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      // Fallback if logo fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm hidden"
                  >
                    {company.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Over 12,000+ companies are already using our platform
          </p>
          <button className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all hover:scale-105">
            Post a Job
          </button>
        </div>

        {/* Company Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-700 font-medium mb-1">Satisfaction Rate</div>
            <div className="text-sm text-gray-500">From hiring managers</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-100">
            <div className="text-3xl font-bold text-green-600 mb-2">72%</div>
            <div className="text-gray-700 font-medium mb-1">Faster Hiring</div>
            <div className="text-sm text-gray-500">Compared to traditional methods</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">15 days</div>
            <div className="text-gray-700 font-medium mb-1">Average Time to Hire</div>
            <div className="text-sm text-gray-500">From posting to offer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;