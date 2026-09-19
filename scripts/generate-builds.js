// generate-builds.js
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "mlbb-data");
const OUT_FILE = path.join(__dirname, "..", "src", "lib", "metaBuilds.ts");

function slugify(str) {
  return String(str)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

const HERO_ID_OVERRIDES = {
  "Yi Sun-shin": "yi_sun_shin",
  "Popol and Kupa": "popol_and_kupa",
  "Lapu-Lapu": "lapu_lapu",
  "X.Borg": "x_borg",
  "Yu Zhong": "yu_zhong",
  "Luo Yi": "luo_yi",
  "Chang'e": "change",
};

function heroId(name) {
  if (HERO_ID_OVERRIDES[name]) return HERO_ID_OVERRIDES[name];
  return slugify(name);
}

function emblemSlug(emblemName) {
  if (!emblemName) return "common";
  const n = String(emblemName).toLowerCase();
  if (n.includes("assassin")) return "assassin";
  if (n.includes("fighter")) return "fighter";
  if (n.includes("mage") || n.includes("magic")) return "mage";
  if (n.includes("marksman")) return "marksman";
  if (n.includes("support")) return "support";
  if (n.includes("tank")) return "tank";
  return "common";
}

const ITEM_SLUG_OVERRIDES = {
  // ── Boots (files use "boots") ──
  "Tough Boots": "tough_boots",
  "Warrior Boots": "warrior_boots",
  "Swift Boots": "swift_boots",
  "Rapid Boots": "rapid_boots",
  "Magic Boots": "magic_boots",
  "Demon Shoes": "demon_boots",
  "Arcane Boots": "arcane_boots",
  // ── Shoes (JSON variants → boots files) ──
  "Magic Shoes": "magic_boots",
  "Warrior Shoes": "warrior_boots",
  "Swift Shoes": "swift_boots",
  "Tough Shoes": "tough_boots",
  "Rapid Shoes": "rapid_boots",
  "Demon Boots": "demon_boots",
  "Arcane Shoes": "arcane_boots",
  "Boots": "boots",
  // ── Physical Items ──
  "Berserker's Fury": "berserkers_fury",
  "Haas' Claws": "haas_claws",
  "Blade of Despair": "blade_of_despair",
  "Wind of Nature": "wind_of_nature",
  "Immortality": "immortality",
  "Blade of the Heptaseas": "blade_of_the_heptaseas",
  "Hunter Strike": "hunter_strike",
  "Malefic Roar": "malefic_roar",
  "Malefic Gun": "malefic_gun",
  "Demon Hunter Sword": "demon_hunter_sword",
  "Corrosion Scythe": "corrosion_scythe",
  "Golden Staff": "golden_staff",
  "Rose Gold Meteor": "rose_gold_meteor",
  "Endless Battle": "endless_battle",
  "Queen's Wings": "queens_wings",
  "Bloodlust Axe": "bloodlust_axe",
  "War Axe": "war_axe",
  // ── Defense Items ──
  "Oracle": "oracle",
  "Athena's Shield": "athenas_shield",
  "Radiant Armor": "radiant_armor",
  "Antique Cuirass": "antique_cuirass",
  "Dominance Ice": "dominance_ice",
  "Blade Armor": "blade_armor",
  "Brute Force Breastplate": "brute_force_breastplate",
  "Conceal": "conceal",
  "Cursed Helmet": "cursed_helmet",
  // ── Magic Items ──
  "Lightning Truncheon": "lightning_truncheon",
  "Holy Crystal": "holy_crystal",
  "Divine Glaive": "divine_glaive",
  "Concentrated Energy": "concentrated_energy",
  "Winter Truncheon": "winter_truncheon",
  "Clock of Destiny": "clock_of_destiny",
  "Enchanted Talisman": "enchanted_talisman",
  "Ice Queen Wand": "ice_queen_wand",
  "Glowing Wand": "glowing_wand",
  "Blood Wings": "blood_wings",
  "Genius Wand": "genius_wand",
  "Feather of Heaven": "feather_of_heaven",
  "Wishing Lantern": "wishing_lantern",
  // ── Newer Items ──
  "Sea Halberd": "sea_halberd",
  "Flask of the Oasis": "flask_of_the_oasis",
  "Fleeting Time": "fleeting_time",
  "Sky Piercer": "sky_piercer",
  "Great Dragon Spear": "great_dragon_spear",
  "Thunder Belt": "thunder_belt",
  "Guardian Helmet": "guardian_helmet",
  "Favor": "favor",
  "Windtalker": "windtalker",
  // ── Compound / Alternate ──
  "Star Shard / Concentrated Energy": "concentrated_energy",
  "Star Shard": "concentrated_energy",
  "Winter Crown": "winter_crown",
  "Chastise Pauldron": "chastise_pauldron",
};

function itemSlug(name) {
  if (ITEM_SLUG_OVERRIDES[name]) return ITEM_SLUG_OVERRIDES[name];
  return slugify(name);
}

function spellSlug(name) {
  if (!name) return [];
  const n = String(name).toLowerCase();
  if (n.includes("retribution")) return ["retribution"];
  if (n.includes("execute")) return ["execute"];
  if (n.includes("flicker")) return ["flicker"];
  if (n.includes("inspire")) return ["inspire"];
  if (n.includes("sprint")) return ["sprint"];
  if (n.includes("purify")) return ["purify"];
  if (n.includes("revitalize")) return ["revitalize"];
  if (n.includes("vengeance")) return ["vengeance"];
  if (n.includes("flameshot")) return ["flameshot"];
  if (n.includes("arrival")) return ["arrival"];
  if (n.includes("petrify")) return ["petrify"];
  if (n.includes("aegis")) return ["aegis"];
  return [slugify(name)];
}

const TALENT_OVERRIDES = {
  "Thrill": "thrill-of-the-hunt",
  "Weapon Master": "weapons-master",
  "Inspire": "talent-inspire",
};

function talentName(name) {
  return String(name).trim();
}

const raw = fs.readFileSync(path.join(DATA_DIR, "build-item.json"), "utf-8");
const heroes = JSON.parse(raw);

const builds = {};
let count = 0;

for (const hero of heroes) {
  if (!hero.hero_name || !Array.isArray(hero.top_builds)) continue;

  const id = heroId(hero.hero_name);
  const variants = [];

  hero.top_builds.forEach((b, idx) => {
    const emblemsArr = b.emblems || [];
    const emblemType = emblemsArr[0] || "";
    const talents = emblemsArr.slice(1).filter(Boolean).map(talentName);

    variants.push({
      titleEn: `Build ${idx + 1}`,
      titleKm: `Build ${idx + 1}`,
      emblem: emblemSlug(emblemType),
      talents,
      spells: spellSlug(b.battle_spell),
      items: (b.items || []).map(itemSlug).filter(Boolean),
    });
  });

  if (variants.length === 0) continue;

  builds[id] = { id, name: hero.hero_name, variants };
  count++;
}

const header = `// AUTO-GENERATED — DO NOT EDIT MANUALLY
// Source: Ceplin03/database-mlbb.Mobile-Legends-Bang-Bang
// Generated: ${new Date().toISOString()}
// Heroes: ${count}

import type { HeroBuild } from "./heroBuilds";

export const META_BUILDS: Record<string, HeroBuild> = `;

fs.writeFileSync(OUT_FILE, header + JSON.stringify(builds, null, 2) + ";\n", "utf-8");
console.log(`✅ Generated: ${OUT_FILE}`);
console.log(`📊 Heroes: ${count}`);