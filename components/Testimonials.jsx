'use client'
import Reveal from './Reveal'
import { useLang } from './LangProvider'
import { TESTIMONIALS } from '@/lib/content'

export default function Testimonials() {
  const { lang } = useLang()

  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-border">
      <Reveal delay={0} className="flex items-center gap-3 mb-16">
        <span className="text-accent font-syne font-bold text-xs tracking-[0.2em]">↗</span>
        <span className="w-8 h-px bg-border" />
        <span className="text-muted font-syne text-xs uppercase tracking-[0.15em]">
          {lang === 'es' ? 'Clientes' : 'Clients'}
        </span>
      </Reveal>

      <div className="max-w-3xl">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={i}
            delay={0.1 + i * 0.08}
            className="relative pl-6 border-l-2 border-accent"
          >
            <blockquote className="font-jakarta text-text text-xl md:text-2xl leading-relaxed mb-6" style={{ fontStyle: 'normal' }}>
              <span className="text-accent text-3xl font-syne font-black leading-none mr-1">"</span>
              {t.quote[lang]}
              <span className="text-accent text-3xl font-syne font-black leading-none ml-1">"</span>
            </blockquote>
            <footer className="flex items-center gap-3">
              <div className="w-6 h-px bg-border" />
              <div>
                <p className="font-syne font-bold text-sm text-text">{t.author}</p>
                <p className="font-jakarta text-xs text-muted">
                  {t.company}
                  <span className="mx-1.5 opacity-40">·</span>
                  {t.location}
                </p>
              </div>
            </footer>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
