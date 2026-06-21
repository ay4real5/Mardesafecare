import React, { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [dismissed])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+441612345678"
          className="flex-1 bg-teal-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm active:scale-95 transition-transform"
        >
          <Phone size={16} />
          Call 0161 234 5678
        </a>
        <Link
          to="/contact"
          className="flex-1 border-2 border-teal-600 text-teal-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm active:scale-95 transition-transform"
        >
          Free Consultation
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="p-2 text-gray-400 hover:text-gray-600 shrink-0"
          aria-label="Dismiss"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}
