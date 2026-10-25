"use client";
import { motion } from "framer-motion";
import { Compass, Globe2, Wallet } from "lucide-react";
const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-10"
      >
        {[
          {
            icon: Globe2,
            title: "Travel possibilities",
            description:
              "Explore international destinations and local experiences.",
          },
          {
            icon: Wallet,
            title: "Options for your plans",
            description:
              "Discuss available travel arrangements to suit your needs.",
          },
          {
            icon: Compass,
            title: "Personal assistance",
            description:
              "Get help organizing the details of your next journey.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group flex gap-4"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ duration: 0.25 }}
                className="shrink-0"
              >
                <Icon
                  className="text-[#A67C42] transition-colors duration-300 group-hover:text-[#D6B477]"
                  size={26}
                />
              </motion.div>

              <div>
                <h3 className="font-serif text-xl text-[#132B3D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#63717A]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;
