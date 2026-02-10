export function StructuredData() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://decabaret.com"

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "NightClub",
    name: "Decabaret Club & Bar",
    alternateName: "Decabaret",
    description:
      "An upscale cabaret club and cocktail bar in Lagos City featuring live performances, craft cocktails, VIP lounges, and an unforgettable nightlife experience.",
    url: siteUrl,
    telephone: "+2348134607241",
    email: "hello@decabaret.com",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1200&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1200&auto=format&fit=crop",
    priceRange: "₦",
    currenciesAccepted: "NGN",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "154 Agor Palace Way, Okota",
      addressLocality: "Oshodi-Isolo Local Government",
      addressRegion: "Lagos",
      postalCode: "100263",
      addressCountry: "Nigeria",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.514193,
      longitude: 3.308678,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "19:00",
        closes: "Till Dawn",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "19:00",
        closes: "Till Mama Call",
      },
    ],
    sameAs: [
      "https://www.instagram.com/decabaret",
      "https://www.facebook.com/decabaret",
      "https://www.tiktok.com/@decabaret",
    ],
    hasMenu: `${siteUrl}/#experience`,
    acceptsReservations: true,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "342",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Kole Sunday",
        },
        reviewBody:
          "Walking into Decabaret feels like stepping through a portal into another era. The performances are mesmerizing, the cocktails are art, and the atmosphere is simply unmatched.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        publisher: {
          "@type": "Person",
          name: "Big Sam",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Chidinma",
        },
        reviewBody:
          "The best-kept secret in the city. Every visit is different, every night is unforgettable. This is what nightlife should feel like.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        publisher: {
          "@type": "person",
          name: "Olu Mile2",
        },
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Decabaret Club & Bar",
    url: siteUrl,
    description:
      "Decabaret is an upscale cabaret club and cocktail bar in Lagos City.",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/#reserve`,
      },
      result: {
        "@type": "Reservation",
        name: "Table Reservation",
      },
    },
  }

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "Decabaret Live Events",
    description:
      "Weekly live performances, cabaret shows, and themed nights at Decabaret Club & Bar in Lagos.",
    location: {
      "@type": "Place",
      name: "Decabaret Club & Bar",
      address: {
        "@type": "PostalAddress",
        streetAddress: "154 Agor Palace Way, Okota",
        addressLocality: "Oshodi Isolo",
        addressRegion: "Lagos",
        postalCode: "100263",
        addressCountry: "Nigeria",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Decabaret Club & Bar",
      url: siteUrl,
    },
    subEvent: [
      {
        "@type": "Event",
        name: "Velvet Valentine",
        startDate: "2026-02-14T21:00:00-05:00",
        endDate: "2026-02-15T02:00:00-05:00",
        description:
          "An evening of romance and rhythm. Live jazz, specialty rose cocktails, and intimate table-side performances.",
        eventAttendanceMode:
          "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        offers: {
          "@type": "Offer",
          url: `${siteUrl}/#reserve`,
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Event",
        name: "Midnight Masquerade",
        startDate: "2026-02-21T22:00:00-05:00",
        endDate: "2026-02-22T04:00:00-05:00",
        description:
          "Don your finest mask and step into a world of mystery. Burlesque, live DJs, and the city's most daring night out.",
        eventAttendanceMode:
          "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        offers: {
          "@type": "Offer",
          url: `${siteUrl}/#reserve`,
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Event",
        name: "Golden Hour",
        startDate: "2026-02-28T20:00:00-05:00",
        endDate: "2026-03-01T01:00:00-05:00",
        description:
          "Our monthly showcase of emerging performance artists. Raw talent, bold cocktails, and an audience that appreciates the art.",
        eventAttendanceMode:
          "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        offers: {
          "@type": "Offer",
          url: `${siteUrl}/#reserve`,
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Event",
        name: "The Underground",
        startDate: "2026-03-07T23:00:00-05:00",
        endDate: "2026-03-08T05:00:00-05:00",
        description:
          "A late-night journey into electronic soundscapes with guest DJs from across the globe. The dance floor beckons.",
        eventAttendanceMode:
          "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        offers: {
          "@type": "Offer",
          url: `${siteUrl}/#reserve`,
          availability: "https://schema.org/InStock",
        },
      },
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Experience",
        item: `${siteUrl}/#experience`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Events",
        item: `${siteUrl}/#events`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Reserve",
        item: `${siteUrl}/#reserve`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
