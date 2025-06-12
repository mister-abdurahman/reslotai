import React from "react";
import { X, Check, ArrowDown } from "lucide-react";

const LeasingCompetitionSection = () => {
  const withoutJourney = [
    {
      step: 1,
      title: "Failed Follow-up",
      description: "No-shows go without follow-up",
    },
    {
      step: 2,
      title: "Manual Follow-up",
      description: "Leasing agents chase leads manually",
    },
    {
      step: 3,
      title: "Lost Opportunity",
      description: "Rent loss adds up quietly",
    },
    {
      step: 4,
      title: "No Insights",
      description: "No insight into why renters cancel",
    },
  ];

  const withJourney = [
    {
      step: 1,
      title: "Successful follow-up",
      description: "Branded SMS & emails go out automatically",
    },
    {
      step: 2,
      title: "Automatic follow-up",
      description: "Prospects re-engage with no extra effort",
    },
    {
      step: 3,
      title: "Regained Opportunity",
      description: "Recovered appointments help fill your calendar",
    },
    {
      step: 4,
      title: "Useful Insights",
      description: "Surveys & data reveal what drives rebookings",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            ReslotAI vs. Manual Leasing Follow-Up
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What Missed Tour Recovery Looks Like With and Without Automation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Without ReslotAI Journey */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-inter">
                  Without ReslotAI
                </h3>
                <p className="text-red-600 font-semibold mt-2">
                  Lost Revenue Path
                </p>
              </div>

              <div className="space-y-6">
                {withoutJourney.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < withoutJourney.length - 1 && (
                      <div className="flex justify-start ml-4 mt-3">
                        <ArrowDown className="w-4 h-4 text-red-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-700 font-semibold text-center">
                  Result: $2,000+ lost revenue per missed tour
                </p>
              </div>
            </div>

            {/* With ReslotAI Journey */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-inter">
                  With ReslotAI
                </h3>
                <p className="text-green-600 font-semibold mt-2">
                  Revenue Recovery Path
                </p>
              </div>

              <div className="space-y-6">
                {withJourney.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < withJourney.length - 1 && (
                      <div className="flex justify-start ml-4 mt-3">
                        <ArrowDown className="w-4 h-4 text-green-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-700 font-semibold text-center">
                  Result: 79% of missed tours recovered automatically
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                The Difference
              </h4>
              <p className="text-gray-600">
                ReslotAI turns your biggest leasing challenge into your
                competitive advantage, automatically recovering revenue that
                would otherwise walk out the door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeasingCompetitionSection;
