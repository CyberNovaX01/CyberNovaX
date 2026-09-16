"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, ArrowRight, Users, Zap, Shield, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { UNIQUE_HEROES, ROLE_LABELS } from "@/lib/mlbbTierData";

type Props = {
  open: boolean;
  onClose: () => void;
};

const QUICK_LINKS = [
  { href: "/ff/sensitivity", icon: Zap,      labelKm: "Sensitivity",  labelEn: "Sensitivity",  color: "#22d3ee" },
  { href: "/mlbb/tier",      icon: Shield,   labelKm: "Tier List",    labelEn: "Tier List",    color: "#f5c542" },
  { href: "/mlbb/builds",    icon: Sparkles, labelKm: "Builds",       labelEn: "Builds",       color: "#a855f7" },
  { href: "/mlbb/emblems",   icon: Sparkles, labelKm: "Emblems",      labelEn: "Emblems",      color: "#3b82f6" },
];

export function SearchModal({ open, onClose }: Props) {
  const { lang } = useLang();
  const km = lang === "km";
  const router = useRouter();
  const [q, setQ] = useState("");

  // Reset when closed
  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Search heroes
  const heroResults = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (n.length < 1) return [];
    return UNIQUE_HEROES.filter((h) => h.name.toLowerCase().includes(n)).slice(0, 8);
  }, [q]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-md px-4 pt-20 pb-8"
      style={{ animation: "fadeIn 0.2s ease-out" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-[#0d1117] shadow-2xl"
        style={{ animation: "slideDown 0.25s cubic-bezier(0.22, 1, 0.36, 1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input row */}
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search size={18} className="shrink-0 text-gold" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && heroResults[0]) {
                router.push("/mlbb/" + heroResults[0].id);
                onClose();
              }
            }}
            placeholder={km ? "ស្វែងរក hero, guide…" : "Search heroes, guides…"}
            className="flex-1 bg-transparent text-sm font-bold text-fg placeholder:text-faint focus:outline-none"
          />
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-gold/40 hover:text-gold"
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {/* Hero results */}
          {q && heroResults.length > 0 && (
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-faint">
                <Users size={11} />
                {km ? "Heroes" : "Heroes"} ({heroResults.length})
              </div>
              <div className="grid gap-1">
                {heroResults.map((h) => {
                  const role = ROLE_LABELS[h.role];
                  return (
                    <Link
                      key={h.id}
                      href={"/mlbb/" + h.id}
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl border border-transparent p-2.5 transition-all hover:border-line hover:bg-surface/50"
                    >
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-black"
                        style={{
                          background: "linear-gradient(135deg, " + role.color + "40 0%, " + role.color + "15 100%)",
                          color: role.color,
                          boxShadow: "0 0 0 1px " + role.color + "55",
                        }}
                      >
                        {h.initial}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-bold">{h.name}</div>
                        <div className="text-[10px] text-faint">
                          {km ? role.km : role.en} · {h.tier}
                        </div>
                      </div>
                      <ArrowRight size={13} className="text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-gold" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* No results */}
          {q && heroResults.length === 0 && (
            <div className="py-6 text-center">
              <p className="text-sm text-muted">
                {km ? 'គ្មានលទ្ធផលសម្រាប់ "' + q + '"' : 'No results for "' + q + '"'}
              </p>
            </div>
          )}

          {/* Quick links (when no search) */}
          {!q && (
            <div>
              <div className="mb-3 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-faint">
                <Sparkles size={11} />
                {km ? "ចូលលឿន" : "Quick links"}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_LINKS.map((ql) => {
                  const Icon = ql.icon;
                  return (
                    <Link
                      key={ql.href}
                      href={ql.href}
                      onClick={onClose}
                      className="group flex items-center gap-3 rounded-xl border border-line bg-surface/40 p-3 transition-all hover:-translate-y-0.5 hover:border-line-2"
                      style={{ boxShadow: "0 10px 30px -20px " + ql.color + "88" }}
                    >
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                        style={{
                          background: ql.color + "20",
                          color: ql.color,
                          boxShadow: "0 0 0 1px " + ql.color + "55",
                        }}
                      >
                        <Icon size={16} />
                      </span>
                      <div className="text-xs font-bold">
                        {km ? ql.labelKm : ql.labelEn}
                      </div>
                      <ArrowRight size={12} className="ml-auto text-faint transition-transform group-hover:translate-x-0.5" style={{ color: ql.color }} />
                    </Link>
                  );
                })}
              </div>

              {/* Hint */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-faint">
                <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px]">Esc</kbd>
                <span>{km ? "ដើម្បីបិទ" : "to close"}</span>
                <span>·</span>
                <kbd className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px]">Enter</kbd>
                <span>{km ? "ដើម្បីបើក" : "to open"}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}