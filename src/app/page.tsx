// page.tsx
"use client";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Events from "@/components/EventsSection";
import Showcase from "@/components/ShowCase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}