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
      className="relative bg-[#0d0d0d] text-white px-4 sm:px-6 md:px-12 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {techStack.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-8">
            <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-400 via-pink-400 to-pink-300 bg-clip-text text-transparent tracking-wide text-center sm:text-left">
              {group.category}
            </h3>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
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
                  className="bg-[#111111] border border-gray-800 rounded-2xl flex flex-col items-center justify-center gap-2 py-6 sm:py-8 shadow-md hover:shadow-blue-500/20 transition"
                >
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} />
                  <span className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-2">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
