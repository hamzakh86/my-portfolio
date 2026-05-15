import { useState, useCallback } from 'react';
import en from '../i18n/en';
import fr from '../i18n/fr';

const translations = { en, fr };

export const useLanguage = () => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'en';
  });

  const t = translations[lang];

  const toggleLang = useCallback(() => {
    const next = lang === 'en' ? 'fr' : 'en';
    setLang(next);
    localStorage.setItem('portfolio-lang', next);
  }, [lang]);

  return { lang, t, toggleLang };
};