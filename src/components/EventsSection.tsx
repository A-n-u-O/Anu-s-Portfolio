"use client";

import { events } from "@/app/data/techEvents";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="border-t border-line bg-paper px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-serif text-5xl tracking-tight text-ink sm:text-7xl"
        >
          05 / Learning & Community
        </motion.h2>
        <p className="mt-5 max-w-xl text-muted">A record of the communities, programs, and events that have shaped my practice.</p>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.5fr_0.6fr]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div><h3 className="font-semibold text-ink">{event.title}</h3><p className="mt-1 text-sm text-accent">{event.organizer}</p></div>
              <div><p className="text-sm leading-6 text-muted">{event.description}</p><div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {event.skills.map((skill, j) => (
                  <span key={j} className="text-xs text-muted before:mr-2 before:text-accent before:content-['/']">
                    {skill}
                  </span>
                ))}
              </div></div>

              <div className="flex flex-col items-start gap-3 text-xs text-muted">
                <p className="font-mono uppercase tracking-wide">{event.date}</p>
                {event.link && <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-fit items-center gap-2 text-sm text-accent hover:text-ink"
                >View source <ExternalLink size={14} aria-hidden="true" /></a>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
