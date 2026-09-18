"use client";
import Link from "next/link";
import { Gamepad2, Globe, Send, Play, Mail, AlertCircle, Shield } from "lucide-react";
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
              <SocialBtn
                icon={<Globe size={15} />}
                href="https://web.facebook.com/sakura.sakamichi.167744/"
                label="Facebook"
              />
              <SocialBtn
                icon={<Send size={15} />}
                href="https://t.me/SRENG_PANHABOTRA"
                label="Telegram"
              />
              <SocialBtn
                icon={<Play size={15} />}
                href="https://www.tiktok.com/@cybernova.x8"
                label="TikTok"
              />
              <SocialBtn
                icon={<Mail size={15} />}
                href="tel:093355877"
                label="Phone"
              />
            </div>
          </div>

          <FooterCol
            title={t("footer.product")}
            links={[
              { href: "/ff-hub", label: "Free Fire" },
              { href: "/mlbb", label: "Mobile Legends" },
              { href: "/mlbb/tier", label: "Tier List" },
              { href: "/blog", label: "Blog" },
              { href: "/patch", label: "Patches" },
            ]}
          />

          <FooterCol
            title={t("footer.company")}
            links={[
              { href: "/about", label: t("footer.about") },
              { href: "/contact", label: t("footer.contact") },
              { href: "/news", label: "News" },
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
              {
                href: "https://web.facebook.com/sakura.sakamichi.167744/",
                label: "Facebook",
              },
              { href: "https://t.me/SRENG_PANHABOTRA", label: "Telegram" },
              { href: "https://www.tiktok.com/@cybernova.x8", label: "TikTok" },
              { href: "tel:093355877", label: "093 355 877" },
            ]}
          />
        </div>

        {/* ENHANCED DISCLAIMER */}
        <div className="mt-12 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-yellow-500" />
            <div className="space-y-3 text-xs leading-relaxed text-muted">
              <div>
                <p className="font-black text-fg">Disclaimer</p>
                <p>
                  CyberNovaX is an independent fan site created for informational and educational purposes only. We are <strong className="text-fg">not affiliated with, endorsed by, or sponsored by</strong> Garena Free Fire, Moonton Mobile Legends: Bang Bang, or any other game publishers mentioned on this site.
                </p>
              </div>

              <div>
                <p className="font-black text-fg">Credits & Fair Use</p>
                <p>
                  All game-related images, characters, weapons, logos, and trademarks are the property of their respective owners — <strong className="text-fg">© Garena Free Fire</strong> and <strong className="text-fg">© Moonton Mobile Legends: Bang Bang</strong>. Such materials are used under the <strong className="text-fg">Fair Use Doctrine</strong> for the purpose of commentary, news reporting, and educational guidance. We do not claim ownership of any third-party intellectual property.
                </p>
              </div>

              <div>
                <p className="font-black text-fg">DMCA & Copyright Removal Request</p>
                <p>
                  If you are a copyright owner (or authorized to act on behalf of one) and believe that content on this site infringes your rights, please contact us at{" "}
                  <a
                    href="mailto:cybernovax0101@gmail.com"
                    className="text-gold hover:underline font-bold"
                  >
                    cybernovax0101@gmail.com
                  </a>{" "}
                  with the subject line <strong className="text-fg">"DMCA Takedown Request"</strong>. Please include:
                </p>
                <ul className="ml-5 mt-1 list-disc space-y-0.5">
                  <li>Identification of the copyrighted work</li>
                  <li>URL of the allegedly infringing content</li>
                  <li>Your contact information</li>
                  <li>A statement of good faith belief</li>
                </ul>
                <p className="mt-1">
                  We will review and <strong className="text-fg">respond within 48 hours</strong> and promptly remove any content found to be infringing. We respect intellectual property rights and cooperate fully with copyright holders.
                </p>
              </div>

              <p className="flex items-center gap-1.5 pt-1 text-fg">
                <Shield size={12} className="text-green-400" />
                <span className="font-black">Last updated:</span> September 2026
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
        {links.map((l) => {
          const isExternal =
            l.href.startsWith("http") ||
            l.href.startsWith("tel:") ||
            l.href.startsWith("mailto:");

          return (
            <li key={l.label}>
              {isExternal ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
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
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  const className =
    "grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface/60 text-muted transition-all hover:border-gold/40 hover:text-gold";

  if (isExternal) {
    return (
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      {icon}
    </Link>
  );
}