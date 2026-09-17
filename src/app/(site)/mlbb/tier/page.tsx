"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, Filter, Search, Info } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import {
  UNIQUE_HEROES, ROLE_LABELS, LANE_LABELS, TIER_COLORS, TIER_ORDER,
  getHeroCount, filterHeroes,
  type MLBBRole, type MLBBLane, type MLBBTier,
} from "@/lib/mlbbTierData";

const ROLES: (MLBBRole | "all")[] = ["all", "tank", "fighter", "assassin", "mage", "marksman", "support"];
const LANES: (MLBBLane | "all")[] = ["all", "roam", "exp", "jungle", "mid", "gold"];

export default function MLBBTierPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [role, setRole] = useState<MLBBRole | "all">("all");
  const [lane, setLane] = useState<MLBBLane | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => filterHeroes(role, lane, search), [role, lane, search]);

  const grouped = useMemo(() => {
    const g: Record<MLBBTier, typeof UNIQUE_HEROES> = { SS: [], S: [], A: [], B: [], C: [] };
    filtered.forEach((h) => g[h.tier].push(h));
    return g;
  }, [filtered]);

  return (
    <>
      <MoodSetter mood="mlbb" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(59,130,246,0.22) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <Link
            href="/mlbb"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-blue-400"
          >
            <ArrowLeft size={13} />
            {km ? "ត្រឡប់ MLBB Hub" : "Back to MLBB Hub"}
          </Link>

          <FadeIn>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1">
              <Trophy size={12} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-400">
                {km ? "Tier List ផ្លូវការ" : "Official Tier List"}
              </span>
            </div>
            <h1 className="mb-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
              {km ? "Tier List MLBB" : "MLBB Tier List"}
            </h1>
            <p className="mb-8 max-w-2xl text-sm text-muted">
              {km
                ? "ចំណាត់ថ្នាក់ Hero តាម Meta បច្ចុប្បន្ន — ជ្រើស Hero តាម Role និង Lane"
                : "Hero rankings based on current meta — filter by Role and Lane"}
            </p>
          </FadeIn>

          {/* FILTERS */}
          <FadeIn>
            <div className="rounded-2xl border border-line bg-surface/60 p-4 backdrop-blur-sm sm:p-5">
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={km ? "ស្វែងរក Hero..." : "Search hero..."}
                    className="w-full rounded-lg border border-line bg-bg/60 py-2 pl-9 pr-3 text-sm outline-none transition-colors focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-faint">
                  <Filter size={11} />
                  Role
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ROLES.map((r) => {
                    const active = role === r;
                    const label = r === "all" ? (km ? "ទាំងអស់" : "All") : (km ? ROLE_LABELS[r].km : ROLE_LABELS[r].en);
                    const color = r === "all" ? "#3b82f6" : ROLE_LABELS[r].color;
                    return (
                      <button
                        key={r}
                        onClick={() => setRole(r)}
                        className="rounded-full border px-3 py-1 text-xs font-bold transition-all"
                        style={{
                          borderColor: active ? color : "var(--color-line)",
                          color: active ? color : "var(--color-muted)",
                          background: active ? color + "22" : "transparent",
                        }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lane */}
              <div className="mt-4">
                <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-faint">
                  <Filter size={11} />
                  Lane
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {LANES.map((l) => {
                    const active = lane === l;
                    const label = l === "all" ? (km ? "ទាំងអស់" : "All") : (km ? LANE_LABELS[l].km : LANE_LABELS[l].en);
                    return (
                      <button
                        key={l}
                        onClick={() => setLane(l)}
                        className="rounded-full border px-3 py-1 text-xs font-bold transition-all"
                        style={{
                          borderColor: active ? "#3b82f6" : "var(--color-line)",
                          color: active ? "#3b82f6" : "var(--color-muted)",
                          background: active ? "rgba(59,130,246,0.15)" : "transparent",
                        }}
                      >
                        {l !== "all" && <span className="mr-1">{LANE_LABELS[l].emoji}</span>}
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Result count */}
              <div className="mt-4 flex items-center gap-1.5 border-t border-line pt-3 text-[11px] text-faint">
                <Info size={11} />
                {km
                  ? "បង្ហាញ " + filtered.length + " / " + getHeroCount() + " heroes"
                  : "Showing " + filtered.length + " / " + getHeroCount() + " heroes"}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TIER BLOCKS */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6">
        <div className="space-y-6">
          {TIER_ORDER.map((tier) => {
            const heroes = grouped[tier];
            if (heroes.length === 0) return null;
            const color = TIER_COLORS[tier];

            return (
              <FadeIn key={tier}>
                <div
                  className="overflow-hidden rounded-2xl border"
                  style={{
                    borderColor: color + "40",
                    background: "linear-gradient(180deg, " + color + "10 0%, transparent 100%)",
                  }}
                >
                  {/* Tier bar */}
                  <div
                    className="flex items-center gap-3 border-b px-5 py-3"
                    style={{
                      background: "linear-gradient(90deg, " + color + "35 0%, " + color + "10 60%, transparent 100%)",
                      borderColor: color + "40",
                    }}
                  >
                    <span
                      className="grid h-10 w-12 place-items-center rounded-lg font-mono text-lg font-black"
                      style={{
                        background: color + "25",
                        color,
                        boxShadow: "0 0 0 1px " + color + "55",
                      }}
                    >
                      {tier}
                    </span>
                    <span className="text-xs font-bold text-muted">
                      {heroes.length} heroes
                    </span>
                  </div>

                  {/* Hero grid */}
                  <div className="grid grid-cols-3 gap-3 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
                    {heroes.map((h) => {
                      const roleColor = ROLE_LABELS[h.role].color;
                      return (
                        <Link
                          key={h.id}
                          href={"/mlbb/" + h.id}
                          className="group flex flex-col items-center gap-2 text-center"
                        >
                          {/* ★ រូបភាព Hero ជំនួសអក្សរ */}
                          <div
                            className="relative h-16 w-16 overflow-hidden rounded-full transition-all group-hover:scale-110"
                            style={{
                              boxShadow:
                                "0 0 0 2px " + color + "80, 0 0 0 4px " + roleColor + "40, 0 10px 25px -12px " + roleColor + "88",
                            }}
                          >
                            <img
                              src={"/images/mlbb/heroes/" + h.id + ".png"}
                              alt={h.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-[10px] font-bold leading-tight text-muted transition-colors group-hover:text-fg">
                            {h.name}
                          </span>
                        </Link>
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
              ? "💡 Tier List នេះផ្អែកលើ Meta បច្ចុប្បន្ន។ ប្រើវាជាការណែនាំ — ជ្រើស hero ដែលបងលេងបានល្អ។"
              : "💡 This tier list is based on the current meta. Use it as a guide — pick heroes you play well."}
          </div>
        </FadeIn>
      </section>
    </>
  );
}