"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      <Link
        href="/"
        className="font-serif text-xl tracking-tight text-ink"
      >
        Anuoluwapo Victor
      </Link>

      <div className="hidden items-center gap-7 text-sm text-muted md:flex">
        <Link href="#about" className="transition-colors hover:text-accent">About</Link>
        <Link href="#experience" className="transition-colors hover:text-accent">Experience</Link>
        <Link href="#work" className="transition-colors hover:text-accent">Work</Link>
        <Link href="#toolkit" className="transition-colors hover:text-accent">Toolkit</Link>
        <Link href="#contact" className="transition-colors hover:text-accent">Contact</Link>
      </div>

      <button
        className="rounded border border-line px-3 py-2 text-xs text-ink transition hover:border-accent hover:text-accent md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <><FiX size={16} /> <span className="sr-only">Close menu</span></> : <><FiMenu size={16} /> <span className="sr-only">Open menu</span></>}
      </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line/70 bg-paper px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-muted">
            {[['#about', 'About'], ['#experience', 'Experience'], ['#work', 'Work'], ['#toolkit', 'Toolkit'], ['#contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-accent" onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
