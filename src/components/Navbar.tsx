"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Sun, Languages, GraduationCap, Phone, ChevronRight } from 'lucide-react';
import { useI18n } from '@/i18n/DictionaryContext';
import { useTheme } from 'next-themes';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
    { name: t.nav.faculty ?? 'Faculty', href: '/faculty' },
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
          <div className="hidden min-[1300px]:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-school-navy text-school-yellow dark:bg-muted dark:text-primary' 
                        : 'hover:text-primary hover:bg-muted/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
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
            <div className="hidden min-[1300px]:block ml-2">
              <Link href="/admissions" className={buttonVariants({ className: "bg-school-maroon hover:bg-school-maroon/90 text-white" })}>
                {t.nav.applyNow}
              </Link>
            </div>
            <div className="-mr-2 flex min-[1300px]:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="inline-flex items-center justify-center rounded-md p-2 hover:bg-muted transition-colors" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-12 flex flex-col h-full border-l-0 sm:border-l shadow-2xl">
                  <SheetTitle className="text-xl font-bold mb-4 px-2">Menu</SheetTitle>
                  <div className="flex-1 overflow-y-auto pr-2 pb-6 -mr-2">
                    <div className="flex flex-col space-y-2 mt-2">
                      {navLinks.map((link) => {
                        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-3.5 rounded-xl text-[1.1rem] font-medium transition-all duration-200 flex items-center justify-between ${
                              isActive
                                ? 'bg-school-navy text-school-yellow shadow-md dark:bg-muted dark:text-primary translate-x-1'
                                : 'hover:bg-muted text-foreground/90 hover:text-foreground hover:translate-x-1'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{link.name}</span>
                            <ChevronRight className={`h-5 w-5 transition-transform ${isActive ? 'text-school-yellow/70 opacity-100' : 'text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'}`} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="pt-6 border-t mt-auto space-y-6">
                    <div className="space-y-4 px-2">
                      <div className="flex items-center gap-4">
                        <div className="bg-school-maroon/10 dark:bg-school-maroon/20 p-3 rounded-full text-school-maroon dark:text-school-maroon-light">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">Admissions Helpline</p>
                          <a href="tel:+919876543210" className="font-bold text-foreground text-lg hover:text-school-maroon transition-colors">+91 98765 43210</a>
                        </div>
                      </div>
                    </div>
                    <Link href="/admissions" onClick={() => setIsOpen(false)} className={buttonVariants({ size: "lg", className: "w-full h-14 bg-school-maroon hover:bg-school-maroon/90 text-white rounded-xl shadow-lg text-lg" })}>
                      {t.nav.applyNow}
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
