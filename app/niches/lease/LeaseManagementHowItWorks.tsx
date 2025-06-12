"use client";
import React, { useState } from "react";
import { Mail, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeaseManagementHowItWorks = () => {
  const [activeExample, setActiveExample] = useState<null | number>(null);

  const steps = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Targeted Email Offers",
      description:
        "Send follow-ups with exclusive offersAutomated emails re-engage potential renter’s who missed or canceled tours. Each message is tailored to the renter’s original interest, highlights benefits, and includes incentives tailored to your strategy — like limited-time discounts or early access.",
      example: {
        type: "email",
        subject: "Your Perfect Rental Awaits - Let's Reschedule Your Viewing",
        content:
          "Dear Ms. Rodriguez,\n\nI understand schedules can change, and I noticed you had to cancel your property viewing scheduled for tomorrow.\n\nWe know how important it is to:\n• Find the right home that meets your needs\n• Secure a property in today's competitive market\n• Move in before your current lease expires\n• Avoid temporary housing costs\n\nI have these convenient viewing times available:\n• Thursday at 4:00 PM\n• Saturday morning between 9:00 AM - 12:00 PM\n• Monday after work hours (5:30 PM - 7:00 PM)\n\nTo reschedule, simply reply to this email or call us at (555) 987-6543.\n\nThis property won't last long - 3 other applicants have viewed it this week.\n\nBest regards,\nJames Wilson\nUrban Living Properties\n\nP.S. Early applicants get first consideration and often better lease terms.",
      },
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Instant SMS Outreach",
      description:
        "Send branded texts that instantly address renter objectionsText outreach happens instantly — with objection-overcoming offers that you can edit to suit your strategy, or let ReslotAI’s trained model optimize for conversions using data from past responses.",
      example: {
        type: "sms",
        conversation: [
          {
            sender: "business",
            message:
              "Hi Alex, this is Metro Rentals. I saw you needed to cancel your viewing at 123 Main St today. No problem! Would you like to reschedule?",
          },
          {
            sender: "customer",
            message: "Yes, but I'm not sure about the neighborhood schools.",
          },
          {
            sender: "business",
            message:
              "Great question! The property is zoned for Lincoln Elementary (rated 9/10) and is just 3 blocks from the middle school. I can send you the school district map if you'd like?",
          },
          {
            sender: "customer",
            message:
              "That would be helpful. Also, is the unit still available?",
          },
          {
            sender: "business",
            message:
              "Yes, but we've had strong interest. Would tomorrow at 5 PM work? I can show you the schools then and discuss the lease terms. This unit qualifies for our move-in special too!",
          },
          {
            sender: "customer",
            message:
              "Perfect! Tomorrow at 5 PM works. Please send the school info.",
          },
          {
            sender: "business",
            message:
              "Confirmed for tomorrow at 5 PM! I'll text you the school details shortly and meet you at the property. We'll review the lease options then - including that 1st month free special!",
          },
        ],
      },
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: " AI-Driven Insights",
      description:
        "Short high-engagement surveys that uncover why renters cancelBuilt-in micro-surveys help identify why tours are missed and what brings renters back. Responses trigger tailored follow-ups and feed ReslotAI’s AI engine, delivering ongoing optimization through actionable leasing insights.",
      example: {
        type: "insights",
        data: [
          {
            metric: "Primary cancellation reason",
            value: "Work conflicts (38%)",
          },
          {
            metric: "Optimal contact time",
            value: "Within 1 hour (91% response rate)",
          },
          {
            metric: "High-conversion time slots",
            value: "Weekdays 5-7 PM (72% lease rate)",
          },
          {
            sender: "business",
            message:
              "Would tomorrow at 5 PM work? I can show you the schools then and discuss the lease terms. This unit qualifies for our move-in special too!",
          },
          {
            metric: "Revenue recovered this month",
            value: "$28,500 from 19 rescheduled showings",
          },
          {
            metric: "Average time to lease",
            value: "2.3 days faster when rescheduled",
          },
        ],
      },
    },
  ];

  const closeExample = () => setActiveExample(null);

  return (
    <section className="pb-20 pt-30 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How ReslotAI Fits Into Your Property Management Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Once missed tours are added, ReslotAI uses automated outreach to
            help you recover lost appointments. It integrates effortlessly into
            your current workflow — no CRM replacement, no manual chasing.
          </p>
          <p className="text-xs mt-4 text-gray-600 max-w-3xl mx-auto font-inter">
            Click each step to see real examples of how we help fill vacancies
            faster
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveExample(index)}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-inter">
                {step.description}
              </p>
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                See Example
              </Button>
            </div>
          ))}
        </div>

        {/* Example Modal */}
        {activeExample !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {steps[activeExample].title} Example
                </h3>
                <Button variant="outline" onClick={closeExample}>
                  ✕
                </Button>
              </div>

              {steps[activeExample].example.type === "email" && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="border-b pb-4 mb-4">
                    <strong>Subject:</strong>{" "}
                    {steps[activeExample].example.subject}
                  </div>
                  <div className="whitespace-pre-line text-gray-700">
                    {steps[activeExample].example.content}
                  </div>
                </div>
              )}

              {steps[activeExample].example.type === "sms" && (
                <div className="space-y-4">
                  {steps[activeExample].example.conversation?.map(
                    (msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${
                          msg.sender === "business"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs p-3 rounded-lg ${
                            msg.sender === "business"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {steps[activeExample].example.type === "insights" && (
                <div className="space-y-4">
                  {steps[activeExample].example.data?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium text-gray-700">
                        {item.metric}:
                      </span>
                      <span className="font-bold text-blue-600">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeaseManagementHowItWorks;
