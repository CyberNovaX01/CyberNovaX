\# 🎮 GAMING GUIDE — HANDOFF

Updated: 15 Sep 2026



\## 👤 USER

\- Name: jesda (Panha Botra)

\- Language: \*\*Khmer\*\* — always respond in Khmer

\- Path: C:\\Users\\Kong Kimsrorn\\gaming-guide-frontend

\- Terminal: PowerShell on Windows 11

\- Purpose: Ads revenue (AdSense)



\## 🎯 PROJECT

\- Gaming Guide for Cambodian FF + MLBB players

\- Reference: mlbb.gg (dark + gold, professional)

\- Stack: Next.js 16, TypeScript, Tailwind v4, lucide-react



\## ⚠️ CRITICAL RULES



\### Khmer Encoding (MOST IMPORTANT!)

\- PowerShell paste Khmer → corrupted (áž€áž·áž...)

\- Notepad paste Khmer → correct

\- ALWAYS use Notepad for files with Khmer text



\### Workflow for new files

Then user: Ctrl+A → Delete → Paste → Ctrl+S



\### Dev server

\- Command: npm run dev

\- Port: 3000

\- Kill all: taskkill /F /IM node.exe

\- Clear cache: Remove-Item -Recurse -Force .next



\## 📁 STRUCTURE



\### Routes (all done)

\- / (homepage)

\- /ff (5-step wizard), /ff/result

\- /mlbb (hub), /mlbb/heroes, /mlbb/tier, /mlbb/stats

\- /mlbb/counters, /mlbb/builds, /mlbb/emblems

\- /mlbb/\[heroId] (hero detail)

\- /news, /patch



\### Components (all done)

\- BottomNav, Footer, FadeIn, GameShowcase, Header

\- HeroBanner, HeroCard, LanguageSwitch, MoodSetter

\- Skeleton, ThemeBackground, ThemeToggle



\### Lib

\- i18n.tsx (KM/EN), allHeroes.ts (85+), ffData.ts

\- heroData.ts, siteData.ts, tierData.ts, types.ts, supabase.ts, prefs.ts



\## 🎨 DESIGN

\- Dark: #0a0d14

\- Surface: #11151f

\- Gold: #f5c542 (primary)

\- Orange: #ff8c00

\- Blue (MLBB): #3b82f6

\- Fonts: Sora, Inter, Kantumruy Pro, JetBrains Mono



\## ✅ DONE

1\. Full project setup

2\. Homepage + hero banner

3\. MLBB Hub + 6 sub-pages

4\. Hero detail page

5\. FF wizard + result

6\. News + Patch pages

7\. Header + BottomNav + Footer

8\. KM/EN language switch

9\. Dark/Light theme

10\. i18n system

11\. 85+ heroes data

12\. FF data (chars/weapons/pets)

13\. Tier list data



\## ⏳ PENDING — Next Steps



\### Phase 1 — Homepage Redesign

\- Left: FF + MLBB image cards (clickable)

\- Click FF → /ff-hub (NEW)

\- Click MLBB → /mlbb (exists)

\- Right: Video player

\- Below: Live Stats Bar

\- Below: Meta Tier Preview

\- Below: Featured Guides

\- Below: Recent News (compact)

\- Below: Recent Patches (compact)



\### Phase 2 — FF Hub (NEW)

Build /ff-hub with cards:

\- Sensitivity, Characters, Weapons, Pets, Maps, Tier List



\### Phase 3 — Legal Pages (for AdSense)

\- /about, /contact, /privacy, /terms, /cookies



\### Phase 4 — Features

\- Google AdSense

\- PWA (installable)

\- SEO optimization

\- Analytics

\- Comments

\- Share buttons



\### Phase 5 — Deploy

\- Vercel deploy

\- Custom domain

\- AdSense apply



\### Phase 6 — Supabase (later)

\- Admin panel

\- Rich text editor

\- Image upload



\## 🖼️ IMAGES

\- Folder: public/heroes/ (empty)

\- Folder: public/media/ (empty for video)

\- Use AI-generated fantasy images (safe)

\- NOT real MLBB/FF images (copyright)

\- Naming: public/heroes/lancelot.jpg



\## 🐛 FIXED ISSUES

1\. Hydration mismatch (date) → manual month arrays

2\. Script tag warning → removed bootstrap script

3\. Duplicate keys → key={l.label}

4\. Khmer encoding → use Notepad

5\. Missing icons (Facebook/Youtube) → Globe/Play

6\. Turbopack bug → use --webpack



\## 💡 NOTES FOR NEW CHAT

1\. Respond in KHMER always

2\. Use "បង" politely

3\. User is beginner — step by step

4\. Use Notepad for Khmer files

5\. One command at a time

6\. Always warn about copyright

7\. User has Git working (v2.55.0)

8\. Never ask to reveal GitHub token

9\. User dislikes AI-looking design

10\. Prefer professional, clean (like mlbb.gg)



\## 📞 QUICK COMMANDS

```powershell

cd "C:\\Users\\Kong Kimsrorn\\gaming-guide-frontend"

npm run dev

taskkill /F /IM node.exe

Remove-Item -Recurse -Force .next

New-Item -Force -Path "file" -ItemType File

notepad "file"

(Get-Item "file").Length

dir src\\components



