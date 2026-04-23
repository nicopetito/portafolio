'use client'
import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { useLang } from './LangProvider'
import { BIO } from '@/lib/content'

export default function Hero() {
  const { lang } = useLang()
  const sectionRef = useRef(null)
  const glowRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onMove = (e) => {
      if (!glowRef.current) return
      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      glowRef.current.style.background = `radial-gradient(700px circle at ${x}px ${y}px, rgba(4,120,87,0.07), transparent 40%)`
    }

    section.addEventListener('mousemove', onMove, { passive: true })
    return () => section.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16 overflow-hidden"
    >
      {/* Mouse glow */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-none" />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Accent glow blob top-right */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      {/* Available badge */}
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.1 }}
        className="inline-flex items-center gap-2 border border-accent/25 text-accent text-[11px] font-syne font-semibold px-3 py-1.5 rounded-full w-fit mb-10 tracking-wide"
      >
        <span className="w-1.5 h-1.5 bg-accent rounded-full dot-pulse" />
        {lang === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
      </motion.div>

      {/* Name — big display */}
      <div className="overflow-hidden mb-1">
        <motion.h1
          initial={reduced ? {} : { y: 110 }}
          animate={{ y: 0 }}
          transition={{ duration: reduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-normal leading-[0.88] text-text"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9.5rem)' }}
        >
          Nicolás
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          initial={reduced ? {} : { y: 110 }}
          animate={{ y: 0 }}
          transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-normal leading-[0.88] text-text"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9.5rem)' }}
        >
          <span className="text-accent glow-text">Petito</span>
        </motion.h1>
      </div>

      {/* Role + tagline */}
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.45 }}
        className="mt-8 max-w-xl"
      >
        <p className="text-muted font-syne text-xs uppercase tracking-[0.2em] mb-3">
          {lang === 'es' ? '— Desarrollador Web' : '— Web Developer'}
        </p>
        <p className="text-muted font-jakarta text-base leading-relaxed">
          {BIO[lang].headline}
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.6 }}
        className="mt-10 flex flex-col sm:flex-row gap-3"
      >
        <a
          href="#proyectos"
          className="inline-flex items-center justify-center gap-2 bg-accent text-bg font-syne font-bold text-sm px-7 py-4 min-h-[48px] rounded-full hover:bg-accent/90 hover:scale-[1.03] active:scale-95 active:bg-accent/90 transition-all duration-200 w-full sm:w-auto"
        >
          {lang === 'es' ? 'Ver proyectos' : 'View projects'}
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center justify-center gap-2 border border-border text-text font-syne font-bold text-sm px-7 py-4 min-h-[48px] rounded-full hover:border-accent/50 hover:text-accent active:border-accent/50 active:text-accent transition-all duration-200 w-full sm:w-auto"
        >
          {lang === 'es' ? 'Hablemos' : "Let's talk"}
        </a>
      </motion.div>

      {/* Bottom decorations */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 1.1 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-2 text-muted text-xs font-jakarta"
      >
        <ArrowDown size={13} className="animate-bounce" />
        Scroll
      </motion.div>

      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 1.1 }}
        className="hidden sm:flex absolute bottom-8 right-6 md:right-12 flex-col items-end gap-1.5 text-muted text-xs font-jakarta"
      >
        <div className="flex items-center gap-1.5">
          <MapPin size={12} />
          Mar del Plata, ARG
        </div>
        <p className="text-xs text-right leading-snug text-muted/90">
          {lang === 'es'
            ? 'Técnico en Programación (UTN) · Tesis sobresaliente · 4 proyectos en producción'
            : 'Programming Technician (UTN) · Outstanding thesis · 4 production projects'}
        </p>
      </motion.div>
    </section>
  )
}
