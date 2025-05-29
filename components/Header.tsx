"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-ibm font-bold text-2xl text-gray-900">
          ReslotAI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/features"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            How It Works
          </Link>
          {/* <button
            onClick={() => scrollToPage("/about-us")}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            aria-label="Navigate href Pricing section"
          >
            About Us
          </button> */}
          <Link
            href="/about-us"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/results"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Results
          </Link>
          <Link href="/checkout">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link href={"/features"} onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/about-us"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href={"/pricing"}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                aria-label="Navigate to Pricing section"
              >
                Pricing
              </Link>
              <Link
                href={"/results"}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                aria-label="Navigate to Results section"
              >
                Results
              </Link>
              <Link href="/checkout" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity w-full">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
