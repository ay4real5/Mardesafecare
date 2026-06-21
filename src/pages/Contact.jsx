import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Registered Office',
    lines: ['Brulimar House, Jubilee Road', 'Middleton, Manchester', 'M24 2LX, United Kingdom'],
    color: 'teal',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['Main: 0161 234 5678', 'Emergency: 0161 234 5679'],
    color: 'blue',
    link: 'tel:+441612345678',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['admin@mardesafecare.com'],
    color: 'purple',
    link: 'mailto:admin@mardesafecare.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon–Fri: 8:00am – 6:00pm', 'Sat: 9:00am – 2:00pm', '24/7 on-call for existing clients'],
    color: 'amber',
  },
]

const colorIcon = {
  teal: 'bg-teal-50 text-teal-600',
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  amber: 'bg-amber-50 text-amber-600',
}

const services = [
  'Domiciliary Home Care',
  'Live-in Care',
  'Dementia & Alzheimer\'s Care',
  'Complex & Clinical Care',
  'Supported Living',
  'Respite Care',
  'General Enquiry',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '', how: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-[88px]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">We're Here to Help</h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              Whether you're enquiring about care for yourself or a loved one, our friendly team is ready to help. Reach out and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, lines, color, link }) => (
              <div key={title} className="card border border-gray-100 hover:border-teal-200">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorIcon[color]}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
                {lines.map((line, i) => (
                  link && i === 0
                    ? <a key={i} href={link} className="block text-sm text-teal-600 hover:underline">{line}</a>
                    : <p key={i} className="text-sm text-gray-500">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <MessageSquare size={20} className="text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
                  <p className="text-sm text-gray-500">We'll respond within 2 business hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-4">
                    Thank you for contacting Marde Safe Care. One of our team members will be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '', how: '' }) }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your phone number"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Service of Interest *</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">How did you hear about us?</label>
                    <select
                      name="how"
                      value={form.how}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">Please select...</option>
                      <option value="gp">GP / Doctor Referral</option>
                      <option value="council">Local Authority / Council</option>
                      <option value="search">Google / Online Search</option>
                      <option value="word">Word of Mouth</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your care needs, timeframes, or any questions you have..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <p className="text-xs text-gray-400">
                    By submitting this form, you agree to our Privacy Policy. Your information is used solely to respond to your enquiry.
                  </p>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Map + extra info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Us</h2>
                <p className="text-gray-500 text-sm mb-4">
                  We're based at Brulimar House in Middleton, Greater Manchester — conveniently located and accessible by public transport.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-72">
                <iframe
                  title="Marde Safe Care Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9453.912936478636!2d-2.2027!3d53.5562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1b1a2c1e6f5%3A0x3e0b9b3d3e3b3e3b!2sMiddleton%2C%20Manchester!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-3">Registered Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Brulimar House</strong><br />
                  Jubilee Road<br />
                  Middleton<br />
                  Manchester, M24 2LX<br />
                  United Kingdom
                </p>
                <div className="mt-4 pt-4 border-t border-teal-200">
                  <p className="text-xs text-teal-700 font-medium">Company Status: <span className="text-green-600 font-bold">Active</span></p>
                  <p className="text-xs text-gray-400 mt-1">Registered in England & Wales · CQC Regulated</p>
                </div>
              </div>

              <div className="bg-gray-800 text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-500 p-2 rounded-lg">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">24/7 Emergency Care Line</p>
                    <p className="font-bold text-lg">0161 234 5679</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  For urgent care matters outside office hours, our on-call team is available around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
