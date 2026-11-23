"use client";

import { events } from "@/app/data/techEvents";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const uniqueEvents = events.filter((event, index, allEvents) => {
  const keys = [event.title, ...(event.aliases ?? [])].map((value) =>
    value.toLowerCase().replace(/[^a-z0-9]/g, ""),
  );

  return !allEvents.slice(0, index).some((previous) => {
    if (previous.id === event.id) return true;

    const previousKeys = [previous.title, ...(previous.aliases ?? [])].map((value) =>
      value.toLowerCase().replace(/[^a-z0-9]/g, ""),
    );

    return keys.some((key) => previousKeys.includes(key));
  });
});

const sortedEvents = [...uniqueEvents].sort((a, b) => {
  const aSortDate = a.status === "In progress" ? a.startDate : a.endDate ?? a.startDate;
  const bSortDate = b.status === "In progress" ? b.startDate : b.endDate ?? b.startDate;
  const [aYear, aMonth, aDay] = aSortDate.split("-");
  const [bYear, bMonth, bDay] = bSortDate.split("-");
  const monthOrder = `${bYear}-${bMonth}`.localeCompare(`${aYear}-${aMonth}`);

  if (monthOrder !== 0) return monthOrder;
  if (aDay && !bDay) return -1;
  if (!aDay && bDay) return 1;
  if (!aDay || !bDay) return 0;
  return Number(bDay) - Number(aDay);
});

function formatEventDate(startDate: string, endDate?: string) {
  const format = (date: string) => {
    const [year, month, day] = date.split("-").map(Number);
    const monthName = new Date(Date.UTC(year, month - 1)).toLocaleString("en", {
      month: "long",
      timeZone: "UTC",
    });

    return day ? `${monthName} ${day}, ${year}` : `${monthName} ${year}`;
  };

  return endDate ? `${format(startDate)} – ${format(endDate)}` : format(startDate);
}

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
          {sortedEvents.map((event, i) => (
            <motion.div
              key={event.id}
              className="grid gap-5 py-7 md:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.5fr)_minmax(10rem,0.6fr)] md:gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.06, 0.3), duration: 0.45 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="font-semibold leading-snug text-ink">{event.title}</h3>
                <p className="mt-1 text-sm text-muted">{event.organizer}</p>
              </div>
              <div>
                <p className="text-sm leading-6 text-muted">{event.description}</p>
                <p className="mt-3 text-xs text-accent">{event.category}</p>
              </div>
              <div className="flex flex-col items-start gap-2 text-xs text-muted md:items-end md:text-right">
                <p className="font-mono tabular-nums">{formatEventDate(event.startDate, event.endDate)}</p>
                <span className="border-l border-accent pl-2 text-ink md:border-l-0 md:border-r md:pr-2">
                  {event.status}
                </span>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:text-ink"
                  >
                    {event.linkLabel ?? "View post"}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
