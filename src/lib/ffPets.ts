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
  attack:   { en: "Attack",   km: "វាយប្រហារ", color: "#ef4444" },
  defense:  { en: "Defense",  km: "ការពារ",    color: "#3b82f6" },
  utility:  { en: "Utility",  km: "ឧបករណ៍",   color: "#22c55e" },
  movement: { en: "Movement", km: "ចលនា",      color: "#f59e0b" },
};

export const TIER_COLORS: Record<"S" | "A" | "B", string> = {
  S: "#f5c542",
  A: "#22d3ee",
  B: "#6b7280",
};

export const FF_PETS: FFPet[] = [
  { id: "falco", name: "Falco", emoji: "🦅", role: "movement", tier: "S", accent: "#f59e0b",
    skillKm: "បង្កើនល្បឿនហោះ និងការធ្វើដំណើរលើអាកាស", skillEn: "Boosts gliding speed and dive movement",
    bestForKm: "ការផ្លាស់ទីលឿនលើផែនទីធំ", bestForEn: "Fast rotations on big maps" },
  { id: "mr_waggor", name: "Mr. Waggor", emoji: "🦦", role: "utility", tier: "S", accent: "#22c55e",
    skillKm: "បង្កើត Gloo Wall រាល់ 120 វិនាទី", skillEn: "Generates a Gloo Wall every 120s",
    bestForKm: "ការលេងយូរដោយគ្មាន Gloo Wall", bestForEn: "Long matches without Gloo Walls" },
  { id: "rockie", name: "Rockie", emoji: "🐻", role: "utility", tier: "S", accent: "#22c55e",
    skillKm: "កាត់បន្ថយ cooldown ជំនាញ", skillEn: "Reduces active skill cooldown",
    bestForKm: "តួអង្គដែលមានជំនាញល្អ (Alok, Chrono)", bestForEn: "Skill-heavy characters (Alok, Chrono)" },
  { id: "dreki", name: "Dreki", emoji: "🐉", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "បង្កើនការខូចខាតពេលវាយសត្រូវដែលមាន HP ទាប", skillEn: "Increases damage to low HP enemies",
    bestForKm: "ការវាយប្រហារបន្ត", bestForEn: "Chained attacks" },
  { id: "ottero", name: "Ottero", emoji: "🦦", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "ស្រូប HP ពី Gloo Wall និង medkit", skillEn: "Gains extra HP from Gloo Walls and medkits",
    bestForKm: "ការពារក្រុម", bestForEn: "Defensive holding" },
  { id: "detective_panda", name: "Detective Panda", emoji: "🐼", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "បង្ហាញទីតាំងសត្រូវជិតៗ", skillEn: "Reveals nearby enemy positions",
    bestForKm: "ការលេងប្រុងប្រយ័ត្ន", bestForEn: "Cautious gameplay" },
  { id: "agent_hop", name: "Agent Hop", emoji: "🐰", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "បង្កើនការពារពេល HP ទាប", skillEn: "Increases resilience at low HP",
    bestForKm: "ការរស់រានពេល HP ទាប", bestForEn: "Surviving at low HP" },
  { id: "moony", name: "Moony", emoji: "🌙", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "បង្កើន EP ពេលប្រើ medkit និងសង្គ្រោះ HP", skillEn: "Restores EP when using medkits and heals HP",
    bestForKm: "ការលេងយូរ", bestForEn: "Long matches" },
  { id: "shiba", name: "Shiba", emoji: "🐕", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "បង្កើនការខូចខាតបន្ទាប់ពីសម្លាប់", skillEn: "Increases damage after each kill",
    bestForKm: "ការវាយប្រហារបន្តបន្ទាប់", bestForEn: "Chained aggression" },
  { id: "beaston", name: "Beaston", emoji: "🦁", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "បង្កើនល្បឿនបាញ់ និងការស្រូបខូចខាត", skillEn: "Boosts fire rate and damage absorption",
    bestForKm: "ការវាយប្រហារដោយអាវុធបាញ់លឿន", bestForEn: "Fast-fire weapon pushes" },
  { id: "spirit_fox", name: "Spirit Fox", emoji: "🦊", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "បង្ហាញសត្រូវជិតៗរយៈពេលខ្លី", skillEn: "Briefly reveals enemies",
    bestForKm: "ការស្កេនមុនការវាយប្រហារ", bestForEn: "Scan before engagement" },
  { id: "sensei_tiger", name: "Sensei Tig", emoji: "🐯", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "កាត់បន្ថយការខូចខាតពីគ្រាប់បាញ់ពីខាងក្រោយ", skillEn: "Reduces incoming bullet damage from behind",
    bestForKm: "ការស្រូបការខូចខាត", bestForEn: "Absorbing damage" },
  { id: "robo", name: "Robo", emoji: "🤖", role: "defense", tier: "A", accent: "#22c55e",
    skillKm: "បង្កើតខែលការពារ 200 HP និងបង្កើនល្បឿន", skillEn: "Deploys 200 HP shield and boosts speed",
    bestForKm: "ការពារខ្លួនឯង", bestForEn: "Self defense" },
  { id: "shiva", name: "Shiva", emoji: "🐆", role: "attack", tier: "S", accent: "#ef4444",
    skillKm: "បង្កើនការខូចខាត និងល្បឿនពេលសម្លាប់សត្រូវ", skillEn: "Boosts damage and speed after kills",
    bestForKm: "ការវាយប្រហារលឿន", bestForEn: "Aggressive rushing" },
  { id: "kitty", name: "Kitty", emoji: "🐱", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "បង្កើនការព្យាបាលពី medkit", skillEn: "Boosts medkit healing",
    bestForKm: "ការព្យាបាលរហ័ស", bestForEn: "Quick healing" },
  { id: "poring", name: "Poring", emoji: "🐷", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "បង្កើនការប្រមូល loot និងទ្រព្យ", skillEn: "Boosts loot collection",
    bestForKm: "ការប្រមូលទ្រព្យលឿន", bestForEn: "Fast looting" },
  { id: "mestre_trigo", name: "Mestre Trigo", emoji: "🐯", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "បន្ថយរយៈពេលសម្គាល់ពីសត្រូវ 30%", skillEn: "Reduces tagging duration by 30%",
    bestForKm: "ការលេងប្រុងប្រយ័ត្ន", bestForEn: "Cautious gameplay" },
];

export function getPetCount(): number {
  return FF_PETS.length;
}