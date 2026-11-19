"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved === "dark") {
      setDark(true);
    } else if (saved === "light") {
      setDark(false);
    }
  }, []);

  const handleToggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("portfolio_theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <main className={dark ? "site dark" : "site"}>
      <Navbar dark={dark} onToggleTheme={handleToggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
