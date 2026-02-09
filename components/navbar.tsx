"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass py-3" : "py-5 md:py-8"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <span className="font-display text-2xl tracking-widest uppercase md:text-3xl" style={{ color: "var(--gold)" }}>
            Decabaret
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[var(--gold)]"
              style={{ color: "hsl(var(--foreground))" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reserve"
            className="border px-6 py-2.5 font-body text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            Reserve
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block h-px w-7 transition-all duration-300"
            style={{
              background: "var(--gold)",
              transform: menuOpen ? "rotate(45deg) translateY(3.5px)" : "none",
            }}
          />
          <span
            className="block h-px w-7 transition-all duration-300"
            style={{
              background: "var(--gold)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-7 transition-all duration-300"
            style={{
              background: "var(--gold)",
              transform: menuOpen ? "rotate(-45deg) translateY(-3.5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="mobile-menu-enter fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "hsl(0 0% 4% / 0.97)" }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl tracking-widest uppercase transition-colors duration-300 hover:text-[var(--gold)]"
              style={{
                color: "hsl(var(--foreground))",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reserve"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border px-8 py-3 font-body text-sm tracking-[0.25em] uppercase transition-all duration-300"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            Reserve a Table
          </Link>
        </div>
      )}
    </header>
  )
}
