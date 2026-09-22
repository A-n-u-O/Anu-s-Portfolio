"use client";

import { useState } from "react";
import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

type ProjectFilter = "All" | "Frontend" | "Full-Stack" | "Backend";

const filters: ProjectFilter[] = ["All", "Frontend", "Full-Stack", "Backend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const selectedProjects = projects.filter(
    (project) =>
      (project.priority === "featured" || project.priority === "secondary") &&
      (activeFilter === "All" || project.category.includes(activeFilter)),
  );
  const primaryProjects = selectedProjects
    .filter((project) => project.priority === "featured")
    .sort((a, b) => Number(a.number ?? 99) - Number(b.number ?? 99));
  const secondaryProjects = selectedProjects
    .filter((project) => project.priority === "secondary")
    .sort((a, b) => Number(a.number ?? 99) - Number(b.number ?? 99));
  const otherProjects = projects.filter((project) => project.priority === "archive");

  return (
    <section id="projects">
      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-y border-white/15 py-4" aria-label="Project categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`border-b pb-1 text-sm transition-colors ${activeFilter === filter ? "border-accent-on-dark text-accent-on-dark" : "border-transparent text-muted hover:border-accent-on-dark hover:text-accent-on-dark"}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-7 lg:grid-cols-2">
        {primaryProjects.map((project, index) => <ProjectCard key={project.title} project={project} emphasis={index === 0 ? "lead" : "primary"} />)}
      </div>
      <div className="mt-7 grid gap-7 lg:grid-cols-3">
        {secondaryProjects.map((project) => <ProjectCard key={project.title} project={project} emphasis="secondary" />)}
      </div>
      <details className="mt-12 border-t border-white/20 pt-5">
        <summary className="cursor-pointer text-sm text-paper transition hover:text-accent-on-dark">More Projects ({otherProjects.length})</summary>
        <div className="mt-7 grid gap-7 sm:grid-cols-2">
          {otherProjects.map((project) => <ProjectCard key={project.title} project={project} compact />)}
        </div>
      </details>
    </section>
  );
}