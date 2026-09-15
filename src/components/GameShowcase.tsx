"use client";
import Link from "next/link";
import { ArrowRight, Crosshair, Swords } from "lucide-react";
import { useT, useLang } from "@/lib/i18n";
type Game = {
  slug: string; name: string; tagKm: string; tagEn: string;
  descKm: string; descEn: string; href: string;
  accent: string; accent2: string;
  icon: "crosshair" | "swords"; emoji: string;
  stats: { label: string; value: string }[];
};
const GAMES: Game[] = [
  {
    slug: "free-fire", name: "Free Fire",
    tagKm: "Sensitivity · Loadout · តាមគ្រឿង", tagEn: "Sensitivity · Loadout · per device",
    descKm: "ជ្រើសរើសម៉ាក ម៉ូដែល RAM របស់ឧបករណ៍ រួចទទួលបាន sensitivity ត្រូវនឹងអ្នក។",
    descEn: "Pick your device brand, model, and RAM to get sensitivity tuned to your hardware.",
    href: "/ff", accent: "#ff8c00", accent2: "#ffb347", icon: "crosshair", emoji: "🔥",
    stats: [{ label: "Devices", value: "24+" }, { label: "Guides", value: "80+" }, { label: "Styles", value: "4" }],
  },
  {
    slug: "mlbb", name: "Mobile Legends",
    tagKm: "Hero guide · Build · តាម Role", tagEn: "Hero guide · Build · by role",
    descKm: "ស្វែងរក hero តាម Role — Assassin, Tank, Mage, Marksman, Fighter, Support។",
    descEn: "Find your hero by role — Assassin, Tank, Mage, Marksman, Fighter, Support.",
    href: "/mlbb", accent: "#3b82f6", accent2: "#60a5fa", icon: "swords", emoji: "⚔️",
    stats: [{ label: "Heroes", value: "48+" }, { label: "Roles", value: "6" }, { label: "Builds", value: "120+" }],
  },
];
export function GameShowcase({ onHoverMood }: { onHoverMood: (mood: "cosmic" | "ff" | "mlbb") => void }) {
  const t = useT();
  const { lang } = useLang();
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <span className="kicker mx-auto justify-center">{t("home.choose")}</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {t("home.chooseSub")}
        </h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {GAMES.map((g) => {
          const Icon = g.icon === "crosshair" ? Crosshair : Swords;
          return (
            <Link key={g.slug} href={g.href}
              onMouseEnter={() => onHoverMood(g.slug === "free-fire" ? "ff" : "mlbb")}
              onMouseLeave={() => onHoverMood("cosmic")}
              className="showcase group relative block overflow-hidden rounded-3xl border border-line bg-surface"
              style={{ "--c-accent": g.accent, "--c-accent-2": g.accent2 } as React.CSSProperties}>
              <div className="absolute inset-0 img-zoom" style={{ background: "linear-gradient(135deg, " + g.accent + "40 0%, " + g.accent + "15 40%, #0a0d14 100%)" }} />
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-70" style={{ background: g.accent }} />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60" style={{ background: g.accent2 }} />
              <div className="float-chip absolute right-8 top-12 text-6xl opacity-20 transition-opacity duration-500 group-hover:opacity-40">
                {g.emoji}
              </div>
              <div className="relative z-10 p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: g.accent + "25", color: g.accent, boxShadow: "0 0 0 1px " + g.accent + "55, 0 20px 40px -16px " + g.accent + "88" }}>
                    <Icon size={30} strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="text-3xl font-black tracking-tight sm:text-4xl">{g.name}</h3>
                    <p className="mt-1 text-sm font-semibold" style={{ color: g.accent }}>
                      {lang === "km" ? g.tagKm : g.tagEn}
                    </p>
                  </div>
                </div>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                  {lang === "km" ? g.descKm : g.descEn}
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                  {g.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-mono text-2xl font-black" style={{ color: g.accent }}>{s.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-faint">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-faint">EXPLORE NOW</span>
                  <span className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 group-hover:gap-3" style={{ background: g.accent + "25", color: g.accent, boxShadow: "0 0 0 1px " + g.accent + "55" }}>
                    {t("home.enter") || "Enter"} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}