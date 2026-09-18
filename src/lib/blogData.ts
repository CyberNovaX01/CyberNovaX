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
  {
    slug: "free-fire-reach-heroic-fast",
    title: {
      km: "Free Fire — គន្លឹះឡើង Heroic លឿន",
      en: "Free Fire — Tips to Reach Heroic Fast",
    },
    excerpt: {
      km: "គន្លឹះ និងយុទ្ធសាស្ត្រសម្រាប់ការឡើង Rank ពី Gold ដល់ Heroic ក្នុងរយៈពេលខ្លី",
      en: "Tips and strategies to climb from Gold to Heroic in a short time",
    },
    category: "Guide",
    categoryColor: "#f59e0b",
    date: "2026-09-19",
    readTime: 7,
    author: "CyberNovaX Team",
    coverEmoji: "🏅",
    coverGradient: "from-yellow-500 to-orange-500",
    content: {
      km: "## ហេតុអ្វីឡើង Heroic ពិបាក?\n\nការឡើង Rank ពី Gold ទៅ Heroic ត្រូវការ **ជំនាញ + យុទ្ធសាស្ត្រ + ក្រុមល្អ** ។\n\n## ១. កែ Sensitivity ឱ្យត្រូវ\n\nSensitivity ល្អ = បាញ់ត្រូវច្រើន ។ សាក ៩០-១០០ សម្រាប់ General ។\n\n## ២. ជ្រើសតួអង្គតែ ២-៣\n\nកុំលេងគ្រប់តួអង្គ ។ ជ្រើស ២-៣ ដែលអ្នកពូកែបំផុត ។\n\n## ៣. ហាត់ក្នុង Training\n\nហាត់ ១៥ នាទីរាល់ថ្ងៃ ដើម្បីកែ Aim ។\n\n## ៤. លេងជាមួយក្រុម\n\nSolo Rank ពិបាក ។ បង្កើតក្រុម ៤ នាក់ ។\n\n## ៥. កុំខឹង\n\nកុំខឹងពេលចាញ់ ។ រៀនពីកំហុស ។",
      en: "## Why is Reaching Heroic Hard?\n\nClimbing from Gold to Heroic requires **skill + strategy + good team**.\n\n## 1. Perfect Your Sensitivity\n\nGood sensitivity = more hits. Try 90-100 for General.\n\n## 2. Pick Only 2-3 Characters\n\nDon't play every character. Pick 2-3 you're best at.\n\n## 3. Practice in Training\n\nPractice 15 minutes daily to improve aim.\n\n## 4. Play with a Team\n\nSolo rank is hard. Form a team of 4.\n\n## 5. Don't Rage\n\nDon't rage when losing. Learn from mistakes.",
    },
  },
  {
    slug: "mlbb-tower-defense-guide",
    title: {
      km: "MLBB — វិធីការពារ Tower ល្អបំផុត",
      en: "MLBB — Best Tower Defense Guide",
    },
    excerpt: {
      km: "រៀនការពារ Tower របស់អ្នកឱ្យបានល្អ និងវាយបំបែក Tower របស់សត្រូវ",
      en: "Learn to defend your tower and destroy enemy towers",
    },
    category: "Strategy",
    categoryColor: "#22c55e",
    date: "2026-09-18",
    readTime: 8,
    author: "CyberNovaX Team",
    coverEmoji: "🏰",
    coverGradient: "from-green-500 to-teal-500",
    content: {
      km: "## Tower សំខាន់ប៉ុណ្ណា?\n\nTower គឺជា **ជីវិត** របស់ក្រុម ។ ការពារ Tower = ឈ្នះហ្គេម ។\n\n## ១. Clear Minion មុន\n\nកុំឱ្យ Minion សត្រូវចូល Tower ។ Clear ឱ្យបានលឿន ។\n\n## ២. កុំចេញពី Tower ឆ្ងាយ\n\nនៅក្រោម Tower ពេល Early Game ។ កុំហួស Line ។\n\n## ៣. មើល Map\n\nមើល Map រៀងរាល់ ៥ វិនាទី ដើម្បីដឹងថា Jungler សត្រូវនៅណា ។\n\n## ៤. ការពារ Lord\n\nLord គឺជាគ្រោះថ្នាក់ធំ ។ កុំឱ្យសត្រូវយក Lord បាន ។\n\n## ៥. Push ពេលទំនេរ\n\nពេលសត្រូវស្លាប់ ២-៣ នាក់ → Push Tower ភ្លាម ។",
      en: "## How Important Are Towers?\n\nTowers are your **team's life**. Defending them = winning.\n\n## 1. Clear Minions First\n\nDon't let enemy minions reach your tower. Clear them fast.\n\n## 2. Don't Overextend\n\nStay under tower early game. Don't push past your line.\n\n## 3. Watch the Map\n\nCheck map every 5 seconds to know where enemy jungler is.\n\n## 4. Defend Lord\n\nLord is a big threat. Don't let enemies take it.\n\n## 5. Push When Free\n\nWhen 2-3 enemies die → push towers immediately.",
    },
  },
  {
    slug: "free-fire-gloo-wall-tips",
    title: {
      km: "Free Fire — គន្លឹះប្រើ Gloo Wall ឱ្យពូកែ",
      en: "Free Fire — Gloo Wall Mastery Tips",
    },
    excerpt: {
      km: "រៀនប្រើ Gloo Wall ដើម្បីការពារខ្លួន និងវាយប្រហារ",
      en: "Learn to use Gloo Wall for defense and attack",
    },
    category: "Tips",
    categoryColor: "#22d3ee",
    date: "2026-09-17",
    readTime: 6,
    author: "CyberNovaX Team",
    coverEmoji: "🧱",
    coverGradient: "from-cyan-500 to-blue-500",
    content: {
      km: "## Gloo Wall ជាអ្វី?\n\nGloo Wall គឺជាជញ្ជាំងការពារដែលអាចដាក់បានភ្លាមៗ ។ វាជា **អាវុធសំខាន់** ក្នុងការប្រយុទ្ធ ។\n\n## ១. ប្រើជាមួយ Rush\n\nពេល Rush សត្រូវ → ដាក់ Gloo Wall ខាងមុខ ។\n\n## ២. ការពារខ្លួនពេលរងគ្រោះ\n\nពេល HP តិច → ដាក់ Gloo Wall រួចព្យាបាល ។\n\n## ៣. ប្រើ Cover ពេល Reload\n\nពេល Reload → ដាក់ Gloo Wall ខាងមុខ ។\n\n## ៤. កុំដាក់ខ្ពស់ពេក\n\nដាក់ឱ្យទាប ដើម្បីមើលសត្រូវ ។\n\n## ៥. ប្រើ ២ ជាន់\n\nប្រើ Gloo Wall ២ ជាន់ ដើម្បីការពារខ្លួនបានល្អ ។",
      en: "## What is Gloo Wall?\n\nGloo Wall is a deployable shield. It's an **essential weapon** in combat.\n\n## 1. Use with Rush\n\nWhen rushing enemies → place Gloo Wall in front.\n\n## 2. Self-Defense\n\nWhen HP is low → place Gloo Wall then heal.\n\n## 3. Cover for Reload\n\nWhen reloading → place Gloo Wall ahead.\n\n## 4. Don't Place Too High\n\nPlace low so you can see enemies.\n\n## 5. Use Two Layers\n\nTwo Gloo Walls give better protection.",
    },
  },
  {
    slug: "mlbb-roamer-complete-guide",
    title: {
      km: "MLBB — Roamer Guide ពេញលេញ",
      en: "MLBB — Complete Roamer Guide",
    },
    excerpt: {
      km: "រៀនលេង Role Roamer ឱ្យពូកែ — ជួយក្រុម និងគ្រប់គ្រង Map",
      en: "Learn to master the Roamer role — help team and control the map",
    },
    category: "Guide",
    categoryColor: "#a855f7",
    date: "2026-09-16",
    readTime: 9,
    author: "CyberNovaX Team",
    coverEmoji: "🛡️",
    coverGradient: "from-purple-500 to-indigo-500",
    content: {
      km: "## Roamer សំខាន់ប៉ុណ្ណា?\n\nRoamer គឺជា **ខួរក្បាល** របស់ក្រុម ។ គាត់ជួយគ្រប់ Lane និងគ្រប់គ្រង Map ។\n\n## ១. ជ្រើសតួអង្គ Roamer\n\n- **Chou** — គ្រប់គ្រងសត្រូវ\n- **Franco** — Hook\n- **Khufra** — ការពារក្រុម\n- **Estes** — ព្យាបាល\n\n## ២. ចាប់ផ្តើមជាមួយ Jungler\n\nនៅដើមហ្គេម → ជួរ Jungler យក Buff លឿន ។\n\n## ៣. Rotate ទៅ Lane\n\nបន្ទាប់ពី Jungler លើក Level ៤ → Rotate ទៅ Mid ឬ Gold Lane ។\n\n## ៤. មើល Map ជាប់ជានិច្ច\n\nRoamer ត្រូវមើល Map រៀងរាល់ ៣-៥ វិនាទី ។\n\n## ៥. ប្រើ Item ត្រឹមត្រូវ\n\n- **Conceal** — ជួយក្រុមលាក់ខ្លួន\n- **Encourage** — បង្កើន Damage\n- **Flicker** — រត់គេច",
      en: "## How Important is Roamer?\n\nRoamer is the **brain** of the team. They help every lane and control the map.\n\n## 1. Pick Roamer Heroes\n\n- **Chou** — Enemy control\n- **Franco** — Hook\n- **Khufra** — Team protection\n- **Estes** — Heal\n\n## 2. Start with Jungler\n\nEarly game → help Jungler take buffs fast.\n\n## 3. Rotate to Lanes\n\nAfter Jungler reaches Level 4 → rotate to Mid or Gold Lane.\n\n## 4. Watch Map Constantly\n\nRoamer must check map every 3-5 seconds.\n\n## 5. Use Correct Items\n\n- **Conceal** — Help team hide\n- **Encourage** — Boost damage\n- **Flicker** — Escape",
    },
  },
  {
    slug: "free-fire-fix-ping-lag",
    title: {
      km: "Free Fire — វិធីកែ Ping និង Lag",
      en: "Free Fire — How to Fix Ping and Lag",
    },
    excerpt: {
      km: "រៀនកែ Ping ខ្ពស់ និង Lag ដើម្បីលេងហ្គេមរលូន",
      en: "Learn to fix high ping and lag for smooth gameplay",
    },
    category: "Tech",
    categoryColor: "#06b6d4",
    date: "2026-09-15",
    readTime: 7,
    author: "CyberNovaX Team",
    coverEmoji: "📡",
    coverGradient: "from-cyan-500 to-sky-500",
    content: {
      km: "## Ping និង Lag ជាអ្វី?\n\n**Ping** គឺជាពេលវេលាឆ្លើយតប (ms) ។ **Lag** គឺការយឺតរបស់ហ្គេម ។\n\n## ១. ប្រើ WiFi ល្អ\n\nកុំប្រើ WiFi ខ្សោយ ។ ប្រើ 5GHz ឬ 4G/5G ។\n\n## ២. បិទ App ផ្សេង\n\nបិទ App ដែលប្រើ Internet ខ្លាំង (YouTube, TikTok) ។\n\n## ៣. បិទ Background\n\nបិទ App ដែលដំណើរការក្នុង Background ។\n\n## ៤. កែ Graphics\n\nកែ Graphics ទៅ **Smooth** ឬ **Standard** ។\n\n## ៥. ជ្រើស Server ត្រូវ\n\nជ្រើស Server ជិតកម្ពុជា (Singapore, Thailand, Vietnam) ។\n\n## ៦. Restart ទូរស័ព្ទ\n\nRestart ទូរស័ព្ទមុនលេង ។",
      en: "## What are Ping and Lag?\n\n**Ping** is response time (ms). **Lag** is game slowdown.\n\n## 1. Use Good WiFi\n\nDon't use weak WiFi. Use 5GHz or 4G/5G.\n\n## 2. Close Other Apps\n\nClose heavy internet apps (YouTube, TikTok).\n\n## 3. Close Background Apps\n\nClose background running apps.\n\n## 4. Adjust Graphics\n\nSet graphics to **Smooth** or **Standard**.\n\n## 5. Pick Correct Server\n\nPick server near Cambodia (Singapore, Thailand, Vietnam).\n\n## 6. Restart Phone\n\nRestart phone before playing.",
    },
  },
  {
    slug: "mlbb-best-heroes-beginners",
    title: {
      km: "MLBB — ៥ តួអង្គល្អបំផុតសម្រាប់អ្នកចាប់ផ្តើម",
      en: "MLBB — 5 Best Heroes for Beginners",
    },
    excerpt: {
      km: "បញ្ជីតួអង្គដែលងាយលេង និងខ្លាំងបំផុតសម្រាប់អ្នកទើបចាប់ផ្តើមលេង MLBB",
      en: "List of easy and strong heroes for MLBB beginners",
    },
    category: "Guide",
    categoryColor: "#a855f7",
    date: "2026-09-14",
    readTime: 6,
    author: "CyberNovaX Team",
    coverEmoji: "⭐",
    coverGradient: "from-violet-500 to-fuchsia-500",
    content: {
      km: "## តួអង្គសម្រាប់អ្នកចាប់ផ្តើម\n\nខាងក្រោមនេះជាតួអង្គ ៥ ដែល **ងាយលេង** និង **ខ្លាំង** សម្រាប់អ្នកថ្មី ។\n\n## ១. Layla (Marksman)\n\n- **ហេតុអ្វី:** បាញ់ពីចម្ងាយ ងាយប្រើ\n- **Role:** Gold Lane\n\n## ២. Miya (Marksman)\n\n- **ហេតុអ្វី:** Ultimate លាក់ខ្លួនបាន\n- **Role:** Gold Lane\n\n## ៣. Zilong (Fighter)\n\n- **ហេតុអ្វី:** វាយលឿន ងាយប្រើ\n- **Role:** Exp Lane\n\n## ៤. Eudora (Mage)\n\n- **ហេតុអ្វី:** Combo ខ្លាំង សម្លាប់លឿន\n- **Role:** Mid Lane\n\n## ៥. Balmond (Tank/Fighter)\n\n- **ហេតុអ្វី:** HP ខ្ពស់ ងាយស៊ូទ្រាំ\n- **Role:** Exp Lane\n\n## ដំបូន្មាន\n\n- ហាត់តួអង្គមួយក្នុង Classic មុន\n- មើល Map ជាប់ជានិច្ច\n- កុំខឹងពេលចាញ់",
      en: "## Heroes for Beginners\n\nHere are 5 **easy** and **strong** heroes for newcomers.\n\n## 1. Layla (Marksman)\n\n- **Why:** Long range, easy to use\n- **Role:** Gold Lane\n\n## 2. Miya (Marksman)\n\n- **Why:** Ultimate gives invisibility\n- **Role:** Gold Lane\n\n## 3. Zilong (Fighter)\n\n- **Why:** Fast attack, easy to use\n- **Role:** Exp Lane\n\n## 4. Eudora (Mage)\n\n- **Why:** Strong combo, fast kills\n- **Role:** Mid Lane\n\n## 5. Balmond (Tank/Fighter)\n\n- **Why:** High HP, easy sustain\n- **Role:** Exp Lane\n\n## Tips\n\n- Practice one hero in Classic first\n- Watch map constantly\n- Don't rage when losing",
    },
  },
  {
    slug: "gaming-setup-cambodia-guide",
    title: {
      km: "Gaming Setup Guide សម្រាប់អ្នកលេងកម្ពុជា",
      en: "Gaming Setup Guide for Cambodian Players",
    },
    excerpt: {
      km: "ណែនាំឧបករណ៍ និងគ្រឿងបន្ថែមសម្រាប់ការលេងហ្គេមឱ្យមានប្រសិទ្ធភាព",
      en: "Recommended gear and accessories for effective gaming",
    },
    category: "Hardware",
    categoryColor: "#ef4444",
    date: "2026-09-13",
    readTime: 8,
    author: "CyberNovaX Team",
    coverEmoji: "🎧",
    coverGradient: "from-red-500 to-pink-500",
    content: {
      km: "## Gaming Setup សំខាន់ប៉ុណ្ណា?\n\nSetup ល្អ = លេងហ្គេមស្រួល + ឈ្នះច្រើន ។\n\n## ១. ទូរស័ព្ទ\n\nសម្រាប់ Free Fire និង MLBB:\n- RAM ៦-៨ GB\n- Snapdragon ៦xx ឡើងទៅ\n- Battery ៥០០០ mAh\n\n## ២. កាសស្តាប់ត្រចៀក\n\nកាសល្អជួយស្តាប់ជើងសត្រូវ ។ ណែនាំ:\n- HyperX Cloud\n- Razer BlackShark\n- JBL Quantum\n\n## ៣. កូនកា\n\nកូនកាល្អជួយគ្រប់គ្រងហ្គេម ។ ណែនាំ:\n- GameSir\n- Razer Kishi\n- Backbone\n\n## ៤. Power Bank\n\nសម្រាប់លេងយូរ ។ ណែនាំ:\n- Anker ២០០០០ mAh\n- Xiaomi ២០០០០ mAh\n\n## ៥. កន្លែងលេង\n\n- កន្លែងត្រជាក់\n- កន្លែងស្ងាត់\n- WiFi លឿន",
      en: "## How Important is Gaming Setup?\n\nGood setup = comfortable gaming + more wins.\n\n## 1. Phone\n\nFor Free Fire and MLBB:\n- RAM 6-8 GB\n- Snapdragon 6xx or better\n- Battery 5000 mAh\n\n## 2. Headphones\n\nGood headphones help hear enemy footsteps. Recommended:\n- HyperX Cloud\n- Razer BlackShark\n- JBL Quantum\n\n## 3. Controller\n\nGood controller helps game control. Recommended:\n- GameSir\n- Razer Kishi\n- Backbone\n\n## 4. Power Bank\n\nFor long gaming sessions. Recommended:\n- Anker 20000 mAh\n- Xiaomi 20000 mAh\n\n## 5. Playing Environment\n\n- Cool place\n- Quiet place\n- Fast WiFi",
    },
  },
  {
    slug: "free-fire-ray-new-character",
    title: {
      km: "Free Fire Ray — តួអង្គថ្មីដែលផ្លាស់ប្តូរ Meta",
      en: "Free Fire Ray — New Character That Changes the Meta",
    },
    excerpt: {
      km: "ស្គាល់ Ray តួអង្គថ្មីដែលមានសមត្ថភាព Mark និង Knock Down សត្រូវ — ល្អបំផុតសម្រាប់អ្នកលេង Aggressive",
      en: "Meet Ray, the new character with Mark and Knock Down abilities — perfect for aggressive players",
    },
    category: "Meta",
    categoryColor: "#f59e0b",
    date: "2026-04-09",
    readTime: 5,
    author: "CyberNovaX Team",
    coverEmoji: "🎯",
    coverGradient: "from-orange-500 to-red-500",
    content: {
      km: "## Ray ជានរណា?\n\nRay គឺជាតួអង្គថ្មីដែលចេញផ្សាយក្នុង Update **Undersea Mystery** ខែមេសា 2026 ។ គាត់ត្រូវបានរចនាឡើងសម្រាប់ **អ្នកលេង Aggressive** ដែលចូលចិត្តវាយប្រហារផ្ទាល់ ។\n\n## សមត្ថភាពពិសេស\n\n- **Mark & Track** — Ray អាច Mark សត្រូវដែលគាត់វាយប្រហារដំបូង\n- **Knock Down** — បើ HP សត្រូវធ្លាក់ក្រោមកម្រិត → Knock Down ភ្លាម\n- **HP Recovery** — Ray ព្យាបាល HP ខ្លួនឯងពេល Knock Down បានជោគជ័យ\n\n## ហេតុអ្វី Ray ខ្លាំង?\n\n1. **Chained Hunter** — សម្លាប់សត្រូវម្នាក់ → Skill Reset → សម្លាប់បន្ត\n2. **Solo Carry** — អាចលេងតែម្នាក់បានល្អ\n3. **Aggressive Playstyle** — សមស្របសម្រាប់អ្នកចូលចិត្ត Rush\n\n## ដំបូន្មានប្រើ Ray\n\n- ប្រើជាមួយ **MP40** ឬ **M1887** សម្រាប់ចម្ងាយខ្លី\n- Mark សត្រូវមុននឹងវាយ\n- កុំភ្លេចព្យាបាល HP ពេល Knock Down\n\n## សេចក្តីសន្និដ្ឋាន\n\nRay គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់ Meta 2026 ។ បើអ្នកចូលចិត្តលេង Aggressive គាត់គឺជាជម្រើសដ៏ល្អបំផុត ។",
      en: "## Who is Ray?\n\nRay is the new character released in the **Undersea Mystery** update in April 2026. He's designed for **aggressive players** who love direct attacks.\n\n## Unique Abilities\n\n- **Mark & Track** — Ray can mark and track the first enemy he attacks\n- **Knock Down** — If enemy HP drops below threshold → instant Knock Down\n- **HP Recovery** — Ray heals himself on successful Knock Down\n\n## Why Ray is Strong?\n\n1. **Chained Hunter** — Kill one enemy → Skill Reset → Keep killing\n2. **Solo Carry** — Can play well solo\n3. **Aggressive Playstyle** — Perfect for players who love rushing\n\n## Tips for Ray\n\n- Use with **MP40** or **M1887** for close range\n- Mark enemies before attacking\n- Don't forget to heal HP on Knock Down\n\n## Conclusion\n\nRay is a powerful character for the 2026 Meta. If you love aggressive play, he's your best choice.",
    },
  },
  {
    slug: "mlbb-marcel-new-support",
    title: {
      km: "MLBB Marcel — Support ថ្មីជាមួយ Freeze ដ៏គ្រោះថ្នាក់",
      en: "MLBB Marcel — New Support with Dangerous Freeze",
    },
    excerpt: {
      km: "ស្គាល់ Marcel តួអង្គ Support ថ្មីដែលមានសមត្ថភាព Freeze និង Crowd Control — ផ្លាស់ប្តូរ Meta ឆ្នាំ 2026",
      en: "Meet Marcel, the new Support hero with Freeze and Crowd Control — changes the 2026 Meta",
    },
    category: "Meta",
    categoryColor: "#a855f7",
    date: "2026-03-12",
    readTime: 6,
    author: "CyberNovaX Team",
    coverEmoji: "❄️",
    coverGradient: "from-cyan-500 to-blue-500",
    content: {
      km: "## Marcel ជានរណា?\n\nMarcel គឺជាតួអង្គ **Support** ថ្មីដែលចេញផ្សាយក្នុង Season 40 ខែមីនា 2026 ។ គាត់មានសមត្ថភាព **Freeze** ដែលអាចគ្រប់គ្រងសត្រូវបានយ៉ាងល្អ ។\n\n## សមត្ថភាពពិសេស\n\n- **Two Souls** — Marcel មានព្រលឹង ២ ដែលអាចវាយប្រហារ និងការពារ\n- **Freeze Effect** — បង្កកសត្រូវឱ្យនៅស្ងៀម\n- **Crowd Control** — គ្រប់គ្រងក្រុមសត្រូវបានយ៉ាងល្អ\n\n## ហេតុអ្វី Marcel ខ្លាំង?\n\n1. **Meta Changer** — ផ្លាស់ប្តូរយុទ្ធសាស្ត្រក្រុម\n2. **Roam & Control** — អាច Roam និងគ្រប់គ្រង Map\n3. **Team Fight** — ខ្លាំងខ្លាំងក្នុង Team Fight\n\n## ដំបូន្មានប្រើ Marcel\n\n- ប្រើជាមួយ Hero ដែលមាន Damage ខ្ពស់\n- Freeze សត្រូវមុននឹងវាយ\n- មើល Map ជាប់ជានិច្ច\n\n## សេចក្តីសន្និដ្ឋាន\n\nMarcel គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់ Meta 2026 ។ បើអ្នកចូលចិត្តលេង Support គាត់គឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Marcel?\n\nMarcel is the new **Support** hero released in Season 40 in March 2026. He has a **Freeze** ability that can control enemies effectively.\n\n## Unique Abilities\n\n- **Two Souls** — Marcel has two souls for attack and defense\n- **Freeze Effect** — Freezes enemies in place\n- **Crowd Control** — Excellent team control\n\n## Why Marcel is Strong?\n\n1. **Meta Changer** — Changes team strategies\n2. **Roam & Control** — Can roam and control the map\n3. **Team Fight** — Very strong in team fights\n\n## Tips for Marcel\n\n- Pair with high-damage heroes\n- Freeze enemies before attacking\n- Watch the map constantly\n\n## Conclusion\n\nMarcel is a powerful hero for the 2026 Meta. If you like playing Support, he's a great choice.",
    },
  },
  {
    slug: "mlbb-hirara-new-assassin",
    title: {
      km: "MLBB Hirara — Assassin ថ្មីជាមួយ Twin Fans ដ៏គ្រោះថ្នាក់",
      en: "MLBB Hirara — New Assassin with Deadly Twin Fans",
    },
    excerpt: {
      km: "ស្គាល់ Hirara តួអង្គ Assassin ថ្មីដែលប្រើ Twin Fans ជាអាវុធ — ល្អបំផុតសម្រាប់ Jungler",
      en: "Meet Hirara, the new Assassin hero with Twin Fans — perfect for Jungler",
    },
    category: "Meta",
    categoryColor: "#a855f7",
    date: "2026-06-17",
    readTime: 7,
    author: "CyberNovaX Team",
    coverEmoji: "🌀",
    coverGradient: "from-purple-500 to-pink-500",
    content: {
      km: "## Hirara ជានរណា?\n\nHirara គឺជាតួអង្គ **Assassin** ថ្មីដែលចេញផ្សាយក្នុង Patch 2.1.66 ខែមិថុនា 2026 ។ គាត់ប្រើ **Twin Fans: Ukifune** ជាអាវុធ ។\n\n## សមត្ថភាពពិសេស\n\n- **Twin Fans** — ប្រើកង្ហារ ២ ដែលមាន Combo ផ្សេងៗគ្នា\n- **Assassin** — Mobility ខ្ពស់ ខូចខាតធ្ងន់\n- **Scarlet Shadow** — សមត្ថភាពលាក់ខ្លួន\n\n## ហេតុអ្វី Hirara ខ្លាំង?\n\n1. **Jungler SS Tier** — ជាប់ចំណាត់ថ្នាក់ Jungler SS\n2. **Combo Flexibility** — អាចប្រើ Combo ច្រើនបែប\n3. **High Mobility** — លឿន និងគេចបានល្អ\n\n## ដំបូន្មានប្រើ Hirara\n\n- ហាត់ Combo ក្នុង Training\n- មើល Map សម្រាប់ Gank\n- ប្រើ Assassin Emblem\n\n## សេចក្តីសន្និដ្ឋាន\n\nHirara គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់ Jungler ។ បើអ្នកចូលចិត្តលេង Assassin គាត់គឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Hirara?\n\nHirara is the new **Assassin** hero released in Patch 2.1.66 in June 2026. She wields **Twin Fans: Ukifune** as her weapon.\n\n## Unique Abilities\n\n- **Twin Fans** — Uses two fans with different combos\n- **Assassin** — High mobility, heavy damage\n- **Scarlet Shadow** — Stealth ability\n\n## Why Hirara is Strong?\n\n1. **Jungler SS Tier** — Ranked SS tier Jungler\n2. **Combo Flexibility** — Multiple combo options\n3. **High Mobility** — Fast and good escape\n\n## Tips for Hirara\n\n- Practice combos in Training\n- Watch map for ganks\n- Use Assassin Emblem\n\n## Conclusion\n\nHirara is a powerful hero for Jungler. If you like playing Assassin, she's a great choice.",
    },
  },
  {
    slug: "free-fire-morse-stealth-character",
    title: {
      km: "Free Fire Morse — តួអង្គ Stealth ថ្មីដែលគ្មាននរណាមើលឃើញ",
      en: "Free Fire Morse — New Stealth Character Nobody Can See",
    },
    excerpt: {
      km: "ស្គាល់ Morse តួអង្គ Stealth ថ្មីដែលអាចលាក់ខ្លួនពីសត្រូវ — ល្អបំផុតសម្រាប់ Flanking",
      en: "Meet Morse, the new Stealth character who can hide from enemies — perfect for flanking",
    },
    category: "Meta",
    categoryColor: "#06b6d4",
    date: "2026-01-19",
    readTime: 5,
    author: "CyberNovaX Team",
    coverEmoji: "👻",
    coverGradient: "from-cyan-500 to-sky-500",
    content: {
      km: "## Morse ជានរណា?\n\nMorse គឺជាតួអង្គថ្មីដែលចេញផ្សាយក្នុង Update OB52 ខែមករា 2026 ។ គាត់ជាអ្នកជំនាញ **Stealth** និង **Information Denial** ។\n\n## សមត្ថភាពពិសេស\n\n- **Stealth Bytes** — អាចចូលរបៀប Stealth ស្ទើរតែមើលមិនឃើញ\n- **Information Denial** — បិទការមើលឃើញរបស់សត្រូវ\n- **16m Range** — សត្រូវក្នុងចម្ងាយ ១៦ ម៉ែត្រមើលមិនឃើញ\n\n## ហេតុអ្វី Morse ខ្លាំង?\n\n1. **Flanking King** — អាចវាយពីខាងក្រោយ\n2. **Escape Master** — គេចចេញពីសត្រូវបានល្អ\n3. **Solo Player** — ល្អសម្រាប់អ្នកលេង Solo\n\n## ដំបូន្មានប្រើ Morse\n\n- ប្រើសម្រាប់ Flanking និង Sneak Attack\n- កុំប្រើពេលសត្រូវច្រើន\n- ប្រើជាមួយ Sniper សម្រាប់ចម្ងាយឆ្ងាយ\n\n## សេចក្តីសន្និដ្ឋាន\n\nMorse គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់អ្នកចូលចិត្ត Stealth ។ បើអ្នកចូលចិត្ត Flanking គាត់គឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Morse?\n\nMorse is the new character released in the OB52 update in January 2026. He's a **Stealth** and **Information Denial** expert.\n\n## Unique Abilities\n\n- **Stealth Bytes** — Can enter near-invisible Stealth mode\n- **Information Denial** — Blocks enemy vision\n- **16m Range** — Enemies within 16m can't see him\n\n## Why Morse is Strong?\n\n1. **Flanking King** — Can attack from behind\n2. **Escape Master** — Great at escaping\n3. **Solo Player** — Good for solo players\n\n## Tips for Morse\n\n- Use for flanking and sneak attacks\n- Avoid when many enemies\n- Pair with Sniper for long range\n\n## Conclusion\n\nMorse is a powerful character for stealth lovers. If you like flanking, he's your choice.",
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