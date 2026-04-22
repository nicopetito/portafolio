'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((m) => m.GitHubCalendar),
  { ssr: false }
)
import { Star } from 'lucide-react'
import Reveal from './Reveal'
import { useLang } from './LangProvider'

// Official GitHub language colors (subset)
const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'HTML': '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  Ruby: '#701516',
  PHP: '#4F5D95',
  'C#': '#178600',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  SCSS: '#c6538c',
  Vue: '#41b883',
  Svelte: '#ff3e00',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Dart: '#00B4AB',
}

function getLangColor(lang) {
  return LANG_COLORS[lang] || '#8b949e'
}

function relativeTime(dateStr, lang) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return lang === 'es' ? 'hoy' : 'today'
  if (days === 1) return lang === 'es' ? 'ayer' : 'yesterday'
  if (days < 30) return lang === 'es' ? `hace ${days} días` : `${days} days ago`
  const months = Math.floor(days / 30)
  if (months < 12) return lang === 'es' ? `hace ${months} mes${months > 1 ? 'es' : ''}` : `${months} month${months > 1 ? 's' : ''} ago`
  const years = Math.floor(months / 12)
  return lang === 'es' ? `hace ${years} año${years > 1 ? 's' : ''}` : `${years} year${years > 1 ? 's' : ''} ago`
}

function SkeletonBlock({ className, style }) {
  return <div className={`animate-pulse bg-border/60 rounded-xl ${className}`} style={style} />
}

export default function GitHubActivity() {
  const { lang } = useLang()
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then((json) => {
        if (json.error) setError(true)
        else setData(json)
      })
      .catch(() => setError(true))
  }, [])

  const calendarTheme = {
    light: ['#e8e6df', '#bbf7d0', '#6ee7b7', '#34d399', '#047857'],
    dark: ['#e8e6df', '#bbf7d0', '#6ee7b7', '#34d399', '#047857'],
  }

  return (
    <section id="github" className="px-6 md:px-12 lg:px-20 py-28 border-t border-border">
      {/* Label */}
      <Reveal delay={0} className="flex items-center gap-3 mb-6">
        <span className="text-accent font-syne font-bold text-xs tracking-[0.2em]">03</span>
        <span className="w-8 h-px bg-border" />
        <span className="text-muted font-syne text-xs uppercase tracking-[0.15em]">GitHub</span>
      </Reveal>

      {/* Heading */}
      <Reveal
        as="h2"
        delay={0.08}
        className="font-display font-normal text-text leading-tight mb-16 max-w-xl"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        {lang === 'es' ? 'Actividad en GitHub' : 'GitHub Activity'}
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* ── Bloque A: Últimos repos ── */}
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <p className="font-syne text-[10px] uppercase tracking-[0.18em] text-muted mb-1">
            {lang === 'es' ? 'Últimos repositorios' : 'Recent repositories'}
          </p>

          {!data && !error && (
            <>
              <SkeletonBlock className="h-28" />
              <SkeletonBlock className="h-28" />
              <SkeletonBlock className="h-28" />
            </>
          )}

          {error && (
            <p className="text-muted font-jakarta text-sm">
              {lang === 'es' ? 'No se pudo cargar la actividad.' : 'Could not load activity.'}
            </p>
          )}

          {data?.repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-2xl p-5 hover:border-accent/30 hover:bg-surface/60 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-syne font-bold text-sm text-text group-hover:text-accent transition-colors duration-200 truncate">
                  {repo.name}
                </span>
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1 text-muted text-[11px] shrink-0">
                    <Star size={11} />
                    {repo.stars}
                  </span>
                )}
              </div>

              {repo.description && (
                <p className="font-jakarta text-[12px] text-muted leading-relaxed line-clamp-2 mb-3">
                  {repo.description}
                </p>
              )}

              <div className="flex items-center justify-between">
                {repo.language ? (
                  <span className="flex items-center gap-1.5 text-[11px] font-jakarta text-muted">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: getLangColor(repo.language) }}
                    />
                    {repo.language}
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-[10px] font-syne text-muted/70">
                  {relativeTime(repo.pushedAt, lang)}
                </span>
              </div>
            </a>
          ))}
        </Reveal>

        {/* ── Bloque B: Calendario ── */}
        <Reveal delay={0.18} className="lg:col-span-2 border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4">
          <p className="font-syne text-[10px] uppercase tracking-[0.18em] text-muted">
            {lang === 'es' ? 'Contribuciones — último año' : 'Contributions — last year'}
          </p>

          <div className="overflow-x-auto min-w-0">
            <GitHubCalendar
              username="nicopetito"
              theme={calendarTheme}
              colorScheme="light"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              style={{ fontFamily: 'var(--font-syne, sans-serif)', color: 'var(--color-muted, #6b7280)' }}
              labels={{
                totalCount: lang === 'es'
                  ? '{{count}} contribuciones en el último año'
                  : '{{count}} contributions in the last year',
              }}
            />
          </div>

          {/* ── Bloque C: Lenguajes (dentro del mismo card en desktop) ── */}
          <div className="mt-4 pt-5 border-t border-border">
            <p className="font-syne text-[10px] uppercase tracking-[0.18em] text-muted mb-4">
              {lang === 'es' ? 'Lenguajes en repos públicos' : 'Languages in public repos'}
            </p>

            {!data && !error && (
              <div className="flex flex-col gap-3">
                {[70, 50, 35, 20, 10].map((w, i) => (
                  <SkeletonBlock key={i} className="h-5" style={{ width: `${w}%` }} />
                ))}
              </div>
            )}

            {data?.languages.map((l) => (
              <div key={l.name} className="mb-3 last:mb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-2 font-syne text-[11px] text-text">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: getLangColor(l.name) }}
                    />
                    {l.name}
                  </span>
                  <span className="font-syne text-[11px] text-muted">{l.percent}%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${l.percent}%`, backgroundColor: getLangColor(l.name) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
