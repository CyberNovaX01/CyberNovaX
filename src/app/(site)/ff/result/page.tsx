"use client";
import Link from "next/link";
import { ChevronLeft, Share2, Bookmark, BookmarkCheck, Crosshair, Zap, Target, Hand, Copy, Check, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useT, useLang } from "@/lib/i18n";
const SENSITIVITY = {
  general: 92, redDot: 88, x2Scope: 78, x4Scope: 65, sniper: 32,
  fireButton: 88, freeLook: 72, dpi: 480,
};
const LAYOUT = {
  device: "iPhone 13 · 4GB/128GB",
  style: "Rusher", fingers: "4 ម្រាម",
};
export default function FFResultPage() {
  const t = useT();
  const { lang } = useLang();
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleShare = async () => {
    const text = "Free Fire Sensitivity (" + LAYOUT.device + ")\n" +
      "General: " + SENSITIVITY.general + "\n" +
      "Red Dot: " + SENSITIVITY.redDot + "\n" +
      "2x Scope: " + SENSITIVITY.x2Scope + "\n" +
      "4x Scope: " + SENSITIVITY.x4Scope + "\n" +
      "Sniper: " + SENSITIVITY.sniper + "\n" +
      "DPI: " + SENSITIVITY.dpi + "\n" +
      "— Gaming Guide";
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };
  return (
    <>
      <MoodSetter mood="ff" />
      <section className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-10">
        <Link href="/ff" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-semibold text-muted backdrop-blur transition-colors hover:border-line-2 hover:text-fg">
          <ChevronLeft size={13} />Free Fire
        </Link>
      </section>
      <section className="mx-auto max-w-5xl px-4 pt-6 sm:px-6">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="kicker" style={{ color: "#ff6b35" }}>YOUR SENSITIVITY</span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Guide <span className="text-gradient">របស់អ្នក</span>
              </h1>
              <p className="mt-2 text-sm text-muted">{LAYOUT.device} · {LAYOUT.style} · {LAYOUT.fingers}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={handleShare} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3.5 py-2 text-xs font-semibold text-muted backdrop-blur transition-colors hover:border-line-2 hover:text-fg">
                {copied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
                {copied ? t("guide.copied") : t("guide.share")}
              </button>
              <button onClick={() => setSaved(!saved)} className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-all" style={saved ? { background: "#ff6b3522", color: "#ff6b35", boxShadow: "0 0 0 1px #ff6b3555" } : { background: "var(--c-surface)", color: "var(--c-muted)", boxShadow: "0 0 0 1px var(--c-line)" }}>
                {saved ? <BookmarkCheck size={13} /> : <Bookmark size={13} />}
                {saved ? t("guide.fav.on") : t("guide.fav.add")}
              </button>
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <FadeIn delay={100}>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-2">
              <Crosshair size={18} style={{ color: "#ff6b35" }} />
              <h2 className="text-lg font-bold tracking-tight">Sensitivity Settings</h2>
            </div>
            <div className="space-y-5">
              <SensRow label="General" value={SENSITIVITY.general} icon="🎯" />
              <SensRow label="Red Dot" value={SENSITIVITY.redDot} icon="🔴" />
              <SensRow label="2x Scope" value={SENSITIVITY.x2Scope} icon="🔍" />
              <SensRow label="4x Scope" value={SENSITIVITY.x4Scope} icon="🔭" />
              <SensRow label="Sniper Scope" value={SENSITIVITY.sniper} icon="🎯" />
              <SensRow label="Free Look" value={SENSITIVITY.freeLook} icon="👁️" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-6">
              <div className="rounded-2xl border border-line bg-raised/50 p-4 text-center">
                <div className="text-[10px] uppercase tracking-wider text-faint">Fire Button</div>
                <div className="mt-1 font-mono text-2xl font-bold text-fg">{SENSITIVITY.fireButton}</div>
              </div>
              <div className="rounded-2xl border border-line bg-raised/50 p-4 text-center">
                <div className="text-[10px] uppercase tracking-wider text-faint">DPI</div>
                <div className="mt-1 font-mono text-2xl font-bold text-fg">{SENSITIVITY.dpi}</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-5xl px-4 pt-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn delay={150}>
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Zap size={16} style={{ color: "#ff6b35" }} />
                <h2 className="text-lg font-bold tracking-tight">HUD Layout ({LAYOUT.fingers})</h2>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                <div className="absolute left-3 bottom-3 h-14 w-14 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm" />
                <div className="absolute right-3 bottom-3 h-16 w-16 rounded-full border-2" style={{ borderColor: "#ff6b3588", background: "#ff6b3522" }} />
                <div className="absolute right-20 bottom-3 h-12 w-12 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm" />
                <div className="absolute left-1/2 top-3 -translate-x-1/2 h-10 w-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm" />
                <div className="absolute left-3 top-3 h-10 w-10 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm" />
                <div className="absolute right-3 top-3 h-10 w-10 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center text-[10px] font-semibold text-white/60">
                  HUD Preview
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Target size={16} style={{ color: "#ff6b35" }} />
                <h2 className="text-lg font-bold tracking-tight">Tips សម្រាប់ {LAYOUT.style}</h2>
              </div>
              <ul className="space-y-3 text-sm text-muted">
                {(lang === "km" ? [
                  "ប្រើ 4 ម្រាម: ឆ្វេងចលនា ស្តាំបាញ់",
                  "DPI 480 ត្រូវនឹង iPhone 13 (Retina)",
                  "General ខ្ពស់ (92) → បត់លឿន",
                  "Red Dot ខ្ពស់ → headshot ងាយ",
                  "Sniper ទាប (32) → ត្រង់ជាង",
                ] : [
                  "Use 4 fingers: left move, right shoot",
                  "DPI 480 matches iPhone 13 (Retina)",
                  "High General (92) → fast flick",
                  "High Red Dot → easy headshot",
                  "Low Sniper (32) → more accurate",
                ]).map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#ff6b35" }} />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 pb-24 pt-6 sm:px-6">
        <div className="flex items-start gap-3 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-yellow-400" />
          <p className="text-xs text-yellow-200/80">
            {lang === "km"
              ? "Sensitivity នេះសម្រាប់ patch បច្ចុប្បន្ន។ ពេល patch ថ្មីចេញ តម្លៃអាចផ្លាស់ប្តូរ។"
              : "This sensitivity is for the current patch. Values may change when a new patch releases."}
          </p>
        </div>
      </section>
    </>
  );
}
function SensRow({ label, value, icon }: { label: string; value: number; icon: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <span className="text-base">{icon}</span>
          {label}
        </span>
        <span className="font-mono text-sm font-bold" style={{ color: "#ff6b35" }}>{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-raised">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: value + "%", background: "linear-gradient(90deg, #ff6b35, #ffb347)" }} />
      </div>
    </div>
  );
}