import { useState, useEffect, useCallback } from 'react';
import { CONTENT } from '../constants/data';
import { LanguageContext } from './languageContextDef';

const STORAGE_KEY = 'portfolio_lang';

/**
 * Detects initial language based on:
 * 1. Saved user preference in localStorage
 * 2. Browser language (navigator.languages / navigator.language)
 * 3. Fallback to 'es'
 */
function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'es';

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'es' || saved === 'en') return saved;

  const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('en')) return 'en';

  // Check timezone for Spanish-speaking regions
  try {
    const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
    const spanishTimezones = [
      'america/el_salvador',
      'america/guatemala',
      'america/tegucigalpa',
      'america/managua',
      'america/costa_rica',
      'america/panama',
      'america/mexico',
      'america/bogota',
      'america/lima',
      'america/santiago',
      'america/buenos_aires',
      'europe/madrid',
      'america/caracas',
      'america/asuncion',
      'america/montevideo',
      'america/la_paz',
    ];
    if (spanishTimezones.some((item) => tz.includes(item))) {
      return 'es';
    }
  } catch {
    // ignore
  }

  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLanguage);

  const setLang = useCallback((newLang) => {
    const target = newLang === 'en' ? 'en' : 'es';
    setLangState(target);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, target);
      document.documentElement.lang = target;
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const content = CONTENT[lang] || CONTENT.es;

  const value = {
    lang,
    setLang,
    content,
    t: (key) => content.ui[key] || key,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export { LanguageContext };
export { useLanguage } from '../hooks/useLanguage';

