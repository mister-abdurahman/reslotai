"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";
import { downloadFile, validateEmail } from "@/lib/helper";

// const PDF_DOWNLOAD_URL =
//   "https://docs.google.com/document/d/1-XBj4eqzcoPTTpFU9MkA_x1QWqLfhMpFN0eDRoHIl38/edit?usp=sharing";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  // const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (email && validateEmail(email)) {
        // const link = document.createElement("a");
        // link.target = "_blank";
        // link.href = PDF_DOWNLOAD_URL;
        // link.download = "growaudience.pdf";
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        downloadFile("/retarget-leads.pdf", "Retarget Leads");
        // toast({
        //   title: "Success!",
        //   description: "Your recovery strategy PDF will be sent to your email.",
        // });
        alert(
          "Your PDF download has started. Please check your downloads folder."
        );
        setEmail("");
      }
    } catch (error: any) {
      // toast({
      //   title: "Error!",
      //   description: error.message || "Something went wrong. Please try again.",
      // });
      alert(
        error.message ||
          "An error occurred while processing your request. Please try again."
      );
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-blue-900 to-purple-500 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div
          className="absolute top-1/2 -left-40 w-60 h-60 bg-white/3 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 pt-28 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-inter font-bold text-white mb-6 animate-fade-in">
            Turn Missed Appointments Into{" "}
            <a href="revenue-calculator"> Revenue </a> With —
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Automated Follow-Ups
            </span>
          </h1>
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up font-inter">
            No-shows don’t have to mean lost income. ReslotAI uses{" "}
            <a href="#survey-insights">
              {" "}
              <span className="font-semibold text-white"> AI-powered </span>
              follow-ups{" "}
            </a>{" "}
            to rebook clients through{" "}
            <a href="#sms-recovery"> personalized SMS </a>,{" "}
            <a href="#email-recovery"> email</a>, and offers that directly
            overcome their <a href="#comparison-section"> objections.</a>
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
              aria-label="Start your free trial"
            >
              <a href="#call-to-action">Recover Revenue From No-Shows</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToCalculator}
              className="border-white bg-white text-blue-800 hover:bg-white hover:text-blue-800 font-semibold px-8 py-4 text-lg transition-all transform hover:scale-105"
              aria-label="Calculate your potential revenue recovery"
            >
              <a href="#revenue-calculator">Estimate My Recovery</a>
            </Button>
          </div>
          {/* Email Capture Banner */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto animate-slide-up">
            <h3 className="text-xl font-semibold text-white mb-2">
              Download a free recovery strategy PDF tailored to your industry
            </h3>
            <form
              onSubmit={handleEmailSubmit}
              className="flex flex-col sm:flex-row gap-3 mt-4"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                required
                aria-label="Email address for PDF download"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 font-semibold px-6"
                aria-label="Download strategy PDF"
              >
                Download Now
              </Button>
            </form>
          </div>
          {/* Trust Logos */}
          <div className="mt-16 animate-slide-up">
            <p className="text-gray-300 text-sm mb-6 font-inter">
              Trusted by leading businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
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
                  className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-white font-medium">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
