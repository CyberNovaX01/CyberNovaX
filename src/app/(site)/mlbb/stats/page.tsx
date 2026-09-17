"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Shield, Search, ChevronLeft, Info, Zap, Gem } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { UNIQUE_HEROES, ROLE_LABELS, type MLBBRole } from "@/lib/mlbbTierData";

type Item = { name: string; note: string };
type BuildVariant = {
  title: string;
  titleKm: string;
  items: Item[];
  emblem: string;
  talents: string[];
  spells: string[];
};
type Build = {
  id: string;
  hero: string;
  role: MLBBRole;
  lane: string;
  variants: BuildVariant[];
};

function itemSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[''`]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

const EMBLEM_ICONS: Record<string, string> = {
  assassin: "A", tank: "T", mage: "M",
  marksman: "MM", fighter: "F", support: "S",
};

function ImageWithFallback({ src, alt, fallback, className }: { src: string; alt: string; fallback: string; className?: string }) {
  const [error, setError] = useState(false);
  if (error) return <span className={"flex items-center justify-center text-white font-bold " + (className || "")}>{fallback}</span>;
  return <img src={src} alt={alt} className={className || "h-full w-full object-contain"} loading="lazy" onError={() => setError(true)} />;
}

const ROLE_VARIANTS: Record<MLBBRole, BuildVariant[]> = {
  assassin: [
    {
      title: "Burst", titleKm: "Burst លឿន",
      emblem: "assassin", talents: ["Rupture", "Master Assassin", "Killing Spree"],
      spells: ["Retribution", "Execute"],
      items: [
        { name: "Rapid Boots", note: "Movement speed" },
        { name: "Blade of the Heptaseas", note: "Burst + pen" },
        { name: "Hunter Strike", note: "CDR + mobility" },
        { name: "Blade of Despair", note: "High attack" },
        { name: "Malefic Roar", note: "Armor pen" },
        { name: "Immortality", note: "Revive" },
      ],
    },
    {
      title: "Sustain", titleKm: "Sustain យូរ",
      emblem: "assassin", talents: ["Agility", "Bargain Hunter", "Killing Spree"],
      spells: ["Retribution", "Purify"],
      items: [
        { name: "Warrior Boots", note: "Defense" },
        { name: "Bloodlust Axe", note: "Spell vamp" },
        { name: "Endless Battle", note: "True damage + lifesteal" },
        { name: "Queen's Wings", note: "Survival" },
        { name: "Rose Gold Meteor", note: "Magic resist" },
        { name: "Immortality", note: "Revive" },
      ],
    },
  ],
  marksman: [
    {
      title: "Critical", titleKm: "Crit ខ្លាំង",
      emblem: "marksman", talents: ["Fatal", "Weapon Master", "Weakness Finder"],
      spells: ["Inspire", "Flicker"],
      items: [
        { name: "Swift Boots", note: "Attack speed" },
        { name: "Berserker's Fury", note: "Crit damage" },
        { name: "Haas' Claws", note: "Lifesteal" },
        { name: "Blade of Despair", note: "High attack" },
        { name: "Wind of Nature", note: "Immunity" },
        { name: "Immortality", note: "Revive" },
      ],
    },
    {
      title: "Tank Killer", titleKm: "សម្លាប់ Tank",
      emblem: "marksman", talents: ["Agility", "Weapon Master", "Weakness Finder"],
      spells: ["Inspire", "Purify"],
      items: [
        { name: "Swift Boots", note: "Attack speed" },
        { name: "Demon Hunter Sword", note: "Anti tank" },
        { name: "Corrosion Scythe", note: "Slow + attack speed" },
        { name: "Golden Staff", note: "Attack speed" },
        { name: "Malefic Roar", note: "Armor pen" },
        { name: "Rose Gold Meteor", note: "Magic resist" },
      ],
    },
  ],
  mage: [
    {
      title: "Burst", titleKm: "Burst លឿន",
      emblem: "mage", talents: ["Inspire", "Impure Rage", "Lethal Ignition"],
      spells: ["Flicker", "Flameshot"],
      items: [
        { name: "Magic Boots", note: "Magic pen" },
        { name: "Lightning Truncheon", note: "AoE damage" },
        { name: "Holy Crystal", note: "Magic power" },
        { name: "Divine Glaive", note: "Penetration" },
        { name: "Concentrated Energy", note: "Spell vamp" },
        { name: "Winter Truncheon", note: "Survival" },
      ],
    },
    {
      title: "Poke", titleKm: "Poke ឆ្ងាយ",
      emblem: "mage", talents: ["Rupture", "Bargain Hunter", "Impure Rage"],
      spells: ["Flicker", "Flameshot"],
      items: [
        { name: "Magic Boots", note: "Magic pen" },
        { name: "Clock of Destiny", note: "Stack magic" },
        { name: "Enchanted Talisman", note: "Mana + CDR" },
        { name: "Ice Queen Wand", note: "Slow" },
        { name: "Holy Crystal", note: "Magic power" },
        { name: "Glowing Wand", note: "Anti heal" },
      ],
    },
  ],
  tank: [
    {
      title: "Anti-Magic", titleKm: "ការពារ Magic",
      emblem: "tank", talents: ["Vitality", "Tenacity", "Concussive Blast"],
      spells: ["Flicker", "Purify"],
      items: [
        { name: "Tough Boots", note: "Reduce CC" },
        { name: "Athena's Shield", note: "Anti magic" },
        { name: "Radiant Armor", note: "Magic resist" },
        { name: "Oracle", note: "Shield boost" },
        { name: "Immortality", note: "Revive" },
        { name: "Conceal", note: "Team stealth" },
      ],
    },
    {
      title: "Anti-Physical", titleKm: "ការពារ Physical",
      emblem: "tank", talents: ["Firmness", "Tenacity", "Brave Smite"],
      spells: ["Flicker", "Vengeance"],
      items: [
        { name: "Tough Boots", note: "Reduce CC" },
        { name: "Antique Cuirass", note: "Anti burst" },
        { name: "Blade Armor", note: "Reflect damage" },
        { name: "Dominance Ice", note: "Anti regen" },
        { name: "Immortality", note: "Revive" },
        { name: "Brute Force Breastplate", note: "Stack defense" },
      ],
    },
  ],
  fighter: [
    {
      title: "Burst", titleKm: "Burst លឿន",
      emblem: "fighter", talents: ["Thrill", "Festival of Blood", "Brave Smite"],
      spells: ["Execute", "Flicker"],
      items: [
        { name: "Warrior Boots", note: "Speed + armor" },
        { name: "War Axe", note: "True damage" },
        { name: "Blade of Despair", note: "High attack" },
        { name: "Endless Battle", note: "True damage + lifesteal" },
        { name: "Malefic Roar", note: "Armor pen" },
        { name: "Immortality", note: "Revive" },
      ],
    },
    {
      title: "Sustain", titleKm: "Sustain យូរ",
      emblem: "fighter", talents: ["Firmness", "Festival of Blood", "Vengeance"],
      spells: ["Execute", "Purify"],
      items: [
        { name: "Warrior Boots", note: "Speed + armor" },
        { name: "Bloodlust Axe", note: "Spell vamp" },
        { name: "Endless Battle", note: "True damage + lifesteal" },
        { name: "Queen's Wings", note: "Survival" },
        { name: "Oracle", note: "Shield boost" },
        { name: "Immortality", note: "Revive" },
      ],
    },
  ],
  support: [
    {
      title: "Heal", titleKm: "ព្យាបាល",
      emblem: "support", talents: ["Agility", "Pull Yourself Together", "Focusing Mark"],
      spells: ["Flicker", "Revitalize"],
      items: [
        { name: "Demon Shoes", note: "Mana regen" },
        { name: "Enchanted Talisman", note: "Mana + CDR" },
        { name: "Flask of the Oasis", note: "Heal boost" },
        { name: "Oracle", note: "Shield boost" },
        { name: "Fleeting Time", note: "CDR" },
        { name: "Immortality", note: "Revive" },
      ],
    },
    {
      title: "Tanky Support", titleKm: "ជួយរឹង",
      emblem: "tank", talents: ["Vitality", "Pull Yourself Together", "Brave Smite"],
      spells: ["Flicker", "Purify"],
      items: [
        { name: "Tough Boots", note: "Reduce CC" },
        { name: "Antique Cuirass", note: "Anti burst" },
        { name: "Athena's Shield", note: "Anti magic" },
        { name: "Dominance Ice", note: "Anti regen" },
        { name: "Immortality", note: "Revive" },
        { name: "Conceal", note: "Team stealth" },
      ],
    },
  ],
};

const LANE_LABELS: Record<string, string> = {
  roam: "Roam", exp: "Exp Lane", jungle: "Jungle", mid: "Mid Lane", gold: "Gold Lane",
};

const BUILDS: Build[] = UNIQUE_HEROES.map((h) => ({
  id: h.id, hero: h.name, role: h.role, lane: LANE_LABELS[h.lane] || h.lane,
  variants: ROLE_VARIANTS[h.role],
}));

export default function BuildsPage() {
  const [q, setQ] = useState("");
  const [activeTab, setActiveTab] = useState<Record<string, number>>({});

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return BUILDS.slice(0, 30);
    return BUILDS.filter((b) => b.hero.toLowerCase().includes(n));
  }, [q]);

  return (
    <>
      <MoodSetter mood="mlbb" />

      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(168,85,247,0.22) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <Link href="/mlbb" className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-purple-400">
            <ChevronLeft size={13} /> ត្រឡប់ MLBB Hub
          </Link>
          <FadeIn>
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: "#a855f7" }}>
              <Shield size={13} /> ITEM BUILDS
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">Recommended</span> <span style={{ background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Builds</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Item build + Emblem + Spell ជ្រើសបាន ២ ប្រភេទសម្រាប់ hero នីមួយៗ
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <FadeIn>
          <div className="relative">
            <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ស្វែងរក hero…" className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm text-fg placeholder:text-faint backdrop-blur focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20" />
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-faint"><Info size={11} /> បង្ហាញ {list.length} / {BUILDS.length} heroes</div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6">
        <div className="space-y-5">
          {list.map((b, i) => {
            const roleInfo = ROLE_LABELS[b.role];
            const color = roleInfo.color;
            const tab = activeTab[b.id] ?? 0;
            const variant = b.variants[tab];

            return (
              <FadeIn key={b.id} delay={i * 30}>
                <div className="overflow-hidden rounded-2xl border border-line bg-surface" style={{ boxShadow: "0 20px 50px -30px " + color + "88" }}>
                  <div className="flex items-center gap-4 border-b border-line p-5" style={{ background: "linear-gradient(135deg, " + color + "15 0%, transparent 100%)" }}>
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl" style={{ boxShadow: "0 0 0 2px " + color + "55" }}>
                      <img src={"/images/mlbb/heroes/" + b.id + ".png"} alt={b.hero} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="truncate text-lg font-black tracking-tight sm:text-xl">{b.hero}</h2>
                      <p className="text-xs"><span className="font-bold uppercase" style={{ color }}>{roleInfo.en}</span><span className="mx-2 text-faint">·</span><span className="text-muted">{b.lane}</span></p>
                    </div>
                    <Link href={"/mlbb/" + b.id} className="shrink-0 text-xs font-bold text-muted transition-colors hover:text-purple-400">មើល →</Link>
                  </div>

                  <div className="flex gap-2 border-b border-line bg-black/20 px-5 pt-3">
                    {b.variants.map((v, vi) => (
                      <button key={vi} onClick={() => setActiveTab((prev) => ({ ...prev, [b.id]: vi }))} className="rounded-t-lg border-b-2 px-3 py-2 text-xs font-bold transition-colors" style={{ borderColor: tab === vi ? color : "transparent", color: tab === vi ? color : "var(--c-muted)", background: tab === vi ? color + "15" : "transparent" }}>{v.titleKm}</button>
                    ))}
                  </div>

                  <div className="grid gap-3 border-b border-line bg-black/10 p-5 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-black/20 p-3">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl" style={{ background: color + "20" }}>
                        <ImageWithFallback src={"/images/mlbb/emblems/" + variant.emblem + ".svg"} alt={variant.emblem} fallback={EMBLEM_ICONS[variant.emblem]} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2"><Gem size={12} style={{ color }} /><span className="text-[10px] font-black uppercase tracking-wider text-faint">EMBLEM</span></div>
                        <div className="truncate text-sm font-bold capitalize">{variant.emblem} Emblem</div>
                        <div className="truncate text-[11px] text-muted">{variant.talents.join(" · ")}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-black/20 p-3">
                      <div className="flex gap-1.5">
                        {variant.spells.map((s, si) => (
                          <div key={si} className="h-12 w-12 shrink-0 overflow-hidden rounded-xl" style={{ background: color + "20" }}>
                            <ImageWithFallback src={"/images/mlbb/spells/" + itemSlug(s) + ".svg"} alt={s} fallback="S" />
                          </div>
                        ))}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2"><Zap size={12} style={{ color }} /><span className="text-[10px] font-black uppercase tracking-wider text-faint">SPELLS</span></div>
                        <div className="truncate text-sm font-bold">{variant.spells.join(" + ")}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
                    {variant.items.map((it, idx) => {
                      const slug = itemSlug(it.name);
                      return (
                        <div key={idx} className="flex items-center gap-3 rounded-xl border border-line bg-black/20 p-3.5 transition-colors hover:border-line-2">
                          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl" style={{ background: color + "15" }}>
                            <ImageWithFallback src={"/images/mlbb/items/" + slug + ".png"} alt={it.name} fallback="?" />
                          </div>
                          <div className="min-w-0 flex-1"><div className="truncate text-sm font-bold">{it.name}</div><div className="truncate text-[11px] text-faint">{it.note}</div></div>
                          <span className="ml-auto font-mono text-[10px] font-black text-faint">{String(idx + 1).padStart(2, "0")}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
        {list.length === 0 && (
          <div className="rounded-2xl border border-line bg-surface/40 p-12 text-center text-muted">គ្មាន hero ត្រូវគ្នានឹង "{q}"</div>
        )}
      </section>
    </>
  );
}