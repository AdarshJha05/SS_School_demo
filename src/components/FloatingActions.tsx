"use client"

import React from 'react';
import { Phone } from 'lucide-react';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button (using simple green circle for demo) */}
      <a
        href="https://wa.me/918789298788"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

      {/* Call Button (Mobile only) */}
      <a
        href="tel:+918789298788"
        className="bg-school-maroon text-white p-3.5 rounded-full shadow-lg hover:bg-school-maroon/90 transition-transform hover:scale-110 flex items-center justify-center md:hidden"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
