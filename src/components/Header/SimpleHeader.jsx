import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo.svg";

export default function SimpleHeader() {
  return (
    <header className="w-full border-b border-gray-100">
      <div className="bg-white">
        <div className="container py-4">
          {/* Only Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}