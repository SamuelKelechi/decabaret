"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    alt: "Craft cocktails at the Decabaret bar",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-square md:aspect-auto",
  },
  {
    src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop",
    alt: "VIP lounge area with velvet seating",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2057&auto=format&fit=crop",
    alt: "Signature cocktail in a coupe glass",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2070&auto=format&fit=crop",
    alt: "The main stage at Decabaret",
    span: "md:col-span-2",
    aspect: "aspect-[21/9]",
  },
]

export function Gallery() {
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
    <section id="gallery" aria-label="Photo gallery of Decabaret venue and events" ref={sectionRef} className="relative py-24 md:py-32" style={{ background: "hsl(0 0% 5%)" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="reveal mb-16 text-center md:mb-24">
          <span
            className="font-body text-sm tracking-[0.4em] uppercase"
            style={{ color: "var(--gold)" }}
          >
            Visual Journey
          </span>
          <h2 className="section-title mt-4 font-display text-balance" style={{ color: "var(--cream)" }}>
            Glimpses of the
            <span className="italic" style={{ color: "var(--gold)" }}>
              {" "}Night
            </span>
          </h2>
          <div className="mx-auto mt-6 gold-line w-20" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto_auto] md:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`reveal img-zoom relative overflow-hidden ${image.span} ${image.aspect}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 hover:opacity-100"
                style={{
                  background: "linear-gradient(to top, hsl(0 0% 4% / 0.8), transparent 60%)",
                }}
              >
                <p
                  className="font-body text-sm tracking-[0.15em] uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
