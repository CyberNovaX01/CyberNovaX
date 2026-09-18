export type PetRole = "attack" | "defense" | "utility" | "movement";

export type FFPet = {
  id: string;
  name: string;
  emoji: string;
  role: PetRole;
  skillKm: string;
  skillEn: string;
  bestForKm: string;
  bestForEn: string;
  tier: "S" | "A" | "B";
  accent: string;
};

export const PET_ROLE_LABELS: Record<PetRole, { en: string; km: string; color: string }> = {
  attack:   { en: "Attack",   km: "ážœáž¶áž™áž”áŸ’ážšáž áž¶ážš", color: "#ef4444" },
  defense:  { en: "Defense",  km: "áž€áž¶ážšáž–áž¶ážš",    color: "#3b82f6" },
  utility:  { en: "Utility",  km: "áž§áž”áž€ážšážŽáŸ",   color: "#22c55e" },
  movement: { en: "Movement", km: "áž…áž›áž“áž¶",      color: "#f59e0b" },
};

export const TIER_COLORS: Record<"S" | "A" | "B", string> = {
  S: "#f5c542",
  A: "#22d3ee",
  B: "#6b7280",
};

export const FF_PETS: FFPet[] = [
  { id: "falco", name: "Falco", emoji: "ðŸ¦…", role: "movement", tier: "S", accent: "#f59e0b",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“áž›áŸ’áž”áž¿áž“áž áŸ„áŸ‡ áž“áž·áž„áž€áž¶ážšáž’áŸ’ážœáž¾ážŠáŸ†ážŽáž¾ážšáž›áž¾áž¢áž¶áž€áž¶ážŸ", skillEn: "Boosts gliding speed and dive movement",
    bestForKm: "áž€áž¶ážšáž•áŸ’áž›áž¶ážŸáŸ‹áž‘áž¸áž›áž¿áž“áž›áž¾áž•áŸ‚áž“áž‘áž¸áž’áŸ†", bestForEn: "Fast rotations on big maps" },
  { id: "mr_waggor", name: "Mr. Waggor", emoji: "ðŸ¦¦", role: "utility", tier: "S", accent: "#22c55e",
    skillKm: "áž”áž„áŸ’áž€áž¾áž Gloo Wall ážšáž¶áž›áŸ‹ 120 ážœáž·áž“áž¶áž‘áž¸", skillEn: "Generates a Gloo Wall every 120s",
    bestForKm: "áž€áž¶ážšáž›áŸáž„áž™áž¼ážšážŠáŸ„áž™áž‚áŸ’áž˜áž¶áž“ Gloo Wall", bestForEn: "Long matches without Gloo Walls" },
  { id: "rockie", name: "Rockie", emoji: "ðŸ»", role: "utility", tier: "S", accent: "#22c55e",
    skillKm: "áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™ cooldown áž‡áŸ†áž“áž¶áž‰", skillEn: "Reduces active skill cooldown",
    bestForKm: "ážáž½áž¢áž„áŸ’áž‚ážŠáŸ‚áž›áž˜áž¶áž“áž‡áŸ†áž“áž¶áž‰áž›áŸ’áž¢ (Alok, Chrono)", bestForEn: "Skill-heavy characters (Alok, Chrono)" },
  { id: "dreki", name: "Dreki", emoji: "ðŸ‰", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“áž€áž¶ážšážáž¼áž…ážáž¶ážáž–áŸáž›ážœáž¶áž™ážŸážáŸ’ážšáž¼ážœážŠáŸ‚áž›áž˜áž¶áž“ HP áž‘áž¶áž”", skillEn: "Increases damage to low HP enemies",
    bestForKm: "áž€áž¶ážšážœáž¶áž™áž”áŸ’ážšáž áž¶ážšáž”áž“áŸ’áž", bestForEn: "Chained attacks" },
  { id: "ottero", name: "Ottero", emoji: "ðŸ¦¦", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "ážŸáŸ’ážšáž¼áž” HP áž–áž¸ Gloo Wall áž“áž·áž„ medkit", skillEn: "Gains extra HP from Gloo Walls and medkits",
    bestForKm: "áž€áž¶ážšáž–áž¶ážšáž€áŸ’ážšáž»áž˜", bestForEn: "Defensive holding" },
  { id: "detective_panda", name: "Detective Panda", emoji: "ðŸ¼", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "áž”áž„áŸ’áž áž¶áž‰áž‘áž¸ážáž¶áŸ†áž„ážŸážáŸ’ážšáž¼ážœáž‡áž·ážáŸ—", skillEn: "Reveals nearby enemy positions",
    bestForKm: "áž€áž¶ážšáž›áŸáž„áž”áŸ’ážšáž»áž„áž”áŸ’ážšáž™áŸážáŸ’áž“", bestForEn: "Cautious gameplay" },
  { id: "agent_hop", name: "Agent Hop", emoji: "ðŸ°", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“áž€áž¶ážšáž–áž¶ážšáž–áŸáž› HP áž‘áž¶áž”", skillEn: "Increases resilience at low HP",
    bestForKm: "áž€áž¶ážšážšážŸáŸ‹ážšáž¶áž“áž–áŸáž› HP áž‘áž¶áž”", bestForEn: "Surviving at low HP" },
  { id: "moony", name: "Moony", emoji: "ðŸŒ™", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“ EP áž–áŸáž›áž”áŸ’ážšáž¾ medkit áž“áž·áž„ážŸáž„áŸ’áž‚áŸ’ážšáŸ„áŸ‡ HP", skillEn: "Restores EP when using medkits and heals HP",
    bestForKm: "áž€áž¶ážšáž›áŸáž„áž™áž¼ážš", bestForEn: "Long matches" },
  { id: "shiba", name: "Shiba", emoji: "ðŸ•", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“áž€áž¶ážšážáž¼áž…ážáž¶ážáž”áž“áŸ’áž‘áž¶áž”áŸ‹áž–áž¸ážŸáž˜áŸ’áž›áž¶áž”áŸ‹", skillEn: "Increases damage after each kill",
    bestForKm: "áž€áž¶ážšážœáž¶áž™áž”áŸ’ážšáž áž¶ážšáž”áž“áŸ’ážáž”áž“áŸ’áž‘áž¶áž”áŸ‹", bestForEn: "Chained aggression" },
  { id: "beaston", name: "Beaston", emoji: "ðŸ¦", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“áž›áŸ’áž”áž¿áž“áž”áž¶áž‰áŸ‹ áž“áž·áž„áž€áž¶ážšážŸáŸ’ážšáž¼áž”ážáž¼áž…ážáž¶áž", skillEn: "Boosts fire rate and damage absorption",
    bestForKm: "áž€áž¶ážšážœáž¶áž™áž”áŸ’ážšáž áž¶ážšážŠáŸ„áž™áž¢áž¶ážœáž»áž’áž”áž¶áž‰áŸ‹áž›áž¿áž“", bestForEn: "Fast-fire weapon pushes" },
  { id: "spirit_fox", name: "Spirit Fox", emoji: "ðŸ¦Š", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "áž”áž„áŸ’áž áž¶áž‰ážŸážáŸ’ážšáž¼ážœáž‡áž·ážáŸ—ážšáž™áŸˆáž–áŸáž›ážáŸ’áž›áž¸", skillEn: "Briefly reveals enemies",
    bestForKm: "áž€áž¶ážšážŸáŸ’áž€áŸáž“áž˜áž»áž“áž€áž¶ážšážœáž¶áž™áž”áŸ’ážšáž áž¶ážš", bestForEn: "Scan before engagement" },
  { id: "sensei_tiger", name: "Sensei Tig", emoji: "ðŸ¯", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "áž€áž¶ážáŸ‹áž”áž“áŸ’ážáž™áž€áž¶ážšážáž¼áž…ážáž¶ážáž–áž¸áž‚áŸ’ážšáž¶áž”áŸ‹áž”áž¶áž‰áŸ‹áž–áž¸ážáž¶áž„áž€áŸ’ážšáŸ„áž™", skillEn: "Reduces incoming bullet damage from behind",
    bestForKm: "áž€áž¶ážšážŸáŸ’ážšáž¼áž”áž€áž¶ážšážáž¼áž…ážáž¶áž", bestForEn: "Absorbing damage" },
  { id: "robo", name: "Robo", emoji: "ðŸ¤–", role: "defense", tier: "A", accent: "#22c55e",
    skillKm: "áž”áž„áŸ’áž€áž¾ážážáŸ‚áž›áž€áž¶ážšáž–áž¶ážš 200 HP áž“áž·áž„áž”áž„áŸ’áž€áž¾áž“áž›áŸ’áž”áž¿áž“", skillEn: "Deploys 200 HP shield and boosts speed",
    bestForKm: "áž€áž¶ážšáž–áž¶ážšážáŸ’áž›áž½áž“áž¯áž„", bestForEn: "Self defense" },
  { id: "kitty", name: "Kitty", emoji: "ðŸ±", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“áž€áž¶ážšáž–áŸ’áž™áž¶áž”áž¶áž›áž–áž¸ medkit", skillEn: "Boosts medkit healing",
    bestForKm: "áž€áž¶ážšáž–áŸ’áž™áž¶áž”áž¶áž›ážšáž áŸážŸ", bestForEn: "Quick healing" },
  { id: "poring", name: "Poring", emoji: "ðŸ·", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "áž”áž„áŸ’áž€áž¾áž“áž€áž¶ážšáž”áŸ’ážšáž˜áž¼áž› loot áž“áž·áž„áž‘áŸ’ážšáž–áŸ’áž™", skillEn: "Boosts loot collection",
    bestForKm: "áž€áž¶ážšáž”áŸ’ážšáž˜áž¼áž›áž‘áŸ’ážšáž–áŸ’áž™áž›áž¿áž“", bestForEn: "Fast looting" },
  { id: "mestre_trigo", name: "Mestre Trigo", emoji: "ðŸ¯", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "áž”áž“áŸ’ážáž™ážšáž™áŸˆáž–áŸáž›ážŸáž˜áŸ’áž‚áž¶áž›áŸ‹áž–áž¸ážŸážáŸ’ážšáž¼ážœ 30%", skillEn: "Reduces tagging duration by 30%",
    bestForKm: "áž€áž¶ážšáž›áŸáž„áž”áŸ’ážšáž»áž„áž”áŸ’ážšáž™áŸážáŸ’áž“", bestForEn: "Cautious gameplay" },
];

export function getPetCount(): number {
  return FF_PETS.length;
}
