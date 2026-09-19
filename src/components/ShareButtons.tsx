"use client";
import { useState } from "react";
import { Send, Link2, Check } from "lucide-react";

// Custom SVG icons for Facebook and Twitter (removed from lucide-react)
function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

type ShareButtonsProps = {
  url: string;
  title: string;
  accent?: string;
};

export default function ShareButtons({
  url,
  title,
  accent = "#22d3ee",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shares = [
    {
      name: "Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "#1877f2",
    },
    {
      name: "Telegram",
      Icon: ({ size }: { size?: number }) => <Send size={size} />,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "#229ed9",
    },
    {
      name: "Twitter",
      Icon: TwitterIcon,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "#000000",
    },
  ];

  return (
    <div className="rounded-2xl border border-line bg-surface/60 p-4 backdrop-blur-md">
      <div className="mb-3 flex items-center gap-2">
        <div
          className="grid h-6 w-6 place-items-center rounded-lg"
          style={{ background: accent + "20", color: accent }}
        >
          <Send size={12} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-wider text-muted">
          ចែករំលែក / Share
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {shares.map((s) => {
          const Icon = s.Icon;
          return (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-black/20 px-4 py-3 text-xs font-black text-muted transition-all hover:scale-[1.02]"
              style={{ minWidth: "100px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = s.color + "80";
                e.currentTarget.style.color = s.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-line)";
                e.currentTarget.style.color = "var(--color-muted)";
              }}
            >
              <Icon size={14} />
              {s.name}
            </a>
          );
        })}

        <button
          onClick={handleCopy}
          className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-black/20 px-4 py-3 text-xs font-black text-muted transition-all hover:scale-[1.02]"
          style={{
            minWidth: "100px",
            borderColor: copied ? "#22c55e80" : undefined,
            color: copied ? "#22c55e" : undefined,
          }}
        >
          {copied ? (
            <>
              <Check size={14} />
              បានចម្លង
            </>
          ) : (
            <>
              <Link2 size={14} />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}