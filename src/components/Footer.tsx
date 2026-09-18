"use client";
import Link from "next/link";
import { Gamepad2, Globe, Send, Play, Mail, AlertCircle } from "lucide-react";
import { useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-20 border-t border-line bg-app/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl text-black shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #f5c542 0%, #ff8c00 100%)",
                }}
              >
                <Gamepad2 size={17} strokeWidth={2.4} />
              </span>
              <span className="text-base font-black tracking-tight">
                CyberNovaX
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {t("hero.sub")}
            </p>
            <div className="mt-5 flex gap-2">
              <SocialBtn icon={<Globe size={15} />} href="/" label="Website" />
              <SocialBtn icon={<Send size={15} />} href="/" label="Telegram" />
              <SocialBtn icon={<Play size={15} />} href="/" label="YouTube" />
              <SocialBtn icon={<Mail size={15} />} href="/contact" label="Email" />
            </div>
          </div>

          <FooterCol
            title={t("footer.product")}
            links={[
              { href: "/ff-hub", label: "Free Fire" },
              { href: "/mlbb", label: "Mobile Legends" },
              { href: "/mlbb/tier", label: "Tier List" },
              { href: "/news", label: "News" },
              { href: "/patch", label: "Patches" },
            ]}
          />

          <FooterCol
            title={t("footer.company")}
            links={[
              { href: "/about", label: t("footer.about") },
              { href: "/contact", label: t("footer.contact") },
              { href: "/news", label: "Blog" },
            ]}
          />

          <FooterCol
            title={t("footer.legal")}
            links={[
              { href: "/privacy", label: t("footer.privacy") },
              { href: "/terms", label: t("footer.terms") },
              { href: "/cookies", label: "Cookies" },
            ]}
          />

          <FooterCol
            title={t("footer.connect")}
            links={[
              { href: "/contact", label: "Facebook" },
              { href: "/contact", label: "Telegram" },
              { href: "/contact", label: "YouTube" },
              { href: "/contact", label: "Discord" },
            ]}
          />
        </div>

        {/* DISCLAIMER */}
        <div className="mt-12 rounded-xl border border-line bg-surface/40 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle size={16} className="mt-0.5 shrink-0 text-yellow-500" />
            <div className="space-y-2 text-xs leading-relaxed text-muted">
              <p>
                <strong className="text-fg">Disclaimer:</strong> CyberNovaX is an independent fan site created for informational and educational purposes only. We are <strong>not affiliated with, endorsed by, or sponsored by</strong> Garena Free Fire or Moonton Mobile Legends: Bang Bang.
              </p>
              <p>
                <strong className="text-fg">Credits:</strong> All game-related images, characters, weapons, and trademarks are the property of their respective owners — <strong>© Garena Free Fire</strong> and <strong>© Moonton Mobile Legends: Bang Bang</strong>. Images are used under fair use for informational purposes.
              </p>
              <p>
                If you are a copyright owner and believe content on this site infringes your rights, please <Link href="/contact" className="text-gold hover:underline">contact us</Link> and we will respond promptly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:justify-between">
          <p>© {year} CyberNovaX · {t("footer.copyright")}</p>
          <p className="flex items-center gap-1.5">
            {t("footer.made")} <span>🇰🇭</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-faint">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialBtn({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition-all hover:border-gold/40 hover:text-gold"
    >
      {icon}
    </Link>
  );
}