export type MLBBRole =
  | "tank"
  | "fighter"
  | "assassin"
  | "mage"
  | "marksman"
  | "support";

export type MLBBLane = "roam" | "exp" | "jungle" | "mid" | "gold";

export type MLBBTier = "SS" | "S" | "A" | "B" | "C";

export type MLBBHero = {
  id: string;
  name: string;
  initial: string;
  role: MLBBRole;
  lane: MLBBLane;
  tier: MLBBTier;
};

export const ROLE_LABELS: Record<MLBBRole, { en: string; km: string; color: string }> = {
  tank:     { en: "Tank",     km: "Tank",     color: "#3b82f6" },
  fighter:  { en: "Fighter",  km: "Fighter",  color: "#ef4444" },
  assassin: { en: "Assassin", km: "Assassin", color: "#8b5cf6" },
  mage:     { en: "Mage",     km: "Mage",     color: "#a855f7" },
  marksman: { en: "Marksman", km: "Marksman", color: "#f59e0b" },
  support:  { en: "Support",  km: "Support",  color: "#22c55e" },
};

export const LANE_LABELS: Record<MLBBLane, { en: string; km: string; emoji: string }> = {
  roam:   { en: "Roam",     km: "រុករក",      emoji: "🛡️" },
  exp:    { en: "Exp Lane", km: "ផ្លូវ EXP",   emoji: "⚔️" },
  jungle: { en: "Jungle",   km: "ព្រៃ",       emoji: "🌲" },
  mid:    { en: "Mid Lane", km: "ផ្លូវកណ្តាល", emoji: "✨" },
  gold:   { en: "Gold Lane",km: "ផ្លូវមាស",   emoji: "💰" },
};
export const TIER_COLORS: Record<MLBBTier, string> = {
  SS: "#f5c542",
  S:  "#ef4444",
  A:  "#3b82f6",
  B:  "#22c55e",
  C:  "#6b7280",
};

export const TIER_ORDER: MLBBTier[] = ["SS", "S", "A", "B", "C"];

// 133 heroes as of 2026
export const MLBB_HEROES: MLBBHero[] = [
  // â•â•â• TANK (18) â•â•â•
  { id: "atlas",      name: "Atlas",      initial: "A", role: "tank", lane: "roam", tier: "SS" },
  { id: "belerick",   name: "Belerick",   initial: "B", role: "tank", lane: "roam", tier: "SS" },
  { id: "fredrinn",   name: "Fredrinn",   initial: "F", role: "tank", lane: "exp",  tier: "SS" },
  { id: "khufra",     name: "Khufra",     initial: "K", role: "tank", lane: "roam", tier: "S" },
  { id: "tigreal",    name: "Tigreal",    initial: "T", role: "tank", lane: "roam", tier: "S" },
  { id: "gloo",       name: "Gloo",       initial: "G", role: "tank", lane: "roam", tier: "S" },
  { id: "franco",     name: "Franco",     initial: "F", role: "tank", lane: "roam", tier: "A" },
  { id: "grock",      name: "Grock",      initial: "G", role: "tank", lane: "roam", tier: "A" },
  { id: "lolita",     name: "Lolita",     initial: "L", role: "tank", lane: "roam", tier: "A" },
  { id: "minotaur",   name: "Minotaur",   initial: "M", role: "tank", lane: "roam", tier: "A" },
  { id: "hylos",      name: "Hylos",      initial: "H", role: "tank", lane: "roam", tier: "A" },
  { id: "gatotkaca",  name: "Gatotkaca",  initial: "G", role: "tank", lane: "exp",  tier: "B" },
  { id: "uranus",     name: "Uranus",     initial: "U", role: "tank", lane: "exp",  tier: "B" },
  { id: "baxia",      name: "Baxia",      initial: "B", role: "tank", lane: "roam", tier: "B" },
  { id: "hilda",      name: "Hilda",      initial: "H", role: "tank", lane: "roam", tier: "B" },
  { id: "johnson",    name: "Johnson",    initial: "J", role: "tank", lane: "roam", tier: "B" },
  { id: "edith",      name: "Edith",      initial: "E", role: "tank", lane: "exp",  tier: "A" },
  { id: "barats",     name: "Barats",     initial: "B", role: "tank", lane: "exp",  tier: "B" },

  // â•â•â• FIGHTER (28) â•â•â•
  { id: "arlott",     name: "Arlott",     initial: "A", role: "fighter", lane: "exp", tier: "SS" },
  { id: "paquito",    name: "Paquito",    initial: "P", role: "fighter", lane: "exp", tier: "SS" },
  { id: "yu_zhong",   name: "Yu Zhong",   initial: "Y", role: "fighter", lane: "exp", tier: "S" },
  { id: "chou",       name: "Chou",       initial: "C", role: "fighter", lane: "exp", tier: "S" },
  { id: "phoveus",    name: "Phoveus",    initial: "P", role: "fighter", lane: "exp", tier: "S" },
  { id: "khaleed",    name: "Khaleed",    initial: "K", role: "fighter", lane: "exp", tier: "S" },
  { id: "julian",     name: "Julian",     initial: "J", role: "fighter", lane: "exp", tier: "S" },
  { id: "ruby",       name: "Ruby",       initial: "R", role: "fighter", lane: "exp", tier: "A" },
  { id: "silvanna",   name: "Silvanna",   initial: "S", role: "fighter", lane: "exp", tier: "A" },
  { id: "thamuz",     name: "Thamuz",     initial: "T", role: "fighter", lane: "exp", tier: "A" },
  { id: "terizla",    name: "Terizla",    initial: "T", role: "fighter", lane: "exp", tier: "A" },
  { id: "xborg",     name: "X.Borg",     initial: "X", role: "fighter", lane: "exp", tier: "A" },
  { id: "jawhead",    name: "Jawhead",    initial: "J", role: "fighter", lane: "exp", tier: "A" },
  { id: "guinevere",  name: "Guinevere",  initial: "G", role: "fighter", lane: "exp", tier: "A" },
  { id: "leomord",    name: "Leomord",    initial: "L", role: "fighter", lane: "exp", tier: "A" },
  { id: "martis",     name: "Martis",     initial: "M", role: "fighter", lane: "exp", tier: "A" },
  { id: "yin",        name: "Yin",        initial: "Y", role: "fighter", lane: "exp", tier: "A" },
  { id: "aulus",      name: "Aulus",      initial: "A", role: "fighter", lane: "exp", tier: "B" },
  { id: "badang",     name: "Badang",     initial: "B", role: "fighter", lane: "exp", tier: "B" },
  { id: "balmond",    name: "Balmond",    initial: "B", role: "fighter", lane: "exp", tier: "B" },
  { id: "dyrroth",    name: "Dyrroth",    initial: "D", role: "fighter", lane: "exp", tier: "B" },
  { id: "masha",      name: "Masha",      initial: "M", role: "fighter", lane: "exp", tier: "B" },
  { id: "sun",        name: "Sun",        initial: "S", role: "fighter", lane: "exp", tier: "B" },
  { id: "alucard",    name: "Alucard",    initial: "A", role: "fighter", lane: "exp", tier: "B" },
  { id: "aldous",     name: "Aldous",     initial: "A", role: "fighter", lane: "exp", tier: "B" },
  { id: "freya",      name: "Freya",      initial: "F", role: "fighter", lane: "exp", tier: "B" },
  { id: "argus",      name: "Argus",      initial: "A", role: "fighter", lane: "exp", tier: "C" },
  { id: "lapu-lapu",  name: "Lapu-Lapu",  initial: "L", role: "fighter", lane: "exp", tier: "B" },

  // â•â•â• ASSASSIN (20) â•â•â•
  { id: "joy",        name: "Joy",        initial: "J", role: "assassin", lane: "jungle", tier: "SS" },
  { id: "fanny",      name: "Fanny",      initial: "F", role: "assassin", lane: "jungle", tier: "SS" },
  { id: "ling",       name: "Ling",       initial: "L", role: "assassin", lane: "jungle", tier: "S" },
  { id: "lancelot",   name: "Lancelot",   initial: "L", role: "assassin", lane: "jungle", tier: "S" },
  { id: "hayabusa",   name: "Hayabusa",   initial: "H", role: "assassin", lane: "jungle", tier: "S" },
  { id: "gusion",     name: "Gusion",     initial: "G", role: "assassin", lane: "jungle", tier: "S" },
  { id: "benedetta",  name: "Benedetta",  initial: "B", role: "assassin", lane: "exp",    tier: "S" },
  { id: "aamon",      name: "Aamon",      initial: "A", role: "assassin", lane: "jungle", tier: "A" },
  { id: "harley",     name: "Harley",     initial: "H", role: "assassin", lane: "mid",    tier: "A" },
  { id: "helcurt",    name: "Helcurt",    initial: "H", role: "assassin", lane: "jungle", tier: "A" },
  { id: "natalia",    name: "Natalia",    initial: "N", role: "assassin", lane: "jungle", tier: "A" },
  { id: "selena",     name: "Selena",     initial: "S", role: "assassin", lane: "mid",    tier: "A" },
  { id: "karina",     name: "Karina",     initial: "K", role: "assassin", lane: "jungle", tier: "B" },
  { id: "saber",      name: "Saber",      initial: "S", role: "assassin", lane: "jungle", tier: "B" },
  { id: "hanzo",      name: "Hanzo",      initial: "H", role: "assassin", lane: "jungle", tier: "B" },
  { id: "kadita",     name: "Kadita",     initial: "K", role: "assassin", lane: "mid",    tier: "B" },
  { id: "lesley",     name: "Lesley",     initial: "L", role: "assassin", lane: "gold",   tier: "B" },
  { id: "nolan",      name: "Nolan",      initial: "N", role: "assassin", lane: "jungle", tier: "A" },
  { id: "suyou",      name: "Suyou",      initial: "S", role: "assassin", lane: "jungle", tier: "S" },
  { id: "lukas",      name: "Lukas",      initial: "L", role: "assassin", lane: "jungle", tier: "A" },

  // â•â•â• MAGE (30) â•â•â•
  { id: "valentina",  name: "Valentina",  initial: "V", role: "mage", lane: "mid", tier: "SS" },
  { id: "valir",      name: "Valir",      initial: "V", role: "mage", lane: "mid", tier: "SS" },
  { id: "pharsa",     name: "Pharsa",     initial: "P", role: "mage", lane: "mid", tier: "S" },
  { id: "yve",        name: "Yve",        initial: "Y", role: "mage", lane: "mid", tier: "S" },
  { id: "xavier",     name: "Xavier",     initial: "X", role: "mage", lane: "mid", tier: "S" },
  { id: "kagura",     name: "Kagura",     initial: "K", role: "mage", lane: "mid", tier: "S" },
  { id: "lunox",      name: "Lunox",      initial: "L", role: "mage", lane: "mid", tier: "S" },
  { id: "cecilion",   name: "Cecilion",   initial: "C", role: "mage", lane: "mid", tier: "S" },
  { id: "luo_yi",     name: "Luo Yi",     initial: "L", role: "mage", lane: "mid", tier: "S" },
  { id: "zhuxin",     name: "Zhuxin",     initial: "Z", role: "mage", lane: "mid", tier: "S" },
  { id: "novaria",    name: "Novaria",    initial: "N", role: "mage", lane: "mid", tier: "S" },
  { id: "change",    name: "Chang'e",    initial: "C", role: "mage", lane: "mid", tier: "A" },
  { id: "harith",     name: "Harith",     initial: "H", role: "mage", lane: "mid", tier: "A" },
  { id: "lylia",      name: "Lylia",      initial: "L", role: "mage", lane: "mid", tier: "A" },
  { id: "gord",       name: "Gord",       initial: "G", role: "mage", lane: "mid", tier: "A" },
  { id: "odette",     name: "Odette",     initial: "O", role: "mage", lane: "mid", tier: "A" },
  { id: "vale",       name: "Vale",       initial: "V", role: "mage", lane: "mid", tier: "A" },
  { id: "vexana",     name: "Vexana",     initial: "V", role: "mage", lane: "mid", tier: "A" },
  { id: "zhask",      name: "Zhask",      initial: "Z", role: "mage", lane: "mid", tier: "A" },
  { id: "cyclops",    name: "Cyclops",    initial: "C", role: "mage", lane: "mid", tier: "B" },
  { id: "eudora",     name: "Eudora",     initial: "E", role: "mage", lane: "mid", tier: "B" },
  { id: "nana",       name: "Nana",       initial: "N", role: "mage", lane: "mid", tier: "B" },
  { id: "aurora",     name: "Aurora",     initial: "A", role: "mage", lane: "mid", tier: "B" },
  { id: "alice",      name: "Alice",      initial: "A", role: "mage", lane: "exp", tier: "B" },
  { id: "faramis",    name: "Faramis",    initial: "F", role: "mage", lane: "roam",tier: "B" },
  { id: "harith",     name: "Harrow",     initial: "H", role: "mage", lane: "mid", tier: "B" },
  { id: "yve",       name: "Yve",        initial: "Y", role: "mage", lane: "mid", tier: "S" },
  { id: "kimmy",      name: "Kimmy",      initial: "K", role: "mage", lane: "gold",tier: "B" },
  { id: "esmeralda",  name: "Esmeralda",  initial: "E", role: "mage", lane: "exp", tier: "B" },
  { id: "gord",      name: "Gord",       initial: "G", role: "mage", lane: "mid", tier: "A" },

  // â•â•â• MARKSMAN (21) â•â•â•
  { id: "beatrix",    name: "Beatrix",    initial: "B", role: "marksman", lane: "gold", tier: "SS" },
  { id: "melissa",    name: "Melissa",    initial: "M", role: "marksman", lane: "gold", tier: "SS" },
  { id: "brody",      name: "Brody",      initial: "B", role: "marksman", lane: "gold", tier: "S" },
  { id: "claude",     name: "Claude",     initial: "C", role: "marksman", lane: "gold", tier: "S" },
  { id: "wanwan",     name: "Wanwan",     initial: "W", role: "marksman", lane: "gold", tier: "S" },
  { id: "beatrix",        name: "Bea",        initial: "B", role: "marksman", lane: "gold", tier: "S" },
  { id: "ixia",       name: "Ixia",       initial: "I", role: "marksman", lane: "gold", tier: "S" },
  { id: "karrie",     name: "Karrie",     initial: "K", role: "marksman", lane: "gold", tier: "A" },
  { id: "granger",    name: "Granger",    initial: "G", role: "marksman", lane: "gold", tier: "A" },
  { id: "natan",      name: "Natan",      initial: "N", role: "marksman", lane: "gold", tier: "A" },
  { id: "yi_sun-shin",name: "Yi Sun-shin",initial: "Y", role: "marksman", lane: "gold", tier: "A" },
  { id: "bruno",      name: "Bruno",      initial: "B", role: "marksman", lane: "gold", tier: "A" },
  { id: "moskov",     name: "Moskov",     initial: "M", role: "marksman", lane: "gold", tier: "A" },
  { id: "irithel",    name: "Irithel",    initial: "I", role: "marksman", lane: "gold", tier: "A" },
  { id: "clint",      name: "Clint",      initial: "C", role: "marksman", lane: "gold", tier: "B" },
  { id: "hanabi",     name: "Hanabi",     initial: "H", role: "marksman", lane: "gold", tier: "B" },
  { id: "layla",      name: "Layla",      initial: "L", role: "marksman", lane: "gold", tier: "B" },
  { id: "miya",       name: "Miya",       initial: "M", role: "marksman", lane: "gold", tier: "B" },
  { id: "roger",      name: "Roger",      initial: "R", role: "marksman", lane: "jungle", tier: "B" },
  { id: "popol_and_kupa",      name: "Popol and Kupa", initial: "P", role: "marksman", lane: "gold", tier: "B" },
  { id: "moskov",     name: "Moskov",     initial: "M", role: "marksman", lane: "gold", tier: "A" },

  // â•â•â• SUPPORT (16) â•â•â•
  { id: "mathilda",   name: "Mathilda",   initial: "M", role: "support", lane: "roam", tier: "SS" },
  { id: "angela",     name: "Angela",     initial: "A", role: "support", lane: "roam", tier: "SS" },
  { id: "estes",      name: "Estes",      initial: "E", role: "support", lane: "roam", tier: "S" },
  { id: "rafaela",    name: "Rafaela",    initial: "R", role: "support", lane: "roam", tier: "S" },
  { id: "chip",       name: "Chip",       initial: "C", role: "support", lane: "roam", tier: "S" },
  { id: "floryn",     name: "Floryn",     initial: "F", role: "support", lane: "roam", tier: "S" },
  { id: "diggie",     name: "Diggie",     initial: "D", role: "support", lane: "roam", tier: "A" },
  { id: "lolita",    name: "Lolita",     initial: "L", role: "support", lane: "roam", tier: "A" },
  { id: "minotaur",  name: "Minotaur",   initial: "M", role: "support", lane: "roam", tier: "A" },
  { id: "rafaela",   name: "Rafaela",    initial: "R", role: "support", lane: "roam", tier: "S" },
  { id: "estes",     name: "Estes",      initial: "E", role: "support", lane: "roam", tier: "S" },
  { id: "angela",    name: "Angela",     initial: "A", role: "support", lane: "roam", tier: "SS" },
  { id: "mathilda",  name: "Mathilda",   initial: "M", role: "support", lane: "roam", tier: "SS" },
  { id: "chip",      name: "Chip",       initial: "C", role: "support", lane: "roam", tier: "S" },
  { id: "floryn",    name: "Floryn",     initial: "F", role: "support", lane: "roam", tier: "S" },
  { id: "diggie",    name: "Diggie",     initial: "D", role: "support", lane: "roam", tier: "A" },
  { id: "akai",       name: "Akai",       initial: "A", role: "tank",     lane: "roam",   tier: "B" },
  { id: "alpha",      name: "Alpha",      initial: "A", role: "fighter",  lane: "exp",    tier: "A" },
  { id: "bane",       name: "Bane",       initial: "B", role: "fighter",  lane: "exp",    tier: "B" },
  { id: "carmilla",   name: "Carmilla",   initial: "C", role: "support",  lane: "roam",   tier: "A" },
  { id: "cici",       name: "Cici",       initial: "C", role: "fighter",  lane: "exp",    tier: "B" },
  { id: "hirara",     name: "Hirara",     initial: "H", role: "mage",     lane: "mid",    tier: "B" },
  { id: "kaja",       name: "Kaja",       initial: "K", role: "support",  lane: "roam",   tier: "A" },
  { id: "kalea",      name: "Kalea",      initial: "K", role: "support",  lane: "roam",   tier: "B" },
  { id: "marcel",     name: "Marcel",     initial: "M", role: "assassin", lane: "jungle", tier: "B" },
  { id: "minsitthar", name: "Minsitthar", initial: "M", role: "fighter",  lane: "exp",    tier: "A" },
  { id: "obsidia",    name: "Obsidia",    initial: "O", role: "marksman", lane: "gold",   tier: "B" },
  { id: "sora",       name: "Sora",       initial: "S", role: "assassin", lane: "jungle", tier: "B" },
  { id: "zetian",     name: "Zetian",     initial: "Z", role: "mage",     lane: "mid",    tier: "A" },
  { id: "zilong",     name: "Zilong",     initial: "Z", role: "fighter",  lane: "exp",    tier: "A" },
];

// Remove duplicates by id
const seen = new Set<string>();
export const UNIQUE_HEROES: MLBBHero[] = MLBB_HEROES.filter((h) => {
  if (seen.has(h.id)) return false;
  seen.add(h.id);
  return true;
});

export function getHeroCount(): number {
  return UNIQUE_HEROES.length;
}

export function filterHeroes(
  role: MLBBRole | "all",
  lane: MLBBLane | "all",
  search: string
): MLBBHero[] {
  const q = search.trim().toLowerCase();
  return UNIQUE_HEROES.filter((h) => {
    if (role !== "all" && h.role !== role) return false;
    if (lane !== "all" && h.lane !== lane) return false;
    if (q && !h.name.toLowerCase().includes(q)) return false;
    return true;
  });
}