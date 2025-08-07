import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { Lock, User } from "lucide-react";

export default function LoginRequired() {
  return (
    <>
      <Header />
      
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-primary-600" />
            </div>
            
            {/* Title */}
            <h1 className="text-heading-04 font-semibold text-gray-900 mb-4">
              Bạn cần đăng nhập
            </h1>
            
            {/* Description */}
            <p className="text-body-md text-gray-600 mb-8">
              Để truy cập Dashboard và các tính năng cá nhân, vui lòng đăng nhập vào tài khoản của bạn.
            </p>
            
            {/* Buttons */}
            <div className="space-y-3">
              <Link to="/login" className="block">
                <Button variant="primary" size="large" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Đăng nhập ngay
                </Button>
              </Link>
              
              <Link to="/register" className="block">
                <Button variant="secondary" size="large" className="w-full">
                  Tạo tài khoản mới
                </Button>
              </Link>
              
              <Link to="/home" className="block">
                <Button variant="tertiary" size="medium" className="w-full">
                  Quay về trang chủ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}