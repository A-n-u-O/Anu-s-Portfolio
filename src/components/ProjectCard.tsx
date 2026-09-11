"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/app/types/dataTypes";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
  emphasis?: "lead" | "primary" | "secondary";
}

export default function ProjectCard({ project, compact = false, emphasis = "secondary" }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group flex w-full min-w-0 flex-col overflow-hidden border border-white/15 transition-colors hover:border-accent/70 ${emphasis === "lead" ? "lg:col-span-2" : ""}`}
    >
      {/* Project Image */}
      <div className={`relative w-full overflow-hidden bg-white/5 ${compact ? "h-44" : emphasis === "lead" ? "h-80" : emphasis === "primary" ? "h-72" : "h-56"}`}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority={!compact}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-paper">{project.title}</h3>
          <span className="font-mono text-xs text-accent-on-dark">{project.number ?? "—"}</span>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <p className="font-mono text-xs uppercase tracking-wide text-accent-on-dark">
          {project.category.join(" / ")}
        </p>

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs text-paper/70"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-4 flex gap-4 text-sm">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-2 text-accent-on-dark hover:text-paper"
            >
              <ExternalLink size={16} aria-hidden="true" /> Live
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="flex items-center gap-2 text-paper/85 hover:text-paper"
            >
              <FaGithub size={16} aria-hidden="true" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}