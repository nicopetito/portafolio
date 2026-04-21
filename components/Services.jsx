'use client'
import { Monitor, LayoutDashboard, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import { useLang } from './LangProvider'
import { SERVICES } from '@/lib/content'

const ICONS = [Monitor, LayoutDashboard, Wrench]

export default function Services() {
  const { lang } = useLang()

  return (
    <section id="servicios" className="px-6 md:px-12 lg:px-20 py-28 border-t border-border">
      {/* Label */}
      <Reveal delay={0} className="flex items-center gap-3 mb-6">
        <span className="text-accent font-syne font-bold text-xs tracking-[0.2em]">04</span>
        <span className="w-8 h-px bg-border" />
        <span className="text-muted font-syne text-xs uppercase tracking-[0.15em]">
          {lang === 'es' ? 'Servicios' : 'Services'}
        </span>
      </Reveal>

      {/* Heading */}
      <Reveal
        as="h2"
        delay={0.08}
        className="font-display font-normal text-text leading-tight mb-16 max-w-xl"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        {lang === 'es' ? '¿En qué te puedo ayudar?' : 'How can I help you?'}
      </Reveal>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-4 md:gap-5">
        {SERVICES.map((service, i) => {
          const Icon = ICONS[i]
          const isFeatured = i === 1

          return (
            <Reveal
              key={i}
              delay={0.1 + i * 0.1}
              className={`group rounded-2xl p-7 transition-all duration-300 relative overflow-hidden ${
                isFeatured
                  ? 'border-2 border-accent/40 bg-accent/[0.03] hover:border-accent/70 hover:-translate-y-1.5'
                  : 'border border-border hover:border-accent/20 hover:bg-surface/60 hover:-translate-y-1.5'
              }`}
            >
              {isFeatured && (
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-syne font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full uppercase tracking-[0.15em]">
                    {lang === 'es' ? 'Más solicitado' : 'Most requested'}
                  </span>
                </div>
              )}

              <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                isFeatured ? 'bg-accent/[0.06]' : 'bg-accent/[0.03]'
              }`} />

              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-7 transition-all duration-300 ${
                isFeatured
                  ? 'border border-accent/30 text-accent group-hover:border-accent/60'
                  : 'border border-border text-muted group-hover:border-accent/40 group-hover:text-accent'
              }`}>
                <Icon size={17} strokeWidth={1.5} />
              </div>

              <p className={`font-syne text-[10px] uppercase tracking-[0.18em] mb-3 ${
                isFeatured ? 'text-accent/70' : 'text-muted'
              }`}>
                {service.time[lang]}
              </p>

              <h3 className="font-syne font-bold text-lg text-text mb-3 leading-snug">
                {service.name[lang]}
              </h3>

              <p className="font-jakarta text-[13px] leading-relaxed text-muted">
                {service.desc[lang]}
              </p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
