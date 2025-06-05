"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import nicheContents from "@/store/NichesContents";
import Modal from "./Modal";

const Header = ({ path }: { path: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-26 flex items-center justify-between">
        <div className="hidden p-4 md:flex flex-col gap-3 w-full">
          <div className="hidden md:flex items-center justify-between border-b border-gray-200">
            <Link
              href="/"
              className="font-ibm font-bold text-2xl text-gray-900"
            >
              ReslotAI
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href={`/${path || ""}/`}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href={`/${path || ""}/features`}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href={`/${path || ""}/how-it-works`}
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
                href={`/${path || ""}/about-us`}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href={`/${path || ""}/pricing`}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href={`/${path || ""}/results`}
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
          </div>
          <div className="justify-center flex items-center gap-3">
            <p className="text-sm font-semibold  text-center tracking-wider">
              Select Your Industry
            </p>
            <CircleChevronDown
              width={17}
              height={17}
              onClick={() => setOpenModal(true)}
              className="cursor-pointer hover:text-purple-600 transition-colors"
            />
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
              <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-8 md:grid-rows-4 gap-4">
                {nicheContents.map((el, i) => (
                  <Link href={`/${el.path.toLowerCase()}`} key={i}>
                    <button
                      key={i}
                      className="text-purple-600 border-2 cursor-pointer border-purple-600 px-3 py-1 rounded-full"
                    >
                      {el.niche}
                    </button>
                  </Link>
                ))}
              </div>
            </Modal>
          </div>
        </div>
        {/* Logo */}

        {/* Desktop Navigation */}

        {/* Mobile Menu Button */}
        <div className="md:hidden p-4 flex flex-col gap-3 w-full">
          <div className="flex items-center justify-between border-b border-gray-200">
            <Link
              href="/"
              className="font-ibm font-bold text-2xl text-gray-900"
            >
              ReslotAI
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="justify-center flex items-center gap-3">
            <p className="text-sm font-semibold  text-center tracking-wider">
              Select Your Industry
            </p>
            <CircleChevronDown
              width={17}
              height={17}
              onClick={() => setOpenModal(true)}
              className="cursor-pointer hover:text-purple-600 transition-colors"
            />
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
              <div className="grid grid-cols-2 grid-rows-4 gap-4">
                {nicheContents.map((el, i) => (
                  <Link href={`/${el.path.toLowerCase()}`} key={i}>
                    <button
                      key={i}
                      className="text-purple-600 border-2 cursor-pointer border-purple-600 px-3 py-1 rounded-full"
                    >
                      {el.niche}
                    </button>
                  </Link>
                ))}
              </div>
            </Modal>
          </div>
        </div>
        {/* <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href={`/${path || ""}/features`}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href={`/${path || ""}/how-it-works`}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href={`/${path || ""}/about-us`}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href={`/${path || ""}/pricing`}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-left"
                aria-label="Navigate to Pricing section"
              >
                Pricing
              </Link>
              <Link
                href={`/${path || ""}/results`}
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
