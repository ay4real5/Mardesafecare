import React from 'react'
import { useInView } from '../hooks/useInView'

export default function AnimatedSection({ children, className = '', delay = 0, type = 'up' }) {
  const [ref, inView] = useInView()

  const base = type === 'up'
    ? 'opacity-0 translate-y-8'
    : type === 'left'
    ? 'opacity-0 -translate-x-8'
    : type === 'right'
    ? 'opacity-0 translate-x-8'
    : 'opacity-0'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0 translate-y-0' : base} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
