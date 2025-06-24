import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      image: "/placeholder.svg",
      initials: "ER",
    },
    {
      name: "David Thompson",
      role: "Lead AI Engineer",
      image: "/placeholder.svg",
      initials: "DT",
    },
    {
      name: "Lisa Wang",
      role: "VP of Marketing",
      image: "/placeholder.svg",
      initials: "LW",
    },
    {
      name: "James Miller",
      role: "Head of Sales",
      image: "/placeholder.svg",
      initials: "JM",
    },
  ];

  const whitepapers = [
    {
      title: "The Science of Customer Recovery",
      description:
        "A comprehensive study on how automated follow-ups can increase customer retention by 40%",
      downloadUrl: "#",
    },
    {
      title: "AI-Powered Business Intelligence",
      description:
        "How machine learning transforms customer feedback into actionable business insights",
      downloadUrl: "#",
    },
    {
      title: "The ROI of Customer Feedback Systems",
      description:
        "Real data from 500+ businesses showing the financial impact of systematic feedback collection",
      downloadUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Gradient */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-500 text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
              Born from frustration, built with passion
            </p>
            <div className="text-lg md:text-xl leading-relaxed space-y-6 animate-fade-in">
              <p>
                It started with a simple question: `&quot;`Why do businesses
                lose customers they could easily save?`&quot;` After seeing
                countless restaurants, salons, and retail stores struggle with
                silent dissatisfaction, our founders knew there had to be a
                <a href="#comparison-section"> better way. </a>
              </p>
              <p>
                Traditional feedback systems were broken. Customers would leave
                unhappy, never to return, while businesses remained completely
                unaware of what went wrong. We set out to bridge this gap with
                intelligent automation that not only captures feedback but acts
                on it instantly.
              </p>
              <p>
                Today, ReslotAI helps thousands of businesses turn potential
                losses into loyal customers, one intelligent interaction at a
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate minds behind ReslotAI, dedicated to transforming
              how businesses connect with their customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-gray-300"
              >
                <CardContent className="pt-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the data and research that powers our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whitepapers.map((paper, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-gray-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 mb-4">
                    {paper.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{paper.description}</p>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <a href="#pricing"> Ready to Transform Your Business? </a>
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using ReslotAI to recover lost
            customers and gain valuable insights
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
