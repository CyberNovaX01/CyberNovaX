// src/lib/types.ts
export type Lang = "km" | "en";
export type Loc = { km: string; en: string };
export const pick = (l: Loc | null | undefined, lang: Lang) => (l ? l[lang] || l.en || l.km : "");

export interface Game {
  id: string; slug: string; name: Loc; tagline: Loc | null;
  accent: string; mood: "cosmic" | "ff" | "mlbb";
  last_updated: string | null; sort: number; visible: boolean;
}
export interface Brand { id: string; game_id: string; name: string; logo_url: string | null; sort: number; }
export interface Model { id: string; brand_id: string; name: string; image_url: string | null; sort: number; }
export interface Variant { id: string; model_id: string; label: string; sort: number; }
export interface Option { id: string; game_id: string; kind: "play_style" | "finger"; name: Loc; icon: string | null; sort: number; }

export const ROLES = ["Assassin", "Tank", "Mage", "Marksman", "Fighter", "Support"] as const;
export type Role = (typeof ROLES)[number];

export interface Hero {
  id: string; game_id: string; name: Loc; role: Role;
  difficulty: 1 | 2 | 3; image_url: string | null; sort: number; visible: boolean;
}
export interface Item { id: string; game_id: string; name: Loc; kind: string; image_url: string | null; sort: number; }

export interface Guide {
  id: string; game_id: string; slug: string; title: Loc; summary: Loc | null;
  content: Loc; hero_id: string | null; brand_id: string | null; model_id: string | null;
  variant_id: string | null; play_style_id: string | null; finger_id: string | null;
  patch: string | null; draft: { km?: string; en?: string } | null;
  published: boolean; views: number; updated_at: string;
}
export interface GuideDetail extends Guide {
  game: Game; hero: Hero | null; brand: Brand | null; model: Model | null;
  variant: Variant | null; play_style: Option | null; finger: Option | null;
  items: Item[]; related: Guide[];
}
export interface DeviceTree extends Brand {
  models: (Model & { variants: Variant[] })[];
}
export interface Settings {
  site_name: string; logo_url: string | null;
  default_lang: Lang; default_theme: "dark" | "light";
}
export interface ActivityRow { id: string; action: string; entity: string; label: string; at: string; }