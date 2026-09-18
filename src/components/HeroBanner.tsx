"use client";
import Link from "next/link";
import { ArrowRight, Sparkles, Play, Crosshair, Swords } from "lucide-react";
import { useLang } from "@/lib/i18n";

type GameCard = {
  name: string;
  tagKm: string;
  tagEn: string;
  href: string;
  color: string;
  color2: string;
  emoji: string;
  icon: typeof Crosshair;
  stats: string[];
};

const GAMES: GameCard[] = [
  {
    name: "Free Fire",
    tagKm: "Sensitivity · Loadout",
    tagEn: "Sensitivity · Loadout",
    href: "/ff-hub",
    color: "#22d3ee",
    color2: "#67e8f9",
    emoji: "🔥",
    icon: Crosshair,
    stats: ["176+ Devices", "8 Values"],
  },
  {
    name: "Mobile Legends",
    tagKm: "Hero · Build · Meta",
    tagEn: "Hero · Build · Meta",
    href: "/mlbb",
    color: "#3b82f6",
    color2: "#60a5fa",
    emoji: "⚔️",
    icon: Swords,
    stats: ["110+ Heroes", "6 Roles"],
  },
];

export function HeroBanner() {
  const { lang } = useLang();
  const km = lang === "km";

  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(34,211,238,0.20) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(59,130,246,0.18) 0%, transparent 50%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* ═══ LEFT — headline + game cards ═══ */}
          <div>
            <div className="slide-up inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur">
              <Sparkles size={12} />
              {km ? "Guideលេងហ្គេម" : "GAMING GUIDES"}
            </div>

            <h1 className="slide-up mt-5 text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">{km ? "កម្រិត" : "Level"}</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "ឡើងលឿន" : "Up Faster"}
              </span>
            </h1>

            <p className="slide-up mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              {km
                ? "Guideពេញលេញ និងឧបករណ៍គណនា sensitivity សម្រាប់ Free Fire + Mobile Legends។ ជ្រើសហ្គេមដែលអ្នកលេងដើម្បីចាប់ផ្តើម។"
                : "Complete guides and sensitivity tools for Free Fire + Mobile Legends. Choose your game to get started."}
            </p>

            {/* 2 game cards side by side */}
            <div className="slide-up mt-8 grid gap-3 sm:grid-cols-2">
              {GAMES.map((g) => {
                const Icon = g.icon;
                return (
                  <Link
                    key={g.name}
                    href={g.href}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border p-4 transition-all hover:-translate-y-1"
                    style={{
                      borderColor: g.color + "40",
                      background: "linear-gradient(135deg, " + g.color + "12 0%, transparent 70%)",
                      boxShadow: "0 20px 40px -25px " + g.color + "88",
                    }}
                  >
                    <div
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-70"
                      style={{ background: g.color }}
                    />

                    <div className="relative flex items-center gap-3">
                      <span
                        className="grid h-11 w-11 place-items-center rounded-xl transition-transform group-hover:scale-110"
                        style={{
                          background: g.color + "20",
                          color: g.color,
                          boxShadow: "0 0 0 1px " + g.color + "55",
                        }}
                      >
                        <Icon size={20} strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-lg">{g.emoji}</span>
                          <h3 className="truncate text-sm font-black tracking-tight">
                            {g.name}
                          </h3>
                        </div>
                        <p className="truncate text-[10px] font-bold" style={{ color: g.color }}>
                          {km ? g.tagKm : g.tagEn}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-3 flex items-center justify-between border-t border-line/50 pt-3">
                      <div className="flex gap-2 text-[10px] font-bold text-faint">
                        {g.stats.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-0.5"
                        style={{ color: g.color }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ═══ RIGHT — video ═══ */}
          <div className="slide-up relative hidden lg:block">
            <div
              className="relative aspect-video overflow-hidden rounded-3xl border"
              style={{
                borderColor: "rgba(34,211,238,0.35)",
                boxShadow:
                  "0 40px 80px -30px rgba(34,211,238,0.45), 0 0 0 1px rgba(34,211,238,0.18)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/media/hero.mp4" type="video/mp4" />
              </video>

              {/* Fallback */}
              <div
                className="absolute inset-0 -z-10 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0c1a24 0%, #0a0d14 100%)",
                }}
              >
                <div className="text-center">
                  <span
                    className="mx-auto grid h-16 w-16 place-items-center rounded-full backdrop-blur"
                    style={{ background: "rgba(34,211,238,0.20)", color: "#22d3ee" }}
                  >
                    <Play size={24} fill="currentColor" />
                  </span>
                  <p className="mt-3 text-xs text-muted">
                    {km ? "ដាក់ video នៅ public/media/hero.mp4" : "Place video at public/media/hero.mp4"}
                  </p>
                </div>
              </div>

              {/* Vignette */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(10,13,20,0.6) 100%)",
                }}
              />

              {/* LIVE badge */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                LIVE
              </span>
            </div>

            {/* Floating PATCH chip */}
            <div
              className="float-chip absolute -bottom-4 -left-4 rounded-2xl border border-line bg-surface/95 px-4 py-3 backdrop-blur-xl"
              style={{ boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)" }}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-faint">
                PATCH
              </div>
              <div className="mt-0.5 font-mono text-lg font-black" style={{ color: "#22d3ee" }}>
                v1.9.50
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}