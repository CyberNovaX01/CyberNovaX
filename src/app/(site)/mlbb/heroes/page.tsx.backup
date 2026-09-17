"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Shield, Wand2, Crosshair, Target, Swords, Heart, X, ChevronLeft } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { HeroCard, ROLE_COLORS, type Role } from "@/components/HeroCard";
import { useT } from "@/lib/i18n";

const ROLE_ICONS: Record<Role, any> = {
  Assassin: Crosshair, Tank: Shield, Mage: Wand2,
  Marksman: Target, Fighter: Swords, Support: Heart,
};
const ROLES: Role[] = ["Assassin", "Tank", "Mage", "Marksman", "Fighter", "Support"];

type H = { id: string; name: string; role: Role; difficulty: 1 | 2 | 3; imageUrl: string | null };

const HEROES: H[] = [
  { id: "lancelot", name: "Lancelot", role: "Assassin", difficulty: 3, imageUrl: null },
  { id: "gusion", name: "Gusion", role: "Assassin", difficulty: 3, imageUrl: null },
  { id: "ling", name: "Ling", role: "Assassin", difficulty: 3, imageUrl: null },
  { id: "hayabusa", name: "Hayabusa", role: "Assassin", difficulty: 2, imageUrl: null },
  { id: "fanny", name: "Fanny", role: "Assassin", difficulty: 3, imageUrl: null },
  { id: "karina", name: "Karina", role: "Assassin", difficulty: 1, imageUrl: null },
  { id: "tigreal", name: "Tigreal", role: "Tank", difficulty: 1, imageUrl: null },
  { id: "franco", name: "Franco", role: "Tank", difficulty: 2, imageUrl: null },
  { id: "khufra", name: "Khufra", role: "Tank", difficulty: 2, imageUrl: null },
  { id: "atlas", name: "Atlas", role: "Tank", difficulty: 2, imageUrl: null },
  { id: "gatotkaca", name: "Gatotkaca", role: "Tank", difficulty: 1, imageUrl: null },
  { id: "uranus", name: "Uranus", role: "Tank", difficulty: 1, imageUrl: null },
  { id: "kagura", name: "Kagura", role: "Mage", difficulty: 3, imageUrl: null },
  { id: "lunox", name: "Lunox", role: "Mage", difficulty: 3, imageUrl: null },
  { id: "harith", name: "Harith", role: "Mage", difficulty: 2, imageUrl: null },
  { id: "eudora", name: "Eudora", role: "Mage", difficulty: 1, imageUrl: null },
  { id: "vale", name: "Vale", role: "Mage", difficulty: 2, imageUrl: null },
  { id: "pharsa", name: "Pharsa", role: "Mage", difficulty: 2, imageUrl: null },
  { id: "layla", name: "Layla", role: "Marksman", difficulty: 1, imageUrl: null },
  { id: "miya", name: "Miya", role: "Marksman", difficulty: 1, imageUrl: null },
  { id: "bruno", name: "Bruno", role: "Marksman", difficulty: 1, imageUrl: null },
  { id: "claude", name: "Claude", role: "Marksman", difficulty: 2, imageUrl: null },
  { id: "wanwan", name: "Wanwan", role: "Marksman", difficulty: 3, imageUrl: null },
  { id: "beatrix", name: "Beatrix", role: "Marksman", difficulty: 3, imageUrl: null },
  { id: "chou", name: "Chou", role: "Fighter", difficulty: 3, imageUrl: null },
  { id: "aldous", name: "Aldous", role: "Fighter", difficulty: 2, imageUrl: null },
  { id: "yu-zhong", name: "Yu Zhong", role: "Fighter", difficulty: 2, imageUrl: null },
  { id: "dyrroth", name: "Dyrroth", role: "Fighter", difficulty: 1, imageUrl: null },
  { id: "paquito", name: "Paquito", role: "Fighter", difficulty: 2, imageUrl: null },
  { id: "thamuz", name: "Thamuz", role: "Fighter", difficulty: 1, imageUrl: null },
  { id: "angela", name: "Angela", role: "Support", difficulty: 1, imageUrl: null },
  { id: "estes", name: "Estes", role: "Support", difficulty: 1, imageUrl: null },
  { id: "rafaela", name: "Rafaela", role: "Support", difficulty: 1, imageUrl: null },
  { id: "diggie", name: "Diggie", role: "Support", difficulty: 2, imageUrl: null },
  { id: "mathilda", name: "Mathilda", role: "Support", difficulty: 2, imageUrl: null },
  { id: "faramis", name: "Faramis", role: "Support", difficulty: 2, imageUrl: null },
];

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
            <p className="max-w-xl text-sm text-muted sm:text-base">{t("mlbb.title")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 flex flex-col gap-4">
            <div className="relative">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
              <input
                value={q} onChange={(e) => setQ(e.target.value)}
                placeholder={t("mlbb.search")}
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
            {t("mlbb.noResults")} "{q}"
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