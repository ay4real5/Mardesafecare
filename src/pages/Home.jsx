import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart, Shield, Clock, Users, Star, ArrowRight,
  CheckCircle, Phone, Home as HomeIcon, Brain,
  Stethoscope, Coffee, Award, ChevronRight, ChevronDown, Plus, Minus
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import StatCounter from '../components/StatCounter'

const services = [
  {
    icon: HomeIcon,
    title: 'Domiciliary Home Care',
    desc: 'Personalised support in the comfort of your own home, tailored to your daily needs and routines.',
    color: 'teal',
  },
  {
    icon: Heart,
    title: 'Live-in Care',
    desc: 'Round-the-clock companionship and care from a dedicated live-in carer, giving you peace of mind.',
    color: 'blue',
  },
  {
    icon: Brain,
    title: 'Dementia Care',
    desc: 'Specialist, empathetic care for those living with dementia — preserving dignity and quality of life.',
    color: 'purple',
  },
  {
    icon: Stethoscope,
    title: 'Complex Care',
    desc: 'Expert nursing and clinical care for individuals with complex medical conditions at home.',
    color: 'rose',
  },
  {
    icon: Users,
    title: 'Supported Living',
    desc: 'Supporting adults with disabilities to live independently in their own home or shared settings.',
    color: 'amber',
  },
  {
    icon: Coffee,
    title: 'Respite Care',
    desc: 'Giving family carers a well-deserved break while ensuring your loved ones receive the best care.',
    color: 'green',
  },
]

const colorMap = {
  teal: 'bg-teal-50 text-teal-600',
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  rose: 'bg-rose-50 text-rose-600',
  amber: 'bg-amber-50 text-amber-600',
  green: 'bg-green-50 text-green-600',
}

const stats = [
  { value: '500+', label: 'Clients Cared For' },
  { value: '10+', label: 'Years Experience' },
  { value: '150+', label: 'Trained Carers' },
  { value: '24/7', label: 'Support Available' },
]

const testimonials = [
  {
    name: 'Margaret T.',
    role: 'Family Member',
    text: 'Marde Safe Care has been a godsend for our family. The carers are professional, warm and truly care about my mother\'s wellbeing. Highly recommend.',
    stars: 5,
  },
  {
    name: 'David L.',
    role: 'Client',
    text: 'I have been a client for over two years. The care I receive allows me to stay in my own home with dignity and independence. Outstanding service.',
    stars: 5,
  },
  {
    name: 'Susan M.',
    role: 'Family Member',
    text: 'From the very first call, we felt listened to and supported. The team at Marde Safe Care genuinely go above and beyond every single day.',
    stars: 5,
  },
]

const whyUs = [
  'CQC Registered & Regulated',
  'Fully trained, DBS-checked carers',
  'Personalised care plans',
  '24/7 on-call support',
  'Regular care reviews',
  'Local to Greater Manchester',
]

const faqs = [
  {
    q: 'How quickly can care be arranged?',
    a: 'In most cases we can arrange care within 24–48 hours of an initial assessment. For urgent situations, please call our emergency line and we will do our very best to help immediately.',
  },
  {
    q: 'Are your carers fully trained and DBS checked?',
    a: 'Yes. Every carer undergoes enhanced DBS (Disclosure and Barring Service) checks, mandatory care training, first aid, and regular refresher courses. We are regulated by the Care Quality Commission (CQC).',
  },
  {
    q: 'Can I choose my own carer?',
    a: 'Absolutely. We carefully match carers to clients based on personality, interests and care needs. If at any point you would prefer a change, simply let us know and we will accommodate you.',
  },
  {
    q: 'Is the care funded by the local authority or self-funded?',
    a: 'We support both local authority funded clients and self-funders. We can also help you navigate NHS Continuing Healthcare funding. Contact us and we will guide you through the options.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We are based in Middleton and cover all of Greater Manchester including Rochdale, Oldham, Bury, Bolton, Salford, Manchester city and surrounding areas.',
  },
  {
    q: 'How is my care plan created?',
    a: 'A qualified care assessor will visit you at home for a free needs assessment. Together we build a personalised care plan around your goals, preferences and medical needs — reviewed regularly as things change.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base pr-4">{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-600'}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="pt-[88px]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-600" />
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="animate-fade-slide-up inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
              <Award size={14} aria-hidden="true" />
              CQC Registered Care Provider — Middleton, Manchester
            </div>
            <h1 className="animate-fade-slide-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Care That Feels
              <span className="block text-teal-300">Like Family</span>
            </h1>
            <p className="animate-fade-slide-up delay-200 text-lg md:text-xl text-teal-100 leading-relaxed mb-8 max-w-xl">
              Marde Safe Care delivers compassionate, high-quality home care services across Greater Manchester — empowering you to live well, safely and independently.
            </p>
            <div className="animate-fade-slide-up delay-300 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-teal-700 hover:bg-teal-50 active:scale-95 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-base"
              >
                Start Your Care Journey <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/50 text-white hover:bg-white/10 active:scale-95 font-semibold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center gap-2 text-base"
              >
                View Our Services
              </Link>
            </div>

            <div className="animate-fade-slide-up delay-400 flex flex-wrap gap-6 mt-12">
              {[
                { icon: Shield, text: 'CQC Regulated' },
                { icon: Clock, text: '24/7 Support' },
                { icon: Heart, text: 'Person-Centred' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-teal-200 text-sm font-medium">
                  <Icon size={16} className="text-teal-300" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating call card */}
        <div className="animate-fade-slide-up delay-500 absolute right-8 bottom-16 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-2xl p-5 max-w-xs ring-1 ring-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-teal-100 p-2 rounded-full animate-pulse-soft">
                <Phone size={18} className="text-teal-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Need care urgently?</p>
                <p className="font-bold text-gray-800">Call us anytime</p>
              </div>
            </div>
            <a href="tel:+441612345678" className="block text-center bg-teal-600 text-white font-semibold py-2.5 rounded-lg hover:bg-teal-700 active:scale-95 transition-all">
              0161 234 5678
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-1">
          <ChevronDown size={20} className="text-white/50" aria-hidden="true" />
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-teal-700 py-3" aria-label="Accreditations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white text-xs font-medium">
            {['CQC Registered & Regulated', 'DBS-Checked Carers', 'Insurance Backed', 'Person-Centred Care', 'Greater Manchester Based'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-teal-300" aria-hidden="true" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white py-14 shadow-sm" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <StatCounter key={label} value={value} label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h2 id="services-heading" className="section-title mt-2">Our Care Services</h2>
            <p className="section-subtitle mx-auto">
              From daily personal care to complex clinical needs — we provide a full range of regulated home care services tailored to each individual.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, color }, i) => (
              <AnimatedSection key={title} delay={i * 80} type="up">
                <div className="card group cursor-pointer border border-transparent hover:border-teal-100 h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${colorMap[color]}`}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link to="/services" className="text-teal-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                    Learn more <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection type="left">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h2 id="why-heading" className="section-title mt-2">Trusted Care You Can Rely On</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                At Marde Safe Care, we believe everyone deserves to live with dignity and independence. Our dedicated team of trained professionals work closely with clients and families to create bespoke care plans that truly reflect each person's needs, preferences and goals.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-700">
                    <CheckCircle size={18} className="text-teal-500 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary">
                About Our Team <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </AnimatedSection>
            <AnimatedSection type="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                    alt="A carer sitting with an elderly client at home"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
                  <div className="text-3xl font-extrabold">10+</div>
                  <div className="text-sm text-teal-100 mt-1">Years delivering outstanding care</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-teal-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 id="testimonials-heading" className="section-title mt-2">What Families Say</h2>
            <p className="section-subtitle mx-auto">
              The trust our clients and families place in us means everything. Here's what they have to say.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, stars }, i) => (
              <AnimatedSection key={name} delay={i * 120} type="up">
                <blockquote className="card h-full flex flex-col">
                  <div className="flex gap-1 mb-4" aria-label={`${stars} out of 5 stars`}>
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic flex-1">"{text}"</p>
                  <footer className="border-t pt-4">
                    <cite className="not-italic">
                      <p className="font-semibold text-gray-800">{name}</p>
                      <p className="text-xs text-gray-400">{role}</p>
                    </cite>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">FAQs</span>
            <h2 id="faq-heading" className="section-title mt-2">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">Everything you need to know before getting started.</p>
          </AnimatedSection>
          <AnimatedSection className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </AnimatedSection>
          <AnimatedSection className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Still have questions? We're happy to help.</p>
            <Link to="/contact" className="btn-primary">
              Contact Our Team <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-600" aria-label="Call to action">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Care Journey?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Contact us today for a free, no-obligation consultation. We're here to help — every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-white text-teal-700 hover:bg-teal-50 active:scale-95 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg inline-flex items-center gap-2">
              Contact Us Today <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="tel:+441612345678" className="border-2 border-white/60 text-white hover:bg-white/10 active:scale-95 font-semibold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center gap-2">
              <Phone size={18} aria-hidden="true" /> Call 0161 234 5678
            </a>
          </div>
        </AnimatedSection>
      </section>

    </div>
  )
}
