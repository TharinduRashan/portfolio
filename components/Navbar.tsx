"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
}

/**
 * Resolves a nav link href so that hash-only links (#work, #skills…)
 * route back to the homepage when the visitor is on an inner page.
 */
function resolveHref(href: string, pathname: string): string {
  if (href.startsWith("#")) {
    // On homepage, keep as-is; on any other page, prepend "/"
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

export default function Navbar({ dark, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigation } = portfolioData;
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link className="wordmark" href="/" onClick={closeMenu}>
          {navigation.wordmark}<span>.</span>
        </Link>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          {navigation.links.map((link) => {
            const resolved = resolveHref(link.href, pathname);
            const isActive =
              link.href.startsWith("/") && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={resolved}
                onClick={closeMenu}
                className={isActive ? "nav-link-active" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            aria-label="Toggle colour theme"
            onClick={onToggleTheme}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link className="nav-cta" href={resolveHref(navigation.cta.href, pathname)}>
            {navigation.cta.label} <ArrowUpRight size={14} />
          </Link>
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
