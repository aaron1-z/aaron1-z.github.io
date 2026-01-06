import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Singh | Portfolio',
  description: 'Dev | Researcher | Published Author',
  openGraph: {
    title: 'Aditya Singh | Portfolio',
    description: 'Dev | Researcher | Published Author',
    url: 'https://aaron1-z.github.io',
    siteName: 'Aditya Singh Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

