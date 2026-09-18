"use client";
import Link from "next/link";
import {
  Trophy, Users, BarChart3, Swords, Shield, Sparkles, ArrowRight,
  Flame, Zap, Star, TrendingUp, Target,
} from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/i18n";

type HubCard = {
  href: string;
  icon: typeof Trophy;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  color: string;
  badge: string;
  meta: string;
  image: string;
  featured?: boolean;
  trending?: boolean;
};

const CARDS: HubCard[] = [
  {
    href: "/mlbb/tier",
    icon: Trophy,
    titleKm: "Tier List",
    titleEn: "Tier List",
    descKm: "ចំណាត់ថ្នាក់ hero តាម Meta បច្ចុប្បន្ន — SS, S, A, B, C",
    descEn: "Hero rankings by current meta — SS, S, A, B, C",
    color: "#f5c542",
    badge: "133 HEROES",
    meta: "Updated weekly",
    image: "/images/mlbb/cover-mlbb-tier.png",
    featured: true,
  },
  {
    href: "/mlbb/heroes",
    icon: Users,
    titleKm: "Heroes",
    titleEn: "Heroes",
    descKm: "ស្វែងរក hero ទាំងអស់តាម Role និង difficulty",
    descEn: "Browse all heroes by role and difficulty",
    color: "#3b82f6",
    badge: "133 HEROES",
    meta: "By role",
    image: "/images/mlbb/cover-mlbb-heroes.png",
  },
  {
    href: "/mlbb/stats",
    icon: BarChart3,
    titleKm: "Stats",
    titleEn: "Stats",
    descKm: "Win rate, Pick rate, Ban rate របស់ hero នីមួយៗ",
    descEn: "Win rate, pick rate, ban rate for each hero",
    color: "#10b981",
    badge: "LIVE DATA",
    meta: "Ranked stats",
    image: "/images/mlbb/cover-mlbb-stats.png",
  },
  {
    href: "/mlbb/counters",
    icon: Swords,
    titleKm: "Counters",
    titleEn: "Counters",
    descKm: "រក hero ដែលអាចទប់ទល់នឹងសត្រូវបានយ៉ាងងាយ",
    descEn: "Find the best hero to counter your enemy",
    color: "#ef4444",
    badge: "MATCHUPS",
    meta: "Pick smart",
    image: "/images/mlbb/cover-mlbb-counters.png",
  },
  {
    href: "/mlbb/builds",
    icon: Shield,
    titleKm: "Builds",
    titleEn: "Builds",
    descKm: "Item build ណែនាំសម្រាប់ hero ទាំងអស់ — Meta 2026",
    descEn: "Recommended item builds for all heroes — Meta 2026",
    color: "#a855f7",
    badge: "133 BUILDS",
    meta: "By situation",
    image: "/images/mlbb/cover-mlbb-builds.png",
    trending: true,
  },
  {
    href: "/mlbb/emblems",
    icon: Sparkles,
    titleKm: "Emblems",
    titleEn: "Emblems",
    descKm: "Emblem sets និង talents ល្អបំផុតសម្រាប់ hero នីមួយៗ",
    descEn: "Best emblem sets and talents for each hero",
    color: "#22d3ee",
    badge: "ALL SETS",
    meta: "Talents & Builds",
    image: "/images/mlbb/cover-mlbb-emblems.png",
  },
];

export default function MLBBHubPage() {
  const { lang } = useLang();
  const km = lang === "km";

  const stats = [
    { Icon: Users, label: km ? "តួអង្គ" : "Heroes", value: "133", color: "#22d3ee" },
    { Icon: Shield, label: "Items", value: "104", color: "#a855f7" },
    { Icon: Sparkles, label: "Emblems", value: "7", color: "#f5c542" },
    { Icon: Target, label: "Roles", value: "6", color: "#22c55e" },
  ];

  return (
    <>
      <MoodSetter mood="mlbb" />

      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/mlbb/background-mlbb.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,13,20,0.80) 0%, rgba(10,13,20,0.90) 40%, rgba(10,13,20,0.97) 100%)",
        }}
      />

      <div className="relative z-10">
        <section className="relative overflow-hidden border-b border-line/50">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[120px]" />
          <div className="absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(168,85,247,0.15))",
                      borderColor: "rgba(59,130,246,0.4)",
                      color: "#60a5fa",
                      boxShadow: "0 0 24px rgba(59,130,246,0.25), inset 0 0 12px rgba(59,130,246,0.1)",
                    }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                    </span>
                    <Flame size={12} />
                    MOBILE LEGENDS HUB
                    <Sparkles size={10} className="text-purple-400" />
                  </span>

                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-widest"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                      color: "#0a0d14",
                      boxShadow: "0 0 20px rgba(245,158,11,0.5)",
                    }}
                  >
                    <Zap size={10} />
                    META 2026
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white/70 backdrop-blur-md">
                    <Star size={10} className="text-yellow-400" />
                    SEASON 34
                  </span>
                </div>

                <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
                  <span className="text-white">Mobile Legends</span>
                  <br />
                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 30px rgba(168,85,247,0.5))",
                    }}
                  >
                    Guides 2026
                    <span
                      className="absolute -bottom-2 left-0 h-1 w-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899, transparent)",
                        filter: "blur(2px)",
                      }}
                    />
                  </span>
                </h1>

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 text-blue-400">
                    <span className="h-1 w-1 rounded-full bg-blue-400" />
                    133+ Heroes
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-purple-400">
                    <span className="h-1 w-1 rounded-full bg-purple-400" />
                    104+ Items
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-yellow-400">
                    <span className="h-1 w-1 rounded-full bg-yellow-400" />
                    7 Emblems
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-green-400">
                    <span className="h-1 w-1 rounded-full bg-green-400" />
                    6 Roles
                  </span>
                </div>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                  {km
                    ? "Guide ពេញលេញសម្រាប់អ្នកលេង MLBB — Tier List, Heroes, Stats, Counters, Builds និង Emblems ទាំងអស់នៅកន្លែងតែមួយ"
                    : "Complete guides for MLBB players — tier lists, heroes, stats, counters, builds and emblems all in one place."}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#guides"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 px-6 py-3 text-sm font-black text-[#0a0d14] shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
                  >
                    {km ? "ចាប់ផ្តើមរុករក" : "Start Exploring"}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/mlbb/tier"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-black text-white backdrop-blur-md transition-all hover:bg-white/10"
                  >
                    <Trophy size={14} />
                    {km ? "មើល Tier List" : "View Tier List"}
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-4 gap-3">
                  {stats.map((s) => {
                    const Icon = s.Icon;
                    return (
                      <div
                        key={s.label}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10"
                      >
                        <Icon size={16} style={{ color: s.color }} />
                        <div className="mt-2 text-2xl font-black text-white">{s.value}</div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>

              {/* MOBILE HERO IMAGE */}
              <div className="relative flex items-center justify-center lg:hidden">
                <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/40 blur-[80px]" />
                <div className="relative z-10 h-[350px] w-full">
                  <img
                    src="/images/mlbb/hero-featured-cropped-removebg-preview.png"
                    alt="Featured Hero"
                    className="h-full w-full object-contain object-center scale-110 drop-shadow-[0_0_60px_rgba(59,130,246,0.8)]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* DESKTOP HERO IMAGE */}
              <FadeIn delay={200}>
                <div className="relative hidden lg:flex lg:items-center lg:justify-center">
                  <div className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-[100px]" />
                  <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[80px]" />
                  <div className="relative z-10 h-[600px] w-full">
                    <img
                      src="/images/mlbb/hero-featured-cropped-removebg-preview.png"
                      alt="Featured Hero"
                      className="h-full w-full object-contain object-center scale-125 drop-shadow-[0_0_80px_rgba(59,130,246,0.8)]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="absolute left-10 top-20 h-3 w-3 rounded-full bg-blue-400 opacity-80 blur-[1px]" />
                  <div className="absolute right-20 top-40 h-2 w-2 rounded-full bg-purple-400 opacity-70 blur-[1px]" />
                  <div className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-pink-400 opacity-60 blur-[1px]" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="guides" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <FadeIn>
            <div className="mb-8 flex items-center gap-3">
              <Sparkles size={18} className="text-blue-400" />
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                {km ? "Guide ទាំងអស់" : "All Guides"}
              </h2>
              <span className="ml-2 rounded-full bg-blue-500/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-blue-400">
                {CARDS.length} Guides
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.href} delay={i * 60}>
                  <Link
                    href={c.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                    style={{
                      borderColor: c.color + "40",
                      background: "rgba(15,18,26,0.85)",
                      boxShadow: "0 20px 50px -30px " + c.color + "88, 0 0 0 1px " + c.color + "20 inset",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125"
                      style={{ background: c.color }}
                    />
                    <div
                      className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40"
                      style={{ background: c.color }}
                    />

                    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                      <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-full" />
                    </div>

                    <div
                      className="relative aspect-[16/11] overflow-hidden"
                      style={{
                        background:
                          "radial-gradient(ellipse at top right, " + c.color + "40 0%, transparent 60%), linear-gradient(135deg, " + c.color + "25 0%, " + c.color + "10 45%, #0a0d14 100%)",
                      }}
                    >
                      <img
                        src={c.image}
                        alt={c.titleEn}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-115"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />

                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(180deg, transparent 35%, rgba(10,13,20,0.95) 75%, #0a0d14 100%)",
                        }}
                      />

                      <span
                        className="absolute left-3 top-3 z-10 rounded-md px-2.5 py-1 text-[9px] font-black uppercase tracking-widest backdrop-blur-md"
                        style={{
                          background: "rgba(0,0,0,0.7)",
                          color: c.color,
                          boxShadow: "0 0 0 1px " + c.color + "88, 0 0 16px " + c.color + "40",
                        }}
                      >
                        {c.badge}
                      </span>

                      {c.featured && (
                        <span
                          className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[9px] font-black uppercase tracking-widest"
                          style={{
                            background: "linear-gradient(135deg,#3b82f6,#a855f7)",
                            color: "#0a0d14",
                            boxShadow: "0 0 20px rgba(59,130,246,0.6)",
                          }}
                        >
                          <Sparkles size={9} />
                          TOP
                        </span>
                      )}

                      {c.trending && !c.featured && (
                        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg shadow-red-500/50">
                          <TrendingUp size={9} />
                          HOT
                        </span>
                      )}

                      <span
                        className="absolute bottom-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6"
                        style={{
                          background: c.color + "30",
                          color: c.color,
                          boxShadow: "0 0 0 1px " + c.color + "88",
                        }}
                      >
                        <Icon size={20} strokeWidth={2.2} />
                      </span>

                      <div className="absolute bottom-4 left-4 right-16 z-10">
                        <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-lg">
                          {km ? c.titleKm : c.titleEn}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                          {c.meta}
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col p-5">
                      <p className="text-sm leading-relaxed text-white/60">
                        {km ? c.descKm : c.descEn}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div
                          className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-all group-hover:gap-3"
                          style={{ color: c.color }}
                        >
                          {km ? "មើល Guide" : "View Guide"}
                        </div>
                        <div
                          className="grid h-8 w-8 place-items-center rounded-full border-2 transition-all group-hover:scale-110 group-hover:rotate-[-15deg]"
                          style={{
                            borderColor: c.color + "60",
                            background: c.color + "15",
                          }}
                        >
                          <ArrowRight
                            size={13}
                            className="transition-transform group-hover:translate-x-0.5"
                            style={{ color: c.color }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}