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
    slug: "phone-performance",
    emoji: "📱",
    titleKm: "ពិនិត្យ FPS ទូរស័ព្ទ",
    titleEn: "Check FPS Your Phone",
    descKm: "ពិនិត្យថាតើទូរស័ព្ទរបស់អ្នកលេង FF និង MLBB បាន FPS ប៉ុន្មាន — ១៨០+ ម៉ូដែល",
    descEn: "Check your phone's FPS for FF and MLBB — 180+ models",
    href: "/tools/phone-performance",
    accent: "#a78bfa",
    badge: "NEW · 2026",
    game: "both",
    featured: true,
  },
  {
    slug: "rank-mythic",
    emoji: "🏆",
    titleKm: "Mythic ដល់ 100 Star",
    titleEn: "Mythic to 100 Stars",
    descKm: "Guide ឡើងពី Mythic ដល់ 100 Star ក្នុង MLBB",
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
];

export function getToolCount(): number {
  return TOOLS.length;
}