"use client";
import { useEffect, useState } from "react";
import { Activity, Users, TrendingUp, Zap, Radio } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { AnimatedNumber } from "@/components/AnimatedNumber";

type Stat = {
  icon: typeof Activity;
  labelKm: string;
  labelEn: string;
  value: number;
  suffix?: string;
  decimals?: number;
  color: string;
};

const STATS: Stat[] = [
  {
    icon: Users,
    labelKm: "អ្នកលេង Online",
    labelEn: "Players Online",
    value: 48290,
    color: "#22d3ee",
  },
  {
    icon: TrendingUp,
    labelKm: "Matches ថ្ងៃនេះ",
    labelEn: "Matches Today",
    value: 1.2,
    suffix: "M",
    decimals: 1,
    color: "#3b82f6",
  },
  {
    icon: Zap,
    labelKm: "Meta Update",
    labelEn: "Meta Update",
    value: 2,
    suffix: "h ago",
    color: "#a855f7",
  },
  {
    icon: Activity,
    labelKm: "Heroes ក្នុង Meta",
    labelEn: "Meta Heroes",
    value: 110,
    suffix: "+",
    color: "#f5c542",
  },
];

export function LiveStatsBar() {
  const { lang } = useLang();
  const km = lang === "km";
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => p + 1), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative border-b border-line bg-surface/40 backdrop-blur">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.6) 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-red-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              LIVE
            </span>
            <span className="text-[11px] font-bold text-faint">
              {km ? "ស្ថិតិបន្តផ្ទាល់" : "Live stats"}
            </span>
          </div>
          <span className="hidden items-center gap-1.5 text-[10px] font-bold text-faint sm:inline-flex">
            <Radio size={10} />
            {km ? "ធ្វើបច្ចុប្បន្នភាពរាល់ 3 វិនាទី" : "Updates every 3s"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            const isOnline = s.labelEn === "Players Online";
            const value = isOnline ? s.value + ((pulse * 137) % 2500) : s.value;
            return (
              <div
                key={s.labelEn}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-line bg-surface/60 p-3 transition-all hover:-translate-y-0.5 hover:border-line-2"
                style={{ animation: "statFadeIn 0.5s ease-out " + i * 80 + "ms both" }}
              >
                {/* glow */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 50%, " + s.color + "22 0%, transparent 60%)",
                  }}
                />
                <span
                  className="relative grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-transform group-hover:scale-110"
                  style={{
                    background: s.color + "20",
                    color: s.color,
                    boxShadow: "0 0 0 1px " + s.color + "40",
                  }}
                >
                  <Icon size={17} strokeWidth={2.2} />
                </span>
                <div className="relative min-w-0">
                  <div
                    className="font-mono text-base font-black leading-tight sm:text-lg"
                    style={{ color: s.color }}
                  >
                    <AnimatedNumber
                      value={value}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  </div>
                  <div className="truncate text-[10px] font-bold uppercase tracking-wider text-faint">
                    {km ? s.labelKm : s.labelEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes statFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}