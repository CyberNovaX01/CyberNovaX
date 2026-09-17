export type FFRole = "rusher" | "support" | "tank" | "sniper" | "recon";

export type FFCharacter = {
  id: string;
  name: string;
  emoji: string;
  role: FFRole;
  skillName: string;
  abilityKm: string;
  abilityEn: string;
  cooldown: string;
  bestWeapon: string;
  tipsKm: string;
  tipsEn: string;
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
  // ═══════════ S TIER ═══════════
  { id: "alok", name: "Alok", emoji: "🎧", role: "support", tier: "S", accent: "#22c55e",
    skillName: "Drop the Beat",
    abilityKm: "បង្កើតតំបន់ DJ (5m) ដែលពន្លឿនចលនា 10% និងព្យាបាល HP 5 HP/s ដល់ក្រុម",
    abilityEn: "Creates a 5m DJ zone that boosts movement speed by 10% and restores 5 HP/s to allies",
    cooldown: "45s", bestWeapon: "MP40 / M1887",
    tipsKm: "ប្រើពេលចូលវាយ ឬពេលរត់គេច", tipsEn: "Use when rushing or escaping",
    bestForKm: "ក្រុមវាយប្រហារលឿន", bestForEn: "Aggressive rush squads" },

  { id: "chrono", name: "Chrono", emoji: "🛡️", role: "tank", tier: "S", accent: "#3b82f6",
    skillName: "Time Turner",
    abilityKm: "បង្កើតរបាំងការពារ 180° ដែលស្រូបគ្រាប់បាញ់ និងអនុញ្ញាតឱ្យបាញ់ចេញ",
    abilityEn: "Deploys a 180° force field that blocks bullets while allowing you to shoot out",
    cooldown: "50s", bestWeapon: "M1014 / Groza",
    tipsKm: "ដាក់ក្នុងទីតាំងចង្អៀត ដើម្បីការពារក្រុម", tipsEn: "Place in chokepoints to protect team",
    bestForKm: "ការពារក្រុម", bestForEn: "Protecting squad" },

  { id: "k", name: "K (Captain Booyah)", emoji: "🥋", role: "support", tier: "S", accent: "#a855f7",
    skillName: "Master of All",
    abilityKm: "បង្កើន EP អតិបរមា 50 និងព្យាបាល 2 HP/s ដល់ខ្លួនឯង/ក្រុម (Jiu-jitsu mode បង្កើនរបាំង)",
    abilityEn: "Boosts max EP by 50 and heals 2 HP/s to self/allies (Jiu-jitsu mode boosts shield)",
    cooldown: "85s", bestWeapon: "MP40 / UMP",
    tipsKm: "ប្តូរ Mode តាមស្ថានភាព — Jiu-jitsu ពេលការពារ", tipsEn: "Switch modes based on situation — Jiu-jitsu for defense",
    bestForKm: "ការលេងយូរ", bestForEn: "Long matches" },

  { id: "wukong", name: "Wukong", emoji: "🐒", role: "rusher", tier: "S", accent: "#ef4444",
    skillName: "Camouflage",
    abilityKm: "ប្តូរជាដើមឈើ ឬសត្វ ដើម្បីការពារ ឬវាយប្រហារភ្លាមៗ (គ្មានការខូចខាតពេលប្តូរ)",
    abilityEn: "Transforms into bush or animal for stealth attacks (no damage while transformed)",
    cooldown: "60s", bestWeapon: "M1887 / MP40",
    tipsKm: "ប្រើដើម្បីលបបាញ់សត្រូវពីខាងក្រោយ", tipsEn: "Use to ambush enemies from behind",
    bestForKm: "ការវាយប្រហារភ្លាមៗ", bestForEn: "Surprise attacks" },

  // ═══════════ A TIER ═══════════
  { id: "kelly", name: "Kelly", emoji: "🏃‍♀️", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Dash",
    abilityKm: "បង្កើនល្បឿនរត់ 6% (ធម្មតា) និង 6% បន្ថែមពេលរត់លឿន",
    abilityEn: "Increases sprinting speed by 6% (passive) and 6% extra when sprinting",
    cooldown: "Passive", bestWeapon: "MP40 / M1887",
    tipsKm: "រត់លឿនជាងគេ — ប្រើដើម្បីទៅដល់ទីតាំងមុន", tipsEn: "Fastest runner — use to reach positions first",
    bestForKm: "ការវាយប្រហារលឿន", bestForEn: "Fast rushing" },

  { id: "hayato", name: "Hayato", emoji: "⚔️", role: "rusher", tier: "A", accent: "#dc2626",
    skillName: "Bushido",
    abilityKm: "បង្កើន Armor Penetration 7.5% រាល់ 10% HP ដែលបាត់បង់ (អតិបរមា 100%)",
    abilityEn: "Increases armor penetration by 7.5% for every 10% HP lost (max 100%)",
    cooldown: "Passive", bestWeapon: "M1887 / Woodpecker",
    tipsKm: "ដំណើរការល្អបំផុតពេល HP ទាប — ហ៊ានប្រយុទ្ធ", tipsEn: "Works best at low HP — fight aggressively",
    bestForKm: "ការប្រយុទ្ធជិត", bestForEn: "Close-range fights" },

  { id: "skyler", name: "Skyler", emoji: "🎤", role: "support", tier: "A", accent: "#22c55e",
    skillName: "Sound of Waves",
    abilityKm: "បំផ្លាញ Gloo Wall របស់សត្រូវ (5m) និងព្យាបាល HP 60+ ដល់ក្រុម",
    abilityEn: "Destroys enemy Gloo Walls (5m) and heals 60+ HP to allies",
    cooldown: "60s", bestWeapon: "MP40 / M1014",
    tipsKm: "ប្រើដើម្បីបំផ្លាញ Gloo Wall សត្រូវ", tipsEn: "Use to destroy enemy Gloo Walls",
    bestForKm: "ប្រឆាំងរបាំង", bestForEn: "Countering shields" },

  { id: "dimitri", name: "Dimitri", emoji: "🎵", role: "support", tier: "A", accent: "#16a34a",
    skillName: "Healing Heartbeat",
    abilityKm: "បង្កើតតំបន់ព្យាបាល 3.5m ដែលព្យាបាល 3 HP/s និងអនុញ្ញាតឱ្យរស់ឡើងវិញ",
    abilityEn: "Creates a 3.5m healing zone that restores 3 HP/s and allows revival",
    cooldown: "60s", bestWeapon: "M1014 / MP40",
    tipsKm: "ដាក់ក្នុងតំបន់ការពារ ដើម្បីសង្គ្រោះក្រុម", tipsEn: "Place in safe zone to revive teammates",
    bestForKm: "ក្រុមការពារ", bestForEn: "Defensive squads" },

  { id: "xayne", name: "Xayne", emoji: "💪", role: "rusher", tier: "A", accent: "#f97316",
    skillName: "Xtreme Encounter",
    abilityKm: "បង្កើន HP បណ្ដោះអាសន្ន 80 និងខូចខាតទៅ Gloo Wall/Shield បន្ថែម 100%",
    abilityEn: "Gains 80 temporary HP and deals 100% extra damage to Gloo Walls and shields",
    cooldown: "75s", bestWeapon: "M1887 / MP40",
    tipsKm: "ប្រើពេលវាយប្រហារ — បំផ្លាញ Gloo Wall លឿន", tipsEn: "Use when attacking — destroy Gloo Walls fast",
    bestForKm: "ការវាយប្រហារលឿន", bestForEn: "Quick rushes" },

  { id: "thiva", name: "Thiva", emoji: "🎸", role: "support", tier: "A", accent: "#22c55e",
    skillName: "On Stage",
    abilityKm: "បង្កើនល្បឿនសង្គ្រោះមិត្តរួមក្រុម 30% និងព្យាបាលបន្ថែម",
    abilityEn: "Increases ally rescue speed by 30% and heals extra HP",
    cooldown: "Passive", bestWeapon: "MP40 / M1014",
    tipsKm: "សង្គ្រោះក្រុមលឿនជាងគេ", tipsEn: "Fastest ally rescuer",
    bestForKm: "ការជួយក្រុម", bestForEn: "Support gameplay" },

  { id: "andrew", name: "Andrew", emoji: "🛡️", role: "tank", tier: "B", accent: "#3b82f6",
    skillName: "Armor Specialist",
    abilityKm: "កាត់បន្ថយខូចខាតពីគ្រាប់បាញ់ 10% ដល់ខ្លួនឯង និងក្រុមជិត",
    abilityEn: "Reduces bullet damage by 10% to self and nearby allies",
    cooldown: "Passive", bestWeapon: "M1014 / Groza",
    tipsKm: "នៅជិតក្រុម ដើម្បីការពារពួកគេ", tipsEn: "Stay near team to protect them",
    bestForKm: "ការការពារ", bestForEn: "Defensive play" },

  { id: "antonio", name: "Antonio", emoji: "💥", role: "tank", tier: "B", accent: "#3b82f6",
    skillName: "Gangster's Spirit",
    abilityKm: "បង្កើន HP អតិបរមា 100 (ច្រើនជាងគេ)",
    abilityEn: "Increases maximum HP by 100 (highest in game)",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "ស្រូបខូចខាតបានច្រើន", tipsEn: "Tank the most damage",
    bestForKm: "ការស្រូបខូចខាត", bestForEn: "Tanking damage" },

  { id: "jota", name: "Jota", emoji: "💚", role: "rusher", tier: "B", accent: "#ef4444",
    skillName: "Sustained Raids",
    abilityKm: "ព្យាបាល HP 40 ពេលសម្លាប់សត្រូវ និង 20 ពេលវាយ",
    abilityEn: "Restores 40 HP on kill and 20 HP on hit",
    cooldown: "Passive", bestWeapon: "MP40 / M1887",
    tipsKm: "វាយបន្តបន្ទាប់ ដើម្បីព្យាបាលខ្លួនឯង", tipsEn: "Chain attacks to heal yourself",
    bestForKm: "ការវាយប្រហារបន្ត", bestForEn: "Chained aggression" },

  { id: "laura", name: "Laura", emoji: "🎯", role: "sniper", tier: "B", accent: "#8b5cf6",
    skillName: "Sharp Shooter",
    abilityKm: "បង្កើនភាពជាក់លាក់ 35% ពេលបាញ់ឆ្ងាយ (សម្រាប់ sniper)",
    abilityEn: "Boosts accuracy by 35% at long range (for snipers)",
    cooldown: "Passive", bestWeapon: "AWM / Kar98k",
    tipsKm: "ប្រើជាមួយ sniper — បាញ់ឆ្ងាយត្រូវជាងគេ", tipsEn: "Pair with sniper — most accurate at range",
    bestForKm: "ការបាញ់ sniper", bestForEn: "Sniper gameplay" },

  { id: "moco", name: "Moco", emoji: "👁️", role: "recon", tier: "B", accent: "#f59e0b",
    skillName: "Hacker's Eye",
    abilityKm: "សម្គាល់សត្រូវដែលខូចខាត 5s និងបង្ហាញទីតាំងក្រុម",
    abilityEn: "Tags damaged enemies for 5s and reveals their location to team",
    cooldown: "Passive", bestWeapon: "MP40 / UMP",
    tipsKm: "បាញ់សត្រូវមួយគ្រាប់ ដើម្បីមើលទីតាំងពួកគេ", tipsEn: "Hit enemies once to reveal their location",
    bestForKm: "ការស្កេនសត្រូវ", bestForEn: "Enemy tracking" },

  { id: "nikita", name: "Nikita", emoji: "🔫", role: "rusher", tier: "B", accent: "#ef4444",
    skillName: "Firearms Expert",
    abilityKm: "បង្កើនល្បឿនផ្ទុកគ្រាប់ SMG 20% និងបង្កើនខូចខាតបន្ទាប់ពីបញ្ចូលគ្រាប់",
    abilityEn: "Increases SMG reload speed by 20% and boosts damage after reload",
    cooldown: "Passive", bestWeapon: "MP40 / UMP",
    tipsKm: "ប្រើ SMG — បញ្ចូលគ្រាប់លឿនជាងគេ", tipsEn: "Use SMG — fastest reload",
    bestForKm: "ការប្រយុទ្ធជិត", bestForEn: "Close combat" },

  { id: "paloma", name: "Paloma", emoji: "💣", role: "rusher", tier: "B", accent: "#dc2626",
    skillName: "Arms Deal",
    abilityKm: "ផ្ទុកគ្រាប់បន្ថែម 30% ដោយមិនចាំបាច់កាបូប",
    abilityEn: "Carries 30% extra ammo without needing a backpack",
    cooldown: "Passive", bestWeapon: "Groza / M1014",
    tipsKm: "ប្រើអាវុធបាញ់ច្រើន — មិនដាច់គ្រាប់", tipsEn: "Use heavy weapons — never run out of ammo",
    bestForKm: "ការបាញ់ច្រើន", bestForEn: "Heavy firefights" },

  { id: "shani", name: "Shani", emoji: "⚡", role: "support", tier: "B", accent: "#22c55e",
    skillName: "Gear Up",
    abilityKm: "បង្កើនរបាំងបន្ថែមពេលប្រើ Gloo Wall ឬឧបករណ៍",
    abilityEn: "Upgrades shield when using Gloo Walls or utility items",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "ប្រើ Gloo Wall ជាញឹកញាប់", tipsEn: "Use Gloo Walls frequently",
    bestForKm: "ការពារ", bestForEn: "Defense" },

  // ═══════════ បន្ថែមថ្មី ═══════════
  { id: "a124", name: "A124", emoji: "🤖", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Thrill of Battle",
    abilityKm: "បញ្ចេញ EMP ធ្វើឱ្យសត្រូវខ្វិន 3s និងបន្ថយល្បឿន",
    abilityEn: "Releases EMP that stuns enemies for 3s and slows them",
    cooldown: "60s", bestWeapon: "M1887 / MP40",
    tipsKm: "ប្រើពេលសត្រូវនៅជិត — ខ្វិនពួកគេ", tipsEn: "Use when enemies are close — stun them",
    bestForKm: "ការប្រយុទ្ធជិត", bestForEn: "Close range fights" },

  { id: "alvaro", name: "Alvaro", emoji: "🔥", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Art of Demolition",
    abilityKm: "បង្កការខូចខាតបន្ថែម 30% និងបំផ្លាញគម្រប",
    abilityEn: "Deals 30% extra damage and destroys covers",
    cooldown: "Passive", bestWeapon: "M1014 / Groza",
    tipsKm: "បំផ្លាញ Gloo Wall សត្រូវលឿន", tipsEn: "Destroy enemy Gloo Walls fast",
    bestForKm: "ការលេងវាយប្រហារ", bestForEn: "Aggressive playstyle" },

  { id: "caroline", name: "Caroline", emoji: "💫", role: "rusher", tier: "B", accent: "#ef4444",
    skillName: "Agility",
    abilityKm: "បង្កើនល្បឿនផ្លាស់ទី 8% និងការគ្រប់គ្រងអាវុធ",
    abilityEn: "Boosts movement speed by 8% and weapon handling",
    cooldown: "Passive", bestWeapon: "MP40 / UMP",
    tipsKm: "រត់លឿន និងបាញ់ត្រូវ", tipsEn: "Fast runner and accurate shooter",
    bestForKm: "ការលេងលឿន", bestForEn: "Fast-paced gameplay" },

  { id: "dbee", name: "D-Bee", emoji: "🎯", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Bullseye",
    abilityKm: "បង្កើនល្បឿនផ្លាស់ទី 10% ពេលបាញ់ និង 30% ពេលវាយត្រូវ",
    abilityEn: "Increases movement speed by 10% while firing and 30% on hit",
    cooldown: "Passive", bestWeapon: "MP40 / M1887",
    tipsKm: "បាញ់ និងរត់ក្នុងពេលតែមួយ", tipsEn: "Shoot while moving — never stop",
    bestForKm: "ការវាយប្រហារលឿន", bestForEn: "Aggressive rushing" },

  { id: "ford", name: "Ford", emoji: "🛡️", role: "support", tier: "B", accent: "#22c55e",
    skillName: "Iron Will",
    abilityKm: "បន្ថយការខូចខាត 10% ពេលនៅក្នុងតំបន់គ្រោះថ្នាក់",
    abilityEn: "Reduces damage taken by 10% when inside safe zone",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "នៅក្នុងតំបន់សុវត្ថិភាព ដើម្បីការពារ", tipsEn: "Stay in safe zone for defense",
    bestForKm: "ការពារក្រុម", bestForEn: "Team defense" },

  { id: "jai", name: "Jai", emoji: "💪", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Furious Fire",
    abilityKm: "បញ្ចូលគ្រាប់រហ័ស និងបង្កើនល្បឿនបាញ់ 30% បន្ទាប់ពីវាយដួល",
    abilityEn: "Reloads fast and boosts fire rate by 30% after knockdown",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "វាយសត្រូវដួល រួចបន្តវាយរហ័ស", tipsEn: "Knock down enemy then finish fast",
    bestForKm: "ការប្រយុទ្ធជិត", bestForEn: "Close combat" },

  { id: "joseph", name: "Joseph", emoji: "🧠", role: "support", tier: "B", accent: "#22c55e",
    skillName: "Adrenaline",
    abilityKm: "បង្កើនល្បឿនផ្លាស់ទី 20% ពេលទទួលរងការវាយ",
    abilityEn: "Increases movement speed by 20% when taking damage",
    cooldown: "Passive", bestWeapon: "MP40 / UMP",
    tipsKm: "ពេលវាយបង្កើនល្បឿន — រត់គេចបានលឿន", tipsEn: "When hit, speed up — escape faster",
    bestForKm: "ការរស់រាន", bestForEn: "Survivability" },

  { id: "kapella", name: "Kapella", emoji: "💚", role: "support", tier: "A", accent: "#22c55e",
    skillName: "Healing Song",
    abilityKm: "បង្កើនការព្យាបាល 20% និងបន្ថយការខូចខាត 15%",
    abilityEn: "Increases healing by 20% and reduces damage taken by 15%",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "ប្រើជាមួយ Alok ឬ Dimitri", tipsEn: "Pair with Alok or Dimitri",
    bestForKm: "ការប្រយុទ្ធបន្ត", bestForEn: "Sustain in fights" },

  { id: "kenta", name: "Kenta", emoji: "🛡", role: "tank", tier: "B", accent: "#3b82f6",
    skillName: "Shield Master",
    abilityKm: "បង្កើតខែលការពារគ្រាប់ 4s",
    abilityEn: "Deploys a bullet-blocking shield for 4s",
    cooldown: "50s", bestWeapon: "M1014 / Groza",
    tipsKm: "ប្រើពេលរត់គេច ឬការពារក្រុម", tipsEn: "Use when escaping or protecting team",
    bestForKm: "ការពារទីតាំង", bestForEn: "Defending position" },

  { id: "kla", name: "Kla", emoji: "🔥", role: "rusher", tier: "B", accent: "#ef4444",
    skillName: "Muay Thai",
    abilityKm: "បង្កើនការខូចខាត 10% និងល្បឿន 8%",
    abilityEn: "Increases damage by 10% and speed by 8%",
    cooldown: "Passive", bestWeapon: "M1887 / MP40",
    tipsKm: "ប្រយុទ្ធជិត — ខូចខាតខ្ពស់", tipsEn: "Fight close — high damage",
    bestForKm: "ការប្រយុទ្ធជិត", bestForEn: "Close range combat" },

  { id: "leon", name: "Leon", emoji: "🦁", role: "support", tier: "B", accent: "#22c55e",
    skillName: "Survivor",
    abilityKm: "សង្គ្រោះ HP 30 បន្ទាប់ពីសម្លាប់សត្រូវ",
    abilityEn: "Recovers 30 HP after every elimination",
    cooldown: "Passive", bestWeapon: "MP40 / M1014",
    tipsKm: "វាយបន្ត — សង្គ្រោះខ្លួនឯង", tipsEn: "Chain kills — heal yourself",
    bestForKm: "ការប្រយុទ្ធបន្ត", bestForEn: "Sustained fights" },

  { id: "luqueta", name: "Luqueta", emoji: "💪", role: "rusher", tier: "B", accent: "#ef4444",
    skillName: "Power of Man",
    abilityKm: "បង្កើន HP អតិបរមា 10 (អតិបរមា 50) និងការខូចខាត បន្ទាប់ពីសម្លាប់",
    abilityEn: "Increases max HP by 10 (max 50) and damage after elimination",
    cooldown: "Passive", bestWeapon: "M1887 / MP40",
    tipsKm: "សម្លាប់ឱ្យបានច្រើន — HP កើន", tipsEn: "Get many kills — HP increases",
    bestForKm: "ការលេងវាយប្រហារ", bestForEn: "Aggressive playstyle" },

  { id: "maxim", name: "Maxim", emoji: "🔄", role: "support", tier: "A", accent: "#22c55e",
    skillName: "Quick Recovery",
    abilityKm: "បន្ថយពេលប្រើថ្នាំ និងការរស់ឡើងវិញ 30%",
    abilityEn: "Reduces medkit use and revive time by 30%",
    cooldown: "Passive", bestWeapon: "MP40 / M1014",
    tipsKm: "ប្រើថ្នាំលឿន — ត្រឡប់មកវិញលឿន", tipsEn: "Heal fast — get back in action quickly",
    bestForKm: "តួនាទីជំនួយ", bestForEn: "Support role" },

  { id: "miguel", name: "Miguel", emoji: "🔫", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Crazy Slaughter",
    abilityKm: "បន្ថយការបាត់បង់ EP 30% និងសង្គ្រោះ HP 30 ក្នុងមួយសម្លាប់",
    abilityEn: "Reduces EP loss by 30% and recovers 30 HP per kill",
    cooldown: "Passive", bestWeapon: "M1887 / MP40",
    tipsKm: "វាយបន្ត — EP មិនដាច់", tipsEn: "Chain kills — EP never depletes",
    bestForKm: "ការវាយប្រហារលឿន", bestForEn: "Aggressive rushing" },

  { id: "misha", name: "Misha", emoji: "🚗", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Afterburner",
    abilityKm: "បង្កើនល្បឿនយានយន្ត 15% និងការខូចខាត 10%",
    abilityEn: "Increases vehicle speed by 15% and damage by 10%",
    cooldown: "Passive", bestWeapon: "M1014 / Groza",
    tipsKm: "ប្រើយានយន្ត — លឿន និងខូចខាត", tipsEn: "Use vehicles — fast and powerful",
    bestForKm: "ការប្រយុទ្ធយានយន្ត", bestForEn: "Vehicle combat" },

  { id: "nairi", name: "Nairi", emoji: "🔧", role: "support", tier: "A", accent: "#22c55e",
    skillName: "Technician",
    abilityKm: "ជួសជុលខែល 50% និងបង្កើនការខូចខាត 15% ទៅខែល",
    abilityEn: "Repairs shields by 50% and increases damage by 15% to shields",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "បំផ្លាញខែលសត្រូវលឿន", tipsEn: "Destroy enemy shields fast",
    bestForKm: "តួនាទីជំនួយ", bestForEn: "Support role" },

  { id: "notora", name: "Notora", emoji: "🚗", role: "rusher", tier: "B", accent: "#ef4444",
    skillName: "Racer's Blessing",
    abilityKm: "បង្កើនការសង្គ្រោះ HP យានយន្ត 20%",
    abilityEn: "Increases vehicle HP recovery by 20%",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "ប្រើយានយន្ត — សង្គ្រោះលឿន", tipsEn: "Use vehicles — recover fast",
    bestForKm: "ការគាំទ្រយានយន្ត", bestForEn: "Vehicle support" },

  { id: "olivia", name: "Olivia", emoji: "💚", role: "support", tier: "A", accent: "#22c55e",
    skillName: "Healing Touch",
    abilityKm: "សង្គ្រោះ HP 3 HP/s ខ្លួនឯង និង 1 HP/s សម្ព័ន្ធមិត្ត",
    abilityEn: "Restores 3 HP/s to self and 1 HP/s to nearby allies",
    cooldown: "Passive", bestWeapon: "M1014 / MP40",
    tipsKm: "នៅជិតក្រុម — សង្គ្រោះពួកគេ", tipsEn: "Stay near team — heal them",
    bestForKm: "ការព្យាបាលក្រុម", bestForEn: "Team healing" },

  { id: "otho", name: "Otho", emoji: "🦮", role: "support", tier: "B", accent: "#22c55e",
    skillName: "Hidden Hunter",
    abilityKm: "សម្គាល់សត្រូវជិត 5s និងបង្ហាញទីតាំង",
    abilityEn: "Tags nearby enemies for 5s and reveals their location",
    cooldown: "Passive", bestWeapon: "MP40 / UMP",
    tipsKm: "ស្កេនសត្រូវជិត — ដឹងទីតាំងពួកគេ", tipsEn: "Scan nearby enemies — know their location",
    bestForKm: "ការប្រមូលព័ត៌មាន", bestForEn: "Information gathering" },

  { id: "rafael", name: "Rafael", emoji: "🔫", role: "sniper", tier: "A", accent: "#8b5cf6",
    skillName: "Silent Shot",
    abilityKm: "ធ្វើឱ្យសត្រូវស្ងាត់ 4s ពេលបាញ់ត្រូវ (មិនអាចបាញ់ត្រឡប់)",
    abilityEn: "Silences enemies for 4s when shooting them (they can't shoot back)",
    cooldown: "Passive", bestWeapon: "AWM / Kar98k",
    tipsKm: "បាញ់មុន — ធ្វើឱ្យសត្រូវស្ងាត់", tipsEn: "Shoot first — silence the enemy",
    bestForKm: "ការបាញ់ឆ្ងាយ", bestForEn: "Long range combat" },

  { id: "santino", name: "Santino", emoji: "🦅", role: "rusher", tier: "B", accent: "#ef4444",
    skillName: "Eagle Eye",
    abilityKm: "ហៅដ្រូនតាមដានសត្រូវ 6s",
    abilityEn: "Summons a drone that follows enemies for 6s",
    cooldown: "50s", bestWeapon: "MP40 / M1887",
    tipsKm: "ប្រើដ្រូនដើម្បីរកសត្រូវ", tipsEn: "Use drone to find enemies",
    bestForKm: "ការស្កេន និងវាយប្រហារ", bestForEn: "Recon and rush" },

  { id: "steffie", name: "Steffie", emoji: "🛡️", role: "support", tier: "A", accent: "#22c55e",
    skillName: "Painted Shield",
    abilityKm: "បង្កើតហ្គ្រាហ្វីទីការពារគ្រាប់ 5s និងសង្គ្រោះ HP 30",
    abilityEn: "Creates graffiti that blocks bullets for 5s and restores 30 HP",
    cooldown: "60s", bestWeapon: "M1014 / MP40",
    tipsKm: "ដាក់ហ្គ្រាហ្វីទីការពារក្រុម", tipsEn: "Place graffiti to protect team",
    bestForKm: "ការពារក្រុម", bestForEn: "Team defense" },

  { id: "wolfrahh", name: "Wolfrahh", emoji: "🎭", role: "rusher", tier: "A", accent: "#ef4444",
    skillName: "Limelight",
    abilityKm: "បន្ថយការខូចខាតពីការបាញ់ក្បាល 30% និងបង្កើនខូចខាត 5%",
    abilityEn: "Reduces headshot damage by 30% and increases damage by 5%",
    cooldown: "Passive", bestWeapon: "M1887 / MP40",
    tipsKm: "ហ៊ានប្រយុទ្ធ — ក្បាលរឹង", tipsEn: "Fight aggressively — tough head",
    bestForKm: "ការលេងវាយប្រហារ", bestForEn: "Aggressive playstyle" },
];

export function getCharacterCount(): number {
  return FF_CHARACTERS.length;
}