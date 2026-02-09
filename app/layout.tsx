import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://decabaret.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Decabaret | Club & Bar - Live Cabaret, Craft Cocktails & Dark Glamour',
    template: '%s | Decabaret Club & Bar',
  },
  description:
    'Decabaret Club & Bar Lagos, is where nightlife comes alive. Premium drinks, great music, and an electric atmosphere designed for unforgettable nights.',
  keywords: [
    'Decabaret',
    'cabaret club',
    'cocktail bar',
    'nightlife NYC',
    'live performance bar',
    'New York nightclub',
    'VIP lounge NYC',
    'craft cocktails',
    'burlesque',
    'speakeasy bar',
    'live music venue',
    'Downtown Arts District bar',
    'upscale nightlife',
    'cabaret show New York',
    'luxury bar NYC',
  ],
  authors: [{ name: 'Decabaret Club & Bar' }],
  creator: 'Decabaret',
  publisher: 'Decabaret Club & Bar',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Decabaret Club & Bar',
    title: 'Decabaret | Where Cabaret Meets the Night',
    description:
      'An immersive nightlife experience blending live cabaret performances, expertly crafted cocktails, and dark glamour. Reserve your evening at Decabaret in NYC.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Decabaret Club & Bar - Luxurious cabaret venue with dramatic stage lighting and velvet interiors',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decabaret | Where Cabaret Meets the Night',
    description:
      'Live cabaret performances, craft cocktails & dark glamour in NYC. An evening beyond ordinary.',
    images: ['https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1200&auto=format&fit=crop'],
    creator: '@decabaret',
    site: '@decabaret',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'entertainment',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
