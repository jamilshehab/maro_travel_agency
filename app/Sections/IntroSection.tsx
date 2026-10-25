"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const IntroSection = () => {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-2 md:items-end md:px-10 md:py-28">
      {/* Left side: heading reveal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A67C42]"
        >
          Travel beyond expectations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-5 max-w-xl font-serif text-4xl leading-tight md:text-6xl"
        >
          Every journey has a story.
        </motion.h2>
      </motion.div>

      {/* Right side: description and link */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-lg md:justify-self-end"
      >
        <p className="leading-8 text-[#63717A]">
          Whether you are planning a European getaway, visiting family abroad,
          or discovering the beauty of Lebanon, we help bring your travel plans
          together in one place.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4 }}
        >
          <Link
            href="#services"
            className="group mt-6 inline-flex items-center gap-2 border-b border-[#B58D52] pb-2 text-sm font-semibold transition-colors duration-300 hover:text-[#A67C42]"
          >
            Discover what we offer
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
