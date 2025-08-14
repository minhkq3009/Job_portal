import {
  Eye,
  EyeOff,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleHeader from "../../components/Header/SimpleHeader.jsx";
import SocialButton from "../../components/Button/SocialButton";
import InputField from "../../components/InputField/InputField";
import Checkbox from "../../components/Form/Checkbox";
import FacebookIcon from "../../assets/icons/facebook-1.svg";
import GoogleIcon from "../../assets/icons/google-1.svg";
import ImageRegister from "../../assets/images/Image-register.png";
import LiveJobIcon from "../../assets/icons/Live-job.svg";
import CompaniesIcon from "../../assets/icons/Companies.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake login - set logged in status and redirect to Dashboard
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard-authenticated');
  };

  return (
    <>
      <SimpleHeader />
      <div className="min-h-[100vh] pb-16 flex">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 py-10">
          <div className="container h-full flex flex-col justify-center">
            <div className="flex justify-center">
              {/* Form */}
              <div className="w-full max-w-xl">
                <div className="text-left mb-6">
            <h2 className="text-heading-03 font-semibold mb-4">Sign in</h2>
            <p className="text-body-md text-gray-600">
              Don't have account?{" "}
              <Link to="/register" className="text-body-md text-primary-500 font-medium">
                Create Account
              </Link>
            </p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-5">
                  <InputField placeholder="Email address" type="email" />
                  <InputField 
                    placeholder="Password" 
                    type="password"
                    showToggle={true}
                  />

                  <div className="flex justify-between items-center text-sm">
                    <Checkbox 
                      label="Remember me" 
                      size="small"
                      className="[&_label]:text-body-sm"
                    />
                    <Link to="/forgot-password" className="text-blue-600 font-medium">
                      Forgot password
                    </Link>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                    Sign in
                  </button>
                </form>

                <div className="flex items-center gap-4 mt-5">
                  <hr className="flex-1 border-gray-300" />
                  <span className="text-sm text-gray-400">or</span>
                  <hr className="flex-1 border-gray-300" />
                </div>

                <div className="flex gap-3 mt-5">
                  <SocialButton icon={FacebookIcon} onClick={handleLogin}>
                    Sign in with Facebook
                  </SocialButton>
                  <SocialButton icon={GoogleIcon} onClick={handleLogin}>
                    Sign in with Google
                  </SocialButton>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
      <div className="hidden md:flex w-1/2 relative items-end justify-start text-white">
        {/* Background Image */}
        <div className="fixed top-0 right-0 w-1/2 h-screen flex items-center justify-center">
          <img 
            src={ImageRegister} 
            alt="Login illustration" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-left pl-16 pb-16">
          <h3 className="text-heading-01 font-semibold mb-12">
            Over 1,75,324 candidates <br />
            waiting for good employees.
          </h3>

          <div className="grid grid-cols-3 gap-6 justify-items-start">
            <Stat icon={<img src={LiveJobIcon} alt="" className="w-16 h-16" />} label="Live Job" value="1,75,324" />
            <Stat icon={<img src={CompaniesIcon} alt="" className="w-16 h-16" />} label="Companies" value="87,354" />
            <Stat icon={<img src={LiveJobIcon} alt="" className="w-16 h-16" />} label="New Jobs" value="7,532" />
          </div>
        </div>
      </div>
    </>
  );
}


const Stat = ({ icon, label, value }) => (
  <div className="flex flex-col items-start">
    <div className="text-white mb-6">{icon}</div>
    <div className="text-white font-semibold text-body-xl mb-1">{value}</div>
    <div className="text-gray-300 text-body-sm">{label}</div>
  </div>
);