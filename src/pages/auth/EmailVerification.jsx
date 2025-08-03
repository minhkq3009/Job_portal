import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SimpleHeader from "../../components/Header/SimpleHeader.jsx";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

export default function EmailVerification() {
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
                  <h2 className="text-heading-03 font-semibold mb-4">Email Verification</h2>
                  <p className="text-body-md text-gray-600">
                    We've sent an verification to <strong>emailaddress@gmail.com</strong> to verify your email address and activate your account.
                  </p>
                </div>
                
                <div className="space-y-5">
                  <InputField placeholder="Verify code" type="text" />

                  <Button 
                    variant="primary" 
                    size="large" 
                    className="w-full"
                    rightIcon={ArrowRight}
                  >
                    Verify my Account
                  </Button>

                  <p className="text-body-md text-gray-600 text-center">
                    Didn't recieve any code?{" "}
                    <button className="text-body-md text-primary-500 font-medium">
                      Resends
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}