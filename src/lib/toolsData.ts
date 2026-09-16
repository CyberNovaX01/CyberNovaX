export type Tool = {
  slug: string;
  emoji: string;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  href: string;
  accent: string;
  badge: string;
  game: "ff" | "mlbb" | "both";
  featured?: boolean;
};

export const TOOLS: Tool[] = [
  {
    slug: "rank-mythic",
    emoji: "🏆",
    titleKm: "Mythic ដល់ 100 Star",
    titleEn: "Mythic to 100 Stars",
    descKm: "មគ្គុទ្ទេសក៍ឡើងពី Mythic ដល់ 100 Star ក្នុង MLBB",
    descEn: "Guide to climb from Mythic to 100 Stars in MLBB",
    href: "/tools/rank-mythic",
    accent: "#f5c542",
    badge: "MLBB GUIDE",
    game: "mlbb",
    featured: true,
  },
  {
    slug: "top-gun",
    emoji: "🎯",
    titleKm: "Top Gun Live (FF)",
    titleEn: "Top Gun Live (FF)",
    descKm: "យុទ្ធសាស្ត្រឈ្នះ Top Gun Live mode ក្នុង Free Fire",
    descEn: "Strategy to win Top Gun Live mode in Free Fire",
    href: "/tools/top-gun",
    accent: "#22d3ee",
    badge: "FREE FIRE",
    game: "ff",
    featured: true,
  },
  {
    slug: "settings",
    emoji: "⚙️",
    titleKm: "Best Settings",
    titleEn: "Best Settings",
    descKm: "ការកំណត់ graphics, FPS, control ល្អបំផុត",
    descEn: "Best graphics, FPS, and control settings",
    href: "/tools/settings",
    accent: "#a855f7",
    badge: "BOTH GAMES",
    game: "both",
  },
  {
    slug: "headshot",
    emoji: "💀",
    titleKm: "Headshot Trainer",
    titleEn: "Headshot Trainer",
    descKm: "វិធីហាត់ headshot ឱ្យបានជាប់ជាប្រចាំ",
    descEn: "Train to land headshots consistently",
    href: "/tools/headshot",
    accent: "#ef4444",
    badge: "FREE FIRE",
    game: "ff",
  },
  {
    slug: "combo",
    emoji: "⚔️",
    titleKm: "Combo Trainer",
    titleEn: "Combo Trainer",
    descKm: "រៀន combo ដ៏គ្រោះថ្នាក់សម្រាប់ MLBB heroes",
    descEn: "Learn deadly combos for MLBB heroes",
    href: "/tools/combo",
    accent: "#3b82f6",
    badge: "MLBB GUIDE",
    game: "mlbb",
  },
  {
    slug: "diamond",
    emoji: "💎",
    titleKm: "Free Diamond",
    titleEn: "Free Diamond",
    descKm: "វិធីទទួល diamond ដោយឥតគិតថ្លៃ (ស្របច្បាប់)",
    descEn: "Legit ways to get free diamonds",
    href: "/tools/diamond",
    accent: "#22c55e",
    badge: "BOTH GAMES",
    game: "both",
  },
];

export function getToolCount(): number {
  return TOOLS.length;
}