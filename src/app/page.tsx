// page.tsx
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Events from "@/components/EventsSection";
import Showcase from "@/components/ShowCase";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Showcase />
      <Skills />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}