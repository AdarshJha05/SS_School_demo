"use client"

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/DictionaryContext';
import { GraduationCap, MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-school-navy text-primary-foreground border-t-[8px] border-school-yellow relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,#ffffff,transparent_70%)]" />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-school-yellow text-school-navy p-1.5 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                S.S. Public School
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6">
              {t.hero.tagline}
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/5 p-2.5 rounded-full text-primary-foreground/80 hover:bg-school-yellow hover:text-school-navy hover:scale-110 hover:-translate-y-1 transition-all duration-300" aria-label="Facebook">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/5 p-2.5 rounded-full text-primary-foreground/80 hover:bg-school-yellow hover:text-school-navy hover:scale-110 hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-school-yellow">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">{t.nav.academics}</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">{t.nav.admissions}</Link></li>
              <li><Link href="/facilities" className="hover:text-white transition-colors">{t.nav.facilities}</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">{t.nav.gallery}</Link></li>
              <li><Link href="/admin" className="hover:text-white transition-colors">Admin Demo</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-semibold text-lg mb-4 text-school-yellow">{t.footer.contactUs}</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-school-yellow" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-school-yellow" />
                <span>{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-school-yellow" />
                <span>{t.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 S.S. Public School. {t.footer.rightsReserved}</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
