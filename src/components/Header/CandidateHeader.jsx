import React from "react";
import { Phone, ChevronDown, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import FlagUS from "../../assets/images/FlagUS.svg";
import Avatar from "../../assets/images/Image-1.png";
import NavLinkSimple from "../NavLink/NavLinkSimple";
import SearchInput from "../InputField/SearchInput";

const CandidateHeader = React.memo(function CandidateHeader() {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Top row: bg-gray-50 */}
      <div className="bg-gray-50">
        <div className="container flex items-center justify-between">
          {/* Navigation links */}
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <NavLinkSimple label="Home" to="/" />
            <NavLinkSimple label="Find Job" to="/find-job" />
            <NavLinkSimple label="Employers" to="/employers" />
            <NavLinkSimple label="Blog" to="/blog" />
            <NavLinkSimple label="Contact Us" to="/contact" />
          </nav>
          {/* Contact & Language */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              <span>+1-202-555-0178</span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 cursor-pointer">
              <img
                src={FlagUS}
                alt="US Flag"
                className="w-5 h-5 rounded-sm"
              />
              <span>English</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: bg-white */}
      <div className="bg-white">
        <div className="container flex items-center justify-between gap-64 py-4">
          {/* Logo + SearchInput */}
          <div className="flex items-center gap-6 flex-1">
            <img src={Logo} alt="Logo" />
            <SearchInput className="w-full max-w-none" />
          </div>

          {/* Notification + Avatar */}
          <div className="flex items-center gap-3">
            {/* Notification */}
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>

            {/* Avatar */}
            <button className="w-8 h-8 rounded-full overflow-hidden transition-transform duration-200 hover:scale-105">
              <img
                src={Avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

export default CandidateHeader;