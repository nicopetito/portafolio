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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nicolasvidela.dev'

export const viewport = {
  themeColor: '#f8f7f4',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nicolás Videla Petito — Desarrollador Web',
    template: '%s — Nicolás Videla Petito',
  },
  description:
    'Desarrollador web. Construyo productos digitales con React, Next.js y Supabase. Mar del Plata, Argentina.',
  keywords: [
    'desarrollador web', 'web developer', 'React', 'Next.js', 'Supabase',
    'TypeScript', 'Tailwind CSS', 'Mar del Plata', 'Argentina', 'freelance',
    'diseño web', 'desarrollo web', 'full stack',
  ],
  authors: [{ name: 'Nicolás Videla Petito', url: SITE_URL }],
  creator: 'Nicolás Videla Petito',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nicolás Videla Petito — Desarrollador Web',
    description: 'Construyo productos digitales que resuelven problemas reales. React, Next.js, Supabase.',
    type: 'website',
    url: SITE_URL,
    locale: 'es_AR',
    siteName: 'Nicolás Videla Petito',
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
    creator: '@nicopetito',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Nicolás Videla Petito',
      url: SITE_URL,
      image: `${SITE_URL}/yo.png`,
      jobTitle: 'Desarrollador Web',
      description: 'Desarrollador web en formación avanzada. Construyo productos digitales con React, Next.js y Supabase.',
      address: { '@type': 'PostalAddress', addressLocality: 'Mar del Plata', addressCountry: 'AR' },
      email: 'videlapetito@gmail.com',
      sameAs: [
        'https://github.com/nicopetito',
        'https://linkedin.com/in/nicolasvidela',
      ],
      knowsAbout: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'JavaScript'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Nicolás Videla Petito',
      description: 'Portfolio de desarrollo web — React, Next.js, Supabase.',
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: ['es-AR', 'en'],
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${jakarta.variable}`}
    >
      <body className="bg-bg text-text antialiased" suppressHydrationWarning>
        <Cursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
