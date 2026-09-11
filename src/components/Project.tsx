"use client";

import { projects } from "@/app/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => Number(a.number ?? 99) - Number(b.number ?? 99));
  const primaryProjects = featuredProjects.filter((project) => ["01", "02", "03"].includes(project.number ?? ""));
  const secondaryProjects = featuredProjects.filter((project) => !["01", "02", "03"].includes(project.number ?? ""));
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects">
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