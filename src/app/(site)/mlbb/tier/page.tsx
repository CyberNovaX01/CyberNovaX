"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Crown, TrendingUp, Search, Star, ChevronLeft } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { TIER_HEROES, TIER_COLORS, ROLE_COLORS, TIERS, ROLES, type Tier, type Role } from "@/lib/tierData";

export default function TierPage() {
  const [role, setRole] = useState<Role | "All">("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    return TIER_HEROES.filter((h) => {
      if (role !== "All" && h.role !== role) return false;
      if (n && !h.name.toLowerCase().includes(n)) return false;
      return true;
    });
  }, [q, role]);

  const byTier = useMemo(() => {
    const g: Record<Tier, typeof TIER_HEROES> = { SS: [], S: [], A: [], B: [], C: [] };
    filtered.forEach((h) => g[h.tier].push(h));
    Object.keys(g).forEach((k) => g[k as Tier].sort((a, b) => b.winRate - a.winRate));
    return g;
  }, [filtered]);

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
            <span className="kicker" style={{ color: "#f5c542" }}>
              <Crown size={12} />META TIER LIST
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Tier <span className="text-gradient">List</span>
            </h1>
            <p className="max-w-xl text-sm text-muted sm:text-base">
              ចំណាត់ថ្នាក់ hero តាម Meta បច្ចុប្បន្ន — Patch 1.9.50
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 flex flex-col gap-4">
            <div className="relative">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
              <input value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="ស្វែងរក hero…"
                className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm text-fg placeholder:text-faint backdrop-blur focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Chip active={role === "All"} color="#f5c542" onClick={() => setRole("All")} label={"All (" + TIER_HEROES.length + ")"} />
              {ROLES.map((r) => {
                const count = TIER_HEROES.filter((h) => h.role === r).length;
                return <Chip key={r} active={role === r} color={ROLE_COLORS[r]} onClick={() => setRole(r)} label={r + " (" + count + ")"} />;
              })}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <div className="space-y-6">
          {TIERS.map((tier) => {
            const list = byTier[tier];
            if (!list.length) return null;
            const color = TIER_COLORS[tier];
            return (
              <FadeIn key={tier}>
                <div className="overflow-hidden rounded-3xl border border-line bg-surface" style={{ boxShadow: "0 20px 50px -30px " + color + "88" }}>
                  <div className="flex items-center gap-4 border-b border-line p-5" style={{ background: "linear-gradient(135deg, " + color + "15 0%, transparent 100%)" }}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl text-2xl font-black" style={{ background: color + "25", color, boxShadow: "0 0 0 1px " + color + "55" }}>
                      {tier}
                    </span>
                    <div>
                      <h2 className="text-xl font-black tracking-tight">{tier} TIER</h2>
                      <p className="text-xs text-faint">{list.length} heroes</p>
                    </div>
                    <span className="ml-auto hidden items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-bold text-muted sm:flex">
                      <TrendingUp size={12} />Win rate sorted
                    </span>
                  </div>

                  <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {list.map((h, i) => (
                      <Link key={h.id} href={"/mlbb/" + h.id}
                        className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-line bg-raised/50 p-3 transition-all hover:-translate-y-0.5 hover:border-line-2">
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-base font-black" style={{ background: ROLE_COLORS[h.role] + "20", color: ROLE_COLORS[h.role] }}>
                          {h.name.charAt(0)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="truncate text-sm font-bold">{h.name}</span>
                            {i === 0 && <Crown size={11} className="shrink-0 text-gold" />}
                          </div>
                          <div className="mt-0.5 flex items-center gap-2 text-[10px]">
                            <span className="font-bold uppercase" style={{ color: ROLE_COLORS[h.role] }}>{h.role}</span>
                            <span className="flex items-center gap-0.5 text-faint">
                              {[1, 2, 3].map((n) => (
                                <Star key={n} size={8} className={n <= h.difficulty ? "fill-gold text-gold" : "text-faint"} />
                              ))}
                            </span>
                          </div>
                        </div>
                        <div className="shrink-0 text-right">
                          <div className="font-mono text-sm font-black" style={{ color }}>{h.winRate}%</div>
                          <div className="text-[9px] uppercase tracking-wider text-faint">WR</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-line bg-surface/40 p-12 text-center text-muted">
            គ្មាន hero ត្រូវគ្នា "{q}"
          </div>
        )}
      </section>
    </>
  );
}

function Chip({ active, color, onClick, label }: { active: boolean; color: string; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick}
      className="rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all"
      style={active
        ? { background: color + "22", color, borderColor: color + "66" }
        : { background: "transparent", color: "var(--c-muted)", borderColor: "var(--c-line)" }}>
      {label}
    </button>
  );
}