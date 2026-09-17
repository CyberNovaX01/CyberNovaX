export type FFRole = "rusher" | "support" | "tank" | "sniper" | "recon";

export type FFCharacter = {
  id: string;
  name: string;
  emoji: string;
  role: FFRole;
  abilityKm: string;
  abilityEn: string;
  bestForKm: string;
  bestForEn: string;
  tier: "S" | "A" | "B";
  accent: string;
};

export const ROLE_LABELS: Record<FFRole, { en: string; km: string; color: string }> = {
  rusher:  { en: "Rusher",  km: "វាយប្រហារ", color: "#ef4444" },
  support: { en: "Support", km: "ជំនួយ",     color: "#22c55e" },
  tank:    { en: "Tank",    km: "ការពារ",    color: "#3b82f6" },
  sniper:  { en: "Sniper",  km: "បាញ់ឆ្ងាយ", color: "#8b5cf6" },
  recon:   { en: "Recon",   km: "ស្កេន",     color: "#f59e0b" },
};

export const TIER_COLORS: Record<"S" | "A" | "B", string> = {
  S: "#f5c542",
  A: "#22d3ee",
  B: "#6b7280",
};

export const FF_CHARACTERS: FFCharacter[] = [
  // ═══ S TIER ═══
  { id: "alok", name: "Alok", emoji: "🎧", role: "support", tier: "S", accent: "#22c55e",
    abilityKm: "បង្កើតតំបន់ DJ ដែលពន្លឿនចលនា និងព្យាបាល HP របស់ក្រុម", abilityEn: "Creates DJ zone boosting movement speed and restoring HP",
    bestForKm: "ក្រុមដែលចូលចិត្តវាយប្រហារលឿន", bestForEn: "Aggressive rush squads" },
  { id: "chrono", name: "Chrono", emoji: "🛡️", role: "tank", tier: "S", accent: "#3b82f6",
    abilityKm: "បង្កើតរបាំងការពារដែលស្រូបគ្រាប់បាញ់", abilityEn: "Deploys a force field that blocks incoming bullets",
    bestForKm: "ការពារក្រុមក្នុងការប្រយុទ្ធជិត", bestForEn: "Protecting squad in close fights" },
  { id: "k", name: "K (Captain Booyah)", emoji: "🥋", role: "support", tier: "S", accent: "#a855f7",
    abilityKm: "បង្កើន EP អតិបរមា និងព្យាបាលខ្លួនឯង/ក្រុម", abilityEn: "Boosts max EP and heals self/allies in range",
    bestForKm: "ការលេងយូរអង្វែងដោយមិនចាំបាច់ព្យាបាល", bestForEn: "Long matches without medkits" },
  { id: "wukong", name: "Wukong", emoji: "🐒", role: "rusher", tier: "S", accent: "#ef4444",
    abilityKm: "ប្តូរជាដើមឈើ ឬសត្វ ដើម្បីការពារ ឬវាយប្រហារ", abilityEn: "Transforms into bush or animal for stealth",
    bestForKm: "ការវាយប្រហារភ្លាមៗ", bestForEn: "Surprise attacks" },

  // ═══ A TIER ═══
  { id: "kelly", name: "Kelly", emoji: "🏃‍♀️", role: "rusher", tier: "A", accent: "#ef4444",
    abilityKm: "បង្កើនល្បឿនរត់ពេលដើរ/រត់", abilityEn: "Increases sprinting speed",
    bestForKm: "ការវាយប្រហារលឿន", bestForEn: "Fast rushing" },
  { id: "hayato", name: "Hayato", emoji: "⚔️", role: "rusher", tier: "A", accent: "#dc2626",
    abilityKm: "បង្កើនអាវុធជ្រៅពេល HP ថយចុះ", abilityEn: "Boosts armor penetration as HP drops",
    bestForKm: "ការប្រយុទ្ធជិតដែលគ្រោះថ្នាក់", bestForEn: "Risky close-range fights" },
  { id: "skyler", name: "Skyler", emoji: "🎤", role: "support", tier: "A", accent: "#22c55e",
    abilityKm: "បំផ្លាញរបាំងសត្រូវ និងព្យាបាល HP", abilityEn: "Destroys enemy shields and heals HP",
    bestForKm: "ការប្រឆាំង Chrono/របាំង", bestForEn: "Countering Chrono/shields" },
  { id: "dimitri", name: "Dimitri", emoji: "🎵", role: "support", tier: "A", accent: "#16a34a",
    abilityKm: "បង្កើតតំបន់ព្យាបាលខ្លួនឯង និងសម្ព័ន្ធ", abilityEn: "Healing zone for self and allies",
    bestForKm: "ក្រុមដែលចូលចិត្ត defense", bestForEn: "Defensive squads" },
  { id: "xayne", name: "Xayne", emoji: "💪", role: "rusher", tier: "A", accent: "#f97316",
    abilityKm: "បង្កើន HP បណ្ដោះអាសន្ន និងខូចខាតរបាំង", abilityEn: "Gains temporary HP and shield damage",
    bestForKm: "ការវាយប្រហារលឿន", bestForEn: "Quick rushes" },
  { id: "thiva", name: "Thiva", emoji: "🎸", role: "support", tier: "A", accent: "#22c55e",
    abilityKm: "ពន្លឿនការសង្គ្រោះមិត្តរួមក្រុម", abilityEn: "Speeds up ally rescue",
    bestForKm: "ការជួយក្រុម", bestForEn: "Support gameplay" },
  { id: "wagu", name: "Waggor", emoji: "🦦", role: "support", tier: "A", accent: "#10b981",
    abilityKm: "បង្កើត Gloo Wall និងប្រអប់ជំនួយ", abilityEn: "Generates Gloo Walls and utility",
    bestForKm: "ការលេងយូរ", bestForEn: "Long sustain" },

  // ═══ B TIER ═══
  { id: "andrew", name: "Andrew", emoji: "🛡️", role: "tank", tier: "B", accent: "#3b82f6",
    abilityKm: "កាត់បន្ថយខូចខាតពីគ្រាប់បាញ់", abilityEn: "Reduces bullet damage taken",
    bestForKm: "ការការពារ", bestForEn: "Defensive play" },
  { id: "antonio", name: "Antonio", emoji: "💥", role: "tank", tier: "B", accent: "#3b82f6",
    abilityKm: "បង្កើន HP ច្រើនបំផុត", abilityEn: "Maximum HP boost",
    bestForKm: "ការស្រូបខូចខាត", bestForEn: "Tanking damage" },
  { id: "jota", name: "Jota", emoji: "💚", role: "rusher", tier: "B", accent: "#ef4444",
    abilityKm: "ព្យាបាល HP ពេលសម្លាប់សត្រូវ", abilityEn: "Restores HP on each kill",
    bestForKm: "ការវាយប្រហារបន្តបន្ទាប់", bestForEn: "Chained aggression" },
  { id: "joe", name: "Joseph", emoji: "🏃", role: "rusher", tier: "B", accent: "#f59e0b",
    abilityKm: "បង្កើនល្បឿនពេល HP ទាប", abilityEn: "Speeds up when HP is low",
    bestForKm: "ការរត់គេច", bestForEn: "Escaping" },
  { id: "laura", name: "Laura", emoji: "🎯", role: "sniper", tier: "B", accent: "#8b5cf6",
    abilityKm: "បង្កើនភាពជាក់លាក់ពេលបាញ់ឆ្ងាយ", abilityEn: "Boosts accuracy at long range",
    bestForKm: "ការបាញ់ sniper", bestForEn: "Sniper gameplay" },
  { id: "moco", name: "Moco", emoji: "👁️", role: "recon", tier: "B", accent: "#f59e0b",
    abilityKm: "សម្គាល់សត្រូវដែលខូចខាត", abilityEn: "Tags damaged enemies for team",
    bestForKm: "ការស្កេនសត្រូវ", bestForEn: "Enemy tracking" },
  { id: "nikita", name: "Nikita", emoji: "🔫", role: "rusher", tier: "B", accent: "#ef4444",
    abilityKm: "ផ្ទុកគ្រាប់ឡើងវិញលឿន", abilityEn: "Faster SMG reload",
    bestForKm: "ការប្រយុទ្ធជិត", bestForEn: "Close combat" },
  { id: "paloma", name: "Paloma", emoji: "💣", role: "rusher", tier: "B", accent: "#dc2626",
    abilityKm: "ផ្ទុកគ្រាប់បន្ថែមគ្មានកាបូប", abilityEn: "Carries extra ammo without backpack",
    bestForKm: "ការបាញ់ច្រើន", bestForEn: "Heavy firefights" },
  { id: "shani", name: "Shani", emoji: "⚡", role: "support", tier: "B", accent: "#22c55e",
    abilityKm: "បង្កើនរបាំងពេលប្រើសម្ព័ន្ធ", abilityEn: "Upgrades shield when using items",
    bestForKm: "ការពារ", bestForEn: "Defense" },
];

export function getCharacterCount(): number {
  return FF_CHARACTERS.length;
}