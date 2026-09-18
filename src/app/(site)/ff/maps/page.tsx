"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Map, Filter, Users, Ruler, Flame, Lightbulb } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  FF_MAPS, MODE_LABELS, getMapCount, type MapMode,
} from "@/lib/ffMaps";

const MODES: MapMode[] = ["br", "cs", "special"];

function MapImage({ id, emoji, accent, name }: { id: string; emoji: string; accent: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="grid h-48 w-full place-items-center rounded-2xl text-7xl"
        style={{ background: accent + "20", boxShadow: "0 0 0 3px " + accent + "55" }}
      >
        {emoji}
      </div>
    );
  }

  return (
    <div
      className="h-48 w-full overflow-hidden rounded-2xl"
      style={{ background: accent + "20", boxShadow: "0 0 0 3px " + accent + "55" }}
    >
      <img
        src={"/images/ff/maps/" + id + ".png"}
        alt={name}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function MapsPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [filter, setFilter] = useState<MapMode | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? FF_MAPS : FF_MAPS.filter((m) => m.mode === filter)),
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
              <Map size={13} />
              MAPS
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
                {km ? "ផែនទី" : "Maps"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {km
                ? getMapCount() + " ផែនទី — ព័ត៌មានលម្អិត គន្លឹះ និង hot drop"
                : getMapCount() + " maps — detailed info, tips and hot drops"}
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
              {km ? "ទាំងអស់" : "All"} ({getMapCount()})
            </button>
            {MODES.map((m) => {
              const info = MODE_LABELS[m];
              const count = FF_MAPS.filter((mp) => mp.mode === m).length;
              const active = filter === m;
              return (
                <button
                  key={m}
                  onClick={() => setFilter(m)}
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
        <div className="space-y-6">
          {filtered.map((m, i) => {
            const modeInfo = MODE_LABELS[m.mode];
            return (
              <FadeIn key={m.id} delay={i * 40}>
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-surface transition-all"
                  style={{
                    borderColor: "var(--color-line)",
                    boxShadow: "0 20px 50px -32px " + m.accent + "88",
                  }}
                >
                  <div className="grid gap-6 p-6 lg:grid-cols-[280px_1fr]">
                    {/* Image */}
                    <MapImage id={m.id} emoji={m.emoji} accent={m.accent} name={m.name} />

                    {/* Info */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-black tracking-tight">{m.name}</h3>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase"
                          style={{ background: modeInfo.color + "22", color: modeInfo.color }}
                        >
                          {km ? modeInfo.km : modeInfo.en}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {km ? m.descKm : m.descEn}
                      </p>

                      {/* Stats */}
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 rounded-lg border border-line bg-black/20 px-3 py-2">
                          <Ruler size={13} className="text-cyan-400" />
                          <div>
                            <div className="text-[9px] font-bold uppercase text-faint">
                              {km ? "ទំហំ" : "SIZE"}
                            </div>
                            <div className="text-sm font-black text-cyan-400">{m.sizeKm}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-line bg-black/20 px-3 py-2">
                          <Users size={13} className="text-orange-400" />
                          <div>
                            <div className="text-[9px] font-bold uppercase text-faint">
                              {km ? "អ្នកលេង" : "PLAYERS"}
                            </div>
                            <div className="text-sm font-black text-orange-400">{m.players}</div>
                          </div>
                        </div>
                      </div>

                      {/* Hot Drops */}
                      <div className="mt-4">
                        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-red-400">
                          <Flame size={12} />
                          {km ? "តំបន់ Hot Drop" : "HOT DROPS"}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {(km ? m.hotDropsKm : m.hotDropsEn).map((drop) => (
                            <span
                              key={drop}
                              className="rounded-lg border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[11px] font-bold text-red-300"
                            >
                              {drop}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tips */}
                      <div className="mt-4 flex items-start gap-2 rounded-lg border border-line bg-black/20 p-3">
                        <Lightbulb size={14} className="mt-0.5 shrink-0 text-yellow-400" />
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] font-black uppercase text-yellow-400">
                            {km ? "គន្លឹះ" : "TIPS"}
                          </div>
                          <ul className="mt-1.5 space-y-1">
                            {(km ? m.tipsKm : m.tipsEn).map((tip, idx) => (
                              <li key={idx} className="flex gap-1.5 text-[11px] leading-snug text-muted">
                                <span className="text-faint">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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