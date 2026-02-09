export function Marquee() {
  const text = "Decabaret \u00B7 Club & Bar \u00B7 Live Performance \u00B7 Craft Cocktails \u00B7 Dark Glamour \u00B7 VIP Experience \u00B7 "
  const repeatedText = text.repeat(4)

  return (
    <section className="relative overflow-hidden py-6 md:py-8" style={{ background: "var(--gold)" }}>
      <div className="animate-marquee flex whitespace-nowrap">
        <span
          className="font-display text-lg tracking-[0.15em] uppercase md:text-2xl"
          style={{ color: "hsl(0 0% 4%)" }}
        >
          {repeatedText}
        </span>
        <span
          className="font-display text-lg tracking-[0.15em] uppercase md:text-2xl"
          style={{ color: "hsl(0 0% 4%)" }}
          aria-hidden="true"
        >
          {repeatedText}
        </span>
      </div>
    </section>
  )
}
