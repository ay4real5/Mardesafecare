import React from 'react'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

export default function StatCounter({ value, label }) {
  const [ref, inView] = useInView()
  const suffix = value.replace(/[0-9]/g, '')
  const numeric = parseInt(value)
  const count = useCounter(numeric, 1600, inView)

  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl font-extrabold text-teal-600 mb-1 transition-all duration-500 ${inView ? 'animate-count-up' : 'opacity-0'}`}>
        {inView ? `${count}${suffix}` : '0'}
      </div>
      <div className="text-gray-500 text-sm font-medium">{label}</div>
    </div>
  )
}
