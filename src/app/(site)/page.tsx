"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Newspaper, Zap, ArrowRight, Calendar,
  TrendingUp, TrendingDown, Minus, Sparkles,
  Users,
} from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-4 pt-6 pb-10 sm:px-6 sm:pt-8 lg:pt-10 lg:pb-14">
        {/* BACKGROUND IMAGE — ONLY TOP PORTION */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[70vh] sm:h-[60vh]">
          <img
            src="/images/natan-bg.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,13,20,0.85) 0%, rgba(10,13,20,0.80) 40%, rgba(10,13,20,0.95) 80%, #0a0d14 100%)",
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Color Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 z-0 h-64 w-64 rounded-full bg-purple-500/15 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* NATAN + LOGO */}
          <FadeIn>
            <div className="relative mx-auto flex justify-center">
              <div className="relative">
                {/* LOGO ON TOP OF NATAN'S HEAD */}
                <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-full opacity-70 blur-xl animate-spin-slow"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #22d3ee, #a855f7, #ec4899, #22d3ee)",
                      }}
                    />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400/60 bg-[#0a0d14]/95 backdrop-blur-md sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                      <img
                        src="/images/logo.png"
                        alt="CyberNovaX"
                        className="h-10 w-10 object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.9)] animate-float-logo sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* NATAN IMAGE — SMALLER */}
                <img
                  src="/images/mlbb/hero-featured-cropped-removebg-preview.png"
                  alt="Natan"
                  className="relative z-10 h-[220px] w-auto object-contain pt-8 drop-shadow-[0_0_60px_rgba(34,211,238,0.8)] animate-float-logo sm:h-[280px] sm:pt-10 lg:h-[340px] lg:pt-12"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          </FadeIn>

          {/* BRAND NAME */}
          <FadeIn delay={150}>
            <div className="mt-2 text-center">
              <div
                className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl"
                style={{
                  background:
                    "linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(168,85,247,0.4))",
                }}
              >
                CYBERNOVAX
              </div>
              <div className="mx-auto mt-2 h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>
          </FadeIn>

          {/* SUBTITLE */}
          <FadeIn delay={250}>
            <h1 className="mt-4 text-center text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
              {lang === "km"
                ? "ជ្រើសរើស Game ដែលអ្នកចូលចិត្ត"
                : "Choose Your Favorite Game"}
            </h1>
          </FadeIn>

          {/* GAME CARDS — NOW VISIBLE */}
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {/* FREE FIRE CARD */}
            <FadeIn delay={350}>
              <Link
                href="/ff-hub"
                className="group relative block overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40"
                style={{ boxShadow: "0 30px 70px -40px #f59e0b88" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/ff-card.jpg"
                    alt="Free Fire"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/25 to-red-500/25 shadow-xl ring-2 ring-orange-500/50 backdrop-blur-sm sm:h-16 sm:w-16">
                      <img
                        src="/images/ff-logo.png"
                        alt="Free Fire Logo"
                        className="h-full w-full scale-110 object-contain p-1 drop-shadow-[0_0_16px_rgba(249,115,22,0.9)]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                        Free Fire
                      </h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400 sm:text-xs">
                        {lang === "km" ? "ហ្គេមបាញ់ប្រហារ" : "Battle Royale"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <Users size={13} className="text-orange-400" />
                      <span className="text-xs font-bold text-white sm:text-sm">
                        41+ {lang === "km" ? "តួអង្គ" : "Heroes"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-orange-400" />
                      <span className="text-xs font-bold text-white sm:text-sm">
                        27+ {lang === "km" ? "អាវុធ" : "Weapons"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-xs font-black text-white shadow-lg transition-all group-hover:gap-3 sm:text-sm">
                    {lang === "km" ? "ចូល Free Fire Hub" : "Enter FF Hub"}
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* MLBB CARD */}
            <FadeIn delay={450}>
              <Link
                href="/mlbb"
                className="group relative block overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
                style={{ boxShadow: "0 30px 70px -40px #22d3ee88" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/mlbb-card.jpg"
                    alt="Mobile Legends"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/25 to-blue-500/25 shadow-xl ring-2 ring-cyan-500/50 backdrop-blur-sm sm:h-16 sm:w-16">
                      <img
                        src="/images/mlbb-logo.png"
                        alt="MLBB Logo"
                        className="h-full w-full scale-110 object-contain p-1 drop-shadow-[0_0_16px_rgba(34,211,238,0.9)]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                        Mobile Legends
                      </h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 sm:text-xs">
                        {lang === "km" ? "MOBA ប្រកួតប្រជែង" : "MOBA Battle"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <Users size={13} className="text-cyan-400" />
                      <span className="text-xs font-bold text-white sm:text-sm">
                        133+ {lang === "km" ? "តួអង្គ" : "Heroes"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles size={13} className="text-cyan-400" />
                      <span className="text-xs font-bold text-white sm:text-sm">
                        Meta 2026
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-black text-white shadow-lg transition-all group-hover:gap-3 sm:text-sm">
                    {lang === "km" ? "ចូល MLBB Hub" : "Enter MLBB Hub"}
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

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