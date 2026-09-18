// Phone Performance Data 2026 â€” 150+ Models
export type ChipsetTier = "flagship" | "high" | "mid" | "entry";
export type Chipset = {
  id: string;
  name: string;
  brand: string;
  tier: ChipsetTier;
  score: number;
};
export const CHIPSETS: Chipset[] = [
  // FLAGSHIP
  { id: "sd8elite", name: "Snapdragon 8 Elite", brand: "Qualcomm", tier: "flagship", score: 100 },
  { id: "sd8gen3", name: "Snapdragon 8 Gen 3", brand: "Qualcomm", tier: "flagship", score: 98 },
  { id: "sd8gen2", name: "Snapdragon 8 Gen 2", brand: "Qualcomm", tier: "flagship", score: 95 },
  { id: "sd8gen1", name: "Snapdragon 8 Gen 1", brand: "Qualcomm", tier: "flagship", score: 88 },
  { id: "sd888", name: "Snapdragon 888", brand: "Qualcomm", tier: "flagship", score: 82 },
  { id: "d9400", name: "Dimensity 9400", brand: "MediaTek", tier: "flagship", score: 99 },
  { id: "d9300", name: "Dimensity 9300", brand: "MediaTek", tier: "flagship", score: 97 },
  { id: "d9200", name: "Dimensity 9200", brand: "MediaTek", tier: "flagship", score: 92 },
  { id: "d9000", name: "Dimensity 9000", brand: "MediaTek", tier: "flagship", score: 86 },
  { id: "exynos2400", name: "Exynos 2400", brand: "Samsung", tier: "flagship", score: 94 },
  { id: "exynos2200", name: "Exynos 2200", brand: "Samsung", tier: "flagship", score: 82 },
  { id: "a18pro", name: "Apple A18 Pro", brand: "Apple", tier: "flagship", score: 100 },
  { id: "a17pro", name: "Apple A17 Pro", brand: "Apple", tier: "flagship", score: 99 },
  { id: "a16", name: "Apple A16 Bionic", brand: "Apple", tier: "flagship", score: 95 },
  { id: "a15", name: "Apple A15 Bionic", brand: "Apple", tier: "flagship", score: 88 },
  { id: "a14", name: "Apple A14 Bionic", brand: "Apple", tier: "flagship", score: 78 },
  { id: "kirin9000s", name: "Kirin 9000s", brand: "Huawei", tier: "flagship", score: 80 },
  // HIGH TIER
  { id: "sd8plusgen1", name: "Snapdragon 8+ Gen 1", brand: "Qualcomm", tier: "high", score: 90 },
  { id: "sd7plusgen3", name: "Snapdragon 7+ Gen 3", brand: "Qualcomm", tier: "high", score: 86 },
  { id: "sd7gen3", name: "Snapdragon 7 Gen 3", brand: "Qualcomm", tier: "high", score: 82 },
  { id: "sd7plusgen2", name: "Snapdragon 7+ Gen 2", brand: "Qualcomm", tier: "high", score: 84 },
  { id: "sd7gen2", name: "Snapdragon 7 Gen 2", brand: "Qualcomm", tier: "high", score: 78 },
  { id: "sd870", name: "Snapdragon 870", brand: "Qualcomm", tier: "high", score: 76 },
  { id: "sd778g", name: "Snapdragon 778G", brand: "Qualcomm", tier: "high", score: 72 },
  { id: "d8400", name: "Dimensity 8400", brand: "MediaTek", tier: "high", score: 88 },
  { id: "d8300", name: "Dimensity 8300", brand: "MediaTek", tier: "high", score: 85 },
  { id: "d8200", name: "Dimensity 8200", brand: "MediaTek", tier: "high", score: 82 },
  { id: "d8100", name: "Dimensity 8100", brand: "MediaTek", tier: "high", score: 78 },
  { id: "d8050", name: "Dimensity 8050", brand: "MediaTek", tier: "high", score: 76 },
  { id: "exynos1480", name: "Exynos 1480", brand: "Samsung", tier: "high", score: 78 },
  { id: "exynos1580", name: "Exynos 1580", brand: "Samsung", tier: "high", score: 80 },
  { id: "kirin9010", name: "Kirin 9010", brand: "Huawei", tier: "high", score: 82 },
  // MID TIER
  { id: "sd7sgen2", name: "Snapdragon 7s Gen 2", brand: "Qualcomm", tier: "mid", score: 72 },
  { id: "sd7sgen3", name: "Snapdragon 7s Gen 3", brand: "Qualcomm", tier: "mid", score: 76 },
  { id: "sd6gen1", name: "Snapdragon 6 Gen 1", brand: "Qualcomm", tier: "mid", score: 68 },
  { id: "sd6gen3", name: "Snapdragon 6 Gen 3", brand: "Qualcomm", tier: "mid", score: 72 },
  { id: "sd695", name: "Snapdragon 695", brand: "Qualcomm", tier: "mid", score: 64 },
  { id: "sd685", name: "Snapdragon 685", brand: "Qualcomm", tier: "mid", score: 62 },
  { id: "sd680", name: "Snapdragon 680", brand: "Qualcomm", tier: "mid", score: 58 },
  { id: "d7300", name: "Dimensity 7300", brand: "MediaTek", tier: "mid", score: 74 },
  { id: "d7200", name: "Dimensity 7200", brand: "MediaTek", tier: "mid", score: 72 },
  { id: "d7050", name: "Dimensity 7050", brand: "MediaTek", tier: "mid", score: 68 },
  { id: "d7025", name: "Dimensity 7025", brand: "MediaTek", tier: "mid", score: 65 },
  { id: "d6300", name: "Dimensity 6300", brand: "MediaTek", tier: "mid", score: 60 },
  { id: "d6080", name: "Dimensity 6080", brand: "MediaTek", tier: "mid", score: 62 },
  { id: "helioG99", name: "Helio G99", brand: "MediaTek", tier: "mid", score: 58 },
  { id: "helioG100", name: "Helio G100", brand: "MediaTek", tier: "mid", score: 62 },
  { id: "helioG96", name: "Helio G96", brand: "MediaTek", tier: "mid", score: 55 },
  { id: "exynos1380", name: "Exynos 1380", brand: "Samsung", tier: "mid", score: 70 },
  { id: "exynos1330", name: "Exynos 1330", brand: "Samsung", tier: "mid", score: 62 },
  { id: "exynos1280", name: "Exynos 1280", brand: "Samsung", tier: "mid", score: 64 },
  { id: "tigerT820", name: "Unisoc T820", brand: "Unisoc", tier: "mid", score: 70 },
  // ENTRY TIER
  { id: "sd4gen2", name: "Snapdragon 4 Gen 2", brand: "Qualcomm", tier: "entry", score: 50 },
  { id: "sd4gen1", name: "Snapdragon 4 Gen 1", brand: "Qualcomm", tier: "entry", score: 46 },
  { id: "helioG85", name: "Helio G85", brand: "MediaTek", tier: "entry", score: 42 },
  { id: "helioG81", name: "Helio G81", brand: "MediaTek", tier: "entry", score: 45 },
  { id: "helioG88", name: "Helio G88", brand: "MediaTek", tier: "entry", score: 48 },
  { id: "helioA22", name: "Helio A22", brand: "MediaTek", tier: "entry", score: 28 },
  { id: "unisocT606", name: "Unisoc T606", brand: "Unisoc", tier: "entry", score: 35 },
  { id: "unisocT612", name: "Unisoc T612", brand: "Unisoc", tier: "entry", score: 38 },
  { id: "unisocT615", name: "Unisoc T615", brand: "Unisoc", tier: "entry", score: 42 },
  { id: "unisocT616", name: "Unisoc T616", brand: "Unisoc", tier: "entry", score: 44 },
  { id: "unisocT7200", name: "Unisoc T7200", brand: "Unisoc", tier: "entry", score: 48 },
  { id: "d6100", name: "Dimensity 6100+", brand: "MediaTek", tier: "entry", score: 52 },
  { id: "d7350", name: "Dimensity 7350", brand: "MediaTek", tier: "mid", score: 74 },
  { id: "d8020", name: "Dimensity 8020", brand: "MediaTek", tier: "high", score: 76 },
  { id: "d8350", name: "Dimensity 8350", brand: "MediaTek", tier: "high", score: 84 },
  { id: "helioG91", name: "Helio G91", brand: "MediaTek", tier: "entry", score: 50 },
  { id: "sd8sgen3", name: "Snapdragon 8s Gen 3", brand: "Qualcomm", tier: "high", score: 88 },
  { id: "tensorG2", name: "Google Tensor G2", brand: "Google", tier: "high", score: 74 },
  { id: "tensorG3", name: "Google Tensor G3", brand: "Google", tier: "high", score: 80 },
  { id: "tensorG4", name: "Google Tensor G4", brand: "Google", tier: "flagship", score: 88 },
];
export type Phone = {
  id: string;
  brand: string;
  model: string;
  year: number;
  ram: number;
  storage: number;
  chipsetId: string;
  displayHz: number;
  battery: number;
};
export const PHONES: Phone[] = [
  // â•â•â•â•â•â•â•â•â•â•â• SAMSUNG (25) â•â•â•â•â•â•â•â•â•â•â•
  { id: "samsung-s25-ultra", brand: "Samsung", model: "Galaxy S25 Ultra", year: 2025, ram: 12, storage: 256, chipsetId: "sd8elite", displayHz: 120, battery: 5000 },
  { id: "samsung-s25-plus", brand: "Samsung", model: "Galaxy S25+", year: 2025, ram: 12, storage: 256, chipsetId: "sd8elite", displayHz: 120, battery: 4900 },
  { id: "samsung-s25", brand: "Samsung", model: "Galaxy S25", year: 2025, ram: 12, storage: 128, chipsetId: "sd8elite", displayHz: 120, battery: 4000 },
  { id: "samsung-s24-ultra", brand: "Samsung", model: "Galaxy S24 Ultra", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 5000 },
  { id: "samsung-s24-plus", brand: "Samsung", model: "Galaxy S24+", year: 2024, ram: 12, storage: 256, chipsetId: "exynos2400", displayHz: 120, battery: 4900 },
  { id: "samsung-s24", brand: "Samsung", model: "Galaxy S24", year: 2024, ram: 8, storage: 256, chipsetId: "exynos2400", displayHz: 120, battery: 4000 },
  { id: "samsung-s23-ultra", brand: "Samsung", model: "Galaxy S23 Ultra", year: 2023, ram: 12, storage: 256, chipsetId: "sd8gen2", displayHz: 120, battery: 5000 },
  { id: "samsung-s23", brand: "Samsung", model: "Galaxy S23", year: 2023, ram: 8, storage: 128, chipsetId: "sd8gen2", displayHz: 120, battery: 3900 },
  { id: "samsung-s22", brand: "Samsung", model: "Galaxy S22", year: 2022, ram: 8, storage: 128, chipsetId: "sd8gen1", displayHz: 120, battery: 3700 },
  { id: "samsung-s21-fe", brand: "Samsung", model: "Galaxy S21 FE", year: 2022, ram: 6, storage: 128, chipsetId: "sd888", displayHz: 120, battery: 4500 },
  { id: "samsung-z-fold6", brand: "Samsung", model: "Galaxy Z Fold 6", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 4400 },
  { id: "samsung-z-flip6", brand: "Samsung", model: "Galaxy Z Flip 6", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 4000 },
  { id: "samsung-a56", brand: "Samsung", model: "Galaxy A56", year: 2025, ram: 8, storage: 128, chipsetId: "exynos1580", displayHz: 120, battery: 5000 },
  { id: "samsung-a55", brand: "Samsung", model: "Galaxy A55", year: 2024, ram: 8, storage: 128, chipsetId: "exynos1480", displayHz: 120, battery: 5000 },
  { id: "samsung-a54", brand: "Samsung", model: "Galaxy A54", year: 2023, ram: 6, storage: 128, chipsetId: "exynos1380", displayHz: 120, battery: 5000 },
  { id: "samsung-a36", brand: "Samsung", model: "Galaxy A36", year: 2025, ram: 8, storage: 128, chipsetId: "sd6gen3", displayHz: 120, battery: 5000 },
  { id: "samsung-a35", brand: "Samsung", model: "Galaxy A35", year: 2024, ram: 6, storage: 128, chipsetId: "exynos1380", displayHz: 120, battery: 5000 },
  { id: "samsung-a26", brand: "Samsung", model: "Galaxy A26", year: 2025, ram: 6, storage: 128, chipsetId: "exynos1380", displayHz: 120, battery: 5000 },
  { id: "samsung-a25", brand: "Samsung", model: "Galaxy A25", year: 2024, ram: 6, storage: 128, chipsetId: "exynos1280", displayHz: 120, battery: 5000 },
  { id: "samsung-a16-5g", brand: "Samsung", model: "Galaxy A16 5G", year: 2024, ram: 4, storage: 128, chipsetId: "d6300", displayHz: 90, battery: 5000 },
  { id: "samsung-a16", brand: "Samsung", model: "Galaxy A16", year: 2024, ram: 4, storage: 128, chipsetId: "helioG99", displayHz: 90, battery: 5000 },
  { id: "samsung-a15", brand: "Samsung", model: "Galaxy A15", year: 2023, ram: 4, storage: 128, chipsetId: "helioG99", displayHz: 90, battery: 5000 },
  { id: "samsung-m55", brand: "Samsung", model: "Galaxy M55", year: 2024, ram: 8, storage: 128, chipsetId: "sd7gen2", displayHz: 120, battery: 5000 },
  { id: "samsung-m36", brand: "Samsung", model: "Galaxy M36", year: 2025, ram: 6, storage: 128, chipsetId: "exynos1380", displayHz: 120, battery: 5000 },
  { id: "samsung-m16", brand: "Samsung", model: "Galaxy M16", year: 2024, ram: 4, storage: 128, chipsetId: "d6300", displayHz: 90, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• XIAOMI (25) â•â•â•â•â•â•â•â•â•â•â•
  { id: "xiaomi-15-ultra", brand: "Xiaomi", model: "Xiaomi 15 Ultra", year: 2025, ram: 16, storage: 512, chipsetId: "sd8elite", displayHz: 120, battery: 6000 },
  { id: "xiaomi-15-pro", brand: "Xiaomi", model: "Xiaomi 15 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "sd8elite", displayHz: 120, battery: 5400 },
  { id: "xiaomi-15", brand: "Xiaomi", model: "Xiaomi 15", year: 2025, ram: 12, storage: 256, chipsetId: "sd8elite", displayHz: 120, battery: 5400 },
  { id: "xiaomi-14-ultra", brand: "Xiaomi", model: "Xiaomi 14 Ultra", year: 2024, ram: 16, storage: 512, chipsetId: "sd8gen3", displayHz: 120, battery: 5300 },
  { id: "xiaomi-14", brand: "Xiaomi", model: "Xiaomi 14", year: 2023, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 4610 },
  { id: "xiaomi-14t-pro", brand: "Xiaomi", model: "Xiaomi 14T Pro", year: 2024, ram: 12, storage: 256, chipsetId: "d9300", displayHz: 144, battery: 5000 },
  { id: "xiaomi-14t", brand: "Xiaomi", model: "Xiaomi 14T", year: 2024, ram: 12, storage: 256, chipsetId: "d8300", displayHz: 144, battery: 5000 },
  { id: "xiaomi-13t-pro", brand: "Xiaomi", model: "Xiaomi 13T Pro", year: 2023, ram: 12, storage: 256, chipsetId: "d9200", displayHz: 144, battery: 5000 },
  { id: "xiaomi-13t", brand: "Xiaomi", model: "Xiaomi 13T", year: 2023, ram: 8, storage: 256, chipsetId: "d8200", displayHz: 144, battery: 5000 },
  { id: "poco-f7-ultra", brand: "Xiaomi", model: "POCO F7 Ultra", year: 2025, ram: 12, storage: 256, chipsetId: "sd8elite", displayHz: 120, battery: 5300 },
  { id: "poco-f7-pro", brand: "Xiaomi", model: "POCO F7 Pro", year: 2025, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 6000 },
  { id: "poco-f6-pro", brand: "Xiaomi", model: "POCO F6 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen2", displayHz: 120, battery: 5000 },
  { id: "poco-f6", brand: "Xiaomi", model: "POCO F6", year: 2024, ram: 8, storage: 256, chipsetId: "sd8plusgen1", displayHz: 120, battery: 5000 },
  { id: "poco-x7-pro", brand: "Xiaomi", model: "POCO X7 Pro", year: 2025, ram: 8, storage: 256, chipsetId: "d8400", displayHz: 120, battery: 6000 },
  { id: "poco-x7", brand: "Xiaomi", model: "POCO X7", year: 2025, ram: 8, storage: 256, chipsetId: "d7300", displayHz: 120, battery: 5110 },
  { id: "poco-x6-pro", brand: "Xiaomi", model: "POCO X6 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "d8300", displayHz: 120, battery: 5100 },
  { id: "poco-x6", brand: "Xiaomi", model: "POCO X6", year: 2024, ram: 8, storage: 256, chipsetId: "sd7sgen2", displayHz: 120, battery: 5100 },
  { id: "poco-m7-pro", brand: "Xiaomi", model: "POCO M7 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "d7025", displayHz: 120, battery: 5110 },
  { id: "poco-m6-pro", brand: "Xiaomi", model: "POCO M6 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 5000 },
  { id: "redmi-note-14-pro-plus", brand: "Xiaomi", model: "Redmi Note 14 Pro+", year: 2024, ram: 12, storage: 256, chipsetId: "sd7sgen3", displayHz: 120, battery: 5110 },
  { id: "redmi-note-14-pro", brand: "Xiaomi", model: "Redmi Note 14 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "d7300", displayHz: 120, battery: 5500 },
  { id: "redmi-note-14", brand: "Xiaomi", model: "Redmi Note 14", year: 2024, ram: 6, storage: 128, chipsetId: "d7025", displayHz: 120, battery: 5110 },
  { id: "redmi-note-13-pro", brand: "Xiaomi", model: "Redmi Note 13 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "sd7sgen2", displayHz: 120, battery: 5100 },
  { id: "redmi-14c", brand: "Xiaomi", model: "Redmi 14C", year: 2024, ram: 4, storage: 128, chipsetId: "helioG81", displayHz: 120, battery: 5160 },
  { id: "redmi-13", brand: "Xiaomi", model: "Redmi 13", year: 2024, ram: 6, storage: 128, chipsetId: "helioG88", displayHz: 90, battery: 5030 },
  // â•â•â•â•â•â•â•â•â•â•â• REALME (18) â•â•â•â•â•â•â•â•â•â•â•
  { id: "realme-gt7-pro", brand: "realme", model: "realme GT 7 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "sd8elite", displayHz: 120, battery: 5800 },
  { id: "realme-gt7", brand: "realme", model: "realme GT 7", year: 2025, ram: 12, storage: 256, chipsetId: "d9400", displayHz: 120, battery: 5800 },
  { id: "realme-gt6", brand: "realme", model: "realme GT 6", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 5500 },
  { id: "realme-gt6t", brand: "realme", model: "realme GT 6T", year: 2024, ram: 8, storage: 256, chipsetId: "sd7plusgen3", displayHz: 120, battery: 5500 },
  { id: "realme-14-pro-plus", brand: "realme", model: "realme 14 Pro+", year: 2025, ram: 12, storage: 256, chipsetId: "sd7sgen3", displayHz: 120, battery: 6000 },
  { id: "realme-14-pro", brand: "realme", model: "realme 14 Pro", year: 2025, ram: 8, storage: 256, chipsetId: "d7300", displayHz: 120, battery: 6000 },
  { id: "realme-13-pro-plus", brand: "realme", model: "realme 13 Pro+", year: 2024, ram: 12, storage: 256, chipsetId: "sd7sgen2", displayHz: 120, battery: 5200 },
  { id: "realme-13-pro", brand: "realme", model: "realme 13 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "sd7gen2", displayHz: 120, battery: 5200 },
  { id: "realme-12-pro-plus", brand: "realme", model: "realme 12 Pro+", year: 2024, ram: 12, storage: 256, chipsetId: "sd7sgen2", displayHz: 120, battery: 5000 },
  { id: "realme-11-pro", brand: "realme", model: "realme 11 Pro", year: 2023, ram: 8, storage: 256, chipsetId: "d7050", displayHz: 120, battery: 5000 },
  { id: "realme-note-60-pro", brand: "realme", model: "realme Note 60 Pro", year: 2025, ram: 8, storage: 256, chipsetId: "d6300", displayHz: 120, battery: 5000 },
  { id: "realme-note-60", brand: "realme", model: "realme Note 60", year: 2024, ram: 6, storage: 128, chipsetId: "unisocT612", displayHz: 90, battery: 5000 },
  { id: "realme-c75", brand: "realme", model: "realme C75", year: 2024, ram: 8, storage: 128, chipsetId: "helioG99", displayHz: 90, battery: 5828 },
  { id: "realme-c67", brand: "realme", model: "realme C67", year: 2024, ram: 6, storage: 128, chipsetId: "sd6gen1", displayHz: 90, battery: 5000 },
  { id: "realme-c65", brand: "realme", model: "realme C65", year: 2024, ram: 6, storage: 128, chipsetId: "helioG85", displayHz: 90, battery: 5000 },
  { id: "realme-c61", brand: "realme", model: "realme C61", year: 2024, ram: 4, storage: 64, chipsetId: "unisocT612", displayHz: 90, battery: 5000 },
  { id: "realme-c55", brand: "realme", model: "realme C55", year: 2023, ram: 6, storage: 128, chipsetId: "helioG88", displayHz: 90, battery: 5000 },
  { id: "realme-12x", brand: "realme", model: "realme 12x", year: 2024, ram: 6, storage: 128, chipsetId: "d6100", displayHz: 120, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• INFINIX (15) â•â•â•â•â•â•â•â•â•â•â•
  { id: "infinix-zero-40", brand: "Infinix", model: "Infinix Zero 40", year: 2024, ram: 12, storage: 256, chipsetId: "d8200", displayHz: 144, battery: 5000 },
  { id: "infinix-zero-30", brand: "Infinix", model: "Infinix Zero 30", year: 2023, ram: 12, storage: 256, chipsetId: "d8020", displayHz: 144, battery: 5000 },
  { id: "infinix-note-50-pro-plus", brand: "Infinix", model: "Infinix Note 50 Pro+", year: 2025, ram: 12, storage: 256, chipsetId: "d8350", displayHz: 144, battery: 5200 },
  { id: "infinix-note-50-pro", brand: "Infinix", model: "Infinix Note 50 Pro", year: 2025, ram: 8, storage: 256, chipsetId: "d7300", displayHz: 120, battery: 5200 },
  { id: "infinix-note-50", brand: "Infinix", model: "Infinix Note 50", year: 2025, ram: 8, storage: 256, chipsetId: "helioG100", displayHz: 120, battery: 5200 },
  { id: "infinix-note-40-pro", brand: "Infinix", model: "Infinix Note 40 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 5000 },
  { id: "infinix-note-40", brand: "Infinix", model: "Infinix Note 40", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 5000 },
  { id: "infinix-hot-50-pro-plus", brand: "Infinix", model: "Infinix Hot 50 Pro+", year: 2024, ram: 8, storage: 256, chipsetId: "helioG100", displayHz: 120, battery: 5000 },
  { id: "infinix-hot-50-pro", brand: "Infinix", model: "Infinix Hot 50 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 5000 },
  { id: "infinix-hot-50", brand: "Infinix", model: "Infinix Hot 50", year: 2024, ram: 4, storage: 128, chipsetId: "d6300", displayHz: 120, battery: 5000 },
  { id: "infinix-hot-40-pro", brand: "Infinix", model: "Infinix Hot 40 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 5000 },
  { id: "infinix-hot-40i", brand: "Infinix", model: "Infinix Hot 40i", year: 2024, ram: 8, storage: 256, chipsetId: "unisocT606", displayHz: 90, battery: 5000 },
  { id: "infinix-smart-9", brand: "Infinix", model: "Infinix Smart 9", year: 2024, ram: 4, storage: 64, chipsetId: "helioG81", displayHz: 120, battery: 5000 },
  { id: "infinix-smart-8", brand: "Infinix", model: "Infinix Smart 8", year: 2024, ram: 4, storage: 64, chipsetId: "unisocT606", displayHz: 90, battery: 5000 },
  { id: "infinix-gt-20-pro", brand: "Infinix", model: "Infinix GT 20 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "d8200", displayHz: 144, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• TECNO (12) â•â•â•â•â•â•â•â•â•â•â•
  { id: "tecno-phantom-v2-fold", brand: "Tecno", model: "Tecno Phantom V2 Fold", year: 2024, ram: 12, storage: 256, chipsetId: "d9200", displayHz: 120, battery: 4600 },
  { id: "tecno-phantom-v-flip", brand: "Tecno", model: "Tecno Phantom V Flip", year: 2024, ram: 8, storage: 256, chipsetId: "d8050", displayHz: 120, battery: 4000 },
  { id: "tecno-camon-30-pro-plus", brand: "Tecno", model: "Tecno Camon 30 Pro+", year: 2024, ram: 12, storage: 256, chipsetId: "d8200", displayHz: 120, battery: 5000 },
  { id: "tecno-camon-30-pro", brand: "Tecno", model: "Tecno Camon 30 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "d8200", displayHz: 120, battery: 5000 },
  { id: "tecno-camon-30", brand: "Tecno", model: "Tecno Camon 30", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 5000 },
  { id: "tecno-pova-6-pro", brand: "Tecno", model: "Tecno Pova 6 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "d6080", displayHz: 120, battery: 6000 },
  { id: "tecno-pova-6", brand: "Tecno", model: "Tecno Pova 6", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 7000 },
  { id: "tecno-pova-5-pro", brand: "Tecno", model: "Tecno Pova 5 Pro", year: 2023, ram: 8, storage: 256, chipsetId: "d6080", displayHz: 120, battery: 5000 },
  { id: "tecno-spark-30-pro-plus", brand: "Tecno", model: "Tecno Spark 30 Pro+", year: 2024, ram: 8, storage: 256, chipsetId: "helioG100", displayHz: 120, battery: 5000 },
  { id: "tecno-spark-30-pro", brand: "Tecno", model: "Tecno Spark 30 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "helioG99", displayHz: 120, battery: 5000 },
  { id: "tecno-spark-30", brand: "Tecno", model: "Tecno Spark 30", year: 2024, ram: 8, storage: 128, chipsetId: "helioG91", displayHz: 90, battery: 5000 },
  { id: "tecno-spark-go-2024", brand: "Tecno", model: "Tecno Spark Go 2024", year: 2024, ram: 4, storage: 64, chipsetId: "unisocT606", displayHz: 90, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• OPPO (15) â•â•â•â•â•â•â•â•â•â•â•
  { id: "oppo-find-x8-pro", brand: "Oppo", model: "OPPO Find X8 Pro", year: 2024, ram: 16, storage: 512, chipsetId: "d9400", displayHz: 120, battery: 5910 },
  { id: "oppo-find-x8", brand: "Oppo", model: "OPPO Find X8", year: 2024, ram: 12, storage: 256, chipsetId: "d9400", displayHz: 120, battery: 5630 },
  { id: "oppo-find-x7", brand: "Oppo", model: "OPPO Find X7", year: 2024, ram: 12, storage: 256, chipsetId: "d9300", displayHz: 120, battery: 5000 },
  { id: "oppo-find-n3-flip", brand: "Oppo", model: "OPPO Find N3 Flip", year: 2023, ram: 12, storage: 256, chipsetId: "d9200", displayHz: 120, battery: 4300 },
  { id: "oppo-reno-13-pro", brand: "Oppo", model: "OPPO Reno 13 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "d8350", displayHz: 120, battery: 5800 },
  { id: "oppo-reno-13", brand: "Oppo", model: "OPPO Reno 13", year: 2024, ram: 8, storage: 256, chipsetId: "d8300", displayHz: 120, battery: 5600 },
  { id: "oppo-reno-12-pro", brand: "Oppo", model: "OPPO Reno 12 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "d7300", displayHz: 120, battery: 5000 },
  { id: "oppo-reno-12", brand: "Oppo", model: "OPPO Reno 12", year: 2024, ram: 8, storage: 256, chipsetId: "d7300", displayHz: 120, battery: 5000 },
  { id: "oppo-reno-11-pro", brand: "Oppo", model: "OPPO Reno 11 Pro", year: 2023, ram: 12, storage: 256, chipsetId: "d8200", displayHz: 120, battery: 4600 },
  { id: "oppo-reno-11", brand: "Oppo", model: "OPPO Reno 11", year: 2023, ram: 8, storage: 256, chipsetId: "d7050", displayHz: 120, battery: 5000 },
  { id: "oppo-a5-pro", brand: "Oppo", model: "OPPO A5 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "d6300", displayHz: 120, battery: 5800 },
  { id: "oppo-a3-pro", brand: "Oppo", model: "OPPO A3 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "d7050", displayHz: 120, battery: 5100 },
  { id: "oppo-a3", brand: "Oppo", model: "OPPO A3", year: 2024, ram: 6, storage: 128, chipsetId: "sd6gen1", displayHz: 120, battery: 5100 },
  { id: "oppo-a60", brand: "Oppo", model: "OPPO A60", year: 2024, ram: 8, storage: 128, chipsetId: "sd680", displayHz: 90, battery: 5000 },
  { id: "oppo-a18", brand: "Oppo", model: "OPPO A18", year: 2023, ram: 4, storage: 64, chipsetId: "helioG85", displayHz: 90, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• VIVO (15) â•â•â•â•â•â•â•â•â•â•â•
  { id: "vivo-x200-pro", brand: "Vivo", model: "Vivo X200 Pro", year: 2024, ram: 16, storage: 512, chipsetId: "d9400", displayHz: 120, battery: 6000 },
  { id: "vivo-x200", brand: "Vivo", model: "Vivo X200", year: 2024, ram: 12, storage: 256, chipsetId: "d9400", displayHz: 120, battery: 5800 },
  { id: "vivo-x100-pro", brand: "Vivo", model: "Vivo X100 Pro", year: 2023, ram: 12, storage: 256, chipsetId: "d9300", displayHz: 120, battery: 5400 },
  { id: "vivo-x100", brand: "Vivo", model: "Vivo X100", year: 2023, ram: 12, storage: 256, chipsetId: "d9300", displayHz: 120, battery: 5000 },
  { id: "vivo-v40-pro", brand: "Vivo", model: "Vivo V40 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "d9200", displayHz: 120, battery: 5500 },
  { id: "vivo-v40", brand: "Vivo", model: "Vivo V40", year: 2024, ram: 8, storage: 256, chipsetId: "sd7gen3", displayHz: 120, battery: 5500 },
  { id: "vivo-v30-pro", brand: "Vivo", model: "Vivo V30 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "d8200", displayHz: 120, battery: 5000 },
  { id: "vivo-v30", brand: "Vivo", model: "Vivo V30", year: 2024, ram: 8, storage: 256, chipsetId: "sd7gen3", displayHz: 120, battery: 5000 },
  { id: "vivo-v29-pro", brand: "Vivo", model: "Vivo V29 Pro", year: 2023, ram: 8, storage: 256, chipsetId: "d8200", displayHz: 120, battery: 4600 },
  { id: "vivo-y300-pro", brand: "Vivo", model: "Vivo Y300 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "sd6gen1", displayHz: 120, battery: 6500 },
  { id: "vivo-y300", brand: "Vivo", model: "Vivo Y300", year: 2024, ram: 8, storage: 256, chipsetId: "d6300", displayHz: 120, battery: 5000 },
  { id: "vivo-y28-5g", brand: "Vivo", model: "Vivo Y28 5G", year: 2024, ram: 6, storage: 128, chipsetId: "d6300", displayHz: 90, battery: 5000 },
  { id: "vivo-y28", brand: "Vivo", model: "Vivo Y28", year: 2024, ram: 6, storage: 128, chipsetId: "helioG85", displayHz: 90, battery: 6000 },
  { id: "vivo-y19s", brand: "Vivo", model: "Vivo Y19s", year: 2024, ram: 6, storage: 128, chipsetId: "unisocT612", displayHz: 90, battery: 5500 },
  { id: "vivo-y18", brand: "Vivo", model: "Vivo Y18", year: 2024, ram: 6, storage: 128, chipsetId: "helioG85", displayHz: 90, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• IPHONE (15) â•â•â•â•â•â•â•â•â•â•â•
  { id: "iphone-16-pro-max", brand: "iPhone", model: "iPhone 16 Pro Max", year: 2024, ram: 8, storage: 256, chipsetId: "a18pro", displayHz: 120, battery: 4685 },
  { id: "iphone-16-pro", brand: "iPhone", model: "iPhone 16 Pro", year: 2024, ram: 8, storage: 256, chipsetId: "a18pro", displayHz: 120, battery: 3582 },
  { id: "iphone-16-plus", brand: "iPhone", model: "iPhone 16 Plus", year: 2024, ram: 8, storage: 128, chipsetId: "a18pro", displayHz: 60, battery: 4674 },
  { id: "iphone-16", brand: "iPhone", model: "iPhone 16", year: 2024, ram: 8, storage: 128, chipsetId: "a18pro", displayHz: 60, battery: 3561 },
  { id: "iphone-15-pro-max", brand: "iPhone", model: "iPhone 15 Pro Max", year: 2023, ram: 8, storage: 256, chipsetId: "a17pro", displayHz: 120, battery: 4441 },
  { id: "iphone-15-pro", brand: "iPhone", model: "iPhone 15 Pro", year: 2023, ram: 8, storage: 128, chipsetId: "a17pro", displayHz: 120, battery: 3274 },
  { id: "iphone-15-plus", brand: "iPhone", model: "iPhone 15 Plus", year: 2023, ram: 6, storage: 128, chipsetId: "a16", displayHz: 60, battery: 4383 },
  { id: "iphone-15", brand: "iPhone", model: "iPhone 15", year: 2023, ram: 6, storage: 128, chipsetId: "a16", displayHz: 60, battery: 3349 },
  { id: "iphone-14-pro-max", brand: "iPhone", model: "iPhone 14 Pro Max", year: 2022, ram: 6, storage: 128, chipsetId: "a16", displayHz: 120, battery: 4323 },
  { id: "iphone-14-pro", brand: "iPhone", model: "iPhone 14 Pro", year: 2022, ram: 6, storage: 128, chipsetId: "a16", displayHz: 120, battery: 3200 },
  { id: "iphone-14-plus", brand: "iPhone", model: "iPhone 14 Plus", year: 2022, ram: 6, storage: 128, chipsetId: "a15", displayHz: 60, battery: 4325 },
  { id: "iphone-14", brand: "iPhone", model: "iPhone 14", year: 2022, ram: 6, storage: 128, chipsetId: "a15", displayHz: 60, battery: 3279 },
  { id: "iphone-13-pro-max", brand: "iPhone", model: "iPhone 13 Pro Max", year: 2021, ram: 6, storage: 128, chipsetId: "a15", displayHz: 120, battery: 4352 },
  { id: "iphone-13", brand: "iPhone", model: "iPhone 13", year: 2021, ram: 4, storage: 128, chipsetId: "a15", displayHz: 60, battery: 3240 },
  { id: "iphone-se-3", brand: "iPhone", model: "iPhone SE (3rd gen)", year: 2022, ram: 4, storage: 64, chipsetId: "a15", displayHz: 60, battery: 2018 },
  // â•â•â•â•â•â•â•â•â•â•â• HUAWEI (8) â•â•â•â•â•â•â•â•â•â•â•
  { id: "huawei-mate-60-pro", brand: "Huawei", model: "Huawei Mate 60 Pro", year: 2023, ram: 12, storage: 256, chipsetId: "kirin9000s", displayHz: 120, battery: 5000 },
  { id: "huawei-pura-70-pro", brand: "Huawei", model: "Huawei Pura 70 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "kirin9010", displayHz: 120, battery: 5050 },
  { id: "huawei-pura-70", brand: "Huawei", model: "Huawei Pura 70", year: 2024, ram: 12, storage: 256, chipsetId: "kirin9010", displayHz: 120, battery: 4900 },
  { id: "huawei-nova-13-pro", brand: "Huawei", model: "Huawei Nova 13 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "kirin9010", displayHz: 120, battery: 5000 },
  { id: "huawei-nova-13", brand: "Huawei", model: "Huawei Nova 13", year: 2024, ram: 8, storage: 256, chipsetId: "kirin9010", displayHz: 120, battery: 5000 },
  { id: "huawei-nova-12", brand: "Huawei", model: "Huawei Nova 12", year: 2023, ram: 8, storage: 256, chipsetId: "kirin9000s", displayHz: 120, battery: 4500 },
  { id: "huawei-nova-12i", brand: "Huawei", model: "Huawei Nova 12i", year: 2024, ram: 8, storage: 128, chipsetId: "sd680", displayHz: 90, battery: 5000 },
  { id: "huawei-matepad-11", brand: "Huawei", model: "Huawei MatePad 11.5", year: 2023, ram: 8, storage: 128, chipsetId: "sd7gen2", displayHz: 120, battery: 7700 },
  // â•â•â•â•â•â•â•â•â•â•â• ONEPLUS (8) â•â•â•â•â•â•â•â•â•â•â•
  { id: "oneplus-13", brand: "OnePlus", model: "OnePlus 13", year: 2024, ram: 12, storage: 256, chipsetId: "sd8elite", displayHz: 120, battery: 6000 },
  { id: "oneplus-12", brand: "OnePlus", model: "OnePlus 12", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 5400 },
  { id: "oneplus-12r", brand: "OnePlus", model: "OnePlus 12R", year: 2024, ram: 8, storage: 128, chipsetId: "sd8gen2", displayHz: 120, battery: 5500 },
  { id: "oneplus-11", brand: "OnePlus", model: "OnePlus 11", year: 2023, ram: 12, storage: 256, chipsetId: "sd8gen2", displayHz: 120, battery: 5000 },
  { id: "oneplus-nord-4", brand: "OnePlus", model: "OnePlus Nord 4", year: 2024, ram: 12, storage: 256, chipsetId: "sd7plusgen3", displayHz: 120, battery: 5500 },
  { id: "oneplus-nord-ce-4", brand: "OnePlus", model: "OnePlus Nord CE 4", year: 2024, ram: 8, storage: 128, chipsetId: "sd7gen3", displayHz: 120, battery: 5500 },
  { id: "oneplus-nord-ce-4-lite", brand: "OnePlus", model: "OnePlus Nord CE 4 Lite", year: 2024, ram: 8, storage: 256, chipsetId: "sd695", displayHz: 120, battery: 5500 },
  { id: "oneplus-nord-n30", brand: "OnePlus", model: "OnePlus Nord N30", year: 2023, ram: 8, storage: 128, chipsetId: "sd695", displayHz: 120, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• GOOGLE PIXEL (7) â•â•â•â•â•â•â•â•â•â•â•
  { id: "pixel-9-pro-xl", brand: "Google", model: "Pixel 9 Pro XL", year: 2024, ram: 16, storage: 256, chipsetId: "tensorG4", displayHz: 120, battery: 5060 },
  { id: "pixel-9-pro", brand: "Google", model: "Pixel 9 Pro", year: 2024, ram: 16, storage: 128, chipsetId: "tensorG4", displayHz: 120, battery: 4700 },
  { id: "pixel-9", brand: "Google", model: "Pixel 9", year: 2024, ram: 12, storage: 128, chipsetId: "tensorG4", displayHz: 120, battery: 4700 },
  { id: "pixel-8-pro", brand: "Google", model: "Pixel 8 Pro", year: 2023, ram: 12, storage: 128, chipsetId: "tensorG3", displayHz: 120, battery: 5050 },
  { id: "pixel-8", brand: "Google", model: "Pixel 8", year: 2023, ram: 8, storage: 128, chipsetId: "tensorG3", displayHz: 120, battery: 4575 },
  { id: "pixel-8a", brand: "Google", model: "Pixel 8a", year: 2024, ram: 8, storage: 128, chipsetId: "tensorG3", displayHz: 120, battery: 4492 },
  { id: "pixel-7a", brand: "Google", model: "Pixel 7a", year: 2023, ram: 8, storage: 128, chipsetId: "tensorG2", displayHz: 90, battery: 4385 },
  // â•â•â•â•â•â•â•â•â•â•â• NOTHING (4) â•â•â•â•â•â•â•â•â•â•â•
  { id: "nothing-phone-2a", brand: "Nothing", model: "Nothing Phone (2a)", year: 2024, ram: 12, storage: 256, chipsetId: "d7200", displayHz: 120, battery: 5000 },
  { id: "nothing-phone-2", brand: "Nothing", model: "Nothing Phone (2)", year: 2023, ram: 12, storage: 256, chipsetId: "sd8plusgen1", displayHz: 120, battery: 4700 },
  { id: "nothing-phone-2a-plus", brand: "Nothing", model: "Nothing Phone (2a) Plus", year: 2024, ram: 12, storage: 256, chipsetId: "d7350", displayHz: 120, battery: 5000 },
  { id: "nothing-cmf-phone-1", brand: "Nothing", model: "CMF Phone 1", year: 2024, ram: 8, storage: 128, chipsetId: "d7300", displayHz: 120, battery: 5000 },
  // â•â•â•â•â•â•â•â•â•â•â• HONOR (7) â•â•â•â•â•â•â•â•â•â•â•
  { id: "honor-magic6-pro", brand: "Honor", model: "Honor Magic6 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 5600 },
  { id: "honor-magic6", brand: "Honor", model: "Honor Magic6", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 120, battery: 5450 },
  { id: "honor-magic5-pro", brand: "Honor", model: "Honor Magic5 Pro", year: 2023, ram: 12, storage: 256, chipsetId: "sd8gen2", displayHz: 120, battery: 5100 },
  { id: "honor-200-pro", brand: "Honor", model: "Honor 200 Pro", year: 2024, ram: 12, storage: 256, chipsetId: "sd8sgen3", displayHz: 120, battery: 5200 },
  { id: "honor-200", brand: "Honor", model: "Honor 200", year: 2024, ram: 12, storage: 256, chipsetId: "sd7gen3", displayHz: 120, battery: 5200 },
  { id: "honor-x9b", brand: "Honor", model: "Honor X9b", year: 2023, ram: 8, storage: 256, chipsetId: "sd6gen1", displayHz: 120, battery: 5800 },
  { id: "honor-x7b", brand: "Honor", model: "Honor X7b", year: 2024, ram: 8, storage: 128, chipsetId: "sd680", displayHz: 90, battery: 5330 },
  // â•â•â•â•â•â•â•â•â•â•â• ASUS ROG (3) â•â•â•â•â•â•â•â•â•â•â•
  { id: "rog-phone-8-pro", brand: "Asus", model: "ROG Phone 8 Pro", year: 2024, ram: 16, storage: 512, chipsetId: "sd8gen3", displayHz: 165, battery: 5500 },
  { id: "rog-phone-8", brand: "Asus", model: "ROG Phone 8", year: 2024, ram: 12, storage: 256, chipsetId: "sd8gen3", displayHz: 165, battery: 5500 },
  { id: "rog-phone-7", brand: "Asus", model: "ROG Phone 7", year: 2023, ram: 12, storage: 256, chipsetId: "sd8gen2", displayHz: 165, battery: 6000 },
];
export const BRANDS = Array.from(new Set(PHONES.map(p => p.brand))).sort();
export function getPhoneCount(): number {
  return PHONES.length;
}
export function getModelsByBrand(brand: string): Phone[] {
  return PHONES.filter(p => p.brand === brand);
}
export function getPhone(id: string): Phone | undefined {
  return PHONES.find(p => p.id === id);
}
export type PerformanceResult = {
  ff: {
    canPlay: boolean;
    fps: number;
    graphics: string;
    tier: "S" | "A" | "B" | "C";
    settings: string[];
  };
  mlbb: {
    canPlay: boolean;
    fps: number;
    graphics: string;
    tier: "S" | "A" | "B" | "C";
    settings: string[];
  };
  lifespanYears: number;
  overallScore: number;
};
export function generatePerformance(phone: Phone): PerformanceResult {
  const chipset = CHIPSETS.find(c => c.id === phone.chipsetId);
  const score = chipset ? chipset.score : 40;
  const ram = phone.ram;
  const ramScore = Math.min(100, (ram / 16) * 100);
  const overallScore = Math.round(score * 0.7 + ramScore * 0.3);
  let ffFps = 30;
  let ffGraphics = "Smooth";
  let ffTier: "S" | "A" | "B" | "C" = "C";
  let ffCanPlay = true;
  if (overallScore >= 85) {
    ffFps = 90;
    ffGraphics = "Ultra";
    ffTier = "S";
  } else if (overallScore >= 70) {
    ffFps = 60;
    ffGraphics = "High";
    ffTier = "A";
  } else if (overallScore >= 50) {
    ffFps = 60;
    ffGraphics = "Standard";
    ffTier = "B";
  } else if (overallScore >= 30) {
    ffFps = 30;
    ffGraphics = "Smooth";
    ffTier = "C";
  } else {
    ffCanPlay = false;
    ffFps = 0;
    ffGraphics = "N/A";
    ffTier = "C";
  }
  let mlFps = 30;
  let mlGraphics = "Medium";
  let mlTier: "S" | "A" | "B" | "C" = "C";
  let mlCanPlay = true;
  if (overallScore >= 85) {
    mlFps = 120;
    mlGraphics = "Ultra";
    mlTier = "S";
  } else if (overallScore >= 70) {
    mlFps = 90;
    mlGraphics = "High";
    mlTier = "A";
  } else if (overallScore >= 50) {
    mlFps = 60;
    mlGraphics = "Medium";
    mlTier = "B";
  } else if (overallScore >= 30) {
    mlFps = 30;
    mlGraphics = "Low";
    mlTier = "C";
  } else {
    mlCanPlay = false;
    mlFps = 0;
    mlGraphics = "N/A";
    mlTier = "C";
  }
  let lifespan = 1;
  if (overallScore >= 85) lifespan = 4;
  else if (overallScore >= 70) lifespan = 3;
  else if (overallScore >= 50) lifespan = 2;
  else lifespan = 1;
  const ffSettings: string[] = [];
  const mlSettings: string[] = [];
  if (ffTier === "S") {
    ffSettings.push("Graphics: Ultra", "FPS: Ultra (90)", "Shadows: ON", "Auto Scale: ON", "High Resolution: ON");
  } else if (ffTier === "A") {
    ffSettings.push("Graphics: High", "FPS: High (60)", "Shadows: OFF", "Auto Scale: ON", "High Resolution: OFF");
  } else if (ffTier === "B") {
    ffSettings.push("Graphics: Standard", "FPS: High (60)", "Shadows: OFF", "Auto Scale: OFF", "High Resolution: OFF");
  } else {
    ffSettings.push("Graphics: Smooth", "FPS: Standard (30)", "Shadows: OFF", "Auto Scale: OFF", "Close Background Apps");
  }
  if (mlTier === "S") {
    mlSettings.push("Graphics: Ultra", "FPS: Ultra (120)", "Battle Effects: ON", "HD Mode: ON", "Shadows: ON");
  } else if (mlTier === "A") {
    mlSettings.push("Graphics: High", "FPS: High (90)", "Battle Effects: ON", "HD Mode: OFF", "Shadows: OFF");
  } else if (mlTier === "B") {
    mlSettings.push("Graphics: Medium", "FPS: Medium (60)", "Battle Effects: OFF", "HD Mode: OFF", "Shadows: OFF");
  } else {
    mlSettings.push("Graphics: Low", "FPS: Low (30)", "Battle Effects: OFF", "HD Mode: OFF", "Close Background Apps");
  }
  return {
    ff: { canPlay: ffCanPlay, fps: ffFps, graphics: ffGraphics, tier: ffTier, settings: ffSettings },
    mlbb: { canPlay: mlCanPlay, fps: mlFps, graphics: mlGraphics, tier: mlTier, settings: mlSettings },
    lifespanYears: lifespan,
    overallScore,
  };
}
