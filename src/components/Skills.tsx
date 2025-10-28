"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techStack } from "@/app/data/techStack";
import { fadeInUp, scaleIn } from "@/utils/motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-[#0d0d0d] text-white px-6 md:px-16 py-28"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.h2
          variants={fadeInUp}
          className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills & Tech Stack
        </motion.h2>

        {techStack.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-8">
            <h3 className="text-lg font-semibold text-gray-200 tracking-wide">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.items.map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 20px rgba(59,130,246,0.25)",
                  }}
                  className="bg-[#111111] border border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-2 py-8 shadow-md hover:shadow-blue-500/20 transition"
                >
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                  <span className="text-sm text-gray-300 mt-2">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
