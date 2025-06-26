import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";

const Header = () => {
  const links = [
    { href: `/`, label: "Home" },
    { href: `/how-it-works`, label: "How it Works" },
    { href: `/about-us`, label: "About Us" },
    { href: `/pricing`, label: "Pricing" },
    { href: `/results`, label: "Results" },
    { href: `/blogs`, label: "Blogs" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 border-b border-gray-300 backdrop-blur-sm z-50 -mb-20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="hidden p-4 md:flex flex-col gap-3 w-full">
          <div className="hidden md:flex items-center justify-between">
            <Link
              href="/"
              className="font-ibm font-bold text-2xl text-gray-900"
            >
              ReslotAI
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {links.map((el) => (
                <Link
                  key={el.href}
                  href={el.href}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {el.label}
                </Link>
              ))}
              <Link href="/checkout">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </nav>
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

            <MenuButton />
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
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
