"use client";
import Link from "next/link";
import {
  Sparkles, ArrowRight, Zap, Users, Swords, PawPrint,
  Map as MapIcon, Trophy, Shield, Crosshair,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";

type Guide = {
  id: string;
  icon: typeof Zap;
  emoji: string;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  href: string;
  color: string;
  tag: string;
  featured?: boolean;
};

const GUIDES: Guide[] = [
  {
    id: "sensitivity",
    icon: Crosshair,
    emoji: "🎯",
    titleKm: "Sensitivity Calculator",
    titleEn: "Sensitivity Calculator",
    descKm: "គណនា sensitivity ត្រូវនឹងឧបករណ៍ FF របស់អ្នក",
    descEn: "Calculate FF sensitivity for your device",
    href: "/ff/sensitivity",
    color: "#22d3ee",
    tag: "FREE FIRE",
    featured: true,
  },
  {
    id: "tier",
    icon: Trophy,
    emoji: "🏆",
    titleKm: "MLBB Tier List",
    titleEn: "MLBB Tier List",
    descKm: "ចំណាត់ថ្នាក់ hero 110+ តាម Meta បច្ចុប្បន្ន",
    descEn: "110+ heroes ranked by current meta",
    href: "/mlbb/tier",
    color: "#f5c542",
    tag: "META",
    featured: true,
  },
  {
    id: "builds",
    icon: Shield,
    emoji: "🛡️",
    titleKm: "Item Builds",
    titleEn: "Item Builds",
    descKm: "Build ណែនាំសម្រាប់ hero ទាំងអស់",
    descEn: "Recommended builds for all heroes",
    href: "/mlbb/builds",
    color: "#a855f7",
    tag: "MLBB",
  },
  {
    id: "emblems",
    icon: Sparkles,
    emoji: "✨",
    titleKm: "Emblems Guide",
    titleEn: "Emblems Guide",
    descKm: "Emblem sets និង talents ល្អបំផុត",
    descEn: "Best emblem sets and talents",
    href: "/mlbb/emblems",
    color: "#3b82f6",
    tag: "MLBB",
  },
  {
    id: "chars",
    icon: Users,
    emoji: "🦸",
    titleKm: "FF Characters",
    titleEn: "FF Characters",
    descKm: "Guideតួអង្គ FF ទាំងអស់",
    descEn: "Full guide to FF characters",
    href: "/ff/characters",
    color: "#22d3ee",
    tag: "FREE FIRE",
  },
  {
    id: "weapons",
    icon: Swords,
    emoji: "⚔️",
    titleKm: "FF Weapons",
    titleEn: "FF Weapons",
    descKm: "Stats និងព័ត៌មានអាវុធទាំងអស់",
    descEn: "Stats and details on all weapons",
    href: "/ff/weapons",
    color: "#ef4444",
    tag: "FREE FIRE",
  },
  {
    id: "pets",
    icon: PawPrint,
    emoji: "🐾",
    titleKm: "FF Pets",
    titleEn: "FF Pets",
    descKm: "ជំនាញសត្វចិញ្ចឹម និងការប្រើប្រាស់",
    descEn: "Pet skills and best usage",
    href: "/ff/pets",
    color: "#10b981",
    tag: "FREE FIRE",
  },
  {
    id: "maps",
    icon: MapIcon,
    emoji: "🗺️",
    titleKm: "FF Maps",
    titleEn: "FF Maps",
    descKm: "យុទ្ធសាស្ត្រ និង hot drops",
    descEn: "Strategy and hot drops",
    href: "/ff/maps",
    color: "#6366f1",
    tag: "FREE FIRE",
  },
];

export function FeaturedGuides() {
  const { lang } = useLang();
  const km = lang === "km";

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
      <FadeIn>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em]"
              style={{ color: "#f5c542" }}
            >
              <Sparkles size={12} />
              {km ? "GUIDES ពេញនិយម" : "FEATURED GUIDES"}
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              <span className="text-white">
                {km ? "ចាប់ផ្តើមជាមួយ" : "Start with"}
              </span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "ទាំងនេះ" : "these"}
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              {km
                ? "Guides ដែលអ្នកលេងចូលចិត្តបំផុត — ជ្រើសដែលអ្នកចង់មើល"
                : "Most popular guides — pick what you want to explore"}
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {GUIDES.map((g, i) => {
          const Icon = g.icon;
          return (
            <FadeIn key={g.id} delay={i * 40}>
              <Link
                href={g.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-all hover:-translate-y-1"
                style={{
                  borderColor: g.featured ? g.color + "80" : "var(--color-line)",
                  boxShadow: g.featured
                    ? "0 20px 50px -25px " + g.color + "aa, 0 0 0 1px " + g.color + "40"
                    : "0 20px 50px -30px " + g.color + "88",
                }}
              >
                <div
                  className="relative overflow-hidden p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, " +
                      g.color +
                      "20 0%, " +
                      g.color +
                      "08 50%, transparent 100%)",
                  }}
                >
                  <div
                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-70"
                    style={{ background: g.color }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span
                      className="grid h-12 w-12 place-items-center rounded-xl transition-transform group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        background: g.color + "20",
                        color: g.color,
                        boxShadow: "0 0 0 1px " + g.color + "55",
                      }}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </span>
                    <span className="text-3xl transition-transform group-hover:scale-110">
                      {g.emoji}
                    </span>
                  </div>

                  <span
                    className="mt-4 inline-block rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider"
                    style={{
                      background: g.color + "22",
                      color: g.color,
                    }}
                  >
                    {g.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-2">
                  <h3 className="text-base font-black leading-tight tracking-tight">
                    {km ? g.titleKm : g.titleEn}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                    {km ? g.descKm : g.descEn}
                  </p>

                  <div
                    className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-bold transition-all group-hover:gap-3"
                    style={{ color: g.color }}
                  >
                    {km ? "មើល" : "View"}
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}