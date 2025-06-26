"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "@/store/AppContext";

const plans = [
  {
    name: "Starter",
    annualPrice: 335,
    monthlyPrice: 39.99,
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 100 contacts",
      "1 user",
      "1 editable objection-overcoming message",
      "Automated follow-up & surveys",
      "Basic analytics",
    ],
    popular: false,
    cta: "Start With Starter",
  },
  {
    name: "Growth",
    annualPrice: 629,
    monthlyPrice: 74.99,
    description: "Ideal for growing businesses",
    features: [
      "Up to 1,000 contacts",
      "Unlimited users",
      "Unlimited editable templates",
      "Advanced analytics",
      "Priority support",
    ],
    popular: true,
    cta: "Scale With Growth",
  },
  {
    name: "Pro",
    annualPrice: 1259,
    monthlyPrice: 149.99,
    description: "For established businesses with high volume",
    features: [
      "Unlimited contacts/users",
      "Full analytics dashboard",
      "Dedicated account manager",
      "Unlimited objection-overcoming templates with customization",
    ],
    popular: false,
    cta: "Go Pro and Win Every No-Show",
  },
];
function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { timeLeft, setTimeLeft, billingCycle } = useAppContext();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [setTimeLeft]);

  const currentPlan = plans[selectedPlan as number] || plans[1];
  // const currentPlan = plans[selectedPlan as keyof typeof plans];
  const monthlyPrice =
    billingCycle === "annual"
      ? Math.round((currentPlan?.annualPrice / 12) * 0.4)
      : Math.round(currentPlan?.monthlyPrice * 0.75); // 25% discount

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle successful checkout
      toast.success(`Successfully subscribed to ${currentPlan.name} plan!`);
    } catch (error: any) {
      // Handle error
      toast.error(
        error?.message ||
          "Failed to process your subscription. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {Object.entries(plans).map(([key, plan]) => {
          // console.log(key);
          return (
            <Card
              key={key}
              className={`relative cursor-pointer transition-all ${
                selectedPlan === Number(key)
                  ? "ring-2 ring-blue-500 transform scale-105"
                  : "hover:shadow-lg"
              } ${plan.popular ? "border-blue-500" : ""}`}
              onClick={() => setSelectedPlan(Number(key))}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-green-600">
                    $
                    {billingCycle === "annual"
                      ? Math.round(plan.annualPrice / 12)
                      : Math.round(plan.monthlyPrice * 0.75)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {billingCycle === "annual"
                      ? "per month, billed annually"
                      : "per month"}
                  </div>
                  {billingCycle === "monthly" && (
                    <div className="text-sm text-red-600 font-medium">
                      25% OFF - Limited Time!
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Checkout Section */}
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">{currentPlan.name} Plan</span>
            <Badge variant="outline">{billingCycle}</Badge>
          </div>

          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total:</span>
            <span className="text-green-600">
              $
              {billingCycle === "annual"
                ? currentPlan.annualPrice
                : monthlyPrice}
              {billingCycle === "annual" ? "/year" : "/month"}
            </span>
          </div>

          <Button
            onClick={handleCheckout}
            disabled={isLoading || timeLeft === 0}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
          >
            {isLoading ? "Processing..." : `Get ${currentPlan.name} Plan`}
          </Button>

          <div className="text-center text-sm text-gray-600 space-y-1">
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ Cancel anytime</p>
            <p>✓ Setup in under 5 minutes</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default PricingPlans;
