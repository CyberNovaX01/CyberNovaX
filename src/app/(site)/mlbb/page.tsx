"use client";
import Link from "next/link";
import {
  Trophy, Users, BarChart3, Swords, Shield, Sparkles, ArrowRight, ChevronLeft,
} from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/i18n";

type HubCard = {
  href: string;
  icon: typeof Trophy;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  color: string;
  badge: string;
  meta: string;
};

const CARDS: HubCard[] = [
  {
    href: "/mlbb/tier",
    icon: Trophy,
    titleKm: "Tier List",
    titleEn: "Tier List",
    descKm: "ចំណាត់ថ្នាក់ hero តាម Meta បច្ចុប្បន្ន — SS, S, A, B, C",
    descEn: "Hero rankings by current meta — SS, S, A, B, C",
    color: "#f5c542",
    badge: "110+ HEROES",
    meta: "Updated weekly",
  },
  {
    href: "/mlbb/heroes",
    icon: Users,
    titleKm: "Heroes",
    titleEn: "Heroes",
    descKm: "ស្វែងរក hero ទាំងអស់តាម Role និង difficulty",
    descEn: "Browse all heroes by role and difficulty",
    color: "#3b82f6",
    badge: "110+ HEROES",
    meta: "By role",
  },
  {
    href: "/mlbb/stats",
    icon: BarChart3,
    titleKm: "Stats",
    titleEn: "Stats",
    descKm: "Win rate, Pick rate, Ban rate របស់ hero នីមួយៗ",
    descEn: "Win rate, pick rate, ban rate for each hero",
    color: "#10b981",
    badge: "LIVE DATA",
    meta: "Ranked stats",
  },
  {
    href: "/mlbb/counters",
    icon: Swords,
    titleKm: "Counters",
    titleEn: "Counters",
    descKm: "Hero ណាឈ្នះ hero ណា — ជៀសវាងគ្រោះថ្នាក់",
    descEn: "Which hero beats who — avoid bad matchups",
    color: "#ef4444",
    badge: "MATCHUPS",
    meta: "Pick smart",
  },
  {
    href: "/mlbb/builds",
    icon: Shield,
    titleKm: "Builds",
    titleEn: "Builds",
    descKm: "Item build ណែនាំសម្រាប់ hero នីមួយៗ",
    descEn: "Recommended item builds for each hero",
    color: "#a855f7",
    badge: "120+ BUILDS",
    meta: "By situation",
  },
  {
    href: "/mlbb/emblems",
    icon: Sparkles,
    titleKm: "Emblems",
    titleEn: "Emblems",
    descKm: "Emblem sets និង talents ល្អបំផុត",
    descEn: "Best emblem sets and talents",
    color: "#06b6d4",
    badge: "ALL SETS",
    meta: "Talents & builds",
  },
];

export default function MLBBHubPage() {
  const { lang } = useLang();
  const km = lang === "km";

  return (
    <>
      <MoodSetter mood="mlbb" />

      {/* HERO HEADER */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(59,130,246,0.28) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.18) 0%, transparent 55%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
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
            href="/"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-bold text-muted transition-colors hover:text-blue-400"
          >
            <ChevronLeft size={13} />
            {km ? "ត្រឡប់ Home" : "Back to Home"}
          </Link>

          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#3b82f6" }}
            >
              <Swords size={13} />
              <span>MOBILE LEGENDS</span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">MLBB</span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Hub
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {km
                ? "មគ្គុទ្ទេសក៍ពេញលេញសម្រាប់អ្នកលេង Mobile Legends — ជ្រើសរើសប្រភេទដែលអ្នកចង់ស្វែងយល់។"
                : "Complete guides for Mobile Legends players — choose the category you want to explore."}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <FadeIn key={c.href} delay={i * 60}>
                <Link
                  href={c.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-line-2"
                  style={{ boxShadow: "0 20px 50px -30px " + c.color + "88" }}
                >
                  {/* IMAGE AREA */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, " +
                        c.color +
                        "40 0%, " +
                        c.color +
                        "15 45%, #0a0d14 100%)",
                    }}
                  >
                    <div
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70"
                      style={{ background: c.color }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.10]"
                      style={{
                        backgroundImage:
                          "linear-gradient(" +
                          c.color +
                          " 1px, transparent 1px), linear-gradient(90deg, " +
                          c.color +
                          " 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />

                    {/* badge */}
                    <span
                      className="absolute left-3 top-3 rounded-md px-2 py-1 text-[9px] font-black uppercase tracking-widest backdrop-blur-md"
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        color: c.color,
                        boxShadow: "0 0 0 1px " + c.color + "55",
                      }}
                    >
                      {c.badge}
                    </span>

                    {/* icon */}
                    <span
                      className="absolute bottom-4 right-4 grid h-14 w-14 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        background: c.color + "20",
                        color: c.color,
                        boxShadow: "0 0 0 1px " + c.color + "55",
                      }}
                    >
                      <Icon size={26} strokeWidth={2.2} />
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-black tracking-tight">
                        {km ? c.titleKm : c.titleEn}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-faint">
                        {c.meta}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {km ? c.descKm : c.descEn}
                    </p>

                    <div
                      className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-bold transition-all group-hover:gap-3"
                      style={{ color: c.color }}
                    >
                      {km ? "មើលមគ្គុទ្ទេសក៍" : "View guide"}
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}