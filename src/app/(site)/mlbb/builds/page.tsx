"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ChevronLeft, Info, X } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { useLang } from "@/lib/i18n";
import { UNIQUE_HEROES, ROLE_LABELS } from "@/lib/mlbbTierData";
import { HERO_BUILDS, ITEM_DETAILS, getBuild } from "@/lib/heroBuilds";

const TALENT_SLUG_OVERRIDES: Record<string, string> = {
  "Weapon Master": "weapons-master",
  "Inspire": "talent-inspire",
};

function talentSlug(name: string): string {
  if (TALENT_SLUG_OVERRIDES[name]) return TALENT_SLUG_OVERRIDES[name];
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function BuildsPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [q, setQ] = useState("");
  const [tabs, setTabs] = useState<Record<string, number>>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const list = useMemo(() => {
    const n = q.trim().toLowerCase();
    if (!n) return UNIQUE_HEROES;
    return UNIQUE_HEROES.filter((h) => h.name.toLowerCase().includes(n));
  }, [q]);

  return (
    <div>
      <MoodSetter mood="mlbb" />

      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <Link
          href="/mlbb"
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-bold text-muted"
        >
          <ChevronLeft size={13} /> {km ? "ត្រឡប់ MLBB Hub" : "Back to MLBB Hub"}
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-6 sm:px-6">
        <h1 className="text-3xl font-black sm:text-4xl">
          {km ? "Build ណែនាំ" : "Recommended Builds"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          Item + Spell + Emblem — Meta 2026
        </p>
        <div className="relative mt-6">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={km ? "ស្វែងរក hero..." : "Search hero..."}
            className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm"
          />
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-faint">
          <Info size={11} />
          {km
            ? "បង្ហាញ " + list.length + " / " + UNIQUE_HEROES.length + " heroes"
            : "Showing " + list.length + " / " + UNIQUE_HEROES.length + " heroes"}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 pt-8 sm:px-6">
        <div className="space-y-6">
          {list.map((h) => {
            const roleInfo = ROLE_LABELS[h.role];
            const color = roleInfo.color;
            const heroBuild = getBuild(h.id, h.name, h.role);
            if (!heroBuild) return null;
            const variants = heroBuild.variants;
            const tabIdx = tabs[h.id] ?? 0;
            const variant = variants[tabIdx];
            return (
              <div
                key={h.id}
                className="overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <div
                  className="flex items-center gap-4 border-b border-line p-5"
                  style={{ background: "linear-gradient(135deg, " + color + "15 0%, transparent 100%)" }}
                >
                  <div className="h-14 w-14 overflow-hidden rounded-2xl" style={{ background: color + "22" }}>
                    <img src={"/images/mlbb/heroes/" + h.id + ".png"} alt={h.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-black">{h.name}</div>
                    <div className="text-xs font-bold" style={{ color }}>{h.role.toUpperCase()}</div>
                  </div>
                  <Link href={"/mlbb/" + h.id} className="text-xs font-bold text-muted hover:text-fg">
                    {km ? "មើល →" : "View →"}
                  </Link>
                </div>

                <div className="flex gap-1 border-b border-line px-5">
                  {variants.map((v, vi) => (
                    <button
                      key={vi}
                      onClick={() => setTabs({ ...tabs, [h.id]: vi })}
                      className={
                        "border-b-2 px-3 py-3 text-xs font-black uppercase tracking-wider transition-colors " +
                        (vi === tabIdx ? "border-purple-500 text-purple-400" : "border-transparent text-faint hover:text-muted")
                      }
                    >
                      {km ? v.titleKm : v.titleEn}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <div className="mb-3 text-[11px] font-black uppercase tracking-wider text-faint">
                    {km ? "ITEM" : "ITEMS"}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {variant.items.map((slug, ii) => {
                      const item = ITEM_DETAILS[slug];
                      return (
                        <button
                          key={ii}
                          onClick={() => setSelectedItem(slug)}
                          className="flex flex-col items-center gap-1.5"
                        >
                          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border-2" style={{ borderColor: "#333", background: color + "15" }}>
                            <img src={"/images/mlbb/items/" + slug + ".png"} alt={item?.nameEn || slug} className="h-full w-full object-contain" />
                            <span className="absolute bottom-0 right-0 rounded-tl-lg bg-purple-600 px-1 text-[9px] font-black text-white">
                              {ii + 1}
                            </span>
                          </div>
                          <span className="w-14 truncate text-center text-[10px] font-bold text-muted">
                            {item?.nameEn || slug}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <div className="mb-3 text-[11px] font-black uppercase tracking-wider text-faint">
                        SPELLS
                      </div>
                      <div className="flex gap-3">
                        {variant.spells.map((s, si) => (
                          <div key={si} className="flex flex-col items-center gap-1.5">
                            <div className="h-14 w-14 overflow-hidden rounded-2xl border-2" style={{ borderColor: "#333", background: color + "15" }}>
                              <img src={"/images/mlbb/spells/" + s + ".png"} alt={s} className="h-full w-full object-contain" />
                            </div>
                            <span className="text-[10px] font-bold capitalize text-muted">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-3 text-[11px] font-black uppercase tracking-wider text-faint">
                        EMBLEMS
                      </div>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="h-14 w-14 overflow-hidden rounded-2xl border-2" style={{ borderColor: "#7c3aed", background: "#7c3aed15" }}>
                            <img src={"/images/mlbb/emblems/" + variant.emblem + ".png"} alt={variant.emblem} className="h-full w-full object-contain" />
                          </div>
                          <span className="text-[10px] font-bold capitalize text-muted">{variant.emblem}</span>
                        </div>
                        {variant.talents.map((t, ti) => {
                          const slug = talentSlug(t);
                          return (
                            <div key={ti} className="flex flex-col items-center gap-1.5">
                              <div className="h-14 w-14 overflow-hidden rounded-2xl border-2" style={{ borderColor: "#7c3aed", background: "#7c3aed15" }}>
                                <img src={"/images/mlbb/talents/" + slug + ".png"} alt={t} className="h-full w-full object-contain" />
                              </div>
                              <span className="w-14 truncate text-center text-[10px] font-bold text-muted">{t}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedItem && ITEM_DETAILS[selectedItem] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setSelectedItem(null)}>
          <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-2xl border-2 border-line bg-black/20">
                  <img src={"/images/mlbb/items/" + selectedItem + ".png"} alt={selectedItem} className="h-full w-full object-contain" />
                </div>
                <div>
                  <div className="text-lg font-black">{km ? ITEM_DETAILS[selectedItem].nameKm : ITEM_DETAILS[selectedItem].nameEn}</div>
                  <div className="text-xs text-muted">{ITEM_DETAILS[selectedItem].price} gold</div>
                </div>
              </div>
              <button onClick={() => setSelectedItem(null)} className="rounded-full p-1 text-muted hover:text-fg">
                <X size={18} />
              </button>
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <div>
                <div className="font-black text-emerald-400">{km ? "ស្ថិតិ" : "Stats"}</div>
                <div className="text-muted">{km ? ITEM_DETAILS[selectedItem].stats.km : ITEM_DETAILS[selectedItem].stats.en}</div>
              </div>
              <div>
                <div className="font-black text-purple-400">Passive</div>
                <div className="text-muted">{km ? ITEM_DETAILS[selectedItem].passive.km : ITEM_DETAILS[selectedItem].passive.en}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}