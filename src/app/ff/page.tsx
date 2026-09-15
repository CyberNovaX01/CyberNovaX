'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';
import SelectStep from '@/components/SelectStep';
const DATA = {
  brand: ['Samsung', 'Xiaomi', 'iPhone', 'Oppo'],
  model: ['A54', 'Redmi 12', 'iPhone 12', 'Reno 8'],
  variant: ['4GB', '6GB', '8GB'],
  playStyle: ['Rush', 'Camp', 'Support'],
  fingerLayout: ['2-Finger', '3-Finger', '4-Finger'],
};
export default function FFPage() {
  const router = useRouter();
  const { lang } = useLang();
  const [sel, setSel] = useState({
    brand: '', model: '', variant: '', playStyle: '', fingerLayout: '',
  });
  const ready = Object.values(sel).every(Boolean);
  const go = () => {
    const q = new URLSearchParams(sel).toString();
    router.push('/ff/result?' + q);
  };
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold text-white mb-6">🔫 {t(lang, 'freeFire')}</h1>
      <SelectStep label={t(lang, 'brand')} options={DATA.brand}
        value={sel.brand} onChange={(v) => setSel({ ...sel, brand: v })} />
      <SelectStep label={t(lang, 'model')} options={DATA.model}
        value={sel.model} onChange={(v) => setSel({ ...sel, model: v })} />
      <SelectStep label={t(lang, 'variant')} options={DATA.variant}
        value={sel.variant} onChange={(v) => setSel({ ...sel, variant: v })} />
      <SelectStep label={t(lang, 'playStyle')} options={DATA.playStyle}
        value={sel.playStyle} onChange={(v) => setSel({ ...sel, playStyle: v })} />
      <SelectStep label={t(lang, 'fingerLayout')} options={DATA.fingerLayout}
        value={sel.fingerLayout} onChange={(v) => setSel({ ...sel, fingerLayout: v })} />
      <button onClick={go} disabled={!ready}
        className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-40">
        {t(lang, 'next')}
      </button>
    </div>
  );
}
