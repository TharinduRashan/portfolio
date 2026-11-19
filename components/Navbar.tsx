"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ dark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigation } = portfolioData;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          {navigation.wordmark}<span>.</span>
        </a>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          {navigation.links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            aria-label="Toggle colour theme"
            onClick={onToggleTheme}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href={navigation.cta.href}>
            {navigation.cta.label} <ArrowUpRight size={14} />
          </a>
          <button
            className="icon-button menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
