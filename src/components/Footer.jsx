import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-teal-600 rounded-full p-1.5">
                <Heart size={20} className="text-white fill-white" />
              </div>
              <span className="text-white font-bold text-lg">Marde<span className="text-teal-400">SafeCare</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Delivering compassionate, person-centred care across Greater Manchester. Regulated by the Care Quality Commission (CQC).
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Our Services' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-teal-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Domiciliary Home Care',
                'Live-in Care',
                'Elderly & Dementia Care',
                'Supported Living',
                'Respite Care',
                'Complex Care',
              ].map((s) => (
                <li key={s} className="hover:text-teal-400 transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">Brulimar House, Jubilee Road,<br />Middleton, Manchester, M24 2LX</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-teal-400 shrink-0" />
                <a href="tel:+441612345678" className="hover:text-teal-400 transition-colors">0161 234 5678</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-teal-400 shrink-0" />
                <a href="mailto:admin@mardesafecare.com" className="hover:text-teal-400 transition-colors">admin@mardesafecare.com</a>
              </li>
            </ul>
            <div className="mt-5 bg-teal-900/40 border border-teal-800 rounded-lg p-3 text-xs text-teal-300">
              <strong className="block mb-1">24/7 Emergency Line</strong>
              0161 234 5679
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Marde Safe Care Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">CQC Registration</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
