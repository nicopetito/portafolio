'use client'
import { STACK } from '@/lib/content'

// Duplicate enough times for seamless loop
const ITEMS = [...STACK, ...STACK, ...STACK, ...STACK]

export default function TechMarquee() {
  return (
    <div
      className="relative overflow-hidden py-4 border-y border-border bg-surface/40"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      {/* Track — duplicated to fill -50% loop */}
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...ITEMS, ...ITEMS].map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-5 font-syne font-semibold text-sm text-muted"
          >
            {tech}
            <span className="text-accent/60 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
