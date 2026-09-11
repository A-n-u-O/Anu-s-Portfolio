"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialIcons } from "@/app/data/socials";

export default function Hero() {
  return (
    <section className="bg-paper px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="label mb-7">Software Developer / Lagos, Nigeria</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-9xl">
            Anuoluwapo<br /><span className="text-accent">Victor</span>
          </h1>
          <p className="mt-8 max-w-2xl text-2xl leading-snug text-ink sm:text-3xl">
            Building reliable digital products across interface <span className="font-serif italic">and</span> backend.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            I&apos;m a Software Developer building web products across frontend interfaces, APIs, and backend systems using React, TypeScript, Node.js, and Express.
          </p>
          <p className="mt-9 text-sm tracking-wide text-muted">
            React <span className="px-2 text-accent">·</span> Next.js <span className="px-2 text-accent">·</span> TypeScript <span className="px-2 text-accent">·</span> Node.js <span className="px-2 text-accent">·</span> Express.js <span className="px-2 text-accent">·</span> PostgreSQL
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm">
            <a href="#work" className="bg-accent px-5 py-3 text-paper transition hover:bg-ink">View Selected Work</a>
            <a href="/Anuoluwapo_Victor.pdf" target="_blank" rel="noopener noreferrer" className="border-b border-accent pb-1 text-accent hover:text-ink">Download CV</a>
            {socialIcons.slice(0, 2).map((icon) => <a key={icon.alt} href={icon.link} target="_blank" rel="noopener noreferrer" className="border-b border-line pb-1 text-muted hover:border-accent hover:text-accent">{icon.alt}</a>)}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -bottom-5 -left-5 h-full w-full border border-accent/50" />
          <div className="relative aspect-[4/5] overflow-hidden bg-line">
            <Image
              src="/assets/images/anu2.jpg"
              alt="Portrait of Anuoluwapo Victor"
              fill
              priority
              className="object-cover grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
