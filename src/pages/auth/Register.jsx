import {
  Eye,
  EyeOff,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Button from "../../components/Button/Button";
import SocialButton from "../../components/Button/SocialButton";
import InputField from "../../components/InputField/InputField";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import Checkbox from "../../components/Form/Checkbox";
import SimpleHeader from "../../components/Header/SimpleHeader.jsx";
import FacebookIcon from "../../assets/icons/facebook-1.svg";
import GoogleIcon from "../../assets/icons/google-1.svg";
import ImageRegister from "../../assets/images/Image-register.png";
import LiveJobIcon from "../../assets/icons/Live-job.svg";
import CompaniesIcon from "../../assets/icons/Companies.svg";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  // Dropdown options
  const userTypeOptions = [
    { value: "candidate", label: "Candidate" },
    { value: "employer", label: "Employer" },
    { value: "recruiter", label: "Recruiter" },
    { value: "company", label: "Company" }
  ];

  const handleUserTypeSelect = (option) => {
    console.log("Selected user type:", option);
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
              <div className="w-full max-w-xl space-y-8">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <h2 className="text-heading-03 font-semibold mb-4">Create account.</h2>
                    <p className="text-body-md text-gray-600">
                      Already have an account?{" "}
                      <Link to="/login" className="text-body-md text-primary-500 font-medium">
                        Sign In
                      </Link>
                    </p>
                  </div>
                  <div className="w-auto">
                    <Dropdown
                      options={userTypeOptions}
                      defaultValue="Employers"
                      onSelect={handleUserTypeSelect}
                    />
                  </div>
                </div>
                
                {/* Textfields Section */}
                <div className="space-y-5">
                  {/* Full Name and Username */}
                  <div className="grid grid-cols-2 gap-5">
                    <InputField placeholder="Full Name" />
                    <InputField placeholder="Username" />
                  </div>

                  {/* Email */}
                  <InputField placeholder="Email address" type="email" />

                  {/* Password */}
                  <InputField 
                    placeholder="Password" 
                    type="password"
                    showToggle={true}
                  />

                  {/* Confirm Password */}
                  <InputField 
                    placeholder="Confirm Password" 
                    type="password"
                    showToggle={true}
                  />
                </div>

                {/* Checkbox + Button Section */}
                <div className="space-y-5">
                  {/* Checkbox */}
                  <Checkbox 
                    label={
                      <span>
                        I've read and agree with your{" "}
                        <a href="#" className="text-blue-600 font-medium">
                          Terms of Services
                        </a>
                      </span>
                    }
                    className="[&_label]:text-body-sm"
                  />

                  {/* Create Account Button */}
                  <Button 
                    variant="primary" 
                    size="large" 
                    className="w-full"
                    rightIcon={ArrowRight}
                  >
                    Create Account
                  </Button>
                </div>

                {/* Social Section */}
                <div className="space-y-5">
                  {/* OR divider */}
                  <div className="flex items-center gap-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-sm text-gray-400">or</span>
                    <hr className="flex-1 border-gray-300" />
                  </div>

                  {/* Social Login */}
                  <div className="flex gap-3">
                    <SocialButton icon={FacebookIcon}>
                      Sign up with Facebook
                    </SocialButton>
                    <SocialButton icon={GoogleIcon}>
                      Sign up with Google
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
            alt="Register illustration" 
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
            <Stat icon={<img src={CompaniesIcon} alt="" className="w-16 h-16" />} label="Companies" value="97,354" />
            <Stat icon={<img src={LiveJobIcon} alt="" className="w-16 h-16" />} label="New Jobs" value="7,532" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

// Reused Stat component
const Stat = ({ icon, label, value }) => (
  <div className="flex flex-col items-start">
    <div className="text-white mb-6">{icon}</div>
    <div className="text-white font-semibold text-body-xl mb-1">{value}</div>
    <div className="text-gray-300 text-body-sm">{label}</div>
  </div>
);