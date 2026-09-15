export type Tier = "SS" | "S" | "A" | "B" | "C";
export type Role = "Assassin" | "Tank" | "Mage" | "Marksman" | "Fighter" | "Support";
export type HeroTier = {
  id: string;
  name: string;
  role: Role;
  tier: Tier;
  winRate: number;
  pickRate: number;
  banRate: number;
  difficulty: 1 | 2 | 3;
};
export const TIER_COLORS: Record<Tier, string> = {
  SS: "#f5c542",
  S:  "#ff8c00",
  A:  "#a855f7",
  B:  "#3b82f6",
  C:  "#6b7280",
};
export const ROLE_COLORS: Record<Role, string> = {
  Assassin: "#ef4444",
  Tank: "#3b82f6",
  Mage: "#a855f7",
  Marksman: "#f59e0b",
  Fighter: "#10b981",
  Support: "#06b6d4",
};
export const TIER_HEROES: HeroTier[] = [
  // SS TIER
  { id: "lancelot", name: "Lancelot", role: "Assassin", tier: "SS", winRate: 54.2, pickRate: 18.5, banRate: 42.1, difficulty: 3 },
  { id: "gusion", name: "Gusion", role: "Assassin", tier: "SS", winRate: 53.8, pickRate: 15.2, banRate: 38.5, difficulty: 3 },
  { id: "kagura", name: "Kagura", role: "Mage", tier: "SS", winRate: 53.5, pickRate: 12.8, banRate: 35.2, difficulty: 3 },
  { id: "chou", name: "Chou", role: "Fighter", tier: "SS", winRate: 52.9, pickRate: 14.5, banRate: 32.8, difficulty: 3 },
  // S TIER
  { id: "ling", name: "Ling", role: "Assassin", tier: "S", winRate: 52.5, pickRate: 11.2, banRate: 28.5, difficulty: 3 },
  { id: "lunox", name: "Lunox", role: "Mage", tier: "S", winRate: 52.3, pickRate: 9.8, banRate: 25.4, difficulty: 3 },
  { id: "khufra", name: "Khufra", role: "Tank", tier: "S", winRate: 52.1, pickRate: 8.5, banRate: 22.8, difficulty: 2 },
  { id: "franco", name: "Franco", role: "Tank", tier: "S", winRate: 51.9, pickRate: 10.2, banRate: 24.5, difficulty: 2 },
  { id: "beatrix", name: "Beatrix", role: "Marksman", tier: "S", winRate: 51.7, pickRate: 8.9, banRate: 20.1, difficulty: 3 },
  { id: "aldous", name: "Aldous", role: "Fighter", tier: "S", winRate: 51.5, pickRate: 7.8, banRate: 18.5, difficulty: 2 },
  // A TIER
  { id: "hayabusa", name: "Hayabusa", role: "Assassin", tier: "A", winRate: 50.8, pickRate: 6.5, banRate: 12.4, difficulty: 2 },
  { id: "fanny", name: "Fanny", role: "Assassin", tier: "A", winRate: 50.5, pickRate: 5.8, banRate: 15.2, difficulty: 3 },
  { id: "harith", name: "Harith", role: "Mage", tier: "A", winRate: 50.2, pickRate: 5.2, banRate: 10.8, difficulty: 2 },
  { id: "atlas", name: "Atlas", role: "Tank", tier: "A", winRate: 50.1, pickRate: 6.8, banRate: 11.5, difficulty: 2 },
  { id: "claude", name: "Claude", role: "Marksman", tier: "A", winRate: 49.9, pickRate: 4.8, banRate: 8.5, difficulty: 2 },
  { id: "yu-zhong", name: "Yu Zhong", role: "Fighter", tier: "A", winRate: 49.7, pickRate: 5.5, banRate: 9.2, difficulty: 2 },
  { id: "angela", name: "Angela", role: "Support", tier: "A", winRate: 49.5, pickRate: 7.2, banRate: 10.5, difficulty: 1 },
  // B TIER
  { id: "karina", name: "Karina", role: "Assassin", tier: "B", winRate: 48.5, pickRate: 3.8, banRate: 4.2, difficulty: 1 },
  { id: "eudora", name: "Eudora", role: "Mage", tier: "B", winRate: 48.3, pickRate: 3.5, banRate: 3.8, difficulty: 1 },
  { id: "tigreal", name: "Tigreal", role: "Tank", tier: "B", winRate: 48.1, pickRate: 4.2, banRate: 5.1, difficulty: 1 },
  { id: "layla", name: "Layla", role: "Marksman", tier: "B", winRate: 47.9, pickRate: 5.5, banRate: 2.8, difficulty: 1 },
  { id: "paquito", name: "Paquito", role: "Fighter", tier: "B", winRate: 47.7, pickRate: 3.2, banRate: 3.5, difficulty: 2 },
  { id: "estes", name: "Estes", role: "Support", tier: "B", winRate: 47.5, pickRate: 4.5, banRate: 4.8, difficulty: 1 },
  // C TIER
  { id: "miya", name: "Miya", role: "Marksman", tier: "C", winRate: 46.2, pickRate: 3.5, banRate: 1.2, difficulty: 1 },
  { id: "bruno", name: "Bruno", role: "Marksman", tier: "C", winRate: 46.1, pickRate: 2.8, banRate: 1.5, difficulty: 1 },
  { id: "rafaela", name: "Rafaela", role: "Support", tier: "C", winRate: 45.8, pickRate: 2.5, banRate: 1.8, difficulty: 1 },
  { id: "gatotkaca", name: "Gatotkaca", role: "Tank", tier: "C", winRate: 45.5, pickRate: 2.2, banRate: 1.5, difficulty: 1 },
];
export const TIERS: Tier[] = ["SS", "S", "A", "B", "C"];
export const ROLES: Role[] = ["Assassin", "Tank", "Mage", "Marksman", "Fighter", "Support"];
