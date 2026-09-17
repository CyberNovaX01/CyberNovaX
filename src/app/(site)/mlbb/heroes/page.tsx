"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Shield, Wand2, Crosshair, Target, Swords, Heart, X, ChevronLeft } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { HeroCard, ROLE_COLORS, type Role } from "@/components/HeroCard";
import { useT } from "@/lib/i18n";
import { UNIQUE_HEROES } from "@/lib/mlbbTierData";

const ROLE_ICONS: Record<Role, any> = {
  Assassin: Crosshair, Tank: Shield, Mage: Wand2,
  Marksman: Target, Fighter: Swords, Support: Heart,
};
const ROLES: Role[] = ["Assassin", "Tank", "Mage", "Marksman", "Fighter", "Support"];

const ROLE_MAP: Record<string, Role> = {
  assassin: "Assassin", tank: "Tank", mage: "Mage",
  marksman: "Marksman", fighter: "Fighter", support: "Support",
};

const TIER_DIFF: Record<string, 1 | 2 | 3> = {
  SS: 3, S: 3, A: 2, B: 2, C: 1,
};

type H = { id: string; name: string; role: Role; difficulty: 1 | 2 | 3; imageUrl: string | null };

const HEROES: H[] = UNIQUE_HEROES.map((h) => ({
  id: h.id,
  name: h.name,
  role: ROLE_MAP[h.role] || "Fighter",
  difficulty: TIER_DIFF[h.tier] || 2,
  imageUrl: "/images/mlbb/heroes/" + h.id + ".png",
}));

export default function HeroesPage() {
  const t = useT();
  const [q, setQ] = useState("");
  const [role, setRole] = useState<Role | "All">("All");

  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase();
    return HEROES.filter((h) => {
      if (role !== "All" && h.role !== role) return false;
      if (n && !h.name.toLowerCase().includes(n)) return false;
      return true;
    });
  }, [q, role]);

  const grouped = useMemo(() => {
    if (role !== "All" || q.trim()) return null;
    const g: Record<Role, H[]> = { Assassin: [], Tank: [], Mage: [], Marksman: [], Fighter: [], Support: [] };
    HEROES.forEach((h) => g[h.role].push(h));
    return g;
  }, [role, q]);

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
            <span className="kicker" style={{ color: "#3b82f6" }}>MOBILE LEGENDS</span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              រក <span className="text-gradient">Hero</span> របស់អ្នក
            </h1>
            <p className="max-w-xl text-sm text-muted sm:text-base">
              {HEROES.length} heroes — ជ្រើសតាម Role
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 flex flex-col gap-4">
            <div className="relative">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
              <input
                value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="ស្វែងរក Hero..."
                className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-11 text-sm text-fg placeholder:text-faint backdrop-blur focus:border-blue/50 focus:outline-none focus:ring-2 focus:ring-blue/20"
              />
              {q && (
                <button onClick={() => setQ("")} className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-faint hover:bg-raised hover:text-fg">
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <RoleChip active={role === "All"} color="#3b82f6" onClick={() => setRole("All")} label={"All (" + HEROES.length + ")"} icon={null} />
              {ROLES.map((r) => {
                const count = HEROES.filter((h) => h.role === r).length;
                const Icon = ROLE_ICONS[r];
                return <RoleChip key={r} active={role === r} color={ROLE_COLORS[r]} onClick={() => setRole(r)} label={r + " (" + count + ")"} icon={<Icon size={12} />} />;
              })}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-line bg-surface/40 p-12 text-center text-muted">
            រកមិនឃើញ "{q}"
          </div>
        )}

        {grouped && (
          <div className="space-y-12">
            {ROLES.map((r) => {
              const list = grouped[r];
              if (!list.length) return null;
              const Icon = ROLE_ICONS[r];
              return (
                <FadeIn key={r}>
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: ROLE_COLORS[r] + "20", color: ROLE_COLORS[r] }}>
                        <Icon size={17} />
                      </span>
                      <h2 className="text-xl font-bold tracking-tight">{r}</h2>
                      <span className="text-xs text-faint">· {list.length}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                      {list.map((h) => <HeroCard key={h.id} {...h} />)}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        )}

        {!grouped && filtered.length > 0 && (
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {filtered.map((h, i) => (
              <FadeIn key={h.id} delay={i * 25}><HeroCard {...h} /></FadeIn>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function RoleChip({ active, color, onClick, label, icon }: { active: boolean; color: string; onClick: () => void; label: string; icon: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className="flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all"
      style={active
        ? { background: color + "22", color, borderColor: color + "66" }
        : { background: "transparent", color: "var(--c-muted)", borderColor: "var(--c-line)" }}>
      {icon}{label}
    </button>
  );
}