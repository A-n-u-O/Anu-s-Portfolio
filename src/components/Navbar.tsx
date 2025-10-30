"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-16 bg-black/90 backdrop-blur border-b border-gray-800">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight"
      >
        Anuoluwapo.
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        <Link href="#about" className="hover:text-teal-400 transition">About</Link>
        <Link href="#projects" className="hover:text-teal-400 transition">Projects</Link>
        <Link href="#contact" className="hover:text-teal-400 transition">Contact</Link>
        <Link href="#events" className="hover:text-teal-400 transition">Events</Link>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur py-6 px-6 flex flex-col gap-4 border-b border-gray-800 text-gray-200">
          <Link
            href="#about"
            className="hover:text-teal-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-teal-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="hover:text-teal-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="hover:text-teal-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
