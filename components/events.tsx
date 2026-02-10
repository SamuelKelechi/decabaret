"use client"

import { useEffect, useRef } from "react"

const events = [
  {
    date: "FEB 14",
    day: "Saturday",
    title: "Season of Doings",
    description: "Live performance by Jakarta, special Champagne, Dorime and other special performances.",
    time: "7 PM - Till Dawn",
    tag: "Special Event",
  },
  // {
  //   date: "FEB 21",
  //   day: "Saturday",
  //   title: "Midnight Masquerade",
  //   description: "Don your finest mask and step into a world of mystery. Burlesque, live DJs, and the city's most daring night out.",
  //   time: "10 PM - 4 AM",
  //   tag: "Signature Night",
  // },
  // {
  //   date: "FEB 28",
  //   day: "Saturday",
  //   title: "Golden Hour",
  //   description: "Our monthly showcase of emerging performance artists. Raw talent, bold cocktails, and an audience that appreciates the art.",
  //   time: "8 PM - 1 AM",
  //   tag: "Monthly Showcase",
  // },
  // {
  //   date: "MAR 07",
  //   day: "Saturday",
  //   title: "The Underground",
  //   description: "A late-night journey into electronic soundscapes with guest DJs from across the globe. The dance floor beckons.",
  //   time: "11 PM - 5 AM",
  //   tag: "DJ Night",
  // },
]

export function Events() {
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
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="events" aria-label="Upcoming events and themed nights at Decabaret" ref={sectionRef} className="relative py-24 md:py-32" style={{ background: "hsl(0 0% 4%)" }}>
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="reveal mb-16 text-center md:mb-24">
          <span className="font-body text-sm tracking-[0.4em] uppercase" style={{ color: "var(--gold)" }}>
            Upcoming
          </span>
          <h2 className="section-title mt-4 font-display text-balance" style={{ color: "var(--cream)" }}>
            Nights to
            <span className="italic" style={{ color: "var(--gold)" }}>{" "}Remember</span>
          </h2>
          <div className="mx-auto mt-6 gold-line w-20" />
        </div>

        {/* Events list */}
        <div className="space-y-0">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="reveal group cursor-pointer border-b transition-all duration-500"
              style={{
                borderColor: "hsl(var(--border))",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-8 md:py-10">
                {/* Date */}
                <div className="shrink-0 md:w-28">
                  <span
                    className="font-display text-3xl font-bold md:text-4xl"
                    style={{ color: "var(--gold)" }}
                  >
                    {event.date}
                  </span>
                  <p
                    className="mt-1 font-body text-sm tracking-wide"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {event.day}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="hidden h-16 w-px md:block"
                  style={{ background: "hsl(var(--border))" }}
                />

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      className="font-display text-xl tracking-wide transition-colors duration-300 group-hover:text-[var(--gold)] md:text-2xl"
                      style={{ color: "var(--cream)" }}
                    >
                      {event.title}
                    </h3>
                    <span
                      className="border px-3 py-1 font-body text-[10px] tracking-[0.2em] uppercase"
                      style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
                    >
                      {event.tag}
                    </span>
                  </div>
                  <p
                    className="mt-2 max-w-xl font-body text-base leading-relaxed md:text-lg"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {event.description}
                  </p>
                </div>

                {/* Time & CTA */}
                <div className="flex items-center gap-6 md:flex-col md:items-end md:gap-3">
                  <span
                    className="font-body text-sm tracking-wider"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {event.time}
                  </span>
                  <span
                    className="hidden font-body text-xs tracking-[0.2em] uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inline"
                    style={{ color: "var(--gold)" }}
                  >
                    {"Learn More \u2192"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
