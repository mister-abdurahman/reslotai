import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust path based on your shadcn setup

const LeaseFAQ = () => {
  const faqItems = [
    {
      question: "Does ReslotAI integrate with my property management software?",
      answer:
        "ReslotAI works alongside any property management platform by using data you add manually (don’t worry it’s quick) — no native integration required.",
    },
    {
      question: "What kind of leasing appointments does ReslotAI recover?",
      answer:
        "ReslotAI helps recover missed or canceled apartment tours, showing appointments, and rental consultations, giving you full insight 24/7. This allows you to focus on other tasks while seeing if anything in your current funnel has room for improvement.",
    },
    {
      question: "Is this a full leasing automation platform?",
      answer:
        "No — ReslotAI is a re-engagement tool, not a CRM or full leasing suite. It’s designed to help you rebook tours and reduce no-show loss without replacing your core systems.",
    },
    {
      question: "Is ReslotAI hard for leasing agents to learn?",
      answer:
        "It’s designed for simplicity. A walkthrough demo video is included in even your free trial — no tech knowledge necessary.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            ReslotAI Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Find quick answers to the most common questions about ReslotAI.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline data-[state=open]:text-purple-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LeaseFAQ;
