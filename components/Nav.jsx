'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useLang } from './LangProvider'

const LINKS = {
  es: [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#sobre' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  en: [
    { label: 'Projects', href: '#proyectos' },
    { label: 'About', href: '#sobre' },
    { label: 'Services', href: '#servicios' },
    { label: 'Contact', href: '#contacto' },
  ],
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()

  // Detect scroll for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on scroll
  useEffect(() => {
    if (!open) return
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es')

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border/60'
            : ''
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-syne font-black text-base tracking-tight text-text"
        >
          NVP<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS[lang].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-jakarta text-muted hover:text-text transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/cv"
            className="text-[11px] font-syne font-bold text-muted hover:text-accent border border-border hover:border-accent/50 px-3 py-1.5 rounded-full transition-all duration-200 tracking-widest"
          >
            CV
          </Link>
        </div>

        {/* Right: lang toggle + mobile btn */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="font-syne font-bold text-[11px] tracking-widest text-muted hover:text-accent border border-border hover:border-accent/50 px-2.5 py-1 rounded transition-all duration-200"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-muted hover:text-text transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Backdrop — tap outside to close */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-text/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-surface border-b border-border px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {LINKS[lang].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text font-syne font-semibold text-lg"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/cv"
              onClick={() => setOpen(false)}
              className="text-text font-syne font-semibold text-lg"
            >
              CV
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
