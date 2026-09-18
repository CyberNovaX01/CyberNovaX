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
  // ═══ S TIER ═══
  { id: "falco", name: "Falco", emoji: "🦅", role: "movement", tier: "S", accent: "#f59e0b",
    skillKm: "បង្កើនល្បឿនធ្លាក់ឆ័ត្រយោង និងការរអិល", skillEn: "Boosts gliding speed and dive movement",
    bestForKm: "ការធ្វើដំណើរលឿនលើផែនទីធំ", bestForEn: "Fast rotations on big maps" },
  { id: "mr_waggor", name: "Mr. Waggor", emoji: "🦦", role: "utility", tier: "S", accent: "#22c55e",
    skillKm: "បង្កើត Gloo Wall រាល់ 120 វិនាទី", skillEn: "Generates a Gloo Wall every 120s",
    bestForKm: "ការលេងយូរដោយគ្មាន Gloo Wall", bestForEn: "Long matches without Gloo Walls" },
  { id: "rockie", name: "Rockie", emoji: "🐺", role: "utility", tier: "S", accent: "#22c55e",
    skillKm: "កាត់បន្ថយ cooldown ជំនាញ", skillEn: "Reduces active skill cooldown",
    bestForKm: "តួអង្គដែលមានជំនាញល្អ (Alok, Chrono)", bestForEn: "Skill-heavy characters (Alok, Chrono)" },
  { id: "drex", name: "Drex", emoji: "🐉", role: "attack", tier: "S", accent: "#ef4444",
    skillKm: "បង្កើនកម្រិត HP អតិបរមា និងការពារ", skillEn: "Boosts max HP and damage reduction",
    bestForKm: "ការប្រយុទ្ធជិតដែលគ្រោះថ្នាក់", bestForEn: "Tough close-range fights" },

  // ═══ A TIER ═══
  { id: "ottero", name: "Ottero", emoji: "🦦", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "ស្រូប HP ពី Gloo Wall និង medkit", skillEn: "Gains extra HP from Gloo Walls and medkits",
    bestForKm: "ការពារក្នុងជម្រក", bestForEn: "Defensive holding" },
  { id: "detective_panda", name: "Detective Panda", emoji: "🐼", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "បង្ហាញទីតាំងសត្រូវនៅជិត", skillEn: "Reveals nearby enemy positions",
    bestForKm: "ការលេងដោយប្រុងប្រយ័ត្ន", bestForEn: "Cautious gameplay" },
  { id: "agent_hop", name: "Agent Hop", emoji: "🐰", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "បង្កើនភាពធន់ពេល HP ទាប", skillEn: "Increases resilience at low HP",
    bestForKm: "ការរស់រានពេល HP តិច", bestForEn: "Surviving at low HP" },
  { id: "shiba", name: "Shiba", emoji: "🐕", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "បង្កើនខូចខាតបន្ទាប់ពីសម្លាប់", skillEn: "Increases damage after each kill",
    bestForKm: "ការវាយប្រហារបន្តបន្ទាប់", bestForEn: "Chained aggression" },
  { id: "beaston", name: "Beaston", emoji: "🦁", role: "attack", tier: "A", accent: "#ef4444",
    skillKm: "បង្កើនល្បឿនបាញ់ និងការពារស្រូប", skillEn: "Boosts fire rate and damage absorption",
    bestForKm: "ការវាយប្រហារដោយកាំភ្លើងលឿន", bestForEn: "Fast-fire weapon pushes" },
  { id: "spirit_fox", name: "Spirit Fox", emoji: "🦊", role: "utility", tier: "A", accent: "#22c55e",
    skillKm: "បង្ហាញសត្រូវក្នុងរយៈពេលខ្លី", skillEn: "Briefly reveals enemies",
    bestForKm: "ការស្កេនមុនប្រយុទ្ធ", bestForEn: "Scan before engagement" },
  { id: "sensei_tiger", name: "Sensei Tig", emoji: "🐯", role: "defense", tier: "A", accent: "#3b82f6",
    skillKm: "កាត់បន្ថយខូចខាតពីគ្រាប់បាញ់", skillEn: "Reduces incoming bullet damage",
    bestForKm: "ការស្រូបខូចខាត", bestForEn: "Absorbing damage" },

  // ═══ B TIER ═══
  { id: "kitty", name: "Kitty", emoji: "🐱", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "បង្កើនការព្យាបាលពី medkit", skillEn: "Boosts medkit healing",
    bestForKm: "ការព្យាបាលលឿន", bestForEn: "Quick healing" },
  { id: "poring", name: "Poring", emoji: "🩷", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "បង្កើនការប្រមូលធនធាន", skillEn: "Boosts loot collection",
    bestForKm: "ការប្រមូលធនធានលឿន", bestForEn: "Fast looting" },
  { id: "zorro", name: "Zorro", emoji: "🦝", role: "attack", tier: "B", accent: "#ef4444",
    skillKm: "បង្កើនខូចខាតទៅ Gloo Wall", skillEn: "Increases damage to Gloo Walls",
    bestForKm: "ការវាយបំផ្លាញ Gloo Wall សត្រូវ", bestForEn: "Breaking enemy walls" },
  { id: "guru", name: "Guru", emoji: "🐵", role: "utility", tier: "B", accent: "#22c55e",
    skillKm: "បង្កើនល្បឿនផ្លាស់ទីសម្ព័ន្ធ", skillEn: "Boosts squad movement speed",
    bestForKm: "ក្រុមដែលចង់លឿន", bestForEn: "Fast-moving squads" },
];

export function getPetCount(): number {
  return FF_PETS.length;
}