"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Crosshair, Filter, Zap, Target, Flame, Award } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  FF_WEAPONS, CATEGORY_LABELS, TIER_COLORS,
  type WeaponCategory,
} from "@/lib/ffWeapons";

const CATEGORIES: WeaponCategory[] = ["ar", "smg", "shotgun", "sniper", "dmr", "lmg", "pistol"];

function WeaponImage({ id, emoji, accent, name }: { id: string; emoji: string; accent: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span
        className="grid h-32 w-32 shrink-0 place-items-center rounded-2xl text-6xl"
        style={{ background: accent + "20", boxShadow: "0 0 0 3px " + accent + "55" }}
      >
        {emoji}
      </span>
    );
  }

  return (
    <div
      className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl"
      style={{ background: accent + "20", boxShadow: "0 0 0 3px " + accent + "55" }}
    >
      <img
        src={"/images/ff/weapons/" + id + ".png"}
        alt={name}
        className="h-full w-full object-contain p-2"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[10px] font-bold">
        <span className="text-faint uppercase">{label}</span>
        <span style={{ color }}>{value}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-black/30">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: value + "%", background: color }}
        />
      </div>
    </div>
  );
}

export default function WeaponsPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [filter, setFilter] = useState<WeaponCategory | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? FF_WEAPONS : FF_WEAPONS.filter((w) => w.category === filter)),
    [filter]
  );

  return (
    <>
      <MoodSetter mood="ff" />

      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(239,68,68,0.20) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <Link
            href="/ff-hub"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-red-400"
          >
            <ArrowLeft size={13} />
            {km ? "ត្រឡប់ FF Hub" : "Back to FF Hub"}
          </Link>

          <FadeIn>
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: "#ef4444" }}>
              <Crosshair size={13} />
              WEAPONS
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">Free Fire</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "អាវុធ" : "Weapons"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {km
                ? FF_WEAPONS.length + " អាវុធ — ស្ថិតិ និងព័ត៌មានលម្អិត"
                : FF_WEAPONS.length + " weapons — stats and details"}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:pt-14">
        <FadeIn>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-faint">
              <Filter size={12} />
              {km ? "តម្រង" : "Filter"}:
            </span>
            <button
              onClick={() => setFilter("all")}
              className="rounded-full border px-3 py-1 text-xs font-bold transition-all"
              style={{
                borderColor: filter === "all" ? "#ef4444" : "var(--color-line)",
                color: filter === "all" ? "#ef4444" : "var(--color-muted)",
                background: filter === "all" ? "rgba(239,68,68,0.1)" : "transparent",
              }}
            >
              {km ? "ទាំងអស់" : "All"} ({FF_WEAPONS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const info = CATEGORY_LABELS[cat];
              const count = FF_WEAPONS.filter((w) => w.category === cat).length;
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="rounded-full border px-3 py-1 text-xs font-bold transition-all"
                  style={{
                    borderColor: active ? info.color : "var(--color-line)",
                    color: active ? info.color : "var(--color-muted)",
                    background: active ? info.color + "22" : "transparent",
                  }}
                >
                  {km ? info.km : info.en} ({count})
                </button>
              );
            })}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w, i) => {
            const catInfo = CATEGORY_LABELS[w.category];
            return (
              <FadeIn key={w.id} delay={i * 40}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-5 transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-line)",
                    boxShadow: "0 20px 50px -32px " + w.accent + "88",
                  }}
                >
                  <span className="absolute left-0 top-0 h-full w-1.5" style={{ background: w.accent }} />

                  <div className="flex flex-col items-center text-center">
                    <WeaponImage id={w.id} emoji={w.emoji} accent={w.accent} name={w.name} />

                    <div className="mt-3 flex items-center gap-2">
                      <h3 className="text-xl font-black tracking-tight">{w.name}</h3>
                      <span
                        className="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-black"
                        style={{
                          background: TIER_COLORS[w.tier] + "22",
                          color: TIER_COLORS[w.tier],
                          boxShadow: "0 0 0 1px " + TIER_COLORS[w.tier] + "55",
                        }}
                      >
                        {w.tier}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
                      <span
                        className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase"
                        style={{ background: catInfo.color + "22", color: catInfo.color }}
                      >
                        {km ? catInfo.km : catInfo.en}
                      </span>
                      <span className="inline-block rounded-full bg-black/30 px-2.5 py-0.5 text-[11px] font-bold text-muted">
                        {w.ammo}
                      </span>
                    </div>
                  </div>

                  {/* Stats Bars */}
                  <div className="mt-5 space-y-2.5">
                    <StatBar label={km ? "ខូចខាត" : "DAMAGE"} value={w.damage} color="#ef4444" />
                    <StatBar label={km ? "ល្បឿនបាញ់" : "RATE"} value={w.rate} color="#f59e0b" />
                    <StatBar label={km ? "ជួរ" : "RANGE"} value={w.range} color="#22d3ee" />
                    <StatBar label={km ? "ត្រូវ" : "ACCURACY"} value={w.accuracy} color="#22c55e" />
                  </div>

                  {/* Best For */}
                  <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[11px]">
                    <span className="flex items-center gap-1.5 text-faint">
                      <Award size={11} />
                      {km ? "ចំណាត់ថ្នាក់" : "TIER"}
                    </span>
                    <span className="font-black" style={{ color: TIER_COLORS[w.tier] }}>
                      {w.tier}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}