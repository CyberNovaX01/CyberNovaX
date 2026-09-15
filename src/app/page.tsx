'use client';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';
import GameCard from '@/components/GameCard';
export default function Home() {
  const { lang } = useLang();
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-white mb-1">{t(lang, 'appName')}</h1>
      <p className="text-white/60 mb-8">{t(lang, 'tagline')}</p>
      <h2 className="text-sm text-white/50 mb-3">{t(lang, 'chooseGame')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GameCard href="/ff" title={t(lang, 'freeFire')} emoji="🔫" desc="Brand · Model · Style" />
        <GameCard href="/mlbb" title={t(lang, 'mlbb')} emoji="⚔️" desc="Search Hero · Guide" />
      </div>
    </div>
  );
}
