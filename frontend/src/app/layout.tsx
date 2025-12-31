import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Hello Agents - AI Agents Tutorial',
  description: 'Learn to build AI agents from scratch - A comprehensive interactive course by Datawhale',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Hello Agents - AI Agents Tutorial',
    description: 'Learn to build AI agents from scratch - A comprehensive interactive course by Datawhale',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hello Agents - AI Agents Tutorial',
    description: 'Learn to build AI agents from scratch - A comprehensive interactive course by Datawhale',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-smooth">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
