'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, ArrowLeft } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
      >
        <CheckCircle2 className="h-20 w-20 sm:h-24 sm:w-24 text-green-500 mx-auto mb-6" />
      </motion.div>
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-school-navy dark:text-foreground mb-4">
          Thank You for Your Enquiry!
        </h1>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Our admissions team will get in touch with you shortly. Here are your next steps:
        </p>
        <div className="text-left max-w-md mx-auto mb-10 space-y-4">
          {[
            'Our team will call you within 24 business hours',
            'Prepare documents: Birth Certificate, Aadhaar, 4 passport photos',
            'Visit the school between 9 AM – 2 PM on any working day',
            'Fee payment and joining formalities on admission day',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-school-yellow text-school-navy font-bold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-foreground">{step}</p>
            </div>
          ))}
        </div>
        <div className="bg-school-navy/5 dark:bg-school-navy/30 rounded-xl p-6 mb-8 max-w-sm mx-auto">
          <p className="font-semibold mb-3">Need immediate help? Call us:</p>
          <a
            href="tel:+918789298788"
            className="flex items-center justify-center gap-2 text-school-maroon font-bold text-lg mb-2 hover:underline"
          >
            <Phone className="h-4 w-4" /> +91 87892 98788
          </a>
          <a
            href="tel:+919241100290"
            className="flex items-center justify-center gap-2 text-school-maroon font-bold text-lg hover:underline"
          >
            <Phone className="h-4 w-4" /> +91 92411 00290
          </a>
        </div>
        <Link href="/" className={buttonVariants({ className: 'bg-school-navy text-white hover:bg-school-navy/90' })}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
