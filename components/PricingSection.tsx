import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Script from "next/script";

const pricingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "ReslotAI Pro Plan",
  description:
    "Includes up to 200 missed appointments/month, AI optimization, branded emails and SMS recovery.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "99.00",
    availability: "https://schema.org/InStock",
    url: "https://reslotai.com/pricing",
  },
};

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: 39.99,
      savePriceText: "or $335/year (save 30%)",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 contacts",
        "1 user",
        "1 editable objection-overcoming message",
        "Automated follow-up & surveys",
        "Basic analytics",
      ],
      highlighted: false,
      cta: "Start With Starter",
    },
    {
      name: "Growth",
      price: 74.99,
      savePriceText: "or $629/year (save 30%)",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 contacts",
        "Unlimited users",
        "Unlimited editable templates",
        "Advanced analytics",
        "Priority support",
      ],
      highlighted: true,
      cta: "Scale With Growth",
    },
    {
      name: "Pro",
      price: 149.99,
      savePriceText: "or $1,259/year (save 30%)",
      description: "For established businesses with high volume",
      features: [
        "Unlimited contacts/users",
        "Full analytics dashboard",
        "Dedicated account manager",
        "Unlimited objection-overcoming templates with customization",
      ],
      highlighted: false,
      cta: "Go Pro and Win Every No-Show",
    },
  ];

  return (
    <>
      <Script
        id="global-pricing-schema" // Unique ID
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />

      <section
        id="pricing"
        className="pb-10 sm:pb-20 pt-10 sm:pt-30 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
              Flexible Plans Built for Service Businesses That Can’t Afford to
              Lose Time
            </h2>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <p className="text-green-800 font-semibold">
                💡 Recover just one no-show per month and your plan pays for
                itself. All plans come with a 30-day money-back guarantee.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                  plan.highlighted
                    ? "border-2 border-blue-500 transform scale-105"
                    : "border border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-inter">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="flex mb-6 flex-col">
                    <div className="">
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <span className="text-xs font-bold text-gray-500">
                      {plan.savePriceText}
                    </span>
                  </div>
                  <Button
                    className={`w-full mb-8 ${
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    } text-white font-semibold`}
                    aria-label={`Start ${plan.name} plan`}
                  >
                    <a href="/checkout">{plan.cta}</a>
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-blue-900 font-inter">
                <strong>Setup takes just 5 minutes.</strong> Cancel anytime.
                30-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
