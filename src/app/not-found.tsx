'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Home, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="text-8xl sm:text-9xl font-heading font-black text-school-yellow mb-4">404</div>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <GraduationCap className="h-14 w-14 text-school-navy dark:text-school-yellow mx-auto mb-6" />
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-school-navy dark:text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className={buttonVariants({ className: 'bg-school-navy text-white hover:bg-school-navy/90' })}>
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: 'outline' })}>
            <Phone className="mr-2 h-4 w-4" /> Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
