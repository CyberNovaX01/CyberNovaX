"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Plus,
  LogOut,
  TrendingUp,
  Users,
  Flame,
  Calendar,
  ArrowRight,
  Loader2,
  Database,
  Trash2,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);
  const [seedMessage, setSeedMessage] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    mlbb: 0,
    ff: 0,
    recent: [] as { id: string; title_km: string; game: string; date: string }[],
  });

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/admin/news");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setStats(data);
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSeed = async () => {
    if (
      !confirm(
        "Seed ២២ News ចូល Database?\n\n(News ដែលមានស្រាប់នឹង Skip)"
      )
    )
      return;

    setSeeding(true);
    setSeedMessage("");

    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const data = await res.json();

      if (res.ok) {
        setSeedMessage(
          `✅ Inserted: ${data.inserted}, Skipped: ${data.skipped}${
            data.errors ? ` | Errors: ${data.errors.length}` : ""
          }`
        );
        await fetchStats();
      } else {
        setSeedMessage(`❌ ${data.error || "Seed failed"}`);
      }
    } catch {
      setSeedMessage("❌ Network error");
    } finally {
      setSeeding(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`លុបព័ត៌មាននេះ?\n\n"${title}"\n\n(សកម្មភាពនេះមិនអាចត្រឡប់វិញបានទេ)`))
      return;

    setDeletingId(id);
    try {
      const res = await fetch("/api/admin/news/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();

      if (res.ok) {
        setSeedMessage(`✅ បានលុប: ${title}`);
        await fetchStats();
      } else {
        setSeedMessage(`❌ ${data.error || "Delete failed"}`);
      }
    } catch {
      setSeedMessage("❌ Network error");
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
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
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500">
                <LayoutDashboard size={22} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Admin Dashboard
                </h1>
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  CyberNovaX News Manager
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleSeed}
              disabled={seeding}
              className="inline-flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-5 py-2.5 text-sm font-black text-purple-400 transition-all hover:bg-purple-500/20 disabled:opacity-50"
            >
              {seeding ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Seeding...
                </>
              ) : (
                <>
                  <Database size={15} />
                  Seed Data
                </>
              )}
            </button>

            <Link
              href="/admin/news/new"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-5 py-2.5 text-sm font-black text-[#0a0d14] shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
            >
              <Plus size={15} />
              Add News
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-black text-red-400 transition-all hover:bg-red-500/20"
            >
              <LogOut size={15} />
              Logout
            </button>
          </div>
        </div>

        {/* SEED MESSAGE */}
        {seedMessage && (
          <div className="mt-6 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-bold text-cyan-400">
            {seedMessage}
          </div>
        )}

        {/* STATS CARDS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-500/20">
                <Newspaper size={22} className="text-cyan-400" />
              </div>
              <TrendingUp size={18} className="text-cyan-400" />
            </div>
            <div className="mt-4 text-4xl font-black text-white">
              {stats.total}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
              Total News
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-500/20">
                <Users size={22} className="text-cyan-400" />
              </div>
              <TrendingUp size={18} className="text-cyan-400" />
            </div>
            <div className="mt-4 text-4xl font-black text-white">
              {stats.mlbb}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
              MLBB News
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-500/20">
                <Flame size={22} className="text-orange-400" />
              </div>
              <TrendingUp size={18} className="text-orange-400" />
            </div>
            <div className="mt-4 text-4xl font-black text-white">
              {stats.ff}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">
              Free Fire News
            </div>
          </div>
        </div>

        {/* RECENT NEWS */}
        <div className="mt-8 rounded-2xl border border-line bg-surface/60 backdrop-blur-md">
          <div className="border-b border-line p-6">
            <h2 className="text-lg font-black tracking-tight text-white">
              Recent News
            </h2>
            <p className="mt-1 text-xs text-muted">
              ព័ត៌មានដែលបានបន្ថែមថ្មីៗ
            </p>
          </div>

          {stats.recent.length === 0 ? (
            <div className="p-12 text-center">
              <Newspaper size={48} className="mx-auto text-muted/30" />
              <p className="mt-4 text-sm text-muted">No news yet</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <button
                  onClick={handleSeed}
                  disabled={seeding}
                  className="inline-flex items-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-5 py-2.5 text-sm font-black text-purple-400 transition-all hover:bg-purple-500/20 disabled:opacity-50"
                >
                  <Database size={14} />
                  Seed 22 News
                </button>
                <Link
                  href="/admin/news/new"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-5 py-2.5 text-sm font-black text-[#0a0d14]"
                >
                  <Plus size={14} />
                  Add First News
                </Link>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-line">
              {stats.recent.map((n) => (
                <div
                  key={n.id}
                  className="flex items-center gap-4 p-4 transition-colors hover:bg-white/5"
                >
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xs font-black uppercase"
                    style={{
                      background:
                        n.game === "ff"
                          ? "rgba(245,158,11,0.2)"
                          : "rgba(34,211,238,0.2)",
                      color: n.game === "ff" ? "#f59e0b" : "#22d3ee",
                    }}
                  >
                    {n.game === "ff" ? "FF" : "ML"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-bold text-white">
                      {n.title_km}
                    </div>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-muted">
                      <Calendar size={10} />
                      {n.date}
                    </div>
                  </div>
                  <Link
                    href={"/news/" + n.id}
                    className="shrink-0 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    View →
                  </Link>
                  <button
                    onClick={() => handleDelete(n.id, n.title_km)}
                    disabled={deletingId === n.id}
                    className="shrink-0 rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-red-400 transition-all hover:bg-red-500/20 hover:text-red-300 disabled:opacity-50"
                    title="លុបព័ត៌មាននេះ"
                  >
                    {deletingId === n.id ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Trash2 size={14} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}