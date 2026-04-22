import { Syne, Inter } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const jakarta = Inter({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const viewport = {
  themeColor: '#f8f7f4',
}

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nicolasvidela.dev'
  ),
  title: 'Nicolás Videla Petito — Desarrollador Web',
  description:
    'Desarrollador web. Construyo productos digitales con React, Next.js y Supabase. Mar del Plata, Argentina.',
  keywords: ['desarrollador web', 'web developer', 'React', 'Next.js', 'Supabase', 'Mar del Plata', 'freelance'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Nicolás Videla Petito — Desarrollador Web',
    description: 'Construyo productos digitales que resuelven problemas reales. React, Next.js, Supabase.',
    type: 'website',
    locale: 'es_AR',
    url: '/',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Nicolás Videla Petito — Desarrollador Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolás Videla Petito — Desarrollador Web',
    description: 'Construyo productos digitales que resuelven problemas reales. React, Next.js, Supabase.',
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${jakarta.variable}`}
    >
      <body className="bg-bg text-text antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  )
}
