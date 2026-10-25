import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Globe2,
  MapPin,
  Wallet,
} from "lucide-react";

import Header from "./components/common/Header";
import ClientHeroSlider from "./components/common/ClientHeroSlider";
import ClientDestinationSlider from "./components/common/ClientDestinationSlider";
import Services from "./Sections/Services";
import LebanonSection from "./Sections/ExploreLebanonTrIps";
import WhyChooseUsSection from "./Sections/WhyChooseUsSection";
import ContactSection from "./Sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF9F6] text-[#172B3A]">
      {/* Navigation */}
      <Header />

      {/* Hero */}
      <ClientHeroSlider />
      {/* Intro */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-2 md:items-end md:px-10 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A67C42]">
            Travel beyond expectations
          </p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
            Every journey has a story.
          </h2>
        </div>

        <div className="max-w-lg md:justify-self-end">
          <p className="leading-8 text-[#63717A]">
            Whether you are planning a European getaway, visiting family abroad,
            or discovering the beauty of Lebanon, we help bring your travel
            plans together in one place.
          </p>
          <Link
            href="#services"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#B58D52] pb-2 text-sm font-semibold transition hover:text-[#A67C42]"
          >
            Discover what we offer <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Destination carousel */}
      <ClientDestinationSlider />
      {/* Services */}
      <Services />

      {/* Lebanon */}
      <LebanonSection />

      {/* Why choose us */}
      <WhyChooseUsSection />

      {/* Contact CTA */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#102436] px-5 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link
              href="#home"
              className="font-serif text-2xl tracking-[0.16em]"
            >
              MARO
            </Link>
            <p className="mt-2 text-[10px] tracking-[0.3em] text-white/60">
              TRAVEL & TOURISM
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            <Link href="#home" className="hover:text-[#E8C68D]">
              Home
            </Link>
            <Link href="#destinations" className="hover:text-[#E8C68D]">
              Destinations
            </Link>
            <Link href="#services" className="hover:text-[#E8C68D]">
              Services
            </Link>
            <Link href="#lebanon" className="hover:text-[#E8C68D]">
              Lebanon Trips
            </Link>
            <Link href="#contact" className="hover:text-[#E8C68D]">
              Contact
            </Link>
          </nav>

          <p className="text-xs text-white/50">© 2026 Maro Travel & Tourism</p>
        </div>
      </footer>
    </main>
  );
}
