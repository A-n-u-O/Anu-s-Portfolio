"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formRef.current.elements.namedItem("name") instanceof HTMLInputElement
            ? (formRef.current.elements.namedItem("name") as HTMLInputElement).value
            : "",
          email: formRef.current.elements.namedItem("email") instanceof HTMLInputElement
            ? (formRef.current.elements.namedItem("email") as HTMLInputElement).value
            : "",
          message: formRef.current.elements.namedItem("message") instanceof HTMLTextAreaElement
            ? (formRef.current.elements.namedItem("message") as HTMLTextAreaElement).value
            : "",
          subject: "New Portfolio Contact",
          topic: (formRef.current.elements.namedItem("topic") as HTMLSelectElement).value,
        }),
      });
      const result = (await response.json()) as { success?: boolean };

      if (!response.ok || !result.success) throw new Error("Web3Forms submission failed");

      setStatus("success");
      formRef.current?.reset();
      window.setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-line bg-dark px-6 py-24 text-paper lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_1fr]">
        <p className="label text-accent-on-dark">06 / Contact</p>
       
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          <motion.h2 className="font-serif text-5xl tracking-tight text-paper sm:text-7xl">
            Let&apos;s talk.
          </motion.h2>

          <p className="mb-10 mt-6 max-w-lg text-lg leading-8 text-muted">
            Whether it&apos;s a project idea, a technical question, or a quick hello, my inbox is open.
          </p>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col gap-2 text-sm text-paper">Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="border-b border-white/30 bg-transparent px-0 py-3 text-paper placeholder:text-muted focus:border-accent focus:outline-none"
            />
            </label>
            <label className="flex flex-col gap-2 text-sm text-paper">Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="border-b border-white/30 bg-transparent px-0 py-3 text-paper placeholder:text-muted focus:border-accent focus:outline-none"
            />
            </label>
            <label className="flex flex-col gap-2 text-sm text-paper">Topic
            <select
              name="topic"
              className="border-b border-white/30 bg-transparent px-0 py-3 text-paper focus:border-accent focus:outline-none"
            >
              <option value="">What&apos;s this about? (optional)</option>
              <option>Feedback on your portfolio</option>
              <option>Project collaboration</option>
              <option>Scheduling a call</option>
              <option>Just saying hi 👋</option>
            </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-paper">Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me a little about what you have in mind."
              required
              className="resize-none border-b border-white/30 bg-transparent px-0 py-3 text-paper placeholder:text-muted focus:border-accent focus:outline-none"
            />
            </label>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              aria-busy={status === "sending"}
              className="mt-2 self-start bg-accent px-6 py-3 font-medium text-paper transition hover:bg-paper hover:text-dark disabled:cursor-wait disabled:opacity-60"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 bg-accent px-6 py-3 text-paper shadow-lg"
        >
          Message sent successfully! 🌸
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          role="alert"
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 bg-red-800 px-6 py-3 text-white shadow-lg"
        >
          Oops! Something went wrong. Try again
        </motion.div>
      )}
    </motion.section>
  );
}
