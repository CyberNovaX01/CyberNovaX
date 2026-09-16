"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { Check, ChevronDown } from "lucide-react";

export function LanguageSwitch() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const options = [
    { code: "km" as const, flag: "🇰🇭", label: "ខ្មែរ", short: "KM" },
    { code: "en" as const, flag: "🇬🇧", label: "English", short: "EN" },
  ];
  const current = options.find((o) => o.code === lang) || options[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="group flex h-9 items-center gap-1.5 rounded-xl border border-line bg-surface/60 px-2.5 text-xs font-bold text-muted transition-all hover:border-gold/40 hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(245,197,66,0.6)]"
      >
        <span className="text-base leading-none transition-transform group-hover:scale-125">
          {current.flag}
        </span>
        <span className="hidden sm:inline">{current.short}</span>
        <ChevronDown
          size={12}
          className={
            "transition-transform duration-300 " + (open ? "rotate-180" : "")
          }
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-xl border border-line bg-[#0d1117] shadow-2xl"
          style={{ animation: "dropIn 0.2s ease-out" }}
        >
          {options.map((o) => (
            <button
              key={o.code}
              onClick={() => {
                setLang(o.code);
                setOpen(false);
              }}
              className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs font-bold transition-colors hover:bg-gold/10"
              style={{
                color: lang === o.code ? "#f5c542" : "var(--color-muted)",
              }}
            >
              <span className="text-base">{o.flag}</span>
              <span className="flex-1">{o.label}</span>
              {lang === o.code && <Check size={12} />}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}