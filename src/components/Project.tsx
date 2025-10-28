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

  const categories = [
    "All",
    "Web Development",
    "Machine Learning",
    "Frontend",
    "Backend",
    "Design",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(selectedCategory));

  return (
    <section
      id="projects"
      className="bg-[#0b0b0b] text-white px-3 sm:px-4 md:px-8 py-16 sm:py-20 md:py-28 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full border text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-transparent"
                  : "border-gray-500 text-gray-300 hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {filteredProjects.map((project, idx) => (
            <div key={`project-${idx}`} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-10 text-sm sm:text-base">
            No projects available in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}