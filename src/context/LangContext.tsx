'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Lang } from '@/lib/types';
interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
}
const LangContext = createContext<Ctx>({ lang: 'km', setLang: () => {} });
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('km');
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'km' || saved === 'en') setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
export const useLang = () => useContext(LangContext);
