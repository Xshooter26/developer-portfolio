import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
     <Navbar />
      <Hero />
      <About/>
      <Projects />
      <Contact />
    
    </div>
  );
}
