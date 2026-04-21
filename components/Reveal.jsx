'use client'
import { motion } from 'framer-motion'

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

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
