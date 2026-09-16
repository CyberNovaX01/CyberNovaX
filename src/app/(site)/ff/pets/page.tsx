"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, PawPrint, Filter } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  FF_PETS, PET_ROLE_LABELS, TIER_COLORS,
  getPetCount, type PetRole,
} from "@/lib/ffPets";

const ROLES: PetRole[] = ["attack", "defense", "utility", "movement"];

export default function PetsPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [filter, setFilter] = useState<PetRole | "all">("all");

  const filtered = useMemo(
    () => (filter === "all" ? FF_PETS : FF_PETS.filter((p) => p.role === filter)),
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
              <PawPrint size={13} />
              PETS
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
                {km ? "សត្វចិញ្ចឹម" : "Pets"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {km
                ? getPetCount() + " សត្វចិញ្ចឹម — ជំនាញ និងការប្រើប្រាស់ល្អបំផុត"
                : getPetCount() + " pets — skills and best usage tips"}
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
              {km ? "ទាំងអស់" : "All"} ({getPetCount()})
            </button>
            {ROLES.map((r) => {
              const info = PET_ROLE_LABELS[r];
              const count = FF_PETS.filter((p) => p.role === r).length;
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => {
            const roleInfo = PET_ROLE_LABELS[p.role];
            return (
              <FadeIn key={p.id} delay={i * 40}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-surface p-5 transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-line)",
                    boxShadow: "0 20px 50px -32px " + p.accent + "88",
                  }}
                >
                  <span className="absolute left-0 top-0 h-full w-1" style={{ background: p.accent }} />

                  <div className="flex items-start gap-4">
                    <span
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-3xl"
                      style={{
                        background: p.accent + "20",
                        boxShadow: "0 0 0 1px " + p.accent + "55",
                      }}
                    >
                      {p.emoji}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-base font-black tracking-tight">
                          {p.name}
                        </h3>
                        <span
                          className="shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-black"
                          style={{
                            background: TIER_COLORS[p.tier] + "22",
                            color: TIER_COLORS[p.tier],
                            boxShadow: "0 0 0 1px " + TIER_COLORS[p.tier] + "55",
                          }}
                        >
                          {p.tier}
                        </span>
                      </div>
                      <span
                        className="mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase"
                        style={{ background: roleInfo.color + "22", color: roleInfo.color }}
                      >
                        {km ? roleInfo.km : roleInfo.en}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    {km ? p.skillKm : p.skillEn}
                  </p>

                  <div className="mt-4 flex items-start gap-1.5 border-t border-line pt-3 text-[11px]">
                    <span className="text-faint">💡</span>
                    <span className="text-muted">
                      {km ? p.bestForKm : p.bestForEn}
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