"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Plane,
  ShieldCheck,
  Ticket,
  Hotel,
  Compass,
  Globe2,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Tickets",
    description: "Find the right flights for your next journey.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "From boutique stays to luxury escapes.",
  },
  {
    icon: Ticket,
    title: "Visa Assistance",
    description: "Guidance to help prepare your travel documents.",
  },
  {
    icon: Compass,
    title: "Transportation",
    description: "Convenient transfers for a smoother journey.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description: "Explore coverage options before you travel.",
  },
  {
    icon: Globe2,
    title: "Organized Trips",
    description: "Discover destinations through planned experiences.",
  },
];

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Section introduction */}
        <motion.div
          className="max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A67C42]">
            Thoughtfully arranged
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Everything you need, all in one place.
          </h2>

          <p className="mt-5 leading-8 text-[#63717A]">
            From the first booking to the final destination, get assistance with
            the essential parts of your journey.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          className="mt-12 grid gap-px border border-[#E8E4DC] bg-[#E8E4DC] sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.25 },
                      }
                }
                className="group bg-[#FAF9F6] p-7 transition-colors duration-300 hover:bg-white md:p-9"
              >
                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { rotate: -6, scale: 1.12 }
                    }
                    transition={{ duration: 0.25 }}
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.4}
                      className="text-[#A67C42]"
                    />
                  </motion.div>

                  <span className="text-xs tracking-widest text-[#A7A39B]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-9 font-serif text-2xl">{service.title}</h3>

                <p className="mt-3 min-h-12 text-sm leading-7 text-[#63717A]">
                  {service.description}
                </p>

                <Link
                  href="#contact"
                  aria-label={`Ask about ${service.title}`}
                  className="mt-5 inline-flex text-[#A67C42] transition-colors hover:text-[#805C2D]"
                >
                  <motion.span
                    className="inline-flex"
                    whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
