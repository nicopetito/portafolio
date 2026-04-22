import Link from 'next/link'

export const metadata = {
  title: '404 — Nicolás Videla Petito',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-6 text-center">
      {/* Big 404 */}
      <p
        className="font-syne font-black select-none leading-none mb-8"
        style={{ fontSize: 'clamp(6rem, 20vw, 10rem)', color: '#e2dfd6' }}
        aria-hidden="true"
      >
        404
      </p>

      {/* Title — bilingual */}
      <h1 className="font-syne font-bold text-text mb-1" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)' }}>
        Esta ruta no tiene endpoint.
      </h1>
      <p className="font-syne text-muted/60 mb-4" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)' }}>
        This route has no endpoint.
      </p>

      {/* Subtitle */}
      <p className="font-jakarta text-muted text-[14px] mb-1">
        Pero tranqui, el resto del sitio sí funciona.
      </p>
      <p className="font-jakarta text-muted/50 text-[13px] mb-10">
        But chill, the rest of the site works fine.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="px-6 py-2.5 rounded-lg bg-text text-bg font-jakarta text-[14px] font-medium hover:bg-text/85 transition-colors duration-200"
        >
          Inicio / Home
        </Link>
        <Link
          href="/#proyectos"
          className="px-6 py-2.5 rounded-lg border border-border text-text font-jakarta text-[14px] font-medium hover:border-accent/50 hover:text-accent transition-colors duration-200"
        >
          Proyectos / Projects
        </Link>
      </div>
    </main>
  )
}
