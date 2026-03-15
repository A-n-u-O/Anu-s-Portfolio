"use client";

import { events } from "@/app/data/techEvents";
import { fadeInLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="py-24 bg-secondary text-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="text-5xl lg:text-7xl text-center font-bold bg-gradient-to-r from-accent via-light to-muted bg-clip-text text-transparent mb-14"
        >
          Tech Events & Learning
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="event-card bg-primary border border-primary rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-muted mb-1">{event.organizer}</p>
              <p className="text-sm text-light mb-4">{event.date}</p>
              <p className="text-light mb-4">{event.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {event.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-xs bg-accent px-3 py-1 rounded-full text-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-light"
                >
                  View Event <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
