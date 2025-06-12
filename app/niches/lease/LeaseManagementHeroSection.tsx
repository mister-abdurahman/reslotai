import React from "react";
import { Button } from "@/components/ui/button";

const LeaseManagementHeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-gradient-to-br from-blue-900 to-purple-500 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div
          className="absolute top-1/2 -left-40 w-60 h-60 bg-white/3 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 pt-30 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-inter font-bold text-white mb-6 animate-fade-in">
              Recover Missed Leasing Appointments Automatically —
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Without Replacing Your Software
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up font-inter">
              ReslotAI helps leasing teams re-engage no-shows and reschedule
              canceled tours through automated SMS, personalized emails, and
              AI-driven insights — built to work alongside your property
              management platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
              >
                See Pricing
              </Button>
            </div>

            {/* Trust indicators - Use semantic elements where appropriate */}
            <div className="animate-slide-up">
              <p className="text-gray-300 text-sm mb-4 font-inter">
                Trusted by 200+ property managers
              </p>
              <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
                {[
                  "Urban Living",
                  "Coastal Properties",
                  "Metro Rentals",
                  "Elite Leasing Co",
                ].map((company, index) => (
                  <li
                    key={index}
                    className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
                    aria-label="Trust indicator"
                  >
                    <span className="text-white font-medium text-sm">
                      {company}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="animate-fade-in">
            <figure className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              {/* This inner div might represent the actual dashboard image or interactive element */}
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="border-b pb-3 mb-4">
                  <h3 className="font-semibold text-gray-800">
                    LeaseAI Dashboard
                  </h3>
                  {/* <p> for descriptive text */}
                  <p className="text-sm text-gray-600">
                    Real-time leasing optimization
                  </p>
                </div>
                <div className="space-y-4">
                  <dl className="space-y-4">
                    {" "}
                    {/* Using <dl> for a list of definitions */}
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <dt className="text-sm text-gray-700">
                        {" "}
                        {/* Definition Term */}
                        Vacancies Filled
                      </dt>
                      <dd className="font-bold text-green-600">
                        {" "}
                        {/* Definition Description */}
                        32 this month
                      </dd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <dt className="text-sm text-gray-700">
                        Tenant Response Rate
                      </dt>
                      <dd className="font-bold text-blue-600">78%</dd>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <dt className="text-sm text-gray-700">
                        Property Occupancy
                      </dt>
                      <dd className="font-bold text-purple-600">97%</dd>
                    </div>
                  </dl>
                </div>
              </div>
              {/* Consider adding a visual `img` of the dashboard with an `alt` tag here. */}
              {/* <img src="/path/to/dashboard-screenshot.png" alt="ReslotAI Dashboard showing key leasing metrics" className="mt-4 rounded-xl" /> */}
              <figcaption className="mt-4 text-center text-sm text-gray-300">
                Visualize key leasing metrics on the ReslotAI Dashboard.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseManagementHeroSection;
