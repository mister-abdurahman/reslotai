import React from "react";
import { Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";
import ExpiresIn from "@/components/ExpiresIn";
import BillingToggle from "@/components/BillingToggle";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-4 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Limited Time: 25% OFF</span>
            </div>
            <ExpiresIn />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h1>

            {/* Billing Toggle */}
            <BillingToggle />
          </div>

          <PricingPlans />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
