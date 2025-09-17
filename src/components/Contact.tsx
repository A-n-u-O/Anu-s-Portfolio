"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message. Try again later.");
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0a0a0a] text-white px-6 md:px-16 py-28"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="to_name" value="Anuoluwapo" />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="bg-[#111] border border-gray-700 text-white px-4 py-3 rounded-lg resize-none focus:outline-none focus:border-blue-500"
          />

          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-medium self-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
