"use client";
import Link from "next/link";
import { ArrowLeft, Sparkles, Info, Zap, Shield, Target, Flame, Heart, Sword } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";

type Emblem = {
  id: string;
  name: string;
  emoji: string;
  icon: typeof Zap;
  color: string;
  descKm: string;
  descEn: string;
  talentsKm: { name: string; desc: string }[];
  talentsEn: { name: string; desc: string }[];
  bestForKm: string[];
  bestForEn: string[];
};

const EMBLEMS: Emblem[] = [
  {
    id: "assassin",
    name: "Assassin",
    emoji: "🗡️",
    icon: Sword,
    color: "#ef4444",
    descKm: "សម្រាប់ Assassin និង Marksman — បង្កើនខូចខាត និងការជ្រៀតចូល",
    descEn: "For Assassins and Marksmen — boosts damage and penetration",
    talentsKm: [
      { name: "Bargain Hunter", desc: "បញ្ចុះតម្លៃទិញ item 5%" },
      { name: "Master Assassin", desc: "បង្កើនខូចខាត +5% ចំពោះសត្រូវ 1 នាក់" },
      { name: "Killing Spree", desc: "បង្កើនល្បឿនផ្លាស់ទី +15% ពេលសម្លាប់" },
    ],
    talentsEn: [
      { name: "Bargain Hunter", desc: "Reduces item purchase cost by 5%" },
      { name: "Master Assassin", desc: "+5% damage to lone enemies" },
      { name: "Killing Spree", desc: "+15% movement speed after kill" },
    ],
    bestForKm: ["Lancelot", "Hayabusa", "Ling", "Gusion"],
    bestForEn: ["Lancelot", "Hayabusa", "Ling", "Gusion"],
  },
  {
    id: "mage",
    name: "Mage",
    emoji: "🔮",
    icon: Sparkles,
    color: "#a855f7",
    descKm: "សម្រាប់ Mage — បង្កើន magic power និង cooldown reduction",
    descEn: "For Mages — boosts magic power and cooldown reduction",
    talentsKm: [
      { name: "Thrill of the Hunt", desc: "បង្កើនល្បឿន +15% ពេល HP សត្រូវទាប 40%" },
      { name: "Weapon Master", desc: "បង្កើន magic damage +5%" },
      { name: "Impure Rage", desc: "បង្កើន damage +4% និង mana restore" },
    ],
    talentsEn: [
      { name: "Thrill of the Hunt", desc: "+15% speed when enemy HP below 40%" },
      { name: "Weapon Master", desc: "+5% magic damage" },
      { name: "Impure Rage", desc: "+4% damage and mana restore" },
    ],
    bestForKm: ["Kagura", "Lunox", "Valentina", "Xavier"],
    bestForEn: ["Kagura", "Lunox", "Valentina", "Xavier"],
  },
  {
    id: "marksman",
    name: "Marksman",
    emoji: "🏹",
    icon: Target,
    color: "#f59e0b",
    descKm: "សម្រាប់ Marksman — បង្កើន attack speed និង crit damage",
    descEn: "For Marksmen — boosts attack speed and crit damage",
    talentsKm: [
      { name: "Swift", desc: "បង្កើន attack speed +10%" },
      { name: "Weapon Master", desc: "បង្កើន physical damage +5%" },
      { name: "Weakness Finder", desc: "បង្កើន attack speed +30% ក្នុងរយៈពេលខ្លី" },
    ],
    talentsEn: [
      { name: "Swift", desc: "+10% attack speed" },
      { name: "Weapon Master", desc: "+5% physical damage" },
      { name: "Weakness Finder", desc: "+30% attack speed briefly" },
    ],
    bestForKm: ["Beatrix", "Melissa", "Wanwan", "Claude"],
    bestForEn: ["Beatrix", "Melissa", "Wanwan", "Claude"],
  },
  {
    id: "tank",
    name: "Tank",
    emoji: "🛡️",
    icon: Shield,
    color: "#3b82f6",
    descKm: "សម្រាប់ Tank — បង្កើន HP និងការការពារ",
    descEn: "For Tanks — boosts HP and defense",
    talentsKm: [
      { name: "Vitality", desc: "បង្កើន HP អតិបរមា +8%" },
      { name: "Tenacity", desc: "បង្កើន defense +5%" },
      { name: "Brave Smite", desc: "ស្រូប HP ពេលប្រើ skill" },
    ],
    talentsEn: [
      { name: "Vitality", desc: "+8% max HP" },
      { name: "Tenacity", desc: "+5% defense" },
      { name: "Brave Smite", desc: "Restores HP when using skill" },
    ],
    bestForKm: ["Tigreal", "Atlas", "Khufra", "Belerick"],
    bestForEn: ["Tigreal", "Atlas", "Khufra", "Belerick"],
  },
  {
    id: "support",
    name: "Support",
    emoji: "💚",
    icon: Heart,
    color: "#22c55e",
    descKm: "សម្រាប់ Support — បង្កើនការព្យាបាល និងការជួយក្រុម",
    descEn: "For Supports — boosts healing and team assistance",
    talentsKm: [
      { name: "Agility", desc: "បង្កើនល្បឿនផ្លាស់ទី +6%" },
      { name: "Pull Yourself Together", desc: "បញ្ចុះ cooldown battle spell 15%" },
      { name: "Focusing Mark", desc: "បង្កើន damage របស់ក្រុមចំពោះសត្រូវ" },
    ],
    talentsEn: [
      { name: "Agility", desc: "+6% movement speed" },
      { name: "Pull Yourself Together", desc: "Reduces battle spell cooldown 15%" },
      { name: "Focusing Mark", desc: "Boosts team damage to target" },
    ],
    bestForKm: ["Estes", "Angela", "Rafaela", "Mathilda"],
    bestForEn: ["Estes", "Angela", "Rafaela", "Mathilda"],
  },
  {
    id: "fighter",
    name: "Fighter",
    emoji: "⚔️",
    icon: Flame,
    color: "#dc2626",
    descKm: "សម្រាប់ Fighter — សមតុល្យរវាង damage និង defense",
    descEn: "For Fighters — balance between damage and defense",
    talentsKm: [
      { name: "Vitality", desc: "បង្កើន HP អតិបរមា +8%" },
      { name: "Festival of Blood", desc: "បង្កើន spell vamp +6%" },
      { name: "Brave Smite", desc: "ស្រូប HP ពេលប្រើ skill" },
    ],
    talentsEn: [
      { name: "Vitality", desc: "+8% max HP" },
      { name: "Festival of Blood", desc: "+6% spell vamp" },
      { name: "Brave Smite", desc: "Restores HP when using skill" },
    ],
    bestForKm: ["Paquito", "Yu Zhong", "Chou", "Phoveus"],
    bestForEn: ["Paquito", "Yu Zhong", "Chou", "Phoveus"],
  },
];

export default function EmblemsPage() {
  const { lang } = useLang();
  const km = lang === "km";

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
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#3b82f6" }}
            >
              <Sparkles size={13} />
              EMBLEMS
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">MLBB</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "Emblems" : "Emblems"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {km
                ? "Emblem sets ទាំង 6 និង talents ល្អបំផុត — ជ្រើសតាម role របស់ hero អ្នក។"
                : "All 6 emblem sets and best talents — pick by your hero's role."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INFO NOTE */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <FadeIn>
          <div className="flex items-start gap-3 rounded-xl border border-line bg-surface/50 p-4">
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
              style={{ background: "rgba(59,130,246,0.15)", color: "#3b82f6" }}
            >
              <Info size={15} />
            </span>
            <div className="text-xs leading-relaxed text-muted">
              {km
                ? "💡 Emblem គឺជា ប្រព័ន្ធ buff របស់ MLBB។ ជ្រើស emblem set តាម role hero រួចជ្រើស talent 3 ដែលសមស្របនឹងរបៀបលេងរបស់អ្នក។"
                : "💡 Emblems are MLBB's buff system. Choose an emblem set based on your hero's role, then pick 3 talents that suit your playstyle."}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* EMBLEM GRID */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          {EMBLEMS.map((e, i) => {
            const Icon = e.icon;
            return (
              <FadeIn key={e.id} delay={i * 60}>
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-surface"
                  style={{
                    borderColor: e.color + "40",
                    boxShadow: "0 20px 60px -30px " + e.color + "88",
                  }}
                >
                  {/* Header */}
                  <div
                    className="relative overflow-hidden border-b p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, " + e.color + "25 0%, " + e.color + "08 50%, transparent 100%)",
                      borderColor: e.color + "40",
                    }}
                  >
                    <div
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-30"
                      style={{ background: e.color }}
                    />
                    <div className="relative flex items-center gap-4">
                      <span
                        className="grid h-14 w-14 place-items-center rounded-xl transition-transform group-hover:scale-110"
                        style={{
                          background: e.color + "20",
                          color: e.color,
                          boxShadow: "0 0 0 1px " + e.color + "55",
                        }}
                      >
                        <Icon size={26} strokeWidth={2.2} />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{e.emoji}</span>
                          <h2 className="text-xl font-black tracking-tight">
                            {e.name}
                          </h2>
                        </div>
                        <p className="mt-1 text-xs text-muted">
                          {km ? e.descKm : e.descEn}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Talents */}
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-faint">
                      <Sparkles size={11} />
                      {km ? "Talents" : "Talents"}
                    </div>
                    <div className="space-y-2">
                      {(km ? e.talentsKm : e.talentsEn).map((t) => (
                        <div
                          key={t.name}
                          className="flex items-start gap-3 rounded-lg border border-line bg-black/20 p-3"
                        >
                          <span
                            className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: e.color }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold" style={{ color: e.color }}>
                              {t.name}
                            </div>
                            <div className="text-[11px] text-muted">
                              {t.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Best for */}
                    <div className="mt-4 border-t border-line pt-4">
                      <div className="mb-2 text-[10px] font-black uppercase tracking-wider text-faint">
                        {km ? "ល្អបំផុតសម្រាប់" : "Best for"}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {(km ? e.bestForKm : e.bestForEn).map((h) => (
                          <span
                            key={h}
                            className="rounded-md border px-2 py-0.5 text-[11px] font-bold"
                            style={{
                              borderColor: e.color + "40",
                              color: e.color,
                              background: e.color + "10",
                            }}
                          >
                            {h}
                          </span>
                        ))}
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