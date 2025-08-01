import React from 'react';
import { Search, FileText, Users, Trophy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Search Jobs",
      description: "Browse thousands of job opportunities from top companies worldwide. Use our advanced filters to find the perfect match.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: FileText,
      title: "Apply Online",
      description: "Submit your application with just a few clicks. Upload your resume and cover letter to stand out from the crowd.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: Users,
      title: "Get Interviewed",
      description: "Connect with hiring managers and showcase your skills. We'll guide you through the interview process.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      icon: Trophy,
      title: "Land Your Dream Job",
      description: "Receive job offers and start your new career journey. Join thousands of successful professionals.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Getting started is easy. Follow these simple steps to find your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="relative group"
              >
                {/* Connecting Line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their dream jobs through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Get Started Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;