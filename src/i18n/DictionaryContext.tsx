"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './dictionaries/en';
import { hi } from './dictionaries/hi';

type Language = 'en' | 'hi';
type Dictionary = typeof en;

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('school_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('school_lang', newLang);
  };

  const t = lang === 'en' ? en : hi;

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      <div className={!mounted ? "invisible" : ""}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
