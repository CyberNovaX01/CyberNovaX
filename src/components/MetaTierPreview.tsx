"use client";
import Link from "next/link";
import { Trophy, ArrowRight, Flame } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { UNIQUE_HEROES, ROLE_LABELS, TIER_COLORS } from "@/lib/mlbbTierData";

export function MetaTierPreview() {
  const { lang } = useLang();
  const km = lang === "km";

  // Top tier heroes (SS + S)
  const topHeroes = UNIQUE_HEROES.filter((h) => h.tier === "SS" || h.tier === "S").slice(0, 12);

  return (
    <section className="relative border-b border-line bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <FadeIn>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em]"
                style={{ color: "#3b82f6" }}
              >
                <Flame size={12} />
                {km ? "META សប្តាហ៍នេះ" : "THIS WEEK'S META"}
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                <span className="text-white">Top</span>{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {km ? "Heroes" : "Heroes"}
                </span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted">
                {km
                  ? "Heroes កំពូលក្នុង Meta បច្ចុប្បន្ន — ចុចដើម្បីមើល Tier List ពេញ"
                  : "Top heroes in the current meta — click to see the full tier list"}
              </p>
            </div>
            <Link
              href="/mlbb/tier"
              className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs font-bold text-muted transition-all hover:border-blue-400/50 hover:text-blue-400"
            >
              <Trophy size={13} />
              {km ? "Tier List ពេញ" : "Full Tier List"}
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>

        {/* Heroes grid */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {topHeroes.map((h, i) => {
            const tierColor = TIER_COLORS[h.tier];
            const roleColor = ROLE_LABELS[h.role].color;
            return (
              <FadeIn key={h.id} delay={i * 40}>
                <Link
                  href={"/mlbb/" + h.id}
                  className="group flex flex-col items-center gap-2 text-center"
                >
                  {/* Circle with initial */}
                  <div className="relative">
                    <span
                      className="grid h-16 w-16 place-items-center rounded-full text-xl font-black transition-all group-hover:scale-110 sm:h-20 sm:w-20 sm:text-2xl"
                      style={{
                        background:
                          "linear-gradient(135deg, " + roleColor + "40 0%, " + roleColor + "15 100%)",
                        color: roleColor,
                        boxShadow:
                          "0 0 0 2px " + tierColor + "80, 0 0 0 4px " + roleColor + "40, 0 15px 30px -15px " + roleColor + "88",
                      }}
                    >
                      {h.initial}
                    </span>
                    {/* Tier badge */}
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 font-mono text-[9px] font-black"
                      style={{
                        background: tierColor,
                        color: "#0a0d14",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                      }}
                    >
                      {h.tier}
                    </span>
                  </div>
                  <span className="mt-1 text-[10px] font-bold leading-tight text-muted transition-colors group-hover:text-fg sm:text-xs">
                    {h.name}
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}