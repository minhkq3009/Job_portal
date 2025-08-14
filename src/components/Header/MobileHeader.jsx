import { useState, useRef, useEffect } from "react";
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";
import FlagUS from "../../assets/images/FlagUS.svg";
import Button from "../Button/Button";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [overlayTop, setOverlayTop] = useState(0);

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
                           <Link to="/login">
                <Button variant="primary" size="small" className="text-sm px-3 py-1">
                  Post A Jobs
                </Button>
              </Link>
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
              <li className="text-gray-700">
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className="text-blue-600 font-medium">
                <Link to="/find-job" onClick={() => setMenuOpen(false)}>Find Job</Link>
              </li>
              <li className="text-gray-700">
                <Link to="/find-employers" onClick={() => setMenuOpen(false)}>Find Employers</Link>
              </li>
              <li className="text-gray-700">
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              </li>
              <li className="text-gray-700">
                <Link to="/dashboard/job-alert" onClick={() => setMenuOpen(false)}>Job Alerts</Link>
              </li>
              <li className="text-gray-700">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Customer Supports</Link>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <Button variant="primary" size="medium" className="text-sm px-4 py-2">
                  Create Account
                </Button>
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="secondary" size="medium" className="text-sm px-4 py-2">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
