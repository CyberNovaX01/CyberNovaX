'use client';
import { useLang } from '@/context/LangContext';
export default function LanguageSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex gap-1 bg-white/5 rounded-lg p-1">
      {(['km', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded text-sm transition ${
            lang === l ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'
          }`}
        >
          {l === 'km' ? 'ខ្មែរ' : 'EN'}
        </button>
      ))}
    </div>
  );
}
