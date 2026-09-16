"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Swords, Filter } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  FF_WEAPONS, CATEGORY_LABELS, TIER_COLORS,
  getWeaponCount, type WeaponCategory,
} from "@/lib/ffWeapons";

const CATEGORIES: WeaponCategory[] = ["ar", "smg", "shotgun", "sniper", "dmr", "lmg", "pistol"];

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
              "radial-gradient(ellipse at top, rgba(34,211,238,0.20) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <Link
            href="/ff-hub"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-cyan-400"
          >
            <ArrowLeft size={13} />
            {km ? "ត្រឡប់ FF Hub" : "Back to FF Hub"}
          </Link>

          <FadeIn>
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: "#22d3ee" }}>
              <Swords size={13} />
              WEAPONS
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">Free Fire</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
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
                ? getWeaponCount() + " អាវុធ — ព័ត៌មានលម្អិត និង stats"
                : getWeaponCount() + " weapons — full stats and details"}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
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
                borderColor: filter === "all" ? "#22d3ee" : "var(--color-line)",
                color: filter === "all" ? "#22d3ee" : "var(--color-muted)",
                background: filter === "all" ? "rgba(34,211,238,0.1)" : "transparent",
              }}
            >
              {km ? "ទាំងអស់" : "All"} ({getWeaponCount()})
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w, i) => {
            const catInfo = CATEGORY_LABELS[w.category];
            return (
              <FadeIn key={w.id} delay={i * 40}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-surface p-5 transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-line)",
                    boxShadow: "0 20px 50px -32px " + w.accent + "88",
                  }}
                >
                  <span
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ background: w.accent }}
                  />

                  <div className="flex items-start gap-4">
                    <span
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-3xl"
                      style={{
                        background: w.accent + "20",
                        boxShadow: "0 0 0 1px " + w.accent + "55",
                      }}
                    >
                      {w.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-base font-black tracking-tight">
                          {w.name}
                        </h3>
                        <span
                          className="shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-black"
                          style={{
                            background: TIER_COLORS[w.tier] + "22",
                            color: TIER_COLORS[w.tier],
                            boxShadow: "0 0 0 1px " + TIER_COLORS[w.tier] + "55",
                          }}
                        >
                          {w.tier}
                        </span>
                      </div>
                      <span
                        className="mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
                        style={{ background: catInfo.color + "22", color: catInfo.color }}
                      >
                        {km ? catInfo.km : catInfo.en}
                      </span>
                    </div>
                  </div>

                  {/* stats */}
                  <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-xs">
                    <Stat label={km ? "ខូចខាត" : "Damage"}   value={w.damage}   color="#ef4444" />
                    <Stat label={km ? "ល្បឿន" : "Rate"}       value={w.rate}     color="#f59e0b" />
                    <Stat label={km ? "ចម្ងាយ" : "Range"}      value={w.range}    color="#22c55e" />
                    <Stat label={km ? "ជាក់លាក់" : "Accuracy"} value={w.accuracy} color="#3b82f6" />
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-[11px] text-faint">
                    <span>{w.ammo}</span>
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

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[10px] font-bold text-faint">
        <span>{label}</span>
        <span className="font-mono" style={{ color }}>{value}</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-black/40">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: value + "%", background: color }}
        />
      </div>
    </div>
  );
}