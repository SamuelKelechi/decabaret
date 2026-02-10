"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const features = [
  {
    title: "Live Performances",
    description:
      "From sultry cabaret acts to electrifying live music, every night at Decabaret is a stage set for the extraordinary.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: "Special Cocktails",
    description:
      "Our mixologists conjure elixirs that are as visually stunning as they are intoxicating. Each drink tells a story.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <path d="m19 3-7 8-7-8Z" />
      </svg>
    ),
  },
  {
    title: "VIP Lounge",
    description:
      "Exclusive VIP lounge draped in velvet and bathed in candlelight. An intimate escape within the spectacle.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v8" />
        <path d="m4.93 10.93 1.41 1.41" />
        <path d="M2 18h2" />
        <path d="M20 18h2" />
        <path d="m19.07 10.93-1.41 1.41" />
        <path d="M22 22H2" />
        <path d="m8 6 4-4 4 4" />
        <path d="M16 18a4 4 0 0 0-8 0" />
      </svg>
    ),
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        }
      },
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" aria-label="The Decabaret Experience - Live performances, craft cocktails and VIP lounges" ref={sectionRef} className="relative py-24 md:py-32" style={{ background: "hsl(0 0% 4%)" }}>
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="reveal mb-20 text-center md:mb-28">
          <span
            className="font-body text-sm tracking-[0.4em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Experience The
          </span>
          <h2 className="section-title mt-4 font-display text-balance" style={{ color: "var(--cream)" }}>
            Three Pillars of
            <span className="italic" style={{ color: "var(--gold)" }}>
              {" "}Decabaret
            </span>
          </h2>
          <div className="mx-auto mt-6 gold-line w-20" />
        </div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal group relative overflow-hidden border p-8 transition-all duration-500 hover:border-[var(--gold)] md:p-10"
              style={{
                borderColor: "hsl(var(--border))",
                background: "hsl(0 0% 6%)",
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Icon */}
              <div
                className="mb-6 inline-flex items-center justify-center rounded-none border p-4 transition-colors duration-500 group-hover:border-[var(--gold)]"
                style={{ borderColor: "hsl(var(--border))", color: "var(--gold)" }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="mb-4 font-display text-xl tracking-wide md:text-2xl"
                style={{ color: "var(--cream)" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="font-body text-base leading-relaxed md:text-lg"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full"
                style={{ background: "var(--gold)" }}
              />
            </div>
          ))}
        </div>

        {/* Large feature image */}
        <div className="reveal mt-20 md:mt-28">
          <div className="img-zoom relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/stage.png"
              alt="Cabaret performance on stage at Decabaret"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, hsl(0 0% 4%) 0%, transparent 40%)",
              }}
            />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p
                className="font-body text-xs tracking-[0.3em] uppercase md:text-sm"
                style={{ color: "var(--gold)" }}
              >
                Nightly Performances
              </p>
              <p
                className="mt-2 font-display text-xl md:text-3xl"
                style={{ color: "var(--cream)" }}
              >
                The Stage Awaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
