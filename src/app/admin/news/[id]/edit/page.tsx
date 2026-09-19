"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Loader2,
  Save,
  Calendar,
  Tag as TagIcon,
  Type,
  FileText,
  Image as ImageIcon,
  Link as LinkIcon,
} from "lucide-react";

type NewsItem = {
  id: string;
  game: string;
  category: string;
  tag: string;
  accent: string;
  date: string;
  title_km: string;
  title_en: string;
  excerpt_km: string;
  excerpt_en: string;
  content_km: string;
  content_en: string;
  image_url?: string;
  blog_slug?: string;
};

const CATEGORIES = ["hero", "skin", "event", "patch", "guide", "tips"];
const ACCENTS = [
  "#22d3ee",
  "#a855f7",
  "#f59e0b",
  "#ef4444",
  "#22c55e",
  "#ec4899",
  "#06b6d4",
];

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState<NewsItem>({
    id: "",
    game: "mlbb",
    category: "hero",
    tag: "",
    accent: "#22d3ee",
    date: "",
    title_km: "",
    title_en: "",
    excerpt_km: "",
    excerpt_en: "",
    content_km: "",
    content_en: "",
    image_url: "",
    blog_slug: "",
  });

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await fetch("/api/news");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const found = (data.news || []).find((n: any) => n.id === id);
        if (!found) {
          setMessage("❌ រកមិនឃើញព័ត៌មាននេះទេ");
          setLoading(false);
          return;
        }
        setForm({
          id: found.id,
          game: found.game || "mlbb",
          category: found.category || "hero",
          tag: found.tag || "",
          accent: found.accent || "#22d3ee",
          date: found.date || "",
          title_km: found.title?.km || "",
          title_en: found.title?.en || "",
          excerpt_km: found.excerpt?.km || "",
          excerpt_en: found.excerpt?.en || "",
          content_km: found.content?.km || "",
          content_en: found.content?.en || "",
          image_url: found.image || "",
          blog_slug: found.blogSlug || "",
        });
      } catch {
        setMessage("❌ មានបញ្ហាក្នុងការ Load ទិន្នន័យ");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const update = (key: keyof NewsItem, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!form.title_km || !form.title_en) {
      setMessage("❌ សូមបំពេញចំណងជើង (ខ្មែរ + អង់គ្លេស)");
      return;
    }
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/news/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ បានកែប្រែដោយជោគជ័យ! កំពុងត្រឡប់...");
        setTimeout(() => router.push("/admin"), 1200);
      } else {
        setMessage(`❌ ${data.error || "Save failed"}`);
      }
    } catch {
      setMessage("❌ Network error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0d14]">
        <Loader2 size={32} className="animate-spin text-cyan-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition-all hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Edit News
            </h1>
            <p className="text-xs font-bold uppercase tracking-wider text-muted">
              កែប្រែព័ត៌មាន — ID: {id}
            </p>
          </div>
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-bold text-cyan-400">
            {message}
          </div>
        )}

        {/* FORM */}
        <div className="mt-8 space-y-5 rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
          {/* GAME + CATEGORY */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
                <Type size={12} /> Game
              </label>
              <div className="flex gap-2">
                {["mlbb", "ff"].map((g) => (
                  <button
                    key={g}
                    onClick={() => update("game", g)}
                    className="flex-1 rounded-xl border px-4 py-2.5 text-sm font-black transition-all"
                    style={{
                      borderColor:
                        form.game === g ? "#22d3ee" : "var(--color-line)",
                      background:
                        form.game === g ? "rgba(34,211,238,0.15)" : "transparent",
                      color: form.game === g ? "#22d3ee" : "var(--color-muted)",
                    }}
                  >
                    {g === "mlbb" ? "MLBB" : "FREE FIRE"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
                <TagIcon size={12} /> Category
              </label>
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* TAG + DATE */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
                <TagIcon size={12} /> Tag
              </label>
              <input
                type="text"
                value={form.tag}
                onChange={(e) => update("tag", e.target.value)}
                placeholder="NEW HERO"
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
                <Calendar size={12} /> Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* ACCENT */}
          <div>
            <label className="mb-2 block text-xs font-black uppercase tracking-wider text-muted">
              Accent Color
            </label>
            <div className="flex flex-wrap gap-2">
              {ACCENTS.map((c) => (
                <button
                  key={c}
                  onClick={() => update("accent", c)}
                  className="h-9 w-9 rounded-full border-2 transition-all"
                  style={{
                    background: c,
                    borderColor:
                      form.accent === c ? "#ffffff" : "transparent",
                    transform: form.accent === c ? "scale(1.15)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* TITLE KM + EN */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-black uppercase tracking-wider text-muted">
                Title (ខ្មែរ)
              </label>
              <input
                type="text"
                value={form.title_km}
                onChange={(e) => update("title_km", e.target.value)}
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-black uppercase tracking-wider text-muted">
                Title (English)
              </label>
              <input
                type="text"
                value={form.title_en}
                onChange={(e) => update("title_en", e.target.value)}
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* EXCERPT */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-black uppercase tracking-wider text-muted">
                Excerpt (ខ្មែរ)
              </label>
              <textarea
                value={form.excerpt_km}
                onChange={(e) => update("excerpt_km", e.target.value)}
                rows={3}
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-black uppercase tracking-wider text-muted">
                Excerpt (English)
              </label>
              <textarea
                value={form.excerpt_en}
                onChange={(e) => update("excerpt_en", e.target.value)}
                rows={3}
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
              <FileText size={12} /> Content (ខ្មែរ) — Markdown
            </label>
            <textarea
              value={form.content_km}
              onChange={(e) => update("content_km", e.target.value)}
              rows={8}
              className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
              <FileText size={12} /> Content (English) — Markdown
            </label>
            <textarea
              value={form.content_en}
              onChange={(e) => update("content_en", e.target.value)}
              rows={8}
              className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>

          {/* IMAGE URL + BLOG SLUG */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
                <ImageIcon size={12} /> Image URL
              </label>
              <input
                type="text"
                value={form.image_url || ""}
                onChange={(e) => update("image_url", e.target.value)}
                placeholder="https://..."
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted">
                <LinkIcon size={12} /> Blog Slug
              </label>
              <input
                type="text"
                value={form.blog_slug || ""}
                onChange={(e) => update("blog_slug", e.target.value)}
                placeholder="optional"
                className="w-full rounded-xl border border-line bg-black/30 px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-line pt-5">
            <Link
              href="/admin"
              className="rounded-xl border border-line bg-surface/60 px-5 py-2.5 text-sm font-black text-muted transition-all hover:border-red-500/30 hover:text-red-400"
            >
              Cancel
            </Link>
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-2.5 text-sm font-black text-[#0a0d14] shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={15} />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}