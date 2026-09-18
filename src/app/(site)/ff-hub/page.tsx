"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Flame, Sparkles, Users, Crosshair, PawPrint, Map as MapIcon, Trophy, Target, TrendingUp, Zap, Star, Crown, Radio, Award, BookOpen } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import { getCharacterCount } from "@/lib/ffCharacters";
import { FF_WEAPONS } from "@/lib/ffWeapons";
import { getPetCount } from "@/lib/ffPets";
import { getMapCount } from "@/lib/ffMaps";

type FFGuide = {
  slug: string;
  Icon: typeof Users;
  titleEn: string;
  titleKm: string;
  descEn: string;
  descKm: string;
  href: string;
  accent: string;
  accent2: string;
  badge: string;
  meta: string;
  image?: string;
  featured?: boolean;
  trending?: boolean;
};

const GUIDES: FFGuide[] = [
  {
    slug: "sensitivity",
    Icon: Target,
    titleEn: "Sensitivity",
    titleKm: "Sensitivity",
    descEn: "Tune sensitivity to match your device",
    descKm: "កំណត់ភាពប្រែប្រួលឱ្យត្រូវនឹងឧបករណ៍របស់អ្នក",
    href: "/ff/sensitivity",
    accent: "#22d3ee",
    accent2: "#67e8f9",
    badge: "176+ ឧបករណ៍",
    meta: "៨ តម្លៃ",
    image: "/images/ff/cover-sensitivity.png",
    featured: true,
  },
  {
    slug: "characters",
    Icon: Users,
    titleEn: "Characters",
    titleKm: "តួអង្គ",
    descEn: "Full guide to every character skill",
    descKm: "Guideពេញលេញអំពី Skill តួអង្គទាំងអស់",
    href: "/ff/characters",
    accent: "#06b6d4",
    accent2: "#22d3ee",
    badge: getCharacterCount() + " តួអង្គ",
    meta: "Skill និង Role",
    image: "/images/ff/cover-characters.png",
    trending: true,
  },
  {
    slug: "weapons",
    Icon: Crosshair,
    titleEn: "Weapons",
    titleKm: "អាវុធ",
    descEn: "Detailed stats on every weapon",
    descKm: "ព័ត៌មានលម្អិតអំពី Stats អាវុធទាំងអស់",
    href: "/ff/weapons",
    accent: "#0891b2",
    accent2: "#06b6d4",
    badge: FF_WEAPONS.length + " អាវុធ",
    meta: "ខូចខាត និងជួរ",
    image: "/images/ff/cover-weapons.png",
  },
  {
    slug: "pets",
    Icon: PawPrint,
    titleEn: "Pets",
    titleKm: "សត្វចិញ្ចឹម",
    descEn: "Pet skills and best usage tips",
    descKm: "Skill សត្វចិញ្ចឹម និងគន្លឹះប្រើប្រាស់ល្អបំផុត",
    href: "/ff/pets",
    accent: "#0e7490",
    accent2: "#0891b2",
    badge: getPetCount() + " សត្វចិញ្ចឹម",
    meta: "Skill និង Combo",
    image: "/images/ff/cover-pets.png",
  },
  {
    slug: "maps",
    Icon: MapIcon,
    titleEn: "Maps",
    titleKm: "ផែនទី",
    descEn: "Strategy and key spots on each map",
    descKm: "យុទ្ធសាស្ត្រ និងចំណុចសំខាន់ៗលើផែនទីនីមួយៗ",
    href: "/ff/maps",
    accent: "#6366f1",
    accent2: "#818cf8",
    badge: getMapCount() + " ផែនទី",
    meta: "Rotation និង Zone",
    image: "/images/ff/cover-maps.png",
  },
  {
    slug: "tier",
    Icon: Trophy,
    titleEn: "Tier List",
    titleKm: "Tier List",
    descEn: "Character rankings by current meta",
    descKm: "ចំណាត់ថ្នាក់តួអង្គតាម Meta បច្ចុប្បន្ន",
    href: "/ff/tier",
    accent: "#a855f7",
    accent2: "#c084fc",
    badge: "S + A + B TIER",
    meta: "Update រៀងរាល់សប្តាហ៍",
    image: "/images/ff/cover-tier.png",
    trending: true,
  },
];

function AnimatedCounter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, started]);

  return <div ref={ref}>{count}</div>;
}

function NewsTicker() {
  const news = [
    "🔥 Patch 1.105 ចេញផ្សាយ — តួអង្គថ្មី: Ray",
    "⚡ FFWS 2026 ចាប់ផ្តើមក្នុង 3 ថ្ងៃ",
    "🎁 ព្រឹត្តិការណ៍ Free Diamond ដល់ 30 កញ្ញា",
    "🏆 Meta Update: Alok & Chrono កំពូល Tier",
    "🎯 ការផ្លាស់ប្តូរ Balance អាវុធថ្មី",
  ];

  return (
    <div className="relative overflow-hidden border-y border-cyan-500/20 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-red-500/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-red-400">
          <Radio size={10} className="animate-pulse" />
          ផ្សាយបន្តផ្ទាល់
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-ticker">
            {news.concat(news).map((item, i) => (
              <span key={i} className="text-xs font-bold text-white/80">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { label: "AK47", href: "/ff/weapons", emoji: "🔫" },
    { label: "Alok", href: "/ff/characters", emoji: "🎧" },
    { label: "Bermuda", href: "/ff/maps", emoji: "🗺️" },
    { label: "Tier List", href: "/ff/tier", emoji: "🏆" },
    { label: "Falco", href: "/ff/pets", emoji: "🦅" },
    { label: "Sensitivity", href: "/ff/sensitivity", emoji: "🎯" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white/40">
          <Zap size={11} />
          ពេញនិយម:
        </span>
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white/70 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <span className="text-sm">{l.emoji}</span>
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function HeroOfTheWeek() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-transparent backdrop-blur-md">
          <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-yellow-500/30 blur-[100px]" />

          <div className="relative grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[200px_1fr_auto]">
            <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl" />
              <img
                src="/images/ff/heroes/alok.png"
                alt="Hero of the Week"
                className="relative h-full w-full object-contain drop-shadow-[0_0_40px_rgba(245,158,11,0.6)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0a0d14]">
                <Crown size={10} />
                តួអង្គល្អបំផុតប្រចាំសប្តាហ៍
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Alok
              </h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-widest text-yellow-400">
                Support · S+ Tier
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                Drop the Beat — បង្កើតតំបន់ DJ ដែលពន្លឿនចលនា 10% និងព្យាបាល HP 5 HP/s ដល់ក្រុម ។ សមស្របសម្រាប់ក្រុមវាយប្រហារលឿន ។
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-[9px] font-bold uppercase text-white/40">Win Rate</div>
                  <div className="text-lg font-black text-green-400">54.2%</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-[9px] font-bold uppercase text-white/40">Pick Rate</div>
                  <div className="text-lg font-black text-cyan-400">18.5%</div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <div className="text-[9px] font-bold uppercase text-white/40">Ban Rate</div>
                  <div className="text-lg font-black text-red-400">12.3%</div>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/ff/characters"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-3 text-sm font-black text-[#0a0d14] shadow-lg shadow-yellow-500/30 transition-all hover:shadow-xl hover:shadow-yellow-500/50 hover:scale-105"
              >
                <Award size={14} />
                មើលតួអង្គ
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default function FFHubPage() {
  const stats = [
    { Icon: Users, label: "តួអង្គ", value: getCharacterCount(), color: "#22d3ee" },
    { Icon: Crosshair, label: "អាវុធ", value: FF_WEAPONS.length, color: "#06b6d4" },
    { Icon: PawPrint, label: "សត្វចិញ្ចឹម", value: getPetCount(), color: "#22c55e" },
    { Icon: MapIcon, label: "ផែនទី", value: getMapCount(), color: "#a855f7" },
  ];

  return (
    <>
      <MoodSetter mood="ff" />

      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/images/ff/background-main.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,13,20,0.85) 0%, rgba(10,13,20,0.92) 40%, rgba(10,13,20,0.97) 100%)",
        }}
      />

      <div className="relative z-10">
        <NewsTicker />

        {/* HERO HEADER */}
        <section className="relative overflow-hidden border-b border-line/50">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/25 blur-[120px]" />
          <div className="absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(139,92,246,0.15))",
                      borderColor: "rgba(34,211,238,0.4)",
                      color: "#22d3ee",
                      boxShadow: "0 0 24px rgba(34,211,238,0.25), inset 0 0 12px rgba(34,211,238,0.1)",
                    }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                    <Flame size={12} />
                    FREE FIRE HUB
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
                    SEASON 12
                  </span>
                </div>

                <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
                  <span className="text-white">Free Fire</span>
                  <br />
                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #ec4899 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "drop-shadow(0 0 30px rgba(167,139,250,0.5))",
                    }}
                  >
                    Guides 2026
                    <span
                      className="absolute -bottom-2 left-0 h-1 w-full rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #22d3ee, #a78bfa, #ec4899, transparent)",
                        filter: "blur(2px)",
                      }}
                    />
                  </span>
                </h1>

                <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 text-cyan-400">
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {getCharacterCount()}+ តួអង្គ
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-cyan-400">
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {FF_WEAPONS.length}+ អាវុធ
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-green-400">
                    <span className="h-1 w-1 rounded-full bg-green-400" />
                    {getPetCount()}+ សត្វចិញ្ចឹម
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-purple-400">
                    <span className="h-1 w-1 rounded-full bg-purple-400" />
                    {getMapCount()}+ ផែនទី
                  </span>
                </div>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                  Guideពេញលេញសម្រាប់អ្នកលេង Free Fire — តួអង្គ អាវុធ សត្វចិញ្ចឹម ផែនទី និង Tier List ទាំងអស់នៅកន្លែងតែមួយ ។
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#guides"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-black text-[#0a0d14] shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    ចាប់ផ្តើមរុករក
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/ff/tier"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-black text-white backdrop-blur-md transition-all hover:bg-white/10"
                  >
                    <Trophy size={14} />
                    មើល Tier List
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
                        <div className="mt-2 text-2xl font-black text-white">
                          <AnimatedCounter value={s.value} />
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>

              {/* HERO IMAGE — BIGGER + FLOAT ANIMATION (CSS class, no <style jsx>) */}
              <FadeIn delay={200}>
                <div className="relative flex justify-center lg:justify-end">
                  <div className="relative w-[380px] h-[380px] sm:w-[440px] sm:h-[440px] lg:w-[560px] lg:h-[560px]">
                    {/* Multi-layer Glow */}
                    <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-[100px]" />
                    <div className="absolute inset-8 rounded-full bg-purple-500/25 blur-[80px]" />
                    <div className="absolute inset-16 rounded-full bg-cyan-400/20 blur-[60px]" />
                    <div className="absolute inset-24 rounded-full bg-pink-500/15 blur-[40px]" />

                    {/* Image with Float Animation */}
                    <img
                      src="/images/ff/hero-featured-ff.png"
                      alt="FF Character"
                      className="relative h-full w-full object-contain drop-shadow-[0_0_80px_rgba(34,211,238,0.8)] animate-hero-float"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <QuickLinks />

        <HeroOfTheWeek />

        {/* ALL GUIDES */}
        <section id="guides" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-20">
          <FadeIn>
            <div className="mb-8 flex items-center gap-3">
              <Sparkles size={18} className="text-cyan-400" />
              <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Guideទាំងអស់
              </h2>
              <span className="ml-2 rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-cyan-400">
                {GUIDES.length} Guide
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g, i) => {
              const Icon = g.Icon;
              return (
                <FadeIn key={g.slug} delay={i * 60}>
                  <Link
                    href={g.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                    style={{
                      borderColor: g.accent + "40",
                      background: "rgba(15,18,26,0.85)",
                      boxShadow: "0 20px 50px -30px " + g.accent + "88, 0 0 0 1px " + g.accent + "20 inset",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl transition-all duration-500 group-hover:opacity-60 group-hover:scale-125"
                      style={{ background: g.accent }}
                    />
                    <div
                      className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40"
                      style={{ background: g.accent2 }}
                    />

                    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                      <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-full" />
                    </div>

                    <div
                      className="relative aspect-[16/11] overflow-hidden"
                      style={{
                        background:
                          "radial-gradient(ellipse at top right, " + g.accent + "40 0%, transparent 60%), linear-gradient(135deg, " + g.accent + "25 0%, " + g.accent2 + "10 45%, #0a0d14 100%)",
                      }}
                    >
                      {g.image ? (
                        <img
                          src={g.image}
                          alt={g.titleKm}
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-115"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center">
                          <Icon
                            size={80}
                            className="transition-transform duration-500 group-hover:scale-110"
                            style={{ color: g.accent2, opacity: 0.35 }}
                            strokeWidth={1.5}
                          />
                        </div>
                      )}

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
                          color: g.accent2,
                          boxShadow: "0 0 0 1px " + g.accent + "88, 0 0 16px " + g.accent + "40",
                        }}
                      >
                        {g.badge}
                      </span>

                      {g.featured && (
                        <span
                          className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[9px] font-black uppercase tracking-widest"
                          style={{
                            background: "linear-gradient(135deg,#22d3ee,#a78bfa)",
                            color: "#0a0d14",
                            boxShadow: "0 0 20px rgba(34,211,238,0.6)",
                          }}
                        >
                          <Sparkles size={9} />
                          ថ្មី
                        </span>
                      )}

                      {g.trending && !g.featured && (
                        <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg shadow-red-500/50">
                          <TrendingUp size={9} />
                          ពេញនិយម
                        </span>
                      )}

                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-lg">
                          {g.titleKm}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                          {g.meta}
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col p-5">
                      <p className="text-sm leading-relaxed text-white/60">
                        {g.descKm}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-4">
                        <div
                          className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider transition-all group-hover:gap-3"
                          style={{ color: g.accent2 }}
                        >
                          <BookOpen size={13} />
                          មើលGuide
                        </div>
                        <div
                          className="grid h-8 w-8 place-items-center rounded-full border-2 transition-all group-hover:scale-110 group-hover:rotate-[-15deg]"
                          style={{
                            borderColor: g.accent + "60",
                            background: g.accent + "15",
                          }}
                        >
                          <ArrowRight
                            size={13}
                            className="transition-transform group-hover:translate-x-0.5"
                            style={{ color: g.accent2 }}
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