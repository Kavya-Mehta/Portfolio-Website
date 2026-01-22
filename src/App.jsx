import { useState, useEffect } from "react";
import { config } from "./config";
import { useActiveSection } from "./hooks/useActiveSection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });
  const activeSection = useActiveSection();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.title = `Portfolio | ${config.name}`;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
