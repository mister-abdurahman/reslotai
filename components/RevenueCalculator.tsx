import React from "react";
import Script from "next/script";
import Calculator from "./Calculator";

const calculatorSchema = {
  "@context": "https://schema.org/",
  "@type": "WebApplication",
  name: "ReslotAI Revenue Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  browserRequirements: "JavaScript",
  url: "https://reslot.ai/reslotai-for-leasing-teams#revenue-calculator",
};

const RevenueCalculator = () => {
  return (
    <>
      <Script
        id="calculator-schema" // Unique ID for the script tag
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <section id="revenue-calculator" className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
                Estimate Your Lost Appointment Revenue
              </h2>
              <p className="text-xl text-gray-600 font-inter">
                Use our calculator to see how much income you’re losing to
                no-shows—and how fast ReslotAI can recover it for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <Calculator />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RevenueCalculator;
