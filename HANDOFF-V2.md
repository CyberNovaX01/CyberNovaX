\# 🎮 GAMING GUIDE — HANDOFF V2

Updated: 16 Sep 2026



\## 👤 USER

\- Name: CyberNovaX01 (Panha Botra)

\- Language: \*\*Khmer\*\* — always respond in Khmer

\- Path: C:\\Users\\Kong Kimsrorn\\gaming-guide-frontend

\- Terminal: PowerShell on Windows 11

\- Purpose: Ads revenue (AdSense)



\## 🎯 PROJECT

\- Gaming Guide for Cambodian FF + MLBB players

\- Stack: Next.js 16.3.5, TypeScript, Tailwind v4, lucide-react

\- Repo: https://github.com/CyberNovaX01/CyberNovaX

\- Live: https://cyber-nova-x.vercel.app

\- Vercel Project: cyber-nova-x



\## ⚠️ CRITICAL RULES



\### Khmer Encoding

\- PowerShell paste Khmer → corrupted

\- Notepad paste Khmer → correct

\- ALWAYS use Notepad for Khmer files

\- Command: `notepad "path"`



\### Dev Workflow



\### Dev Server

\- Command: `npm run dev`

\- Port: 3000

\- Kill: `taskkill /F /IM node.exe`

\- Clear: `Remove-Item -Recurse -Force .next`



\### Git Config

\- User: CyberNovaX01

\- Email: cybernova0101@gmail.com

\- Remote: origin (github.com/CyberNovaX01/CyberNovaX)

\- Push: `git add .` → `git commit -m "..."` → `git push`



\### Vercel Auto-Deploy

\- Push → Vercel auto-build (\~2 min)

\- Dashboard: vercel.com/cyber-nova-x



\## 📁 STRUCTURE



\### Routes (All Working ✅)

\*\*Main:\*\*

\- `/` (homepage redesign ✅)

\- `/ff-hub` (hub with 6 cards)

\- `/ff` → redirects to `/ff-hub`

\- `/mlbb` (hub with 6 cards)

\- `/news`, `/patch`



\*\*FF Pages:\*\*

\- `/ff/sensitivity` (calculator 176+ devices)

\- `/ff/characters`, `/ff/weapons`, `/ff/pets`, `/ff/maps`, `/ff/tier`



\*\*MLBB Pages:\*\*

\- `/mlbb/tier` (133 heroes, filters)

\- `/mlbb/heroes`, `/mlbb/stats`, `/mlbb/counters`

\- `/mlbb/builds` (all heroes)

\- `/mlbb/emblems` (6 emblems)

\- `/mlbb/\[heroId]` (hero detail)



\*\*Tools Pages (NEW):\*\*

\- `/tools` (hub with 6 tools)

\- `/tools/rank-mythic` (Mythic → 100 stars guide 2026)

\- `/tools/top-gun` (FF Top Gun Live guide 2026)



\*\*Legal Pages:\*\*

\- `/about`, `/contact`, `/privacy`, `/terms`, `/cookies`



\### Components

\- Header (with animations: search modal, live counter, quick chips)

\- Footer (with legal links)

\- HeroBanner (FF+MLBB cards + video)

\- LiveStatsBar (animated count-up)

\- MetaTierPreview (12 top heroes)

\- FeaturedGuides (8 cards)

\- SearchModal (Ctrl+K)

\- LiveCounter (48K online)

\- AnimatedNumber (count-up)

\- LanguageSwitch (flag dropdown)

\- ThemeToggle (rotating sun/moon)

\- LegalPage (reusable)

\- SensitivityCalculator

\- FadeIn, MoodSetter, GameShowcase



\### Lib Files

\- i18n.tsx (KM/EN)

\- mlbbTierData.ts (133 heroes)

\- ffCharacters.ts (20 chars)

\- ffWeapons.ts (31 weapons)

\- ffPets.ts (14 pets)

\- ffMaps.ts (8 maps)

\- ffDevices.ts (176+ devices)

\- ffSensitivity.ts (algorithm)

\- rankData.ts (2026 meta)

\- toolsData.ts (6 tools)

\- siteData.ts, tierData.ts, types.ts, prefs.ts



\## 🎨 DESIGN

\- Dark: #0a0d14

\- Surface: #11151f

\- Gold: #f5c542 (primary)

\- Cyan (FF): #22d3ee

\- Blue (MLBB): #3b82f6

\- Purple: #a855f7

\- Fonts: Sora, Inter, Kantumruy Pro, JetBrains Mono

\- Style: professional, NOT AI-looking



\## ✅ DONE

1\. Full project setup

2\. Homepage redesign (HeroBanner + LiveStats + MetaTier + FeaturedGuides)

3\. FF Hub + 6 sub-pages

4\. MLBB Hub + 6 sub-pages (Tier, Builds, Emblems working)

5\. Sensitivity Calculator (176+ devices, 8 values)

6\. Legal pages (About, Contact, Privacy, Terms, Cookies)

7\. Header animations (search, live counter, flags, morph menu)

8\. Tools Hub + Rank Mythic + Top Gun pages

9\. Deploy to Vercel (live at cyber-nova-x.vercel.app)

10\. GitHub repo (CyberNovaX01/CyberNovaX)



\## ⏳ PENDING — Next Steps



\### Phase 1 — Content ច្រើន (បន្ទាប់)

\- Codes page (FF + MLBB redeem codes)

\- Settings guide (graphics, FPS, control)

\- Headshot trainer page

\- Combo trainer page

\- Free diamond guide

\- Events page

\- Esports page (M-series, tournaments)

\- Blog system



\### Phase 2 — Traffic

\- TikTok account + post videos

\- Facebook page

\- Share website links

\- Aim: 100+ daily visitors



\### Phase 3 — Custom Domain (2 weeks)

\- Buy domain (\~$10-15/year)

\- Connect to Vercel

\- Suggested: cybernova.com, gamingguidekh.com



\### Phase 4 — AdSense (after domain + traffic)

\- Apply AdSense

\- Add ad placements

\- Need: custom domain + 2 weeks age + traffic



\## 🐛 KNOWN ISSUES

1\. Khmer in PowerShell → corrupted (use Notepad)

2\. Vercel build error: duplicate accent (FIXED)

3\. Facebook/Youtube icons → use Globe/Play from lucide

4\. `xs:` breakpoint not in Tailwind → use `inline`



\## 💡 NOTES FOR NEW CHAT

1\. Respond in KHMER always

2\. Use "បង" politely

3\. User is beginner — step by step

4\. Use Notepad for Khmer files

5\. One command at a time

6\. Always warn about copyright

7\. NEVER ask user to reveal GitHub token

8\. User dislikes AI-looking design

9\. Prefer professional, clean (like mlbb.gg)

10\. Git push → Vercel auto-deploys

11\. Test routes with PowerShell script

12\. All Khmer text → use Notepad NOT PowerShell



\## 📞 QUICK COMMANDS

```powershell

\# Navigate

cd "C:\\Users\\Kong Kimsrorn\\gaming-guide-frontend"



\# Dev

npm run dev

taskkill /F /IM node.exe

Remove-Item -Recurse -Force .next



\# Git

git add .

git commit -m "message"

git push

git remote -v



\# Files

notepad "src\\file.tsx"

taskkill /F /IM notepad.exe

New-Item -Force -Path "src\\file.tsx" -ItemType File



\# Read files

Get-Content "src\\file.tsx"

Get-Content "src\\file.tsx" | Select-Object -First 30

Select-String -Path "src\\file.tsx" -Pattern "search"



\# Test routes

$routes = @("/", "/ff-hub", "/mlbb/tier")

foreach ($r in $routes) {

&#x20; try {

&#x20;   $res = Invoke-WebRequest -Uri "http://localhost:3000$r" -UseBasicParsing -TimeoutSec 60

&#x20;   Write-Host "OK $($res.StatusCode) $r" -ForegroundColor Green

&#x20; } catch {

&#x20;   Write-Host "FAIL $r" -ForegroundColor Red

&#x20; }

}

