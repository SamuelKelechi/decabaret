import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Experience } from "@/components/experience"
import { Gallery } from "@/components/gallery"
import { Events } from "@/components/events"
import { Testimonials } from "@/components/testimonials"
import { Reserve } from "@/components/reserve"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Page() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Gallery />
        <Events />
        <Testimonials />
        <Reserve />
      </main>
      <Footer />
    </>
  )
}
