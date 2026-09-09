'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HoverLift({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CounterAnimation({
  value,
  duration = 1.5,
}: {
  value: string
  duration?: number
}) {
  const numericMatch = value.match(/\d+/)
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : null
  const prefix = numericMatch ? value.substring(0, numericMatch.index) : ''
  const suffix = numericMatch ? value.substring(numericMatch.index! + numericMatch[0].length) : value

  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || targetNumber === null) return

    let start = 0
    const stepTime = Math.abs(Math.floor((duration * 1000) / targetNumber))
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= targetNumber) {
        clearInterval(timer)
      }
    }, Math.max(stepTime, 20))

    return () => clearInterval(timer)
  }, [isInView, targetNumber, duration])

  if (targetNumber === null) {
    return <span>{value}</span>
  }

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
