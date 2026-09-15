export type Role = "Assassin" | "Tank" | "Mage" | "Marksman" | "Fighter" | "Support";

export type HeroFull = {
  id: string;
  name: string;
  role: Role;
  difficulty: 1 | 2 | 3;
  lane: string;
  tier: "SS" | "S" | "A" | "B" | "C";
  winRate: number;
  pickRate: number;
  banRate: number;
  imageUrl: string | null;
};

export const ALL_HEROES: HeroFull[] = [
  // ── ASSASSINS ─────────────────────────────────────────────
  { id: "lancelot", name: "Lancelot", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "SS", winRate: 54.2, pickRate: 18.5, banRate: 42.1, imageUrl: null },
  { id: "gusion", name: "Gusion", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "SS", winRate: 53.8, pickRate: 15.2, banRate: 38.5, imageUrl: null },
  { id: "ling", name: "Ling", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "S", winRate: 52.5, pickRate: 11.2, banRate: 28.5, imageUrl: null },
  { id: "hayabusa", name: "Hayabusa", role: "Assassin", difficulty: 2, lane: "Jungle", tier: "A", winRate: 50.8, pickRate: 6.5, banRate: 12.4, imageUrl: null },
  { id: "fanny", name: "Fanny", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "A", winRate: 50.5, pickRate: 5.8, banRate: 15.2, imageUrl: null },
  { id: "karina", name: "Karina", role: "Assassin", difficulty: 1, lane: "Jungle", tier: "B", winRate: 48.5, pickRate: 3.8, banRate: 4.2, imageUrl: null },
  { id: "selena", name: "Selena", role: "Assassin", difficulty: 3, lane: "Mid", tier: "S", winRate: 52.0, pickRate: 8.5, banRate: 22.0, imageUrl: null },
  { id: "benedetta", name: "Benedetta", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "A", winRate: 50.2, pickRate: 4.5, banRate: 8.5, imageUrl: null },
  { id: "helcurt", name: "Helcurt", role: "Assassin", difficulty: 2, lane: "Jungle", tier: "A", winRate: 50.0, pickRate: 5.2, banRate: 9.5, imageUrl: null },
  { id: "hanzo", name: "Hanzo", role: "Assassin", difficulty: 2, lane: "Jungle", tier: "B", winRate: 48.9, pickRate: 3.2, banRate: 5.5, imageUrl: null },
  { id: "natalia", name: "Natalia", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "B", winRate: 48.5, pickRate: 3.5, banRate: 6.2, imageUrl: null },
  { id: "kadita", name: "Kadita", role: "Assassin", difficulty: 3, lane: "Mid", tier: "A", winRate: 49.8, pickRate: 3.8, banRate: 7.5, imageUrl: null },
  { id: "harley", name: "Harley", role: "Assassin", difficulty: 2, lane: "Jungle", tier: "A", winRate: 50.1, pickRate: 4.2, banRate: 8.0, imageUrl: null },
  { id: "yin", name: "Yin", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "A", winRate: 49.9, pickRate: 4.0, banRate: 7.2, imageUrl: null },
  { id: "aamon", name: "Aamon", role: "Assassin", difficulty: 2, lane: "Jungle", tier: "B", winRate: 48.8, pickRate: 3.0, banRate: 4.5, imageUrl: null },
  { id: "julian", name: "Julian", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "S", winRate: 51.8, pickRate: 7.5, banRate: 18.0, imageUrl: null },

  // ── TANKS ─────────────────────────────────────────────────
  { id: "khufra", name: "Khufra", role: "Tank", difficulty: 2, lane: "Roam", tier: "S", winRate: 52.1, pickRate: 8.5, banRate: 22.8, imageUrl: null },
  { id: "franco", name: "Franco", role: "Tank", difficulty: 2, lane: "Roam", tier: "S", winRate: 51.9, pickRate: 10.2, banRate: 24.5, imageUrl: null },
  { id: "atlas", name: "Atlas", role: "Tank", difficulty: 2, lane: "Roam", tier: "A", winRate: 50.1, pickRate: 6.8, banRate: 11.5, imageUrl: null },
  { id: "tigreal", name: "Tigreal", role: "Tank", difficulty: 1, lane: "Roam", tier: "B", winRate: 48.1, pickRate: 4.2, banRate: 5.1, imageUrl: null },
  { id: "gatotkaca", name: "Gatotkaca", role: "Tank", difficulty: 1, lane: "Roam", tier: "C", winRate: 45.5, pickRate: 2.2, banRate: 1.5, imageUrl: null },
  { id: "uranus", name: "Uranus", role: "Tank", difficulty: 1, lane: "Exp", tier: "B", winRate: 49.2, pickRate: 4.5, banRate: 5.5, imageUrl: null },
  { id: "hylos", name: "Hylos", role: "Tank", difficulty: 1, lane: "Roam", tier: "B", winRate: 49.5, pickRate: 3.8, banRate: 4.8, imageUrl: null },
  { id: "belerick", name: "Belerick", role: "Tank", difficulty: 1, lane: "Roam", tier: "B", winRate: 49.0, pickRate: 3.2, banRate: 4.2, imageUrl: null },
  { id: "lolita", name: "Lolita", role: "Tank", difficulty: 2, lane: "Roam", tier: "A", winRate: 50.3, pickRate: 5.2, banRate: 8.5, imageUrl: null },
  { id: "akai", name: "Akai", role: "Tank", difficulty: 2, lane: "Roam", tier: "A", winRate: 50.0, pickRate: 4.8, banRate: 7.2, imageUrl: null },
  { id: "grock", name: "Grock", role: "Tank", difficulty: 2, lane: "Roam", tier: "B", winRate: 48.8, pickRate: 3.5, banRate: 5.0, imageUrl: null },
  { id: "minotaur", name: "Minotaur", role: "Tank", difficulty: 2, lane: "Roam", tier: "B", winRate: 48.5, pickRate: 3.0, banRate: 4.2, imageUrl: null },
  { id: "edith", name: "Edith", role: "Tank", difficulty: 2, lane: "Exp", tier: "A", winRate: 50.2, pickRate: 5.5, banRate: 9.5, imageUrl: null },
  { id: "fredrinn", name: "Fredrinn", role: "Tank", difficulty: 2, lane: "Jungle", tier: "S", winRate: 51.5, pickRate: 7.2, banRate: 15.5, imageUrl: null },
  { id: "baxia", name: "Baxia", role: "Tank", difficulty: 2, lane: "Jungle", tier: "A", winRate: 49.8, pickRate: 3.8, banRate: 6.5, imageUrl: null },
  { id: "barats", name: "Barats", role: "Tank", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 2.8, banRate: 4.0, imageUrl: null },
  { id: "gloo", name: "Gloo", role: "Tank", difficulty: 3, lane: "Exp", tier: "B", winRate: 48.2, pickRate: 2.5, banRate: 3.8, imageUrl: null },

  // ── MAGES ─────────────────────────────────────────────────
  { id: "kagura", name: "Kagura", role: "Mage", difficulty: 3, lane: "Mid", tier: "SS", winRate: 53.5, pickRate: 12.8, banRate: 35.2, imageUrl: null },
  { id: "lunox", name: "Lunox", role: "Mage", difficulty: 3, lane: "Mid", tier: "S", winRate: 52.3, pickRate: 9.8, banRate: 25.4, imageUrl: null },
  { id: "harith", name: "Harith", role: "Mage", difficulty: 2, lane: "Mid", tier: "A", winRate: 50.2, pickRate: 5.2, banRate: 10.8, imageUrl: null },
  { id: "eudora", name: "Eudora", role: "Mage", difficulty: 1, lane: "Mid", tier: "B", winRate: 48.3, pickRate: 3.5, banRate: 3.8, imageUrl: null },
  { id: "vale", name: "Vale", role: "Mage", difficulty: 2, lane: "Mid", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.0, imageUrl: null },
  { id: "pharsa", name: "Pharsa", role: "Mage", difficulty: 2, lane: "Mid", tier: "A", winRate: 49.8, pickRate: 4.5, banRate: 7.5, imageUrl: null },
  { id: "valentina", name: "Valentina", role: "Mage", difficulty: 3, lane: "Mid", tier: "S", winRate: 51.8, pickRate: 8.5, banRate: 20.0, imageUrl: null },
  { id: "yve", name: "Yve", role: "Mage", difficulty: 2, lane: "Mid", tier: "A", winRate: 50.2, pickRate: 5.8, banRate: 11.2, imageUrl: null },
  { id: "luo-yi", name: "Luo Yi", role: "Mage", difficulty: 2, lane: "Mid", tier: "A", winRate: 50.0, pickRate: 4.8, banRate: 8.5, imageUrl: null },
  { id: "chang-e", name: "Chang'e", role: "Mage", difficulty: 1, lane: "Mid", tier: "B", winRate: 48.8, pickRate: 3.8, banRate: 4.8, imageUrl: null },
  { id: "vexana", name: "Vexana", role: "Mage", difficulty: 2, lane: "Mid", tier: "A", winRate: 50.5, pickRate: 5.2, banRate: 9.8, imageUrl: null },
  { id: "cecilion", name: "Cecilion", role: "Mage", difficulty: 3, lane: "Mid", tier: "S", winRate: 51.5, pickRate: 6.8, banRate: 14.5, imageUrl: null },
  { id: "alice", name: "Alice", role: "Mage", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.0, banRate: 4.2, imageUrl: null },
  { id: "gord", name: "Gord", role: "Mage", difficulty: 2, lane: "Mid", tier: "B", winRate: 48.2, pickRate: 3.5, banRate: 4.5, imageUrl: null },
  { id: "zhask", name: "Zhask", role: "Mage", difficulty: 2, lane: "Mid", tier: "B", winRate: 48.0, pickRate: 2.8, banRate: 3.5, imageUrl: null },
  { id: "aurora", name: "Aurora", role: "Mage", difficulty: 2, lane: "Mid", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.5, imageUrl: null },
  { id: "valir", name: "Valir", role: "Mage", difficulty: 2, lane: "Mid", tier: "A", winRate: 49.5, pickRate: 4.2, banRate: 6.8, imageUrl: null },
  { id: "lylia", name: "Lylia", role: "Mage", difficulty: 2, lane: "Mid", tier: "A", winRate: 49.8, pickRate: 4.5, banRate: 7.2, imageUrl: null },
  { id: "kimmy", name: "Kimmy", role: "Mage", difficulty: 3, lane: "Mid", tier: "B", winRate: 48.5, pickRate: 3.5, banRate: 5.0, imageUrl: null },
  { id: "novaria", name: "Novaria", role: "Mage", difficulty: 3, lane: "Mid", tier: "A", winRate: 49.5, pickRate: 3.8, banRate: 6.2, imageUrl: null },
  { id: "xavier", name: "Xavier", role: "Mage", difficulty: 2, lane: "Mid", tier: "S", winRate: 51.2, pickRate: 6.5, banRate: 12.8, imageUrl: null },

  // ── MARKSMEN ──────────────────────────────────────────────
  { id: "beatrix", name: "Beatrix", role: "Marksman", difficulty: 3, lane: "Gold", tier: "S", winRate: 51.7, pickRate: 8.9, banRate: 20.1, imageUrl: null },
  { id: "claude", name: "Claude", role: "Marksman", difficulty: 2, lane: "Gold", tier: "A", winRate: 49.9, pickRate: 4.8, banRate: 8.5, imageUrl: null },
  { id: "wanwan", name: "Wanwan", role: "Marksman", difficulty: 3, lane: "Gold", tier: "S", winRate: 51.5, pickRate: 7.8, banRate: 16.5, imageUrl: null },
  { id: "layla", name: "Layla", role: "Marksman", difficulty: 1, lane: "Gold", tier: "B", winRate: 47.9, pickRate: 5.5, banRate: 2.8, imageUrl: null },
  { id: "miya", name: "Miya", role: "Marksman", difficulty: 1, lane: "Gold", tier: "C", winRate: 46.2, pickRate: 3.5, banRate: 1.2, imageUrl: null },
  { id: "bruno", name: "Bruno", role: "Marksman", difficulty: 1, lane: "Gold", tier: "C", winRate: 46.1, pickRate: 2.8, banRate: 1.5, imageUrl: null },
  { id: "brody", name: "Brody", role: "Marksman", difficulty: 2, lane: "Gold", tier: "A", winRate: 50.0, pickRate: 5.2, banRate: 9.5, imageUrl: null },
  { id: "karrie", name: "Karrie", role: "Marksman", difficulty: 2, lane: "Gold", tier: "A", winRate: 50.2, pickRate: 5.5, banRate: 10.2, imageUrl: null },
  { id: "granger", name: "Granger", role: "Marksman", difficulty: 2, lane: "Jungle", tier: "A", winRate: 50.5, pickRate: 5.8, banRate: 11.5, imageUrl: null },
  { id: "melissa", name: "Melissa", role: "Marksman", difficulty: 2, lane: "Gold", tier: "S", winRate: 51.2, pickRate: 6.2, banRate: 13.8, imageUrl: null },
  { id: "lesley", name: "Lesley", role: "Marksman", difficulty: 2, lane: "Gold", tier: "A", winRate: 49.8, pickRate: 4.5, banRate: 7.5, imageUrl: null },
  { id: "hanabi", name: "Hanabi", role: "Marksman", difficulty: 1, lane: "Gold", tier: "B", winRate: 48.2, pickRate: 3.5, banRate: 4.2, imageUrl: null },
  { id: "irithel", name: "Irithel", role: "Marksman", difficulty: 2, lane: "Gold", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.5, imageUrl: null },
  { id: "moskov", name: "Moskov", role: "Marksman", difficulty: 2, lane: "Gold", tier: "B", winRate: 48.8, pickRate: 3.8, banRate: 5.2, imageUrl: null },
  { id: "natan", name: "Natan", role: "Marksman", difficulty: 2, lane: "Gold", tier: "A", winRate: 49.8, pickRate: 4.2, banRate: 6.5, imageUrl: null },
  { id: "popol", name: "Popol and Kupa", role: "Marksman", difficulty: 2, lane: "Gold", tier: "B", winRate: 48.5, pickRate: 3.5, banRate: 5.0, imageUrl: null },
  { id: "clint", name: "Clint", role: "Marksman", difficulty: 2, lane: "Gold", tier: "A", winRate: 49.5, pickRate: 4.0, banRate: 6.2, imageUrl: null },
  { id: "yi-sun-shin", name: "Yi Sun-shin", role: "Marksman", difficulty: 2, lane: "Jungle", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.5, imageUrl: null },

  // ── FIGHTERS ──────────────────────────────────────────────
  { id: "chou", name: "Chou", role: "Fighter", difficulty: 3, lane: "Exp", tier: "SS", winRate: 52.9, pickRate: 14.5, banRate: 32.8, imageUrl: null },
  { id: "aldous", name: "Aldous", role: "Fighter", difficulty: 2, lane: "Exp", tier: "S", winRate: 51.5, pickRate: 7.8, banRate: 18.5, imageUrl: null },
  { id: "yu-zhong", name: "Yu Zhong", role: "Fighter", difficulty: 2, lane: "Exp", tier: "A", winRate: 49.7, pickRate: 5.5, banRate: 9.2, imageUrl: null },
  { id: "dyrroth", name: "Dyrroth", role: "Fighter", difficulty: 1, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 4.2, banRate: 5.5, imageUrl: null },
  { id: "paquito", name: "Paquito", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 47.7, pickRate: 3.2, banRate: 3.5, imageUrl: null },
  { id: "thamuz", name: "Thamuz", role: "Fighter", difficulty: 1, lane: "Exp", tier: "B", winRate: 48.2, pickRate: 3.5, banRate: 4.5, imageUrl: null },
  { id: "argus", name: "Argus", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.8, banRate: 5.2, imageUrl: null },
  { id: "alpha", name: "Alpha", role: "Fighter", difficulty: 1, lane: "Exp", tier: "B", winRate: 48.0, pickRate: 2.8, banRate: 3.8, imageUrl: null },
  { id: "ruby", name: "Ruby", role: "Fighter", difficulty: 2, lane: "Exp", tier: "A", winRate: 49.8, pickRate: 4.5, banRate: 7.5, imageUrl: null },
  { id: "balmond", name: "Balmond", role: "Fighter", difficulty: 1, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.2, imageUrl: null },
  { id: "freya", name: "Freya", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.8, pickRate: 3.5, banRate: 4.8, imageUrl: null },
  { id: "terizla", name: "Terizla", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.5, imageUrl: null },
  { id: "x-borg", name: "X.Borg", role: "Fighter", difficulty: 2, lane: "Exp", tier: "A", winRate: 49.5, pickRate: 4.0, banRate: 6.8, imageUrl: null },
  { id: "leomord", name: "Leomord", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.0, banRate: 4.2, imageUrl: null },
  { id: "lapu-lapu", name: "Lapu-Lapu", role: "Fighter", difficulty: 2, lane: "Exp", tier: "A", winRate: 49.8, pickRate: 4.2, banRate: 6.5, imageUrl: null },
  { id: "masha", name: "Masha", role: "Fighter", difficulty: 3, lane: "Exp", tier: "B", winRate: 48.2, pickRate: 2.5, banRate: 3.8, imageUrl: null },
  { id: "khaleed", name: "Khaleed", role: "Fighter", difficulty: 2, lane: "Exp", tier: "A", winRate: 49.5, pickRate: 3.8, banRate: 5.8, imageUrl: null },
  { id: "silvanna", name: "Silvanna", role: "Fighter", difficulty: 2, lane: "Exp", tier: "A", winRate: 49.8, pickRate: 4.0, banRate: 6.2, imageUrl: null },
  { id: "phoveus", name: "Phoveus", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.5, imageUrl: null },
  { id: "alucard", name: "Alucard", role: "Fighter", difficulty: 1, lane: "Exp", tier: "B", winRate: 48.8, pickRate: 4.5, banRate: 5.0, imageUrl: null },
  { id: "roger", name: "Roger", role: "Fighter", difficulty: 2, lane: "Jungle", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.5, imageUrl: null },
  { id: "martis", name: "Martis", role: "Fighter", difficulty: 2, lane: "Jungle", tier: "B", winRate: 48.2, pickRate: 2.8, banRate: 3.8, imageUrl: null },
  { id: "jawhead", name: "Jawhead", role: "Fighter", difficulty: 2, lane: "Exp", tier: "A", winRate: 49.8, pickRate: 4.2, banRate: 6.8, imageUrl: null },
  { id: "badang", name: "Badang", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.5, banRate: 4.8, imageUrl: null },
  { id: "minsitthar", name: "Minsitthar", role: "Fighter", difficulty: 2, lane: "Exp", tier: "B", winRate: 48.5, pickRate: 3.0, banRate: 4.2, imageUrl: null },
  { id: "gloo-fighter", name: "Gloo", role: "Fighter", difficulty: 3, lane: "Exp", tier: "B", winRate: 48.2, pickRate: 2.5, banRate: 3.5, imageUrl: null },
  { id: "aulus", name: "Aulus", role: "Fighter", difficulty: 2, lane: "Jungle", tier: "B", winRate: 48.5, pickRate: 2.8, banRate: 4.0, imageUrl: null },

  // ── SUPPORTS ──────────────────────────────────────────────
  { id: "angela", name: "Angela", role: "Support", difficulty: 1, lane: "Roam", tier: "A", winRate: 49.5, pickRate: 7.2, banRate: 10.5, imageUrl: null },
  { id: "estes", name: "Estes", role: "Support", difficulty: 1, lane: "Roam", tier: "B", winRate: 47.5, pickRate: 4.5, banRate: 4.8, imageUrl: null },
  { id: "rafaela", name: "Rafaela", role: "Support", difficulty: 1, lane: "Roam", tier: "C", winRate: 45.8, pickRate: 2.5, banRate: 1.8, imageUrl: null },
  { id: "diggie", name: "Diggie", role: "Support", difficulty: 2, lane: "Roam", tier: "A", winRate: 49.8, pickRate: 4.5, banRate: 7.2, imageUrl: null },
  { id: "mathilda", name: "Mathilda", role: "Support", difficulty: 2, lane: "Roam", tier: "A", winRate: 49.5, pickRate: 4.2, banRate: 6.5, imageUrl: null },
  { id: "faramis", name: "Faramis", role: "Support", difficulty: 2, lane: "Roam", tier: "B", winRate: 48.5, pickRate: 3.2, banRate: 4.5, imageUrl: null },
  { id: "nana", name: "Nana", role: "Support", difficulty: 1, lane: "Mid", tier: "A", winRate: 49.5, pickRate: 5.5, banRate: 8.5, imageUrl: null },
  { id: "chip", name: "Chip", role: "Support", difficulty: 2, lane: "Roam", tier: "A", winRate: 49.8, pickRate: 4.2, banRate: 6.5, imageUrl: null },
  { id: "floryn", name: "Floryn", role: "Support", difficulty: 1, lane: "Roam", tier: "B", winRate: 48.5, pickRate: 3.5, banRate: 4.8, imageUrl: null },
  { id: "carmilla", name: "Carmilla", role: "Support", difficulty: 2, lane: "Roam", tier: "B", winRate: 48.2, pickRate: 3.0, banRate: 4.2, imageUrl: null },
];

export const HERO_COUNT = ALL_HEROES.length;