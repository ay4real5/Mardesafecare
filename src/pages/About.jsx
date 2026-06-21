import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Shield, Award, Users, CheckCircle, ArrowRight, Target, Eye } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    desc: 'We treat every individual as family — with kindness, empathy and genuine care.',
  },
  {
    icon: Shield,
    title: 'Dignity & Respect',
    desc: 'We uphold the rights, privacy and preferences of every person we support.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We continually strive to raise our standards, investing in training and quality.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'We work hand-in-hand with families, health professionals and communities.',
  },
]

const team = [
  {
    name: 'Registered Manager',
    role: 'Operations Lead',
    desc: 'Our registered manager brings over 15 years of care experience and leads our team with a passion for quality and compliance.',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  },
  {
    name: 'Care Coordinators',
    role: 'Scheduling & Support',
    desc: 'Our coordinators work tirelessly behind the scenes to ensure every care visit is matched perfectly to client needs.',
    img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
  },
  {
    name: 'Clinical Lead',
    role: 'Nursing & Complex Care',
    desc: 'A qualified nurse overseeing all clinical care plans, ensuring the highest standards of medical support at home.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  },
]

const milestones = [
  { year: '2014', event: 'Marde Safe Care founded in Middleton, Manchester' },
  { year: '2016', event: 'Achieved CQC registration and first "Good" rating' },
  { year: '2018', event: 'Expanded to supported living services' },
  { year: '2020', event: 'Launched complex care and clinical support services' },
  { year: '2022', event: 'Grew to 150+ care staff serving 500+ clients' },
  { year: '2024', event: 'Awarded Outstanding in Caring by CQC inspection' },
]

export default function About() {
  return (
    <div className="pt-[88px]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 to-teal-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-teal-300 font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Who We Are</h1>
            <p className="text-teal-100 text-lg leading-relaxed">
              Marde Safe Care is a family-founded, CQC-registered care provider based in Middleton, Greater Manchester. We are passionate about enabling people to live well at home — with the dignity, independence and support they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                  alt="Care team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-teal-100">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 rounded-full p-2">
                    <Award size={20} className="text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">CQC Rated</p>
                    <p className="font-bold text-gray-800">Outstanding</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="section-title mt-2">Founded on a Belief That Care Matters</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Marde Safe Care was established with a simple but powerful belief: that every person, regardless of age or ability, deserves compassionate, professional care that truly makes a difference to their life.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Based at Brulimar House on Jubilee Road in Middleton, we serve clients across Greater Manchester. Our roots in the local community mean we understand the people we care for — their needs, their culture, and what home truly means to them.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mb-6">
                <p className="text-sm font-medium text-gray-700">
                  <span className="text-teal-700 font-bold">Registered office:</span> Brulimar House, Jubilee Road, Middleton, Manchester, M24 2LX
                </p>
                <p className="text-sm text-gray-600 mt-1">Company Status: <span className="text-green-600 font-semibold">Active</span></p>
              </div>
              <ul className="space-y-2">
                {[
                  'Regulated by the Care Quality Commission (CQC)',
                  'Registered in England and Wales',
                  'Local to Greater Manchester — community-focused',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-teal-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card border border-teal-100">
              <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Target size={22} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To deliver high-quality, compassionate and person-centred care that empowers individuals to live safely and independently in their own homes — treating every client as a valued member of our extended family.
              </p>
            </div>
            <div className="card border border-teal-100">
              <div className="bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Eye size={22} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To be the most trusted and outstanding care provider in Greater Manchester — known for excellence, innovation and our unwavering commitment to the wellbeing of everyone we support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Values</span>
            <h2 className="section-title mt-2">The Principles That Guide Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 100} type="up">
              <div className="card text-center border border-teal-50 hover:border-teal-200">
                <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="section-title mt-2">A Decade of Care</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-200" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 relative">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-md">
                    {year.slice(2)}
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-4 flex-1 border border-teal-100">
                    <span className="text-teal-600 font-semibold text-sm">{year}</span>
                    <p className="text-gray-700 mt-1">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="section-title mt-2">The People Behind Our Care</h2>
            <p className="section-subtitle mx-auto">Our team of skilled professionals are the heart of Marde Safe Care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(({ name, role, desc, img }, i) => (
              <AnimatedSection key={name} delay={i * 120} type="up">
              <div className="card text-center border border-gray-100">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-teal-100">
                  <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
                <p className="text-teal-600 text-sm font-medium mb-3">{role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Care Family</h2>
          <p className="text-teal-100 text-lg mb-8">Whether you're looking for care or a rewarding career in care, we'd love to hear from you.</p>
          <Link to="/contact" className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}
