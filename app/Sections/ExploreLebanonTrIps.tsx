"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const excursions = [
  "Nature and mountain escapes",
  "Historic cities and cultural visits",
  "Day trips and group excursions",
];

export default function LebanonSection() {
  return (
    <section id="lebanon" className="bg-[#132B3D] text-white">
      <div className="grid lg:grid-cols-2">
        {/* Image animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative min-h-[390px] overflow-hidden lg:min-h-[620px]"
        >
          <motion.div
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/3.jpg"
              alt="Mountain scenery for an outdoor escape"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-[#102436]/15" />
        </motion.div>

        {/* Content animation */}
        <div className="flex items-center px-6 py-16 md:px-14 lg:px-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-lg"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8C68D]"
            >
              Closer to home
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-serif text-4xl leading-tight md:text-6xl"
            >
              Discover the beauty of Lebanon.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 leading-8 text-white/70"
            >
              Take a break from the everyday and explore Lebanon through
              organized excursions, beautiful landscapes, historic towns, and
              memorable local experiences.
            </motion.p>

            {/* Staggered excursion list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="mt-8 space-y-4 text-sm text-white/85"
            >
              {excursions.map((item) => (
                <motion.p
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -15 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <MapPin size={17} className="shrink-0 text-[#E8C68D]" />
                  {item}
                </motion.p>
              ))}
            </motion.div>

            {/* CTA animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#D6B477] px-6 py-4 text-sm font-semibold text-[#172B3A] transition-colors duration-300 hover:bg-white"
              >
                Ask about Lebanon trips
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
