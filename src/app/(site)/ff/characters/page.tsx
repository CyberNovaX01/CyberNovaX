"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Filter, Timer, Crosshair, Lightbulb, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  FF_CHARACTERS, ROLE_LABELS, TIER_COLORS,
  getCharacterCount, type FFRole,
} from "@/lib/ffCharacters";

const ROLES: FFRole[] = ["rusher", "support", "tank", "sniper", "recon"];

function CharacterImage({ id, emoji, accent, name }: { id: string; emoji: string; accent: string; name: string }) {
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
        src={"/images/ff/heroes/" + id + ".png"}
        alt={name}
        className="h-full w-full object-cover object-top"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function CharactersPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [filter, setFilter] = useState<FFRole | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? FF_CHARACTERS : FF_CHARACTERS.filter((c) => c.role === filter)),
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
              <Users size={13} />
              CHARACTERS
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
                {km ? "តួអង្គ" : "Characters"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {km
                ? getCharacterCount() + " តួអង្គ — ជ្រើសរើសតាម Role ដើម្បីដឹងពេលប្រើ"
                : getCharacterCount() + " characters — pick by role to know when to use each"}
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
                borderColor: filter === "all" ? "#22d3ee" : "var(--color-line)",
                color: filter === "all" ? "#22d3ee" : "var(--color-muted)",
                background: filter === "all" ? "rgba(34,211,238,0.1)" : "transparent",
              }}
            >
              {km ? "ទាំងអស់" : "All"} ({getCharacterCount()})
            </button>
            {ROLES.map((r) => {
              const info = ROLE_LABELS[r];
              const count = FF_CHARACTERS.filter((c) => c.role === r).length;
              const active = filter === r;
              return (
                <button
                  key={r}
                  onClick={() => setFilter(r)}
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
          {filtered.map((c, i) => {
            const roleInfo = ROLE_LABELS[c.role];
            return (
              <FadeIn key={c.id} delay={i * 40}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-5 transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-line)",
                    boxShadow: "0 20px 50px -32px " + c.accent + "88",
                  }}
                >
                  <span className="absolute left-0 top-0 h-full w-1.5" style={{ background: c.accent }} />

                  {/* Character Header - Centered Layout */}
                  <div className="flex flex-col items-center text-center">
                    <CharacterImage id={c.id} emoji={c.emoji} accent={c.accent} name={c.name} />

                    <div className="mt-3 flex items-center gap-2">
                      <h3 className="text-xl font-black tracking-tight">{c.name}</h3>
                      <span
                        className="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-black"
                        style={{
                          background: TIER_COLORS[c.tier] + "22",
                          color: TIER_COLORS[c.tier],
                          boxShadow: "0 0 0 1px " + TIER_COLORS[c.tier] + "55",
                        }}
                      >
                        {c.tier}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
                      <span
                        className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase"
                        style={{ background: roleInfo.color + "22", color: roleInfo.color }}
                      >
                        {km ? roleInfo.km : roleInfo.en}
                      </span>
                      <span className="inline-block rounded-full bg-purple-500/15 px-2.5 py-0.5 text-[11px] font-bold text-purple-300">
                        {c.tier === "S" ? "TOP META" : c.tier === "A" ? "GOOD" : "OK"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5">
                    <Zap size={13} className="text-yellow-400" />
                    <span className="text-sm font-black text-yellow-400">{c.skillName}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {km ? c.abilityKm : c.abilityEn}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 rounded-lg border border-line bg-black/20 px-2.5 py-2">
                      <Timer size={12} className="text-cyan-400" />
                      <div className="min-w-0">
                        <div className="text-[9px] font-bold uppercase text-faint">CD</div>
                        <div className="truncate text-[11px] font-black text-cyan-400">{c.cooldown}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg border border-line bg-black/20 px-2.5 py-2">
                      <Crosshair size={12} className="text-orange-400" />
                      <div className="min-w-0">
                        <div className="text-[9px] font-bold uppercase text-faint">{km ? "អាវុធ" : "WEAPON"}</div>
                        <div className="truncate text-[11px] font-black text-orange-400">{c.bestWeapon}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-start gap-1.5 rounded-lg border border-line bg-black/20 p-3">
                    <Lightbulb size={13} className="mt-0.5 shrink-0 text-yellow-400" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-bold uppercase text-faint">
                        {km ? "គន្លឹះ" : "TIP"}
                      </div>
                      <div className="text-[11px] leading-snug text-muted">
                        {km ? c.tipsKm : c.tipsEn}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-start gap-1.5 border-t border-line pt-3 text-[11px]">
                    <span className="text-faint">🎯</span>
                    <span className="text-muted">{km ? c.bestForKm : c.bestForEn}</span>
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