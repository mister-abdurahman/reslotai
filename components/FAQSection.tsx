import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ReslotAI integrate with existing systems?",
    answer:
      "ReslotAI seamlessly integrates with most popular business platforms including CRM systems, email marketing tools, and POS systems through our API and pre-built connectors.",
  },
  {
    question: "What makes your AI different from other feedback tools?",
    answer:
      "Our AI doesn't just collect feedback - it analyzes sentiment, identifies patterns, and provides actionable insights. It also automates the entire recovery process, from initial survey to follow-up actions.",
  },
  {
    question: "How quickly can we see results?",
    answer:
      "Most businesses see improvements in customer satisfaction within the first 30 days. Our clients typically report a 25-40% increase in customer retention within 90 days of implementation.",
  },
  {
    question: "Is our customer data secure?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your customer data is never shared with third parties.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support, dedicated account managers for enterprise clients, comprehensive onboarding, and ongoing training to ensure your success with our platform.",
  },
  {
    question: "Can I customize the surveys and follow-up messages?",
    answer:
      "Yes! Our platform allows full customization of surveys, follow-up sequences, and branding to match your business needs and maintain consistency with your brand voice.",
  },
];

function FAQSection() {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ReslotAI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 border-gray-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
