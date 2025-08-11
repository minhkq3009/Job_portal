import React, { useState } from "react";
import CandidateHeader from "../../components/Header/CandidateHeader";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import Map from "../../components/Map/Map";
import { Send } from "lucide-react";

/**
 * Contact page component
 * @returns {JSX.Element} Contact page
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  /**
   * Handle input changes
   * @param {Event} e - Input event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <CandidateHeader />
      <Breadcrumb title="Contact Us" />

      {/* Main Content */}
      <div className="bg-white w-full">
                 <div className="container mx-auto py-16">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Customer Service Info */}
            <div className="col-span-4 flex items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-display-02 font-semibold text-gray-900 mb-6">
                    We care about customer services
                  </h1>
                  
                  <p className="text-body-lg-400 text-gray-700 mb-8">
                    Want to chat? We'd love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.
                  </p>
                  
                  <Button
                    variant="primary"
                    size="large"
                    className="w-full md:w-auto"
                  >
                    Email Support
                  </Button>
                </div>
              </div>
            </div>

            {/* Spacer column for gap */}
            <div className="col-span-2"></div>

            {/* Right Column - Contact Form */}
            <div className="col-span-6">
              <div className="bg-white rounded-xl border border-gray-100 p-8">
                <h2 className="text-heading-04 font-semibold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First row - Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-body-md font-medium text-gray-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-body-md font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  {/* Second row - Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-body-md font-medium text-gray-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  {/* Third row - Message */}
                  <div>
                    <label htmlFor="message" className="block text-body-md font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    rightIcon={Send}
                    className="w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-screen -ml-4">
        <Map 
          lat={40.7484}
          lng={-74.0043}
          title="Our Office"
          address="123 Business Street, Suite 100, New York, NY 10001"
          fullWidth={true}
        />
      </div>
      
      <Footer />
    </>
  );
}

export default Contact;
