"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "@/utils/motion";

export default function About() {
  return (
    <motion.section
      id="about"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-[#0d0d0d] text-white px-6 md:px-16 py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111] to-black opacity-70 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          variants={fadeInLeft}
          className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
  I build thoughtful digital solutions that balance clarity, structure, and impact. With experience across
  both technical projects and community initiatives, I combine analytical thinking, creativity, and leadership—
  from developing functional web applications to driving programs in financial literacy and community service.
  I&apos;m eager to contribute to dynamic environments where growth, collaboration, and purpose come together.
</p>

<p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
  From dashboards to e-commerce platforms and interactive applications, I focus on building
  pixel-perfect, scalable products designed for real-world usability and performance.
</p>

      </div>
    </motion.section>
  );
}
