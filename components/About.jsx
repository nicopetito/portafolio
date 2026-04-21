'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import Reveal from './Reveal'
import { useLang } from './LangProvider'
import { BIO, STACK } from '@/lib/content'

export default function About() {
  const { lang } = useLang()

  return (
    <section id="sobre" className="px-6 md:px-12 lg:px-20 py-28 border-t border-border">
      {/* Section label */}
      <Reveal delay={0} className="flex items-center gap-3 mb-16">
        <span className="text-accent font-syne font-bold text-xs tracking-[0.2em]">01</span>
        <span className="w-8 h-px bg-border" />
        <span className="text-muted font-syne text-xs uppercase tracking-[0.15em]">
          {lang === 'es' ? 'Sobre mí' : 'About me'}
        </span>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start">
        {/* Photo */}
        <Reveal delay={0.1} className="relative aspect-[3/4] max-w-[340px] w-full">
          <div className="w-full h-full rounded-2xl overflow-hidden border border-border relative">
            <Image
              src="/yo.png"
              alt="Nicolás Videla Petito"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 340px"
              priority
            />
          </div>
          {/* Decorative border offset */}
          <div className="absolute -bottom-3 -right-3 w-full h-full border border-border/40 rounded-2xl -z-10" />
        </Reveal>

        {/* Text + stack */}
        <div className="flex flex-col gap-9">
          <Reveal delay={0.15}>
            <h2
              className="font-display font-normal text-text leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              {BIO[lang].aboutHeadline}
            </h2>
            <div className="space-y-4">
              <p className="text-muted font-jakarta text-[15px] leading-relaxed">
                {BIO[lang].bio}
              </p>
              <p className="text-muted font-jakarta text-[15px] leading-relaxed">
                {BIO[lang].bio2}
              </p>
            </div>
          </Reveal>

          {/* Stack pills */}
          <Reveal delay={0.25}>
            <p className="text-muted font-syne text-[10px] uppercase tracking-[0.2em] mb-4">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-[12px] font-jakarta px-3 py-1.5 border border-border text-muted hover:border-accent/50 hover:text-accent transition-all duration-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CV download */}
          <Reveal delay={0.32}>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 border border-text/30 text-text font-syne font-bold text-xs px-5 py-3 rounded-full hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Download size={13} />
              {lang === 'es' ? 'Ver / Descargar CV' : 'View / Download CV'}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
