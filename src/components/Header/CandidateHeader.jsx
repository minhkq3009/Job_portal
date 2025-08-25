import React, { useState, useRef, useEffect } from "react";
import { Phone, ChevronDown, Bell, Menu, X, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import FlagUS from "../../assets/images/FlagUS.svg";
import Avatar from "../../assets/images/Image-1.png";
import NavLinkSimple from "../NavLink/NavLinkSimple";
import SearchInput from "../InputField/SearchInput";
import Button from "../Button/Button";

const CandidateHeader = React.memo(function CandidateHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [overlayTop, setOverlayTop] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (menuOpen && headerRef.current) {
      setOverlayTop(headerRef.current.offsetHeight || 0);
    }
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Mobile Header Component
  const MobileHeader = () => {
    return (
      <div ref={headerRef} className="w-full bg-white border-b border-gray-200 relative z-50">
        {/* Top bar */}
        <div className="flex flex-col">
          {/* Row 1: Language + Hamburger */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
            <div className="flex items-center space-x-1">
              <img
                src={FlagUS}
                alt="US Flag"
                className="w-5 h-5"
              />
              <select className="text-sm border-none bg-transparent focus:outline-none">
                <option>English</option>
              </select>
            </div>
            <Menu
              className="w-6 h-6 text-gray-600 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Row 2: Logo + Search + Avatar & Notification */}
          <div className="flex items-center justify-between px-4 py-4">
            <img
              src={Logo}
              alt="Jobpilot"
              className="h-8"
            />
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-gray-600" />
              <div className="flex items-center gap-2 lg:gap-3">
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
        </div>

        {/* Dropdown menu + overlay */}
        {menuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed left-0 right-0 bottom-0 bg-black/80 z-40"
              style={{ top: overlayTop }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu Panel */}
            <div className="relative z-50 px-4 pb-4 bg-white shadow rounded-b-lg">
              <ul className="text-sm space-y-3 border-t border-gray-200 pt-3">
                <li className={location.pathname === "/" ? "text-blue-600 font-medium" : "text-gray-700"}>
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li className={location.pathname === "/find-job" || location.pathname.startsWith("/jobs/") ? "text-blue-600 font-medium" : "text-gray-700"}>
                  <Link to="/find-job" onClick={() => setMenuOpen(false)}>Find Job</Link>
                </li>
                <li className={location.pathname === "/find-employers" || location.pathname.startsWith("/companies/") ? "text-blue-600 font-medium" : "text-gray-700"}>
                  <Link to="/find-employers" onClick={() => setMenuOpen(false)}>Find Employers</Link>
                </li>
                <li className={location.pathname === "/dashboard" || location.pathname.startsWith("/dashboard") ? "text-blue-600 font-medium" : "text-gray-700"}>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                </li>
                <li className={location.pathname === "/dashboard/job-alert" ? "text-blue-600 font-medium" : "text-gray-700"}>
                  <Link to="/dashboard/job-alert" onClick={() => setMenuOpen(false)}>Job Alerts</Link>
                </li>
                <li className={location.pathname === "/contact" ? "text-blue-600 font-medium" : "text-gray-700"}>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Customer Supports</Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  };

  // Desktop Header Component
  const DesktopHeader = () => {
    return (
      <header className="w-full border-b border-gray-100">
        {/* Top row: bg-gray-50 */}
        <div className="bg-gray-50">
          <div className="container flex items-center justify-between py-2">
            {/* Navigation links - Desktop */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
              <NavLinkSimple label="Home" to="/" />
              <NavLinkSimple label="Find Job" to="/find-job" />
              <NavLinkSimple label="Find Employers" to="/find-employers" />
              <NavLinkSimple label="Find Candidates" to="/find-candidates" />
              <NavLinkSimple label="Dashboard" to="/dashboard-authenticated" />
              <NavLinkSimple label="Blog" to="/blog" />
              <NavLinkSimple label="Contact Us" to="/contact" />
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Contact & Language - Desktop */}
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              {/* Phone */}
              <div className="hidden lg:flex items-center gap-2">
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

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              <nav className="container py-4 space-y-2">
                <NavLinkSimple label="Home" to="/" className="block py-2" />
                <NavLinkSimple label="Find Job" to="/find-job" className="block py-2" />
                <NavLinkSimple label="Find Employers" to="/find-employers" className="block py-2" />
                <NavLinkSimple label="Find Candidates" to="/find-candidates" className="block py-2" />
                <NavLinkSimple label="Dashboard" to="/dashboard-authenticated" className="block py-2" />
                <NavLinkSimple label="Blog" to="/blog" className="block py-2" />
                <NavLinkSimple label="Contact Us" to="/contact" className="block py-2" />
                
                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} className="text-gray-500" />
                    <span>+1-202-555-0178</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>

        {/* Bottom row: bg-white */}
        <div className="bg-white">
          <div className="container flex items-center justify-between gap-4 lg:gap-64 py-4">
            {/* Logo + SearchInput */}
            <div className="flex items-center gap-3 lg:gap-6 flex-1">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
              <div className="hidden md:block flex-1">
                <SearchInput className="w-full max-w-none" />
              </div>
            </div>

            {/* Notification + Avatar */}
            <div className="flex items-center gap-2 lg:gap-3">
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

        {/* Mobile Search Bar */}
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container py-3">
            <SearchInput className="w-full" />
          </div>
        </div>
      </header>
    );
  };

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
});

export default CandidateHeader;