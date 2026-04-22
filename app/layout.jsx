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

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nicolasvidela.dev'
  ),
  title: 'Nicolás Videla Petito — Desarrollador Web',
  description:
    'Desarrollador web en formación avanzada. Construyo productos digitales con React, Next.js y Supabase. Mar del Plata, Argentina.',
  keywords: ['desarrollador web', 'web developer', 'React', 'Next.js', 'Supabase', 'Mar del Plata', 'freelance'],
  openGraph: {
    title: 'Nicolás Videla Petito — Desarrollador Web',
    description: 'Construyo productos digitales que resuelven problemas reales. React, Next.js, Supabase.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolás Videla Petito — Desarrollador Web',
    description: 'Construyo productos digitales que resuelven problemas reales. React, Next.js, Supabase.',
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
