import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import WaitlistForm from "./WaitlistForm";
// import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  return (
    <>
      {/* Final CTA Section */}
      <section
        id="call-to-action"
        className="py-10 sm:py-20 bg-gradient-to-br from-blue-900 to-purple-500 text-white relative overflow-hidden"
      >
        {/* <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-500 bg-test text-white relative overflow-hidden"> */}
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main value proposition recap */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
              Ready to Stop Losing Money on Cancellations?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-inter">
              Join 150+ businesses recovering lost revenue automatically with
              ReslotAI
            </p>

            {/* Key benefits recap */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100/20 rounded-full mb-4 mx-auto">
                  <Check className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  35% Recovery Rate
                </h3>
                <p className="text-gray-300">
                  Automatically recover lost appointments
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100/20 rounded-full mb-4 mx-auto">
                  <Check className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2">5-Minute Setup</h3>
                <p className="text-gray-300">
                  Get started in minutes, not hours
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100/20 rounded-full mb-4 mx-auto">
                  <Check className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Zero Manual Work</h3>
                <p className="text-gray-300">Fully automated smart outreach</p>
              </div>
            </div>

            {/* CTA Section */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-inter">
                Start Increasing Profit Today
              </h3>
              <p className="text-gray-200 mb-6">
                No setup fees. No long-term contracts. Cancel anytime.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-blue-800 hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
                  aria-label="Schedule a demo"
                >
                  <a href="/pricing">Get Started</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-blue-800 hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
                  aria-label="Schedule a demo"
                >
                  <a href="/pricing">Schedule Demo</a>
                </Button>
              </div>
            </div> */}
            {/* Original CTA Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-4 font-inter">
                Join the winning team today
              </h3>
              <p className="text-gray-200 mb-6">
                No setup fees. No long-term contracts. Cancel anytime.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
                  aria-label="Start your free trial"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white text-blue-800 hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
                  aria-label="Schedule a demo"
                >
                  Schedule Demo
                </Button>
              </div> */}

              <WaitlistForm />
            </div>

            {/* Trust badges and social proof */}
            <div className="space-y-8">
              {/* Customer rating */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-lg font-semibold ml-2">4.9/5</span>
                </div>
                <p className="text-gray-300">Rated by 150+ happy customers</p>
              </div>

              {/* Trust badges */}
              <div>
                <p className="text-gray-300 text-sm mb-4">
                  Trusted by industry leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
                  {[
                    "TechCorp",
                    "HealthPlus",
                    "BeautyMax",
                    "FitZone",
                    "ServicePro",
                    "WellnessCo",
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

              {/* Final guarantee */}
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-green-200 font-semibold">
                  💡 30-day money-back guarantee. Setup takes 5 minutes. Cancel
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Footer */}
      <footer className="bg-white py-12 border-t border-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">ReslotAI</h3>
              <p className="text-gray-600">
                Automated revenue recovery for appointment-based businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/how-it-works">Features</a>{" "}
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/checkout">Use App</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/about">Contact</a>
                </li>
                <li>
                  <a href="/about">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href={"/privacy-policy"}>Privacy Policy</Link>{" "}
                </li>
                <li>
                  <Link href={"/terms-of-service"}>Terms of Service</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} ReslotAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
