import React from "react";
import Script from "next/script";
import TestimonialCarousel from "./TestimonialCarousel";

const testimonialSchema = {
  "@context": "https://schema.org/",
  "@type": "Review",
  reviewBody:
    "ReslotAI helped us recover missed leasing tours instantly. It paid for itself in one week.",
  author: {
    "@type": "Person",
    name: "Rachel Thompson",
  },
  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "ReslotAI",
  },
};

const ResultsSection = () => {
  return (
    <>
      <Script
        id="testimonial-schema" // Unique ID for the script tag
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
      />

      <section
        id="results"
        className="sm:px-20 sm:py-20 px-3 py-8 bg-gradient-to-br from-blue-900 to-purple-500 text-white relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
        </div>

        <div className="container sm:mx-auto sm:px-4 relative z-10">
          {/* Performance Highlights */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white font-inter">
              Results That Prove the Difference
            </h2>
            <p className="text-xl text-gray-200 font-inter mb-12">
              Real service businesses. Real recoveries. Revenue they used to
              miss—now back on the books.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-300 mb-2">
                  150+
                </div>
                <div className="text-xl text-gray-200">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-300 mb-2">
                  $76,728
                </div>
                <div className="text-xl text-gray-200">Revenue Recovered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-300 mb-2">
                  3.5x
                </div>
                <div className="text-xl text-gray-200">
                  Rescheduling Success vs Manual
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
};

export default ResultsSection;
