export type WeaponCategory =
  | "ar"
  | "smg"
  | "shotgun"
  | "sniper"
  | "dmr"
  | "lmg"
  | "pistol";

export type FFWeapon = {
  id: string;
  name: string;
  emoji: string;
  category: WeaponCategory;
  damage: number;   // 1-100
  rate: number;     // 1-100
  range: number;    // 1-100
  accuracy: number; // 1-100
  ammo: string;
  tier: "S" | "A" | "B";
  accent: string;
};

export const CATEGORY_LABELS: Record<
  WeaponCategory,
  { en: string; km: string; color: string }
> = {
  ar:      { en: "Assault Rifle", km: "កាំភ្លើងវែង", color: "#22d3ee" },
  smg:     { en: "SMG",           km: "SMG",           color: "#ef4444" },
  shotgun: { en: "Shotgun",       km: "កាំភ្លើងខ្លី", color: "#f59e0b" },
  sniper:  { en: "Sniper",        km: "Sniper",        color: "#8b5cf6" },
  dmr:     { en: "DMR",           km: "DMR",           color: "#a855f7" },
  lmg:     { en: "LMG",           km: "LMG",           color: "#3b82f6" },
  pistol:  { en: "Pistol",        km: "កាំភ្លើងខ្លី", color: "#6b7280" },
};

export const TIER_COLORS: Record<"S" | "A" | "B", string> = {
  S: "#f5c542",
  A: "#22d3ee",
  B: "#6b7280",
};

export const FF_WEAPONS: FFWeapon[] = [
  // ═══ ASSAULT RIFLES ═══
  { id: "ak47", name: "AK47", emoji: "🔥", category: "ar", tier: "S", accent: "#22d3ee",
    damage: 92, rate: 70, range: 78, accuracy: 65, ammo: "7.62mm" },
  { id: "m4a1", name: "M4A1", emoji: "🎯", category: "ar", tier: "S", accent: "#22d3ee",
    damage: 78, rate: 82, range: 80, accuracy: 85, ammo: "5.56mm" },
  { id: "scar", name: "SCAR", emoji: "⚡", category: "ar", tier: "A", accent: "#22d3ee",
    damage: 82, rate: 75, range: 76, accuracy: 78, ammo: "5.56mm" },
  { id: "groza", name: "Groza", emoji: "💥", category: "ar", tier: "S", accent: "#22d3ee",
    damage: 88, rate: 78, range: 72, accuracy: 70, ammo: "7.62mm" },
  { id: "an94", name: "AN94", emoji: "🎪", category: "ar", tier: "A", accent: "#22d3ee",
    damage: 86, rate: 68, range: 82, accuracy: 80, ammo: "7.62mm" },
  { id: "famas", name: "FAMAS", emoji: "🔫", category: "ar", tier: "B", accent: "#22d3ee",
    damage: 72, rate: 85, range: 70, accuracy: 75, ammo: "5.56mm" },
  { id: "xm8", name: "XM8", emoji: "🚀", category: "ar", tier: "A", accent: "#22d3ee",
    damage: 78, rate: 78, range: 74, accuracy: 82, ammo: "5.56mm" },

  // ═══ SMGs ═══
  { id: "mp40", name: "MP40", emoji: "💨", category: "smg", tier: "S", accent: "#ef4444",
    damage: 70, rate: 95, range: 55, accuracy: 60, ammo: "9mm" },
  { id: "ump", name: "UMP", emoji: "🎯", category: "smg", tier: "S", accent: "#ef4444",
    damage: 75, rate: 82, range: 62, accuracy: 78, ammo: ".45 ACP" },
  { id: "thompson", name: "Thompson", emoji: "🌟", category: "smg", tier: "A", accent: "#ef4444",
    damage: 68, rate: 90, range: 58, accuracy: 65, ammo: ".45 ACP" },
  { id: "vector", name: "Vector", emoji: "⚡", category: "smg", tier: "A", accent: "#ef4444",
    damage: 65, rate: 98, range: 52, accuracy: 72, ammo: ".45 ACP" },
  { id: "p90", name: "P90", emoji: "🌀", category: "smg", tier: "A", accent: "#ef4444",
    damage: 68, rate: 92, range: 60, accuracy: 70, ammo: "5.7mm" },
  { id: "mp5", name: "MP5", emoji: "🎵", category: "smg", tier: "A", accent: "#ef4444",
    damage: 66, rate: 88, range: 58, accuracy: 80, ammo: "9mm" },

  // ═══ SHOTGUNS ═══
  { id: "m1014", name: "M1014", emoji: "💥", category: "shotgun", tier: "S", accent: "#f59e0b",
    damage: 95, rate: 55, range: 35, accuracy: 60, ammo: "12 gauge" },
  { id: "m1887", name: "M1887", emoji: "🎯", category: "shotgun", tier: "S", accent: "#f59e0b",
    damage: 98, rate: 40, range: 32, accuracy: 72, ammo: "12 gauge" },
  { id: "mag7", name: "MAG-7", emoji: "⚡", category: "shotgun", tier: "A", accent: "#f59e0b",
    damage: 90, rate: 62, range: 38, accuracy: 65, ammo: "12 gauge" },
  { id: "spas12", name: "SPAS12", emoji: "🔫", category: "shotgun", tier: "A", accent: "#f59e0b",
    damage: 92, rate: 58, range: 36, accuracy: 68, ammo: "12 gauge" },
  { id: "m1873", name: "M1873", emoji: "🌵", category: "shotgun", tier: "B", accent: "#f59e0b",
    damage: 85, rate: 50, range: 30, accuracy: 75, ammo: "12 gauge" },

  // ═══ SNIPERS ═══
  { id: "awm", name: "AWM", emoji: "🎯", category: "sniper", tier: "S", accent: "#8b5cf6",
    damage: 100, rate: 25, range: 100, accuracy: 95, ammo: ".300 Magnum" },
  { id: "kar98k", name: "Kar98k", emoji: "🏹", category: "sniper", tier: "S", accent: "#8b5cf6",
    damage: 92, rate: 35, range: 95, accuracy: 92, ammo: "7.62mm" },
  { id: "m82b", name: "M82B", emoji: "💥", category: "sniper", tier: "S", accent: "#8b5cf6",
    damage: 95, rate: 30, range: 98, accuracy: 90, ammo: ".50 BMG" },
  { id: "svd", name: "SVD", emoji: "🔭", category: "sniper", tier: "A", accent: "#8b5cf6",
    damage: 82, rate: 55, range: 92, accuracy: 88, ammo: "7.62mm" },

  // ═══ DMR ═══
  { id: "sks", name: "SKS", emoji: "🎯", category: "dmr", tier: "A", accent: "#a855f7",
    damage: 82, rate: 60, range: 88, accuracy: 85, ammo: "7.62mm" },
  { id: "woodpecker", name: "Woodpecker", emoji: "🪵", category: "dmr", tier: "A", accent: "#a855f7",
    damage: 85, rate: 55, range: 90, accuracy: 88, ammo: "7.62mm" },
  { id: "m14", name: "M14", emoji: "🔫", category: "dmr", tier: "A", accent: "#a855f7",
    damage: 80, rate: 62, range: 86, accuracy: 82, ammo: "7.62mm" },

  // ═══ LMG ═══
  { id: "m60", name: "M60", emoji: "💪", category: "lmg", tier: "A", accent: "#3b82f6",
    damage: 88, rate: 65, range: 75, accuracy: 68, ammo: "7.62mm" },
  { id: "parafal", name: "Parafal", emoji: "🌟", category: "lmg", tier: "A", accent: "#3b82f6",
    damage: 85, rate: 62, range: 78, accuracy: 72, ammo: "5.56mm" },
  { id: "mg42", name: "MG42", emoji: "🔥", category: "lmg", tier: "S", accent: "#3b82f6",
    damage: 90, rate: 72, range: 72, accuracy: 60, ammo: "7.92mm" },

  // ═══ PISTOLS ═══
  { id: "desert_eagle", name: "Desert Eagle", emoji: "🦅", category: "pistol", tier: "S", accent: "#6b7280",
    damage: 88, rate: 55, range: 60, accuracy: 82, ammo: ".50 AE" },
  { id: "m500", name: "M500", emoji: "🎯", category: "pistol", tier: "A", accent: "#6b7280",
    damage: 92, rate: 35, range: 55, accuracy: 78, ammo: ".500 S&W" },
  { id: "usp", name: "USP", emoji: "🔫", category: "pistol", tier: "B", accent: "#6b7280",
    damage: 65, rate: 68, range: 55, accuracy: 80, ammo: "9mm" },
];

export function getWeaponCount(): number {
  return FF_WEAPONS.length;
}