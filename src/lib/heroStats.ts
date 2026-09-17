// Hero Stats Data 2026 — Win Rate, Ban Rate, Pick Rate
// Auto-generated based on Meta Tier + Role
export type HeroStats = {
  id: string;
  winRate: number;
  banRate: number;
  pickRate: number;
};
// Base stats តាម Tier
const TIER_BASE: Record<string, { win: [number, number]; ban: [number, number]; pick: [number, number] }> = {
  SS: { win: [53.5, 56.5], ban: [40, 62], pick: [1.2, 3.5] },
  S:  { win: [51.5, 54.5], ban: [18, 40], pick: [0.8, 2.5] },
  A:  { win: [49.8, 52.5], ban: [6, 20],  pick: [0.5, 1.8] },
  B:  { win: [48.5, 50.5], ban: [1, 8],   pick: [0.3, 1.2] },
  C:  { win: [46.5, 49.5], ban: [0.2, 3], pick: [0.1, 0.8] },
};
// Seed-based random ដើម្បីទទួលបានលទ្ធផលដដែលរាល់ពេល
function seedRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(hash % 1000) / 1000;
}
function randomInRange(seed: string, min: number, max: number, offset: number = 0): number {
  const r = seedRandom(seed + offset);
  return min + r * (max - min);
}
export function generateStats(id: string, tier: string, role: string): HeroStats {
  const base = TIER_BASE[tier] || TIER_BASE.B;
  // Role modifier
  const roleMod: Record<string, { win: number; ban: number; pick: number }> = {
    tank: { win: 0.3, ban: 0.5, pick: 0.2 },
    support: { win: 0.5, ban: 0.8, pick: -0.2 },
    assassin: { win: -0.2, ban: 1.2, pick: 0.5 },
    marksman: { win: 0, ban: 0.3, pick: 0.8 },
    mage: { win: 0.2, ban: 0.4, pick: 0.3 },
    fighter: { win: 0.1, ban: 0.2, pick: 0.4 },
  };
  const mod = roleMod[role] || { win: 0, ban: 0, pick: 0 };
  return {
    id,
    winRate: Math.round((randomInRange(id, base.win[0], base.win[1], 1) + mod.win) * 100) / 100,
    banRate: Math.round((randomInRange(id, base.ban[0], base.ban[1], 2) + mod.ban) * 100) / 100,
    pickRate: Math.round((randomInRange(id, base.pick[0], base.pick[1], 3) + mod.pick) * 100) / 100,
  };
}