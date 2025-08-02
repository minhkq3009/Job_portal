import { Phone, ChevronDown } from "lucide-react";
import Logo from "../../assets/icons/Logo.svg";
import FlagUS from "../../assets/images/FlagUS.svg";
import NavLinkSimple from "../NavLink/NavLinkSimple";
import SearchInput from "../InputField/SearchInput";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Top row: bg-gray-50 */}
      <div className="bg-gray-50">
        <div className="container flex items-center justify-between">
          {/* Navigation links */}
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <NavLinkSimple label="Home" to="/" />
            <NavLinkSimple label="Find Job" to="/jobs" />
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
        <div className="container flex items-center justify-between gap-6 py-4">
          {/* Logo + SearchInput */}
          <div className="flex items-center gap-6">
            <img src={Logo} alt="Logo" />
            <SearchInput />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button label="Sign In" type="tertiary" size="medium" />
            <Button label="Post A Job" type="primary" size="medium" />
          </div>
        </div>
      </div>
    </header>
  );
}
