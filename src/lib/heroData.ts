export type HeroData = {
  id: string; name: string; role: "Assassin" | "Tank" | "Mage" | "Marksman" | "Fighter" | "Support";
  difficulty: 1 | 2 | 3; lane: string; tier: string;
  description: { km: string; en: string };
  skills: { name: string; type: string; desc: string }[];
  build: { name: string; note: string }[];
  items: { name: string; emoji: string }[];
  combo: string[];
  tips: { km: string; en: string }[];
  counters: string[]; counteredBy: string[];
};
export const HERO_DB: Record<string, HeroData> = {
  lancelot: {
    id: "lancelot", name: "Lancelot", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "S+",
    description: { km: "Assassin ជាមួយ dash ច្រើន និង damage ខ្ពស់បំផុតមួយក្នុងហ្គេម។ សម្រាប់អ្នកលេងចូលចិត្ត mobility។", en: "Assassin with multiple dashes and one of the highest burst damage in the game." },
    skills: [
      { name: "Soul Cutter", type: "Passive", desc: "ការវាយបន្ទាប់ពី dash ធ្វើ damage បន្ថែម" },
      { name: "Puncture", type: "Skill 1", desc: "Dash ទៅមុខ បញ្ចេញ damage 3 ដង" },
      { name: "Thorned Rose", type: "Skill 2", desc: "Swing ដាវបង្កើត shield" },
      { name: "Phantom Execution", type: "Ultimate", desc: "Dash ឆ្ងាយ + damage ខ្ពស់" },
    ],
    build: [
      { name: "Warrior Boots", note: "Speed + armor" },
      { name: "Berserker's Fury", note: "Crit damage" },
      { name: "Endless Battle", note: "True damage + lifesteal" },
      { name: "Blade of Despair", note: "High attack" },
      { name: "Queen's Wings", note: "Survival" },
      { name: "Immortality", note: "Revive" },
    ],
    items: [
      { name: "Retribution", emoji: "⚔️" }, { name: "Execute", emoji: "💥" },
    ],
    combo: ["S2 → S1 → Basic → S1 → S1 → Ult", "S2 → Ult → S1 → Basic → S1", "Ult → S2 → S1 → Basic"],
    tips: [
      { km: "ចាប់ផ្តើមដោយ S2 ដើម្បីបង្កើត shield មុនប្រយុទ្ធ", en: "Open with S2 to build shield before fighting" },
      { km: "រក្សា 2 dashes សម្រាប់ escape", en: "Keep 2 dashes for escape" },
      { km: "វាយតែ carry ឬ mage ក្នុង teamfight", en: "Target only carry or mage in teamfight" },
    ],
    counters: ["Kagura", "Lunox", "Harith"],
    counteredBy: ["Khufra", "Franco", "Tigreal"],
  },
  gusion: {
    id: "gusion", name: "Gusion", role: "Assassin", difficulty: 3, lane: "Jungle", tier: "S",
    description: { km: "Mage/Assassin ដែលមាន combo ខ្លាំង និង burst damage ខ្ពស់។ ត្រូវការជំនាញខ្ពស់។", en: "Mage/Assassin with strong combo and high burst. Requires high skill." },
    skills: [
      { name: "Dagger Specialist", type: "Passive", desc: "Dagger ធ្វើ damage បន្ថែម" },
      { name: "Sword Spike", type: "Skill 1", desc: "បោះ dagger ចំនួន 3" },
      { name: "Shadowblade Slaughter", type: "Skill 2", desc: "Dash + dagger damage" },
      { name: "Incandescence", type: "Ultimate", desc: "Reset cooldown S1, S2" },
    ],
    build: [
      { name: "Arcane Boots", note: "Magic pen" },
      { name: "Clock of Destiny", note: "Stack magic" },
      { name: "Holy Crystal", note: "Magic power" },
      { name: "Divine Glaive", note: "Penetration" },
      { name: "Concentrated Energy", note: "Spell vamp" },
      { name: "Blood Wings", note: "Shield + MP" },
    ],
    items: [
      { name: "Retribution", emoji: "⚔️" }, { name: "Flicker", emoji: "✨" },
    ],
    combo: ["S1 → S2 → S1 → Ult → S2 → S1 → S2", "S2 → S1 → S2 → Ult → S2 → S1"],
    tips: [
      { km: "ប្រើ Ult ដើម្បី reset S1, S2 ក្នុង combo", en: "Use Ult to reset S1, S2 in combo" },
      { km: "ចាប់ផ្តើមដោយ S1 3 daggers មុន dash ចូល", en: "Open with S1 3 daggers before dashing in" },
    ],
    counters: ["Layla", "Miya"], counteredBy: ["Khufra", "Chou"],
  },
};
export const FALLBACK_HERO: HeroData = {
  id: "unknown", name: "Hero", role: "Assassin", difficulty: 2, lane: "Jungle", tier: "A",
  description: { km: "ព័ត៌មាន hero នេះកំពុងធ្វើបច្ចុប្បន្នភាព។", en: "This hero's info is being updated." },
  skills: [], build: [], items: [], combo: [], tips: [], counters: [], counteredBy: [],
};