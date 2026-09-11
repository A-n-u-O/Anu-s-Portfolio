"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_1fr]">
        <p className="label">01 / About</p>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">Thoughtful products need both clarity and structure.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
            <p>I&apos;m a Software Developer with a strong frontend foundation and growing backend experience. I enjoy building structured, reliable applications and turning product requirements and complex logic into interfaces and systems that are clear and maintainable.</p>
            <p>My work has included production interfaces, dashboards, payment flows, API integrations, database-backed applications, authentication systems, and third-party integrations. I&apos;m particularly interested in building products where thoughtful user experience and solid engineering meet.</p>
          </div>
          <a href="#contact" className="mt-8 inline-block border-b border-accent pb-1 text-sm text-accent hover:text-ink">Let&apos;s work together</a>
        </motion.div>
      </div>
    </section>
  );
}