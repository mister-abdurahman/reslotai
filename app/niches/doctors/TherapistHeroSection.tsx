import React from "react";
import { Button } from "@/components/ui/button";

const TherapistHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 to-purple-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div
          className="absolute top-1/2 -left-40 w-60 h-60 bg-white/3 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 pt-30 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6 animate-fade-in">
              Stop Losing Clients to{" "}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                No-Shows
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up font-inter">
              ReslotAI automatically reschedules cancelled therapy sessions and
              fills your schedule with zero extra work.
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

            {/* Trust indicators */}
            <div className="animate-slide-up">
              <p className="text-gray-300 text-sm mb-4 font-inter">
                Trusted by 300+ therapy practices
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-60">
                {[
                  "Mindful Therapy",
                  "Wellness Center",
                  "Counseling Group",
                  "Healing Space",
                ].map((company, index) => (
                  <div
                    key={index}
                    className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
                  >
                    <span className="text-white font-medium text-sm">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="border-b pb-3 mb-4">
                  <h3 className="font-semibold text-gray-800">
                    ReslotAI Dashboard
                  </h3>
                  <p className="text-sm text-gray-600">
                    Real-time appointment recovery
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      Sessions Recovered
                    </span>
                    <span className="font-bold text-green-600">
                      38 this month
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      Client Response Rate
                    </span>
                    <span className="font-bold text-blue-600">73%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      Schedule Utilization
                    </span>
                    <span className="font-bold text-purple-600">91%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistHeroSection;
