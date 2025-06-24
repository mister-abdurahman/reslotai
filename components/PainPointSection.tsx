import React from "react";
import { ArrowDown, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainPointSection = () => {
  return (
    <section className="sm:py-20 py-8 bg-gradient-to-br from-blue-900 to-purple-500 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-inter">
              Why ReslotAI Is the No-Show Recovery Leader
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Because recovering no-shows takes more than reminders—ReslotAI
              does what others can’t.
            </p>
          </div>

          {/* Funnel Comparison */}
          <div
            id="comparison-section"
            className="grid md:grid-cols-2 gap-8 items-start mb-16"
          >
            {/* Left Funnel - Other Software */}
            <div className="bg-red-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-300 mb-2 font-inter">
                  Other Software
                </h3>
                <p className="text-red-200">Basic automation approach</p>
              </div>

              <div className="space-y-3 sm:space-y-6">
                {/* Step 1 */}
                <div className="flex items-center gap-4 bg-red-800/40 p-3 sm:p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="text-red-200">Generic reminder sent</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-red-400" />
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 bg-red-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <span className="text-red-200">
                    No personalization or follow-up
                  </span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-red-400" />
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 bg-red-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <span className="text-red-200">Customer ignores it</span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-red-400" />
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-4 bg-red-800/60 p-4 rounded-lg border border-red-400/50">
                  <X className="w-8 h-8 text-red-400" />
                  <span className="text-red-200 font-semibold">
                    No insight into why they canceled
                  </span>
                </div>
              </div>

              <div className="mt-8 text-center bg-red-500/20 border border-red-400/30 p-4 rounded-lg">
                <p className="text-red-200 font-semibold">
                  Result: <a href="revenue-calculator">Revenue lost.</a> Limited
                  automation. High no-show rates.
                </p>
              </div>
            </div>

            {/* Right Funnel - ReslotAI */}
            <div className="bg-green-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-green-300 mb-2 font-inter">
                  ReslotAI
                </h3>
                <p className="text-green-200">Intelligent recovery system</p>
              </div>

              <div className="space-y-3 sm:space-y-6">
                {/* Step 1 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-3 sm:p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="text-green-200">
                    Intelligent survey triggered after every no-show
                  </span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <span className="text-green-200">
                    Captures cancellation reason and objection
                  </span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <span className="text-green-200">
                    Sends personalized offer to rebook
                  </span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <span className="text-green-200">
                    Reschedules with one-click
                  </span>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-green-400" />
                </div>

                {/* Step 5 */}
                <div className="flex items-center gap-4 bg-green-800/40 p-4 rounded-lg border border-green-400/50">
                  <Zap className="w-8 h-8 text-green-400" />
                  <span className="text-green-200 text-sm">
                    Continues SMS/email follow-ups automatically
                  </span>
                </div>
              </div>

              <div className="mt-8 text-center bg-green-500/20 border border-green-400/30 p-4 rounded-lg">
                <p className="text-green-200 font-semibold">
                  Result: Time saved. Clients recovered. Revenue regained.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
            >
              <a href="/how-it-works">See How ReslotAI Stacks Up</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
