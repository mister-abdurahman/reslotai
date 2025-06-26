"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "We were losing 8–10 appointments a month. I didn’t have time to follow up, and most clients never came back. Now ReslotAI handles it automatically—and we’re getting a good chunk of those spots rebooked.",
      author: "Rachel Thompson",
      role: "Salon Owner",
      company: "Luxe Beauty Studio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4r9DVNeilJy2-B2afc1tqiPJ0hZFV_SnI-A&s",
    },
    {
      quote:
        "Some clients stopped coming after bad experiences with old staff. ReslotAI helped us follow up the right way—now we’re getting second chances, and it’s showing in our bookings.",
      author: "Daniel",
      role: "Pet Groomer",
      company: "Paws & Claws Grooming",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      quote:
        "Not every no-show means they’re gone for good. ReslotAI helped me re-engage clients who I thought disappeared—and a few even signed up for new training packages. It’s paid for itself.",
      author: "Devon",
      role: "Fitness Coach",
      company: "Elite Personal Training",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-8 text-white font-inter">
        What Our Customers Say
      </h3>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
        <div className="flex items-center justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
          ))}
        </div>

        <blockquote className="text-xl md:text-2xl text-center mb-8 text-white font-inter italic">
          `&quot;`{testimonials[currentTestimonial].quote}`&quot;`
        </blockquote>

        <div className="flex items-center justify-center">
          <Image
            src={testimonials[currentTestimonial].image}
            width={200}
            height={200}
            alt={`${testimonials[currentTestimonial].author} profile picture`}
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          <div className="text-left">
            <div className="font-semibold text-lg text-white">
              {testimonials[currentTestimonial].author}
            </div>
            <div className="text-gray-200">
              {testimonials[currentTestimonial].role}
            </div>
            <div className="text-blue-300">
              {testimonials[currentTestimonial].company}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          className="p-2 border-white/30 text-white hover:bg-white/10 bg-transparent"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentTestimonial === index ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          className="p-2 border-white/30 text-white hover:bg-white/10 bg-transparent"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
