"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageShellProps {
  children: React.ReactNode;
}

/**
 * Shared layout shell for inner pages (/about, /blog, /blog/[slug]).
 * Applies the same theme toggle logic as the homepage so the site
 * colour mode is consistent across all pages.
 */
export default function PageShell({ children }: PageShellProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved === "dark") setDark(true);
    else if (saved === "light") setDark(false);
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
      {children}
      <Footer />
    </main>
  );
}
