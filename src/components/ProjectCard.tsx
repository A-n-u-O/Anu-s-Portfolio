"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/app/types/dataTypes";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group w-full min-w-0 bg-primary rounded-2xl overflow-hidden 
                 shadow-md hover:shadow-accent/20 transition-transform duration-300 
                 ease-out hover:scale-105 flex flex-col"
    >
      {/* Project Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <h3 className="text-2xl font-bold text-light">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-accent text-white rounded-full border border-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 mt-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent hover:bg-muted 
                         text-light px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary hover:bg-primary 
                         text-light px-4 py-2 rounded-lg text-sm transition-colors"
            >
              <FaGithub size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}