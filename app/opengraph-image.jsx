import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Nicolás Videla Petito — Desarrollador Web'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#f8f7f4',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top: monogram + location */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* NP monogram */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 52,
              height: 52,
              background: '#047857',
              borderRadius: 12,
              color: '#f8f7f4',
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            NP
          </div>
          {/* Location pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: '#1c191708',
              border: '1px solid #1c191718',
              borderRadius: 100,
              padding: '8px 16px',
              fontSize: 13,
              color: '#6b6560',
              letterSpacing: '0.04em',
            }}
          >
            Mar del Plata, Argentina
          </div>
        </div>

        {/* Center: main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <div style={{ width: 32, height: 2, background: '#047857' }} />
            <span
              style={{
                fontSize: 12,
                color: '#047857',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Desarrollador Web
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#1c1917',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Nicolás Videla Petito
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 22,
              color: '#6b6560',
              fontWeight: 400,
              maxWidth: 680,
              lineHeight: 1.4,
            }}
          >
            Construyo productos digitales que resuelven problemas reales.
          </div>
        </div>

        {/* Bottom: stack + url */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Tech stack */}
          <div style={{ display: 'flex', gap: 8 }}>
            {['React', 'Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'].map((tech) => (
              <div
                key={tech}
                style={{
                  display: 'flex',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#1c1917',
                  background: 'white',
                  border: '1px solid #e5e2de',
                  borderRadius: 100,
                  padding: '6px 14px',
                  letterSpacing: '0.02em',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          {/* URL */}
          <div
            style={{
              fontSize: 13,
              color: '#6b6560',
              letterSpacing: '0.03em',
            }}
          >
            nicolasvidela.dev
          </div>
        </div>

        {/* Decorative accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 4,
            background: '#047857',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
