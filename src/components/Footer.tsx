"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialIcons } from "@/app/data/socials";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-t border-line bg-paper px-6 py-8 text-ink md:px-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm md:flex-row">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Anuoluwapo Victor. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5 text-lg text-muted">
          <a
            href="https://github.com/A-n-u-O"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="transition hover:text-accent"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/a-n-u-o/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="transition hover:text-accent"
          >
            <FaLinkedin />
          </a>
          <a href={socialIcons[2].link} aria-label="Email Anuoluwapo Victor" className="text-sm transition hover:text-accent">Email</a>
        </div>
      </div>
    </motion.footer>
  );
}
