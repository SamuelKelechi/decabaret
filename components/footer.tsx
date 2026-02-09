import Link from "next/link"

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
]

const quickLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Reserve", href: "#reserve" },
]

export function Footer() {
  return (
    <footer id="contact" className="relative py-16 md:py-24" style={{ background: "hsl(0 0% 3%)" }}>
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <span
              className="font-display text-3xl tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Decabaret
            </span>
            <p className="mt-4 max-w-xs font-body text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              Where the night becomes a performance and every guest is part of the show.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm tracking-wider transition-colors duration-300 hover:text-[var(--gold)]"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="mb-6 font-body text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-base tracking-wide transition-colors duration-300 hover:text-[var(--gold)]"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-6 font-body text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Visit Us
            </h4>
            <address className="flex flex-col gap-3 font-body text-base leading-relaxed not-italic" style={{ color: "hsl(var(--muted-foreground))" }}>
              <p>42 Velvet Lane</p>
              <p>Downtown Arts District</p>
              <p>New York, NY 10013</p>
              <p className="mt-2">
                <a href="tel:+12125553322" style={{ color: "var(--gold)" }} className="transition-opacity hover:opacity-80">+1 (212) 555-DECA</a>
              </p>
              <p>
                <a href="mailto:hello@decabaret.com" style={{ color: "var(--gold)" }} className="transition-opacity hover:opacity-80">hello@decabaret.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-16 border-t pt-8" style={{ borderColor: "hsl(var(--border))" }}>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <span className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <span style={{ color: "var(--gold)" }}>Wed - Thu:</span> 7 PM - 1 AM
              </span>
              <span className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <span style={{ color: "var(--gold)" }}>Fri - Sat:</span> 8 PM - 4 AM
              </span>
              <span className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <span style={{ color: "var(--gold)" }}>Sun - Tue:</span> Closed
              </span>
            </div>
            <p className="font-body text-xs tracking-wider" style={{ color: "hsl(var(--muted-foreground))" }}>
              {"\u00A9"} 2026 Decabaret Club & Bar. All rights reserved.
            </p>
          </div>
        </div>

        {/* Large decorative brand */}
        <div className="mt-12 overflow-hidden text-center">
          <span
            className="font-display text-[8vw] font-bold leading-none tracking-widest uppercase opacity-5"
            style={{ color: "var(--gold)" }}
            aria-hidden="true"
          >
            Decabaret
          </span>
        </div>
      </div>
    </footer>
  )
}
