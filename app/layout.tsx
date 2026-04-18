import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['700', '600'],
})

export const metadata: Metadata = {
  title: 'The Vilton - Luxury Serviced Apartments in Raipur',
  description: 'Experience comfort that feels like home. Premium serviced apartments in Raipur with modern amenities and prime location.',
  generator: 'v0.app',
  icons: {
    icon: '/vilton-logo.png',
    apple: '/vilton-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
