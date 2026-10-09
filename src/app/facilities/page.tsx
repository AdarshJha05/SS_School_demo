'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Monitor, Trophy, Bus, Heart, Utensils, Shield, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
}

const facilities = [
  { icon: BookOpen, title: 'Library', desc: 'A well-stocked library with 5,000+ books, periodicals, and a dedicated reading room for students.', color: 'text-blue-600 dark:text-blue-400' },
  { icon: Monitor, title: 'Computer Lab', desc: 'Modern lab with 40 computers, high-speed internet, and the latest educational software.', color: 'text-teal-600 dark:text-teal-400' },
  { icon: Trophy, title: 'Sports Ground', desc: 'Large ground with cricket pitch, football field, and athletics track. Annual sports events held here.', color: 'text-orange-600 dark:text-orange-400' },
  { icon: Bus, title: 'Safe Transport', desc: 'GPS-tracked school buses covering a 15 km radius. Dedicated routes with trained drivers and attendants.', color: 'text-school-navy dark:text-school-yellow' },
  { icon: Heart, title: 'Medical Room', desc: 'First-aid equipped medical room with a trained staff member available during all school hours.', color: 'text-red-600 dark:text-red-400' },
  { icon: Utensils, title: 'Canteen', desc: 'Hygienic canteen serving nutritious meals and snacks prepared under strict quality standards.', color: 'text-green-600 dark:text-green-400' },
  { icon: Shield, title: 'CCTV & Security', desc: '24×7 CCTV surveillance across campus with a dedicated security guard at the main gate.', color: 'text-school-maroon' },
  { icon: Monitor, title: 'Smart Classrooms', desc: 'All classrooms equipped with digital smart boards for interactive, engaging lessons.', color: 'text-purple-600 dark:text-purple-400' },
]

const routes = [
  { id: 'Route 1', pickup: 'Baniyapur Chowk', time: '7:00 AM', return: '3:30 PM' },
  { id: 'Route 2', pickup: 'Dhobwal Market', time: '6:45 AM', return: '3:15 PM' },
  { id: 'Route 3', pickup: 'Mashrakh Stand', time: '6:30 AM', return: '3:00 PM' },
  { id: 'Route 4', pickup: 'Revelganj Road', time: '7:10 AM', return: '3:45 PM' },
]

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-school-navy text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,#F5B800,transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="flex justify-center text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-white">Facilities</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4">Our Facilities</h1>
            <div className="h-1 w-24 bg-school-yellow mx-auto rounded-full mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              State-of-the-art infrastructure designed to support every aspect of your child&apos;s growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, i) => (
              <motion.div key={fac.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-school-yellow/10 group-hover:bg-school-yellow/20 transition-colors flex items-center justify-center mb-4">
                      <fac.icon className={`h-7 w-7 ${fac.color}`} />
                    </div>
                    <h2 className="font-heading font-bold text-lg mb-2">{fac.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{fac.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bus className="h-8 w-8 text-school-maroon" />
            <h2 className="text-2xl sm:text-3xl font-heading font-bold">Transport Routes</h2>
          </div>
          <p className="text-muted-foreground text-center mb-2">GPS-tracked buses for safe and reliable commuting.</p>
          <p className="text-center text-xs text-muted-foreground mb-10">
            ⚠ Demo data — actual routes and timings will be confirmed at time of admission.
          </p>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-4 max-w-md mx-auto">
            {routes.map((r) => (
              <Card key={r.id} className="border-l-4 border-l-school-navy">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-school-navy dark:text-school-yellow">{r.id}</span>
                    <span className="text-xs bg-school-yellow/20 text-school-navy dark:text-foreground px-2 py-0.5 rounded-full border border-school-yellow/30">
                      Pickup: {r.time}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{r.pickup}</p>
                  <p className="text-xs text-muted-foreground mt-1">Return: {r.return}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden md:block max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-0 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-school-navy text-white">
                      <th className="text-left py-3 px-6 font-semibold">Route</th>
                      <th className="text-left py-3 px-6 font-semibold">Main Pickup Point</th>
                      <th className="text-left py-3 px-6 font-semibold">Morning Pickup</th>
                      <th className="text-left py-3 px-6 font-semibold">Afternoon Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((r, i) => (
                      <tr key={r.id} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/40'}>
                        <td className="py-3 px-6 font-bold text-school-navy dark:text-school-yellow">{r.id}</td>
                        <td className="py-3 px-6">{r.pickup}</td>
                        <td className="py-3 px-6">{r.time}</td>
                        <td className="py-3 px-6">{r.return}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 sm:py-20 bg-school-navy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Safety First</h2>
          <p className="text-white/70 mb-12 max-w-xl mx-auto">
            Your child&apos;s safety is our top priority. We have multiple layers of security and care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { emoji: '📷', title: 'CCTV Surveillance', desc: '24×7 monitoring with cameras placed at all entry points and corridors.' },
              { emoji: '🚌', title: 'GPS-Tracked Buses', desc: 'All school buses fitted with GPS. Parents can track bus location.' },
              { emoji: '🏥', title: 'Medical Staff', desc: 'Trained first-aid staff on campus during all school hours.' },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
