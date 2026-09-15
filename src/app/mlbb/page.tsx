'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { searchMLBBHeroes } from '@/lib/api';
import type { Hero } from '@/lib/types';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';

export default function MLBBPage() {
  const { lang } = useLang();
  const [q, setQ] = useState('');
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(true);
      searchMLBBHeroes(q).then(setHeroes).catch(() => setHeroes([])).finally(() => setLoading(false));
    }, 300);
    return () => clearTimeout(id);
  }, [q]);

  return (
    <div className="py-6">
      <h1 className="text-xl font-bold text-white mb-4">{t(lang, 'mlbb')}</h1>
      <input value={q} onChange={(e) => setQ(e.target.value)}
        placeholder={t(lang, 'searchHero')}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-500" />
      <div className="mt-4 space-y-2">
        {loading && <p className="text-white/60">{t(lang, 'loading')}</p>}
        {!loading && heroes.length === 0 && q && <p className="text-white/60">{t(lang, 'noResults')}</p>}
        {heroes.map((h) => (
          <Link key={h.id} href={'/mlbb/' + h.id}
            className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
            <div className="text-white font-semibold">{h.name}</div>
            <div className="text-sm text-white/60">{h.role}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}