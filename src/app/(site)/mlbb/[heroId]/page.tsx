"use client";
import Link from "next/link";
import { use } from "react";
import { ChevronLeft, Star, Swords, Shield, Sparkles, Target, Zap } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { ROLE_COLORS, type Role } from "@/components/HeroCard";
import { HERO_DB, FALLBACK_HERO } from "@/lib/heroData";
import { useT, useLang } from "@/lib/i18n";
export default function HeroDetailPage({ params }: { params: Promise<{ heroId: string }> }) {
  const { heroId } = use(params);
  const t = useT();
  const { lang } = useLang();
  const hero = HERO_DB[heroId] || { ...FALLBACK_HERO, id: heroId, name: heroId };
  const color = ROLE_COLORS[hero.role as Role];
  return (
    <>
      <MoodSetter mood="mlbb" />
      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10">
        <Link href="/mlbb" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-semibold text-muted backdrop-blur transition-colors hover:border-line-2 hover:text-fg">
          <ChevronLeft size={13} />{t("mlbb.title").split(" —")[0]}
        </Link>
      </section>
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-line" style={{ boxShadow: "0 30px 80px -40px " + color + "88" }}>
              <div className="aspect-[3/4] w-full" style={{ background: "linear-gradient(160deg, " + color + "60 0%, " + color + "15 45%, #0c1018 100%)" }}>
                <div className="flex h-full items-center justify-center">
                  <span className="text-8xl opacity-30">{hero.name.charAt(0)}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md" style={{ background: color + "40", color, boxShadow: "0 0 0 1px " + color + "70" }}>
                  {hero.role} · {hero.lane}
                </span>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{hero.name}</h1>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3].map((i) => (
                      <Star key={i} size={13} className={i <= hero.difficulty ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
                    ))}
                  </div>
                  <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur" style={{ color }}>
                    Tier {hero.tier}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass rounded-3xl p-6 sm:p-8">
                <span className="kicker" style={{ color }}>HERO OVERVIEW</span>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{lang === "km" ? hero.description.km : hero.description.en}</p>
              </div>
              {hero.skills.length > 0 && (
                <div className="glass rounded-3xl p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <Sparkles size={16} style={{ color }} />
                    <h2 className="text-lg font-bold tracking-tight">Skills</h2>
                  </div>
                  <div className="space-y-3">
                    {hero.skills.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-raised/50 p-3.5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold" style={{ background: color + "22", color }}>{i + 1}</span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold">{s.name}</span>
                            <span className="rounded-full bg-raised px-2 py-0.5 text-[10px] font-medium text-faint">{s.type}</span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-muted">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hero.combo.length > 0 && (
                <div className="glass rounded-3xl p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <Zap size={16} style={{ color }} />
                    <h2 className="text-lg font-bold tracking-tight">Combos</h2>
                  </div>
                  <div className="space-y-2">
                    {hero.combo.map((c, i) => (
                      <div key={i} className="rounded-xl border border-line bg-raised/50 px-4 py-3 font-mono text-xs text-fg sm:text-sm">{c}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {hero.build.length > 0 && (
            <FadeIn>
              <div className="glass h-full rounded-3xl p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-2">
                  <Shield size={16} style={{ color }} />
                  <h2 className="text-lg font-bold tracking-tight">Recommended Build</h2>
                </div>
                <div className="space-y-2">
                  {hero.build.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-line bg-raised/50 p-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold" style={{ background: color + "22", color }}>{i + 1}</span>
                      <div>
                        <div className="text-sm font-semibold">{b.name}</div>
                        <div className="text-[11px] text-faint">{b.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
          {hero.tips.length > 0 && (
            <FadeIn delay={100}>
              <div className="glass h-full rounded-3xl p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-2">
                  <Target size={16} style={{ color }} />
                  <h2 className="text-lg font-bold tracking-tight">Pro Tips</h2>
                </div>
                <ul className="space-y-3">
                  {hero.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} />
                      <span>{lang === "km" ? tip.km : tip.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
      {(hero.counters.length > 0 || hero.counteredBy.length > 0) && (
        <section className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {hero.counters.length > 0 && (
              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-2">
                  <Swords size={16} className="text-emerald-400" />
                  <h2 className="text-lg font-bold tracking-tight">Strong Against</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hero.counters.map((c) => (
                    <span key={c} className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">{c}</span>
                  ))}
                </div>
              </div>
            )}
            {hero.counteredBy.length > 0 && (
              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-2">
                  <Shield size={16} className="text-red-400" />
                  <h2 className="text-lg font-bold tracking-tight">Weak Against</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hero.counteredBy.map((c) => (
                    <span key={c} className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs font-semibold text-red-400">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}