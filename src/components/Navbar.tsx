"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, Languages, Phone, GraduationCap } from 'lucide-react';
import { useI18n } from '@/i18n/DictionaryContext';
import { useTheme } from 'next-themes';
import { Button, buttonVariants } from '@/components/ui/button';

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.academics, href: '/academics' },
    { name: t.nav.admissions, href: '/admissions' },
    { name: t.nav.facilities, href: '/facilities' },
    { name: t.nav.gallery, href: '/gallery' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
                S.S. Public School
              </span>
              <span className="font-heading font-bold text-xl tracking-tight sm:hidden">
                SSPS
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
              <Languages className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle dark mode"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <div className="hidden md:block ml-2">
              <Link href="/admissions" className={buttonVariants({ className: "bg-school-maroon hover:bg-school-maroon/90 text-white" })}>
                {t.nav.applyNow}
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link href="/admissions" onClick={() => setIsOpen(false)} className={buttonVariants({ className: "w-full bg-school-maroon hover:bg-school-maroon/90 text-white" })}>
                {t.nav.applyNow}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
