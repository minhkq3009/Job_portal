import LogoCompany from "../Company/LogoCompany";
import NavLinkSimple from "../NavLink/NavLinkSimple";
import Button from "../Button/Button";
import CategorySelect from "../InputField/CategorySelect";
import KeywordInput from "../InputField/KeywordInput";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Row */}
      <div className="container py-2">
        <div className="grid grid-cols-12 items-center text-sm text-gray-700 gap-y-2">
          {/* Nav */}
          <nav className="col-span-12 lg:col-span-8 flex flex-wrap gap-4 lg:gap-6 font-medium">
            <NavLinkSimple href="#" label="Home" active />
            <NavLinkSimple href="#" label="Find Job" />
            <NavLinkSimple href="#" label="Employers" />
            <NavLinkSimple href="#" label="Candidates" />
            <NavLinkSimple href="#" label="Pricing Plans" />
            <NavLinkSimple href="#" label="Customer Supports" />
          </nav>

          {/* Contact + Lang */}
          <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+1-202-555-0178</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className="w-5 h-3 object-cover rounded-sm"
              />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="container py-4">
        <div className="grid grid-cols-12 items-center gap-6">
          {/* Logo + Country */}
          <div className="col-span-12 md:col-span-3 flex items-center gap-6">
            <LogoCompany />
            <div className="hidden sm:flex items-center gap-2 border px-3 py-1 rounded-md bg-gray-100">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                className="w-5 h-3 object-cover rounded-sm"
              />
              <span className="text-sm text-gray-700">India</span>
            </div>
          </div>

          {/* Search Box */}
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm px-3 py-2 w-full">
              <CategorySelect />
              <div className="h-5 w-px bg-gray-300 mx-3" />
              <KeywordInput placeholder="Job title, keyword, company" />
              <Search className="w-5 h-5 text-gray-400 ml-auto" />
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-12 md:col-span-3 flex justify-start md:justify-end items-center gap-3">
            <Button size="medium" variant="ghost">
              Sign In
            </Button>
            <Button size="medium" variant="primary">
              Post A Jobs
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
