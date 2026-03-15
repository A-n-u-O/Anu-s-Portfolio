"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "@/utils/motion";
import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { techStack } from "@/app/data/techStack";
import Image from "next/image";

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
      className="relative bg-secondary text-light px-6 md:px-16 py-28 overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-secondary to-primary opacity-70 pointer-events-none" />

      <div className="relative mt-8 max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.h2
          variants={fadeInLeft}
          className="text-5xl lg:text-7xl font-bold text-center bg-gradient-to-r from-accent to-light bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* LEFT: Description + Buttons */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6 text-muted text-lg lg:text-xl leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-accent font-medium">Frontend Developer</span>{" "}
                passionate about creating structured, accessible, and visually
                engaging web solutions. My core focus is on building functional,
                performant, and user-friendly applications.
              </p>

              <p>
                I also explore{" "}
                <span className="text-light font-medium">machine learning</span>{" "}
                and{" "}
                <span className="text-muted font-medium">data analysis</span>,
                where I learn how data insights can shape smarter, user-driven
                products. Beyond code, I enjoy{" "}
                <span className="text-blue-300 font-medium">designing</span> and{" "}
                <span className="text-blue-300 font-medium">video editing</span>,
                combining logic with creativity to tell stories visually.
              </p>
            </div>

            {/* Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                View My Work
              </a>
              <a
                href="/Anuoluwapo_Victor_cv.pdf"
                download
                className="px-6 py-3 rounded-xl border border-muted text-muted hover:bg-light hover:text-primary transition-all duration-300 hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT: Tech Stack */}
          <div className="flex-1">
            {techStack.map((stack, i) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-light text-center lg:text-left">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  {stack.items.map((item, j) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.05 }}
                      className="bg-accent/60 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-accent/80 transition shadow-md"
                    >
                      <Image src={item.icon} alt={item.name} className="w-6 h-6" />
                      <span className="text-light text-sm">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}