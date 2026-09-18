"use client";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";

type FFGuide = {
  slug: string;
  emoji: string;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  href: string;
  accent: string;
  accent2: string;
  badge: string;
  meta: string;
  featured?: boolean;
};

const GUIDES: FFGuide[] = [
  {
    slug: "sensitivity",
    emoji: "🎯",
    titleKm: "Sensitivity",
    titleEn: "Sensitivity",
    descKm: "កំណត់ sensitivity ត្រូវនឹងឧបករណ៍របស់អ្នក",
    descEn: "Tune sensitivity to match your device",
    href: "/ff/sensitivity",
    accent: "#22d3ee",
    accent2: "#67e8f9",
    badge: "176+ DEVICES",
    meta: "8 sensitivity values",
    featured: true,
  },
  {
    slug: "characters",
    emoji: "🦸",
    titleKm: "តួអង្គ",
    titleEn: "Characters",
    descKm: "មគ្គុទ្ទេសក៍ និងជំនាញតួអង្គទាំងអស់",
    descEn: "Full guide to every character skill",
   href: "/ff/characters",
    accent: "#06b6d4",
    accent2: "#22d3ee",
    badge: "40+ HEROES",
    meta: "Skills & roles",
  },
  {
    slug: "weapons",
    emoji: "⚔️",
    titleKm: "អាវុធ",
    titleEn: "Weapons",
    descKm: "ព័ត៌មានលម្អិត និង stats អាវុធទាំងអស់",
    descEn: "Detailed stats on every weapon",
    href: "/ff/weapons",
    accent: "#0891b2",
    accent2: "#06b6d4",
    badge: "30+ WEAPONS",
    meta: "Damage & range",
  },
  {
    slug: "pets",
    emoji: "🐾",
    titleKm: "សត្វចិញ្ចឹម",
    titleEn: "Pets",
    descKm: "ជំនាញសត្វចិញ្ចឹម និងការប្រើប្រាស់ល្អបំផុត",
    descEn: "Pet skills and best usage tips",
     href: "/ff/pets",
    accent: "#0e7490",
    accent2: "#0891b2",
    badge: "20+ PETS",
    meta: "Skills & combos",
  },
  {
    slug: "maps",
    emoji: "🗺️",
    titleKm: "ផែនទី",
    titleEn: "Maps",
    descKm: "យុទ្ធសាស្ត្រ និងចំណុចសំខាន់លើផែនទី",
    descEn: "Strategy and key spots on each map",
    href: "/ff/maps",
    accent: "#6366f1",
    accent2: "#818cf8",
    badge: "ALL MAPS",
    meta: "Rotation & zone",
  },
  {
    slug: "tier",
    emoji: "🏆",
    titleKm: "Tier List",
    titleEn: "Tier List",
    descKm: "ចំណាត់ថ្នាក់តួអង្គតាម Meta បច្ចុប្បន្ន",
    descEn: "Character rankings by current meta",
   href: "/ff/tier",
    accent: "#a855f7",
    accent2: "#c084fc",
    badge: "S + A + B TIER",
    meta: "Updated weekly",
  },
];

export default function FFHubPage() {
  const { lang } = useLang();
  const km = lang === "km";

  return (
    <>
      <MoodSetter mood="ff" />

      {/* HERO HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(34,211,238,0.28) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.18) 0%, transparent 55%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#22d3ee" }}
            >
              <Flame size={13} />
              <span>FREE FIRE HUB</span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">Free Fire</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Guides
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {km
                ? "មគ្គុទ្ទេសក៍ពេញលេញសម្រាប់អ្នកលេង Free Fire — ជ្រើសរើសប្រភេទដែលអ្នកចង់ស្វែងយល់។"
                : "Complete guides for Free Fire players — choose the category you want to explore."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g, i) => (
            <FadeIn key={g.slug} delay={i * 60}>
              <Link
                href={g.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-surface transition-all hover:-translate-y-1"
                style={{
                  borderColor: g.featured ? g.accent + "80" : "var(--color-line)",
                  boxShadow: g.featured
                    ? "0 20px 50px -25px " + g.accent + "aa, 0 0 0 1px " + g.accent + "40"
                    : "0 20px 50px -30px " + g.accent + "88",
                }}
              >
                {/* IMAGE AREA */}
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, " +
                      g.accent +
                      "40 0%, " +
                      g.accent2 +
                      "15 45%, #0a0d14 100%)",
                  }}
                >
                  <div
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70"
                    style={{ background: g.accent }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.10]"
                    style={{
                      backgroundImage:
                        "linear-gradient(" +
                        g.accent2 +
                        " 1px, transparent 1px), linear-gradient(90deg, " +
                        g.accent2 +
                        " 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* badge */}
                  <span
                    className="absolute left-3 top-3 rounded-md px-2 py-1 text-[9px] font-black uppercase tracking-widest backdrop-blur-md"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      color: g.accent2,
                      boxShadow: "0 0 0 1px " + g.accent + "55",
                    }}
                  >
                    {g.badge}
                  </span>

                  {/* featured badge */}
                  {g.featured && (
                    <span
                      className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-[9px] font-black uppercase tracking-widest"
                      style={{
                        background: "linear-gradient(135deg,#22d3ee,#a78bfa)",
                        color: "#0a0d14",
                      }}
                    >
                      <Sparkles size={9} />
                      NEW
                    </span>
                  )}

                  {/* emoji */}
                  <span className="absolute bottom-4 right-4 text-5xl transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                    {g.emoji}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-black tracking-tight">
                      {km ? g.titleKm : g.titleEn}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-faint">
                      {g.meta}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {km ? g.descKm : g.descEn}
                  </p>

                  <div
                    className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-bold transition-all group-hover:gap-3"
                    style={{ color: g.accent2 }}
                  >
                    {km ? "មើលមគ្គុទ្ទេសក៍" : "View guide"}
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}