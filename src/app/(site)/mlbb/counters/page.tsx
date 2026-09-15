"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Swords, Shield, Search, ChevronLeft } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { ROLE_COLORS, type Role } from "@/lib/tierData";

type Counter = {
  id: string;
  name: string;
  role: Role;
  strongAgainst: { id: string; name: string }[];
  weakAgainst: { id: string; name: string }[];
};

const COUNTERS: Counter[] = [
  {
    id: "lancelot", name: "Lancelot", role: "Assassin",
    strongAgainst: [{ id: "layla", name: "Layla" }, { id: "miya", name: "Miya" }, { id: "eudora", name: "Eudora" }],
    weakAgainst: [{ id: "khufra", name: "Khufra" }, { id: "franco", name: "Franco" }, { id: "tigreal", name: "Tigreal" }],
  },
  {
    id: "gusion", name: "Gusion", role: "Assassin",
    strongAgainst: [{ id: "layla", name: "Layla" }, { id: "miya", name: "Miya" }],
    weakAgainst: [{ id: "khufra", name: "Khufra" }, { id: "chou", name: "Chou" }],
  },
  {
    id: "kagura", name: "Kagura", role: "Mage",
    strongAgainst: [{ id: "fanny", name: "Fanny" }, { id: "hayabusa", name: "Hayabusa" }],
    weakAgainst: [{ id: "lancelot", name: "Lancelot" }, { id: "gusion", name: "Gusion" }],
  },
  {
    id: "khufra", name: "Khufra", role: "Tank",
    strongAgainst: [{ id: "lancelot", name: "Lancelot" }, { id: "fanny", name: "Fanny" }, { id: "ling", name: "Ling" }],
    weakAgainst: [{ id: "wanwan", name: "Wanwan" }, { id: "beatrix", name: "Beatrix" }],
  },
  {
    id: "franco", name: "Franco", role: "Tank",
    strongAgainst: [{ id: "layla", name: "Layla" }, { id: "miya", name: "Miya" }],
    weakAgainst: [{ id: "kagura", name: "Kagura" }, { id: "lunox", name: "Lunox" }],
  },
  {
    id: "chou", name: "Chou", role: "Fighter",
    strongAgainst: [{ id: "gusion", name: "Gusion" }, { id: "hayabusa", name: "Hayabusa" }],
    weakAgainst: [{ id: "khufra", name: "Khufra" }, { id: "franco", name: "Franco" }],
  },
];

export default function CountersPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return COUNTERS;
    return COUNTERS.filter((c) => c.name.toLowerCase().includes(n));
  }, [q]);

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
            <span className="kicker" style={{ color: "#ef4444" }}>
              <Swords size={12} />HERO COUNTERS
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Hero <span className="text-gradient">Counters</span>
            </h1>
            <p className="max-w-xl text-sm text-muted sm:text-base">
              Hero ណាឈ្នះ hero ណា — ជៀសវាងគ្រោះថ្នាក់
            </p>
          </div>
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
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6">
        <div className="space-y-6">
          {list.map((c, i) => {
            const color = ROLE_COLORS[c.role];
            return (
              <FadeIn key={c.id} delay={i * 60}>
                <div className="overflow-hidden rounded-3xl border border-line bg-surface" style={{ boxShadow: "0 20px 50px -30px " + color + "88" }}>
                  <div className="flex items-center gap-4 border-b border-line p-5" style={{ background: "linear-gradient(135deg, " + color + "15 0%, transparent 100%)" }}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl text-xl font-black" style={{ background: color + "25", color, boxShadow: "0 0 0 1px " + color + "55" }}>
                      {c.name.charAt(0)}
                    </span>
                    <div>
                      <h2 className="text-xl font-black tracking-tight">{c.name}</h2>
                      <p className="text-xs font-bold uppercase" style={{ color }}>{c.role}</p>
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
                        {c.strongAgainst.map((h) => (
                          <Link key={h.id} href={"/mlbb/" + h.id}
                            className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-400 transition-colors hover:bg-emerald-400/20">
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
                        {c.weakAgainst.map((h) => (
                          <Link key={h.id} href={"/mlbb/" + h.id}
                            className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-xs font-bold text-red-400 transition-colors hover:bg-red-400/20">
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