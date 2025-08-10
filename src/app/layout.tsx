import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.didaflow.ai'),
  title: 'Didaflow – Dai dati all&apos;azione',
  description: 'Piattaforma di Academic Intelligence che trasforma i dati educativi in decisioni strategiche.',
  keywords: ['Didaflow', 'Academic Intelligence', 'Università', 'Dropout', 'Analisi predittiva'],
  authors: [{ name: 'Didaflow', url: 'https://www.didaflow.ai' }],
  openGraph: {
    title: 'Didaflow – Dai dati all&apos;azione',
    description: 'Trasforma i dati educativi in azione strategica.',
    url: 'https://www.didaflow.ai',
    siteName: 'Didaflow',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Didaflow Hero' }],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Didaflow',
    creator: '@Didaflow',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DidaFlow",
    "description": "Piattaforma di Academic & Training Intelligence che trasforma i dati educativi in decisioni strategiche.",
    "url": "https://www.didaflow.ai",
    "logo": "https://www.didaflow.ai/android-chrome-512x512.png",
    "foundingDate": "2023",
    "foundingLocation": {
      "@type": "Place",
      "name": "Bologna, Italy"
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Stefano Zingaro",
        "jobTitle": "CTO & Founder"
      },
      {
        "@type": "Person",
        "name": "Maurizio Gabbrielli",
        "jobTitle": "Founder"
      },
      {
        "@type": "Person",
        "name": "Francesco Balzan",
        "jobTitle": "CEO & Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bologna",
      "addressCountry": "IT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@didaflow.ai"
    }
  };

  return (
    <html lang="it">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  )
}
