export const META_VERSION = "v2026.3";
export const META_UPDATED = "16 Sep 2026";

export type RankPhase = {
  id: string;
  name: string;
  range: string;
  color: string;
  emoji: string;
  descKm: string;
  descEn: string;
  tipsKm: string[];
  tipsEn: string[];
};

export type HeroRec = {
  role: string;
  emoji: string;
  names: string[];
  reasonKm: string;
  reasonEn: string;
  color: string;
};

export type Rule = {
  emoji: string;
  titleKm: string;
  titleEn: string;
  descKm: string;
  descEn: string;
  color: string;
};

export const RANK_PHASES: RankPhase[] = [
  {
    id: "epic",
    name: "Epic → Legend",
    range: "Epic I to Legend I",
    color: "#8b5cf6",
    emoji: "🟣",
    descKm: "ដំណាក់កាលងាយបំផុត — ប្រើ hero meta និងមិន troll",
    descEn: "Easiest phase — use meta heroes and don't troll",
    tipsKm: [
      "ជ្រើស hero ដែលអ្នកលេងបានល្អ 3-4",
      "ចៀសវាង hero ពិបាក (Fanny, Lancelot) បើមិនជំនាញ",
      "ទិញ item ត្រឹមត្រូវតាម counter",
      "ជួយក្រុមពេលចាំបាច់",
    ],
    tipsEn: [
      "Pick 3-4 heroes you play well",
      "Avoid hard heroes (Fanny, Lancelot) if not skilled",
      "Buy correct items based on enemy",
      "Help team when needed",
    ],
  },
  {
    id: "legend",
    name: "Legend → Mythic",
    range: "Legend I to Mythic V",
    color: "#3b82f6",
    emoji: "🔵",
    descKm: "ដំណាក់កាលលំបាក — ត្រូវការ coordination និង map awareness",
    descEn: "Harder phase — requires coordination and map awareness",
    tipsKm: [
      "តាមដាន minimap រាល់ 5 វិនាទី",
      "Rotate ទៅ lane ដែលខ្វះ hero",
      "ចាប់ turtle នៅ 2:00, 4:00",
      "មិន chase សត្រូវឆ្ងាយពេក",
    ],
    tipsEn: [
      "Check minimap every 5 seconds",
      "Rotate to lanes missing heroes",
      "Contest turtles at 2:00, 4:00",
      "Don't chase enemies too far",
    ],
  },
  {
    id: "mythic",
    name: "Mythic → Mythical Honor",
    range: "Mythic V to 25 stars",
    color: "#22c55e",
    emoji: "🟢",
    descKm: "ចាប់ផ្តើមពិត — ទីនេះគេលេងយកចិត្តទុកដាក់",
    descEn: "Real start — players take it seriously here",
    tipsKm: [
      "Draft ឱ្យបានត្រឹមត្រូវ — counter pick",
      "Ban hero ដែលគេចូលចិត្ត (Fanny, Joy, Arlott)",
      "Focus objectives ជាង kills",
      "ជ្រើស role តាមក្រុម",
    ],
    tipsEn: [
      "Draft properly — counter pick",
      "Ban popular heroes (Fanny, Joy, Arlott)",
      "Focus objectives over kills",
      "Pick role for team composition",
    ],
  },
  {
    id: "honor",
    name: "Mythical Honor",
    range: "25 to 50 stars",
    color: "#f59e0b",
    emoji: "🟠",
    descKm: "Top 20% នៃអ្នកលេង — ត្រូវការ micro + macro ល្អ",
    descEn: "Top 20% of players — requires good micro + macro",
    tipsKm: [
      "មាន hero pool ធំ (5-6 heroes)",
      "ហាត់ jungle routing ឱ្យលឿន",
      "ចេះអាន enemy movements",
      "Team fight positioning ត្រឹមត្រូវ",
    ],
    tipsEn: [
      "Have larger hero pool (5-6 heroes)",
      "Practice jungle routing speed",
      "Read enemy movements",
      "Correct team fight positioning",
    ],
  },
  {
    id: "glory",
    name: "Mythical Glory",
    range: "50 to 100 stars",
    color: "#ef4444",
    emoji: "🔴",
    descKm: "កម្រិតខ្ពស់បំផុត — Top 5% នៃអ្នកលេង MLBB",
    descEn: "Highest tier — Top 5% of all MLBB players",
    tipsKm: [
      "ស្គាល់ hero ទាំងអស់ល្អ (counter + synergy)",
      "ចេះ draft ពិតប្រាកដ (ban/pick strategy)",
      "Coordination ជាមួយ team ខ្ពស់",
      "ចិត្តស្ងប់ + មិន tilt ពេលចាញ់",
    ],
    tipsEn: [
      "Master all heroes (counter + synergy)",
      "Real drafting (ban/pick strategy)",
      "High team coordination",
      "Calm mindset + never tilt",
    ],
  },
];

export const HERO_RECS: HeroRec[] = [
  {
    role: "Jungler",
    emoji: "🌲",
    color: "#8b5cf6",
    names: ["Fanny", "Lancelot", "Joy", "Ling", "Hayabusa", "Suyou"],
    reasonKm: "គ្រប់គ្រង game ចាប់ពីដំបូង — snowball លឿន",
    reasonEn: "Control the game from start — fast snowball",
  },
  {
    role: "Mid Laner",
    emoji: "✨",
    color: "#a855f7",
    names: ["Valentina", "Valir", "Pharsa", "Xavier", "Novaria", "Zhuxin"],
    reasonKm: "Poke + CC ល្អ ជួយ jungle និង lane",
    reasonEn: "Good poke + CC, helps jungle and lanes",
  },
  {
    role: "Gold Laner",
    emoji: "🏹",
    color: "#f59e0b",
    names: ["Beatrix", "Melissa", "Ixia", "Wanwan", "Brody", "Claude"],
    reasonKm: "Damage ខ្ពស់ — សម្លាប់ objective លឿន",
    reasonEn: "High damage — kills objectives fast",
  },
  {
    role: "EXP Laner",
    emoji: "⚔️",
    color: "#ef4444",
    names: ["Arlott", "Paquito", "Yu Zhong", "Chou", "Phoveus", "Julian"],
    reasonKm: "Tanky + damage — លេងជា frontline ឬ split push",
    reasonEn: "Tanky + damage — play frontline or split push",
  },
  {
    role: "Roamer",
    emoji: "🛡️",
    color: "#3b82f6",
    names: ["Mathilda", "Angela", "Chip", "Estes", "Floryn", "Atlas"],
    reasonKm: "Setup kills + save teammates — MVP ពេលគេមិនដឹង",
    reasonEn: "Setup kills + save teammates — silent MVP",
  },
];

export const RULES: Rule[] = [
  {
    emoji: "🧠",
    color: "#a855f7",
    titleKm: "Mental Game",
    titleEn: "Mental Game",
    descKm: "កុំ tilt ពេលចាញ់ 2-3 ដង — ឈប់លេង សម្រាក 10 នាទី រួចត្រឡប់មកវិញ",
    descEn: "Don't tilt after 2-3 losses — stop, rest 10 min, then come back",
  },
  {
    emoji: "📊",
    color: "#22c55e",
    titleKm: "Track Stats",
    titleEn: "Track Stats",
    descKm: "កត់ត្រា win rate របស់អ្នក — បើ hero ណាចាញ់ច្រើន ឈប់ប្រើ",
    descEn: "Track your win rate — if a hero loses too much, stop using it",
  },
  {
    emoji: "🎥",
    color: "#3b82f6",
    titleKm: "Watch Replays",
    titleEn: "Watch Replays",
    descKm: "មើល replay ពេលចាញ់ — ឃើញកំហុសខ្លួនឯងច្បាស់ជាងគេ",
    descEn: "Watch replays after losses — see your own mistakes clearly",
  },
  {
    emoji: "⏰",
    color: "#f59e0b",
    titleKm: "Best Time to Play",
    titleEn: "Best Time to Play",
    descKm: "លេងព្រឹក ឬ ថ្ងៃត្រង់ — ជៀសវាងយប់ជ្រៅ (trolls ច្រើន)",
    descEn: "Play morning or noon — avoid late night (more trolls)",
  },
  {
    emoji: "👥",
    color: "#ef4444",
    titleKm: "Team Up",
    titleEn: "Team Up",
    descKm: "លេងជាមួយមិត្ត 2-3 នាក់ — solo queue គ្រោះថ្នាក់ខ្ពស់",
    descEn: "Play with 2-3 friends — solo queue is risky",
  },
  {
    emoji: "🎯",
    color: "#f5c542",
    titleKm: "3 Hero Rule",
    titleEn: "3 Hero Rule",
    descKm: "ជំនាញតែ 3 hero ឱ្យបាន 100% — មិនបាច់ចេះច្រើន",
    descEn: "Master only 3 heroes at 100% — no need to know many",
  },
];

export const FAQ = [
  {
    qKm: "តើចំណាយពេលប៉ុន្មានដើម្បីឡើង 100 Star?",
    qEn: "How long does it take to reach 100 stars?",
    aKm: "បើលេង 5-10 games ក្នុងមួយថ្ងៃ + win rate 55%+ → ចំណាយ 2-4 សប្តាហ៍",
    aEn: "With 5-10 games/day + 55%+ win rate → 2-4 weeks",
  },
  {
    qKm: "តើខ្ញុំអាចឡើងដោយ solo queue ទេ?",
    qEn: "Can I climb with solo queue?",
    aKm: "បាន តែយូរជាង — បើលេងជាមួយមិត្ត 2-3 នាក់ លឿនជាងច្រើន",
    aEn: "Yes but slower — playing with 2-3 friends is much faster",
  },
  {
    qKm: "តើ hero ណាល្អបំផុតសម្រាប់ឡើង rank?",
    qEn: "Which hero is best for climbing?",
    aKm: "Jungler ដូច Fanny, Lancelot, Joy — control game ចាប់ពីដំបូង",
    aEn: "Junglers like Fanny, Lancelot, Joy — control from start",
  },
  {
    qKm: "តើត្រូវឈប់លេងពេលចាញ់ប៉ុន្មានដង?",
    qEn: "When should I stop after losses?",
    aKm: "បើចាញ់ 3 ដងជាប់គ្នា → ឈប់ សម្រាក 30 នាទី រួចត្រឡប់មកវិញ",
    aEn: "After 3 straight losses → stop, rest 30 min, then return",
  },
];