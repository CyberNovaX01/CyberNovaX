"use client";
import Link from "next/link";
import { Calendar, Newspaper, ArrowRight, Flame } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { NEWS } from "@/lib/siteData";
import { useLang } from "@/lib/i18n";
const KM_M = ["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"];
const EN_M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
export default function NewsPage() {
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
      <section className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16">
        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="kicker"><Newspaper size={12} />ព័ត៌មានថ្មីៗ</span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Latest <span className="text-gradient">News</span>
            </h1>
            <p className="max-w-xl text-sm text-muted sm:text-base">
              {lang === "km" ? "ព័ត៌មានថ្មីៗអំពី Free Fire និង Mobile Legends។" : "Latest news about Free Fire and Mobile Legends."}
            </p>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n, i) => (
            <FadeIn key={n.id} delay={i * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-line-2" style={{ boxShadow: "0 20px 50px -30px " + n.accent + "88" }}>
                <div className="relative aspect-video overflow-hidden" style={{ background: "linear-gradient(135deg, " + n.accent + "60 0%, " + n.accent + "20 50%, #0a0d14 100%)" }}>
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70" style={{ background: n.accent }} />
                  <span className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur-md" style={{ background: n.accent + "30", color: n.accent, boxShadow: "0 0 0 1px " + n.accent + "55" }}>
                    {n.tag}
                  </span>
                  <Flame size={60} className="absolute bottom-4 right-4 opacity-10" style={{ color: n.accent }} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-[11px] text-faint">
                    <Calendar size={11} />
                    <span>{fmt(n.date)}</span>
                    <span>·</span>
                    <span className="font-semibold uppercase" style={{ color: n.accent }}>
                      {n.game === "ff" ? "Free Fire" : n.game === "mlbb" ? "MLBB" : "General"}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold leading-tight tracking-tight transition-colors group-hover:text-gold">
                    {lang === "km" ? n.title.km : n.title.en}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted">
                    {lang === "km" ? n.excerpt.km : n.excerpt.en}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-faint">READ MORE</span>
                    <span className="flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5" style={{ color: n.accent }}>
                      {lang === "km" ? "អាន" : "Read"} <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
