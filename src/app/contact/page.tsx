'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Map, Navigation, Clock, Send, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-school-navy text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_30%,#F5B800,transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="flex justify-center text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-white">Contact Us</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">Contact Us</h1>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              We&apos;d love to hear from you. Reach out for admissions, queries or just to say hello!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: 'Our Location',
                content: 'Dhobwal, Baniyapur, Saran, Bihar, India (near S.B.I. Bank)',
                sub: 'Saran District, Bihar 841101',
                color: 'text-school-maroon',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 87892 98788',
                sub: '+91 92411 00290',
                color: 'text-school-navy dark:text-school-yellow',
                href1: 'tel:+918789298788',
                href2: 'tel:+919241100290',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@sspublicschool-demo.com',
                sub: 'Mon–Sat, 8 AM – 4 PM',
                color: 'text-school-maroon',
              },
            ].map((card, i) => (
              <motion.div key={card.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-school-yellow/20 flex items-center justify-center">
                      <card.icon className={`h-7 w-7 ${card.color}`} />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg mb-2">{card.title}</h2>
                      {card.href1 ? (
                        <>
                          <a href={card.href1} className="block text-muted-foreground hover:text-school-maroon transition-colors">{card.content}</a>
                          <a href={card.href2} className="block text-muted-foreground hover:text-school-maroon transition-colors">{card.sub}</a>
                        </>
                      ) : (
                        <>
                          <p className="text-muted-foreground">{card.content}</p>
                          <p className="text-sm text-muted-foreground/70 mt-1">{card.sub}</p>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="overflow-hidden h-full">
                <div className="bg-gradient-to-br from-school-navy to-school-maroon p-10 sm:p-16 flex flex-col items-center justify-center text-white text-center min-h-[300px]">
                  <Map className="h-16 w-16 text-school-yellow mb-6" />
                  <h3 className="font-heading font-bold text-xl mb-2">S.S. Public School</h3>
                  <p className="text-white/80 text-sm mb-6 max-w-xs">
                    Dhobwal, Baniyapur, Saran, Bihar, India<br />(near S.B.I. Bank)
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://maps.google.com/?q=Baniyapur+Saran+Bihar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-school-yellow text-school-navy font-bold px-4 py-2 rounded-lg hover:bg-school-yellow/90 transition-colors text-sm"
                    >
                      <Map className="h-4 w-4" /> View on Google Maps
                    </a>
                    <a
                      href="https://maps.google.com/maps?daddr=Baniyapur+Saran+Bihar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition-colors text-sm border border-white/20"
                    >
                      <Navigation className="h-4 w-4" /> Get Directions
                    </a>
                  </div>
                </div>
                {/* Office Hours */}
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-school-maroon" /> Office Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: 'Monday – Friday', time: '8:00 AM – 4:00 PM' },
                      { day: 'Saturday', time: '8:00 AM – 1:00 PM' },
                      { day: 'Sunday', time: 'Closed' },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between text-muted-foreground">
                        <span className="font-medium text-foreground">{row.day}</span>
                        <span>{row.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="h-full">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-heading font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm mb-6">We typically respond within 1 business day.</p>
                  <form className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Your Name *</Label>
                      <Input id="contact-name" name="name" autoComplete="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone Number *</Label>
                      <Input id="contact-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea id="contact-message" name="message" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full bg-school-navy text-white hover:bg-school-navy/90 h-11">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      For admission enquiries, please use the{' '}
                      <Link href="/admissions" className="underline hover:text-school-maroon">Admissions page</Link>.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
