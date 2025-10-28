"use client";

import { useEffect, useState } from "react";
import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#0b0b0b] text-white px-4 md:px-16 py-16 md:py-28"
      style={{
        backgroundColor: "#0b0b0b",
        color: "white",
        minHeight: "50vh",
      }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 text-center md:text-left"
          style={{
            background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#60a5fa", // fallback for browsers that don't support background-clip
          }}>
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <div
              key={`project-${idx}`}
              className="w-full"
              style={{ minWidth: 0 }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
