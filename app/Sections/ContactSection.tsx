"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const ContactSection = () => {
  return (
    <section id="contact" className="px-5 py-20 md:px-10 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-5xl bg-[#EDE8DE] px-6 py-14 text-center md:px-16 md:py-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A67C42]"
        >
          Your next chapter awaits
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl"
        >
          Where will your next journey take you?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="mx-auto mt-5 max-w-xl leading-8 text-[#63717A]"
        >
          Tell us what you have in mind, and let&apos;s start planning your next
          adventure.
        </motion.p>

        <motion.a
          href="#"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.45 }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-3 bg-[#172B3A] px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#A67C42]"
        >
          Start a conversation
          <ArrowUpRight size={17} />
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 text-xs text-[#89939A]"
        >
          Replace this sample WhatsApp number with the agency&apos;s real
          contact number.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
