'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
}

type DeptType = 'all' | 'admin' | 'primary' | 'middle' | 'secondary'

interface FacultyMember {
  name: string
  role: string
  subject: string
  qual: string
  exp: number
  dept: string
  initials: string
  color: string
  featured?: boolean
}

const faculty: FacultyMember[] = [
  { name: 'Abhimanyu Kumar Singh', role: 'Principal', subject: 'Administration', qual: 'M.Ed, M.A. English', exp: 20, dept: 'admin', initials: 'AS', color: 'bg-school-navy', featured: true },
  { name: '[Demo] Priya Sharma', role: 'Senior Teacher', subject: 'Mathematics', qual: 'M.Sc Mathematics, B.Ed', exp: 12, dept: 'secondary', initials: 'PS', color: 'bg-school-maroon' },
  { name: '[Demo] Anjali Singh', role: 'Teacher', subject: 'Science', qual: 'M.Sc Physics, B.Ed', exp: 8, dept: 'middle', initials: 'AS', color: 'bg-purple-700' },
  { name: '[Demo] Suresh Yadav', role: 'Teacher', subject: 'Hindi', qual: 'M.A. Hindi, B.Ed', exp: 10, dept: 'primary', initials: 'SY', color: 'bg-green-700' },
  { name: '[Demo] Meena Gupta', role: 'Teacher', subject: 'English', qual: 'M.A. English, B.Ed', exp: 6, dept: 'middle', initials: 'MG', color: 'bg-blue-700' },
  { name: '[Demo] Vivek Tiwari', role: 'Teacher', subject: 'Social Science', qual: 'M.A. History, B.Ed', exp: 9, dept: 'secondary', initials: 'VT', color: 'bg-orange-700' },
  { name: '[Demo] Sunita Devi', role: 'Teacher', subject: 'Pre-Primary', qual: 'D.Ed, Certificate in Early Childhood', exp: 7, dept: 'primary', initials: 'SD', color: 'bg-pink-700' },
  { name: '[Demo] Arun Mishra', role: 'Teacher', subject: 'Computer Science', qual: 'MCA, B.Ed', exp: 5, dept: 'secondary', initials: 'AM', color: 'bg-teal-700' },
  { name: '[Demo] Kavita Pandey', role: 'Teacher', subject: 'Art & Craft', qual: 'B.F.A, Diploma in Education', exp: 4, dept: 'primary', initials: 'KP', color: 'bg-red-700' },
]

const deptFilters: { id: DeptType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'admin', label: 'Administration' },
  { id: 'primary', label: 'Primary' },
  { id: 'middle', label: 'Middle School' },
  { id: 'secondary', label: 'Secondary' },
]

export default function FacultyPage() {
  const [activeDept, setActiveDept] = useState<DeptType>('all')

  const principal = faculty.find(f => f.featured)
  const others = faculty.filter(f => !f.featured && (activeDept === 'all' || f.dept === activeDept))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-school-navy text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="flex justify-center text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-white">Faculty</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4">Our Faculty</h1>
            <div className="h-1 w-24 bg-school-yellow mx-auto rounded-full mb-6" />
            <p className="text-white/80 max-w-xl mx-auto">
              Meet the dedicated educators who inspire, guide and nurture every student at S.S. Public School.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Demo disclaimer */}
          <div className="text-center mb-10 text-sm text-muted-foreground bg-school-yellow/10 border border-school-yellow/30 rounded-xl py-3 px-4 max-w-xl mx-auto">
            ⚠ All names marked [Demo] are placeholder data. Actual faculty details will be updated for production.
          </div>

          {/* Principal card */}
          {principal && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl mx-auto">
              <Card className="border-2 border-school-yellow shadow-xl overflow-hidden">
                <div className="h-2 bg-school-yellow" />
                <CardContent className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full border-4 border-school-yellow overflow-hidden relative shadow-lg">
                      <Image src="/images/principal.jpeg" alt={principal.name} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="inline-block bg-school-yellow/20 text-school-navy dark:text-foreground text-xs font-bold px-3 py-1 rounded-full border border-school-yellow/40 mb-3">
                      Principal
                    </div>
                    <h2 className="font-heading font-bold text-xl mb-1">{principal.name}</h2>
                    <p className="text-muted-foreground text-sm mb-2">{principal.qual}</p>
                    <p className="text-school-maroon font-semibold text-sm">{principal.exp}+ years of experience</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {deptFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveDept(f.id)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all border ${activeDept === f.id ? 'bg-school-maroon text-white border-school-maroon shadow' : 'bg-background text-foreground border-border hover:border-school-maroon/40'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Teacher Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((teacher, i) => (
              <motion.div key={teacher.name} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${teacher.color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow`}>
                      {teacher.initials}
                    </div>
                    <h3 className="font-heading font-bold text-base mb-1">{teacher.name}</h3>
                    <div className="inline-block bg-school-yellow/20 text-school-navy dark:text-foreground text-xs px-2 py-0.5 rounded-full border border-school-yellow/30 mb-3">
                      {teacher.subject}
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{teacher.qual}</p>
                    <p className="text-xs font-semibold text-school-maroon">{teacher.exp} yrs experience</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {others.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No faculty found in this department.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
