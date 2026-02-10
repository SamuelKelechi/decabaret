"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section aria-label="Welcome to Decabaret Club and Bar" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2070&auto=format&fit=crop"
          alt="Decabaret Club interior with dramatic stage lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(0 0% 4% / 0.5) 0%, hsl(0 0% 4% / 0.3) 40%, hsl(0 0% 4% / 0.7) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 4% / 0.6) 100%)",
          }}
        />
      </div>

      {/* Curtain reveal overlays */}
      <div
        className="curtain-overlay-left absolute inset-y-0 left-0 z-10 w-1/2"
        style={{ background: "hsl(0 0% 4%)" }}
      />
      <div
        className="curtain-overlay-right absolute inset-y-0 right-0 z-10 w-1/2"
        style={{ background: "hsl(0 0% 4%)" }}
      />

      {/* Content */}
      <div
        className="relative z-20 mx-auto max-w-5xl px-6 text-center"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease-out 1.5s" }}
      >
        {/* Subtitle */}
        <p
          className={`font-body text-sm tracking-[0.4em] uppercase md:text-base ${loaded ? "animate-hero-text" : ""}`}
          style={{
            color: "var(--gold)",
            opacity: loaded ? undefined : 0,
            animationDelay: "1.7s",
            animationFillMode: "forwards",
            fontWeight: "bolder"
          }}
        >
          DECABARET CLUB & BAR
        </p>

        {/* Title */}
        <h1
          className={`hero-title mt-6 font-display font-bold md:mt-8 ${loaded ? "animate-hero-text" : ""}`}
          style={{
            color: "var(--cream)",
            opacity: loaded ? undefined : 0,
            animationDelay: "2s",
            animationFillMode: "forwards",
          }}
        >
          <span className="block">An Experience</span>
          <span className="block italic" style={{ color: "var(--gold)" }}>
            Beyond Ordinary
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed md:mt-8 md:text-xl ${loaded ? "animate-hero-text" : ""}`}
          style={{
            color: "white",
            opacity: loaded ? undefined : 0,
            animationDelay: "2.3s",
            animationFillMode: "forwards",
          }}
        >
          Immerse yourself in an intoxicating blend of live performance, craft
          cocktails, and an atmosphere that defies the ordinary.
        </p>

        {/* CTA */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 md:mt-12 ${loaded ? "animate-hero-text" : ""}`}
          style={{
            opacity: loaded ? undefined : 0,
            animationDelay: "2.6s",
            animationFillMode: "forwards",
          }}
        >
          <a
            href="#reserve"
            className="gold-shine-hover w-full px-10 py-4 text-center font-body text-sm tracking-[0.25em] uppercase transition-all duration-300 sm:w-auto"
            style={{
              background: "var(--gold)",
              color: "hsl(0 0% 4%)",
            }}
          >
            Reserve Your Night
          </a>
          <a
            href="#experience"
            className="w-full border px-10 py-4 text-center font-body text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[var(--gold)] hover:text-[hsl(0, 0%, 0%)] sm:w-auto"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            Explore
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-scroll-indicator absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease-out 3s" }}
      >
        <span
          className="font-body text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          Scroll
        </span>
        <div
          className="h-10 w-px"
          style={{
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }}
        />
      </div>
    </section>
  )
}
