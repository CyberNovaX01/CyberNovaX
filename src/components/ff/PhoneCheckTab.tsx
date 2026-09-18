"use client";
import { useMemo, useState } from "react";
import { Smartphone, Search, X, Gamepad2, Swords, TrendingUp, Calendar, ChevronRight, Flame, Cpu, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { PHONES, BRANDS, CHIPSETS, getPhone, generatePerformance, type Phone } from "@/lib/phoneData";
const TIER_COLORS: Record<string, string> = {
  S: "#f5c542",
  A: "#22d3ee",
  B: "#22c55e",
  C: "#6b7280",
};
function PhoneCard({ phone, onClick }: { phone: Phone; onClick: () => void }) {
  const chipset = CHIPSETS.find(c => c.id === phone.chipsetId);
  const perf = generatePerformance(phone);
  const score = perf.overallScore;
  const tier = score >= 85 ? "S" : score >= 70 ? "A" : score >= 50 ? "B" : "C";
  return (
    <button
      onClick={onClick}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-line bg-surface p-4 text-left transition-all hover:-translate-y-1 hover:border-purple-500/50"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-3">
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
          style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}
        >
          <Smartphone size={20} className="text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-black text-fg">{phone.model}</div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-faint">{phone.brand} · {phone.year}</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
        <span className="rounded-md bg-black/30 px-2 py-0.5 font-bold text-cyan-300">{phone.ram}GB RAM</span>
        <span className="rounded-md bg-black/30 px-2 py-0.5 font-bold text-cyan-300">{chipset?.name || "Unknown"}</span>
      </div>
      <div className="mt-auto flex items-center justify-between pt-3">
        <span
          className="rounded-md px-2 py-0.5 text-[10px] font-black"
          style={{ background: TIER_COLORS[tier] + "22", color: TIER_COLORS[tier] }}
        >
          TIER {tier} · {score}
        </span>
        <span className="text-[10px] font-bold text-purple-400 transition-all group-hover:translate-x-1">
          {phone.displayHz}Hz →
        </span>
      </div>
    </button>
  );
}
function ResultModal({ phone, onClose }: { phone: Phone; onClose: () => void }) {
  const { lang } = useLang();
  const km = lang === "km";
  const chipset = CHIPSETS.find(c => c.id === phone.chipsetId);
  const perf = generatePerformance(phone);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-surface p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-line bg-black/40 text-muted hover:text-fg"
        >
          <X size={16} />
        </button>
        <div className="flex items-center gap-4">
          <div
            className="grid h-16 w-16 place-items-center rounded-2xl"
            style={{ background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)" }}
          >
            <Smartphone size={28} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black">{phone.model}</h2>
            <p className="text-sm text-muted">{phone.brand} · {phone.year} · {chipset?.name}</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-line bg-black/20 p-3">
            <Cpu size={14} className="text-cyan-400" />
            <div className="mt-2 text-[10px] font-bold uppercase text-faint">RAM</div>
            <div className="text-sm font-black">{phone.ram}GB</div>
          </div>
          <div className="rounded-xl border border-line bg-black/20 p-3">
            <Zap size={14} className="text-yellow-400" />
            <div className="mt-2 text-[10px] font-bold uppercase text-faint">Display</div>
            <div className="text-sm font-black">{phone.displayHz}Hz</div>
          </div>
          <div className="rounded-xl border border-line bg-black/20 p-3">
            <TrendingUp size={14} className="text-green-400" />
            <div className="mt-2 text-[10px] font-bold uppercase text-faint">Score</div>
            <div className="text-sm font-black">{perf.overallScore}/100</div>
          </div>
          <div className="rounded-xl border border-line bg-black/20 p-3">
            <Calendar size={14} className="text-orange-400" />
            <div className="mt-2 text-[10px] font-bold uppercase text-faint">Lifespan</div>
            <div className="text-sm font-black">{perf.lifespanYears} {km ? "ឆ្នាំ" : "yr"}</div>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border-2 p-4" style={{ borderColor: "#ef444440" }}>
            <div className="flex items-center gap-2">
              <Gamepad2 size={18} className="text-red-400" />
              <h3 className="text-sm font-black">Free Fire</h3>
              <span className="ml-auto text-lg font-black" style={{ color: TIER_COLORS[perf.ff.tier] }}>
                {perf.ff.tier}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-black/20 p-2">
                <div className="text-[9px] font-bold uppercase text-faint">Status</div>
                <div className={`text-xs font-black ${perf.ff.canPlay ? "text-green-400" : "text-red-400"}`}>
                  {perf.ff.canPlay ? "OK" : "NO"}
                </div>
              </div>
              <div className="rounded-lg bg-black/20 p-2">
                <div className="text-[9px] font-bold uppercase text-faint">FPS</div>
                <div className="text-xs font-black text-cyan-400">{perf.ff.fps}</div>
              </div>
              <div className="rounded-lg bg-black/20 p-2">
                <div className="text-[9px] font-bold uppercase text-faint">GFX</div>
                <div className="text-xs font-black text-yellow-400">{perf.ff.graphics}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {perf.ff.settings.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted">
                  <ChevronRight size={10} className="text-red-400" />
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border-2 p-4" style={{ borderColor: "#3b82f640" }}>
            <div className="flex items-center gap-2">
              <Swords size={18} className="text-blue-400" />
              <h3 className="text-sm font-black">Mobile Legends</h3>
              <span className="ml-auto text-lg font-black" style={{ color: TIER_COLORS[perf.mlbb.tier] }}>
                {perf.mlbb.tier}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-black/20 p-2">
                <div className="text-[9px] font-bold uppercase text-faint">Status</div>
                <div className={`text-xs font-black ${perf.mlbb.canPlay ? "text-green-400" : "text-red-400"}`}>
                  {perf.mlbb.canPlay ? "OK" : "NO"}
                </div>
              </div>
              <div className="rounded-lg bg-black/20 p-2">
                <div className="text-[9px] font-bold uppercase text-faint">FPS</div>
                <div className="text-xs font-black text-cyan-400">{perf.mlbb.fps}</div>
              </div>
              <div className="rounded-lg bg-black/20 p-2">
                <div className="text-[9px] font-bold uppercase text-faint">GFX</div>
                <div className="text-xs font-black text-yellow-400">{perf.mlbb.graphics}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              {perf.mlbb.settings.map((s, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted">
                  <ChevronRight size={10} className="text-blue-400" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function PhoneCheckTab() {
  const { lang } = useLang();
  const km = lang === "km";
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [selectedPhoneId, setSelectedPhoneId] = useState<string | null>(null);
  const filtered = useMemo(() => {
    let list = PHONES;
    if (brandFilter !== "all") list = list.filter(p => p.brand === brandFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.model.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }
    return list;
  }, [search, brandFilter]);
  const popular = useMemo(() => {
    return [...PHONES].sort((a, b) => {
      const sa = CHIPSETS.find(c => c.id === a.chipsetId)?.score || 0;
      const sb = CHIPSETS.find(c => c.id === b.chipsetId)?.score || 0;
      return sb - sa;
    }).slice(0, 6);
  }, []);
  const selectedPhone = selectedPhoneId ? getPhone(selectedPhoneId) : null;
  return (
    <div>
      <div className="relative">
        <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={km ? "ស្វែងរកទូរស័ព្ទ..." : "Search phone..."}
          className="w-full rounded-2xl border border-line bg-surface/60 py-3.5 pl-11 pr-4 text-sm"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setBrandFilter("all")}
          className="rounded-full border px-3 py-1.5 text-xs font-bold transition-all"
          style={{
            borderColor: brandFilter === "all" ? "#a78bfa" : "var(--color-line)",
            color: brandFilter === "all" ? "#a78bfa" : "var(--color-muted)",
            background: brandFilter === "all" ? "rgba(167,139,250,0.1)" : "transparent",
          }}
        >
          {km ? "ទាំងអស់" : "All"} ({PHONES.length})
        </button>
        {BRANDS.map((b) => {
          const count = PHONES.filter(p => p.brand === b).length;
          const active = brandFilter === b;
          return (
            <button
              key={b}
              onClick={() => setBrandFilter(b)}
              className="rounded-full border px-3 py-1.5 text-xs font-bold transition-all"
              style={{
                borderColor: active ? "#a78bfa" : "var(--color-line)",
                color: active ? "#a78bfa" : "var(--color-muted)",
                background: active ? "rgba(167,139,250,0.1)" : "transparent",
              }}
            >
              {b} ({count})
            </button>
          );
        })}
      </div>
      {!search && brandFilter === "all" && (
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <Flame size={16} className="text-orange-400" />
            <h3 className="text-sm font-black uppercase tracking-wider text-orange-400">
              {km ? "ទូរស័ព្ទពេញនិយម" : "Popular Phones"}
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((p) => (
              <PhoneCard key={p.id} phone={p} onClick={() => setSelectedPhoneId(p.id)} />
            ))}
          </div>
        </div>
      )}
      <div className="mt-10">
        <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-faint">
          {km ? "ទូរស័ព្ទទាំងអស់" : "All Phones"} ({filtered.length})
        </h3>
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line bg-surface/40 p-12 text-center">
            <Search size={32} className="mx-auto text-faint" />
            <p className="mt-3 text-sm text-muted">
              {km ? "រកមិនឃើញទូរស័ព្ទ" : "No phones found"}
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PhoneCard key={p.id} phone={p} onClick={() => setSelectedPhoneId(p.id)} />
            ))}
          </div>
        )}
      </div>
      {selectedPhone && (
        <ResultModal phone={selectedPhone} onClose={() => setSelectedPhoneId(null)} />
      )}
    </div>
  );
}