'use client';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';
import LanguageSwitch from './LanguageSwitch';
export default function Header() {
  const { lang } = useLang();
  return (
    <header className="border-b border-white/10 bg-[#0b0f19]/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-3xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-white">
          🎮 {t(lang, 'appName')}
        </Link>
        <LanguageSwitch />
      </div>
    </header>
  );
}
