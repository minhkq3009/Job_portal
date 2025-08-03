import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ title }) {
  const location = useLocation();
  
  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: '/' }];
    
    // Map path segments to readable labels
    const pathLabels = {
      'jobs': 'Jobs',
      'find-job': 'Find Job',
      'profile': 'Profile',
      'settings': 'Settings',
      'applications': 'Applications'
    };
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      
      breadcrumbs.push({
        label,
        path: currentPath,
        isLast: index === pathSegments.length - 1
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          {/* Title - Left */}
          <h1 className="text-body-lg font-semibold text-gray-900">
            {title}
          </h1>
          
          {/* Breadcrumb Navigation - Right */}
          <nav className="flex items-center space-x-1" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight 
                    size={16} 
                    className="text-gray-400 mx-2" 
                  />
                )}
                
                {crumb.isLast ? (
                  <span className="text-body-sm font-medium text-gray-900">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-body-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}