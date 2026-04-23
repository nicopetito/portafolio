'use client'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 36,
  duration = 0.7,
  once = true,
  margin = '-80px',
  className = '',
  style,
  ...rest
}) {
  const MotionTag = motion[as]
  const reduced = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <MotionTag
      initial={!mounted || reduced ? {} : { opacity: 0, y }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
