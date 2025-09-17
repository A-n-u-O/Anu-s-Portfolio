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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group w-full bg-[#111111] rounded-2xl overflow-hidden 
                 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 
                 ease-out hover:scale-[1.02] md:hover:scale-105 flex flex-col
                 border border-gray-800/50"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-1 p-4 md:p-6 space-y-3 md:space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-white line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 md:px-3 py-1 text-xs font-medium bg-[#1a1a1a] 
                           text-gray-300 rounded-full border border-gray-700/50
                           hover:border-blue-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="px-2 md:px-3 py-1 text-xs font-medium text-gray-500">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-2 md:gap-3 pt-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:gap-2 bg-blue-600 hover:bg-blue-700 
                         text-white px-3 md:px-4 py-2 rounded-lg text-sm transition-all
                         hover:shadow-lg hover:shadow-blue-500/25 flex-1 justify-center
                         min-w-0"
            >
              <ExternalLink size={14} className="flex-shrink-0" />
              <span className="truncate">Live</span>
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:gap-2 bg-gray-800 hover:bg-gray-700 
                         text-white px-3 md:px-4 py-2 rounded-lg text-sm transition-all
                         hover:shadow-lg hover:shadow-gray-500/25 flex-1 justify-center
                         min-w-0"
            >
              <FaGithub size={14} className="flex-shrink-0" />
              <span className="truncate">Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}