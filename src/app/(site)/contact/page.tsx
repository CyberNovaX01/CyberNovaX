"use client";
import { useState } from "react";
import { Mail, MessageCircle, Send, Check, Globe, Phone } from "lucide-react";
import { MoodSetter } from "@/components/MoodSetter";
import { FadeIn } from "@/components/FadeIn";
import { useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const km = lang === "km";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact from " + name);
    const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:cybernovax0101@gmail.com?subject=" + subject + "&body=" + body;
    setSent(true);
  };

  const socialLinks = [
    {
      label: "Facebook",
      value: "sakura.sakamichi.167744",
      href: "https://web.facebook.com/sakura.sakamichi.167744/",
      emoji: "📘",
      color: "#1877F2",
    },
    {
      label: "TikTok",
      value: "@cybernova.x8",
      href: "https://www.tiktok.com/@cybernova.x8",
      emoji: "🎵",
      color: "#ff0050",
    },
    {
      label: "Telegram",
      value: "@SRENG_PANHABOTRA",
      href: "https://t.me/SRENG_PANHABOTRA",
      emoji: "✈️",
      color: "#229ED9",
    },
    {
      label: km ? "ទូរស័ព្ទ" : "Phone",
      value: "093 355 877",
      href: "tel:093355877",
      emoji: "📞",
      color: "#22c55e",
    },
  ];

  return (
    <>
      <MoodSetter mood="cosmic" />

      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(168,85,247,0.22) 0%, transparent 60%), linear-gradient(180deg, #0a0d14 0%, #0a0d14 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
          <FadeIn>
            <div
              className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em]"
              style={{ color: "#a855f7" }}
            >
              <Mail size={13} />
              {km ? "ទំនាក់ទំនង" : "CONTACT"}
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {km ? "ទាក់ទងមកយើង" : "Get in Touch"}
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              {km
                ? "មានសំណួរ ឬយោបល់? ផ្ញើសារមកយើង — យើងរីករាយស្តាប់!"
                : "Have a question or feedback? Send us a message — we'd love to hear!"}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT */}
          <FadeIn>
            <div className="space-y-4">
              <a
                href="mailto:cybernovax0101@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 20px 50px -30px #a855f788" }}
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: "#a855f720", color: "#a855f7", boxShadow: "0 0 0 1px #a855f755" }}
                >
                  <Mail size={22} />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-black">{km ? "អ៊ីមែល" : "Email"}</div>
                  <div className="mt-0.5 text-xs text-muted break-all">cybernovax0101@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:093355877"
                className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 20px 50px -30px #22c55e88" }}
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ background: "#22c55e20", color: "#22c55e", boxShadow: "0 0 0 1px #22c55e55" }}
                >
                  <Phone size={22} />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-black">{km ? "ទូរស័ព្ទ" : "Phone"}</div>
                  <div className="mt-0.5 text-xs text-muted">093 355 877</div>
                </div>
              </a>

              <div
                className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5"
                style={{ boxShadow: "0 20px 50px -30px #3b82f688" }}
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                  style={{ background: "#3b82f620", color: "#3b82f6", boxShadow: "0 0 0 1px #3b82f655" }}
                >
                  <MessageCircle size={22} />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-black">{km ? "ឆ្លើយតប" : "Response Time"}</div>
                  <div className="mt-0.5 text-xs text-muted">
                    {km ? "ក្នុងរយៈពេល 24-48 ម៉ោង" : "Within 24-48 hours"}
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA — CLICKABLE LIST */}
              <div
                className="rounded-2xl border border-line bg-surface p-5"
                style={{ boxShadow: "0 20px 50px -30px #a855f788" }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg"
                    style={{ background: "#a855f720", color: "#a855f7" }}
                  >
                    <Globe size={16} />
                  </span>
                  <div className="text-sm font-black">
                    {km ? "បណ្តាញសង្គម" : "Social Media"}
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("tel:") ? undefined : "_blank"}
                      rel={s.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-3 rounded-xl border border-line bg-black/20 px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-gold/40"
                    >
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-base"
                        style={{ background: s.color + "20", color: s.color }}
                      >
                        {s.emoji}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-black">{s.label}</div>
                        <div className="truncate text-[11px] text-muted">{s.value}</div>
                      </div>
                      <Send size={12} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-gold" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — form */}
          <FadeIn delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-surface p-6"
              style={{ boxShadow: "0 20px 50px -30px #a855f788" }}
            >
              <h2 className="text-lg font-black tracking-tight">
                {km ? "ផ្ញើសារមកយើង" : "Send us a message"}
              </h2>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-muted">
                    {km ? "ឈ្មោះ" : "Name"}
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-3 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted">
                    {km ? "អ៊ីមែល" : "Email"}
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-line bg-black/30 px-3 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted">
                    {km ? "សារ" : "Message"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-black/30 px-3 py-2.5 text-sm outline-none transition-colors focus:border-purple-500/60"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-black transition-all"
                style={{
                  background: sent
                    ? "#22c55e"
                    : "linear-gradient(135deg, #a855f7, #3b82f6)",
                  color: "#fff",
                }}
              >
                {sent ? <Check size={15} /> : <Send size={15} />}
                {sent
                  ? km ? "បើកអ៊ីមែល…" : "Opening email…"
                  : km ? "ផ្ញើសារ" : "Send message"}
              </button>

              <p className="mt-3 text-center text-[11px] text-faint">
                {km
                  ? "ចុចផ្ញើ → បើក mail app របស់អ្នក"
                  : "Click send → opens your mail app"}
              </p>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}