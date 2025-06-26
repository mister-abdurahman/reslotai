"use client";
import { useAppContext } from "@/store/AppContext";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function MobileNav() {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  return (
    <div>
      {isMenuOpen ? (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href={`/how-it-works`}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href={`/about-us`}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href={`/pricing`}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
              aria-label="Navigate to Pricing section"
            >
              Pricing
            </Link>
            <Link
              href={`/results`}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
              aria-label="Navigate to Results section"
            >
              Results
            </Link>
            <Link href={`/blogs`} onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link href="/checkout" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity w-full">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;
