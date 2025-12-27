import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Hello Agents - AI Agents Tutorial',
  description: 'Learn to build AI agents from scratch - A comprehensive interactive course by Datawhale',
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
          {children}
        </Providers>
      </body>
    </html>
  )
}
