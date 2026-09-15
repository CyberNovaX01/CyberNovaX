export type NewsItem = {
  id: string; slug: string; title: { km: string; en: string };
  excerpt: { km: string; en: string }; body: { km: string; en: string };
  game: "ff" | "mlbb" | "general"; date: string; tag: string;
  image: string | null; accent: string;
};
export const NEWS: NewsItem[] = [
  {
    id: "n1", slug: "mlbb-new-hero-2026",
    title: { km: "Hero ថ្មី MLBB ចេញខែនេះ!", en: "New MLBB Hero Released This Month!" },
    excerpt: { km: "Hero ថ្មីមាន skill ខ្លាំង និង mobility ខ្ពស់ សម្រាប់ jungle role។", en: "New hero features strong skills and high mobility for jungle role." },
    body: { km: "ព័ត៌មានលម្អិតអំពី hero ថ្មីនឹងមកដល់ឆាប់ៗនេះ...", en: "Detailed info about the new hero coming soon..." },
    game: "mlbb", date: "2026-09-15", tag: "NEW HERO", image: null, accent: "#3b82f6",
  },
  {
    id: "n2", slug: "ff-sensitivity-guide-update",
    title: { km: "Sensitivity Guide ថ្មីសម្រាប់ iPhone 15", en: "New Sensitivity Guide for iPhone 15" },
    excerpt: { km: "ការកំណត់ sensitivity ថ្មីសម្រាប់ iPhone 15 ជាមួយ DPI 480។", en: "New sensitivity settings for iPhone 15 with DPI 480." },
    body: { km: "ព័ត៌មានលម្អិត...", en: "Detailed info..." },
    game: "ff", date: "2026-09-14", tag: "UPDATE", image: null, accent: "#ff8c00",
  },
  {
    id: "n3", slug: "mlbb-patch-1-9-50",
    title: { km: "Patch 1.9.50 — Buff/ Nerf ធំ", en: "Patch 1.9.50 — Major Buffs/Nerfs" },
    excerpt: { km: "Hero meta ផ្លាស់ប្តូរ — Lancelot buff, Fanny nerf។", en: "Meta shifts — Lancelot buff, Fanny nerf." },
    body: { km: "ព័ត៌មានលម្អិត...", en: "Detailed info..." },
    game: "mlbb", date: "2026-09-12", tag: "PATCH", image: null, accent: "#3b82f6",
  },
  {
    id: "n4", slug: "ff-season-45-start",
    title: { km: "រដូវកាលទី 45 ចាប់ផ្តើម!", en: "Season 45 Has Started!" },
    excerpt: { km: "រង្វាន់ថ្មី និង skin ថ្មីៗនៅក្នុង Season 45។", en: "New rewards and skins in Season 45." },
    body: { km: "ព័ត៌មានលម្អិត...", en: "Detailed info..." },
    game: "ff", date: "2026-09-10", tag: "SEASON", image: null, accent: "#ff8c00",
  },
];
export type PatchItem = {
  id: string; version: string; game: "ff" | "mlbb"; date: string;
  title: { km: string; en: string };
  changes: { type: "buff" | "nerf" | "adjust" | "new"; hero: string; desc: { km: string; en: string } }[];
  accent: string;
};
export const PATCHES: PatchItem[] = [
  {
    id: "p1", version: "1.9.50", game: "mlbb", date: "2026-09-12",
    title: { km: "Major Balance Patch", en: "Major Balance Patch" },
    accent: "#3b82f6",
    changes: [
      { type: "buff", hero: "Lancelot", desc: { km: "Damage កើន 15% នៅ Skill 1", en: "Skill 1 damage up 15%" } },
      { type: "nerf", hero: "Fanny", desc: { km: "Energy cost កើន 20%", en: "Energy cost up 20%" } },
      { type: "adjust", hero: "Chou", desc: { km: "Ult cooldown កើន 5s", en: "Ult cooldown +5s" } },
      { type: "new", hero: "Aurora", desc: { km: "Revamp ជាមួយ skill ថ្មី", en: "Revamp with new skills" } },
    ],
  },
  {
    id: "p2", version: "OB47", game: "ff", date: "2026-09-08",
    title: { km: "Sensitivity Balance", en: "Sensitivity Balance" },
    accent: "#ff8c00",
    changes: [
      { type: "buff", hero: "M1014", desc: { km: "Damage កើន 8%", en: "Damage up 8%" } },
      { type: "nerf", hero: "MP40", desc: { km: "Accuracy ថយ 5%", en: "Accuracy down 5%" } },
      { type: "new", hero: "M1887", desc: { km: "Skin ថ្មីមកដល់", en: "New skin arrived" } },
    ],
  },
];
