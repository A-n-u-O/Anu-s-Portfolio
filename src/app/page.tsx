// page.tsx
"use client";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Events from "@/components/EventsSection";
import Showcase from "@/components/ShowCase";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });


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