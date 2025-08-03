import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleHeader from "../../components/Header/SimpleHeader.jsx";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

export default function ResetPassword() {
  return (
    <>
      <SimpleHeader />
      <div className="min-h-[100vh] pb-16 flex">
        {/* Full Width Panel */}
        <div className="w-full py-10">
          <div className="container h-full flex flex-col justify-center">
            <div className="flex justify-center">
              {/* Form */}
              <div className="w-full max-w-xl">
                <div className="text-left mb-6">
                  <h2 className="text-heading-03 font-semibold mb-4">Reset Password</h2>
                  <p className="text-body-md text-gray-600">
                    Duis luctus interdum metus, ut consectetur ante consectetur sed. Suspendisse euismod viverra massa sit amet mollis.
                  </p>
                </div>
                
                <div className="space-y-5">
                  <InputField 
                    placeholder="New Password" 
                    type="password"
                    showToggle={true}
                  />
                  
                  <InputField 
                    placeholder="Confirm Password" 
                    type="password"
                    showToggle={true}
                  />

                  <Button 
                    variant="primary" 
                    size="large" 
                    className="w-full"
                    rightIcon={ArrowRight}
                  >
                    Reset Password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}