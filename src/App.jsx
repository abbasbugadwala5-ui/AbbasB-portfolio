import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import About from "./sections/About";

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />
    <About />
      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <Contact />

    </div>
  );
}