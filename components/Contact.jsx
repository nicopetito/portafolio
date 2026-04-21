'use client'
import Link from 'next/link'
import { MessageCircle, Mail, Download } from 'lucide-react'
import GitHubIcon from './GitHubIcon'
import Reveal from './Reveal'
import { useLang } from './LangProvider'
import { PERSONAL } from '@/lib/content'

export default function Contact() {
  const { lang } = useLang()

  const waMsg = lang === 'es'
    ? 'Hola Nicolás, vi tu portfolio y me interesa hablar sobre un proyecto.'
    : "Hi Nicolás, I saw your portfolio and I'd like to discuss a project."

  const waUrl = `https://wa.me/${PERSONAL.whatsapp}?text=${encodeURIComponent(waMsg)}`
  const mailUrl = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(
    lang === 'es' ? 'Propuesta de proyecto — Portfolio' : 'Project proposal — Portfolio'
  )}`

  return (
    <section id="contacto" className="px-6 md:px-12 lg:px-20 py-28 border-t border-border relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/[0.025] blur-[140px] rounded-full pointer-events-none" />

      {/* Label */}
      <Reveal delay={0} className="flex items-center gap-3 mb-6">
        <span className="text-accent font-syne font-bold text-xs tracking-[0.2em]">05</span>
        <span className="w-8 h-px bg-border" />
        <span className="text-muted font-syne text-xs uppercase tracking-[0.15em]">
          {lang === 'es' ? 'Contacto' : 'Contact'}
        </span>
      </Reveal>

      <div className="max-w-3xl relative z-10">
        <Reveal
          as="h2"
          delay={0.08}
          className="font-syne font-black text-text leading-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
        >
          {lang === 'es' ? (
            <>
              ¿Tenés un<br />
              proyecto?{' '}
              <span className="text-accent">Hablemos.</span>
            </>
          ) : (
            <>
              Got a<br />
              project?{' '}
              <span className="text-accent glow-text">Let's talk.</span>
            </>
          )}
        </Reveal>

        <Reveal
          as="p"
          delay={0.16}
          className="text-muted font-jakarta text-[15px] leading-relaxed mb-12 max-w-md"
        >
          {lang === 'es'
            ? 'Estoy disponible para proyectos freelance, colaboraciones y consultas. Respondo en menos de 24 horas.'
            : "I'm available for freelance projects, collaborations and inquiries. I reply within 24 hours."}
        </Reveal>

        <Reveal delay={0.22} className="flex flex-col sm:flex-row gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-syne font-bold text-sm px-8 py-4 rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={mailUrl}
            className="inline-flex items-center justify-center gap-2 border border-border text-text font-syne font-bold text-sm px-8 py-4 rounded-full hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-muted font-syne font-bold text-sm px-8 py-4 rounded-full hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <Link
            href="/cv"
            className="inline-flex items-center justify-center gap-2 border border-text/30 text-text font-syne font-bold text-sm px-8 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-200"
          >
            <Download size={16} />
            CV
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
