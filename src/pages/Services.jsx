import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home, Heart, Brain, Stethoscope, Users, Coffee,
  CheckCircle, ArrowRight, Phone, Clock, Shield
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const services = [
  {
    icon: Home,
    title: 'Domiciliary Home Care',
    shortDesc: 'Personal care and daily support in the comfort of your own home.',
    fullDesc: 'Our domiciliary care service provides flexible, personalised support to help you maintain your independence at home. Whether you need help with personal hygiene, meal preparation, medication reminders or light housekeeping, our trained carers will create a routine that fits your lifestyle.',
    includes: [
      'Personal hygiene & dressing',
      'Meal preparation & nutrition',
      'Medication management',
      'Light housekeeping',
      'Shopping & errands',
      'Companionship & social support',
    ],
    color: 'teal',
    bg: 'bg-teal-600',
  },
  {
    icon: Heart,
    title: 'Live-in Care',
    shortDesc: 'A dedicated carer living with you to provide round-the-clock support.',
    fullDesc: 'Live-in care offers the highest level of one-to-one support, allowing you to remain in your own home with a dedicated carer available 24 hours a day. Ideal for those who need continuous assistance but wish to avoid residential care.',
    includes: [
      'Overnight support & safety',
      'Full personal care',
      'Household management',
      'Companionship & activities',
      'Healthcare appointments',
      'Family liaison & updates',
    ],
    color: 'blue',
    bg: 'bg-blue-600',
  },
  {
    icon: Brain,
    title: 'Dementia & Alzheimer\'s Care',
    shortDesc: 'Specialist care preserving dignity and quality of life for those with dementia.',
    fullDesc: 'Our dementia-trained carers provide patient, compassionate support that focuses on maintaining familiar routines and environments. We work closely with families to create care plans that address the unique challenges of dementia at every stage.',
    includes: [
      'Specialist dementia training',
      'Routine and familiarity focus',
      'Memory stimulation activities',
      'Safe wandering management',
      'Family education & support',
      'End-of-life dementia care',
    ],
    color: 'purple',
    bg: 'bg-purple-600',
  },
  {
    icon: Stethoscope,
    title: 'Complex & Clinical Care',
    shortDesc: 'Expert nursing-led care for those with complex medical conditions.',
    fullDesc: 'For clients with complex medical needs, our clinical care team delivers nurse-led support in the home. This includes management of chronic conditions, post-hospital discharge care, wound care, catheter care and more — all within the safety and comfort of your home.',
    includes: [
      'Wound care & dressings',
      'Catheter & stoma care',
      'PEG feeding support',
      'Ventilator & tracheostomy care',
      'Post-operative recovery',
      'Chronic condition management',
    ],
    color: 'rose',
    bg: 'bg-rose-600',
  },
  {
    icon: Users,
    title: 'Supported Living',
    shortDesc: 'Enabling adults with disabilities to live independently with the right support.',
    fullDesc: 'Our supported living service empowers adults with physical disabilities, learning disabilities or mental health needs to live as independently as possible. We provide tailored support packages that promote choice, control and community participation.',
    includes: [
      'Daily living skills support',
      'Community access & participation',
      'Employment & education support',
      'Personal care assistance',
      'Financial & benefits guidance',
      'Independence skill-building',
    ],
    color: 'amber',
    bg: 'bg-amber-600',
  },
  {
    icon: Coffee,
    title: 'Respite Care',
    shortDesc: 'Short-term care giving family carers a well-deserved break.',
    fullDesc: 'Caring for a loved one is rewarding but demanding. Our respite care service gives family carers essential time to rest, knowing their loved one is in safe, professional hands. We offer flexible short-term care packages from a few hours to several weeks.',
    includes: [
      'Flexible hours or full-time cover',
      'Seamless handover with family carers',
      'Full personal care provision',
      'Social and activity engagement',
      'Healthcare monitoring',
      'Tailored to existing routines',
    ],
    color: 'green',
    bg: 'bg-green-600',
  },
]

const colorBorder = {
  teal: 'border-teal-200 hover:border-teal-400',
  blue: 'border-blue-200 hover:border-blue-400',
  purple: 'border-purple-200 hover:border-purple-400',
  rose: 'border-rose-200 hover:border-rose-400',
  amber: 'border-amber-200 hover:border-amber-400',
  green: 'border-green-200 hover:border-green-400',
}

const colorIcon = {
  teal: 'bg-teal-50 text-teal-600',
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  rose: 'bg-rose-50 text-rose-600',
  amber: 'bg-amber-50 text-amber-600',
  green: 'bg-green-50 text-green-600',
}

export default function Services() {
  return (
    <div className="pt-[88px]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-teal-300 font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Comprehensive Care Services</h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              We offer a full spectrum of regulated care services across Greater Manchester — each tailored to the individual and delivered with warmth, expertise and respect.
            </p>
          </div>
          <div className="flex gap-8 mt-10">
            {[
              { icon: Shield, text: 'CQC Regulated' },
              { icon: Clock, text: '24/7 Available' },
              { icon: Heart, text: 'Person-Centred' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-teal-200 text-sm font-medium">
                <Icon size={16} className="text-teal-300" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map(({ icon: Icon, title, shortDesc, fullDesc, includes, color, bg }, idx) => (
            <AnimatedSection key={title} delay={idx * 60} type="up">
            <div className={`bg-white rounded-2xl shadow-md border ${colorBorder[color]} transition-all duration-300 overflow-hidden`}>
              <div className={`flex flex-col lg:flex-row ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${bg} text-white p-8 lg:w-64 xl:w-80 flex flex-col items-center justify-center text-center shrink-0`}>
                  <div className="bg-white/20 rounded-full p-4 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-bold text-xl leading-snug">{title}</h3>
                  <p className="text-white/80 text-sm mt-2">{shortDesc}</p>
                </div>
                <div className="p-8 flex-1">
                  <p className="text-gray-600 leading-relaxed mb-6">{fullDesc}</p>
                  <h4 className="font-semibold text-gray-800 mb-3">What's included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-teal-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
                    Enquire About This Service <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service Is Right for You?</h2>
          <p className="text-teal-100 text-lg mb-8">
            Our care advisors are available 24/7 to help you find the right care solution for your situation — completely free of charge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
              Free Care Consultation <ArrowRight size={18} />
            </Link>
            <a href="tel:+441612345678" className="border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2">
              <Phone size={18} /> 0161 234 5678
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
