"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ChevronLeft, Info, TrendingUp, TrendingDown, ArrowUpDown } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { useLang } from "@/lib/i18n";
import { UNIQUE_HEROES, ROLE_LABELS, LANE_LABELS, TIER_COLORS, type MLBBLane } from "@/lib/mlbbTierData";
import { generateStats } from "@/lib/heroStats";
type SortField = "rank" | "winRate" | "banRate" | "pickRate";
type SortOrder = "asc" | "desc";
const LANES: (MLBBLane | "all")[] = ["all", "roam", "exp", "jungle", "mid", "gold"];
const LANE_NAMES: Record<string, { en: string; km: string; emoji: string }> = {
  all:    { en: "All Lanes", km: "ទាំងអស់", emoji: "🌐" },
  roam:   { en: "Roam",      km: "រុករក",    emoji: "🛡️" },
  exp:    { en: "Exp Lane",  km: "EXP",      emoji: "⚔️" },
  jungle: { en: "Jungle",    km: "ព្រៃ",     emoji: "🌲" },
  mid:    { en: "Mid Lane",  km: "កណ្តាល",   emoji: "✨" },
  gold:   { en: "Gold Lane", km: "មាស",      emoji: "💰" },
};
export default function StatsPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [q, setQ] = useState("");
  const [lane, setLane] = useState<MLBBLane | "all">("all");
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const list = useMemo(() => {
    let heroes = UNIQUE_HEROES.map((h) => ({
      ...h,
      stats: generateStats(h.id, h.tier, h.role),
    }));
    // Filter by lane
    if (lane !== "all") heroes = heroes.filter((h) => h.lane === lane);
    // Filter by search
    const n = q.trim().toLowerCase();
    if (n) heroes = heroes.filter((h) => h.name.toLowerCase().includes(n));
    // Sort
    if (sortField === "rank") {
      // Sort by tier first
      const tierOrder: Record<string, number> = { SS: 1, S: 2, A: 3, B: 4, C: 5 };
      heroes.sort((a, b) => {
        const t = tierOrder[a.tier] - tierOrder[b.tier];
        if (t !== 0) return sortOrder === "asc" ? t : -t;
        return sortOrder === "asc"
          ? b.stats.winRate - a.stats.winRate
          : a.stats.winRate - b.stats.winRate;
      });
    } else {
      heroes.sort((a, b) => {
        const va = a.stats[sortField];
        const vb = b.stats[sortField];
        return sortOrder === "asc" ? va - vb : vb - va;
      });
    }
    return heroes;
  }, [q, lane, sortField, sortOrder]);
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder(field === "rank" ? "asc" : "desc");
    }
  };
  return (
    <div>
      <MoodSetter mood="mlbb" />
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <Link href="/mlbb" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-bold text-muted">
          <ChevronLeft size={13} /> {km ? "ត្រឡប់ MLBB Hub" : "Back to MLBB Hub"}
        </Link>
      </section>
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <h1 className="text-3xl font-black sm:text-4xl">
          {km ? "Hero Stats" : "Hero Stats"} <span className="text-purple-400">2026</span>
        </h1>
        <p className="mt-2 text-sm text-muted">
          {km ? "Win Rate · Ban Rate · Pick Rate តាម Meta 2026" : "Win Rate · Ban Rate · Pick Rate — Meta 2026"}
        </p>
        {/* Search */}
        <div className="relative mt-6">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={km ? "ស្វែងរក hero..." : "Search hero by name..."}
            className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm"
          />
        </div>
        {/* Lane Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {LANES.map((l) => {
            const info = LANE_NAMES[l];
            const active = lane === l;
            return (
              <button
                key={l}
                onClick={() => setLane(l)}
                className={
                  "flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-bold transition-colors " +
                  (active
                    ? "border-purple-500 bg-purple-500/15 text-purple-300"
                    : "border-line bg-surface/40 text-muted hover:border-line-strong")
                }
              >
                <span>{info.emoji}</span>
                <span>{km ? info.km : info.en}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-faint">
          <Info size={11} />
          {km ? "បង្ហាញ " + list.length + " heroes" : "Showing " + list.length + " heroes"}
        </div>
      </section>
      {/* Table */}
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-line bg-surface-elevated/50 text-[10px] uppercase tracking-wider text-faint">
                  <th className="px-3 py-4 text-left font-black">#</th>
                  <th className="px-3 py-4 text-left font-black">{km ? "LANE" : "LANE"}</th>
                  <th className="px-3 py-4 text-left font-black">{km ? "HERO" : "HERO"}</th>
                  <th className="px-3 py-4 text-center font-black">TIER</th>
                  <th className="px-3 py-4 text-right font-black cursor-pointer hover:text-fg" onClick={() => handleSort("winRate")}>
                    <span className="inline-flex items-center gap-1">
                      WIN RATE
                      <ArrowUpDown size={10} />
                    </span>
                  </th>
                  <th className="px-3 py-4 text-right font-black cursor-pointer hover:text-fg" onClick={() => handleSort("banRate")}>
                    <span className="inline-flex items-center gap-1">
                      BAN RATE
                      <ArrowUpDown size={10} />
                    </span>
                  </th>
                  <th className="px-3 py-4 text-right font-black cursor-pointer hover:text-fg" onClick={() => handleSort("pickRate")}>
                    <span className="inline-flex items-center gap-1">
                      PICK RATE
                      <ArrowUpDown size={10} />
                    </span>
                  </th>
                  <th className="px-3 py-4 text-left font-black">{km ? "ROLE" : "ROLES"}</th>
                </tr>
              </thead>
              <tbody>
                {list.map((h, i) => {
                  const roleInfo = ROLE_LABELS[h.role];
                  const tierColor = TIER_COLORS[h.tier] || "#888";
                  const laneInfo = LANE_LABELS[h.lane];
                  return (
                    <tr key={h.id} className="border-b border-line/50 last:border-0 hover:bg-surface-elevated/30">
                      <td className="px-3 py-3 text-xs font-bold text-faint">{i + 1}</td>
                      <td className="px-3 py-3">
                        <span className="text-lg" title={laneInfo?.en}>{laneInfo?.emoji || "🌐"}</span>
                      </td>
                      <td className="px-3 py-3">
                        <Link href={"/mlbb/" + h.id} className="flex items-center gap-2.5 hover:opacity-80">
                          <div className="h-9 w-9 overflow-hidden rounded-full border-2" style={{ borderColor: tierColor }}>
                            <img src={"/images/mlbb/heroes/" + h.id + ".png"} alt={h.name} className="h-full w-full object-cover" />
                          </div>
                          <span className="text-sm font-bold">{h.name}</span>
                        </Link>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <span className="inline-block rounded-lg border px-2 py-0.5 text-xs font-black" style={{ borderColor: tierColor + "66", color: tierColor, background: tierColor + "15" }}>
                          {h.tier}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right">
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-400">
                          <TrendingUp size={12} />
                          {h.stats.winRate.toFixed(2)}%
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right">
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-red-400">
                          <TrendingDown size={12} />
                          {h.stats.banRate.toFixed(2)}%
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right">
                        <span className="text-sm font-bold text-blue-400">
                          {h.stats.pickRate.toFixed(2)}%
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <span className="inline-block rounded-lg px-2 py-0.5 text-[10px] font-bold" style={{ background: roleInfo.color + "22", color: roleInfo.color }}>
                          {roleInfo.en}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {list.length === 0 && (
          <div className="mt-8 text-center text-sm text-muted">
            {km ? "រកមិនឃើញ hero" : "No heroes found"}
          </div>
        )}
      </section>
    </div>
  );
}