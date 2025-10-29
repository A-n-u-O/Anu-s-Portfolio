"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Project";

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="bg-[#0b0b0b] text-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h2>

        {/* Projects Section */}
        <div className="mt-10">
          <Projects />
        </div>
      </div>
    </section>
  );
}