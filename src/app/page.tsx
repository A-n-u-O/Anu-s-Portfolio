// page.tsx
import Navbar from "@/components/Navbar";
import About from "@/components/About";
// import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Skills /> */}
      <Contact />
      <Footer/>
    </>
  );
}
