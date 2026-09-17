"use client";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Star, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { MoodSetter } from "@/components/MoodSetter";
import { getHeroSkills } from "@/lib/heroSkills";
import {
  UNIQUE_HEROES, ROLE_LABELS, LANE_LABELS, TIER_COLORS,
} from "@/lib/mlbbTierData";

export default function HeroDetailPage({ params }: { params: Promise<{ heroId: string }> }) {
  const { heroId } = use(params);
  const { lang } = useLang();
  const km = lang === "km";

  const hero = UNIQUE_HEROES.find((h) => h.id === heroId);

  if (!hero) {
    return (
      <>
        <MoodSetter mood="mlbb" />
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold">
            {km ? "រកមិនឃើញ Hero" : "Hero not found"}
          </h1>
          <Link href="/mlbb/heroes" className="text-blue-400 hover:underline">
            {km ? "ត្រឡប់ Heroes" : "Back to Heroes"}
          </Link>
        </div>
      </>
    );
  }

  const roleColor = ROLE_LABELS[hero.role].color;
  const tierColor = TIER_COLORS[hero.tier];
  const stars = hero.tier === "SS" ? 5 : hero.tier === "S" ? 4 : hero.tier === "A" ? 3 : hero.tier === "B" ? 2 : 1;

  const skills = getHeroSkills(hero.id);
  const skillList = skills
    ? [skills.passive, skills.s1, skills.s2, skills.ult]
    : [];

  return (
    <>
      <MoodSetter mood="mlbb" />

      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(59,130,246,0.22) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link
            href="/mlbb/heroes"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-bold text-muted transition-colors hover:border-blue-500/40 hover:text-blue-400"
          >
            <ArrowLeft size={13} />
            Mobile Legends
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* HERO CARD */}
          <FadeIn>
            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{
                borderColor: roleColor + "40",
                background: "linear-gradient(180deg, " + roleColor + "12 0%, transparent 100%)",
              }}
            >
              {/* Hero Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={"/images/mlbb/heroes/" + hero.id + ".png"}
                  alt={hero.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Tier badge */}
                <div
                  className="absolute right-3 top-3 grid h-12 w-12 place-items-center rounded-xl font-mono text-lg font-black backdrop-blur-sm"
                  style={{
                    background: tierColor + "30",
                    color: tierColor,
                    boxShadow: "0 0 0 1px " + tierColor + "70",
                  }}
                >
                  {hero.tier}
                </div>
              </div>

              {/* Hero Info */}
              <div className="p-5">
                <div
                  className="mb-3 inline-flex rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider"
                  style={{
                    background: roleColor + "22",
                    color: roleColor,
                  }}
                >
                  {ROLE_LABELS[hero.role].en} · {LANE_LABELS[hero.lane].en}
                </div>

                <h1 className="mb-2 font-display text-3xl font-black tracking-tight">
                  {hero.name}
                </h1>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < stars ? "fill-yellow-400 text-yellow-400" : "text-faint"}
                      />
                    ))}
                  </span>
                  <span className="text-xs font-black uppercase" style={{ color: tierColor }}>
                    Tier {hero.tier}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* HERO OVERVIEW */}
            <FadeIn>
              <div className="rounded-2xl border border-line bg-surface/50 p-6">
                <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-red-400">
                  HERO OVERVIEW
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {km
                    ? `${hero.name} ជា ${ROLE_LABELS[hero.role].km} ដែលលេងក្នុង ${LANE_LABELS[hero.lane].km} — មានជំនាញពិសេសដែលអាចជួយក្រុម និងបង្កើតភាពខុសគ្នាក្នុងការប្រកួត។`
                    : `${hero.name} is a ${ROLE_LABELS[hero.role].en} played in ${LANE_LABELS[hero.lane].en} lane with unique skills that can help the team.`}
                </p>
              </div>
            </FadeIn>

            {/* SKILLS */}
            <FadeIn>
              <div className="rounded-2xl border border-line bg-surface/50 p-6">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <Zap size={16} className="text-red-400" />
                  {km ? "ជំនាញ" : "Skills"}
                </h2>

                {skillList.length === 0 ? (
                  <div className="rounded-xl border border-line bg-bg/40 p-6 text-center text-sm text-faint">
                    {km
                      ? "📝 ព័ត៌មានជំនាញសម្រាប់ Hero នេះនឹងមកឆាប់ៗ"
                      : "📝 Skill information for this hero is coming soon"}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {skillList.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-line bg-bg/40 p-3 transition-colors hover:border-blue-500/30"
                      >
                        <div
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full font-mono text-xs font-bold"
                          style={{
                            background: roleColor + "20",
                            color: roleColor,
                            boxShadow: "0 0 0 1px " + roleColor + "40",
                          }}
                        >
                          {i === 0 ? "P" : i}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-bold">{s.name}</span>
                            <span className="rounded bg-line px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-faint">
                              {s.type}
                            </span>
                            {s.cooldown && s.cooldown !== "0s" && (
                              <span className="text-[10px] font-bold text-blue-400">
                                ⏱ {s.cooldown}
                              </span>
                            )}
                            {s.mana && s.mana !== "0" && (
                              <span className="text-[10px] font-bold text-purple-400">
                                💧 {s.mana}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {km ? s.descKm : s.descEn}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}