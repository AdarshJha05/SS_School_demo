"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '@/i18n/DictionaryContext';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ShieldCheck, Bus, GraduationCap, Users, Trophy, ChevronRight, Activity, HandHeart, IndianRupee } from 'lucide-react';

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Ticker */}
      <div className="bg-school-yellow text-school-navy py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-medium">
          {t.announcement} &nbsp; • &nbsp; {t.announcement}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-school-navy text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 md:pr-12 text-center md:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-school-yellow/20 text-school-yellow font-medium text-sm mb-6 border border-school-yellow/30">
              {t.hero.tagline}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto md:mx-0">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/admissions" className={buttonVariants({ size: "lg", className: "bg-school-yellow text-school-navy hover:bg-school-yellow/90" })}>
                {t.hero.applyForAdmission}
              </Link>
              <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "text-white border-white/30 hover:bg-white/10 dark:text-school-navy dark:border-school-navy/30" })}>
                {t.nav.callNow}
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-white/10">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-school-navy to-school-maroon opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                alt="Students learning" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-school-yellow p-4 rounded-full shadow-lg">
                  <GraduationCap className="h-12 w-12 text-school-navy" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="bg-school-maroon text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <BookOpen className="h-8 w-8 text-school-yellow" />
              <span className="font-medium">{t.quickFacts.cbse}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="h-8 w-8 text-school-yellow" />
              <span className="font-medium">{t.quickFacts.classes}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8 text-school-yellow" />
              <span className="font-medium">{t.quickFacts.teachers}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Bus className="h-8 w-8 text-school-yellow" />
              <span className="font-medium">{t.quickFacts.transport}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">
                {t.home.aboutPreviewHeading}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {t.home.aboutPreviewText}
              </p>
              <Link href="/about" className={buttonVariants({ variant: "outline" })}>
                {t.home.readMore} <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.home.whyChooseUsItems.map((item, index) => {
                const icons = [Users, Activity, Bus, Trophy, HandHeart, IndianRupee];
                const Icon = icons[index % icons.length];
                return (
                  <Card key={index} className="border-none shadow-md bg-card/50 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="bg-school-yellow/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-school-navy dark:text-school-yellow" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-school-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-school-yellow mb-2">{t.home.stats.students}</div>
              <div className="text-white/80 font-medium">{t.home.stats.studentsLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-school-yellow mb-2">{t.home.stats.teachers}</div>
              <div className="text-white/80 font-medium">{t.home.stats.teachersLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-school-yellow mb-2">{t.home.stats.years}</div>
              <div className="text-white/80 font-medium">{t.home.stats.yearsLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-school-yellow mb-2">{t.home.stats.results}</div>
              <div className="text-white/80 font-medium">{t.home.stats.resultsLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">{t.home.academicsHeading}</h2>
            <div className="h-1 w-20 bg-school-yellow mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t.home.academicsPreview).map(([key, stage], idx) => (
              <Card key={key} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className={`h-2 ${idx % 2 === 0 ? 'bg-school-maroon' : 'bg-school-navy'}`}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{stage.desc}</p>
                  <Link href="/academics" className="text-sm font-medium text-primary flex items-center group-hover:text-school-maroon transition-colors">
                    {t.home.readMore} <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-school-yellow text-school-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {t.home.ctaBannerHeading}
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            {t.home.ctaBannerText}
          </p>
          <Link href="/admissions" className={buttonVariants({ size: "lg", className: "bg-school-navy text-white hover:bg-school-navy/90 border-2 border-school-navy hover:border-school-navy/90" })}>
            {t.hero.applyForAdmission}
          </Link>
        </div>
      </section>
    </div>
  );
}
