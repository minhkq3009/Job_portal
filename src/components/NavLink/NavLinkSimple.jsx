import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NavLinkSimple = React.memo(function NavLinkSimple({ label, to }) {
  const location = useLocation();
  
  // Special logic for Find Job - should be active on job-related pages
  const isActive = to === '/find-job' 
    ? (location.pathname === to || location.pathname.startsWith('/jobs/'))
    : location.pathname === to;

  return (
    <Link
      to={to}
      className={clsx(
        "text-left py-[14px] px-0 bg-gray-50 rounded-none text-body-sm focus:outline-none transition-all duration-200 ease-in-out",
        isActive
          ? "text-primary-500 font-medium shadow-[inset_0_-2px_0_0_theme('colors.primary.500')]"
          : "text-gray-400 hover:text-gray-900 focus:shadow-[inset_0_-2px_0_0_theme('colors.primary.500')]"
      )}
    >
      {label}
    </Link>
  );
});

export default NavLinkSimple;
