"use client";

import { motion } from "framer-motion";
import { experience } from "@/app/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-paper px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_1fr]">
        <p className="label">02 / Experience</p>
        <div className="divide-y divide-line border-y border-line">
          {experience.map((entry, index) => (
            <motion.article key={`${entry.company}-${entry.role}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.05 }} className="grid gap-5 py-8 md:grid-cols-[1fr_0.7fr]">
              <div>
                <h2 className="text-xl font-semibold text-ink">{entry.role}</h2>
                <p className="mt-1 text-accent">{entry.company}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">{entry.dates} / {entry.location}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                  {entry.description.map((item) => <li key={item} className="before:mr-2 before:text-accent before:content-['—']">{item}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}