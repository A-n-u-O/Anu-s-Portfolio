"use client";

import { useEffect, useState } from "react";
import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show a simple version while mounting
    return (
      <section
        id="projects"
        className="relative bg-[#0b0b0b] text-white px-6 md:px-16 py-28"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="min-w-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1, margin: "-100px" }} // Reduced amount and added margin
      className="relative bg-[#0b0b0b] text-white px-6 md:px-16 py-28"
    >
      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/50 to-black/50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }} // Reduced animation intensity
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5, // Faster animation
                delay: 0.2 + idx * 0.05, // Reduced stagger
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2, margin: "-50px" }}
              className="min-w-0"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}