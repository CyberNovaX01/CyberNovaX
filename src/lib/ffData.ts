export type FFCharacter = {
  id: string;
  name: string;
  role: "Rusher" | "Camper" | "Support" | "Balanced";
  tier: "S" | "A" | "B";
  skill: string;
  skillDesc: string;
  active: string;
  price: string;
};

export type FFWeapon = {
  id: string;
  name: string;
  type: "AR" | "SMG" | "Sniper" | "Shotgun" | "Pistol" | "LMG";
  damage: number;
  rate: number;
  range: number;
  ammo: number;
  tier: "S" | "A" | "B";
};

export type FFPet = {
  id: string;
  name: string;
  skill: string;
  skillDesc: string;
  tier: "S" | "A" | "B";
};

export type FFMap = {
  id: string;
  name: string;
  size: "Small" | "Medium" | "Large";
  mode: string;
  desc: string;
};

export const FF_CHARACTERS: FFCharacter[] = [
  { id: "alok", name: "Alok", role: "Rusher", tier: "S", skill: "Drop the Beat", skillDesc: "Aura ផ្តល់ movement speed + heal", active: "DJ Aura", price: "599💎" },
  { id: "chrono", name: "Chrono", role: "Rusher", tier: "S", skill: "Time Turner", skillDesc: "Shield ដែលបាញ់ត្រឡប់", active: "Time Turner", price: "499💎" },
  { id: "kelly", name: "Kelly", role: "Rusher", tier: "S", skill: "Dash", skillDesc: "Movement speed ខ្ពស់ + sprint", active: "Dash", price: "Free" },
  { id: "hayato", name: "Hayato", role: "Rusher", tier: "A", skill: "Bushido", skillDesc: "Armor pen ពេល HP ទាប", active: "Bushido", price: "499💎" },
  { id: "dj-alok", name: "DJ Alok", role: "Rusher", tier: "S", skill: "Drop the Beat", skillDesc: "Aura boost", active: "DJ Aura", price: "599💎" },
  { id: "wukong", name: "Wukong", role: "Rusher", tier: "A", skill: "Transform", skillDesc: "បំប្លែងខ្លួន", active: "Transform", price: "499💎" },
  { id: "k", name: "K (Captain Booyah)", role: "Support", tier: "S", skill: "Master of All", skillDesc: "Heal + EP mode", active: "Master of All", price: "599💎" },
  { id: "skyler", name: "Skyler", role: "Support", tier: "A", skill: "Riptide Rhythm", skillDesc: "AoE damage + shield break", active: "Riptide", price: "499💎" },
  { id: "dimitri", name: "Dimitri", role: "Support", tier: "S", skill: "Healing Heart", skillDesc: "Heal + revive teammate", active: "Healing Heart", price: "599💎" },
  { id: "thiva", name: "Thiva", role: "Support", tier: "A", skill: "Vital Vibes", skillDesc: "Speed boost + rescue", active: "Vital Vibes", price: "499💎" },
  { id: "xayne", name: "Xayne", role: "Rusher", tier: "A", skill: "Xtreme Encounter", skillDesc: "Extra damage to shields", active: "Xtreme", price: "599💎" },
  { id: "jota", name: "Jota", role: "Rusher", tier: "A", skill: "Sustained Raids", skillDesc: "HP regen ពេល kill", active: "Sustained Raids", price: "499💎" },
  { id: "wolfrahh", name: "Wolfrahh", role: "Camper", tier: "A", skill: "Limelight", skillDesc: "Damage reduction", active: "Limelight", price: "499💎" },
  { id: "maro", name: "Maro", role: "Camper", tier: "A", skill: "Falcon Fervor", skillDesc: "Damage boost ពេលចម្ងាយ", active: "Falcon Fervor", price: "499💎" },
  { id: "laura", name: "Laura", role: "Camper", tier: "S", skill: "Sharp Shooter", skillDesc: "Accuracy boost ពេល scope", active: "Sharp Shooter", price: "599💎" },
  { id: "moco", name: "Moco", role: "Camper", tier: "A", skill: "Hacker's Eye", skillDesc: "Tag enemies", active: "Hacker's Eye", price: "499💎" },
  { id: "sks", name: "SKS", role: "Camper", tier: "A", skill: "Gunslinger", skillDesc: "Weapon accuracy + damage", active: "Gunslinger", price: "499💎" },
  { id: "shirou", name: "Shirou", role: "Camper", tier: "S", skill: "Damage Transfer", skillDesc: "Tag enemies + reveal HP", active: "Damage Transfer", price: "599💎" },
  { id: "antonio", name: "Antonio", role: "Rusher", tier: "B", skill: "Gangster's Spirit", skillDesc: "HP boost", active: "Gangster's Spirit", price: "499💎" },
  { id: "a124", name: "A124", role: "Support", tier: "B", skill: "Thrill of Battle", skillDesc: "EP conversion", active: "Thrill of Battle", price: "499💎" },
  { id: "kapella", name: "Kapella", role: "Support", tier: "B", skill: "Healing Song", skillDesc: "Heal teammate", active: "Healing Song", price: "499💎" },
  { id: "ford", name: "Ford", role: "Support", tier: "B", skill: "Iron Will", skillDesc: "Damage reduction", active: "Iron Will", price: "499💎" },
  { id: "joseph", name: "Joseph", role: "Rusher", tier: "B", skill: "Nutty Movement", skillDesc: "Movement boost", active: "Nutty Movement", price: "499💎" },
  { id: "nairi", name: "Nairi", role: "Support", tier: "A", skill: "Ice Iron", skillDesc: "Damage to vehicles + heal", active: "Ice Iron", price: "599💎" },
  { id: "ryden", name: "Ryden", role: "Camper", tier: "A", skill: "Manic", skillDesc: "Reduce CD ពេល elimination", active: "Manic", price: "599💎" },
];

export const FF_WEAPONS: FFWeapon[] = [
  { id: "m1887", name: "M1887", type: "Shotgun", damage: 100, rate: 30, range: 20, ammo: 2, tier: "S" },
  { id: "mp40", name: "MP40", type: "SMG", damage: 48, rate: 88, range: 30, ammo: 30, tier: "S" },
  { id: "m1014", name: "M1014", type: "Shotgun", damage: 94, rate: 42, range: 18, ammo: 6, tier: "S" },
  { id: "ak47", name: "AK47", type: "AR", damage: 61, rate: 62, range: 75, ammo: 30, tier: "S" },
  { id: "m4a1", name: "M4A1", type: "AR", damage: 55, rate: 68, range: 78, ammo: 30, tier: "A" },
  { id: "scarl", name: "Scar-L", type: "AR", damage: 56, rate: 70, range: 72, ammo: 30, tier: "A" },
  { id: "ump", name: "UMP", type: "SMG", damage: 48, rate: 72, range: 35, ammo: 30, tier: "A" },
  { id: "vector", name: "Vector", type: "SMG", damage: 44, rate: 92, range: 28, ammo: 19, tier: "A" },
  { id: "thompson", name: "Thompson", type: "SMG", damage: 50, rate: 80, range: 30, ammo: 30, tier: "A" },
  { id: "awm", name: "AWM", type: "Sniper", damage: 100, rate: 8, range: 95, ammo: 5, tier: "S" },
  { id: "kar98k", name: "Kar98k", type: "Sniper", damage: 90, rate: 12, range: 92, ammo: 5, tier: "S" },
  { id: "m82b", name: "M82B", type: "Sniper", damage: 100, rate: 10, range: 95, ammo: 5, tier: "S" },
  { id: "sks", name: "SKS", type: "Sniper", damage: 65, rate: 25, range: 85, ammo: 10, tier: "A" },
  { id: "woodpecker", name: "Woodpecker", type: "Sniper", damage: 92, rate: 10, range: 92, ammo: 5, tier: "S" },
  { id: "m60", name: "M60", type: "LMG", damage: 65, rate: 55, range: 70, ammo: 60, tier: "A" },
  { id: "parafal", name: "Parafal", type: "AR", damage: 58, rate: 55, range: 80, ammo: 30, tier: "A" },
  { id: "groza", name: "Groza", type: "AR", damage: 60, rate: 65, range: 75, ammo: 30, tier: "A" },
  { id: "desert-eagle", name: "Desert Eagle", type: "Pistol", damage: 85, rate: 40, range: 50, ammo: 7, tier: "A" },
  { id: "m500", name: "M500", type: "Pistol", damage: 90, rate: 25, range: 45, ammo: 5, tier: "B" },
  { id: "usp", name: "USP", type: "Pistol", damage: 40, rate: 65, range: 40, ammo: 12, tier: "B" },
];

export const FF_PETS: FFPet[] = [
  { id: "falco", name: "Falco", skill: "Sky Glide", skillDesc: "ហោះពីលើមេឃ", tier: "S" },
  { id: "mr-katty", name: "Mr. Waggor", skill: "Smooth Gloo", skillDesc: "បង្កើត gloo wall", tier: "S" },
  { id: "ottero", name: "Ottero", skill: "Double Blubber", skillDesc: "Heal ពេលប្រើ medkit", tier: "S" },
  { id: "dreki", name: "Dreki", skill: "Dragon Glare", skillDesc: "មើលឃើញ enemies", tier: "A" },
  { id: "beaston", name: "Beaston", skill: "Mammoth Vigor", skillDesc: "Damage reduction", tier: "A" },
  { id: "agent-hop", name: "Agent Hop", skill: "Hop Up", skillDesc: "Refill EP", tier: "A" },
  { id: "rockie", name: "Rockie", skill: "Stay Chill", skillDesc: "Reduce CD", tier: "A" },
  { id: "pug", name: "Pug", skill: "Sneaky Snoop", skillDesc: "Detect enemies", tier: "B" },
  { id: "mochi", name: "Mochi", skill: "Gloo Hunter", skillDesc: "Extra damage to gloo", tier: "B" },
  { id: "shiba", name: "Shiba", skill: "Mushroom Sense", skillDesc: "See hidden enemies", tier: "B" },
  { id: "kitty", name: "Kitty", skill: "Cat's Eye", skillDesc: "Detect nearby enemies", tier: "B" },
  { id: "panda", name: "Panda", skill: "Panda's Blessing", skillDesc: "HP boost", tier: "B" },
];

export const FF_MAPS: FFMap[] = [
  { id: "bermuda", name: "Bermuda", size: "Large", mode: "BR", desc: "ផែនទីធំបំផុត — សម្រាប់អ្នកលេងចូលចិត្តរុករក" },
  { id: "purgatory", name: "Purgatory", size: "Medium", mode: "BR", desc: "ផែនទីមធ្យម — សមតុល្យរវាង open និង cover" },
  { id: "kalahari", name: "Kalahari", size: "Large", mode: "BR", desc: "ផែនទីវាលខ្សាច់ — សម្រាប់ sniper" },
  { id: "alpine", name: "Alpine", size: "Medium", mode: "BR", desc: "ផែនទីភ្នំព្រិល — សម្រាប់ stealth" },
  { id: "nexterra", name: "Nexterra", size: "Medium", mode: "BR", desc: "ផែនទីលំហ — futuristic design" },
  { id: "bermuda-remastered", name: "Bermuda Remastered", size: "Large", mode: "BR", desc: "Bermuda ថ្មីជាមួយ graphics កែលម្អ" },
];