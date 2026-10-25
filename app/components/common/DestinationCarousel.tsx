"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const destinations = [
  {
    name: "Paris",
    country: "France",
    region: "EUROPE",
    description:
      "Timeless elegance, iconic landmarks and unforgettable moments.",
    image: "/images/2.jpg",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    region: "ASIA & EUROPE",
    description: "Discover a fascinating blend of cultures and traditions.",
    image: "/images/istanbul.jpg",
  },
  {
    name: "Rome",
    country: "Italy",
    region: "EUROPE",
    description: "Historic streets, remarkable architecture and Italian charm.",
    image: "/images/rome.jpg",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    region: "MIDDLE EAST",
    description: "A destination of modern luxury, shopping and adventure.",
    image: "/images/dubai.jpg",
  },
  {
    name: "Baghdad",
    country: "Iraq",
    region: "MIDDLE EAST",
    description: "Explore a city shaped by centuries of history and culture.",
    image: "/images/baghdad.jpg",
  },
];

export default function DestinationsCarousel() {
  return (
    <section id="destinations" className="overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A67C42]">
              <span className="h-px w-8 bg-[#A67C42]" />
              Explore the world
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-[#172B3A] sm:text-5xl md:text-6xl">
              Your next destination awaits.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#687780] md:text-base">
              From iconic international cities to beautiful experiences closer
              to home, discover where your next journey could take you.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#C7A568] pb-2 text-sm font-medium text-[#172B3A] transition hover:text-[#A67C42]"
          >
            Plan your journey
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Centered carousel container */}
        <div className="mx-auto mt-12 w-full max-w-6xl md:mt-16">
          <div className="destination-carousel relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: ".destinations-prev",
                nextEl: ".destinations-next",
              }}
              pagination={{
                el: ".destinations-pagination",
                clickable: true,
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop
              speed={750}
              spaceBetween={20}
              slidesPerView={1.1}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                },
              }}
              className="!overflow-hidden !pb-2"
            >
              {destinations.map((destination) => (
                <SwiperSlide key={destination.name}>
                  <article className="group relative h-[390px] overflow-hidden rounded-xl bg-[#172B3A] sm:h-[440px] md:h-[480px]">
                    {/* Destination image */}
                    <Image
                      src={destination.image}
                      alt={`${destination.name}, ${destination.country}`}
                      fill
                      sizes="(max-width: 480px) 90vw, (max-width: 1024px) 48vw, 380px"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2A] via-[#0B1C2A]/20 to-black/10" />

                    <div className="absolute inset-0 bg-[#102436]/10 transition-colors duration-500 group-hover:bg-transparent" />

                    {/* Destination information */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                      <span className="inline-block border border-white/40 bg-black/10 px-3 py-2 text-[9px] font-medium tracking-[0.22em] backdrop-blur-sm">
                        {destination.region}
                      </span>

                      <p className="mt-5 flex items-center gap-2 text-xs text-white/75">
                        <MapPin size={14} className="text-[#E8C68D]" />
                        {destination.country}
                      </p>

                      <h3 className="mt-2 font-serif text-4xl sm:text-5xl">
                        {destination.name}
                      </h3>

                      <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                        {destination.description}
                      </p>

                      <Link
                        href="#contact"
                        className="mt-6 flex w-fit items-center gap-3 border-b border-[#E8C68D] pb-2 text-sm text-white transition-colors hover:text-[#E8C68D]"
                      >
                        Discover destination
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Premium navigation and pagination */}
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Previous destinations"
                className="destinations-prev flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C7A568]/70 text-[#172B3A] transition duration-300 hover:bg-[#172B3A] hover:text-white"
              >
                <ArrowLeft size={19} strokeWidth={1.5} />
              </button>

              <div
                className="destinations-pagination flex min-h-5 items-center justify-center gap-2"
                aria-label="Choose destination slide"
              />

              <button
                type="button"
                aria-label="Next destinations"
                className="destinations-next flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C7A568]/70 text-[#172B3A] transition duration-300 hover:bg-[#172B3A] hover:text-white"
              >
                <ArrowRight size={19} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
