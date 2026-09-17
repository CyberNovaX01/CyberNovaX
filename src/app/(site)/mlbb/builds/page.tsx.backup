"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Shield, Search, ChevronLeft, Info } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/i18n";
import { UNIQUE_HEROES, ROLE_LABELS, type MLBBRole } from "@/lib/mlbbTierData";

type Item = { name: string; note: string; emoji: string };
type Build = {
  id: string;
  hero: string;
  role: MLBBRole;
  lane: string;
  items: Item[];
};

// ═══ Item templates per role ═══
const ROLE_ITEMS: Record<MLBBRole, Item[]> = {
  assassin: [
    { name: "Warrior Boots",      note: "Speed + armor",       emoji: "🥾" },
    { name: "Berserker's Fury",   note: "Crit damage",          emoji: "⚔️" },
    { name: "Endless Battle",     note: "True damage + lifesteal", emoji: "🗡️" },
    { name: "Blade of Despair",   note: "High attack",          emoji: "💀" },
    { name: "Queen's Wings",      note: "Survival",             emoji: "🦋" },
    { name: "Immortality",        note: "Revive",               emoji: "🛡️" },
  ],
  mage: [
    { name: "Arcane Boots",       note: "Magic pen",            emoji: "🥾" },
    { name: "Clock of Destiny",   note: "Stack magic",          emoji: "⏰" },
    { name: "Lightning Truncheon",note: "AoE damage",           emoji: "⚡" },
    { name: "Holy Crystal",       note: "Magic power",          emoji: "💎" },
    { name: "Divine Glaive",      note: "Penetration",          emoji: "🔱" },
    { name: "Winter Truncheon",   note: "Survival",             emoji: "❄️" },
  ],
  marksman: [
    { name: "Swift Boots",        note: "Attack speed",         emoji: "🥾" },
    { name: "Berserker's Fury",   note: "Crit damage",          emoji: "⚔️" },
    { name: "Haas' Claws",        note: "Lifesteal",            emoji: "🩸" },
    { name: "Scarlet Phantom",    note: "Attack speed",         emoji: "👻" },
    { name: "Blade of Despair",   note: "High attack",          emoji: "💀" },
    { name: "Wind of Nature",     note: "Immunity",             emoji: "🌪️" },
  ],
  tank: [
    { name: "Tough Boots",        note: "Reduce CC",            emoji: "🥾" },
    { name: "Antique Cuirass",    note: "Anti burst",           emoji: "🛡️" },
    { name: "Athena's Shield",    note: "Anti magic",           emoji: "⚡" },
    { name: "Immortality",        note: "Revive",               emoji: "💀" },
    { name: "Oracle",             note: "Shield boost",         emoji: "🔮" },
    { name: "Conceal",            note: "Team stealth",         emoji: "🌫️" },
  ],
  support: [
    { name: "Demon Shoes",        note: "Mana regen",           emoji: "🥾" },
    { name: "Enchanted Talisman", note: "Mana + CDR",           emoji: "🔮" },
    { name: "Fleeting Time",      note: "CDR",                  emoji: "⏱️" },
    { name: "Oracle",             note: "Shield boost",         emoji: "🛡️" },
    { name: "Athena's Shield",    note: "Anti magic",           emoji: "⚡" },
    { name: "Immortality",        note: "Revive",               emoji: "💀" },
  ],
  fighter: [
    { name: "Warrior Boots",      note: "Speed + armor",        emoji: "🥾" },
    { name: "Bloodlust Axe",      note: "Spell vamp",           emoji: "🪓" },
    { name: "Endless Battle",     note: "True damage + lifesteal", emoji: "🗡️" },
    { name: "Queen's Wings",      note: "Survival",             emoji: "🦋" },
    { name: "Oracle",             note: "Shield boost",         emoji: "🔮" },
    { name: "Immortality",        note: "Revive",               emoji: "💀" },
  ],
};

const LANE_LABELS: Record<string, string> = {
  roam:   "Roam",
  exp:    "Exp Lane",
  jungle: "Jungle",
  mid:    "Mid Lane",
  gold:   "Gold Lane",
};

// ═══ Generate build for EVERY hero ═══
const BUILDS: Build[] = UNIQUE_HEROES.map((h) => ({
  id: h.id,
  hero: h.name,
  role: h.role,
  lane: LANE_LABELS[h.lane] || h.lane,
  items: ROLE_ITEMS[h.role],
}));

export default function BuildsPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return BUILDS.slice(0, 30);
    return BUILDS.filter((b) => b.hero.toLowerCase().includes(n));
  }, [q]);

  return (
    <>
      <MoodSetter mood="mlbb" />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(168,85,247,0.22) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <Link
            href="/mlbb"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-purple-400"
          >
            <ChevronLeft size={13} />
            {km ? "ត្រឡប់ MLBB Hub" : "Back to MLBB Hub"}
          </Link>

          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#a855f7" }}
            >
              <Shield size={13} />
              ITEM BUILDS
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">Recommended</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Builds
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {km
                ? "Item build ណែនាំសម្រាប់ hero ទាំងអស់ — ជ្រើសតាម role របស់ hero"
                : "Recommended item builds for all heroes — pick by your hero's role"}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEARCH */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <FadeIn>
          <div className="relative">
            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={km ? "ស្វែងរក hero…" : "Search hero…"}
              className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm text-fg placeholder:text-faint backdrop-blur focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-faint">
            <Info size={11} />
            {km
              ? "បង្ហាញ " + list.length + " / " + BUILDS.length + " heroes"
              : "Showing " + list.length + " / " + BUILDS.length + " heroes"}
          </div>
        </FadeIn>
      </section>

      {/* BUILDS LIST */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6">
        <div className="space-y-5">
          {list.map((b, i) => {
            const roleInfo = ROLE_LABELS[b.role];
            const color = roleInfo.color;
            return (
              <FadeIn key={b.id} delay={i * 30}>
                <div
                  className="overflow-hidden rounded-2xl border border-line bg-surface"
                  style={{ boxShadow: "0 20px 50px -30px " + color + "88" }}
                >
                  {/* Header */}
                  <div
                    className="flex items-center gap-4 border-b border-line p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, " + color + "15 0%, transparent 100%)",
                    }}
                  >
                    <span
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-xl font-black"
                      style={{
                        background: color + "25",
                        color,
                        boxShadow: "0 0 0 1px " + color + "55",
                      }}
                    >
                      {b.hero.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-lg font-black tracking-tight sm:text-xl">
                        {b.hero}
                      </h2>
                      <p className="text-xs">
                        <span className="font-bold uppercase" style={{ color }}>
                          {km ? roleInfo.km : roleInfo.en}
                        </span>
                        <span className="mx-2 text-faint">·</span>
                        <span className="text-muted">{b.lane}</span>
                      </p>
                    </div>
                    <Link
                      href={"/mlbb/" + b.id}
                      className="shrink-0 text-xs font-bold text-muted transition-colors hover:text-purple-400"
                    >
                      {km ? "មើល →" : "Guide →"}
                    </Link>
                  </div>

                  {/* Items grid */}
                  <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
                    {b.items.map((it, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-xl border border-line bg-black/20 p-3.5 transition-colors hover:border-line-2"
                      >
                        <span
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg"
                          style={{ background: color + "20" }}
                        >
                          {it.emoji}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-bold">{it.name}</div>
                          <div className="truncate text-[11px] text-faint">{it.note}</div>
                        </div>
                        <span className="ml-auto font-mono text-[10px] font-black text-faint">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* No results */}
        {list.length === 0 && (
          <div className="rounded-2xl border border-line bg-surface/40 p-12 text-center text-muted">
            {km
              ? 'គ្មាន hero ត្រូវគ្នានឹង "' + q + '"'
              : 'No hero matches "' + q + '"'}
          </div>
        )}
      </section>
    </>
  );
}