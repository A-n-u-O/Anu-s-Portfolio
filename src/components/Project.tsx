"use client";

import { useEffect, useState } from "react";
import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ["All", "Web Development", "Machine Learning","Frontend","Backend",  "Design"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(selectedCategory));

  return (
    <section
      id="projects"
      className="bg-[#0b0b0b] text-white px-4 md:px-16 py-16 md:py-28"
      style={{
        backgroundColor: "#0b0b0b",
        color: "white",
        minHeight: "50vh",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-12 text-center md:text-left"
          style={{
            background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#60a5fa",
          }}
        >
          Projects
        </h2> */}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
                  : "border-gray-500 text-gray-300 hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <div key={`project-${idx}`} className="w-full" style={{ minWidth: 0 }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No projects available in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}