"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BarChart3, ChevronLeft, TrendingUp, TrendingDown } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { TIER_HEROES, ROLE_COLORS, ROLES, type Role } from "@/lib/tierData";

export default function StatsPage() {
  const [role, setRole] = useState<Role | "All">("All");
  const [sortBy, setSortBy] = useState<"winRate" | "pickRate" | "banRate">("winRate");

  const list = useMemo(() => {
    const filtered = role === "All" ? TIER_HEROES : TIER_HEROES.filter((h) => h.role === role);
    return [...filtered].sort((a, b) => b[sortBy] - a[sortBy]);
  }, [role, sortBy]);

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
            <span className="kicker" style={{ color: "#10b981" }}>
              <BarChart3 size={12} />HERO STATISTICS
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Hero <span className="text-gradient">Stats</span>
            </h1>
            <p className="max-w-xl text-sm text-muted sm:text-base">
              Win rate, Pick rate, Ban rate ពី Patch 1.9.50
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap gap-2">
              <Chip active={role === "All"} color="#10b981" onClick={() => setRole("All")} label="All" />
              {ROLES.map((r) => (
                <Chip key={r} active={role === r} color={ROLE_COLORS[r]} onClick={() => setRole(r)} label={r} />
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <SortBtn active={sortBy === "winRate"} onClick={() => setSortBy("winRate")} label="Win Rate" />
              <SortBtn active={sortBy === "pickRate"} onClick={() => setSortBy("pickRate")} label="Pick Rate" />
              <SortBtn active={sortBy === "banRate"} onClick={() => setSortBy("banRate")} label="Ban Rate" />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="hidden grid-cols-12 gap-3 border-b border-line bg-raised/50 p-4 text-[10px] font-black uppercase tracking-wider text-faint sm:grid">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Hero</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2 text-right">Win %</div>
              <div className="col-span-2 text-right">Pick %</div>
              <div className="col-span-1 text-right">Ban %</div>
            </div>

            <div className="divide-y divide-line">
              {list.map((h, i) => {
                const wr = h.winRate >= 51 ? "#10b981" : h.winRate >= 49 ? "#f59e0b" : "#ef4444";
                return (
                  <Link key={h.id} href={"/mlbb/" + h.id}
                    className="grid grid-cols-2 items-center gap-3 p-4 transition-colors hover:bg-raised/50 sm:grid-cols-12">
                    <div className="col-span-1 hidden font-mono text-sm font-black text-faint sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="col-span-1 flex items-center gap-3 sm:col-span-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-black" style={{ background: ROLE_COLORS[h.role] + "20", color: ROLE_COLORS[h.role] }}>
                        {h.name.charAt(0)}
                      </span>
                      <span className="truncate text-sm font-bold">{h.name}</span>
                    </div>
                    <div className="hidden text-xs font-bold uppercase sm:col-span-2 sm:block" style={{ color: ROLE_COLORS[h.role] }}>
                      {h.role}
                    </div>
                    <div className="col-span-1 flex items-center justify-end gap-1 sm:col-span-2">
                      <span className="font-mono text-sm font-black" style={{ color: wr }}>{h.winRate}%</span>
                    </div>
                    <div className="col-span-1 text-right font-mono text-xs text-muted sm:col-span-2">{h.pickRate}%</div>
                    <div className="hidden text-right font-mono text-xs text-muted sm:col-span-1 sm:block">{h.banRate}%</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeIn>
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

function SortBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick}
      className={"rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all " + (active ? "border-gold/40 bg-gold/15 text-gold" : "border-line text-muted hover:border-line-2")}>
      {label}
    </button>
  );
}