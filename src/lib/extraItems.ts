// Extra MLBB Items — Missing from heroBuilds.ts
// Meta 2026 — Added to fix broken Item references
import type { ItemDetail } from "./heroBuilds";

export const EXTRA_ITEMS: Record<string, ItemDetail> = {
  // ============ BOOTS ============
  arcane_boots: {
    slug: "arcane_boots",
    nameEn: "Arcane Boots",
    nameKm: "ស្បែកជើង Arcane",
    price: 710,
    stats: {
      en: "+40 Movement Speed, +10 Magic Penetration",
      km: "+40 ល្បឿន, +10 Magic Penetration",
    },
    passive: {
      en: "None",
      km: "គ្មាន",
    },
  },

  // ============ MAGIC ITEMS ============
  genius_wand: {
    slug: "genius_wand",
    nameEn: "Genius Wand",
    nameKm: "ដំបង Genius",
    price: 2000,
    stats: {
      en: "+75 Magic Power, +5% Movement Speed",
      km: "+75 Magic Power, +5% ល្បឿន",
    },
    passive: {
      en: "Dealing Magic damage to an enemy reduces their Magic Defense by 3-7 (max 3 stacks).",
      km: "បង្កការខូចខាត Magic ទៅសត្រូវ បន្ថយការពារ Magic របស់គេ 3-7 (អតិបរមា 3 stack)។",
    },
  },
  feather_of_heaven: {
    slug: "feather_of_heaven",
    nameEn: "Feather of Heaven",
    nameKm: "ស្លាបសួគ៌",
    price: 2030,
    stats: {
      en: "+70 Magic Power, +5% Movement Speed, +10% Attack Speed",
      km: "+70 Magic Power, +5% ល្បឿន, +10% ល្បឿនវាយ",
    },
    passive: {
      en: "Basic attacks deal extra Magic damage equal to 50 + 30% Magic Power.",
      km: "ការវាយធម្មតាបង្កការខូចខាត Magic បន្ថែមស្មើ 50 + 30% Magic Power។",
    },
  },
  wishing_lantern: {
    slug: "wishing_lantern",
    nameEn: "Wishing Lantern",
    nameKm: "គោមប្រាថ្នា",
    price: 2060,
    stats: {
      en: "+60 Magic Power, +400 HP, +5% Movement Speed",
      km: "+60 Magic Power, +400 HP, +5% ល្បឿន",
    },
    passive: {
      en: "Skills deal extra Magic damage equal to 5-10% of target's current HP.",
      km: "Skill បង្កការខូចខាត Magic បន្ថែមស្មើ 5-10% នៃ HP សត្រូវ។",
    },
  },
  winter_crown: {
    slug: "winter_truncheon",
    nameEn: "Winter Truncheon",
    nameKm: "ដំបងរដូវរងា",
    price: 2050,
    stats: {
      en: "+70 Magic Power, +500 HP",
      km: "+70 Magic Power, +500 HP",
    },
    passive: {
      en: "Active: Freeze self for 2s, immune to all damage and CC.",
      km: "សកម្ម: បង្កកខ្លួន 2 វិនាទី មិនខ្វល់ការខូចខាត និង CC។",
    },
  },

  // ============ PHYSICAL ITEMS ============
  sky_piercer: {
    slug: "sky_piercer",
    nameEn: "Sky Piercer",
    nameKm: "ដាវចាក់មេឃ",
    price: 2050,
    stats: {
      en: "+60 Physical Attack, +15% Physical Penetration",
      km: "+60 កម្លាំង Physical, +15% Physical Penetration",
    },
    passive: {
      en: "Scoring a kill resets this item's active. Ultimate deals extra True Damage equal to 10% of target's Max HP (7s CD).",
      km: "ការសម្លាប់ Reset Active។ Ultimate បង្កការខូចខាត True Damage បន្ថែមស្មើ 10% HP សត្រូវ (Cooldown 7s)។",
    },
  },
  starlium_scythe: {
    slug: "feather_of_heaven",
    nameEn: "Feather of Heaven",
    nameKm: "ស្លាបសួគ៌",
    price: 2030,
    stats: {
      en: "+70 Magic Power, +5% Movement Speed, +10% Attack Speed",
      km: "+70 Magic Power, +5% ល្បឿន, +10% ល្បឿនវាយ",
    },
    passive: {
      en: "Basic attacks deal extra Magic damage equal to 50 + 30% Magic Power.",
      km: "ការវាយធម្មតាបង្កការខូចខាត Magic បន្ថែមស្មើ 50 + 30% Magic Power។",
    },
  },
  great_dragon_spear: {
    slug: "great_dragon_spear",
    nameEn: "Great Dragon Spear",
    nameKm: "លំពែងនាគធំ",
    price: 2050,
    stats: {
      en: "+70 Physical Attack, +10% CDR",
      km: "+70 កម្លាំង Physical, +10% CDR",
    },
    passive: {
      en: "Ultimate increases Movement Speed by 30% for 7s. Killing/Assisting resets CD.",
      km: "Ultimate បង្កើនល្បឿន 30% រយៈពេល 7 វិនាទី។ ការសម្លាប់/ជួយ Reset Cooldown។",
    },
  },
  thunder_belt: {
    slug: "thunder_belt",
    nameEn: "Thunder Belt",
    nameKm: "ខ្សែក្រវាត់ផ្លេកបន្ទោរ",
    price: 2050,
    stats: {
      en: "+40 Physical Defense, +40 Magic Defense, +800 HP, +10% CDR",
      km: "+40 ការពារ Physical, +40 ការពារ Magic, +800 HP, +10% CDR",
    },
    passive: {
      en: "Next basic attack after using skill deals True Damage and slows enemies.",
      km: "ការវាយបន្ទាប់បន្សំក្រោយប្រើ Skill បង្កការខូចខាត True Damage និងបន្ថយល្បឿនសត្រូវ។",
    },
  },

  // ============ DEFENSE ITEMS ============
  guardian_helmet: {
    slug: "guardian_helmet",
    nameEn: "Guardian Helmet",
    nameKm: "មួកការពារ",
    price: 2050,
    stats: {
      en: "+1550 HP, +30 HP Regen",
      km: "+1550 HP, +30 HP Regen",
    },
    passive: {
      en: "Restores 4% Max HP per second when out of combat for 3s.",
      km: "សង្គ្រោះ HP 4% ក្នុងមួយវិនាទី ពេលចេញពីការប្រយុទ្ធ 3 វិនាទី។",
    },
  },
  chastise_pauldron: {
    slug: "antique_cuirass",
    nameEn: "Antique Cuirass",
    nameKm: "គ្រឿងការពារបុរាណ",
    price: 2170,
    stats: {
      en: "+920 HP, +40 Physical Defense, +20 HP Regen",
      km: "+920 HP, +40 ការពារ Physical, +20 HP Regen",
    },
    passive: {
      en: "Reduces enemy Physical Attack by 6% per stack (max 3).",
      km: "បន្ថយកម្លាំង Physical សត្រូវ 6% ក្នុង stack (អតិបរមា 3)។",
    },
  },

  // ============ SUPPORT ITEMS ============
  favor: {
    slug: "favor",
    nameEn: "Favor",
    nameKm: "ការពេញចិត្ត",
    price: 600,
    stats: {
      en: "+20 HP, +5% CDR, +5% Heal Effect",
      km: "+20 HP, +5% CDR, +5% ការព្យាបាល",
    },
    passive: {
      en: "Increases Shield and HP Regen on allies by 15%. Upgradeable to Flask of the Oasis.",
      km: "បង្កើន Shield និង HP Regen លើសម្ព័ន្ធមិត្ត 15%។ អាច Upgrade ទៅ Flask of the Oasis។",
    },
  },

  // ============ ATTACK SPEED ============
  windtalker: {
    slug: "windtalker",
    nameEn: "Windtalker",
    nameKm: "អ្នកនិយាយខ្យល់",
    price: 1880,
    stats: {
      en: "+35 Physical Attack, +20% Attack Speed, +5% Movement Speed",
      km: "+35 កម្លាំង Physical, +20% ល្បឿនវាយ, +5% ល្បឿន",
    },
    passive: {
      en: "Every 3 basic attacks, next attack deals Magic damage to up to 3 enemies.",
      km: "រៀងរាល់ 3 ការវាយធម្មតា ការវាយបន្ទាប់បង្កការខូចខាត Magic ទៅសត្រូវ 3 នាក់។",
    },
  },
};