'use client';
import { useLang } from '@/context/LangContext';
import { t } from '@/lib/i18n';
export default function PatchWarning() {
  const { lang } = useLang();
  return (
    <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-sm mb-4">
      ⚠️ {t(lang, 'outdatedGuide')}
    </div>
  );
}
