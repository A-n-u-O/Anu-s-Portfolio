"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "@/utils/motion";
import { animate } from "animejs";
import { useEffect, useRef } from "react";

export default function About() {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!buttonsRef.current) return;
    [...buttonsRef.current.children].forEach((child, index) => {
      animate(child, {
        opacity: [0, 1],
        translateY: [10, 0],
        easing: "easeOutExpo",
        delay: 600 + index * 150,
        duration: 600,
      });
    });
  }, []);

  
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

      <div className="relative max-w-6xl mx-auto text-left space-y-8">
        <motion.h2
          variants={fadeInLeft}
          className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mx-auto">
          I build thoughtful digital solutions that balance clarity, structure,
          and impact. With experience across both technical projects and
          community initiatives, I combine analytical thinking, creativity, and
          leadership— from developing functional web applications to driving
          programs in financial literacy and community service. I&apos;m eager
          to contribute to dynamic environments where growth, collaboration, and
          purpose come together.
        </p>

        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mx-auto">
          From dashboards to e-commerce platforms and interactive applications,
          I focus on building pixel-perfect, scalable products designed for
          real-world usability and performance.
        </p>
        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View my work
          </a>
          <a
            href="/files/Anuoluwapo Cv.pdf"
            download
            className="px-6 py-3 rounded-xl border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}
