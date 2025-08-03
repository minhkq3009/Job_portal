import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import Logo from "../../assets/icons/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Column 1 - Logo + Contact */}
        <div className="md:max-w-xs">
          <div className="flex items-center mb-6">
            <img src={Logo} alt="MyJob Logo" className="brightness-0 invert" />
          </div>
          <p className="text-body-lg text-gray-600 mb-3">
            Call now: <span className="text-body-lg font-medium text-white">(319) 555-0115</span>
          </p>
          <p className="text-body-sm font-normal text-gray-400">
            6391 Elgin St. Celina, Delaware 10299, New York, United States of America
          </p>
        </div>

        {/* Menu Group - 4 columns */}
        <div className="flex flex-col md:flex-row gap-32">
          {/* Column 2 - Quick Link */}
          <div>
            <h4 className="text-body-xl font-semibold mb-6">Quick Link</h4>
            <ul className="space-y-2.5">
              <li className="text-body-medium text-gray-400">About</li>
              <li className="flex items-center gap-2 text-body-medium font-medium text-white">
                <ArrowRight size={14} /> Contact
              </li>
              <li className="text-body-medium text-gray-400">Pricing</li>
              <li className="text-body-medium text-gray-400">Blog</li>
            </ul>
          </div>

          {/* Column 3 - Candidate */}
          <div>
            <h4 className="text-body-xl font-semibold mb-6">Candidate</h4>
            <ul className="space-y-2.5">
              <li className="text-body-medium text-gray-400">Browse Jobs</li>
              <li className="text-body-medium text-gray-400">Browse Employers</li>
              <li className="text-body-medium text-gray-400">Candidate Dashboard</li>
              <li className="text-body-medium text-gray-400">Saved Jobs</li>
            </ul>
          </div>

          {/* Column 4 - Employers */}
          <div>
            <h4 className="text-body-xl font-semibold mb-6">Employers</h4>
            <ul className="space-y-2.5">
              <li className="text-body-medium text-gray-400">Post a Job</li>
              <li className="text-body-medium text-gray-400">Browse Candidates</li>
              <li className="text-body-medium text-gray-400">Employers Dashboard</li>
              <li className="text-body-medium text-gray-400">Applications</li>
            </ul>
          </div>

          {/* Column 5 - Support */}
          <div>
            <h4 className="text-body-xl font-semibold mb-6">Support</h4>
            <ul className="space-y-2.5">
              <li className="text-body-medium text-gray-400">Faqs</li>
              <li className="text-body-medium text-gray-400">Privacy Policy</li>
              <li className="text-body-medium text-gray-400">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2024 MyJob – Job Portal. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Facebook className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          <Youtube className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;