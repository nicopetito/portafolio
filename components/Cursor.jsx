'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only show on pointer-fine devices (desktop with mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return
    setMounted(true)

    let rafId
    let tx = -100, ty = -100
    let cx = -100, cy = -100

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx - 4}px, ${ty - 4}px)`
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      cx = lerp(cx, tx, 0.12)
      cy = lerp(cy, ty, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cx - 16}px, ${cy - 16}px)`
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      />
      {/* Ring — lerp follows */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent/40 rounded-full pointer-events-none z-[9998]"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
