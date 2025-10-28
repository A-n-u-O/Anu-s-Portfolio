"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<"projects" | "skills">("projects");

  return (
    <motion.section
      id="showcase"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0b0b0b] text-white px-6 md:px-16 py-28"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Work & Skills
        </motion.h2>

        {/* Tabs: Projects / Skills */}
        <div className="flex justify-center gap-6 flex-wrap">
          {["projects", "skills"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "projects" | "skills")}
              className={`px-6 py-2 rounded-full text-sm md:text-base transition-all border ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white border-transparent"
                  : "bg-transparent border-gray-600 text-gray-400 hover:text-white hover:border-blue-500"
              }`}
            >
              {tab === "projects" ? "Projects" : "Skills"}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="mt-12">
          {activeTab === "projects" ? <Projects /> : <Skills />}
        </div>
      </div>
    </motion.section>
  );
}
