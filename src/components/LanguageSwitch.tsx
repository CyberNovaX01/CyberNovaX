// src/components/LanguageSwitch.tsx
"use client";
import { Languages } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function LanguageSwitch() {
  const { lang, setLang } = useLang();
  const next = lang === "km" ? "en" : "km";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label="Switch language"
      className="flex h-9 items-center gap-1.5 rounded-xl border border-line bg-surface/60 px-3 text-xs font-semibold text-muted transition-colors hover:border-line-2 hover:text-fg"
    >
      <Languages size={15} />
      <span className="uppercase">{lang}</span>
    </button>
  );
}