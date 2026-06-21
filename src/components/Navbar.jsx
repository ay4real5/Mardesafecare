import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-700 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <span className="hidden sm:flex items-center gap-4 text-teal-100">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />CQC Registered Care Provider</span>
            <span className="text-teal-400">•</span>
            <span>Middleton, Manchester</span>
          </span>
          <a href="tel:+441612345678" className="flex items-center gap-1.5 font-semibold hover:text-teal-200 transition-colors ml-auto tracking-wide">
            <Phone size={13} aria-hidden="true" />
            0161 234 5678
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[62px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0" aria-label="MardesafeCare home">
            <div className="bg-teal-600 rounded-xl p-2 group-hover:bg-teal-700 transition-colors shadow-md shadow-teal-200">
              <Heart size={20} className="text-white fill-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">Marde<span className="text-teal-600">SafeCare</span></span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative px-4 py-2 font-medium text-sm transition-all duration-200 ${
                  location.pathname === to
                    ? 'text-teal-700'
                    : 'text-gray-600 hover:text-teal-700'
                }`}
              >
                {label}
                {location.pathname === to && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-600 rounded-full" aria-hidden="true" />
                )}
              </Link>
            ))}
            <Link to="/contact" className="ml-4 bg-teal-600 hover:bg-teal-700 active:scale-[0.97] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-teal-200/50 hover:shadow-teal-300/60 inline-flex items-center gap-1.5">
              Get Care Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-100 pt-3 pb-5 space-y-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  location.pathname === to
                    ? 'text-teal-700 bg-teal-50 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-teal-700'
                }`}
              >
                {label}
                {location.pathname === to && <span className="w-2 h-2 rounded-full bg-teal-500" aria-hidden="true" />}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                Get Care Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
