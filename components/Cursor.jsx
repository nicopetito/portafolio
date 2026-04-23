'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setMounted(true)

    let rafId
    let tx = -200, ty = -200
    let cx = -200, cy = -200

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`
      }
    }

    const onMouseOver = (e) => {
      const isInteractive = !!e.target.closest('a, button, [role="button"], input, textarea, select')
      dotRef.current?.setAttribute('data-hover', isInteractive)
      ringRef.current?.setAttribute('data-hover', isInteractive)
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      cx = lerp(cx, tx, 0.12)
      cy = lerp(cy, ty, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Dot — snaps instantly, hides on hover */}
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      />
      {/* Ring — lerp follows, scales on hover */}
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-accent/40"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
