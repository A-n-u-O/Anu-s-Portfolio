"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { socialIcons } from "@/app/data/socials";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const iconsRef = useRef<HTMLDivElement>(null);

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
      console.error("EmailJS Error:", error);
      alert("Error: " + JSON.stringify(error));
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
      className="bg-[#0a0a0a] text-white px-6 md:px-16 py-28"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* ---------- LEFT SIDE (Image + Text) ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full md:w-1/3 relative flex flex-col justify-center items-center text-center md:text-left space-y-6"
        >
          <div className="relative">
            <img
              src="/assets/images/anu3.jpg"
              alt="Contact illustration"
              className="w-full h-fit rounded-2xl shadow-lg object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
              <p className="text-xl md:text-2xl font-medium text-gray-200 px-6">
                Let&apos;s connect — your ideas, questions, or just a hello 🌸
              </p>
            </div>
          </div>

         {/* Social Icons */}
          <div
            ref={iconsRef}
            className="flex gap-4 justify-center md:justify-start pt-4 "
          >
            <p className="text-2xl text-blue-200 self-center animate-wiggle">
              Get in touch 👉
            </p>
            {socialIcons.map((icon, idx) => (
              <a
                key={idx}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full 
                           bg-[#1a1a1a]/80 backdrop-blur-sm border border-gray-700/50
                           hover:border-blue-500/50 hover:bg-blue-600/20
                           transition-all duration-300 hover:scale-110 
                           hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="relative z-10 opacity-80 group-hover:opacity-100 invert transition duration-300"
                />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {icon.alt}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ---------- RIGHT SIDE (Form) ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Let&apos;s Talk ✨
          </motion.h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            Whether it&apos;s feedback, a project idea, or just a quick “hey, I
            love what you built” — my inbox is always open. I&apos;d love to
            hear from you 🪴
          </p>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition px-6 py-3 rounded-lg text-white font-medium self-center md:self-start shadow-lg shadow-blue-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* ---------- Toast feedback ---------- */}
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
          Oops! Something went wrong. Try again
        </motion.div>
      )}
    </motion.section>
  );
}
