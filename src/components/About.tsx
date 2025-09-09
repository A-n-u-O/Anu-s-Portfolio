"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { techStack } from "@/app/data/techStack";
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn } from "@/utils/motion";


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
      {/* Subtle gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111] to-black opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* About Text */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-7"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            I&apos;m a frontend developer with a passion for crafting
            clean and performant user interfaces. I enjoy turning complex
            problems into intuitive and delightful user experiences using modern
            web technologies.
          </p>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
            From dashboards to e-commerce and interactive apps, I aim to build
            pixel-perfect and scalable products that focus on real-world
            usability and performance.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {techStack.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-xl font-semibold mb-6 text-gray-200 tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {group.items.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    custom={idx}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                    }}
                    className="w-24 h-24 md:w-28 md:h-28 bg-[#1a1a1a]/80 border border-gray-800 rounded-xl flex flex-col items-center justify-center shadow-lg"
                  >
                    <Image src={tech.icon} alt={tech.name} width={36} height={36} />
                    <span className="text-sm text-gray-300 mt-2 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
