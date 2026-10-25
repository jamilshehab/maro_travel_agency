"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/planeOne.jpg",
    alt: "Beautiful mountain landscape at sunrise",
    eyebrow: "Your journey, our passion",
    title: "The world is",
    highlight: "yours to explore.",
    description:
      "Discover extraordinary destinations, experience new cultures, and leave the details to us. Your next adventure starts here.",
  },
  {
    image: "/images/planetwo.jpg",
    alt: "Discover iconic European destinations",
    eyebrow: "Discover somewhere extraordinary",
    title: "New places,",
    highlight: "new perspectives.",
    description:
      "From iconic international cities to unforgettable escapes, let us help you plan your next journey.",
  },
  {
    image: "/images/holiday.jpg",
    alt: "Explore beautiful destinations around the world",
    eyebrow: "Your next chapter starts here",
    title: "Make every",
    highlight: "journey count.",
    description:
      "Explore travel possibilities, discover new experiences, and let us help you take the next step toward your dream destination.",
  },
];

const features = [
  "International travel",
  "Personalized assistance",
  "Local experiences",
];

export default function HeroSlider() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section
      id="home"
      className="hero-slider relative h-[690px] overflow-hidden bg-[#102436] md:h-[790px]"
    >
      {/* Background carousel */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        loop
        speed={1100}
        onSwiper={setSwiper}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.image} className="relative">
            {/* Destination image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C2A]/95 via-[#0A1C2A]/70 to-[#0A1C2A]/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/80 via-transparent to-[#071521]/20" />

            {/* Slide content */}
            <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-6 pb-20 pt-24 md:px-16 md:pb-24">
              <div className="max-w-4xl">
                <p className="mb-7 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#E8C68D] sm:text-xs">
                  <span className="h-px w-10 bg-[#E8C68D]" />
                  {slide.eyebrow}
                </p>

                <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
                  {slide.title}
                  <br />
                  <span className="italic text-[#E8C68D]">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 md:text-lg">
                  {slide.description}
                </p>

                {/* Calls to action */}
                <div className="mt-9 flex flex-wrap items-center gap-4 sm:mt-10">
                  <Link
                    href="#destinations"
                    className="group inline-flex min-h-14 items-center gap-5 bg-[#D6B477] px-6 text-sm font-semibold text-[#142B3A] transition-colors duration-300 hover:bg-white"
                  >
                    Explore destinations
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="#services"
                    className="group inline-flex min-h-14 items-center gap-3 border border-white/35 px-6 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#142B3A]"
                  >
                    Our services
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>

                {/* Travel highlights */}
                <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-xs text-white/75 sm:mt-16 sm:gap-x-8 sm:text-sm">
                  {features.map((feature) => (
                    <span key={feature} className="flex items-center gap-2">
                      <Check size={15} className="shrink-0 text-[#E8C68D]" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 justify-between px-3 sm:px-5 lg:px-8">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => swiper?.slidePrev()}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#102436]/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E8C68D] hover:bg-[#D6B477] hover:text-[#102436] sm:h-14 sm:w-14"
        >
          <ArrowLeft size={20} strokeWidth={1.4} />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => swiper?.slideNext()}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#102436]/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E8C68D] hover:bg-[#D6B477] hover:text-[#102436] sm:h-14 sm:w-14"
        >
          <ArrowRight size={20} strokeWidth={1.4} />
        </button>
      </div>
    </section>
  );
}
