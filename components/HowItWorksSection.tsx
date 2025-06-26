import React from "react";
import { Button } from "@/components/ui/button";
import DesktopTabs from "./DesktopTabs";

export const slides = [
  {
    icon: "✉️",
    title: "Automated Email Recovery",
    sectionId: "email-recovery",
    description:
      "Behavior-based email follow-ups that turn silence into rebookings.",
    highlight:
      "ReslotAI sends smart, timed emails after every missed appointment—improving based on past replies. Add custom offers tied to price objections to win back hesitant clients",
    mockup: (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="border-b pb-3 mb-4">
          <div className="text-sm text-gray-500">
            From: ReslotAI &lt;hello@reslotai.com&gt;
          </div>
          <div className="text-sm text-gray-500">To: jessica@email.com</div>
          <div className="font-semibold text-gray-800">
            We miss you! Come back with 15% off
          </div>
        </div>
        <div className="space-y-3 text-sm text-gray-700">
          <p>Hi Jessica,</p>
          <p>
            We noticed you had to cancel your massage appointment yesterday.
            Life happens - we totally get it!
          </p>
          <p>
            Here`&apos;`s{" "}
            <span className="font-semibold text-blue-600">15% off</span> your
            next booking to help you get back to feeling your best.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center my-4">
            <Button className="bg-blue-600 text-white px-6 py-2 text-sm">
              Book Now - 15% Off
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            This offer expires in 7 days. We can`&apos;`t wait to see you!
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: "💬",
    title: "Smart SMS Recovery",
    sectionId: "sms-recovery",
    description: "Conversational SMS that rebooks clients in seconds.",
    highlight:
      "When a client misses an appointment, ReslotAI sends a tailored text. If they respond, it reschedules them instantly. Every message is tied to objections like “price” or “timing” to maximize success.",
    mockup: (
      <div className="bg-gray-100 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
        <div className="bg-white rounded-t-lg p-3 border-b">
          <div className="text-xs text-gray-500 text-center">Messages</div>
          <div className="text-sm font-semibold text-center">
            Bella`&apos;`s Spa
          </div>
        </div>
        <div className="bg-white rounded-b-lg p-3 space-y-3 h-64 overflow-y-auto">
          <div className="flex">
            <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
              Hi Jessica! We saw you missed your appointment today. We have a
              spot tomorrow at 3PM. Want it? Reply YES to confirm! 😊
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs text-sm">
              Yes please!
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
              Perfect! ✅ You`&apos;`re all set for tomorrow at 3PM. See you
              then!
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "📋",
    sectionId: "survey-insights",
    title: "AI-Driven Surveys + Insights",
    description: "Understand why clients cancel—and fix it fast.",
    highlight:
      "Clients respond to quick, anonymous surveys that reveal the real reason they didn’t show. Use this data to personalize future messages and reduce no-shows over time.",
    mockup: (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="text-center mb-4">
          <h4 className="font-semibold text-gray-800">Quick Feedback</h4>
          <p className="text-sm text-gray-600">
            Help us improve (takes 10 seconds)
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Why did you cancel your appointment?
            </label>
            <div className="space-y-2">
              {["Price", "Time", "Location", "Other"].map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="radio"
                    name="reason"
                    className="mr-2 text-blue-600"
                    defaultChecked={option === "Time"}
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional feedback (optional)
            </label>
            <textarea
              className="w-full border border-gray-300 rounded p-2 text-sm"
              rows={3}
              placeholder="Tell us more..."
            ></textarea>
          </div>
          <Button className="w-full bg-blue-600 text-white">
            Submit Feedback
          </Button>
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">
          This helps us understand your needs and serve you better next time.
        </p>
      </div>
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section id="features" className="pb-8 sm:pb-20 pt-8 sm:pt-30 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Your Client Retention Engine — Designed to Bring Customers Back
          </p>
        </div>

        {/* Desktop Tabs */}
        <DesktopTabs />
      </div>
    </section>
  );
};

export default HowItWorksSection;
