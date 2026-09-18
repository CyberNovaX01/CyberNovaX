export type MapMode = "br" | "cs" | "special";

export type FFMap = {
  id: string;
  name: string;
  emoji: string;
  mode: MapMode;
  sizeKm: string;
  players: number;
  descKm: string;
  descEn: string;
  tipsKm: string[];
  tipsEn: string[];
  hotDropsKm: string[];
  hotDropsEn: string[];
  accent: string;
};

export const MODE_LABELS: Record<MapMode, { en: string; km: string; color: string }> = {
  br:      { en: "Battle Royale", km: "Battle Royale", color: "#22d3ee" },
  cs:      { en: "Clash Squad",   km: "Clash Squad",   color: "#ef4444" },
  special: { en: "Special",       km: "ពិសេស",         color: "#a855f7" },
};

export const FF_MAPS: FFMap[] = [
  {
    id: "bermuda",
    name: "Bermuda",
    emoji: "🏝️",
    mode: "br",
    sizeKm: "8×8 km",
    players: 50,
    accent: "#22d3ee",
    descKm: "ផែនទីធំបំផុត សម្រាប់ 50 អ្នកលេង។ មានទីក្រុង ព្រៃ និងឆ្នេរ។",
    descEn: "The largest map for 50 players. Features cities, forests and beaches.",
    tipsKm: [
      "ចុះនៅទីក្រុងធំ ដើម្បីប្រមូល loot លឿន",
      "ប្រុងប្រយ័ត្ន sniper ពីចម្ងាយឆ្ងាយ",
      "ប្រើរថយន្តដើម្បីផ្លាស់ទីលឿន",
      "ទីតាំង zone សំខាន់ក្នុងវគ្គចុងក្រោយ",
    ],
    tipsEn: [
      "Drop in big cities for fast looting",
      "Watch out for snipers at long range",
      "Use vehicles to rotate faster",
      "Zone positioning is key in final circles",
    ],
    hotDropsKm: ["Clock Tower", "Cape Town", "Peak", "Pochinok"],
    hotDropsEn: ["Clock Tower", "Cape Town", "Peak", "Pochinok"],
  },
  {
    id: "purgatory",
    name: "Purgatory",
    emoji: "🌋",
    mode: "br",
    sizeKm: "6×6 km",
    players: 50,
    accent: "#ef4444",
    descKm: "ផែនទីភ្នំភ្លើង ដែលមានហានិភ័យខ្ពស់ និង loot ល្អ។",
    descEn: "Volcanic map with high risk and good loot.",
    tipsKm: [
      "ប្រយ័ត្នតំបន់ក្តៅ ដែលធ្វើឱ្យខូចខាត",
      "ចុះនៅ Central ឬ Museum សម្រាប់ loot ល្អ",
      "ប្រើខែលការពារពេលឆ្លងកាត់តំបន់ក្តៅ",
      "រកទីទួលខ្ពស់សម្រាប់ sniper",
    ],
    tipsEn: [
      "Beware hot zones that deal damage",
      "Drop at Central or Museum for good loot",
      "Use shields when crossing hot zones",
      "Find high ground for sniping",
    ],
    hotDropsKm: ["Central", "Museum", "Village", "Forsaken"],
    hotDropsEn: ["Central", "Museum", "Village", "Forsaken"],
  },
  {
    id: "kalahari",
    name: "Kalahari",
    emoji: "🏜️",
    mode: "br",
    sizeKm: "6×6 km",
    players: 50,
    accent: "#f59e0b",
    descKm: "ផែនទីវាលខ្សាច់ ដែលមានទិដ្ឋភាពបើកចំហ និង sniper គ្រោះថ្នាក់។",
    descEn: "Desert map with open terrain and dangerous snipers.",
    tipsKm: [
      "ប្រយ័ត្ន sniper ព្រោះទិដ្ឋភាពបើកចំហ",
      "ប្រើថ្ម និងរុក្ខជាតិសម្រាប់ cover",
      "ចុះនៅ Refinery ឬ Command Post",
      "រថយន្តសំខាន់សម្រាប់ការធ្វើដំណើរ",
    ],
    tipsEn: [
      "Watch for snipers due to open terrain",
      "Use rocks and trees for cover",
      "Drop at Refinery or Command Post",
      "Vehicles are essential for rotations",
    ],
    hotDropsKm: ["Refinery", "Command Post", "Bayfront", "Sub"],
    hotDropsEn: ["Refinery", "Command Post", "Bayfront", "Sub"],
  },
  {
    id: "alpine",
    name: "Alpine",
    emoji: "🏔️",
    mode: "br",
    sizeKm: "6×6 km",
    players: 50,
    accent: "#3b82f6",
    descKm: "ផែនទីព្រិល ដែលមានភ្នំ និងផ្ទាំងទឹកកក។",
    descEn: "Snow map with mountains and ice fields.",
    tipsKm: [
      "ព្រិលធ្វើឱ្យពិបាកមើលសត្រូវពីចម្ងាយ",
      "ប្រើពណ៌សសម្រាប់ camouflage",
      "ចុះនៅ Lab ឬ Villa សម្រាប់ loot ល្អ",
      "កំដៅសំខាន់ក្នុងតំបន់ត្រជាក់",
    ],
    tipsEn: [
      "Snow makes it hard to spot enemies at range",
      "Wear white skins for camouflage",
      "Drop at Lab or Villa for good loot",
      "Watch for cold zones",
    ],
    hotDropsKm: ["Lab", "Villa", "Peak", "Harbor"],
    hotDropsEn: ["Lab", "Villa", "Peak", "Harbor"],
  },
  {
    id: "nexterra",
    name: "Nexterra",
    emoji: "🌆",
    mode: "br",
    sizeKm: "8×8 km",
    players: 50,
    accent: "#a855f7",
    descKm: "ផែនទី cyberpunk ដែលមានលក្ខណៈពិសេស និង vertical gameplay។",
    descEn: "Cyberpunk map with vertical gameplay and special features.",
    tipsKm: [
      "ប្រើ zipline សម្រាប់ផ្លាស់ទីលឿន",
      "ចុះនៅ Downtown ឬ Nexus Tower",
      "ប្រយ័ត្នការវាយប្រហារពីលើ",
      "រកទីទួលខ្ពស់សម្រាប់ vantage point",
    ],
    tipsEn: [
      "Use ziplines for fast rotations",
      "Drop at Downtown or Nexus Tower",
      "Watch for attacks from above",
      "Find high ground for vantage points",
    ],
    hotDropsKm: ["Downtown", "Nexus Tower", "Slums", "Plaza"],
    hotDropsEn: ["Downtown", "Nexus Tower", "Slums", "Plaza"],
  },
  {
    id: "bermuda_remastered",
    name: "Bermuda Remastered",
    emoji: "🌴",
    mode: "br",
    sizeKm: "8×8 km",
    players: 50,
    accent: "#22c55e",
    descKm: "កំណែថ្មីនៃ Bermuda ដែលមានក្រាហ្វិក និងទីតាំងថ្មី។",
    descEn: "Remastered version of Bermuda with better graphics and new locations.",
    tipsKm: [
      "រចនាសម្ព័ន្ធថ្មីត្រូវការយុទ្ធសាស្ត្រថ្មី",
      "ប្រើ terrain ដើម្បី cover",
      "ចុះនៅទីតាំងដែលធ្លាប់ស្គាល់",
      "Meta ផ្លាស់ប្តូរបន្តិចបន្តួច",
    ],
    tipsEn: [
      "New structures require new strategies",
      "Use terrain for cover",
      "Drop at familiar locations",
      "Meta has shifted slightly",
    ],
    hotDropsKm: ["Clock Tower", "Cape Town", "Factory", "Riverside"],
    hotDropsEn: ["Clock Tower", "Cape Town", "Factory", "Riverside"],
  },
  {
    id: "bermuda_cs",
    name: "Bermuda (Clash Squad)",
    emoji: "⚔️",
    mode: "cs",
    sizeKm: "Small",
    players: 8,
    accent: "#ef4444",
    descKm: "កំណែ Clash Squad នៃ Bermuda សម្រាប់ការប្រយុទ្ធ 4v4 លឿន។",
    descEn: "Clash Squad version of Bermuda for fast 4v4 combat.",
    tipsKm: [
      "ទិញអាវុធត្រឹមត្រូវតាម round",
      "ប្រើ Gloo Wall សម្រាប់ការពារ",
      "ការប្រាស្រ័យទាក់ទងសំខាន់ណាស់",
      "ចេះពេលវេលា push និង retreat",
    ],
    tipsEn: [
      "Buy the right weapon each round",
      "Use Gloo Walls for defense",
      "Communication is key",
      "Know when to push and retreat",
    ],
    hotDropsKm: ["Center of Map", "Bombsite A", "Bombsite B"],
    hotDropsEn: ["Center of Map", "Bombsite A", "Bombsite B"],
  },
  {
    id: "training_ground",
    name: "Training Ground",
    emoji: "🎯",
    mode: "special",
    sizeKm: "Small",
    players: 1,
    accent: "#22d3ee",
    descKm: "តំបន់សម្រាប់ហាត់បាញ់ និងសាកល្បង sensitivity។",
    descEn: "Practice area for testing aim and sensitivity.",
    tipsKm: [
      "សាកល្បង sensitivity ថ្មីនៅទីនេះ",
      "ហាត់ drag shot និង one tap",
      "សាកល្បងអាវុធទាំងអស់",
      "កំណត់ DPI ត្រឹមត្រូវ",
    ],
    tipsEn: [
      "Test new sensitivity here",
      "Practice drag shots and one taps",
      "Try out every weapon",
      "Tune your DPI correctly",
    ],
    hotDropsKm: ["Practice Range", "Movement Course"],
    hotDropsEn: ["Practice Range", "Movement Course"],
  },
];

export function getMapCount(): number {
  return FF_MAPS.length;
}