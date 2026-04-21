'use client'
import { useEffect, useRef } from 'react'
import { X, ExternalLink } from 'lucide-react'
import GitHubIcon from './GitHubIcon'

export default function CaseStudyModal({ project, lang, onClose }) {
  const { caseStudy: cs, name, url, github } = project
  const overlayRef = useRef(null)

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const t = {
    problem:    { es: 'El problema',          en: 'The problem' },
    solution:   { es: 'La solución',          en: 'The solution' },
    tech:       { es: 'Decisiones técnicas',  en: 'Technical decisions' },
    stack:      { es: 'Stack',                en: 'Stack' },
    technology: { es: 'Tecnología',           en: 'Technology' },
    role:       { es: 'Rol',                  en: 'Role' },
    why:        { es: 'Por qué así',          en: 'Why this way' },
    metrics:    { es: 'Métricas',             en: 'Metrics' },
    next:       { es: 'Próximos pasos',       en: 'Next steps' },
    client:     { es: 'Cliente',              en: 'Client' },
    devRole:    { es: 'Rol',                  en: 'Role' },
    devTime:    { es: 'Tiempo',               en: 'Time' },
    status:     { es: 'Estado',               en: 'Status' },
    viewSite:   { es: 'Ver sitio',            en: 'View site' },
    viewCode:   { es: 'Ver código',           en: 'View code' },
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-text/40 backdrop-blur-sm px-4 py-8 md:py-16"
    >
      <div className="relative w-full max-w-3xl bg-bg border border-border rounded-2xl shadow-xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-bg/95 backdrop-blur-sm border-b border-border px-6 md:px-10 py-5 flex items-start justify-between gap-4 rounded-t-2xl">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-jakarta text-muted uppercase tracking-[0.15em] mb-1">Case Study</p>
            <h2 className="font-syne font-bold text-text text-lg md:text-xl leading-snug">{name[lang]}</h2>
          </div>
          <div className="flex items-center gap-3 pt-1 flex-shrink-0">
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors" aria-label={t.viewSite[lang]}>
                <ExternalLink size={16} />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors" aria-label={t.viewCode[lang]}>
                <GitHubIcon size={16} />
              </a>
            )}
            <button onClick={onClose}
              className="text-muted hover:text-text transition-colors p-1 rounded-lg hover:bg-surface"
              aria-label="Cerrar">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="px-6 md:px-10 py-8 space-y-10">
          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: t.client[lang],  value: cs.client },
              { label: t.devRole[lang], value: cs.role[lang] },
              cs.devTime ? { label: t.devTime[lang], value: cs.devTime } : null,
              { label: t.status[lang],  value: cs.status[lang] },
            ].filter(Boolean).map(({ label, value }) => (
              <div key={label} className="bg-surface rounded-xl p-3">
                <p className="text-[10px] font-syne uppercase tracking-[0.15em] text-muted mb-1">{label}</p>
                <p className="text-[13px] font-jakarta text-text leading-snug">{value}</p>
              </div>
            ))}
          </div>

          {/* Problem */}
          <section>
            <SectionTitle>{t.problem[lang]}</SectionTitle>
            <p className="text-muted font-jakarta text-[14px] leading-relaxed">{cs.problem[lang]}</p>
          </section>

          {/* Solution */}
          <section>
            <SectionTitle>{t.solution[lang]}</SectionTitle>
            <ul className="space-y-2.5">
              {cs.solutionFeatures[lang].map((feat, i) => {
                const [bold, rest] = splitFeature(feat)
                return (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-[14px] font-jakarta text-muted leading-relaxed">
                      {bold && <span className="text-text font-medium">{bold} </span>}
                      {rest}
                    </p>
                  </li>
                )
              })}
            </ul>
          </section>

          {/* Tech stack */}
          <section>
            <SectionTitle>{t.tech[lang]}</SectionTitle>
            <p className="text-[11px] font-syne uppercase tracking-[0.15em] text-muted mb-3">{t.stack[lang]}</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-[13px] font-jakarta">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="text-left px-4 py-2.5 text-muted font-medium">{t.technology[lang]}</th>
                    <th className="text-left px-4 py-2.5 text-muted font-medium">{t.role[lang]}</th>
                  </tr>
                </thead>
                <tbody>
                  {cs.techStack.map((row, i) => (
                    <tr key={i} className={i < cs.techStack.length - 1 ? 'border-b border-border' : ''}>
                      <td className="px-4 py-2.5 font-medium text-text">{row.tech}</td>
                      <td className="px-4 py-2.5 text-muted">{row.role[lang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Why decisions */}
            <div className="mt-5 space-y-4">
              <p className="text-[11px] font-syne uppercase tracking-[0.15em] text-muted">{t.why[lang]}</p>
              {cs.decisions.map((d, i) => (
                <div key={i} className="border border-border rounded-xl p-4">
                  <p className="font-syne font-semibold text-[13px] text-text mb-2">{d.q[lang]}</p>
                  <p className="font-jakarta text-[13px] text-muted leading-relaxed">{d.a[lang]}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Metrics */}
          <section>
            <SectionTitle>{t.metrics[lang]}</SectionTitle>
            <ul className="space-y-2">
              {cs.metrics[lang].map((m, i) => {
                const [bold, rest] = splitMetric(m)
                return (
                  <li key={i} className="flex gap-3 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <p className="text-[14px] font-jakarta text-muted">
                      {bold && <span className="text-text font-medium">{bold} </span>}
                      {rest}
                    </p>
                  </li>
                )
              })}
            </ul>
          </section>

          {/* Next steps */}
          <section>
            <SectionTitle>{t.next[lang]}</SectionTitle>
            <ul className="space-y-2">
              {cs.nextSteps[lang].map((step, i) => {
                const [bold, rest] = splitMetric(step)
                return (
                  <li key={i} className="flex gap-3 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                    <p className="text-[14px] font-jakarta text-muted">
                      {bold && <span className="text-text font-medium">{bold} </span>}
                      {rest}
                    </p>
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h3 className="font-syne font-bold text-text text-base mb-4 flex items-center gap-2">
      <span className="w-4 h-px bg-accent" />
      {children}
    </h3>
  )
}

// Split "Bold text: rest of text" → ["Bold text:", "rest of text"]
function splitFeature(text) {
  const match = text.match(/^([^—]+—)(.+)$/)
  if (match) return [match[1].trim(), match[2].trim()]
  const colonMatch = text.match(/^([^:]+:)(.+)$/)
  if (colonMatch) return [colonMatch[1].trim(), colonMatch[2].trim()]
  return [null, text]
}

function splitMetric(text) {
  const colonMatch = text.match(/^([^:]+:)(.+)$/)
  if (colonMatch) return [colonMatch[1].trim(), colonMatch[2].trim()]
  return [null, text]
}
