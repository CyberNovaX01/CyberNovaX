"use client";
import { TrendingUp, TrendingDown, Minus, Sparkles, Zap, Calendar } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { PATCHES } from "@/lib/siteData";
import { useLang } from "@/lib/i18n";
const KM_M = ["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"];
const EN_M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const TYPE_COLORS = {
  buff: "#10b981",
  nerf: "#ef4444",
  adjust: "#f59e0b",
  new: "#3b82f6",
};
const TYPE_ICONS = {
  buff: TrendingUp, nerf: TrendingDown, adjust: Minus, new: Sparkles,
};
export default function PatchPage() {
  const { lang } = useLang();
  const fmt = (iso: string) => {
    const d = new Date(iso);
    const day = String(d.getDate()).padStart(2, "0");
    const m = d.getMonth();
    return lang === "km" ? day + " " + KM_M[m] : day + " " + EN_M[m];
  };
  return (
    <>
      <MoodSetter mood="cosmic" />
      <section className="relative mx-auto max-w-5xl px-4 pt-12 sm:px-6 sm:pt-16">
        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="kicker"><Zap size={12} />PATCH NOTES</span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Latest <span className="text-gradient">Patches</span>
            </h1>
            <p className="max-w-xl text-sm text-muted sm:text-base">
              {lang === "km" ? "បច្ចុប្បន្នភាពចុងក្រោយអំពី buff, nerf, និង hero ថ្មីៗ។" : "Latest updates about buffs, nerfs, and new heroes."}
            </p>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-5xl px-4 pb-24 pt-10 sm:px-6">
        <div className="space-y-8">
          {PATCHES.map((p, i) => (
            <FadeIn key={p.id} delay={i * 100}>
              <article className="overflow-hidden rounded-3xl border border-line bg-surface" style={{ boxShadow: "0 30px 70px -40px " + p.accent + "88" }}>
                <header className="flex flex-col gap-3 border-b border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8" style={{ background: "linear-gradient(135deg, " + p.accent + "15 0%, transparent 100%)" }}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl font-mono text-sm font-black" style={{ background: p.accent + "25", color: p.accent, boxShadow: "0 0 0 1px " + p.accent + "55" }}>
                      {p.game === "ff" ? "FF" : "ML"}
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: p.accent }}>v{p.version}</div>
                      <h2 className="mt-0.5 text-xl font-bold tracking-tight">{lang === "km" ? p.title.km : p.title.en}</h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-faint">
                    <Calendar size={12} />
                    <span>{fmt(p.date)}</span>
                  </div>
                </header>
                <div className="divide-y divide-line">
                  {p.changes.map((ch, idx) => {
                    const color = TYPE_COLORS[ch.type];
                    const Icon = TYPE_ICONS[ch.type];
                    return (
                      <div key={idx} className="flex items-start gap-4 p-5 sm:p-6">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: color + "20", color }}>
                          <Icon size={17} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-bold">{ch.hero}</span>
                            <span className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider" style={{ background: color + "22", color }}>
                              {ch.type}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-muted">{lang === "km" ? ch.desc.km : ch.desc.en}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
