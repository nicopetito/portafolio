'use client'
import { useReducedMotion } from 'framer-motion'
import { STACK } from '@/lib/content'

const ITEMS = [...STACK, ...STACK, ...STACK, ...STACK]

export default function TechMarquee() {
  const reduced = useReducedMotion()

  return (
    <div
      className="relative overflow-hidden py-4 border-y border-border bg-surface/40"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div
        className={`flex whitespace-nowrap hover:[animation-play-state:paused] ${reduced ? '' : 'animate-marquee'}`}
      >
        {[...ITEMS, ...ITEMS].map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-4 font-syne font-semibold text-xs sm:text-sm text-muted"
          >
            {tech}
            <span className="text-accent/60 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
