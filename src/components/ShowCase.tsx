"use client";

import { motion } from "framer-motion";
import Projects from "@/components/Project";

export default function Showcase() {
  return (
    <section id="work" className="border-t border-line bg-dark px-6 py-24 text-paper lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-serif text-5xl tracking-tight sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          03 / Selected Work
        </motion.h2>
        <p className="mt-5 max-w-xl text-muted">A selection of frontend, full-stack, and backend work — from production interfaces to APIs and data-driven applications.</p>
        <div className="mt-14"><Projects /></div>
      </div>
    </section>
  );
}