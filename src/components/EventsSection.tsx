"use client";

import { events } from "@/app/data/techEvents";
import { fadeInLeft } from "@/utils/motion";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#0a0a0a] text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-14"
        >
          Tech Events & Learning
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="event-card bg-[#111] border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{event.organizer}</p>
              <p className="text-sm text-gray-500 mb-4">{event.date}</p>
              <p className="text-gray-300 mb-4">{event.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {event.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
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
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
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
