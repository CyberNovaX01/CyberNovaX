// Hero Builds — MLBB 2026 Meta (mlbb.gg style)
export type ItemDetail = {
  slug: string;
  nameEn: string;
  nameKm: string;
  price: number;
  stats: { en: string; km: string };
  passive: { en: string; km: string };
};

export const ITEM_DETAILS: Record<string, ItemDetail> = {
  tough_boots: {
    slug: "tough_boots", nameEn: "Tough Boots", nameKm: "ស្បែកជើងរឹង", price: 700,
    stats: { en: "+40 Movement Speed, +22 Magic Defense", km: "+40 ល្បឿន, +22 ការពារ Magic" },
    passive: { en: "Reduces CC duration by 30%.", km: "បន្ថយរយៈពេល CC 30%។" },
  },
  warrior_boots: {
    slug: "warrior_boots", nameEn: "Warrior Boots", nameKm: "ស្បែកជើងអ្នកចម្បាំង", price: 720,
    stats: { en: "+40 Movement Speed, +22 Physical Defense", km: "+40 ល្បឿន, +22 ការពារ Physical" },
    passive: { en: "Gains 4 Physical Defense per second when taking damage (max 20).", km: "ទទួលបានការពារ Physical 4 ក្នុងមួយវិនាទី (អតិបរមា 20)។" },
  },
  swift_boots: {
    slug: "swift_boots", nameEn: "Swift Boots", nameKm: "ស្បែកជើងលឿន", price: 720,
    stats: { en: "+40 Movement Speed, +15% Attack Speed", km: "+40 ល្បឿន, +15% ល្បឿនវាយ" },
    passive: { en: "None", km: "គ្មាន" },
  },
  rapid_boots: {
    slug: "rapid_boots", nameEn: "Rapid Boots", nameKm: "ស្បែកជើងរត់លឿន", price: 700,
    stats: { en: "+65 Movement Speed", km: "+65 ល្បឿន" },
    passive: { en: "Reduces Movement Speed by 30 after taking damage.", km: "បន្ថយល្បឿន 30 បន្ទាប់ពីទទួលការវាយ។" },
  },
  magic_boots: {
    slug: "magic_boots", nameEn: "Magic Boots", nameKm: "ស្បែកជើង Magic", price: 700,
    stats: { en: "+40 Movement Speed, +10 Magic Penetration", km: "+40 ល្បឿន, +10 Magic Penetration" },
    passive: { en: "None", km: "គ្មាន" },
  },
  demon_shoes: {
    slug: "demon_boots", nameEn: "Demon Shoes", nameKm: "ស្បែកជើងអារក្ស", price: 720,
    stats: { en: "+40 Movement Speed, +10 Mana Regen", km: "+40 ល្បឿន, +10 Mana Regen" },
    passive: { en: "Recovers 10% Mana after killing a minion.", km: "ប្រមូល Mana 10% បន្ទាប់ពីសម្លាប់ minion។" },
  },
  berserkers_fury: {
    slug: "berserkers_fury", nameEn: "Berserker's Fury", nameKm: "កំហឹង Berserker", price: 2350,
    stats: { en: "+65 Physical Attack, +25% Crit Chance", km: "+65 កម្លាំង Physical, +25% Crit" },
    passive: { en: "Crit hits increase Physical Attack by 5% for 2s (max 25%).", km: "Crit បង្កើនកម្លាំង Physical 5% រយៈពេល 2 វិនាទី (អតិបរមា 25%)។" },
  },
  haas_claws: {
    slug: "haas_claws", nameEn: "Haas' Claws", nameKm: "ក្រចក Haas", price: 2200,
    stats: { en: "+30 Physical Attack, +20% Attack Speed, +15% Lifesteal", km: "+30 កម្លាំង, +20% ល្បឿនវាយ, +15% Lifesteal" },
    passive: { en: "Increases Lifesteal to 30% when HP drops below 50%.", km: "បង្កើន Lifesteal ដល់ 30% ពេល HP តិចជាង 50%។" },
  },
  blade_of_despair: {
    slug: "blade_of_despair", nameEn: "Blade of Despair", nameKm: "ដាវអស់សង្ឃឹម", price: 3010,
    stats: { en: "+160 Physical Attack, +5% Movement Speed", km: "+160 កម្លាំង Physical, +5% ល្បឿន" },
    passive: { en: "Deals 25% extra damage to enemies with HP below 50%.", km: "បង្កការខូចខាត 25% បន្ថែមលើសត្រូវ HP តិចជាង 50%។" },
  },
  wind_of_nature: {
    slug: "wind_of_nature", nameEn: "Wind of Nature", nameKm: "ខ្យល់ធម្មជាតិ", price: 1910,
    stats: { en: "+15% Attack Speed, +10% Lifesteal", km: "+15% ល្បឿនវាយ, +10% Lifesteal" },
    passive: { en: "Active: Immune to Physical damage for 2s.", km: "សកម្ម: ការពារ Physical 2 វិនាទី។" },
  },
  immortality: {
    slug: "immortality", nameEn: "Immortality", nameKm: "អមតៈ", price: 2120,
    stats: { en: "+800 HP, +20 Physical Defense", km: "+800 HP, +20 ការពារ Physical" },
    passive: { en: "Revives with 16% HP after death (cooldown 210s).", km: "រស់ឡើងវិញជាមួយ HP 16% បន្ទាប់ពីស្លាប់ (Cooldown 210s)។" },
  },
  blade_of_the_heptaseas: {
    slug: "blade_of_the_heptaseas", nameEn: "Blade of the Heptaseas", nameKm: "ដាវ Heptaseas", price: 1950,
    stats: { en: "+70 Physical Attack, +250 HP", km: "+70 កម្លាំង, +250 HP" },
    passive: { en: "Next attack after 5s deals 160 + 40% Physical Attack bonus damage.", km: "ការវាយបន្ទាប់បន្សំក្រោយ 5 វិនាទី បង្កការខូចខាត 160 + 40% កម្លាំង Physical។" },
  },
  hunter_strike: {
    slug: "hunter_strike", nameEn: "Hunter Strike", nameKm: "ការវាយរបស់អ្នកប្រមាញ់", price: 2010,
    stats: { en: "+80 Physical Attack, +10% CDR", km: "+80 កម្លាំង Physical, +10% CDR" },
    passive: { en: "After 5 hits, gains 30% Movement Speed for 3s.", km: "បន្ទាប់ពីវាយ 5 ដង បង្កើនល្បឿន 30% រយៈពេល 3 វិនាទី។" },
  },
  malefic_roar: {
    slug: "malefic_roar", nameEn: "Malefic Roar", nameKm: "សម្លេងគំរាម", price: 2060,
    stats: { en: "+60 Physical Attack", km: "+60 កម្លាំង Physical" },
    passive: { en: "Attack ignores 20% of enemy Physical Defense.", km: "ការវាយមិនខ្វល់ការពារ Physical 20% របស់សត្រូវ។" },
  },
  malefic_gun: {
    slug: "malefic_gun", nameEn: "Malefic Gun", nameKm: "កាំភ្លើង Malefic", price: 2120,
    stats: { en: "+40 Physical Attack, +20% Attack Speed", km: "+40 កម្លាំង, +20% ល្បឿនវាយ" },
    passive: { en: "Increases Physical Penetration by 30%. Basic attacks increase range by 12%.", km: "បង្កើន Physical Penetration 30%។ ការវាយធម្មតាបង្កើនជួរ 12%។" },
  },
  demon_hunter_sword: {
    slug: "demon_hunter_sword", nameEn: "Demon Hunter Sword", nameKm: "ដាវអ្នកប្រមាញ់អារក្ស", price: 2180,
    stats: { en: "+35 Physical Attack, +25% Attack Speed, +10% Lifesteal", km: "+35 កម្លាំង, +25% ល្បឿនវាយ, +10% Lifesteal" },
    passive: { en: "Basic attacks deal 9% of target's current HP as bonus damage (max 60 vs minions).", km: "ការវាយធម្មតាបង្កការខូចខាត 9% នៃ HP សត្រូវ (អតិបរមា 60)។" },
  },
  corrosion_scythe: {
    slug: "corrosion_scythe", nameEn: "Corrosion Scythe", nameKm: "កូនកាំបិតច្រែះ", price: 2050,
    stats: { en: "+30 Physical Attack, +25% Attack Speed", km: "+30 កម្លាំង, +25% ល្បឿនវាយ" },
    passive: { en: "Basic attacks slow enemy Movement Speed by 5% (stack up to 3).", km: "ការវាយធម្មតាបន្ថយល្បឿនសត្រូវ 5% (ដាក់ stack បាន 3)។" },
  },
  golden_staff: {
    slug: "golden_staff", nameEn: "Golden Staff", nameKm: "ដំបងមាស", price: 2100,
    stats: { en: "+30 Physical Attack, +20% Attack Speed", km: "+30 កម្លាំង, +20% ល្បឿនវាយ" },
    passive: { en: "Basic attacks apply 2 stacks. At 3 stacks, next attack triggers extra damage.", km: "ការវាយធម្មតាដាក់ 2 stack។ នៅ 3 stack ការវាយបន្ទាប់បង្កការខូចខាតបន្ថែម។" },
  },
  rose_gold_meteor: {
    slug: "rose_gold_meteor", nameEn: "Rose Gold Meteor", nameKm: "អាចម៍ផ្កាយ Rose Gold", price: 2010,
    stats: { en: "+60 Physical Attack, +30 Magic Defense", km: "+60 កម្លាំង, +30 ការពារ Magic" },
    passive: { en: "Gains shield equal to 510 + 50% Magic Defense when HP below 30%.", km: "ទទួលបាន shield 510 + 50% ការពារ Magic ពេល HP តិចជាង 30%។" },
  },
  endless_battle: {
    slug: "endless_battle", nameEn: "Endless Battle", nameKm: "ការប្រយុទ្ធគ្មានទីបញ្ចប់", price: 2470,
    stats: { en: "+65 Physical Attack, +250 HP, +10% CDR, +8% Movement Speed", km: "+65 កម្លាំង, +250 HP, +10% CDR, +8% ល្បឿន" },
    passive: { en: "After using skill, next basic attack deals extra True Damage.", km: "បន្ទាប់ពីប្រើ skill ការវាយបន្ទាប់បន្សំបង្កការខូចខាត True Damage បន្ថែម។" },
  },
  queens_wings: {
    slug: "queens_wings", nameEn: "Queen's Wings", nameKm: "ស្លាប Queen", price: 2250,
    stats: { en: "+15 Physical Attack, +1000 HP, +10% CDR", km: "+15 កម្លាំង, +1000 HP, +10% CDR" },
    passive: { en: "Reduces damage taken by 30% and increases Spell Vamp by 40% when HP below 40%.", km: "បន្ថយការខូចខាត 30% និងបង្កើន Spell Vamp 40% ពេល HP តិចជាង 40%។" },
  },
  bloodlust_axe: {
    slug: "war_axe", nameEn: "Bloodlust Axe", nameKm: "ពូថៅចង់ឈាម", price: 1970,
    stats: { en: "+70 Physical Attack, +10% CDR", km: "+70 កម្លាំង, +10% CDR" },
    passive: { en: "Increases Spell Vamp by 20%.", km: "បង្កើន Spell Vamp 20%។" },
  },
  war_axe: {
    slug: "war_axe", nameEn: "War Axe", nameKm: "ពូថៅសង្គ្រាម", price: 2260,
    stats: { en: "+55 Physical Attack, +550 HP, +10% CDR", km: "+55 កម្លាំង, +550 HP, +10% CDR" },
    passive: { en: "Deals extra True Damage and gains Movement Speed in prolonged fights.", km: "បង្កការខូចខាត True Damage និងបង្កើនល្បឿនក្នុងការប្រយុទ្ធយូរ។" },
  },
  oracle: {
    slug: "oracle", nameEn: "Oracle", nameKm: "ទីប្រឹក្សា", price: 1860,
    stats: { en: "+850 HP, +10% CDR, +10% Heal Effect", km: "+850 HP, +10% CDR, +10% ការព្យាបាល" },
    passive: { en: "Increases Shield and HP Regen effects by 30%.", km: "បង្កើន Shield និង HP Regen 30%។" },
  },
  athenas_shield: {
    slug: "athenas_shield", nameEn: "Athena's Shield", nameKm: "ខែល Athena", price: 2150,
    stats: { en: "+900 HP, +25 Magic Defense, +20 HP Regen", km: "+900 HP, +25 ការពារ Magic, +20 HP Regen" },
    passive: { en: "Reduces Magic Damage taken by 25% for 3s (cooldown 10s).", km: "បន្ថយការខូចខាត Magic 25% រយៈពេល 3 វិនាទី (Cooldown 10s)។" },
  },
  radiant_armor: {
    slug: "radiant_armor", nameEn: "Radiant Armor", nameKm: "គ្រឿងការពារភ្លឺ", price: 1880,
    stats: { en: "+800 HP, +40 Magic Defense, +30 HP Regen", km: "+800 HP, +40 ការពារ Magic, +30 HP Regen" },
    passive: { en: "Reduces Magic Damage taken by 6-30% (increases over time).", km: "បន្ថយការខូចខាត Magic 6-30% (បង្កើនតាមពេលវេលា)។" },
  },
  antique_cuirass: {
    slug: "antique_cuirass", nameEn: "Antique Cuirass", nameKm: "គ្រឿងការពារបុរាណ", price: 2170,
    stats: { en: "+920 HP, +40 Physical Defense, +20 HP Regen", km: "+920 HP, +40 ការពារ Physical, +20 HP Regen" },
    passive: { en: "Reduces enemy Physical Attack by 6% per stack (max 3).", km: "បន្ថយកម្លាំង Physical សត្រូវ 6% ក្នុង stack (អតិបរមា 3)។" },
  },
  dominance_ice: {
    slug: "dominance_ice", nameEn: "Dominance Ice", nameKm: "ទឹកកកគ្រប់គ្រង", price: 2010,
    stats: { en: "+500 HP, +30 Physical Defense, +10% CDR", km: "+500 HP, +30 ការពារ Physical, +10% CDR" },
    passive: { en: "Reduces Shield/HP Regen of nearby enemies by 50%, reduces Attack Speed by 30%.", km: "បន្ថយ Shield/HP Regen សត្រូវជិតខាង 50%, បន្ថយល្បឿនវាយ 30%។" },
  },
  blade_armor: {
    slug: "blade_armor", nameEn: "Blade Armor", nameKm: "គ្រឿងការពារដាវ", price: 2060,
    stats: { en: "+90 Physical Defense", km: "+90 ការពារ Physical" },
    passive: { en: "Reflects 25% of enemy's Physical Attack back as damage.", km: "បញ្ចាំងកម្លាំង Physical សត្រូវ 25% ត្រឡប់វិញជាការខូចខាត។" },
  },
  brute_force_breastplate: {
    slug: "brute_force_breastplate", nameEn: "Brute Force Breastplate", nameKm: "គ្រឿងការពារកម្លាំង", price: 2050,
    stats: { en: "+770 HP, +45 Physical Defense", km: "+770 HP, +45 ការពារ Physical" },
    passive: { en: "Increases Movement Speed and Physical/Magic Defense with each skill hit.", km: "បង្កើនល្បឿន និងការពារ Physical/Magic ជាមួយការវាយ skill។" },
  },
  conceal: {
    slug: "conceal", nameEn: "Conceal", nameKm: "លាក់ខ្លួន", price: 1500,
    stats: { en: "+Movement Speed", km: "+ល្បឿន" },
    passive: { en: "Active: Conceals self and nearby allies for 3s.", km: "សកម្ម: លាក់ខ្លួន និងសម្ព័ន្ធមិត្តជិតខាងរយៈពេល 3 វិនាទី។" },
  },
  cursed_helmet: {
    slug: "cursed_helmet", nameEn: "Cursed Helmet", nameKm: "មួកជាប់បណ្តាសា", price: 1760,
    stats: { en: "+1200 HP, +25 Magic Defense", km: "+1200 HP, +25 ការពារ Magic" },
    passive: { en: "Deals Magic damage equal to 1.5% of target's Max HP per second.", km: "បង្កការខូចខាត Magic 1.5% នៃ HP សត្រូវ ក្នុងមួយវិនាទី។" },
  },
  lightning_truncheon: {
    slug: "lightning_truncheon", nameEn: "Lightning Truncheon", nameKm: "ដំបងផ្លេកបន្ទោរ", price: 2250,
    stats: { en: "+75 Magic Power, +10% CDR, +300 Mana", km: "+75 Magic Power, +10% CDR, +300 Mana" },
    passive: { en: "Skills deal Magic damage equal to 20-100% of Magic Power to 3 enemies.", km: "Skill បង្កការខូចខាត Magic 20-100% នៃ Magic Power ទៅសត្រូវ 3 នាក់។" },
  },
  holy_crystal: {
    slug: "holy_crystal", nameEn: "Holy Crystal", nameKm: "គ្រីស្តាល់បរិសុទ្ធ", price: 2180,
    stats: { en: "+100 Magic Power", km: "+100 Magic Power" },
    passive: { en: "Increases total Magic Power by 21-35% based on level.", km: "បង្កើន Magic Power សរុប 21-35% តាមកម្រិត។" },
  },
  divine_glaive: {
    slug: "divine_glaive", nameEn: "Divine Glaive", nameKm: "ដាវ Divine", price: 2000,
    stats: { en: "+65 Magic Power", km: "+65 Magic Power" },
    passive: { en: "Increases Magic Penetration by 30% when enemy has high Magic Defense.", km: "បង្កើន Magic Penetration 30% ពេលសត្រូវមានការពារ Magic ខ្ពស់។" },
  },
  concentrated_energy: {
    slug: "concentrated_energy", nameEn: "Concentrated Energy", nameKm: "ថាមពលប្រមូលផ្តុំ", price: 1980,
    stats: { en: "+70 Magic Power, +300 HP, +20% Spell Vamp", km: "+70 Magic Power, +300 HP, +20% Spell Vamp" },
    passive: { en: "Recovers 5% HP after killing enemy hero.", km: "ប្រមូល HP 5% បន្ទាប់ពីសម្លាប់សត្រូវ។" },
  },
  winter_truncheon: {
    slug: "winter_truncheon", nameEn: "Winter Truncheon", nameKm: "ដំបងរដូវរងា", price: 2050,
    stats: { en: "+70 Magic Power, +500 HP", km: "+70 Magic Power, +500 HP" },
    passive: { en: "Active: Freeze self for 2s, immune to all damage.", km: "សកម្ម: បង្កកខ្លួន 2 វិនាទី មិនខ្វល់ការខូចខាតទាំងអស់។" },
  },
  clock_of_destiny: {
    slug: "clock_of_destiny", nameEn: "Clock of Destiny", nameKm: "នាឡិកាវាសនា", price: 1880,
    stats: { en: "+60 Magic Power, +615 HP", km: "+60 Magic Power, +615 HP" },
    passive: { en: "Gains 1 stack per 1s (max 10). Each stack +10 Magic Power and +30 HP.", km: "ទទួល 1 stack ក្នុងមួយវិនាទី (អតិបរមា 10)។ Stack នីមួយៗ +10 Magic Power និង +30 HP។" },
  },
  enchanted_talisman: {
    slug: "enchanted_talisman", nameEn: "Enchanted Talisman", nameKm: "អំណោយមន្តអាគម", price: 1870,
    stats: { en: "+55 Magic Power, +20% CDR, +250 HP, +10 Mana Regen", km: "+55 Magic Power, +20% CDR, +250 HP, +10 Mana Regen" },
    passive: { en: "Recovers 10% Mana every 10s.", km: "ប្រមូល Mana 10% រៀងរាល់ 10 វិនាទី។" },
  },
  ice_queen_wand: {
    slug: "ice_queen_wand", nameEn: "Ice Queen Wand", nameKm: "ដំបងមហាក្សត្រីទឹកកក", price: 2100,
    stats: { en: "+75 Magic Power, +10% CDR, +150 HP", km: "+75 Magic Power, +10% CDR, +150 HP" },
    passive: { en: "Skills slow enemies by 15% for 1.5s.", km: "Skill បន្ថយល្បឿនសត្រូវ 15% រយៈពេល 1.5 វិនាទី។" },
  },
  glowing_wand: {
    slug: "glowing_wand", nameEn: "Glowing Wand", nameKm: "ដំបងភ្លឺ", price: 2100,
    stats: { en: "+75 Magic Power, +5% Movement Speed, +400 HP", km: "+75 Magic Power, +5% ល្បឿន, +400 HP" },
    passive: { en: "Skills burn enemies for 3s (1%/2%/3% Max HP as Magic damage).", km: "Skill ដុតសត្រូវ 3 វិនាទី (1%/2%/3% HP ជាការខូចខាត Magic)។" },
  },
  blood_wings: {
    slug: "blood_wings", nameEn: "Blood Wings", nameKm: "ស្លាបឈាម", price: 2600,
    stats: { en: "+150 Magic Power, +500 HP", km: "+150 Magic Power, +500 HP" },
    passive: { en: "Gains Shield equal to 150% Magic Power.", km: "ទទួលបាន Shield ស្មើ 150% Magic Power។" },
  },
  sea_halberd: {
    slug: "sea_halberd", nameEn: "Sea Halberd", nameKm: "លំពែងសមុទ្រ", price: 2050,
    stats: { en: "+70 Physical Attack, +25% Attack Speed", km: "+70 កម្លាំង Physical, +25% ល្បឿនវាយ" },
    passive: { en: "Reduces enemy Shield/HP Regen by 50% for 3s.", km: "បន្ថយ Shield/HP Regen សត្រូវ 50% រយៈពេល 3 វិនាទី។" },
  },
  flask_of_the_oasis: {
    slug: "flask_of_the_oasis", nameEn: "Flask of the Oasis", nameKm: "ដបទឹក Oasis", price: 1700,
    stats: { en: "+300 HP, +10% CDR, +10% Heal Effect", km: "+300 HP, +10% CDR, +10% ការព្យាបាល" },
    passive: { en: "Increases Shield and HP Regen effects by 15%.", km: "បង្កើន Shield និង HP Regen 15%។" },
  },
  fleeting_time: {
    slug: "fleeting_time", nameEn: "Fleeting Time", nameKm: "ពេលវេលាកន្លងផុត", price: 2050,
    stats: { en: "+500 HP, +20% CDR, +250 Mana", km: "+500 HP, +20% CDR, +250 Mana" },
    passive: { en: "Reduces Ultimate Cooldown by 30% after killing/assisting.", km: "បន្ថយ Cooldown Ultimate 30% បន្ទាប់ពីសម្លាប់ ឬជួយ។" },
  },
};

export type BuildVariant = {
  titleEn: string;
  titleKm: string;
  emblem: string;
  talents: string[];
  spells: string[];
  items: string[];
};

export type HeroBuild = {
  id: string;
  name: string;
  variants: BuildVariant[];
};

  export const HERO_BUILDS: Record<string, HeroBuild> = {
  // ============ ADDITIONAL ASSASSINS ============
  aamon: {
    id: "aamon", name: "Aamon",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Agility", "Seasoned Hunter", "War Cry"],
        spells: ["retribution"],
        items: ["arcane_boots", "genius_wand", "holy_crystal", "divine_glaive", "blood_wings", "immortality"] },
    ],
  },
  hanzo: {
    id: "hanzo", name: "Hanzo",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Master Assassin", "Killing Spree"],
        spells: ["retribution"],
        items: ["tough_boots", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "queens_wings", "immortality"] },
    ],
  },
  helcurt: {
    id: "helcurt", name: "Helcurt",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Master Assassin", "Killing Spree"],
        spells: ["retribution"],
        items: ["tough_boots", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "queens_wings", "immortality"] },
    ],
  },
  joy: {
    id: "joy", name: "Joy",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Seasoned Hunter", "Killing Spree"],
        spells: ["retribution"],
        items: ["tough_boots", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "queens_wings", "immortality"] },
    ],
  },
  nolan: {
    id: "nolan", name: "Nolan",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Seasoned Hunter", "Lethal Ignition"],
        spells: ["retribution"],
        items: ["tough_boots", "blade_of_the_heptaseas", "sky_piercer", "malefic_roar", "endless_battle", "immortality"] },
    ],
  },
  saber: {
    id: "saber", name: "Saber",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Master Assassin", "Killing Spree"],
        spells: ["retribution"],
        items: ["tough_boots", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "queens_wings", "immortality"] },
    ],
  },
  selena: {
    id: "selena", name: "Selena",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Rupture", "Weapon Master", "Lethal Ignition"],
        spells: ["flicker"],
        items: ["arcane_boots", "starlium_scythe", "lightning_truncheon", "divine_glaive", "holy_crystal", "blood_wings"] },
    ],
  },
  benedetta: {
    id: "benedetta", name: "Benedetta",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Festival of Blood", "Lethal Ignition"],
        spells: ["retribution"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "malefic_roar", "blade_of_despair", "sea_halberd"] },
    ],
  },
  suyou: {
    id: "suyou", name: "Suyou",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Seasoned Hunter", "Killing Spree"],
        spells: ["retribution"],
        items: ["tough_boots", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "queens_wings", "immortality"] },
    ],
  },
  julian: {
    id: "julian", name: "Julian",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Rupture", "Seasoned Hunter", "Lethal Ignition"],
        spells: ["retribution"],
        items: ["arcane_boots", "feather_of_heaven", "concentrated_energy", "genius_wand", "holy_crystal", "divine_glaive"] },
    ],
  },
  // ============ ADDITIONAL MARKSMEN ============
  bruno: {
    id: "bruno", name: "Bruno",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["swift_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "blade_of_despair"] },
    ],
  },
  clint: {
    id: "clint", name: "Clint",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "assassin",
        talents: ["Rupture", "Master Assassin", "Lethal Ignition"],
        spells: ["flicker"],
        items: ["rapid_boots", "endless_battle", "blade_of_despair", "berserkers_fury", "malefic_gun", "great_dragon_spear"] },
    ],
  },
  granger: {
    id: "granger", name: "Granger",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["swift_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "blade_of_despair"] },
    ],
  },
  irithel: {
    id: "irithel", name: "Irithel",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Quantum Charge"],
        spells: ["sprint"],
        items: ["swift_boots", "berserkers_fury", "windtalker", "blade_of_despair", "malefic_roar", "rose_gold_meteor"] },
    ],
  },
  karrie: {
    id: "karrie", name: "Karrie",
    variants: [
      { titleEn: "Attack Speed", titleKm: "ល្បឿនវាយ", emblem: "marksman",
        talents: ["Swift", "Weapon Master", "Quantum Charge"],
        spells: ["inspire"],
        items: ["corrosion_scythe", "golden_staff", "demon_hunter_sword", "malefic_gun", "rose_gold_meteor", "wind_of_nature"] },
    ],
  },
  kimmy: {
    id: "kimmy", name: "Kimmy",
    variants: [
      { titleEn: "Magic DPS", titleKm: "Magic DPS", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["arcane_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  layla: {
    id: "layla", name: "Layla",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["swift_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "blade_of_despair"] },
    ],
  },
  lesley: {
    id: "lesley", name: "Lesley",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["swift_boots", "berserkers_fury", "haas_claws", "malefic_roar", "blade_of_despair", "immortality"] },
    ],
  },
  moskov: {
    id: "moskov", name: "Moskov",
    variants: [
      { titleEn: "Attack Speed", titleKm: "ល្បឿនវាយ", emblem: "marksman",
        talents: ["Swift", "Weapons Master", "Quantum Charge"],
        spells: ["inspire"],
        items: ["corrosion_scythe", "golden_staff", "demon_hunter_sword", "malefic_gun", "wind_of_nature", "immortality"] },
    ],
  },
  natan: {
    id: "natan", name: "Natan",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["swift_boots", "berserkers_fury", "haas_claws", "windtalker", "malefic_roar", "blade_of_despair"] },
    ],
  },
  popol_and_kupa: {
    id: "popol_and_kupa", name: "Popol and Kupa",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "marksman",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["retribution"],
        items: ["swift_boots", "berserkers_fury", "windtalker", "blade_of_despair", "rose_gold_meteor", "malefic_roar"] },
    ],
  },
  yi_sun_shin: {
    id: "yi_sun_shin", name: "Yi Sun-shin",
    variants: [
      { titleEn: "Hybrid", titleKm: "Hybrid", emblem: "assassin",
        talents: ["Rupture", "Seasoned Hunter", "Killing Spree"],
        spells: ["retribution"],
        items: ["tough_boots", "hunter_strike", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "immortality"] },
    ],
  },
  // ============ ADDITIONAL TANKS ============
  baxia: {
    id: "baxia", name: "Baxia",
    variants: [
      { titleEn: "Roam", titleKm: "រុករក", emblem: "tank",
        talents: ["Vitality", "Seasoned Hunter", "Concussive Blast"],
        spells: ["retribution"],
        items: ["tough_boots", "cursed_helmet", "chastise_pauldron", "radiant_armor", "antique_cuirass", "immortality"] },
    ],
  },
  belerick: {
    id: "belerick", name: "Belerick",
    variants: [
      { titleEn: "Roam", titleKm: "រុករក", emblem: "tank",
        talents: ["Vitality", "Tenacity", "Brave Smite"],
        spells: ["vengeance"],
        items: ["rapid_boots", "dominance_ice", "antique_cuirass", "guardian_helmet", "blade_armor", "radiant_armor"] },
    ],
  },
  grock: {
    id: "grock", name: "Grock",
    variants: [
      { titleEn: "Roam", titleKm: "រុករក", emblem: "tank",
        talents: ["Vitality", "Tenacity", "Concussive Blast"],
        spells: ["flicker"],
        items: ["rapid_boots", "thunder_belt", "dominance_ice", "blade_armor", "guardian_helmet", "antique_cuirass"] },
    ],
  },
  hilda: {
    id: "hilda", name: "Hilda",
    variants: [
      { titleEn: "Roam", titleKm: "រុករក", emblem: "tank",
        talents: ["Vitality", "Tenacity", "Concussive Blast"],
        spells: ["flicker"],
        items: ["tough_boots", "dominance_ice", "athenas_shield", "antique_cuirass", "radiant_armor", "immortality"] },
    ],
  },
  johnson: {
    id: "johnson", name: "Johnson",
    variants: [
      { titleEn: "Roam", titleKm: "រុករក", emblem: "tank",
        talents: ["Vitality", "Tenacity", "Concussive Blast"],
        spells: ["flicker"],
        items: ["tough_boots", "dominance_ice", "athenas_shield", "antique_cuirass", "radiant_armor", "immortality"] },
    ],
  },
  lolita: {
    id: "lolita", name: "Lolita",
    variants: [
      { titleEn: "Roam", titleKm: "រុករក", emblem: "tank",
        talents: ["Vitality", "Tenacity", "Concussive Blast"],
        spells: ["flicker"],
        items: ["tough_boots", "dominance_ice", "athenas_shield", "antique_cuirass", "radiant_armor", "immortality"] },
    ],
  },
  uranus: {
    id: "uranus", name: "Uranus",
    variants: [
      { titleEn: "EXP", titleKm: "EXP", emblem: "tank",
        talents: ["Vitality", "Tenacity", "Concussive Blast"],
        spells: ["flicker"],
        items: ["tough_boots", "oracle", "blade_armor", "thunder_belt", "dominance_ice", "antique_cuirass"] },
    ],
  },
  // ============ ADDITIONAL FIGHTERS ============
  alucard: {
    id: "alucard", name: "Alucard",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  badang: {
    id: "badang", name: "Badang",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  balmond: {
    id: "balmond", name: "Balmond",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  freya: {
    id: "freya", name: "Freya",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "fighter",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["tough_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "immortality"] },
    ],
  },
  guinevere: {
    id: "guinevere", name: "Guinevere",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Rupture", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["arcane_boots", "glowing_wand", "holy_crystal", "divine_glaive", "blood_wings", "immortality"] },
    ],
  },
  jawhead: {
    id: "jawhead", name: "Jawhead",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  khaleed: {
    id: "khaleed", name: "Khaleed",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "war_axe", "blade_of_the_heptaseas", "hunter_strike", "queens_wings", "immortality"] },
    ],
  },
  lapu_lapu: {
    id: "lapu_lapu", name: "Lapu-Lapu",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  leomord: {
    id: "leomord", name: "Leomord",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  martis: {
    id: "martis", name: "Martis",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  masha: {
    id: "masha", name: "Masha",
    variants: [
      { titleEn: "Attack Speed", titleKm: "ល្បឿនវាយ", emblem: "fighter",
        talents: ["Fatal", "Weapon Master", "Quantum Charge"],
        spells: ["inspire"],
        items: ["rapid_boots", "sea_halberd", "haas_claws", "windtalker", "berserkers_fury", "malefic_roar"] },
    ],
  },
  minsitthar: {
    id: "minsitthar", name: "Minsitthar",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  phoveus: {
    id: "phoveus", name: "Phoveus",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  roger: {
    id: "roger", name: "Roger",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  ruby: {
    id: "ruby", name: "Ruby",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  silvanna: {
    id: "silvanna", name: "Silvanna",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  sun: {
    id: "sun", name: "Sun",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "fighter",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["tough_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "immortality"] },
    ],
  },
  terizla: {
    id: "terizla", name: "Terizla",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  thamuz: {
    id: "thamuz", name: "Thamuz",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  x_borg: {
    id: "x_borg", name: "X.Borg",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Thrill", "Seasoned Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["tough_boots", "war_axe", "sky_piercer", "immortality", "brute_force_breastplate", "ice_queen_wand"] },
    ],
  },
  yin: {
    id: "yin", name: "Yin",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  zilong: {
    id: "zilong", name: "Zilong",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "fighter",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["inspire"],
        items: ["tough_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "immortality"] },
    ],
  },
  argus: {
    id: "argus", name: "Argus",
    variants: [
      { titleEn: "Crit", titleKm: "Crit ខ្លាំង", emblem: "fighter",
        talents: ["Fatal", "Weapon Master", "Weakness Finder"],
        spells: ["flicker"],
        items: ["tough_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "immortality"] },
    ],
  },
  dyrroth: {
    id: "dyrroth", name: "Dyrroth",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  aldous: {
    id: "aldous", name: "Aldous",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  aulus: {
    id: "aulus", name: "Aulus",
    variants: [
      { titleEn: "Jungle", titleKm: "ព្រៃ", emblem: "fighter",
        talents: ["Firmness", "Seasoned Hunter", "War Cry"],
        spells: ["retribution"],
        items: ["rapid_boots", "war_axe", "brute_force_breastplate", "malefic_roar", "rose_gold_meteor", "queens_wings"] },
    ],
  },
  barats: {
    id: "barats", name: "Barats",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  cici: {
    id: "cici", name: "Cici",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  fredrinn: {
    id: "fredrinn", name: "Fredrinn",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  kalea: {
    id: "kalea", name: "Kalea",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  lukas: {
    id: "lukas", name: "Lukas",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Firmness", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "hunter_strike", "war_axe", "queens_wings", "malefic_roar", "rose_gold_meteor"] },
    ],
  },
  sora: {
    id: "sora", name: "Sora",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "fighter",
        talents: ["Rupture", "Festival of Blood", "Brave Smite"],
        spells: ["flicker"],
        items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"] },
    ],
  },
  // ============ ADDITIONAL MAGES ============
  aurora: {
    id: "aurora", name: "Aurora",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  cecilion: {
    id: "cecilion", name: "Cecilion",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Wilderness Blessing", "Temporal Reign"],
        spells: ["flicker"],
        items: ["demon_boots", "glowing_wand", "wishing_lantern", "enchanted_talisman", "blood_wings", "divine_glaive"] },
    ],
  },
  change: {
    id: "change", name: "Chang'e",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  cyclops: {
    id: "cyclops", name: "Cyclops",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "holy_crystal", "divine_glaive", "blood_wings", "immortality"] },
    ],
  },
  eudora: {
    id: "eudora", name: "Eudora",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "holy_crystal", "divine_glaive", "blood_wings", "immortality"] },
    ],
  },
  gord: {
    id: "gord", name: "Gord",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  harith: {
    id: "harith", name: "Harith",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "starlium_scythe", "feather_of_heaven", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  harley: {
    id: "harley", name: "Harley",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Rupture", "Seasoned Hunter", "Lethal Ignition"],
        spells: ["retribution"],
        items: ["magic_boots", "genius_wand", "holy_crystal", "divine_glaive", "blood_wings", "immortality"] },
    ],
  },
  kadita: {
    id: "kadita", name: "Kadita",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "holy_crystal", "divine_glaive", "blood_wings", "immortality"] },
    ],
  },
  kagura: {
    id: "kagura", name: "Kagura",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Rupture", "Weapon Master", "Lethal Ignition"],
        spells: ["flicker"],
        items: ["arcane_boots", "genius_wand", "divine_glaive", "holy_crystal", "lightning_truncheon", "blood_wings"] },
    ],
  },
  lunox: {
    id: "lunox", name: "Lunox",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  luo_yi: {
    id: "luo_yi", name: "Luo Yi",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  lylia: {
    id: "lylia", name: "Lylia",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  nana: {
    id: "nana", name: "Nana",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  novaria: {
    id: "novaria", name: "Novaria",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Wilderness Blessing", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "holy_crystal", "winter_crown", "divine_glaive", "blood_wings", "immortality"] },
    ],
  },
  odette: {
    id: "odette", name: "Odette",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  pharsa: {
    id: "pharsa", name: "Pharsa",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["arcane_boots", "clock_of_destiny", "lightning_truncheon", "genius_wand", "holy_crystal", "blood_wings"] },
    ],
  },
  vale: {
    id: "vale", name: "Vale",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  valentina: {
    id: "valentina", name: "Valentina",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  valir: {
    id: "valir", name: "Valir",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  vexana: {
    id: "vexana", name: "Vexana",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  xavier: {
    id: "xavier", name: "Xavier",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  yve: {
    id: "yve", name: "Yve",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  zetian: {
    id: "zetian", name: "Zetian",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "enchanted_talisman", "concentrated_energy", "wishing_lantern", "divine_glaive", "blood_wings"] },
    ],
  },
  zhask: {
    id: "zhask", name: "Zhask",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  zhuxin: {
    id: "zhuxin", name: "Zhuxin",
    variants: [
      { titleEn: "Burst", titleKm: "Burst លឿន", emblem: "mage",
        talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
        spells: ["flicker"],
        items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"] },
    ],
  },
  // ============ ADDITIONAL SUPPORTS ============
  angela: {
    id: "angela", name: "Angela",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Agility", "Pull Yourself Together", "Focusing Mark"],
        spells: ["flicker"],
        items: ["magic_boots", "favor", "flask_of_the_oasis", "enchanted_talisman", "fleeting_time", "holy_crystal"] },
    ],
  },
  chip: {
    id: "chip", name: "Chip",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Pull Yourself Together", "Bargain Hunter", "Focusing Mark"],
        spells: ["flicker"],
        items: ["tough_boots", "dominance_ice", "antique_cuirass", "athenas_shield", "radiant_armor", "immortality"] },
    ],
  },
  diggie: {
    id: "diggie", name: "Diggie",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Agility", "Pull Yourself Together", "Focusing Mark"],
        spells: ["revitalize"],
        items: ["demon_boots", "flask_of_the_oasis", "fleeting_time", "immortality", "guardian_helmet", "chastise_pauldron"] },
    ],
  },
  estes: {
    id: "estes", name: "Estes",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Agility", "Pull Yourself Together", "Focusing Mark"],
        spells: ["purify"],
        items: ["demon_boots", "favor", "flask_of_the_oasis", "enchanted_talisman", "fleeting_time", "holy_crystal"] },
    ],
  },
  floryn: {
    id: "floryn", name: "Floryn",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Pull Yourself Together", "Bargain Hunter", "Focusing Mark"],
        spells: ["purify"],
        items: ["demon_boots", "favor", "flask_of_the_oasis", "enchanted_talisman", "fleeting_time", "holy_crystal"] },
    ],
  },
  kaja: {
    id: "kaja", name: "Kaja",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Agility", "Pull Yourself Together", "Focusing Mark"],
        spells: ["flicker"],
        items: ["rapid_boots", "thunder_belt", "fleeting_time", "dominance_ice", "immortality", "radiant_armor"] },
    ],
  },
  mathilda: {
    id: "mathilda", name: "Mathilda",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Pull Yourself Together", "Bargain Hunter", "Focusing Mark"],
        spells: ["flicker"],
        items: ["tough_boots", "dominance_ice", "antique_cuirass", "athenas_shield", "radiant_armor", "immortality"] },
    ],
  },
  rafaela: {
    id: "rafaela", name: "Rafaela",
    variants: [
      { titleEn: "Support", titleKm: "ជួយ", emblem: "support",
        talents: ["Agility", "Pull Yourself Together", "Focusing Mark"],
        spells: ["flicker"],
        items: ["demon_boots", "favor", "flask_of_the_oasis", "enchanted_talisman", "fleeting_time", "holy_crystal"] },
    ],
  },
};
// ============ AUTO-GENERATE BUILDS BY ROLE ============
type RoleBuildTemplate = {
  emblem: string;
  talents: string[];
  spells: string[];
  items: string[];
  titleEn: string;
  titleKm: string;
};
const ROLE_TEMPLATES: Record<string, RoleBuildTemplate> = {
  assassin: {
    emblem: "assassin",
    talents: ["Rupture", "Master Assassin", "Killing Spree"],
    spells: ["retribution", "execute"],
    items: ["tough_boots", "blade_of_the_heptaseas", "malefic_roar", "endless_battle", "queens_wings", "immortality"],
    titleEn: "Burst", titleKm: "Burst លឿន",
  },
  marksman: {
    emblem: "marksman",
    talents: ["Fatal", "Weapon Master", "Weakness Finder"],
    spells: ["inspire", "flicker"],
    items: ["swift_boots", "haas_claws", "berserkers_fury", "windtalker", "malefic_roar", "immortality"],
    titleEn: "Crit", titleKm: "Crit ខ្លាំង",
  },
  tank: {
    emblem: "tank",
    talents: ["Vitality", "Tenacity", "Concussive Blast"],
    spells: ["flicker"],
    items: ["tough_boots", "dominance_ice", "athenas_shield", "antique_cuirass", "radiant_armor", "immortality"],
    titleEn: "Roam", titleKm: "រុករក",
  },
  fighter: {
    emblem: "fighter",
    talents: ["Rupture", "Festival of Blood", "Brave Smite"],
    spells: ["flicker"],
    items: ["tough_boots", "blade_of_the_heptaseas", "hunter_strike", "war_axe", "queens_wings", "immortality"],
    titleEn: "Burst", titleKm: "Burst លឿន",
  },
  mage: {
    emblem: "mage",
    talents: ["Inspire", "Bargain Hunter", "Impure Rage"],
    spells: ["flicker", "flameshot"],
    items: ["magic_boots", "glowing_wand", "ice_queen_wand", "holy_crystal", "divine_glaive", "blood_wings"],
    titleEn: "Burst", titleKm: "Burst លឿន",
  },
  support: {
    emblem: "support",
    talents: ["Pull Yourself Together", "Bargain Hunter", "Focusing Mark"],
    spells: ["flicker"],
    items: ["demon_boots", "favor", "flask_of_the_oasis", "enchanted_talisman", "fleeting_time", "holy_crystal"],
    titleEn: "Support", titleKm: "ជួយ",
  },
};
export function getBuild(heroId: string, heroName: string, role: string): HeroBuild {
  if (HERO_BUILDS[heroId]) return HERO_BUILDS[heroId];
  const tpl = ROLE_TEMPLATES[role] || ROLE_TEMPLATES.fighter;
  return {
    id: heroId,
    name: heroName,
    variants: [
      {
        titleEn: tpl.titleEn,
        titleKm: tpl.titleKm,
        emblem: tpl.emblem,
        talents: tpl.talents,
        spells: tpl.spells,
        items: tpl.items,
      },
    ],
  };
}
