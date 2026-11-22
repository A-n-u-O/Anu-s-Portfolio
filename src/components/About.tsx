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
            <p>I&apos;m a Software Developer and Computer Science graduate with a frontend foundation and growing full-stack and backend experience. I build with React, Next.js, TypeScript, Node.js, Express.js, and PostgreSQL.</p>
            <p>My work spans production frontend applications, REST APIs, payment and API integrations, fintech, and business applications. I&apos;m interested in building reliable, useful products where clear user experience and solid engineering meet.</p>
          </div>
          <dl className="mt-10 grid gap-5 border-t border-line pt-5 text-sm sm:grid-cols-2">
            <div><dt className="label">Based in</dt><dd className="mt-2 text-ink">Lagos, Nigeria</dd></div>
            <div><dt className="label">Focus</dt><dd className="mt-2 text-ink">Frontend / Full-Stack</dd></div>
            <div><dt className="label">Domains</dt><dd className="mt-2 text-ink">Fintech / Business Applications</dd></div>
            <div><dt className="label">Status</dt><dd className="mt-2 text-ink">Open to opportunities</dd></div>
          </dl>
          <a href="#contact" className="mt-8 inline-block border-b border-accent pb-1 text-sm text-accent hover:text-ink">Let&apos;s work together</a>
        </motion.div>
      </div>
    </section>
  );
}