import { ExternalLink } from 'lucide-react'
import { PERSONAL, BIO, PROJECTS, STACK } from '@/lib/content'
import PrintButton from './PrintButton'

export const metadata = {
  title: 'CV — Nicolás Videla Petito',
  description: 'Currículum Vitae de Nicolás Videla Petito, Desarrollador Web.',
  openGraph: {
    title: 'CV — Nicolás Videla Petito',
    description: 'Currículum Vitae de Nicolás Videla Petito, Desarrollador Web.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Nicolás Videla Petito — Desarrollador Web' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
}

export default function CVPage() {
  return (
    <>
      {/* Print button — hidden on print */}
      <div className="print:hidden fixed top-4 left-4 right-4 z-50 flex justify-end gap-2">
        <a
          href="/"
          className="inline-flex items-center gap-2 border border-border text-muted font-syne font-bold text-xs px-4 py-2.5 rounded-full hover:border-accent/50 hover:text-accent transition-all duration-200 bg-bg"
        >
          ← Portfolio
        </a>
        <PrintButton />
      </div>

      <main className="min-h-screen bg-bg text-text px-5 sm:px-8 py-10 sm:py-14 max-w-[820px] mx-auto print:px-0 print:py-0">

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-border print:pb-5 print:mb-7">
          <h1 className="font-syne font-black text-4xl text-text mb-1 print:text-3xl">
            {PERSONAL.name}
          </h1>
          <p className="font-syne font-semibold text-accent text-base tracking-wide mb-4">
            Desarrollador Web
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-jakarta text-sm text-muted">
            <span>{PERSONAL.location}</span>
            <a href={`mailto:${PERSONAL.email}`} className="hover:text-accent transition-colors">
              {PERSONAL.email}
            </a>
            <a href={`https://wa.me/${PERSONAL.whatsapp}`} className="hover:text-accent transition-colors print:hidden">
              WhatsApp
            </a>
            <a href={PERSONAL.github} className="hover:text-accent transition-colors">
              github.com/nicopetito
            </a>
          </div>
        </header>

        {/* Sobre mí */}
        <section className="mb-9">
          <h2 className="font-syne font-bold text-xs uppercase tracking-[0.18em] text-accent mb-4">
            Sobre mí
          </h2>
          <p className="font-jakarta text-[14px] text-muted leading-relaxed mb-3">
            {BIO.es.bio}
          </p>
          <p className="font-jakarta text-[14px] text-muted leading-relaxed">
            {BIO.es.bio2}
          </p>
        </section>

        {/* Stack */}
        <section className="mb-9">
          <h2 className="font-syne font-bold text-xs uppercase tracking-[0.18em] text-accent mb-4">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="font-jakarta text-xs px-3 py-1.5 border border-border text-muted rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section className="mb-9">
          <h2 className="font-syne font-bold text-xs uppercase tracking-[0.18em] text-accent mb-6">
            Proyectos
          </h2>
          <div className="space-y-7">
            {PROJECTS.map((p) => (
              <div key={p.name.es} className="border-l-2 border-border pl-5 print:break-inside-avoid">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-syne font-bold text-[15px] text-text leading-snug">
                    {p.name.es}
                  </h3>
                  <div className="flex gap-2 shrink-0 print:hidden">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent text-[11px] font-syne font-bold hover:underline"
                      >
                        Demo <ExternalLink size={10} />
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted text-[11px] font-syne hover:text-accent transition-colors"
                      >
                        GitHub <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
                {/* URLs visibles al imprimir */}
                <div className="hidden print:flex gap-4 mb-1.5">
                  {p.url && <span className="font-jakarta text-[11px] text-muted">{p.url}</span>}
                  {p.github && <span className="font-jakarta text-[11px] text-muted">{p.github}</span>}
                </div>
                <p className="font-jakarta text-[13px] text-muted leading-relaxed mb-2.5">
                  {p.desc.es}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="font-jakarta text-[11px] text-accent/80 bg-accent/[0.07] px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Educación */}
        <section className="mb-9">
          <h2 className="font-syne font-bold text-xs uppercase tracking-[0.18em] text-accent mb-4">
            Educación
          </h2>
          <div className="border-l-2 border-border pl-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-syne font-bold text-[15px] text-text mb-0.5">
                  Técnico en Programación
                </h3>
                <p className="font-jakarta text-[13px] text-muted">Universidad Tecnológica Nacional — UTN Mar del Plata</p>
              </div>
              <span className="font-syne text-xs text-muted shrink-0">2023 – 2025</span>
            </div>
            <p className="font-jakarta text-[13px] text-muted mt-2 leading-relaxed">
              Tesis: <em>Equals</em> — plataforma de gestión financiera personal. Calificación: Sobresaliente. Expuesta frente a toda la facultad.
            </p>
          </div>
        </section>

        {/* Footer CV */}
        <footer className="pt-8 border-t border-border">
          <p className="font-jakarta text-[12px] text-muted/60 text-center print:text-left">
            Portfolio completo en{' '}
            <a href="https://nicolasvidela.dev" className="text-accent hover:underline print:no-underline">
              nicolasvidela.dev
            </a>
          </p>
        </footer>
      </main>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { margin: 1.5cm 1.8cm; }
          body { background: white !important; }
          .print\\:break-inside-avoid { break-inside: avoid; }
        }
      `}</style>
    </>
  )
}
