'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

type GalleryItem = {
  id: number
  category: string
  title: string
  desc: string
  gradient: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: 'annual-day', title: 'Annual Day 2025', desc: 'Students performing a wonderful cultural program on stage.', gradient: 'from-purple-500 to-pink-500' },
  { id: 2, category: 'sports', title: 'Sports Day 2025', desc: 'Our athletes competing in the athletics competition.', gradient: 'from-green-500 to-teal-500' },
  { id: 3, category: 'classroom', title: 'Smart Classroom', desc: 'Interactive learning session with our digital smart boards.', gradient: 'from-blue-500 to-cyan-500' },
  { id: 4, category: 'annual-day', title: 'Cultural Program', desc: 'A mesmerizing dance performance by Class 6 students.', gradient: 'from-orange-500 to-red-500' },
  { id: 5, category: 'sports', title: 'Cricket Tournament', desc: 'Inter-school cricket match at our sports ground.', gradient: 'from-yellow-500 to-orange-500' },
  { id: 6, category: 'events', title: 'Republic Day', desc: 'Flag hoisting ceremony with full school participation.', gradient: 'from-blue-600 to-indigo-600' },
  { id: 7, category: 'classroom', title: 'Science Lab', desc: 'Students conducting experiments in our new science lab.', gradient: 'from-teal-500 to-green-600' },
  { id: 8, category: 'events', title: 'Independence Day', desc: 'Patriotic celebration with students in traditional attire.', gradient: 'from-orange-400 to-green-500' },
  { id: 9, category: 'annual-day', title: 'Prize Distribution', desc: 'Academic achievers receiving their awards from the Principal.', gradient: 'from-violet-500 to-purple-600' },
  { id: 10, category: 'sports', title: 'Football Match', desc: 'Exciting inter-house football tournament finals.', gradient: 'from-emerald-500 to-teal-600' },
  { id: 11, category: 'classroom', title: 'Computer Lab', desc: 'Students learning coding and digital skills.', gradient: 'from-sky-500 to-blue-600' },
  { id: 12, category: 'events', title: 'Teachers Day', desc: 'Students felicitating their beloved teachers.', gradient: 'from-pink-500 to-rose-600' },
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'annual-day', label: 'Annual Day' },
  { id: 'sports', label: 'Sports' },
  { id: 'classroom', label: 'Classrooms' },
  { id: 'events', label: 'Events' },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter(g => g.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-school-navy text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="flex justify-center text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="text-white">Gallery</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-heading font-bold mb-4">Photo Gallery</h1>
            <div className="h-1 w-24 bg-school-yellow mx-auto rounded-full mb-6" />
            <p className="text-white/80 max-w-xl mx-auto">
              Glimpses of life at S.S. Public School — from academics to sports, annual day to everyday moments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Demo disclaimer */}
          <div className="text-center mb-8 text-sm text-muted-foreground bg-school-yellow/10 border border-school-yellow/30 rounded-xl py-3 px-4 max-w-lg mx-auto">
            ⚠ Demo placeholder images — actual school photos will be added for production
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all border ${activeFilter === f.id ? 'bg-school-navy text-white border-school-navy shadow-lg' : 'bg-background text-foreground border-border hover:border-school-navy/40'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedItem(item)}
                  className="cursor-pointer group"
                >
                  <div className={`relative bg-gradient-to-br ${item.gradient} rounded-xl overflow-hidden aspect-square sm:aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                      <div className="text-3xl sm:text-4xl mb-2">📸</div>
                      <div className="font-heading font-bold text-sm sm:text-base drop-shadow">{item.title}</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity p-3">
                      <p className="text-white text-xs line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No photos in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-lg p-0 overflow-hidden">
          {selectedItem && (
            <>
              <DialogTitle className="sr-only">{selectedItem.title}</DialogTitle>
              <div className={`bg-gradient-to-br ${selectedItem.gradient} aspect-video flex items-center justify-center`}>
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">📸</div>
                  <div className="font-heading font-bold text-2xl drop-shadow">{selectedItem.title}</div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading font-bold text-xl mb-2">{selectedItem.title}</h2>
                <p className="text-muted-foreground">{selectedItem.desc}</p>
                <p className="text-xs text-muted-foreground mt-3 italic">Demo placeholder — actual photo will be added.</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
