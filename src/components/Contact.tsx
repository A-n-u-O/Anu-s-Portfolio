"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0a0a0a] text-white px-6 md:px-16 py-28 relative"
    >
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Talk ✨
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Whether it’s feedback, a project idea, or just a quick “hey, I love what you built” —  
          my inbox is always open. I’d love to hear from you 🪴
        </p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 max-w-lg mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="to_name" value="Anuoluwapo" />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name (or what should I call you?)"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500"
          />

          <select
            name="topic"
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500"
          >
            <option value="">What&apos;s this about? (optional)</option>
            <option>Feedback on your portfolio</option>
            <option>Project collaboration</option>
            <option>Scheduling a call</option>
            <option>Just saying hi 👋</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Your message goes here... be as casual or detailed as you want."
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg resize-none focus:outline-none focus:border-purple-500"
          />

          <motion.button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition px-6 py-3 rounded-lg text-white font-medium self-center shadow-lg shadow-blue-900/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Toast feedback */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Message sent successfully! 🌸
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Oops! Something went wrong. Try again 💭
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}