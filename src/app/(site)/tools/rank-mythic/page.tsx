"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft, Trophy, Target, Users, Crown, ChevronDown,
  Sparkles, CheckCircle2, AlertTriangle, TrendingUp,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  RANK_PHASES, HERO_RECS, RULES, FAQ,
  META_VERSION, META_UPDATED,
} from "@/lib/rankData";

export default function RankMythicPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <MoodSetter mood="mlbb" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(245,197,66,0.25) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#f5c542 1px, transparent 1px), linear-gradient(90deg, #f5c542 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <Link
            href="/tools"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-gold"
          >
            <ArrowLeft size={13} />
            {km ? "ត្រឡប់ Tools" : "Back to Tools"}
          </Link>

          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#f5c542" }}
            >
              <Trophy size={13} />
              RANK GUIDE 2026
            </div>
            <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl lg:text-6xl">
              <span className="text-white">Mythic →</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f5c542 0%, #ff8c00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                100 {km ? "តារា" : "Stars"}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {km
                ? "មគ្គុទ្ទេសក៍ពេញលេញដើម្បីឡើងពី Mythic ដល់ 100 Star — ជាមួយ hero meta 2026, យុទ្ធសាស្ត្រ, និងច្បាប់សំខាន់ៗ។"
                : "Complete guide to climb from Mythic to 100 Stars — with 2026 meta heroes, strategies, and key rules."}
            </p>

            {/* Meta info */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-bold">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1"
                style={{
                  borderColor: "rgba(245,197,66,0.4)",
                  background: "rgba(245,197,66,0.1)",
                  color: "#f5c542",
                }}
              >
                <Sparkles size={11} />
                {META_VERSION}
              </span>
              <span className="rounded-full border border-line bg-surface/50 px-2.5 py-1 text-faint">
                {km ? "ធ្វើបច្ចុប្បន្នភាព" : "Updated"}: {META_UPDATED}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RANK PHASES */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <FadeIn>
          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]"
              style={{ color: "#f5c542" }}
            >
              <TrendingUp size={12} />
              {km ? "ដំណាក់កាលឡើង Rank" : "CLIMBING PHASES"}
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              {km ? "ដំណាក់កាលទាំង 5" : "5 Phases to Conquer"}
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-5">
          {RANK_PHASES.map((p, i) => (
            <FadeIn key={p.id} delay={i * 60}>
              <div
                className="overflow-hidden rounded-2xl border bg-surface"
                style={{
                  borderColor: p.color + "40",
                  boxShadow: "0 20px 60px -30px " + p.color + "88",
                }}
              >
                <div
                  className="flex items-center gap-4 border-b p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, " + p.color + "20 0%, transparent 100%)",
                    borderColor: p.color + "40",
                  }}
                >
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-xl text-2xl"
                    style={{
                      background: p.color + "20",
                      boxShadow: "0 0 0 1px " + p.color + "55",
                    }}
                  >
                    {p.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-black tracking-tight sm:text-xl">
                      {p.name}
                    </h3>
                    <p className="text-xs font-bold" style={{ color: p.color }}>
                      {p.range}
                    </p>
                  </div>
                  <span
                    className="hidden shrink-0 rounded-full px-3 py-1 font-mono text-[10px] font-black sm:block"
                    style={{ background: p.color + "20", color: p.color }}
                  >
                    PHASE {i + 1}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted">
                    {km ? p.descKm : p.descEn}
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {(km ? p.tipsKm : p.tipsEn).map((tip, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 rounded-lg border border-line bg-black/20 p-3"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: p.color }}
                        />
                        <span className="text-xs text-muted">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HERO RECOMMENDATIONS */}
      <section className="relative border-y border-line bg-surface/20 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <div className="mb-8">
              <div
                className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]"
                style={{ color: "#a855f7" }}
              >
                <Crown size={12} />
                {km ? "HERO 2026 META" : "2026 META HEROES"}
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                {km ? "Hero ឡ្អបំផុតតាម Role" : "Best Heroes by Role"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted">
                {km
                  ? "ជ្រើស hero ដែលត្រូវនឹង role របស់អ្នក — ទាំងនេះជា pick ខ្លាំងបំផុតក្នុង Patch 1.9.50"
                  : "Pick heroes that match your role — these are the strongest picks in Patch 1.9.50"}
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HERO_RECS.map((h, i) => (
              <FadeIn key={h.role} delay={i * 50}>
                <div
                  className="h-full rounded-2xl border bg-surface p-5"
                  style={{
                    borderColor: h.color + "40",
                    boxShadow: "0 20px 50px -30px " + h.color + "88",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-xl text-xl"
                      style={{
                        background: h.color + "20",
                        boxShadow: "0 0 0 1px " + h.color + "55",
                      }}
                    >
                      {h.emoji}
                    </span>
                    <div>
                      <h3 className="text-base font-black tracking-tight" style={{ color: h.color }}>
                        {h.role}
                      </h3>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-faint">
                        {h.names.length} {km ? "hero" : "heroes"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {km ? h.reasonKm : h.reasonEn}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {h.names.map((name) => (
                      <span
                        key={name}
                        className="rounded-md border px-2 py-0.5 text-[11px] font-bold"
                        style={{
                          borderColor: h.color + "40",
                          color: h.color,
                          background: h.color + "10",
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <FadeIn>
          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]"
              style={{ color: "#22c55e" }}
            >
              <Target size={12} />
              {km ? "ច្បាប់សំខាន់" : "RULES TO WIN"}
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              {km ? "6 ច្បាប់ដែលអ្នកត្រូវដឹង" : "6 Rules You Must Know"}
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RULES.map((r, i) => (
            <FadeIn key={i} delay={i * 40}>
              <div
                className="h-full rounded-2xl border bg-surface p-5"
                style={{
                  borderColor: r.color + "40",
                  boxShadow: "0 20px 50px -30px " + r.color + "88",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl text-xl"
                    style={{
                      background: r.color + "20",
                      boxShadow: "0 0 0 1px " + r.color + "55",
                    }}
                  >
                    {r.emoji}
                  </span>
                  <h3 className="text-sm font-black tracking-tight">
                    {km ? r.titleKm : r.titleEn}
                  </h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {km ? r.descKm : r.descEn}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-line bg-surface/20 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn>
            <div className="mb-8 text-center">
              <div
                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]"
                style={{ color: "#3b82f6" }}
              >
                <AlertTriangle size={12} />
                FAQ
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                {km ? "សំណួរញឹកញាប់" : "Frequently Asked"}
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-2">
            {FAQ.map((f, i) => {
              const open = openFaq === i;
              return (
                <FadeIn key={i} delay={i * 30}>
                  <div
                    className="overflow-hidden rounded-xl border bg-surface transition-colors"
                    style={{
                      borderColor: open ? "rgba(59,130,246,0.5)" : "var(--color-line)",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-surface/60"
                    >
                      <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-black"
                        style={{
                          background: "rgba(59,130,246,0.15)",
                          color: "#3b82f6",
                        }}
                      >
                        ?
                      </span>
                      <span className="flex-1 text-sm font-bold">
                        {km ? f.qKm : f.qEn}
                      </span>
                      <ChevronDown
                        size={14}
                        className="shrink-0 text-faint transition-transform"
                        style={{ transform: open ? "rotate(180deg)" : "none" }}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: open ? "200px" : "0",
                        opacity: open ? 1 : 0,
                      }}
                    >
                      <p className="border-t border-line px-4 pb-4 pt-3 text-xs leading-relaxed text-muted">
                        {km ? f.aKm : f.aEn}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-2xl border p-8 text-center sm:p-12"
            style={{
              borderColor: "rgba(245,197,66,0.4)",
              background:
                "radial-gradient(ellipse at center, rgba(245,197,66,0.15) 0%, transparent 70%), linear-gradient(135deg, #0a0d14 0%, #0a0d14 100%)",
            }}
          >
            <Trophy size={40} className="mx-auto text-gold" />
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              {km ? "ត្រៀមខ្លួនឡើង Mythical Glory?" : "Ready to Reach Mythical Glory?"}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              {km
                ? "ប្រើ Tier List 2026 របស់យើងដើម្បីជ្រើស hero ល្អបំផុត រួចចាប់ផ្តើមឡើង rank ថ្ងៃនេះ!"
                : "Use our 2026 Tier List to pick the best heroes, then start climbing today!"}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/mlbb/tier"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-black transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #f5c542, #ff8c00)",
                  color: "#0a0d14",
                }}
              >
                <Trophy size={15} />
                {km ? "Tier List 2026" : "2026 Tier List"}
              </Link>
              <Link
                href="/mlbb/builds"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-5 py-3 text-sm font-black text-muted transition-all hover:border-gold/40 hover:text-gold"
              >
                <Users size={15} />
                {km ? "Builds" : "Builds"}
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}