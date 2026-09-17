"use client";
import Link from "next/link";
import { Star } from "lucide-react";
import { useState } from "react";

export type Role = "Assassin" | "Tank" | "Mage" | "Marksman" | "Fighter" | "Support";

export const ROLE_COLORS: Record<Role, string> = {
  Assassin: "#ef4444", Tank: "#3b82f6", Mage: "#a855f7",
  Marksman: "#f59e0b", Fighter: "#10b981", Support: "#06b6d4",
};

export function HeroCard({ id, name, role, difficulty, imageUrl }:
  { id: string; name: string; role: Role; difficulty: 1 | 2 | 3; imageUrl: string | null }) {
  const color = ROLE_COLORS[role];
  const [imgOk, setImgOk] = useState(true);
  const src = imageUrl || "/images/mlbb/heroes/" + id + ".png";

  return (
    <Link href={"/mlbb/" + id}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-line-2"
      style={{ boxShadow: "0 20px 50px -30px " + color + "88" }}>
      {imgOk ? (
        <img
          src={src}
          alt={name}
          onError={() => setImgOk(false)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, " + color + "60 0%, " + color + "20 45%, transparent 100%)" }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      <span className="absolute right-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md" style={{ background: color + "30", color, boxShadow: "0 0 0 1px " + color + "55" }}>{role}</span>
      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="truncate text-sm font-bold text-white">{name}</div>
        <div className="mt-1 flex items-center gap-0.5">
          {[1, 2, 3].map((i) => (
            <Star key={i} size={10} className={i <= difficulty ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
          ))}
        </div>
      </div>
    </Link>
  );
}