"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Newspaper, Zap, ArrowRight, Calendar,
  TrendingUp, TrendingDown, Minus, Sparkles,
} from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { HeroBanner } from "@/components/HeroBanner";
import { LiveStatsBar } from "@/components/LiveStatsBar";
import { MetaTierPreview } from "@/components/MetaTierPreview";
import { FeaturedGuides } from "@/components/FeaturedGuides";
import { FadeIn } from "@/components/FadeIn";
import { NEWS, PATCHES } from "@/lib/siteData";
import { useLang } from "@/lib/i18n";

const KM_M = ["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"];
const EN_M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export default function HomePage() {
  const { lang } = useLang();
  const [mood, setMood] = useState<"cosmic" | "ff" | "mlbb">("cosmic");

  const fmt = (iso: string) => {
    const d = new Date(iso);
    const day = String(d.getDate()).padStart(2, "0");
    const m = d.getMonth();
    return lang === "km" ? day + " " + KM_M[m] : day + " " + EN_M[m];
  };

  return (
    <>
      <MoodSetter mood={mood} />
      <HeroBanner />
      <LiveStatsBar />
      <MetaTierPreview />
      <FeaturedGuides />

      {/* NEWS SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="kicker">
                <Newspaper size={12} />
                {lang === "km" ? "ព័ត៌មានថ្មីៗ" : "Latest"}
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                {lang === "km" ? "ព័ត៌មាន" : "Latest"}{" "}
                <span className="text-gradient">News</span>
              </h2>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs font-bold text-muted transition-all hover:border-gold/40 hover:text-gold"
            >
              {lang === "km" ? "មើលទាំងអស់" : "View all"}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {NEWS.slice(0, 4).map((n, i) => (
            <FadeIn key={n.id} delay={i * 60}>
              <Link
                href="/news"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-line-2"
              >
                <div
                  className="relative aspect-video overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, " + n.accent + "50 0%, " + n.accent + "15 50%, #0a0d14 100%)",
                  }}
                >
                  <span
                    className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider backdrop-blur-md"
                    style={{ background: n.accent + "30", color: n.accent }}
                  >
                    {n.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex items-center gap-1.5 text-[10px] text-faint">
                    <Calendar size={10} />
                    {fmt(n.date)}
                  </div>
                  <h3 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-gold">
                    {lang === "km" ? n.title.km : n.title.en}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PATCH SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="kicker">
                <Zap size={12} />
                PATCH NOTES
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                {lang === "km" ? "បច្ចុប្បន្នភាព" : "Latest"}{" "}
                <span className="text-gradient">Patches</span>
              </h2>
            </div>
            <Link
              href="/patch"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs font-bold text-muted transition-all hover:border-gold/40 hover:text-gold"
            >
              {lang === "km" ? "មើលទាំងអស់" : "View all"}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-2">
          {PATCHES.slice(0, 2).map((p, i) => (
            <FadeIn key={p.id} delay={i * 100}>
              <article
                className="overflow-hidden rounded-2xl border border-line bg-surface"
                style={{ boxShadow: "0 30px 70px -40px " + p.accent + "88" }}
              >
                <header
                  className="flex items-center gap-3 border-b border-line p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, " + p.accent + "15 0%, transparent 100%)",
                  }}
                >
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl font-mono text-xs font-black"
                    style={{ background: p.accent + "25", color: p.accent }}
                  >
                    {p.game === "ff" ? "FF" : "ML"}
                  </span>
                  <div>
                    <div
                      className="text-[10px] font-black uppercase tracking-[0.2em]"
                      style={{ color: p.accent }}
                    >
                      v{p.version}
                    </div>
                    <div className="text-sm font-bold">
                      {lang === "km" ? p.title.km : p.title.en}
                    </div>
                  </div>
                  <span className="ml-auto text-[10px] text-faint">
                    {fmt(p.date)}
                  </span>
                </header>

                <div className="divide-y divide-line">
                  {p.changes.slice(0, 3).map((ch, idx) => {
                    const colors = {
                      buff: "#10b981",
                      nerf: "#ef4444",
                      adjust: "#f59e0b",
                      new: "#3b82f6",
                    };
                    const Icons = {
                      buff: TrendingUp,
                      nerf: TrendingDown,
                      adjust: Minus,
                      new: Sparkles,
                    };
                    const color = colors[ch.type];
                    const Icon = Icons[ch.type];
                    return (
                      <div key={idx} className="flex items-center gap-3 p-4">
                        <span
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                          style={{ background: color + "20", color }}
                        >
                          <Icon size={14} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold">{ch.hero}</span>
                            <span
                              className="rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase"
                              style={{ background: color + "22", color }}
                            >
                              {ch.type}
                            </span>
                          </div>
                          <p className="truncate text-xs text-muted">
                            {lang === "km" ? ch.desc.km : ch.desc.en}
                          </p>
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