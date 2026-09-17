"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Swords, Shield, Search, ChevronLeft, Info } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { UNIQUE_HEROES } from "@/lib/mlbbTierData";

const ROLE_COLORS: Record<string, string> = {
  assassin: "#ef4444", tank: "#3b82f6", mage: "#a855f7",
  marksman: "#f59e0b", fighter: "#10b981", support: "#06b6d4",
};

const ROLE_EN: Record<string, string> = {
  assassin: "Assassin", tank: "Tank", mage: "Mage",
  marksman: "Marksman", fighter: "Fighter", support: "Support",
};

const STRONG_MAP: Record<string, string[]> = {
  assassin: ["marksman", "mage", "support"],
  tank: ["assassin", "fighter"],
  mage: ["fighter", "tank", "support"],
  marksman: ["tank", "fighter"],
  fighter: ["mage", "support", "assassin"],
  support: ["fighter", "mage"],
};

const WEAK_MAP: Record<string, string[]> = {
  assassin: ["tank", "fighter"],
  tank: ["marksman", "mage"],
  mage: ["assassin", "marksman"],
  marksman: ["assassin", "mage"],
  fighter: ["marksman", "mage"],
  support: ["assassin", "tank"],
};

// ★ Pick N heroes with seed based on hero ID
function pickHeroes(pool: any[], count: number, seed: number, excludeId: string) {
  const filtered = pool.filter((h) => h.id !== excludeId);
  if (filtered.length === 0) return [];

  // Rotate array based on seed → different heroes for each hero
  const offset = seed % filtered.length;
  const rotated = [...filtered.slice(offset), ...filtered.slice(0, offset)];

  return rotated.slice(0, count).map((x) => ({
    id: x.id,
    name: x.name,
    role: x.role,
  }));
}

// Hash hero ID to number
function hashId(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

const ALL_COUNTERS = UNIQUE_HEROES.map((h) => {
  const strongRoles = STRONG_MAP[h.role] || [];
  const weakRoles = WEAK_MAP[h.role] || [];
  const seed = hashId(h.id);

  const strongPool = UNIQUE_HEROES.filter((x) => strongRoles.includes(x.role));
  const weakPool = UNIQUE_HEROES.filter((x) => weakRoles.includes(x.role));

  const strong = pickHeroes(strongPool, 3, seed, h.id);
  const weak = pickHeroes(weakPool, 3, seed + 7, h.id);

  return {
    id: h.id,
    name: h.name,
    role: h.role,
    strong,
    weak,
  };
});

export default function CountersPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return ALL_COUNTERS.slice(0, 30);
    return ALL_COUNTERS.filter((c) => c.name.toLowerCase().includes(n));
  }, [q]);

  return (
    <>
      <MoodSetter mood="mlbb" />

      <section className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <Link href="/mlbb" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-bold text-muted backdrop-blur transition-colors hover:border-gold/40 hover:text-gold">
          <ChevronLeft size={13} />MLBB Hub
        </Link>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <FadeIn>
          <span className="kicker" style={{ color: "#ef4444" }}>
            <Swords size={12} />HERO COUNTERS
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Hero <span className="text-gradient">Counters</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Hero ណាឈ្នះ hero ណា — ជៀសវាងគ្រោះថ្នាក់
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8">
            <div className="relative">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
              <input value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="ស្វែងរក hero…"
                className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm text-fg placeholder:text-faint backdrop-blur focus:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-faint">
              <Info size={11} />
              បង្ហាញ {list.length} / {ALL_COUNTERS.length} heroes
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <div className="space-y-6">
          {list.map((c, i) => {
            const color = ROLE_COLORS[c.role] || "#666";
            return (
              <FadeIn key={c.id} delay={i * 30}>
                <div className="overflow-hidden rounded-3xl border border-line bg-surface" style={{ boxShadow: "0 20px 50px -30px " + color + "88" }}>
                  <div className="flex items-center gap-4 border-b border-line p-5" style={{ background: "linear-gradient(135deg, " + color + "15 0%, transparent 100%)" }}>
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl" style={{ boxShadow: "0 0 0 2px " + color + "55" }}>
                      <img src={"/images/mlbb/heroes/" + c.id + ".png"} alt={c.name} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <h2 className="text-xl font-black tracking-tight">{c.name}</h2>
                      <p className="text-xs font-bold uppercase" style={{ color }}>{ROLE_EN[c.role]}</p>
                    </div>
                    <Link href={"/mlbb/" + c.id} className="ml-auto text-xs font-bold text-muted transition-colors hover:text-gold">
                      View guide →
                    </Link>
                  </div>

                  <div className="grid gap-6 p-5 sm:grid-cols-2">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Swords size={14} className="text-emerald-400" />
                        <span className="text-xs font-black uppercase tracking-wider text-emerald-400">Strong Against</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {c.strong.map((h) => (
                          <Link key={h.id} href={"/mlbb/" + h.id}
                            className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-400 transition-colors hover:bg-emerald-400/20">
                            <img src={"/images/mlbb/heroes/" + h.id + ".png"} alt={h.name} className="h-6 w-6 rounded-full object-cover" loading="lazy" />
                            {h.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Shield size={14} className="text-red-400" />
                        <span className="text-xs font-black uppercase tracking-wider text-red-400">Weak Against</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {c.weak.map((h) => (
                          <Link key={h.id} href={"/mlbb/" + h.id}
                            className="flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-2 py-1 text-xs font-bold text-red-400 transition-colors hover:bg-red-400/20">
                            <img src={"/images/mlbb/heroes/" + h.id + ".png"} alt={h.name} className="h-6 w-6 rounded-full object-cover" loading="lazy" />
                            {h.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {list.length === 0 && (
          <div className="rounded-2xl border border-line bg-surface/40 p-12 text-center text-muted">
            គ្មាន hero ត្រូវគ្នា "{q}"
          </div>
        )}
      </section>
    </>
  );
}