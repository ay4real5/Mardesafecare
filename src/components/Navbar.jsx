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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className="bg-teal-700 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:block">Registered & CQC Regulated Care Provider — Middleton, Manchester</span>
          <a href="tel:+441612345678" className="flex items-center gap-1.5 font-medium hover:text-teal-200 transition-colors ml-auto">
            <Phone size={14} />
            0161 234 5678
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-teal-600 rounded-full p-1.5 group-hover:bg-teal-700 transition-colors">
              <Heart size={22} className="text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Marde<span className="text-teal-600">SafeCare</span></span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  location.pathname === to
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" className="ml-3 btn-primary text-sm py-2 px-5">
              Get Care Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border-t border-gray-100 py-4 space-y-1 pb-6">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all ${
                  location.pathname === to
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                {label}
                {location.pathname === to && <span className="w-1.5 h-1.5 rounded-full bg-teal-600" aria-hidden="true" />}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link to="/contact" className="btn-primary w-full justify-center">
                Get Care Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
