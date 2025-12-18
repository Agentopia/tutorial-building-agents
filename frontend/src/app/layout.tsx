import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello Agents - AI Agents Tutorial',
  description: 'Learn to build AI agents from scratch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
