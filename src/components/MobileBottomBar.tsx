'use client'

import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-2xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-3 h-14">
        <a
          href="tel:+918789298788"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
          aria-label="Call school"
        >
          <Phone className="h-5 w-5 text-school-navy dark:text-school-yellow" />
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/918789298788?text=Hello%2C%20I%20am%20interested%20in%20admission%20at%20S.S.%20Public%20School."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
          aria-label="WhatsApp school"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
        <Link
          href="/admissions"
          className="flex flex-col items-center justify-center gap-0.5 text-xs font-semibold bg-school-maroon text-white hover:bg-school-maroon/90 transition-colors"
          aria-label="Apply Now"
        >
          <span className="text-base">📋</span>
          <span>Apply Now</span>
        </Link>
      </div>
    </div>
  )
}
