export type BlogPost = {
  slug: string;
  title: { km: string; en: string };
  excerpt: { km: string; en: string };
  category: string;
  categoryColor: string;
  date: string;
  readTime: number;
  author: string;
  coverEmoji: string;
  coverGradient: string;
  content: { km: string; en: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "free-fire-2026-complete-guide",
    title: {
      km: "Free Fire 2026 — មគ្គុទ្ទេសក៍ពេញលេញសម្រាប់អ្នកលេងថ្មី",
      en: "Free Fire 2026 — Complete Guide for Beginners",
    },
    excerpt: {
      km: "រៀនពីមូលដ្ឋានគ្រឹះ Free Fire រួមទាំងការកំណត់ Sensitivity, ការជ្រើសរើសតួអង្គ និងយុទ្ធសាស្ត្រជ័យជម្នះ",
      en: "Learn the basics of Free Fire including sensitivity settings, character selection, and winning strategies",
    },
    category: "Guide",
    categoryColor: "#f59e0b",
    date: "2026-09-18",
    readTime: 8,
    author: "CyberNovaX Team",
    coverEmoji: "🔥",
    coverGradient: "from-orange-500 to-red-500",
    content: {
      km: "## ការណែនាំ\n\nFree Fire គឺជាហ្គេម Battle Royale ដ៏ពេញនិយមបំផុតនៅកម្ពុជា ។ មគ្គុទ្ទេសក៍នេះនឹងជួយអ្នកចាប់ផ្តើមពីសូន្យ ។\n\n## ១. ការកំណត់ Sensitivity\n\nSensitivity គឺជាកត្តាសំខាន់បំផុតក្នុងការបាញ់ត្រូវ ។ ខាងក្រោមនេះជាការកំណត់ដែលណែនាំសម្រាប់អ្នកចាប់ផ្តើម៖\n\n- **General:** 90-100\n- **Red Dot:** 85-95\n- **2x Scope:** 80-90\n- **4x Scope:** 60-75\n- **Sniper:** 50-65\n- **Free Look:** 70-80\n\n## ២. ការជ្រើសរើសតួអង្គ\n\nសម្រាប់អ្នកចាប់ផ្តើម សូមជ្រើសរើសតួអង្គដែលមាន Ability ងាយស្រួល៖\n\n- **Alok** — ព្យាបាល HP + បង្កើនល្បឿន\n- **Kelly** — បង្កើនល្បឿនរត់\n- **Hayato** — បង្កើនអាវុធពេល HP ទាប\n- **Andrew** — កាត់បន្ថយខូចខាត\n\n## ៣. យុទ្ធសាស្ត្រគ្រឹះ\n\n1. **Landing** — ជ្រើសទីតាំងមិនច្រើនមនុស្ស\n2. **Looting** — ប្រមូលអាវុធ និងថ្នាំឱ្យបានលឿន\n3. **Rotation** — ផ្លាស់ទីតាម Zone ជានិច្ច\n4. **Endgame** — ប្រើ Cover និង Gloo Wall\n\n## ៤. ការអនុវត្ត\n\nហាត់ជាមួយ Training Mode រៀងរាល់ថ្ងៃ ១៥ នាទី ដើម្បីកែ Aim និង Movement ។",
      en: "## Introduction\n\nFree Fire is the most popular Battle Royale game in Cambodia. This guide will help you start from scratch.\n\n## 1. Sensitivity Settings\n\nSensitivity is the most important factor for accurate shooting. Here are recommended settings for beginners:\n\n- **General:** 90-100\n- **Red Dot:** 85-95\n- **2x Scope:** 80-90\n- **4x Scope:** 60-75\n- **Sniper:** 50-65\n- **Free Look:** 70-80\n\n## 2. Character Selection\n\nFor beginners, choose characters with easy abilities:\n\n- **Alok** — HP recovery + speed boost\n- **Kelly** — Running speed boost\n- **Hayato** — Weapon damage boost at low HP\n- **Andrew** — Damage reduction\n\n## 3. Basic Strategy\n\n1. **Landing** — Choose less crowded locations\n2. **Looting** — Collect weapons and meds quickly\n3. **Rotation** — Always move with the zone\n4. **Endgame** — Use cover and Gloo Walls\n\n## 4. Practice\n\nPractice with Training Mode daily for 15 minutes to improve aim and movement.",
    },
  },
  {
    slug: "mlbb-2026-best-heroes-rank-up",
    title: {
      km: "MLBB 2026 Meta — តួអង្គល្អបំផុត ១០ សម្រាប់ Rank Up",
      en: "MLBB 2026 Meta — Top 10 Heroes for Ranking Up",
    },
    excerpt: {
      km: "បញ្ជីតួអង្គដែលមាន Win Rate ខ្ពស់បំផុតក្នុង MLBB ឆ្នាំ 2026 សម្រាប់ការឡើង Rank លឿន",
      en: "List of highest win-rate heroes in MLBB 2026 for fast rank climbing",
    },
    category: "Meta",
    categoryColor: "#22d3ee",
    date: "2026-09-17",
    readTime: 10,
    author: "CyberNovaX Team",
    coverEmoji: "⚔️",
    coverGradient: "from-cyan-400 to-blue-500",
    content: {
      km: "## Meta 2026 បច្ចុប្បន្ន\n\nMeta MLBB ឆ្នាំ 2026 ផ្តោតលើ **Team Fight** និង **Rotation** លឿន ។ តួអង្គខាងក្រោមនេះមាន Win Rate ខ្ពស់បំផុត៖\n\n## ១. Jungler\n\n- **Ling** — Mobility ខ្ពស់ ខូចខាតធ្ងន់\n- **Hayabusa** — Shadow Kill លាក់ខ្លួនបាន\n- **Lancelot** — Dash លឿន ខូចខាតខ្ពស់\n\n## ២. Mid Lane\n\n- **Valentina** — ចម្លង Ultimate របស់សត្រូវ\n- **Yve** — គ្រប់គ្រងតំបន់បានល្អ\n- **Pharsa** — ខូចខាតពីចម្ងាយ\n\n## ៣. Gold Lane\n\n- **Beatrix** — អាវុធ ៤ ប្រភេទ\n- **Claude** — ខូចខាតខ្ពស់ពេល Late Game\n- **Melissa** — ការពារខ្លួនពីចម្ងាយ\n\n## ៤. Roamer\n\n- **Chou** — គ្រប់គ្រងគូប្រកួត\n- **Franco** — Hook សំខាន់ខ្លាំង\n- **Khufra** — ការពារក្រុម\n\n## ៥. Exp Lane\n\n- **Yu Zhong** — ខូចខាត + ស្រូប HP\n- **Paquito** — Combo ខ្លាំង\n- **Uranus** — ស៊ូទ្រាំបានខ្ពស់\n\n## ដំបូន្មាន\n\n1. ហាត់តួអង្គតែ ២-៣ ប៉ុណ្ណោះ\n2. មើល Map រៀងរាល់ ៥ វិនាទី\n3. ជួយក្រុមពេលចាំបាច់",
      en: "## Current Meta 2026\n\nMLBB 2026 meta focuses on **Team Fights** and fast **Rotation**. These heroes have the highest win rates:\n\n## 1. Jungler\n\n- **Ling** — High mobility, heavy damage\n- **Hayabusa** — Shadow Kill stealth\n- **Lancelot** — Fast dash, high damage\n\n## 2. Mid Lane\n\n- **Valentina** — Copy enemy ultimate\n- **Yve** — Great zone control\n- **Pharsa** — Long-range damage\n\n## 3. Gold Lane\n\n- **Beatrix** — 4 weapon types\n- **Claude** — High late-game damage\n- **Melissa** — Ranged self-defense\n\n## 4. Roamer\n\n- **Chou** — Enemy control\n- **Franco** — Strong hooks\n- **Khufra** — Team protection\n\n## 5. Exp Lane\n\n- **Yu Zhong** — Damage + HP drain\n- **Paquito** — Strong combos\n- **Uranus** — High sustain\n\n## Tips\n\n1. Practice only 2-3 heroes\n2. Check map every 5 seconds\n3. Help your team when needed",
    },
  },
  {
    slug: "how-to-reach-mythic-mlbb-fast",
    title: {
      km: "វិធីឡើង Mythic ក្នុង MLBB ឱ្យលឿន",
      en: "How to Reach Mythic in MLBB Fast",
    },
    excerpt: {
      km: "គន្លឹះ និងយុទ្ធសាស្ត្រសម្រាប់ការឡើង Rank ពី Epic ដល់ Mythic ក្នុងរយៈពេលខ្លី",
      en: "Tips and strategies to climb from Epic to Mythic in a short time",
    },
    category: "Tips",
    categoryColor: "#a855f7",
    date: "2026-09-16",
    readTime: 7,
    author: "CyberNovaX Team",
    coverEmoji: "🏆",
    coverGradient: "from-purple-500 to-pink-500",
    content: {
      km: "## ហេតុអ្វីឡើង Rank ពិបាក?\n\nការឡើង Rank ពី Epic ទៅ Mythic ត្រូវការ **ជំនាញ + យុទ្ធសាស្ត្រ + ក្រុមល្អ** ។\n\n## ១. ជ្រើស Role តែមួយ\n\nកុំលេងគ្រប់ Role ។ ជ្រើស Role ដែលអ្នកពូកែបំផុត រួចហាត់តួអង្គ ២-៣ ប៉ុណ្ណោះ។\n\n## ២. មើល Map ជាប់ជានិច្ច\n\nអ្នកលេង Mythic មើល Map រៀងរាល់ ៣-៥ វិនាទី ។ ដឹងថាសត្រូវនៅទីណា = ឈ្នះ Team Fight ។\n\n## ៣. លេងជាមួយក្រុម\n\nSolo Rank គឺពិបាក ។ បង្កើតក្រុម ៣-៥ នាក់ ដែលស្គាល់គ្នា រួចលេងជាមួយគ្នា ។\n\n## ៤. ហាត់តួអង្គក្នុង Classic មុន\n\nកុំសាកតួអង្គថ្មីក្នុង Rank ។ ហាត់ក្នុង Classic យ៉ាងតិច ១០ ហ្គេម មុននឹងយកទៅ Rank ។\n\n## ៥. ស្ងប់ស្ងាត់\n\nកុំខឹងពេលចាញ់ ។ រៀនពីកំហុស រួចបន្តទៅហ្គេមបន្ទាប់ ។",
      en: "## Why is Ranking Up Hard?\n\nClimbing from Epic to Mythic requires **skill + strategy + good team**.\n\n## 1. Pick One Role\n\nDon't play every role. Pick the role you're best at, then master 2-3 heroes.\n\n## 2. Watch the Map Constantly\n\nMythic players check the map every 3-5 seconds. Knowing where enemies are = winning team fights.\n\n## 3. Play with a Team\n\nSolo rank is hard. Form a team of 3-5 players who know each other, then play together.\n\n## 4. Practice Heroes in Classic First\n\nDon't try new heroes in Rank. Practice in Classic for at least 10 games before ranking.\n\n## 5. Stay Calm\n\nDon't rage when losing. Learn from mistakes, then move to the next game.",
    },
  },
  {
    slug: "free-fire-vs-mlbb-cambodia",
    title: {
      km: "Free Fire vs MLBB — ហ្គេមណាល្អសម្រាប់អ្នកលេងកម្ពុជា?",
      en: "Free Fire vs MLBB — Which is Better for Cambodian Players?",
    },
    excerpt: {
      km: "ការប្រៀបធៀបរវាង Free Fire និង MLBB ដើម្បីជួយអ្នកសម្រេចចិត្តថាត្រូវលេងហ្គេមណា",
      en: "Comparison between Free Fire and MLBB to help you decide which game to play",
    },
    category: "Comparison",
    categoryColor: "#22c55e",
    date: "2026-09-15",
    readTime: 6,
    author: "CyberNovaX Team",
    coverEmoji: "🎮",
    coverGradient: "from-green-500 to-cyan-500",
    content: {
      km: "## ការប្រៀបធៀប\n\nទាំង Free Fire និង MLBB គឺជាហ្គេមពេញនិយមបំផុតនៅកម្ពុជា ។ តើហ្គេមណាល្អសម្រាប់អ្នក?\n\n## Free Fire\n\n**គុណសម្បត្តិ:**\n- ហ្គេមចប់លឿន (១៥-២០ នាទី)\n- លេងលើទូរស័ព្ទខ្សោយបាន\n- គ្មានការពឹងផ្អែកលើក្រុមខ្លាំង\n\n**គុណវិបត្តិ:**\n- ខូចខាតពឹងផ្អែកលើ Ping\n- ពិបាកឈ្នះបើក្រុមខ្សោយ\n\n## MLBB\n\n**គុណសម្បត្តិ:**\n- ហ្គេមពឹងផ្អែកលើជំនាញ\n- តួអង្គច្រើន (១៣៣+)\n- Esports ធំ\n\n**គុណវិបត្តិ:**\n- ហ្គេមចំណាយពេលយូរ (២៥-៤០ នាទី)\n- ត្រូវការទូរស័ព្ទខ្លាំង\n\n## សេចក្តីសន្និដ្ឋាន\n\n- បើអ្នកចូលចិត្ត **ការលឿន** → Free Fire\n- បើអ្នកចូលចិត្ត **យុទ្ធសាស្ត្រ** → MLBB\n- បើអ្នកមាន **ទូរស័ព្ទខ្សោយ** → Free Fire",
      en: "## Comparison\n\nBoth Free Fire and MLBB are the most popular games in Cambodia. Which is better for you?\n\n## Free Fire\n\n**Pros:**\n- Fast matches (15-20 min)\n- Works on low-end phones\n- Doesn't rely heavily on team\n\n**Cons:**\n- Damage depends on ping\n- Hard to win with weak team\n\n## MLBB\n\n**Pros:**\n- Skill-based gameplay\n- Many heroes (133+)\n- Big esports scene\n\n**Cons:**\n- Long matches (25-40 min)\n- Needs powerful phone\n\n## Conclusion\n\n- If you like **fast-paced** → Free Fire\n- If you like **strategy** → MLBB\n- If you have a **low-end phone** → Free Fire",
    },
  },
  {
    slug: "free-fire-sensitivity-10-tips",
    title: {
      km: "១០ គន្លឹះកែសម្រួល Sensitivity សម្រាប់ Free Fire",
      en: "10 Tips to Perfect Your Free Fire Sensitivity",
    },
    excerpt: {
      km: "រៀនកែ Sensitivity ឱ្យត្រូវនឹងទូរស័ព្ទ និង Style លេងរបស់អ្នក",
      en: "Learn to tune sensitivity to match your phone and playstyle",
    },
    category: "Tips",
    categoryColor: "#f59e0b",
    date: "2026-09-14",
    readTime: 5,
    author: "CyberNovaX Team",
    coverEmoji: "🎯",
    coverGradient: "from-amber-500 to-orange-500",
    content: {
      km: "## ហេតុអ្វី Sensitivity សំខាន់?\n\nSensitivity ត្រឹមត្រូវ = បាញ់ត្រូវលឿន + Headshot ងាយ ។\n\n## ១. ចាប់ផ្តើមពី General\n\nGeneral គឺសំខាន់បំផុត ។ សាក ៩០-១០០ សិន ។\n\n## ២. Red Dot ឱ្យខ្ពស់\n\nRed Dot សម្រាប់ចម្ងាយខ្លី ។ សាក ៨៥-៩៥ ។\n\n## ៣. Scope ឱ្យទាបជាង\n\nScope ២x, ៤x គួរទាបជាង General ។\n\n## ៤. Sniper ទាបបំផុត\n\nSniper គួរទាប ៥០-៦៥ ដើម្បី Aim ត្រូវ ។\n\n## ៥. កែតាមទូរស័ព្ទ\n\nទូរស័ព្ទធំ (Screen ធំ) = ត្រូវការ Sensitivity ទាប ។\n\n## ៦. កែតាម Finger\n\n២ Finger, ៣ Finger, ៤ Finger = Sensitivity ខុសគ្នា ។\n\n## ៧. ហាត់ក្នុង Training\n\nសាក Sensitivity ថ្មីក្នុង Training ១៥ នាទី ។\n\n## ៨. កុំផ្លាស់ប្តូរញឹកញាប់\n\nកែតែម្តងក្នុង ១ សប្តាហ៍ ។\n\n## ៩. មើល Pro Player\n\nមើល YouTube របស់ Pro Player ដើម្បីដឹង Sensitivity ។\n\n## ១០. ស្តាប់ខ្លួនឯង\n\nSensitivity ល្អបំផុត = ដែលអ្នកមានអារម្មណ៍ស្រួលបំផុត ។",
      en: "## Why Does Sensitivity Matter?\n\nCorrect sensitivity = fast accurate shots + easy headshots.\n\n## 1. Start with General\n\nGeneral is the most important. Try 90-100 first.\n\n## 2. Keep Red Dot High\n\nRed Dot is for close range. Try 85-95.\n\n## 3. Scope Lower\n\n2x and 4x scope should be lower than General.\n\n## 4. Sniper Lowest\n\nSniper should be low, 50-65, for accurate aim.\n\n## 5. Adjust by Phone\n\nBigger screen phones = lower sensitivity needed.\n\n## 6. Adjust by Finger Count\n\n2-finger, 3-finger, 4-finger = different sensitivity.\n\n## 7. Practice in Training\n\nTest new sensitivity in Training for 15 minutes.\n\n## 8. Don't Change Often\n\nAdjust only once per week.\n\n## 9. Watch Pro Players\n\nWatch pro YouTube to learn their sensitivity.\n\n## 10. Trust Yourself\n\nBest sensitivity = the one you feel most comfortable with.",
    },
  },
  {
    slug: "mlbb-emblem-guide-2026",
    title: {
      km: "MLBB Emblem Guide — ការដំឡើងអេមប្លឹមល្អបំផុត ២០២៦",
      en: "MLBB Emblem Guide — Best Setups 2026",
    },
    excerpt: {
      km: "រៀនដំឡើង Emblem ឱ្យត្រូវនឹង Role និង Hero ដែលអ្នកលេង",
      en: "Learn to set up emblems to match your role and hero",
    },
    category: "Guide",
    categoryColor: "#a855f7",
    date: "2026-09-13",
    readTime: 8,
    author: "CyberNovaX Team",
    coverEmoji: "💎",
    coverGradient: "from-violet-500 to-purple-500",
    content: {
      km: "## Emblem សំខាន់ប៉ុណ្ណា?\n\nEmblem ល្អ = បង្កើន Stats ខ្លាំង ។ ខាងក្រោមនេះជាការដំឡើងល្អបំផុត ។\n\n## ១. Assassin Emblem\n\nសម្រាប់ Jungler: Ling, Hayabusa\n\n- **Talent:** High and Dry / Killing Spree\n- **Points:** 3 Agility, 3 Firmness\n\n## ២. Mage Emblem\n\nសម្រាប់ Mid Lane: Valentina, Pharsa\n\n- **Talent:** Impure Rage / Weapon Master\n- **Points:** 3 Agility, 3 Observation\n\n## ៣. Marksman Emblem\n\nសម្រាប់ Gold Lane: Beatrix, Claude\n\n- **Talent:** Weakness Finder / Weapon Master\n- **Points:** 3 Agility, 3 Swift\n\n## ៤. Support Emblem\n\nសម្រាប់ Roamer: Estes, Angela\n\n- **Talent:** Pull Yourself Together / Focusing Mark\n- **Points:** 3 Agility, 3 Fortress\n\n## ៥. Tank Emblem\n\nសម្រាប់ Exp Lane: Yu Zhong, Uranus\n\n- **Talent:** Brave Smite / Tenacity\n- **Points:** 3 Firmness, 3 Fortress\n\n## ៦. Fighter Emblem\n\nសម្រាប់ Exp Lane: Paquito, Chou\n\n- **Talent:** Festival of Blood / Vengeance\n- **Points:** 3 Agility, 3 Firmness\n\n## ដំបូន្មាន\n\n- កែ Emblem តាម Hero និង Enemy Team\n- មើល Pro Build ក្នុង Game\n- ហាត់ក្នុង Classic មុន Rank",
      en: "## How Important Are Emblems?\n\nGood emblems = big stat boost. Here are the best setups.\n\n## 1. Assassin Emblem\n\nFor Jungler: Ling, Hayabusa\n\n- **Talent:** High and Dry / Killing Spree\n- **Points:** 3 Agility, 3 Firmness\n\n## 2. Mage Emblem\n\nFor Mid Lane: Valentina, Pharsa\n\n- **Talent:** Impure Rage / Weapon Master\n- **Points:** 3 Agility, 3 Observation\n\n## 3. Marksman Emblem\n\nFor Gold Lane: Beatrix, Claude\n\n- **Talent:** Weakness Finder / Weapon Master\n- **Points:** 3 Agility, 3 Swift\n\n## 4. Support Emblem\n\nFor Roamer: Estes, Angela\n\n- **Talent:** Pull Yourself Together / Focusing Mark\n- **Points:** 3 Agility, 3 Fortress\n\n## 5. Tank Emblem\n\nFor Exp Lane: Yu Zhong, Uranus\n\n- **Talent:** Brave Smite / Tenacity\n- **Points:** 3 Firmness, 3 Fortress\n\n## 6. Fighter Emblem\n\nFor Exp Lane: Paquito, Chou\n\n- **Talent:** Festival of Blood / Vengeance\n- **Points:** 3 Agility, 3 Firmness\n\n## Tips\n\n- Adjust emblems by hero and enemy team\n- Watch pro builds in-game\n- Practice in Classic before Rank",
    },
  },
  {
    slug: "gaming-phone-guide-cambodia-2026",
    title: {
      km: "Gaming Phone Buying Guide សម្រាប់អ្នកលេងកម្ពុជា ២០២៦",
      en: "Gaming Phone Buying Guide for Cambodian Players 2026",
    },
    excerpt: {
      km: "ណែនាំទូរស័ព្ទល្អសម្រាប់លេង Free Fire និង MLBB ក្នុងតម្លៃខុសៗគ្នា",
      en: "Recommended phones for playing Free Fire and MLBB at different price points",
    },
    category: "Hardware",
    categoryColor: "#22d3ee",
    date: "2026-09-12",
    readTime: 9,
    author: "CyberNovaX Team",
    coverEmoji: "📱",
    coverGradient: "from-blue-500 to-cyan-500",
    content: {
      km: "## តើត្រូវការទូរស័ព្ទបែបណា?\n\nសម្រាប់ Free Fire និង MLBB ត្រូវការ៖\n\n- **RAM:** ៦-៨ GB ឡើងទៅ\n- **Chipset:** Snapdragon ៦xx ឡើងទៅ\n- **Battery:** ៥០០០ mAh ឡើងទៅ\n- **Screen:** ៦.៥ អ៊ីញ ឡើងទៅ\n\n## តម្លៃ $១០០-១៥០\n\n- Redmi Note 13\n- Realme C67\n- Samsung Galaxy A15\n\n**ល្អសម្រាប់:** Free Fire កម្រិតមធ្យម\n\n## តម្លៃ $២០០-៣០០\n\n- Redmi Note 13 Pro\n- Poco X6\n- Realme 12 Pro\n\n**ល្អសម្រាប់:** Free Fire ល្អ + MLBB មធ្យម\n\n## តម្លៃ $៤០០-៦០០\n\n- Poco F6\n- Realme GT 6\n- OnePlus Nord 4\n\n**ល្អសម្រាប់:** Free Fire + MLBB កម្រិតខ្ពស់\n\n## តម្លៃ $៨០០+\n\n- iPhone 15\n- Samsung S24\n- ROG Phone 8\n\n**ល្អសម្រាប់:** Pro Gaming\n\n## ដំបូន្មាន\n\n- មើល Reviews មុនទិញ\n- សាកក្នុងហាងមុនទិញ\n- ពិនិត្យ Battery និង Cooling",
      en: "## What Phone Do You Need?\n\nFor Free Fire and MLBB, you need:\n\n- **RAM:** 6-8 GB or more\n- **Chipset:** Snapdragon 6xx or better\n- **Battery:** 5000 mAh or more\n- **Screen:** 6.5 inch or bigger\n\n## Price $100-150\n\n- Redmi Note 13\n- Realme C67\n- Samsung Galaxy A15\n\n**Good for:** Free Fire medium settings\n\n## Price $200-300\n\n- Redmi Note 13 Pro\n- Poco X6\n- Realme 12 Pro\n\n**Good for:** Free Fire high + MLBB medium\n\n## Price $400-600\n\n- Poco F6\n- Realme GT 6\n- OnePlus Nord 4\n\n**Good for:** Free Fire + MLBB high settings\n\n## Price $800+\n\n- iPhone 15\n- Samsung S24\n- ROG Phone 8\n\n**Good for:** Pro Gaming\n\n## Tips\n\n- Read reviews before buying\n- Test in-store before buying\n- Check battery and cooling",
    },
  },
  {
    slug: "best-free-fire-weapons-rank-push",
    title: {
      km: "៥ អាវុធល្អបំផុតក្នុង Free Fire សម្រាប់ Rank Push",
      en: "5 Best Free Fire Weapons for Rank Push",
    },
    excerpt: {
      km: "បញ្ជីអាវុធដែលមានខូចខាតខ្ពស់ និងងាយប្រើបំផុតសម្រាប់ការឡើង Rank",
      en: "List of highest damage and easiest weapons for ranking up",
    },
    category: "Weapons",
    categoryColor: "#ef4444",
    date: "2026-09-11",
    readTime: 6,
    author: "CyberNovaX Team",
    coverEmoji: "🔫",
    coverGradient: "from-red-500 to-rose-500",
    content: {
      km: "## អាវុធល្អបំផុត ៥\n\n## ១. MP40\n\n- **ខូចខាត:** ខ្ពស់\n- **ល្បឿនបាញ់:** លឿនបំផុត\n- **ល្អសម្រាប់:** ចម្ងាយខ្លី\n- **ដំបូន្មាន:** ប្រើជាមួយ Gloo Wall\n\n## ២. M1887\n\n- **ខូចខាត:** ខ្ពស់បំផុត\n- **ល្បឿនបាញ់:** យឺត\n- **ល្អសម្រាប់:** ចម្ងាយខ្លី\n- **ដំបូន្មាន:** បាញ់ម្តងសម្លាប់ម្តង\n\n## ៣. AK47\n\n- **ខូចខាត:** ខ្ពស់\n- **ល្បឿនបាញ់:** មធ្យម\n- **ល្អសម្រាប់:** ចម្ងាយមធ្យម\n- **ដំបូន្មាន:** គ្រប់គ្រង Recoil\n\n## ៤. M4A1\n\n- **ខូចខាត:** មធ្យម\n- **ល្បឿនបាញ់:** លឿន\n- **ល្អសម្រាប់:** ចម្ងាយមធ្យម-ឆ្ងាយ\n- **ដំបូន្មាន:** ស្ថេរភាពខ្ពស់\n\n## ៥. AWM\n\n- **ខូចខាត:** ខ្ពស់បំផុត\n- **ល្បឿនបាញ់:** យឺតបំផុត\n- **ល្អសម្រាប់:** ចម្ងាយឆ្ងាយ\n- **ដំបូន្មាន:** ត្រូវការ Aim ត្រូវ\n\n## ដំបូន្មាន\n\n- ប្រើ ២ អាវុធ (ខ្លី + ឆ្ងាយ)\n- ហាត់ក្នុង Training\n- ស្គាល់ Recoil",
      en: "## Top 5 Best Weapons\n\n## 1. MP40\n\n- **Damage:** High\n- **Fire Rate:** Fastest\n- **Best for:** Close range\n- **Tip:** Use with Gloo Wall\n\n## 2. M1887\n\n- **Damage:** Highest\n- **Fire Rate:** Slow\n- **Best for:** Close range\n- **Tip:** One shot, one kill\n\n## 3. AK47\n\n- **Damage:** High\n- **Fire Rate:** Medium\n- **Best for:** Medium range\n- **Tip:** Control recoil\n\n## 4. M4A1\n\n- **Damage:** Medium\n- **Fire Rate:** Fast\n- **Best for:** Medium-long range\n- **Tip:** High stability\n\n## 5. AWM\n\n- **Damage:** Highest\n- **Fire Rate:** Slowest\n- **Best for:** Long range\n- **Tip:** Requires accurate aim\n\n## Tips\n\n- Use 2 weapons (close + long)\n- Practice in Training\n- Learn recoil",
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}