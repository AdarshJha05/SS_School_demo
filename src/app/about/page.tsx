'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Heart, Star, Users, ChevronRight, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const timeline = [
  { year: '2008', title: 'School Founded', desc: 'S.S. Public School established in Dhobwal, Baniyapur with a vision for quality education.' },
  { year: '2012', title: 'CBSE Affiliation', desc: 'Received CBSE New Delhi affiliation, marking a major milestone in academic credibility.' },
  { year: '2015', title: 'Smart Classrooms', desc: 'Introduced digital smart boards and interactive learning in all classrooms.' },
  { year: '2018', title: 'Sports Complex', desc: 'Expanded campus with a full sports ground for cricket, football and athletics.' },
  { year: '2022', title: 'Computer Lab', desc: 'State-of-the-art computer lab with 40 systems and internet connectivity.' },
  { year: '2024', title: 'New Academic Block', desc: 'Inaugurated new academic block to accommodate growing student strength.' },
]

const values = [
  { icon: GraduationCap, title: 'Academic Excellence', desc: 'Rigorous curriculum aligned with CBSE standards, fostering critical thinking and curiosity.', color: 'text-school-navy dark:text-school-yellow' },
  { icon: Heart, title: 'Character Building', desc: 'We emphasize moral education, discipline and respect as the foundation of learning.', color: 'text-school-maroon' },
  { icon: Star, title: 'Holistic Development', desc: 'Sports, arts, music and co-curricular activities ensure all-round growth.', color: 'text-school-yellow' },
  { icon: Users, title: 'Community Service', desc: 'Teaching students to contribute to society and develop civic responsibility.', color: 'text-green-600 dark:text-green-400' },
]

const stats = [
  { value: '1500+', label: 'Happy Students' },
  { value: '50+', label: 'Expert Teachers' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '100%', label: 'Board Results (Demo)' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="bg-school-navy text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,#F5B800,transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <nav className="flex justify-center text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4">About S.S. Public School</h1>
            <div className="h-1 w-24 bg-school-yellow mx-auto rounded-full mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Empowering the next generation with quality education and moral values since 2008 in the heart of Dhobwal, Baniyapur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-school-maroon text-white py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="text-3xl sm:text-4xl font-bold text-school-yellow mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  S.S. Public School was founded in 2008 with a singular mission: to provide quality, affordable education to the children of Dhobwal and surrounding areas. Starting with just a handful of classrooms, we have grown into a full-fledged CBSE-affiliated institution serving over 1,500 students.
                </p>
                <p>
                  Our school is located in the heart of Baniyapur, Saran, Bihar, easily accessible from the surrounding villages. We believe every child, regardless of background, deserves access to excellent education.
                </p>
                <p>
                  With a dedicated faculty, modern infrastructure and a nurturing environment, S.S. Public School continues to be the school of choice for families across the region.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-school-yellow/10 border border-school-yellow/30 rounded-xl p-4 text-center">
                  <div className="font-bold text-school-navy dark:text-school-yellow text-lg">CBSE</div>
                  <div className="text-xs text-muted-foreground">Affiliated New Delhi</div>
                </div>
                <div className="bg-school-maroon/10 border border-school-maroon/30 rounded-xl p-4 text-center">
                  <div className="font-bold text-school-maroon text-lg">Nursery–10</div>
                  <div className="text-xs text-muted-foreground">All Classes</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-gradient-to-br from-school-navy to-school-maroon rounded-2xl p-10 text-white text-center">
                <GraduationCap className="h-20 w-20 text-school-yellow mx-auto mb-6" />
                <h3 className="font-heading font-bold text-xl mb-2">Learning with Values</h3>
                <p className="text-white/80">Growing with Confidence</p>
                <div className="mt-6 pt-6 border-t border-white/20 text-sm text-white/60">
                  [Demo] School campus illustration placeholder
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-10">Principal&apos;s Message</h2>
            <Card className="shadow-xl border-t-4 border-t-school-navy">
              <CardContent className="p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-24 h-24 rounded-full bg-school-navy flex items-center justify-center text-white text-3xl font-bold">
                      P
                    </div>
                    <div className="text-center mt-3">
                      <div className="font-bold text-sm">[Demo] Principal Name</div>
                      <div className="text-xs text-muted-foreground">M.Ed, M.A.</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-school-yellow mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      &ldquo;At S.S. Public School, we believe that education is not merely about academic achievement but about shaping compassionate, responsible and capable human beings. Every child who walks through our gates is unique, and we strive to nurture that uniqueness while building a strong foundation for their future.&rdquo;
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic">
                      &ldquo;Our teachers are not just educators—they are mentors and guides who are deeply committed to the well-being and success of every student.&rdquo;
                    </p>
                    <div className="mt-4 inline-block bg-school-yellow/20 text-school-navy dark:text-foreground text-xs px-3 py-1 rounded-full border border-school-yellow/40">
                      ⚠ Demo placeholder — actual principal&apos;s message will be added
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12">Our Journey</h2>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-school-yellow/30 -translate-x-1/2" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`relative flex gap-8 mb-10 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                {/* Mobile: left-aligned, Desktop: alternating */}
                <div className="sm:w-1/2 flex sm:justify-end pl-16 sm:pl-0 sm:pr-8">
                  {i % 2 === 0 ? (
                    <div className="bg-card rounded-xl border shadow-md p-5 max-w-sm w-full">
                      <div className="text-school-maroon font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ) : <div className="hidden sm:block" />}
                </div>
                {/* Dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-school-yellow border-4 border-background shadow" />
                <div className="sm:w-1/2 pl-16 sm:pl-8">
                  {i % 2 !== 0 ? (
                    <div className="bg-card rounded-xl border shadow-md p-5 max-w-sm w-full">
                      <div className="text-school-maroon font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ) : <div className="hidden sm:block" />}
                  {i % 2 === 0 ? (
                    <div className="sm:hidden bg-card rounded-xl border shadow-md p-5">
                      <div className="text-school-maroon font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-4">Our Core Values</h2>
          <div className="h-1 w-20 bg-school-yellow mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div key={val.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-14 h-14 rounded-full bg-school-yellow/20 flex items-center justify-center mx-auto mb-4">
                      <val.icon className={`h-7 w-7 ${val.color}`} />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
