"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Lebanon Trips", href: "#lebanon" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-[#102436]/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-white/20 bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 md:px-10 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="relative z-10 shrink-0 leading-none"
          aria-label="Maro Travel and Tourism home"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="font-serif text-3xl tracking-[0.16em] text-white">
            MARO
          </span>

          <span className="mt-2 block text-[9px] tracking-[0.35em] text-white/75">
            TRAVEL & TOURISM
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm text-white/85 lg:flex xl:gap-9"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 transition-colors duration-300 hover:text-[#E8C68D]"
            >
              {link.label}

              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#E8C68D] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden items-center gap-3 bg-[#D6B477] px-5 py-3 text-sm font-semibold text-[#172B3A] transition-colors duration-300 hover:bg-white lg:inline-flex"
        >
          Plan Your Trip
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#E8C68D] hover:text-[#E8C68D] lg:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="border-t border-white/10 bg-[#102436] px-5 pb-6 pt-3 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/85 transition-colors hover:text-[#E8C68D]"
              >
                {link.label}
                <ArrowUpRight size={16} className="text-[#E8C68D]" />
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-3 bg-[#D6B477] px-5 py-4 text-sm font-semibold text-[#172B3A] transition-colors hover:bg-white"
            >
              Plan Your Trip
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
