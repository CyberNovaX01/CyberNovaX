"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Shield, Search, ChevronLeft } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { ROLE_COLORS, type Role } from "@/lib/tierData";

type Item = { name: string; note: string; emoji: string };
type Build = {
  id: string;
  hero: string;
  role: Role;
  lane: string;
  items: Item[];
};

const BUILDS: Build[] = [
  {
    id: "lancelot", hero: "Lancelot", role: "Assassin", lane: "Jungle",
    items: [
      { name: "Warrior Boots", note: "Speed + armor", emoji: "👟" },
      { name: "Berserker's Fury", note: "Crit damage", emoji: "⚔️" },
      { name: "Endless Battle", note: "True damage + lifesteal", emoji: "🗡️" },
      { name: "Blade of Despair", note: "High attack", emoji: "💀" },
      { name: "Queen's Wings", note: "Survival", emoji: "🦋" },
      { name: "Immortality", note: "Revive", emoji: "🛡️" },
    ],
  },
  {
    id: "gusion", hero: "Gusion", role: "Assassin", lane: "Jungle",
    items: [
      { name: "Arcane Boots", note: "Magic pen", emoji: "👟" },
      { name: "Clock of Destiny", note: "Stack magic", emoji: "⏰" },
      { name: "Holy Crystal", note: "Magic power", emoji: "💎" },
      { name: "Divine Glaive", note: "Penetration", emoji: "🔱" },
      { name: "Concentrated Energy", note: "Spell vamp", emoji: "⚡" },
      { name: "Blood Wings", note: "Shield + MP", emoji: "🦅" },
    ],
  },
  {
    id: "kagura", hero: "Kagura", role: "Mage", lane: "Mid",
    items: [
      { name: "Arcane Boots", note: "Magic pen", emoji: "👟" },
      { name: "Clock of Destiny", note: "Stack magic", emoji: "⏰" },
      { name: "Lightning Truncheon", note: "AoE damage", emoji: "⚡" },
      { name: "Holy Crystal", note: "Magic power", emoji: "💎" },
      { name: "Divine Glaive", note: "Penetration", emoji: "🔱" },
      { name: "Winter Truncheon", note: "Survival", emoji: "❄️" },
    ],
  },
  {
    id: "layla", hero: "Layla", role: "Marksman", lane: "Gold",
    items: [
      { name: "Swift Boots", note: "Attack speed", emoji: "👟" },
      { name: "Berserker's Fury", note: "Crit damage", emoji: "⚔️" },
      { name: "Haas' Claws", note: "Lifesteal", emoji: "🩸" },
      { name: "Scarlet Phantom", note: "Attack speed", emoji: "👻" },
      { name: "Blade of Despair", note: "High attack", emoji: "💀" },
      { name: "Wind of Nature", note: "Immunity", emoji: "🌪️" },
    ],
  },
  {
    id: "tigreal", hero: "Tigreal", role: "Tank", lane: "Roam",
    items: [
      { name: "Tough Boots", note: "Reduce CC", emoji: "👟" },
      { name: "Antique Cuirass", note: "Anti burst", emoji: "🛡️" },
      { name: "Athena's Shield", note: "Anti magic", emoji: "⚡" },
      { name: "Immortality", note: "Revive", emoji: "💀" },
      { name: "Oracle", note: "Shield boost", emoji: "🔮" },
      { name: "Conceal", note: "Team stealth", emoji: "🌫️" },
    ],
  },
  {
    id: "angela", hero: "Angela", role: "Support", lane: "Roam",
    items: [
      { name: "Demon Shoes", note: "Mana regen", emoji: "👟" },
      { name: "Enchanted Talisman", note: "Mana + CDR", emoji: "🔮" },
      { name: "Fleeting Time", note: "CDR", emoji: "⏱️" },
      { name: "Oracle", note: "Shield boost", emoji: "🛡️" },
      { name: "Athena's Shield", note: "Anti magic", emoji: "⚡" },
      { name: "Immortality", note: "Revive", emoji: "💀" },
    ],
  },
];

export default function BuildsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return BUILDS;
    return BUILDS.filter((b) => b.hero.toLowerCase().includes(n));
  }, [q]);

  return (
    <>
      <MoodSetter mood="mlbb" />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10">
        <Link href="/mlbb" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-bold text-muted backdrop-blur transition-colors hover:border-gold/40 hover:text-gold">
          <ChevronLeft size={13} />MLBB Hub
        </Link>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="kicker" style={{ color: "#a855f7" }}>
              <Shield size={12} />ITEM BUILDS
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Recommended <span className="text-gradient">Builds</span>
            </h1>
            <p className="max-w-xl text-sm text-muted sm:text-base">
              Item build ណែនាំសម្រាប់ hero នីមួយៗ
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8">
            <div className="relative">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
              <input value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="ស្វែងរក hero…"
                className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm text-fg placeholder:text-faint backdrop-blur focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <div className="space-y-6">
          {list.map((b, i) => {
            const color = ROLE_COLORS[b.role];
            return (
              <FadeIn key={b.id} delay={i * 60}>
                <div className="overflow-hidden rounded-3xl border border-line bg-surface" style={{ boxShadow: "0 20px 50px -30px " + color + "88" }}>
                  <div className="flex items-center gap-4 border-b border-line p-5" style={{ background: "linear-gradient(135deg, " + color + "15 0%, transparent 100%)" }}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl text-xl font-black" style={{ background: color + "25", color, boxShadow: "0 0 0 1px " + color + "55" }}>
                      {b.hero.charAt(0)}
                    </span>
                    <div>
                      <h2 className="text-xl font-black tracking-tight">{b.hero}</h2>
                      <p className="text-xs">
                        <span className="font-bold uppercase" style={{ color }}>{b.role}</span>
                        <span className="mx-2 text-faint">·</span>
                        <span className="text-muted">{b.lane} Lane</span>
                      </p>
                    </div>
                    <Link href={"/mlbb/" + b.id} className="ml-auto text-xs font-bold text-muted transition-colors hover:text-gold">
                      Guide →
                    </Link>
                  </div>

                  <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
                    {b.items.map((it, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-2xl border border-line bg-raised/50 p-3.5 transition-colors hover:border-line-2">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg" style={{ background: color + "20" }}>
                          {it.emoji}
                        </span>
                        <div className="min-w-0">
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

        {list.length === 0 && (
          <div className="rounded-2xl border border-line bg-surface/40 p-12 text-center text-muted">
            គ្មាន hero ត្រូវគ្នា "{q}"
          </div>
        )}
      </section>
    </>
  );
}