"use client";
import React, { useState } from "react";
import { slides } from "./HowItWorksSection";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function DesktopTabs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-center mb-8">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-6 py-3 mx-2 rounded-lg font-semibold transition-all ${
                currentSlide === index
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              aria-label={`View ${slide.title} details`}
            >
              {slide.icon} {slide.title}
            </button>
          ))}
        </div>
      </div>
      <div
        id={slides[currentSlide].sectionId}
        className={`relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center md:text-left">
            <div className="text-6xl mb-6 md:text-left">
              {slides[currentSlide].icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-inter">
              {slides[currentSlide].title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-inter">
              {slides[currentSlide].description}
            </p>

            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-semibold text-green-900 mb-2">
                Key Feature:
              </h4>
              <p className="text-green-800">{slides[currentSlide].highlight}</p>
            </div>
          </div>

          {/* Mockup Side */}
          <div className="order-first md:order-last flex justify-center">
            {slides[currentSlide].mockup}
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="p-2"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="p-2"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </>
  );
}

export default DesktopTabs;
