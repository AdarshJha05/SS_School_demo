'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, ChevronRight, Download, Calendar, GraduationCap, Cpu, ClipboardCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const stages = [
  {
    id: 'pre-primary',
    label: 'Pre-Primary',
    range: 'Nursery – UKG',
    age: '3–6 years',
    color: 'bg-green-500',
    subjects: ['Language Development (Hindi & English)', 'Number Concepts', 'Environmental Awareness', 'Arts & Craft', 'Physical Education', 'Rhymes & Stories'],
    method: 'Play-based, activity-driven learning that builds curiosity, motor skills and foundational literacy.',
  },
  {
    id: 'primary',
    label: 'Primary',
    range: 'Class 1 – 5',
    age: '6–11 years',
    color: 'bg-blue-500',
    subjects: ['Mathematics', 'English', 'Hindi', 'Environmental Studies (EVS)', 'Computer Basics', 'General Knowledge', 'Arts & Sports'],
    method: 'Activity-based pedagogy with regular assessments to build strong academic fundamentals.',
  },
  {
    id: 'middle',
    label: 'Middle School',
    range: 'Class 6 – 8',
    age: '11–14 years',
    color: 'bg-purple-500',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi', 'Sanskrit (Optional)', 'Computer Science'],
    method: 'Subject specialization begins. Lab work, projects and seminars complement classroom learning.',
  },
  {
    id: 'secondary',
    label: 'Secondary',
    range: 'Class 9 – 10',
    age: '14–16 years',
    color: 'bg-school-maroon',
    subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'English (Core)', 'Hindi (Course A)', 'IT/Computer Applications'],
    method: 'CBSE board exam preparation with focus on concept clarity, mock tests and exam strategies.',
  },
]

const calendar = [
  { month: 'April', event: 'New Academic Session Begins', type: 'academic' },
  { month: 'June', event: 'Unit Test 1 & Parent-Teacher Meeting', type: 'exam' },
  { month: 'August', event: 'Annual Sports Day (Demo date)', type: 'event' },
  { month: 'October', event: 'Half-Yearly Examinations', type: 'exam' },
  { month: 'December', event: 'Annual Function & Prize Distribution', type: 'event' },
  { month: 'February', event: 'Pre-Board Examinations (Classes 9 & 10)', type: 'exam' },
]

const downloads = [
  { title: 'Class Schedule 2026-27', icon: Calendar, size: 'PDF, ~120 KB' },
  { title: 'Academic Calendar 2026-27', icon: BookOpen, size: 'PDF, ~80 KB' },
  { title: 'Syllabus Booklet 2026-27', icon: GraduationCap, size: 'PDF, ~2.4 MB' },
]

export default function AcademicsPage() {
  const [active, setActive] = useState('pre-primary')
  const activeStage = stages.find(s => s.id === active) ?? stages[0]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-school-navy text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_50%,#F5B800,transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="flex justify-center text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-white">Academics</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4">Academics</h1>
            <div className="h-1 w-24 bg-school-yellow mx-auto rounded-full mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              A structured, CBSE-aligned curriculum that nurtures critical thinking from Nursery to Class 10.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CBSE badge */}
      <section className="py-8 bg-school-maroon text-white">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <GraduationCap className="h-10 w-10 text-school-yellow flex-shrink-0" />
          <div>
            <span className="font-heading font-bold text-lg">CBSE Affiliated — New Delhi</span>
            <span className="text-white/70 text-sm ml-2">(Affiliation No. [Demo])</span>
          </div>
        </div>
      </section>

      {/* Curriculum Stages */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-4">Curriculum Overview</h2>
          <div className="h-1 w-20 bg-school-yellow mx-auto rounded-full mb-10" />

          {/* Stage selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {stages.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border ${active === s.id ? 'bg-school-navy text-white border-school-navy shadow-lg scale-105' : 'bg-background text-foreground border-border hover:border-school-navy/40'}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <Card className="max-w-3xl mx-auto shadow-xl overflow-hidden">
              <div className={`h-2 ${activeStage.color}`} />
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-2xl font-heading">{activeStage.label} — {activeStage.range}</CardTitle>
                  <span className="text-sm bg-school-yellow/20 text-school-navy dark:text-foreground px-3 py-1 rounded-full border border-school-yellow/30 w-fit">
                    Age: {activeStage.age}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">{activeStage.method}</p>
                <h3 className="font-semibold mb-3">Subjects Covered:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStage.subjects.map((subj) => (
                    <div key={subj} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-school-yellow flex-shrink-0" />
                      {subj}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold">Academic Calendar</h2>
            <span className="text-xs bg-school-yellow/30 text-school-navy dark:text-foreground px-2 py-0.5 rounded border border-school-yellow/40">Demo Data</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {calendar.map((item, i) => (
              <motion.div key={item.month} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card className={`border-l-4 ${item.type === 'exam' ? 'border-l-school-maroon' : 'border-l-school-navy'} hover:shadow-md transition-shadow`}>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-school-yellow/20 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-school-navy dark:text-school-yellow" />
                    </div>
                    <div>
                      <div className="font-bold text-school-navy dark:text-school-yellow text-sm mb-1">{item.month}</div>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">* Dates are indicative demo data. Actual calendar will be shared at the start of the session.</p>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center mb-12">Our Teaching Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Cpu, title: 'Digital Classrooms', desc: 'Smart boards and multimedia content bring lessons to life and increase engagement.' },
              { icon: ClipboardCheck, title: 'Regular Assessments', desc: 'Periodic tests, projects and assignments track progress and identify learning gaps early.' },
              { icon: BookOpen, title: 'Activity-Based Learning', desc: 'Hands-on activities, experiments and field trips make learning experiential and memorable.' },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-school-yellow/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-school-navy dark:text-school-yellow" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-school-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-heading font-bold text-center mb-4">Downloads</h2>
          <p className="text-white/60 text-center text-sm mb-8">Academic resources for parents and students. (Demo placeholder files)</p>
          <div className="space-y-4">
            {downloads.map((dl, i) => (
              <motion.div key={dl.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="flex items-center justify-between bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-school-yellow/20 flex items-center justify-center flex-shrink-0">
                      <dl.icon className="h-5 w-5 text-school-yellow" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{dl.title}</div>
                      <div className="text-xs text-white/50">{dl.size} — Demo placeholder</div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 bg-school-yellow text-school-navy font-bold text-xs px-4 py-2 rounded-lg hover:bg-school-yellow/90 transition-colors flex-shrink-0">
                    <Download className="h-3 w-3" /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
