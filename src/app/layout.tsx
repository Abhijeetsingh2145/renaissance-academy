import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SchoolJsonLd } from '@/components/seo/JsonLd'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://renaissanceacademy.org.in'),
  title: {
    default: 'Renaissance Academy | Gorakhpur',
    template: '%s | Renaissance Academy',
  },
  description: 'Renaissance Academy is a co-educational English-medium school located in Baijnathpur, Balapar Road, Gorakhpur, Uttar Pradesh.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Renaissance Academy | Gorakhpur',
    description: 'Renaissance Academy is a co-educational English-medium school located in Baijnathpur, Balapar Road, Gorakhpur, Uttar Pradesh.',
    url: 'https://renaissanceacademy.org.in',
    siteName: 'Renaissance Academy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
        alt: 'Renaissance Academy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renaissance Academy | Gorakhpur',
    description: 'Renaissance Academy is a co-educational English-medium school located in Baijnathpur, Balapar Road, Gorakhpur, Uttar Pradesh.',
    images: ['/logo.png'],
  },
}

import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { ImageLightboxProvider } from '@/components/providers/ImageLightboxProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SchoolJsonLd />
      </head>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <SmoothScrollProvider>
          <ImageLightboxProvider>
            {children}
          </ImageLightboxProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
