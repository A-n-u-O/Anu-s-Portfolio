"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { TypeAnimation } from "react-type-animation";
import { socialIcons } from "@/app/data/socials";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !headingRef.current ||
      !imageRef.current ||
      !buttonsRef.current ||
      !subTextRef.current ||
      !iconsRef.current
    )
      return;

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
      translateY: [15, 0],
      delay: 900,
      duration: 700,
      easing: "easeOutExpo",
      delayIncrement: 100,
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 bg-[#0a0a0a] text-white relative">
      {/* Soft background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left section */}
        <div className="space-y-8 text-center md:text-left">
          <h1
            ref={headingRef}
            className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Anuoluwapo
            </span>
          </h1>

          {/* Animated typing roles */}
          <div className="text-xl md:text-2xl font-semibold text-gray-300">
            <TypeAnimation
              sequence={[
                "A Web Developer 🌐",
                2000,
                "Designer & Video Editor 🎨",
                2000,
                "Exploring Machine Learning 🤖",
                2000,
                "Learning Data Analysis 📊",
                2000,
                "Blending Creativity with Code 💡",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400"
            />
          </div>

          <p
            ref={subTextRef}
            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0"
          >
            I&apos;m passionate about building meaningful digital experiences
            that merge functionality, data, and design. With a strong focus on{" "}
            <span className="text-blue-400">Frontend Development</span>, growing
            experience in{" "}
            <span className="text-purple-400">Backend Systems</span>, and{" "}
            <span className="text-pink-400">Machine Learning</span>. Shaping
            ideas into functional, elegant solutions.
          </p>


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
        </div>

        {/* Right Avatar */}
        <div ref={imageRef} className="flex justify-center relative">
          <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-blue-600/40 to-purple-600/40 blur-3xl"></div>
          <div className="relative group">
            <Image
              src="/assets/images/hero-avatar.png"
              alt="Anu Avatar"
              width={420}
              height={420}
              className="relative rounded-full border-2 border-gray-700 shadow-2xl 
                         group-hover:border-blue-500/50 transition-all duration-500
                         hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse group-hover:border-blue-500/60 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
