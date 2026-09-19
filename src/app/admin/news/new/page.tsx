"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Loader2,
  Flame,
  Swords,
  Users,
  Palette,
  Sparkles,
  BookOpen,
  Target,
  Zap,
  Image as ImageIcon,
  X,
  Eye,
  Calendar,
  Newspaper,
} from "lucide-react";

const GAMES = [
  { value: "mlbb", label: "Mobile Legends", color: "#22d3ee" },
  { value: "ff", label: "Free Fire", color: "#f59e0b" },
];

const CATEGORIES = [
  { value: "hero", label: "Hero", icon: Users },
  { value: "skin", label: "Skin", icon: Palette },
  { value: "event", label: "Event", icon: Sparkles },
  { value: "patch", label: "Patch", icon: Zap },
  { value: "guide", label: "Guide", icon: BookOpen },
  { value: "tips", label: "Tips", icon: Target },
];

const ACCENTS = [
  { value: "#22d3ee", label: "Cyan" },
  { value: "#a855f7", label: "Purple" },
  { value: "#f59e0b", label: "Orange" },
  { value: "#ef4444", label: "Red" },
  { value: "#22c55e", label: "Green" },
  { value: "#06b6d4", label: "Sky" },
  { value: "#ec4899", label: "Pink" },
];

// Simple markdown renderer for preview
function renderPreview(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const formatInline = (text: string) => {
    return text.replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="text-white font-black">$1</strong>'
    );
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={"ul-" + key++} className="ml-5 my-3 list-disc space-y-1 text-white/70">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }
    flushList();

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="mt-6 mb-3 text-xl font-black text-white">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed === "") {
      // skip
    } else {
      elements.push(
        <p
          key={key++}
          className="my-2 leading-relaxed text-white/70"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    }
  });

  flushList();
  return elements;
}

export default function AddNewsPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [previewLang, setPreviewLang] = useState<"km" | "en">("km");
  const [form, setForm] = useState({
    id: "",
    tag: "NEW HERO",
    title_km: "",
    title_en: "",
    excerpt_km: "",
    excerpt_en: "",
    content_km: "",
    content_en: "",
    date: new Date().toISOString().split("T")[0],
    accent: "#a855f7",
    game: "mlbb",
    category: "hero",
    credit_url: "",
    credit_name: "",
    blog_slug: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setImageUrl(data.url);
      } else {
        setError(data.error || "Upload failed");
      }
    } catch {
      setError("Network error while uploading");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/admin/news/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, image_url: imageUrl }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/admin");
      } else {
        setError(data.error || "Failed to save");
      }
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  };

  // Check if form is ready for preview
  const isReadyForPreview =
    form.title_km &&
    form.title_en &&
    form.excerpt_km &&
    form.excerpt_en &&
    form.content_km &&
    form.content_en;

  const previewTitle =
    previewLang === "km" ? form.title_km : form.title_en;
  const previewExcerpt =
    previewLang === "km" ? form.excerpt_km : form.excerpt_en;
  const previewContent =
    previewLang === "km" ? form.content_km : form.content_en;

  return (
    <>
      <div className="min-h-screen bg-[#0a0d14] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* HEADER */}
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="group grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface/60 transition-all hover:border-cyan-400/50"
            >
              <ArrowLeft
                size={16}
                className="text-muted transition-transform group-hover:-translate-x-1"
              />
            </Link>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Add News
              </h1>
              <p className="text-xs font-bold uppercase tracking-wider text-muted">
                បន្ថែមព័ត៌មានថ្មីៗ
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* GAME + CATEGORY */}
            <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-cyan-400">
                Game & Category
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Game
                  </label>
                  <div className="mt-2 flex gap-2">
                    {GAMES.map((g) => (
                      <button
                        key={g.value}
                        type="button"
                        onClick={() => setForm({ ...form, game: g.value })}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-black transition-all"
                        style={{
                          borderColor:
                            form.game === g.value
                              ? g.color + "80"
                              : "var(--color-line)",
                          background:
                            form.game === g.value
                              ? g.color + "20"
                              : "var(--color-surface)",
                          color:
                            form.game === g.value
                              ? g.color
                              : "var(--color-muted)",
                        }}
                      >
                        {g.value === "ff" ? (
                          <Flame size={14} />
                        ) : (
                          <Swords size={14} />
                        )}
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Category
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Tag (e.g. NEW HERO)
                  </label>
                  <input
                    type="text"
                    name="tag"
                    value={form.tag}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Accent Color
                  </label>
                  <select
                    name="accent"
                    value={form.accent}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  >
                    {ACCENTS.map((a) => (
                      <option key={a.value} value={a.value}>
                        {a.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* COVER IMAGE UPLOAD */}
            <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-cyan-400">
                Cover Image
              </h2>

              <div className="space-y-4">
                {!imageUrl ? (
                  <label className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line bg-black/20 px-6 py-12 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500">
                      {uploading ? (
                        <Loader2 size={24} className="animate-spin text-white" />
                      ) : (
                        <ImageIcon size={24} className="text-white" />
                      )}
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-black text-white">
                        {uploading ? "Uploading..." : "Choose Image"}
                      </div>
                      <div className="mt-1 text-xs text-muted">
                        PNG, JPG, WEBP — Max 5MB
                      </div>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative overflow-hidden rounded-2xl border border-line">
                    <div className="relative aspect-video">
                      <img
                        src={imageUrl}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setImageUrl("")}
                      className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-red-500/40 bg-red-500/80 text-white backdrop-blur-md transition-all hover:bg-red-500"
                      aria-label="Remove image"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* TITLES & EXCERPTS */}
            <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-cyan-400">
                Title & Excerpt
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Title (Khmer) *
                  </label>
                  <input
                    type="text"
                    name="title_km"
                    value={form.title_km}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Title (English) *
                  </label>
                  <input
                    type="text"
                    name="title_en"
                    value={form.title_en}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Excerpt (Khmer) *
                  </label>
                  <textarea
                    name="excerpt_km"
                    value={form.excerpt_km}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Excerpt (English) *
                  </label>
                  <textarea
                    name="excerpt_en"
                    value={form.excerpt_en}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-cyan-400">
                Content (Markdown Supported)
              </h2>
              <p className="mb-4 text-xs text-muted">
                Use `## ` for heading, `- ` for list, `**text**` for bold
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Content (Khmer) *
                  </label>
                  <textarea
                    name="content_km"
                    value={form.content_km}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-black/30 px-4 py-3 font-mono text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Content (English) *
                  </label>
                  <textarea
                    name="content_en"
                    value={form.content_en}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-black/30 px-4 py-3 font-mono text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>
              </div>
            </div>

            {/* METADATA */}
            <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
              <h2 className="mb-4 text-sm font-black uppercase tracking-wider text-cyan-400">
                Metadata
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    ID (slug) *
                  </label>
                  <input
                    type="text"
                    name="id"
                    value={form.id}
                    onChange={handleChange}
                    required
                    placeholder="e.g. mlbb-hero-xyz-2026"
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Credit Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="credit_name"
                    value={form.credit_name}
                    onChange={handleChange}
                    placeholder="e.g. Official Facebook"
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Credit URL (Optional)
                  </label>
                  <input
                    type="text"
                    name="credit_url"
                    value={form.credit_url}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted">
                    Blog Slug (Optional)
                  </label>
                  <input
                    type="text"
                    name="blog_slug"
                    value={form.blog_slug}
                    onChange={handleChange}
                    placeholder="e.g. mlbb-collie-new-mage"
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  />
                </div>
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-400">
                {error}
              </div>
            )}

            {/* SUBMIT */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                disabled={!isReadyForPreview}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3.5 text-sm font-black text-cyan-400 transition-all hover:scale-[1.02] hover:bg-cyan-500/20 disabled:opacity-30 disabled:hover:scale-100"
              >
                <Eye size={15} />
                Preview
              </button>

              <button
                type="submit"
                disabled={saving}
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 py-3.5 text-sm font-black text-[#0a0d14] shadow-lg shadow-cyan-500/30 transition-all hover:scale-[1.02] disabled:opacity-50 sm:flex-none sm:px-8"
              >
                {saving ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={15} />
                    Save & Post
                  </>
                )}
              </button>

              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-sm font-black text-muted transition-all hover:bg-white/5"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="relative my-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-line bg-[#0a0d14]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PREVIEW HEADER */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-[#0a0d14]/95 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500">
                  <Eye size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-black text-white">
                    Preview Mode
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
                    មើលមុននឹង Post
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Language Toggle */}
                <div className="flex rounded-xl border border-line bg-surface/60 p-1">
                  <button
                    type="button"
                    onClick={() => setPreviewLang("km")}
                    className={
                      "rounded-lg px-3 py-1.5 text-xs font-black transition-all " +
                      (previewLang === "km"
                        ? "bg-cyan-500 text-[#0a0d14]"
                        : "text-muted hover:text-white")
                    }
                  >
                    ខ្មែរ
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewLang("en")}
                    className={
                      "rounded-lg px-3 py-1.5 text-xs font-black transition-all " +
                      (previewLang === "en"
                        ? "bg-cyan-500 text-[#0a0d14]"
                        : "text-muted hover:text-white")
                    }
                  >
                    EN
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition-all hover:border-red-500/40 hover:text-red-400"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* PREVIEW CONTENT */}
            <div className="overflow-hidden">
              {/* Cover Image */}
              {imageUrl ? (
                <div className="relative aspect-video w-full">
                  <img
                    src={imageUrl}
                    alt="Cover"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(10,13,20,0.95) 90%)",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="relative flex aspect-video w-full items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, " +
                      form.accent +
                      "40 0%, " +
                      form.accent +
                      "10 50%, #0a0d14 100%)",
                  }}
                >
                  <Newspaper size={64} style={{ color: form.accent, opacity: 0.3 }} />
                </div>
              )}

              {/* Content Body */}
              <div className="px-6 pb-8 pt-6 sm:px-10 sm:pb-12">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest"
                    style={{
                      background: form.accent + "25",
                      color: form.accent,
                      boxShadow: "0 0 0 1px " + form.accent + "60",
                    }}
                  >
                    {form.tag}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest"
                    style={{
                      background:
                        form.game === "ff"
                          ? "rgba(245,158,11,0.2)"
                          : "rgba(34,211,238,0.2)",
                      color: form.game === "ff" ? "#f59e0b" : "#22d3ee",
                    }}
                  >
                    {form.game === "ff" ? "FREE FIRE" : "MOBILE LEGENDS"}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white/70">
                    {form.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                  {previewTitle || "ចំណងជើង..."}
                </h1>

                {/* Excerpt */}
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {previewExcerpt || "សេចក្តីសង្ខេប..."}
                </p>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-line py-4 text-xs font-bold uppercase tracking-wider text-white/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} />
                    {form.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Newspaper size={12} />
                    {previewLang === "km" ? "ព័ត៌មាន" : "News"}
                  </span>
                </div>

                {/* Content */}
                <article className="mt-6">
                  {previewContent ? (
                    renderPreview(previewContent)
                  ) : (
                    <p className="text-muted">ខ្លឹមសារនឹងបង្ហាញនៅទីនេះ...</p>
                  )}
                </article>
              </div>
            </div>

            {/* PREVIEW FOOTER */}
            <div className="sticky bottom-0 flex flex-wrap items-center justify-between gap-3 border-t border-line bg-[#0a0d14]/95 px-6 py-4 backdrop-blur-md">
              <div className="text-xs text-muted">
                {previewLang === "km" ? "មើលជាភាសាខ្មែរ" : "Viewing in English"}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="rounded-xl border border-line bg-surface/60 px-5 py-2.5 text-sm font-black text-muted transition-all hover:bg-white/5"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-5 py-2.5 text-sm font-black text-[#0a0d14] shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={14} />
                      Save & Post
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}