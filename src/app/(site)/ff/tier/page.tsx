"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Filter, Star, TrendingUp, Award } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  FF_CHARACTERS, ROLE_LABELS, TIER_COLORS,
  type FFRole,
} from "@/lib/ffCharacters";

const ROLES: FFRole[] = ["rusher", "support", "tank", "sniper", "recon"];
const TIERS: ("S" | "A" | "B")[] = ["S", "A", "B"];

const TIER_META: Record<"S" | "A" | "B", { en: string; km: string; icon: typeof Star }> = {
  S: { en: "Meta Picks",    km: "កំពូល Meta",  icon: Star },
  A: { en: "Strong",        km: "ខ្លាំង",        icon: TrendingUp },
  B: { en: "Solid",         km: "ល្អ",          icon: Award },
};

export default function FFTierPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [filter, setFilter] = useState<FFRole | "all">("all");

  const grouped = useMemo(() => {
    const list = filter === "all"
      ? FF_CHARACTERS
      : FF_CHARACTERS.filter((c) => c.role === filter);
    return {
      S: list.filter((c) => c.tier === "S"),
      A: list.filter((c) => c.tier === "A"),
      B: list.filter((c) => c.tier === "B"),
    };
  }, [filter]);

  return (
    <>
      <MoodSetter mood="ff" />

      {/* HEADER */}
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
              <Trophy size={13} />
              TIER LIST
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
                {km ? "Tier List" : "Tier List"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {km
                ? "ចំណាត់ថ្នាក់តួអង្គតាម Meta បច្ចុប្បន្ន — S គឺកំពូល, A ខ្លាំង, B ល្អ។"
                : "Character rankings by current meta — S is top, A strong, B solid."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FILTER + TIER SECTIONS */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <FadeIn>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-faint">
              <Filter size={12} />
              {km ? "តម្រងតាម Role" : "Filter by role"}:
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
              {km ? "ទាំងអស់" : "All"} ({FF_CHARACTERS.length})
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

        {/* TIER BLOCKS */}
        <div className="space-y-6">
          {TIERS.map((tier) => {
            const chars = grouped[tier];
            const meta = TIER_META[tier];
            const Icon = meta.icon;
            const color = TIER_COLORS[tier];
            if (chars.length === 0) return null;

            return (
              <FadeIn key={tier}>
                <div
                  className="overflow-hidden rounded-2xl border"
                  style={{
                    borderColor: color + "40",
                    background: "linear-gradient(180deg, " + color + "10 0%, transparent 100%)",
                  }}
                >
                  {/* Tier header bar */}
                  <div
                    className="flex items-center gap-3 border-b px-5 py-4"
                    style={{
                      background: "linear-gradient(90deg, " + color + "30 0%, " + color + "10 60%, transparent 100%)",
                      borderColor: color + "40",
                    }}
                  >
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl font-mono text-lg font-black"
                      style={{
                        background: color + "25",
                        color,
                        boxShadow: "0 0 0 1px " + color + "55",
                      }}
                    >
                      {tier}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Icon size={14} style={{ color }} />
                        <span className="text-sm font-black uppercase tracking-wider" style={{ color }}>
                          {km ? meta.km : meta.en}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[11px] text-faint">
                        {chars.length} {km ? "តួអង្គ" : "characters"}
                      </div>
                    </div>
                  </div>

                  {/* Characters grid */}
                  <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {chars.map((c) => {
                      const roleInfo = ROLE_LABELS[c.role];
                      return (
                        <div
                          key={c.id}
                          className="group flex flex-col items-center gap-2 rounded-xl border border-line bg-surface/60 p-3 text-center transition-all hover:-translate-y-0.5"
                          style={{ boxShadow: "0 10px 30px -20px " + c.accent + "88" }}
                        >
                          {/* emoji circle */}
                          <span
                            className="grid h-14 w-14 place-items-center rounded-full text-2xl transition-transform group-hover:scale-110"
                            style={{
                              background: c.accent + "20",
                              boxShadow: "0 0 0 2px " + color + "55, 0 0 0 3px " + c.accent + "30",
                            }}
                          >
                            {c.emoji}
                          </span>
                          <div className="min-w-0">
                            <div className="truncate text-xs font-black tracking-tight">
                              {c.name}
                            </div>
                            <div
                              className="mt-0.5 inline-block rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase"
                              style={{
                                background: roleInfo.color + "20",
                                color: roleInfo.color,
                              }}
                            >
                              {km ? roleInfo.km : roleInfo.en}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Footer note */}
        <FadeIn>
          <div className="mt-8 rounded-xl border border-line bg-surface/40 p-4 text-center text-xs text-faint">
            {km
              ? "💡 Tier List នេះផ្អែកលើ Meta បច្ចុប្បន្ន។ ប្រើវាជាការណែនាំ មិនមែនជាកាតព្វកិច្ចទេ — ជ្រើសតួអង្គដែលអ្នកលេងបានល្អ។"
              : "💡 This tier list is based on the current meta. Use it as a guide, not a rule — pick characters you play well."}
          </div>
        </FadeIn>
      </section>
    </>
  );
}