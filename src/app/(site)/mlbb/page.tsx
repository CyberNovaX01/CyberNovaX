"use client";
import Link from "next/link";
import { Trophy, Users, BarChart3, Swords, Shield, Sparkles, ArrowRight, ChevronLeft } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useT } from "@/lib/i18n";

type HubCard = {
  href: string;
  icon: any;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  color: string;
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
  },
  {
    href: "/mlbb/heroes",
    icon: Users,
    titleKm: "Heroes",
    titleEn: "Heroes",
    descKm: "ស្វែងរក hero ទាំងអស់តាម Role និង difficulty",
    descEn: "Browse all heroes by role and difficulty",
    color: "#3b82f6",
  },
  {
    href: "/mlbb/stats",
    icon: BarChart3,
    titleKm: "Stats",
    titleEn: "Stats",
    descKm: "Win rate, Pick rate, Ban rate របស់ hero នីមួយៗ",
    descEn: "Win rate, pick rate, ban rate for each hero",
    color: "#10b981",
  },
  {
    href: "/mlbb/counters",
    icon: Swords,
    titleKm: "Counters",
    titleEn: "Counters",
    descKm: "Hero ណាឈ្នះ hero ណា — ជៀសវាងគ្រោះថ្នាក់",
    descEn: "Which hero beats who — avoid bad matchups",
    color: "#ef4444",
  },
  {
    href: "/mlbb/builds",
    icon: Shield,
    titleKm: "Builds",
    titleEn: "Builds",
    descKm: "Item build ណែនាំសម្រាប់ hero នីមួយៗ",
    descEn: "Recommended item builds for each hero",
    color: "#a855f7",
  },
  {
    href: "/mlbb/emblems",
    icon: Sparkles,
    titleKm: "Emblems",
    titleEn: "Emblems",
    descKm: "Emblem sets និង talents ល្អបំផុត",
    descEn: "Best emblem sets and talents",
    color: "#06b6d4",
  },
];

export default function MLBBHubPage() {
  const t = useT();

  return (
    <>
      <MoodSetter mood="mlbb" />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10">
        <Link href="/" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-bold text-muted backdrop-blur transition-colors hover:border-gold/40 hover:text-gold">
          <ChevronLeft size={13} />Home
        </Link>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pt-6 pb-10 sm:px-6 sm:pt-10">
        <FadeIn>
          <div className="flex flex-col gap-2">
            <span className="kicker" style={{ color: "#3b82f6" }}>MOBILE LEGENDS</span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {t("hub.mlbb.title")}
            </h1>
            <p className="max-w-2xl text-sm text-muted sm:text-base">
              {t("hub.mlbb.sub")}
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <FadeIn key={c.href} delay={i * 60}>
                <Link
                  href={c.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-line-2 sm:p-7"
                  style={{ boxShadow: "0 20px 50px -30px " + c.color + "88" }}
                >
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-50"
                    style={{ background: c.color }}
                  />

                  <div className="relative">
                    <span
                      className="grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        background: c.color + "22",
                        color: c.color,
                        boxShadow: "0 0 0 1px " + c.color + "55, 0 15px 30px -15px " + c.color + "88",
                      }}
                    >
                      <Icon size={26} strokeWidth={2.2} />
                    </span>

                    <h2 className="mt-5 text-xl font-black tracking-tight sm:text-2xl">
                      {c.titleKm}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {c.descKm}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-faint">
                        EXPLORE
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-xs font-bold transition-all duration-300 group-hover:gap-3"
                        style={{ color: c.color }}
                      >
                        <ArrowRight size={14} />
                      </span>
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