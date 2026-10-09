"use client"

import React, { createContext, useContext, useState } from 'react';
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

function getInitialLang(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('school_lang');
  if (saved === 'en' || saved === 'hi') return saved;
  return 'en';
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('school_lang', newLang);
    }
  };

  const t = lang === 'en' ? en : hi;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
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
