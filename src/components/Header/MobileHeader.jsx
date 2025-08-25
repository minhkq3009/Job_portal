import { useState, useRef, useEffect } from "react";
import { Menu, Search, Bell, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import FlagUS from "../../assets/images/FlagUS.svg";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [overlayTop, setOverlayTop] = useState(0);
  const location = useLocation();

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

                 {/* Row 2: Logo + Search + Post A Job */}
         <div className="flex items-center justify-between px-4 py-4">
                       <img
              src={Logo}
              alt="Jobpilot"
              className="h-8"
            />
           <div className="flex items-center space-x-3">
             <Search className="w-5 h-5 text-gray-600" />
             <div className="flex items-center space-x-2">
               <button className="relative p-2 text-gray-600 hover:text-gray-800">
                 <Bell size={20} />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
               </button>
               <button className="p-1 text-gray-600 hover:text-gray-800">
                 <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                   <User size={16} />
                 </div>
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
}
