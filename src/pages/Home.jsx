import Header from "../components/Header/Header";
import KeywordInput from "../components/InputField/KeywordInput";
import { MapPin, PenTool, Building2, Users, FolderPlus } from "lucide-react";
import CompanyCard from "../components/Card/CompanyCard";
import CategoryCard from "../components/Categories/CategoryCard";
import Illustration from "../assets/Illustration.svg";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 py-12 md:py-16 lg:py-[100px]">
        {/* Hero Section */}
        <section className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h1 className="text-display-01 text-gray-900 font-medium mb-6">
                Find a job that suits <br /> your interest & skills.
              </h1>
              <p className="text-gray-600 text-body-lg max-w-lg">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center bg-white rounded-[5px] p-3 gap-0 w-full max-w-2xl">
                <div className="flex-1">
                  <KeywordInput />
                </div>
                <div className="w-px h-10 bg-gray-200 mx-2" />
                <div className="flex-1">
                  <KeywordInput Icon={MapPin} placeholder="Your Location" />
                </div>
                <button className="ml-4 px-6 h-[56px] rounded bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-all">
                  Find Job
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Suggestion:{" "}
                <span className="text-primary-500 font-medium">
                  Designer, Programming, Digital Marketing
                </span>
                , Video, Animation.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="w-full max-w-[492px] mx-auto aspect-[492/382]">
              <img
                src={Illustration}
                alt="Hero illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mt-12 md:mt-16 lg:mt-[100px]">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3">
                <CategoryCard 
                  icon={PenTool}
                  title="1,75,324"
                  subtitle="Live Job"
                />
              </div>
              <div className="col-span-3">
                <CategoryCard 
                  icon={Building2}
                  title="97,354"
                  subtitle="Companies"
                />
              </div>
              <div className="col-span-3">
                <CategoryCard 
                  icon={Users}
                  title="38,47,154"
                  subtitle="Candidates"
                />
              </div>
              <div className="col-span-3">
                <CategoryCard 
                  icon={FolderPlus}
                  title="7,532"
                  subtitle="New Jobs"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
