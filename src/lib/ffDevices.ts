export type DeviceTier = "F" | "M" | "B";

export type Device = {
  brand: string;
  model: string;
  dpi: number;
  year: number;
  tier: DeviceTier;
};

// [brand, model, dpi, year, tier]
const RAW: [string, string, number, number, DeviceTier][] = [
  // ═══ APPLE (20) ═══
  ["Apple", "iPhone 15 Pro Max", 460, 2023, "F"],
  ["Apple", "iPhone 15 Pro", 460, 2023, "F"],
  ["Apple", "iPhone 15 Plus", 458, 2023, "F"],
  ["Apple", "iPhone 15", 460, 2023, "F"],
  ["Apple", "iPhone 14 Pro Max", 460, 2022, "F"],
  ["Apple", "iPhone 14 Pro", 460, 2022, "F"],
  ["Apple", "iPhone 14 Plus", 458, 2022, "F"],
  ["Apple", "iPhone 14", 460, 2022, "F"],
  ["Apple", "iPhone 13 Pro Max", 458, 2021, "F"],
  ["Apple", "iPhone 13 Pro", 460, 2021, "F"],
  ["Apple", "iPhone 13", 460, 2021, "M"],
  ["Apple", "iPhone 13 mini", 476, 2021, "M"],
  ["Apple", "iPhone 12 Pro Max", 458, 2020, "F"],
  ["Apple", "iPhone 12 Pro", 460, 2020, "F"],
  ["Apple", "iPhone 12", 460, 2020, "M"],
  ["Apple", "iPhone 11 Pro Max", 458, 2019, "M"],
  ["Apple", "iPhone 11", 326, 2019, "M"],
  ["Apple", "iPhone XR", 326, 2018, "B"],
  ["Apple", "iPhone X", 458, 2017, "B"],
  ["Apple", "iPhone SE (2022)", 326, 2022, "B"],

  // ═══ SAMSUNG (25) ═══
  ["Samsung", "Galaxy S24 Ultra", 505, 2024, "F"],
  ["Samsung", "Galaxy S24+", 513, 2024, "F"],
  ["Samsung", "Galaxy S24", 416, 2024, "F"],
  ["Samsung", "Galaxy S23 Ultra", 500, 2023, "F"],
  ["Samsung", "Galaxy S23+", 393, 2023, "F"],
  ["Samsung", "Galaxy S23", 425, 2023, "F"],
  ["Samsung", "Galaxy S22 Ultra", 500, 2022, "F"],
  ["Samsung", "Galaxy S22", 425, 2022, "F"],
  ["Samsung", "Galaxy S21 Ultra", 515, 2021, "F"],
  ["Samsung", "Galaxy S21 FE", 411, 2022, "M"],
  ["Samsung", "Galaxy S20 FE", 407, 2020, "M"],
  ["Samsung", "Galaxy S10", 550, 2019, "M"],
  ["Samsung", "Galaxy Note 20 Ultra", 496, 2020, "F"],
  ["Samsung", "Galaxy Note 10+", 498, 2019, "F"],
  ["Samsung", "Galaxy Z Fold 5", 374, 2023, "F"],
  ["Samsung", "Galaxy Z Flip 5", 425, 2023, "F"],
  ["Samsung", "Galaxy A54", 405, 2023, "M"],
  ["Samsung", "Galaxy A53", 405, 2022, "M"],
  ["Samsung", "Galaxy A34", 390, 2023, "M"],
  ["Samsung", "Galaxy A24", 411, 2023, "M"],
  ["Samsung", "Galaxy A14", 269, 2023, "B"],
  ["Samsung", "Galaxy A13", 269, 2021, "B"],
  ["Samsung", "Galaxy A12", 269, 2020, "B"],
  ["Samsung", "Galaxy M33", 394, 2022, "B"],
  ["Samsung", "Galaxy M13", 269, 2022, "B"],

  // ═══ XIAOMI (22) ═══
  ["Xiaomi", "14 Ultra", 522, 2024, "F"],
  ["Xiaomi", "14 Pro", 522, 2024, "F"],
  ["Xiaomi", "14", 460, 2024, "F"],
  ["Xiaomi", "13 Pro", 522, 2023, "F"],
  ["Xiaomi", "13", 460, 2023, "F"],
  ["Xiaomi", "13 Lite", 402, 2023, "M"],
  ["Xiaomi", "12 Pro", 522, 2022, "F"],
  ["Xiaomi", "12", 419, 2022, "F"],
  ["Xiaomi", "12X", 419, 2022, "M"],
  ["Xiaomi", "11T Pro", 395, 2021, "M"],
  ["Xiaomi", "11 Lite NE", 402, 2021, "M"],
  ["Xiaomi", "Redmi Note 13 Pro+", 446, 2023, "M"],
  ["Xiaomi", "Redmi Note 13 Pro", 446, 2023, "M"],
  ["Xiaomi", "Redmi Note 13", 395, 2023, "M"],
  ["Xiaomi", "Redmi Note 12 Pro", 395, 2022, "M"],
  ["Xiaomi", "Redmi Note 12", 395, 2022, "M"],
  ["Xiaomi", "Redmi Note 11", 409, 2022, "M"],
  ["Xiaomi", "Redmi Note 10 Pro", 395, 2021, "M"],
  ["Xiaomi", "Redmi Note 9", 395, 2020, "B"],
  ["Xiaomi", "Redmi 13C", 260, 2023, "B"],
  ["Xiaomi", "Redmi 12", 396, 2023, "B"],
  ["Xiaomi", "Redmi 10", 405, 2022, "B"],

  // ═══ POCO (10) ═══
  ["POCO", "F6 Pro", 526, 2024, "F"],
  ["POCO", "F6", 446, 2024, "F"],
  ["POCO", "F5 Pro", 526, 2023, "F"],
  ["POCO", "F5", 395, 2023, "M"],
  ["POCO", "X6 Pro", 446, 2024, "M"],
  ["POCO", "X6", 395, 2024, "M"],
  ["POCO", "X5 Pro", 395, 2022, "M"],
  ["POCO", "M6 Pro", 395, 2023, "B"],
  ["POCO", "M5", 395, 2022, "B"],
  ["POCO", "M4 Pro", 409, 2022, "B"],

  // ═══ OPPO (15) ═══
  ["Oppo", "Find X7 Ultra", 510, 2024, "F"],
  ["Oppo", "Find X6 Pro", 510, 2023, "F"],
  ["Oppo", "Find X5", 402, 2022, "F"],
  ["Oppo", "Reno 12 Pro", 450, 2024, "M"],
  ["Oppo", "Reno 12", 394, 2024, "M"],
  ["Oppo", "Reno 11 Pro", 450, 2023, "M"],
  ["Oppo", "Reno 11", 394, 2023, "M"],
  ["Oppo", "Reno 10 Pro+", 450, 2023, "M"],
  ["Oppo", "Reno 10", 409, 2023, "M"],
  ["Oppo", "Reno 8", 409, 2022, "M"],
  ["Oppo", "A98", 392, 2023, "B"],
  ["Oppo", "A78", 409, 2023, "B"],
  ["Oppo", "A58", 269, 2023, "B"],
  ["Oppo", "A17", 269, 2023, "B"],
  ["Oppo", "A16", 269, 2022, "B"],

  // ═══ VIVO (15) ═══
  ["Vivo", "X100 Pro", 453, 2024, "F"],
  ["Vivo", "X100", 453, 2024, "F"],
  ["Vivo", "X90 Pro", 453, 2023, "F"],
  ["Vivo", "X80", 398, 2022, "F"],
  ["Vivo", "V30 Pro", 453, 2024, "M"],
  ["Vivo", "V30", 398, 2024, "M"],
  ["Vivo", "V29", 398, 2023, "M"],
  ["Vivo", "V27", 388, 2023, "M"],
  ["Vivo", "V25", 398, 2022, "M"],
  ["Vivo", "Y36", 394, 2023, "B"],
  ["Vivo", "Y35", 401, 2023, "B"],
  ["Vivo", "Y27", 394, 2023, "B"],
  ["Vivo", "Y22", 269, 2022, "B"],
  ["Vivo", "Y21", 269, 2021, "B"],
  ["Vivo", "Y17s", 269, 2023, "B"],

  // ═══ REALME (15) ═══
  ["Realme", "GT 6", 450, 2024, "F"],
  ["Realme", "GT 5 Pro", 450, 2024, "F"],
  ["Realme", "GT 3", 411, 2023, "F"],
  ["Realme", "GT Neo 5", 450, 2023, "F"],
  ["Realme", "12 Pro+", 394, 2024, "M"],
  ["Realme", "12 Pro", 394, 2024, "M"],
  ["Realme", "11 Pro+", 394, 2023, "M"],
  ["Realme", "11 Pro", 394, 2023, "M"],
  ["Realme", "10 Pro+", 394, 2022, "M"],
  ["Realme", "Narzo 60 Pro", 394, 2023, "M"],
  ["Realme", "Narzo 60", 409, 2023, "B"],
  ["Realme", "Narzo 50", 401, 2022, "B"],
  ["Realme", "C55", 269, 2023, "B"],
  ["Realme", "C53", 269, 2023, "B"],
  ["Realme", "C33", 269, 2022, "B"],

  // ═══ INFINIX (10) ═══
  ["Infinix", "Zero 30 5G", 393, 2023, "M"],
  ["Infinix", "Zero 30", 393, 2023, "M"],
  ["Infinix", "Zero 20", 393, 2022, "M"],
  ["Infinix", "Note 40 Pro", 393, 2024, "M"],
  ["Infinix", "Note 30 Pro", 393, 2023, "M"],
  ["Infinix", "Note 30", 393, 2023, "M"],
  ["Infinix", "Note 12", 393, 2022, "B"],
  ["Infinix", "Hot 40 Pro", 393, 2023, "B"],
  ["Infinix", "Hot 30", 393, 2023, "B"],
  ["Infinix", "Hot 20", 393, 2022, "B"],

  // ═══ TECNO (10) ═══
  ["Tecno", "Phantom X2 Pro", 393, 2023, "F"],
  ["Tecno", "Camon 30 Pro", 393, 2024, "M"],
  ["Tecno", "Camon 20 Pro", 393, 2023, "M"],
  ["Tecno", "Camon 20", 393, 2023, "M"],
  ["Tecno", "Spark 20 Pro+", 393, 2024, "B"],
  ["Tecno", "Spark 20 Pro", 393, 2024, "B"],
  ["Tecno", "Spark 20", 393, 2023, "B"],
  ["Tecno", "Spark 10 Pro", 393, 2023, "B"],
  ["Tecno", "Pova 5 Pro", 393, 2023, "B"],
  ["Tecno", "Pova 4", 393, 2022, "B"],

  // ═══ ONEPLUS (10) ═══
  ["OnePlus", "12", 510, 2024, "F"],
  ["OnePlus", "12R", 450, 2024, "F"],
  ["OnePlus", "11", 525, 2023, "F"],
  ["OnePlus", "10 Pro", 525, 2022, "F"],
  ["OnePlus", "9 Pro", 525, 2021, "F"],
  ["OnePlus", "Nord 4", 450, 2024, "M"],
  ["OnePlus", "Nord 3", 450, 2023, "M"],
  ["OnePlus", "Nord CE 3", 394, 2023, "M"],
  ["OnePlus", "Nord N30", 394, 2023, "B"],
  ["OnePlus", "Nord N20", 409, 2022, "B"],

  // ═══ GOOGLE PIXEL (10) ═══
  ["Google", "Pixel 8 Pro", 489, 2023, "F"],
  ["Google", "Pixel 8", 428, 2023, "F"],
  ["Google", "Pixel 8a", 430, 2024, "M"],
  ["Google", "Pixel 7 Pro", 512, 2022, "F"],
  ["Google", "Pixel 7", 416, 2022, "F"],
  ["Google", "Pixel 7a", 429, 2023, "M"],
  ["Google", "Pixel 6 Pro", 512, 2021, "F"],
  ["Google", "Pixel 6", 411, 2021, "F"],
  ["Google", "Pixel 6a", 429, 2022, "M"],
  ["Google", "Pixel 5", 432, 2020, "M"],

  // ═══ HUAWEI / HONOR (8) ═══
  ["Huawei", "P60 Pro", 450, 2023, "F"],
  ["Huawei", "P50 Pro", 450, 2021, "F"],
  ["Huawei", "Nova 11", 395, 2023, "M"],
  ["Huawei", "Nova 10", 395, 2022, "M"],
  ["Honor", "Magic 6 Pro", 453, 2024, "F"],
  ["Honor", "Magic 5 Pro", 461, 2023, "F"],
  ["Honor", "90", 435, 2023, "M"],
  ["Honor", "X9b", 429, 2024, "M"],

  // ═══ ASUS / LENOVO / NOKIA (6) ═══
  ["Asus", "ROG Phone 8 Pro", 391, 2024, "F"],
  ["Asus", "ROG Phone 7", 395, 2023, "F"],
  ["Asus", "Zenfone 10", 445, 2023, "F"],
  ["Lenovo", "Legion Y70", 393, 2022, "F"],
  ["Nokia", "G42 5G", 269, 2023, "B"],
  ["Nokia", "C32", 269, 2023, "B"],
];

export const DEVICES: Device[] = RAW.map(([brand, model, dpi, year, tier]) => ({
  brand,
  model,
  dpi,
  year,
  tier,
}));

export const BRANDS: string[] = Array.from(
  new Set(DEVICES.map((d) => d.brand))
).sort();

export function getModelsByBrand(brand: string): Device[] {
  return DEVICES.filter((d) => d.brand === brand);
}

// Popular devices for quick select (grid)
export const POPULAR_MODELS: string[] = [
  "iPhone 15 Pro Max",
  "iPhone 15",
  "iPhone 14",
  "iPhone 13",
  "iPhone 12",
  "iPhone 11",
  "Galaxy S24 Ultra",
  "Galaxy S23",
  "Galaxy S22",
  "Galaxy A54",
  "Galaxy A14",
  "Redmi Note 13 Pro",
  "Redmi Note 12",
  "POCO F5",
  "Xiaomi 13",
  "Find X6 Pro",
  "Reno 10",
  "Vivo V29",
  "Realme 11 Pro",
  "OnePlus 11",
  "Pixel 8 Pro",
  "Infinix Note 30",
  "Tecno Spark 20",
  "ROG Phone 7",
];

export function findDevice(model: string): Device | undefined {
  return DEVICES.find((d) => d.model === model);
}

export function getTotalDevices(): number {
  return DEVICES.length;
}