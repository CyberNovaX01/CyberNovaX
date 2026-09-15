'use client';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';
export default function Loading() {
  const { lang } = useLang();
  return <div className="text-center py-10 text-white/60">{t(lang, 'loading')}</div>;
}
