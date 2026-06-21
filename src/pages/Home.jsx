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

const colorBar = {
  teal: 'bg-teal-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  rose: 'bg-rose-500',
  amber: 'bg-amber-500',
  green: 'bg-green-500',
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
    <div className="pt-[90px]">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient" aria-label="Hero">
        {/* Background photo */}
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80"
          alt="" aria-hidden="true" loading="eager" fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        {/* Decorative shapes */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="animate-fade-slide-up inline-flex items-center gap-2 glass text-white text-xs font-semibold px-4 py-2 rounded-full mb-7 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
              CQC Registered — Middleton, Manchester
            </div>
            <h1 className="animate-fade-slide-up delay-100 text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
              Care That<br />
              <span className="text-teal-300">Feels Like</span><br />
              Family
            </h1>
            <p className="animate-fade-slide-up delay-200 text-lg text-teal-100/90 leading-relaxed mb-9 max-w-lg">
              Professional, compassionate home care across Greater Manchester — tailored to you, delivered with heart.
            </p>
            <div className="animate-fade-slide-up delay-300 flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="btn-white text-base">
                Start Your Journey <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/services" className="glass text-white hover:bg-white/20 active:scale-[0.97] font-semibold px-7 py-4 rounded-xl transition-all duration-200 inline-flex items-center gap-2 text-base">
                Our Services
              </Link>
            </div>
            <div className="animate-fade-slide-up delay-400 flex flex-wrap gap-5">
              {[
                { icon: Shield, text: 'CQC Regulated' },
                { icon: Clock, text: '24/7 On-Call' },
                { icon: Heart, text: 'Person-Centred' },
                { icon: Award, text: 'DBS Checked' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-teal-200 text-sm font-medium">
                  <Icon size={15} className="text-teal-400" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating cards */}
          <div className="animate-fade-slide-up delay-300 hidden lg:flex flex-col gap-4 items-end">
            {/* Main image card */}
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 animate-float">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                alt="Carer with client"
                loading="eager"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900/80 to-transparent p-5">
                <p className="text-white font-semibold">Trusted by 500+ families</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />)}
                  <span className="text-teal-200 text-xs ml-2 self-center">5.0 rating</span>
                </div>
              </div>
            </div>
            {/* Call card */}
            <div className="glass rounded-2xl p-4 w-64 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-teal-400/20 p-2.5 rounded-xl animate-pulse-soft">
                  <Phone size={18} className="text-teal-300" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-teal-200 text-xs">Need care urgently?</p>
                  <p className="text-white font-bold text-sm">Call us anytime</p>
                </div>
              </div>
              <a href="tel:+441612345678" className="block text-center bg-white text-teal-700 font-bold py-2.5 rounded-xl hover:bg-teal-50 active:scale-[0.97] transition-all text-sm">
                0161 234 5678
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center">
          <ChevronDown size={22} className="text-white/40" aria-hidden="true" />
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="relative bg-white" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 -mt-8 relative z-10">
            {stats.map(({ value, label }, i) => (
              <div key={label} className={`bg-white border border-gray-100 p-8 text-center shadow-xl first:rounded-l-2xl last:rounded-r-2xl ${i === 0 ? 'rounded-l-2xl' : ''} ${i === stats.length - 1 ? 'rounded-r-2xl' : ''}`}>
                <StatCounter value={value} label={label} />
              </div>
            ))}
          </div>
        </div>
        {/* Trust bar */}
        <div className="bg-gray-50 border-t border-gray-100 mt-6 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-500 text-xs font-medium">
              {['CQC Registered & Regulated', 'DBS-Checked Carers', 'Insurance Backed', 'Person-Centred Care', 'Greater Manchester Based'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle size={13} className="text-teal-500" aria-hidden="true" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-mesh" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="badge mb-4">What We Offer</span>
            <h2 id="services-heading" className="section-title">Our Care Services</h2>
            <p className="section-subtitle mx-auto mt-2">
              From daily personal care to complex clinical needs — a full range of regulated services tailored to each individual.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, color }, i) => (
              <AnimatedSection key={title} delay={i * 80} type="up">
                <div className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                  <div className={`h-1.5 w-full ${colorBar[color]}`} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${colorMap[color]}`}>
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                    <Link to="/services" className="text-teal-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ChevronRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/services" className="btn-primary px-8 py-3.5 text-base">
              View All Services <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-white overflow-hidden" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection type="left">
              <span className="badge mb-5">Why Choose Us</span>
              <h2 id="why-heading" className="section-title">Trusted Care You Can Rely On</h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                At MardesafeCare, we believe everyone deserves to live with dignity and independence. Our dedicated team work closely with clients and families to create bespoke care plans — reviewed regularly as your needs evolve.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-xl px-4 py-3">
                    <CheckCircle size={18} className="text-teal-500 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary px-8 py-3.5 text-base">
                Meet Our Team <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </AnimatedSection>
            <AnimatedSection type="right">
              <div className="relative">
                {/* Decorative blob */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-100 rounded-full -z-10" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-50 rounded-full -z-10" />
                <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] ring-4 ring-teal-50">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
                    alt="A carer sitting with an elderly client at home"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl p-5 shadow-2xl">
                  <div className="text-4xl font-extrabold tracking-tight">10+</div>
                  <div className="text-teal-200 text-xs mt-0.5 font-medium">Years of outstanding care</div>
                </div>
                <div className="absolute top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-xs font-bold text-gray-800">500+ happy clients</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-gradient-to-br from-teal-900 to-teal-800 relative overflow-hidden" aria-labelledby="testimonials-heading">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-800/60 px-3 py-1.5 rounded-full border border-teal-700 mb-4">Testimonials</span>
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What Families Say</h2>
            <p className="text-teal-300 text-lg max-w-2xl mx-auto">The trust our clients and families place in us means everything.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, stars }, i) => (
              <AnimatedSection key={name} delay={i * 120} type="up">
                <blockquote className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7 h-full flex flex-col hover:bg-white/15 transition-colors">
                  <div className="flex gap-1 mb-5" aria-label={`${stars} out of 5 stars`}>
                    {[...Array(stars)].map((_, i) => (
                      <Star key={i} size={15} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 italic flex-1">"{text}"</p>
                  <footer className="flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {name[0]}
                    </div>
                    <cite className="not-italic">
                      <p className="font-semibold text-white text-sm">{name}</p>
                      <p className="text-teal-300 text-xs">{role}</p>
                    </cite>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="badge mb-4">FAQs</span>
            <h2 id="faq-heading" className="section-title">Common Questions</h2>
            <p className="section-subtitle mx-auto mt-2">Everything you need to know before getting started.</p>
          </AnimatedSection>
          <AnimatedSection className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </AnimatedSection>
          <AnimatedSection className="text-center mt-10">
            <p className="text-gray-400 text-sm mb-4">Still have questions? We're happy to help.</p>
            <Link to="/contact" className="btn-primary px-8 py-3.5">
              Contact Our Team <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 relative overflow-hidden" aria-label="Call to action">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=50")', backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />
        <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300 bg-teal-800/60 px-3 py-1.5 rounded-full border border-teal-700 mb-6">Free Consultation</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
            Ready to Begin Your<br />Care Journey?
          </h2>
          <p className="text-teal-100 text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a free, no-obligation consultation. We're here to help — every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-white text-base px-9 py-4">
              Contact Us Today <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="tel:+441612345678" className="glass text-white hover:bg-white/20 active:scale-[0.97] font-semibold px-9 py-4 rounded-xl transition-all duration-200 inline-flex items-center gap-2 text-base">
              <Phone size={18} aria-hidden="true" /> 0161 234 5678
            </a>
          </div>
        </AnimatedSection>
      </section>

    </div>
  )
}
