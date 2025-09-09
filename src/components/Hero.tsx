"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { socialIcons } from "@/app/data/socials";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current || !imageRef.current || !buttonsRef.current || !subTextRef.current || !iconsRef.current) return;

    animate(headingRef.current, {
      translateY: [-40, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1000,
    });

    animate(subTextRef.current, {
      opacity: [0, 1],
      translateY: [-20, 0],
      easing: "easeOutExpo",
      delay: 300,
      duration: 800,
    });

    animate(imageRef.current, {
      scale: [0.9, 1],
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: 400,
      duration: 1000,
    });

    [...buttonsRef.current.children].forEach((child, index) => {
      animate(child, {
        opacity: [0, 1],
        translateY: [10, 0],
        easing: "easeOutExpo",
        delay: 600 + index * 150,
        duration: 600,
      });
    });

    animate([...iconsRef.current.children], {
      opacity: [0, 1],
      translateY: [10, 0],
      delay: 900,
      duration: 800,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8 text-center md:text-left">
          <h1
            ref={headingRef}
            className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            <span className="text-white">Anuoluwapo</span>{" "}
            <span className="text-blue-500">Victor</span>
          </h1>

          <p
            ref={subTextRef}
            className="text-lg md:text-2xl text-gray-400 max-w-xl mx-auto md:mx-0"
          >
            Frontend Developer passionate about building clean, performant, and interactive user interfaces.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            >
              View Projects
            </a>
            <a
              href="/files/Anu_Resume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          <div
            ref={iconsRef}
            className="flex gap-5 justify-center md:justify-start"
          >
            {socialIcons.map((icon, idx) => (
              <a
                key={idx}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Avatar Section */}
        <div ref={imageRef} className="flex justify-center relative">
          <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-blue-600/40 to-purple-600/40 blur-3xl"></div>
          <Image
            src="/assets/images/hero-avatar.png"
            alt="Anu Avatar"
            width={420}
            height={420}
            className="relative rounded-full border border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
