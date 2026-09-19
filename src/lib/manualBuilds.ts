// Manual Builds — for 9 heroes missing from Meta JSON data
import type { HeroBuild } from "./heroBuilds";

export const MANUAL_BUILDS: Record<string, HeroBuild> = {
  lolita: {
    id: "lolita",
    name: "Lolita",
    variants: [
      {
        titleEn: "Roam Tank",
        titleKm: "រុករក Tank",
        emblem: "tank",
        talents: ["Vitality", "Tenacity", "Concussive Blast"],
        spells: ["flicker"],
        items: ["tough_boots", "dominance_ice", "athenas_shield", "antique_cuirass", "radiant_armor", "immortality"],
      },
      {
        titleEn: "Anti-Marksman",
        titleKm: "ប្រឆាំង Marksman",
        emblem: "tank",
        talents: ["Vitality", "Tenacity", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_armor", "dominance_ice", "athenas_shield", "antique_cuirass", "immortality"],
      },
    ],
  },

  yu_zhong: {
    id: "yu_zhong",
    name: "Yu Zhong",
    variants: [
      {
        titleEn: "Sustain Fighter",
        titleKm: "Fighter ស្កឹមស្កៃ",
        emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "bloodlust_axe", "war_axe", "queens_wings", "malefic_roar", "immortality"],
      },
      {
        titleEn: "Burst Fighter",
        titleKm: "Fighter Burst",
        emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Lethal Ignition"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"],
      },
    ],
  },

  xborg: {
    id: "xborg",
    name: "X.Borg",
    variants: [
      {
        titleEn: "Sustain Fighter",
        titleKm: "Fighter ស្កឹមស្កៃ",
        emblem: "fighter",
        talents: ["Thrill", "Seasoned Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["tough_boots", "war_axe", "sky_piercer", "immortality", "brute_force_breastplate", "ice_queen_wand"],
      },
    ],
  },

  luo_yi: {
    id: "luo_yi",
    name: "Luo Yi",
    variants: [
      {
        titleEn: "Utility Mage",
        titleKm: "Mage ជំនួយ",
        emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"],
      },
    ],
  },

  change: {
    id: "change",
    name: "Chang'e",
    variants: [
      {
        titleEn: "Burst Mage",
        titleKm: "Mage Burst",
        emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"],
      },
    ],
  },

  eudora: {
    id: "eudora",
    name: "Eudora",
    variants: [
      {
        titleEn: "Burst Mage",
        titleKm: "Mage Burst",
        emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker", "flameshot"],
        items: ["magic_boots", "glowing_wand", "holy_crystal", "divine_glaive", "blood_wings", "immortality"],
      },
    ],
  },

  yi_sun_shin: {
    id: "yi_sun_shin",
    name: "Yi Sun-shin",
    variants: [
      {
        titleEn: "Jungle Hybrid",
        titleKm: "ព្រៃ Hybrid",
        emblem: "assassin",
        talents: ["Rupture", "Seasoned Hunter", "Killing Spree"],
        spells: ["retribution"],
        items: ["tough_boots", "hunter_strike", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "immortality"],
      },
      {
        titleEn: "Attack Speed",
        titleKm: "ល្បឿនវាយ",
        emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Quantum Charge"],
        spells: ["inspire"],
        items: ["swift_boots", "corrosion_scythe", "golden_staff", "demon_hunter_sword", "malefic_roar", "immortality"],
      },
    ],
  },

  popol_and_kupa: {
    id: "popol_and_kupa",
    name: "Popol and Kupa",
    variants: [
      {
        titleEn: "Crit Marksman",
        titleKm: "Marksman Crit",
        emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["retribution", "inspire"],
        items: ["swift_boots", "berserkers_fury", "windtalker", "blade_of_despair", "rose_gold_meteor", "malefic_roar"],
      },
    ],
  },

  chip: {
    id: "chip",
    name: "Chip",
    variants: [
      {
        titleEn: "Roam Support",
        titleKm: "រុករក ជួយ",
        emblem: "support",
        talents: ["Pull Yourself Together", "Bargain Hunter", "Focusing Mark"],
        spells: ["flicker"],
        items: ["tough_boots", "dominance_ice", "antique_cuirass", "athenas_shield", "radiant_armor", "immortality"],
      },
    ],
  },
};