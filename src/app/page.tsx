// page.tsx
import Navbar from "@/components/Navbar";
import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </>
  );
}
