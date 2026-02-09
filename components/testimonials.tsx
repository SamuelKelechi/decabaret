"use client"

import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote: "Walking into Decabaret feels like stepping through a portal into another era. The performances are mesmerizing, the cocktails are art, and the atmosphere is simply unmatched.",
    author: "Isabelle R.",
    title: "Vogue Night Life",
  },
  {
    quote: "The best-kept secret in the city. Every visit is different, every night is unforgettable. This is what nightlife should feel like.",
    author: "Marcus Chen",
    title: "City Pulse Magazine",
  },
  {
    quote: "From the moment you part the velvet curtains, you know this is somewhere special. Decabaret has redefined what a night out means.",
    author: "Elena Vasquez",
    title: "The Night Standard",
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32" style={{ background: "hsl(0 0% 5%)" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="reveal mb-16 text-center md:mb-20">
          <span className="font-body text-sm tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>
            Voices
          </span>
          <h2 className="section-title mt-4 font-display text-balance" style={{ color: "var(--cream)" }}>
            What They
            <span className="italic" style={{ color: "var(--gold)" }}>{" "}Say</span>
          </h2>
          <div className="mx-auto mt-6 gold-line w-20" />
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="reveal border p-8 md:p-10"
              style={{
                borderColor: "hsl(var(--border))",
                background: "hsl(0 0% 6%)",
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <span
                className="font-display text-5xl leading-none"
                style={{ color: "var(--gold)" }}
                aria-hidden="true"
              >
                {"\u201C"}
              </span>

              {/* Quote text */}
              <p
                className="mt-4 font-body text-base italic leading-relaxed md:text-lg"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div
                className="my-6 h-px w-12"
                style={{ background: "var(--gold)" }}
              />

              {/* Author */}
              <p
                className="font-display text-sm tracking-wide"
                style={{ color: "var(--cream)" }}
              >
                {testimonial.author}
              </p>
              <p
                className="mt-1 font-body text-xs tracking-wider uppercase"
                style={{ color: "var(--gold)" }}
              >
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
