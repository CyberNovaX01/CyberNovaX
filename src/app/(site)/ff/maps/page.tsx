"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Map as MapIcon, Filter, Users, Ruler, Flame } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import { FF_MAPS, MODE_LABELS, getMapCount, type MapMode } from "@/lib/ffMaps";

const MODES: MapMode[] = ["br", "cs", "special"];

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
              <MapIcon size={13} />
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
                ? getMapCount() + " ផែនទី — យុទ្ធសាស្ត្រ និង hot drops"
                : getMapCount() + " maps — strategies and hot drops"}
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
              {km ? "ទាំងអស់" : "All"} ({getMapCount()})
            </button>
            {MODES.map((mode) => {
              const info = MODE_LABELS[mode];
              const count = FF_MAPS.filter((m) => m.mode === mode).length;
              const active = filter === mode;
              return (
                <button
                  key={mode}
                  onClick={() => setFilter(mode)}
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

        <div className="grid gap-5 lg:grid-cols-2">
          {filtered.map((m, i) => {
            const modeInfo = MODE_LABELS[m.mode];
            return (
              <FadeIn key={m.id} delay={i * 60}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-line)",
                    boxShadow: "0 20px 60px -30px " + m.accent + "88",
                  }}
                >
                  {/* header */}
                  <div
                    className="relative overflow-hidden border-b border-line p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, " + m.accent + "25 0%, " + m.accent + "08 50%, transparent 100%)",
                    }}
                  >
                    <div
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-30"
                      style={{ background: m.accent }}
                    />
                    <div className="relative flex items-start gap-4">
                      <span
                        className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-4xl transition-transform group-hover:scale-110"
                        style={{
                          background: m.accent + "20",
                          boxShadow: "0 0 0 1px " + m.accent + "55",
                        }}
                      >
                        {m.emoji}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span
                          className="inline-block rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider"
                          style={{ background: modeInfo.color + "22", color: modeInfo.color }}
                        >
                          {km ? modeInfo.km : modeInfo.en}
                        </span>
                        <h2 className="mt-2 text-xl font-black tracking-tight">
                          {m.name}
                        </h2>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-faint">
                          <span className="inline-flex items-center gap-1">
                            <Ruler size={11} /> {m.sizeKm}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Users size={11} /> {m.players} {km ? "អ្នកលេង" : "players"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <p className="text-sm leading-relaxed text-muted">
                      {km ? m.descKm : m.descEn}
                    </p>

                    {/* hot drops */}
                    <div>
                      <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider" style={{ color: m.accent }}>
                        <Flame size={11} />
                        {km ? "ទីតាំងពេញនិយម" : "Hot Drops"}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {(km ? m.hotDropsKm : m.hotDropsEn).map((h) => (
                          <span
                            key={h}
                            className="rounded-md border px-2 py-0.5 text-[11px] font-bold"
                            style={{
                              borderColor: m.accent + "40",
                              color: m.accent,
                              background: m.accent + "10",
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* tips */}
                    <div className="border-t border-line pt-4">
                      <div className="mb-2 text-[10px] font-black uppercase tracking-wider text-faint">
                        {km ? "គន្លឹះ" : "Tips"}
                      </div>
                      <ul className="space-y-1.5">
                        {(km ? m.tipsKm : m.tipsEn).map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted">
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                              style={{ background: m.accent }}
                            />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
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