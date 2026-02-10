"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function Reserve() {
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
    <section id="reserve" aria-label="Reserve a table at Decabaret Club and Bar" ref={sectionRef} className="relative py-24 md:py-32" style={{ background: "hsl(0 0% 4%)" }}>
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Image */}
          <div className="reveal img-zoom relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop"
              alt="VIP lounge at Decabaret with luxurious seating"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, hsl(0 0% 4% / 0.4), transparent 60%)",
              }}
            />
          </div>

          {/* Form */}
          <div className="reveal">
            <span className="font-body text-sm tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>
              Reservations
            </span>
            <h2 className="section-title mt-4 font-display" style={{ color: "var(--cream)" }}>
              Secure Your
              <span className="italic" style={{ color: "var(--gold)" }}>{" "}Evening</span>
            </h2>
            <p className="mt-4 max-w-md font-body text-base leading-relaxed md:text-lg" style={{ color: "hsl(var(--muted-foreground))" }}>
              Tables fill quickly on performance nights. Reserve ahead to guarantee your place in the spectacle.
            </p>

            <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-body text-xs tracking-[0.2em] uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full border-b bg-transparent py-3 font-body text-base outline-none transition-colors focus:border-[var(--gold)]"
                    style={{
                      borderColor: "hsl(var(--border))",
                      color: "var(--cream)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-body text-xs tracking-[0.2em] uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full border-b bg-transparent py-3 font-body text-base outline-none transition-colors focus:border-[var(--gold)]"
                    style={{
                      borderColor: "hsl(var(--border))",
                      color: "var(--cream)",
                    }}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block font-body text-xs tracking-[0.2em] uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full border-b bg-transparent py-3 font-body text-base outline-none transition-colors focus:border-[var(--gold)]"
                    style={{
                      borderColor: "hsl(var(--border))",
                      color: "var(--cream)",
                      colorScheme: "dark",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="mb-2 block font-body text-xs tracking-[0.2em] uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full border-b bg-transparent py-3 font-body text-base outline-none transition-colors focus:border-[var(--gold)]"
                    style={{
                      borderColor: "hsl(var(--border))",
                      color: "var(--cream)",
                    }}
                  >
                    <option value="" style={{ background: "hsl(0 0% 4%)" }}>Select</option>
                    <option value="1-2" style={{ background: "hsl(0 0% 4%)" }}>1-2 Guests</option>
                    <option value="3-4" style={{ background: "hsl(0 0% 4%)" }}>3-4 Guests</option>
                    <option value="5-8" style={{ background: "hsl(0 0% 4%)" }}>5-8 Guests</option>
                    <option value="8+" style={{ background: "hsl(0 0% 4%)" }}>8+ Guests (VIP)</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-body text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  Special Requests
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Birthday, anniversary, preferred seating..."
                  className="w-full resize-none border-b bg-transparent py-3 font-body text-base outline-none transition-colors focus:border-[var(--gold)]"
                  style={{
                    borderColor: "hsl(var(--border))",
                    color: "var(--cream)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="gold-shine-hover mt-4 w-full py-4 font-body text-sm tracking-[0.25em] uppercase transition-all duration-300 sm:w-auto sm:px-12"
                style={{
                  background: "var(--gold)",
                  color: "hsl(0 0% 4%)",
                }}
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>
        <br/>
      <div style={{width: "100%", background: "linear-gradient(90deg, transparent, var(--gold), transparent)"}}><iframe width="100%" height="600" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Decabaret%20Palace%20Road,%20Okota,%20Oshodi-Isolo%20Local%20Government+(Decabaret%20Club%20and%20Bar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">Decabaret Club and Bar</a></iframe></div>
    </div>
    </section>
  )
}
