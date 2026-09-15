export type Playstyle =
  | "headshot"
  | "onetap"
  | "clash"
  | "br"
  | "balanced"
  | "sniper";

export type DeviceTier = "F" | "M" | "B";

export type SensitivityResult = {
  general: number;
  redDot: number;
  scope2x: number;
  scope4x: number;
  sniper: number;
  awm: number;
  freeLook: number;
  fireButton: number;
  dpi: number;
  playstyle: Playstyle;
  deviceTier: DeviceTier;
  deviceAge: number;
};

// Base values per playstyle (community-tuned, reference = 400 DPI, flagship, new device)
const BASE: Record<
  Playstyle,
  Omit<
    SensitivityResult,
    "dpi" | "playstyle" | "deviceTier" | "deviceAge"
  >
> = {
  headshot: {
    general: 165, redDot: 145, scope2x: 130, scope4x: 115,
    sniper: 85, awm: 60, freeLook: 75, fireButton: 90,
  },
  onetap: {
    general: 185, redDot: 160, scope2x: 140, scope4x: 120,
    sniper: 90, awm: 65, freeLook: 80, fireButton: 95,
  },
  clash: {
    general: 175, redDot: 150, scope2x: 135, scope4x: 115,
    sniper: 85, awm: 60, freeLook: 75, fireButton: 92,
  },
  br: {
    general: 170, redDot: 148, scope2x: 128, scope4x: 110,
    sniper: 80, awm: 58, freeLook: 78, fireButton: 88,
  },
  balanced: {
    general: 160, redDot: 140, scope2x: 125, scope4x: 105,
    sniper: 75, awm: 55, freeLook: 70, fireButton: 85,
  },
  sniper: {
    general: 130, redDot: 115, scope2x: 100, scope4x: 85,
    sniper: 55, awm: 45, freeLook: 65, fireButton: 75,
  },
};

const clamp = (v: number) => Math.max(20, Math.min(200, Math.round(v)));

export function calculateSensitivity(
  dpi: number,
  tier: DeviceTier,
  deviceAge: number,
  playstyle: Playstyle
): SensitivityResult {
  const base = BASE[playstyle];

  // Higher DPI → lower sensitivity (reference = 400 DPI)
  const dpiFactor = 400 / dpi;

  // Budget devices need slightly higher sensitivity to compensate for lag
  const tierFactor = tier === "F" ? 1 : tier === "M" ? 1.05 : 1.12;

  // Older devices: +2% per year (cap +12%)
  const ageFactor = 1 + Math.min(deviceAge * 0.02, 0.12);

  const factor = dpiFactor * tierFactor * ageFactor;

  return {
    general:    clamp(base.general * factor),
    redDot:     clamp(base.redDot * factor),
    scope2x:    clamp(base.scope2x * factor),
    scope4x:    clamp(base.scope4x * factor),
    sniper:     clamp(base.sniper * factor),
    awm:        clamp(base.awm * factor),
    freeLook:   clamp(base.freeLook * factor),
    fireButton: clamp(base.fireButton * factor),
    dpi,
    playstyle,
    deviceTier: tier,
    deviceAge,
  };
}

// ─── Labels ───
export const PLAYSTYLE_LABELS: Record<
  Playstyle,
  { en: string; km: string; emoji: string }
> = {
  headshot: { en: "Headshot",    km: "Headshot",    emoji: "🎯" },
  onetap:   { en: "One Tap",     km: "One Tap",     emoji: "⚡" },
  clash:    { en: "Clash Squad", km: "Clash Squad", emoji: "🔥" },
  br:       { en: "BR Ranked",   km: "BR Ranked",   emoji: "🏆" },
  balanced: { en: "Balanced",    km: "សមតុល្យ",     emoji: "⚖️" },
  sniper:   { en: "Sniper",      km: "Sniper",      emoji: "🎯" },
};

export const SENSITIVITY_ROWS: {
  key:
    | "general"
    | "redDot"
    | "scope2x"
    | "scope4x"
    | "sniper"
    | "awm"
    | "freeLook"
    | "fireButton";
  en: string;
  km: string;
  color: string;
}[] = [
  { key: "general",    en: "General",    km: "ទូទៅ",         color: "#ef4444" },
  { key: "redDot",     en: "Red Dot",    km: "Red Dot",      color: "#f59e0b" },
  { key: "scope2x",    en: "2X Scope",   km: "2X Scope",     color: "#22c55e" },
  { key: "scope4x",    en: "4X Scope",   km: "4X Scope",     color: "#3b82f6" },
  { key: "sniper",     en: "Sniper",     km: "Sniper",       color: "#8b5cf6" },
  { key: "awm",        en: "AWM Scope",  km: "AWM Scope",    color: "#a855f7" },
  { key: "freeLook",   en: "Free Look",  km: "Free Look",    color: "#22d3ee" },
  { key: "fireButton", en: "Fire Button",km: "Fire Button",  color: "#f43f5e" },
];

export const TIER_LABELS: Record<
  DeviceTier,
  { en: string; km: string; color: string }
> = {
  F: { en: "Flagship",  km: "កំពូល",  color: "#22c55e" },
  M: { en: "Mid-range", km: "មធ្យម",  color: "#f59e0b" },
  B: { en: "Budget",    km: "សន្សំ",  color: "#6b7280" },
};