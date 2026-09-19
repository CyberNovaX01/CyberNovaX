export type NewsItem = {
  id: string;
  tag: string;
  title: { km: string; en: string };
  excerpt: { km: string; en: string };
  content: { km: string; en: string };
  date: string;
  accent: string;
  game: "ff" | "mlbb";
  category: "hero" | "skin" | "event" | "patch" | "guide" | "tips";
  blogSlug?: string;
};

export const NEWS: NewsItem[] = [
  {
    id: "mlbb-hero-collie",
    tag: "NEW HERO",
    title: {
      km: "Collie — តួអង្គ Mage ថ្មីលេខ 134",
      en: "Collie — New Mage Hero Number 134",
    },
    excerpt: {
      km: "តួអង្គ Mage ថ្មីដែលប្រើទង់វេទមន្តធំ និងមានសមត្ថភាព Knockback, Slow, និង Stun ។ នឹងបង្ហាញខ្លួនក្នុង Season 42 ។",
      en: "New Mage hero wielding a large magic banner with Knockback, Slow, and Stun abilities. Arriving in Season 42.",
    },
    content: {
      km: "## Collie ជានរណា?\n\nCollie គឺជាតួអង្គ **Mage** ថ្មីលេខ **134** ដែលនឹងបង្ហាញខ្លួនក្នុង **Season 42** ខែកញ្ញា 2026 ។ នាងត្រូវបានរចនាឡើងសម្រាប់ **ការគ្រប់គ្រងតំបន់** ជាមួយនឹងសមត្ថភាពដ៏ខ្លាំងក្លា ។\n\n## សមត្ថភាពពិសេស\n\n- **Magic Banner** — ប្រើទង់វេទមន្តធំជាអាវុធ\n- **Knockback** — រុញសត្រូវឱ្យថយក្រោយ\n- **Slow Effect** — បន្ថយល្បឿនសត្រូវ\n- **Stun** — ធ្វើឱ្យសត្រូវស្ពឹកស្មារតី\n\n## ហេតុអ្វី Collie ខ្លាំង?\n\n1. **Zone Control** — គ្រប់គ្រងតំបន់បានយ៉ាងល្អ\n2. **Combo Potential** — អាច Combo ជាមួយ Hero ដទៃ\n3. **Team Fight** — ខ្លាំងក្នុង Team Fight\n\n## ដំបូន្មានប្រើ Collie\n\n- ប្រើក្នុង Mid Lane ជាចម្បង\n- Combo ជាមួយ Assassin សម្រាប់ Kill\n- មើល Map ជាប់ជានិច្ច\n\n## សេចក្តីសន្និដ្ឋាន\n\nCollie គឺជាតួអង្គ Mage ដ៏ខ្លាំងសម្រាប់ Season 42 ។ បើអ្នកចូលចិត្តលេង Mage នាងគឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Collie?\n\nCollie is the new **Mage** hero number **134** arriving in **Season 42** in September 2026. She's designed for **zone control** with powerful abilities.\n\n## Unique Abilities\n\n- **Magic Banner** — Uses a large magic banner as a weapon\n- **Knockback** — Pushes enemies back\n- **Slow Effect** — Reduces enemy speed\n- **Stun** — Stuns enemies in place\n\n## Why Collie is Strong?\n\n1. **Zone Control** — Excellent area control\n2. **Combo Potential** — Can combo with other heroes\n3. **Team Fight** — Very strong in team fights\n\n## Tips for Collie\n\n- Play mainly in Mid Lane\n- Combo with Assassins for kills\n- Watch the map constantly\n\n## Conclusion\n\nCollie is a powerful Mage hero for Season 42. If you like playing Mage, she's a great choice.",
    },
    date: "2026-09-19",
    accent: "#a855f7",
    game: "mlbb",
    category: "hero",
    blogSlug: "mlbb-collie-new-mage",
  },
  {
    id: "mlbb-hero-dori",
    tag: "NEW HERO",
    title: {
      km: "Dori — Mage ថ្មីជាមួយ Mark Passive",
      en: "Dori — New Mage with Mark Passive",
    },
    excerpt: {
      km: "តួអង្គ Mage ថ្មីដែលមាន Passive អាច Mark សត្រូវ និងបង្កើនល្បឿនខ្លួនឯង ។ នឹងចេញនៅខែកញ្ញា 2026 ។",
      en: "New Mage hero with a passive that marks enemies and boosts her own speed. Releasing September 2026.",
    },
    content: {
      km: "## Dori ជានរណា?\n\nDori គឺជាតួអង្គ **Mage** ថ្មីដែលបានលេចធ្លាយពី Patch 2.1.66 ។ នាងមាន Mekanic សាមញ្ញ ប៉ុន្តែមាន **Passive ដ៏ខ្លាំង** ។ នាងនឹងចេញនៅខែកញ្ញា 2026 ។\n\n## សមត្ថភាពពិសេស\n\n- **Mark Passive** — អាច Mark សត្រូវពេលវាយ\n- **Speed Boost** — បង្កើនល្បឿនខ្លួនឯង\n- **Simple Mechanics** — ងាយស្រួលប្រើសម្រាប់អ្នកចាប់ផ្តើម\n\n## ហេតុអ្វី Dori គួរចាប់អារម្មណ៍?\n\n1. **Easy to Learn** — សាមញ្ញសម្រាប់អ្នកថ្មី\n2. **Mark Utility** — ជួយក្រុមដោយ Mark សត្រូវ\n3. **Speed Advantage** — លឿន និងគេចបានល្អ\n\n## ដំបូន្មានប្រើ Dori\n\n- ហាត់ Passive ក្នុង Training\n- ប្រើ Mark ជួយក្រុម\n- លេង Mid ឬ Roam\n\n## សេចក្តីសន្និដ្ឋាន\n\nDori គឺជាតួអង្គ Mage ដែលសាមញ្ញ ប៉ុន្តែមានប្រយោជន៍ខ្ពស់ ។ បើអ្នកចូលចិត្ត Mage នាងគឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Dori?\n\nDori is a new **Mage** hero leaked from Patch 2.1.66. She has simple mechanics but a **strong Passive**. She'll release in September 2026.\n\n## Unique Abilities\n\n- **Mark Passive** — Can mark enemies on hit\n- **Speed Boost** — Boosts her own speed\n- **Simple Mechanics** — Easy to use for beginners\n\n## Why Dori is Interesting?\n\n1. **Easy to Learn** — Simple for newcomers\n2. **Mark Utility** — Helps team by marking enemies\n3. **Speed Advantage** — Fast and good escape\n\n## Tips for Dori\n\n- Practice passive in Training\n- Use Mark to help team\n- Play Mid or Roam\n\n## Conclusion\n\nDori is a Mage hero that's simple but highly useful. If you like Mage, she's a great choice.",
    },
    date: "2026-09-15",
    accent: "#a855f7",
    game: "mlbb",
    category: "hero",
    blogSlug: "mlbb-dori-new-mage",
  },
  {
    id: "mlbb-hero-yin",
    tag: "NEW HERO",
    title: {
      km: "Yin — Fighter ថ្មីបែប Sukuna",
      en: "Yin — New Fighter with Sukuna Vibes",
    },
    excerpt: {
      km: "ការលេចធ្លាយបង្ហាញថា Yin ជា Fighter ដែលមានសមត្ថភាពស្រដៀង Sukuna ពី Jujutsu Kaisen និង Shang-Chi ។",
      en: "Leaks reveal Yin as a Fighter with abilities similar to Sukuna from Jujutsu Kaisen and Shang-Chi.",
    },
    content: {
      km: "## Yin ជានរណា?\n\nYin គឺជាតួអង្គ **Fighter** ថ្មីដែលបានលេចធ្លាយពី Moonton ។ គាត់មានសមត្ថភាពស្រដៀង **Sukuna** ពី Jujutsu Kaisen និង **Shang-Chi** ពី Marvel ។\n\n## សមត្ថភាពពិសេស\n\n- **Cursed Energy** — ថាមពលខ្លាំងក្លា\n- **Dismantle** — វាយប្រហារខ្លាំង\n- **Domain Expansion** — សមត្ថភាពពិសេសក្នុងតំបន់\n\n## ហេតុអ្វី Yin គួរចាប់អារម្មណ៍?\n\n1. **Unique Design** — រចនាប័ទ្ម Jujutsu Kaisen\n2. **Strong Fighter** — Fighter ដ៏ខ្លាំង\n3. **Combo Potential** — អាច Combo បានល្អ\n\n## ដំបូន្មានប្រើ Yin\n\n- ហាត់ Combo ក្នុង Training\n- ប្រើជាមួយ Tank ឬ Support\n- មើល Map សម្រាប់ Gank\n\n## សេចក្តីសន្និដ្ឋាន\n\nYin គឺជាតួអង្គ Fighter ដ៏គួរឱ្យចាប់អារម្មណ៍សម្រាប់ 2026 ។ បើអ្នកចូលចិត្ត Jujutsu Kaisen គាត់គឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Yin?\n\nYin is a new **Fighter** hero leaked from Moonton. He has abilities similar to **Sukuna** from Jujutsu Kaisen and **Shang-Chi** from Marvel.\n\n## Unique Abilities\n\n- **Cursed Energy** — Powerful energy\n- **Dismantle** — Heavy attacks\n- **Domain Expansion** — Special area ability\n\n## Why Yin is Interesting?\n\n1. **Unique Design** — Jujutsu Kaisen style\n2. **Strong Fighter** — Powerful Fighter\n3. **Combo Potential** — Great combo options\n\n## Tips for Yin\n\n- Practice combos in Training\n- Pair with Tank or Support\n- Watch map for ganks\n\n## Conclusion\n\nYin is an interesting Fighter hero for 2026. If you like Jujutsu Kaisen, he's a great choice.",
    },
    date: "2026-09-11",
    accent: "#ef4444",
    game: "mlbb",
    category: "hero",
  },
  {
    id: "mlbb-hero-hirara",
    tag: "NEW HERO",
    title: {
      km: "Hirara — Assassin ថ្មីជាមួយ Twin Fans",
      en: "Hirara — New Assassin with Twin Fans",
    },
    excerpt: {
      km: "តួអង្គ Assassin ថ្មីដែលប្រើ Twin Fans ជាអាវុធ និងមានសមត្ថភាពលាក់ខ្លួន Scarlet Shadow ។",
      en: "New Assassin hero wielding Twin Fans with the Scarlet Shadow stealth ability.",
    },
    content: {
      km: "## Hirara ជានរណា?\n\nHirara គឺជាតួអង្គ **Assassin** ថ្មីដែលចេញផ្សាយក្នុង Patch 2.1.66 ខែមិថុនា 2026 ។ នាងប្រើ **Twin Fans: Ukifune** ជាអាវុធ ។\n\n## សមត្ថភាពពិសេស\n\n- **Twin Fans** — ប្រើកង្ហារ ២ ដែលមាន Combo ផ្សេងៗគ្នា\n- **Assassin** — Mobility ខ្ពស់ ខូចខាតធ្ងន់\n- **Scarlet Shadow** — សមត្ថភាពលាក់ខ្លួន\n\n## ហេតុអ្វី Hirara ខ្លាំង?\n\n1. **Jungler SS Tier** — ជាប់ចំណាត់ថ្នាក់ Jungler SS\n2. **Combo Flexibility** — អាចប្រើ Combo ច្រើនបែប\n3. **High Mobility** — លឿន និងគេចបានល្អ\n\n## ដំបូន្មានប្រើ Hirara\n\n- ហាត់ Combo ក្នុង Training\n- មើល Map សម្រាប់ Gank\n- ប្រើ Assassin Emblem\n\n## សេចក្តីសន្និដ្ឋាន\n\nHirara គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់ Jungler ។ បើអ្នកចូលចិត្តលេង Assassin នាងគឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Hirara?\n\nHirara is the new **Assassin** hero released in Patch 2.1.66 in June 2026. She wields **Twin Fans: Ukifune** as her weapon.\n\n## Unique Abilities\n\n- **Twin Fans** — Uses two fans with different combos\n- **Assassin** — High mobility, heavy damage\n- **Scarlet Shadow** — Stealth ability\n\n## Why Hirara is Strong?\n\n1. **Jungler SS Tier** — Ranked SS tier Jungler\n2. **Combo Flexibility** — Multiple combo options\n3. **High Mobility** — Fast and good escape\n\n## Tips for Hirara\n\n- Practice combos in Training\n- Watch map for ganks\n- Use Assassin Emblem\n\n## Conclusion\n\nHirara is a powerful hero for Jungler. If you like playing Assassin, she's a great choice.",
    },
    date: "2026-06-17",
    accent: "#a855f7",
    game: "mlbb",
    category: "hero",
    blogSlug: "mlbb-hirara-new-assassin",
  },
  {
    id: "mlbb-hero-marcel",
    tag: "NEW HERO",
    title: {
      km: "Marcel — Support ថ្មីជាមួយ Freeze",
      en: "Marcel — New Support with Freeze",
    },
    excerpt: {
      km: "តួអង្គ Support ថ្មីដែលមានសមត្ថភាព Freeze និង Crowd Control ។ ចេញផ្សាយក្នុង Season 40 ។",
      en: "New Support hero with Freeze and Crowd Control abilities. Released in Season 40.",
    },
    content: {
      km: "## Marcel ជានរណា?\n\nMarcel គឺជាតួអង្គ **Support** ថ្មីដែលចេញផ្សាយក្នុង Season 40 ខែមីនា 2026 ។ គាត់មានសមត្ថភាព **Freeze** ដែលអាចគ្រប់គ្រងសត្រូវបានយ៉ាងល្អ ។\n\n## សមត្ថភាពពិសេស\n\n- **Two Souls** — Marcel មានព្រលឹង ២ ដែលអាចវាយប្រហារ និងការពារ\n- **Freeze Effect** — បង្កកសត្រូវឱ្យនៅស្ងៀម\n- **Crowd Control** — គ្រប់គ្រងក្រុមសត្រូវបានយ៉ាងល្អ\n\n## ហេតុអ្វី Marcel ខ្លាំង?\n\n1. **Meta Changer** — ផ្លាស់ប្តូរយុទ្ធសាស្ត្រក្រុម\n2. **Roam & Control** — អាច Roam និងគ្រប់គ្រង Map\n3. **Team Fight** — ខ្លាំងក្នុង Team Fight\n\n## ដំបូន្មានប្រើ Marcel\n\n- ប្រើជាមួយ Hero ដែលមាន Damage ខ្ពស់\n- Freeze សត្រូវមុននឹងវាយ\n- មើល Map ជាប់ជានិច្ច\n\n## សេចក្តីសន្និដ្ឋាន\n\nMarcel គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់ Meta 2026 ។ បើអ្នកចូលចិត្តលេង Support គាត់គឺជាជម្រើសដ៏ល្អ ។",
      en: "## Who is Marcel?\n\nMarcel is the new **Support** hero released in Season 40 in March 2026. He has a **Freeze** ability that can control enemies effectively.\n\n## Unique Abilities\n\n- **Two Souls** — Marcel has two souls for attack and defense\n- **Freeze Effect** — Freezes enemies in place\n- **Crowd Control** — Excellent team control\n\n## Why Marcel is Strong?\n\n1. **Meta Changer** — Changes team strategies\n2. **Roam & Control** — Can roam and control the map\n3. **Team Fight** — Very strong in team fights\n\n## Tips for Marcel\n\n- Pair with high-damage heroes\n- Freeze enemies before attacking\n- Watch the map constantly\n\n## Conclusion\n\nMarcel is a powerful hero for the 2026 Meta. If you like playing Support, he's a great choice.",
    },
    date: "2026-03-12",
    accent: "#22d3ee",
    game: "mlbb",
    category: "hero",
    blogSlug: "mlbb-marcel-new-support",
  },
  {
    id: "mlbb-event-anniversary",
    tag: "EVENT",
    title: {
      km: "MLBB 10th Anniversary — រង្វាន់ឥតគិតថ្លៃ",
      en: "MLBB 10th Anniversary — Free Rewards",
    },
    excerpt: {
      km: "ប្រារព្ធខួប 10 ឆ្នាំ ជាមួយនឹងរង្វាន់ឥតគិតថ្លៃ រួមទាំង Skin Nana Stardust Dreamer និង Chou Starforge's Glory ។",
      en: "Celebrating 10 years with free rewards including Nana Stardust Dreamer and Chou Starforge's Glory skins.",
    },
    content: {
      km: "## MLBB 10th Anniversary\n\nMLBB ប្រារព្ធខួប **10 ឆ្នាំ** ចាប់ពីខែកញ្ញា ដល់ ខែវិច្ឆិកា 2026 ជាមួយនឹងរង្វាន់ដ៏ធំធេង ។\n\n## រង្វាន់ឥតគិតថ្លៃ\n\n- **Skin Nana Stardust Dreamer** — ឥតគិតថ្លៃ\n- **Skin Chou Starforge's Glory** — ឥតគិតថ្លៃ\n- **Free Hero** — ជម្រើស Hero ថ្មី\n- **Free Diamonds** — ពេញព្រឹត្តិការណ៍\n\n## ព្រឹត្តិការណ៍ពិសេស\n\n1. **Daily Login Rewards** — ចូលរាល់ថ្ងៃ\n2. **Special Missions** — បំពេញ Mission\n3. **Free Skins** — ទទួល Skin ឥតគិតថ្លៃ\n4. **Lucky Draw** — ចាប់រង្វាន់\n\n## ដំបូន្មាន\n\n- ចូលលេងរាល់ថ្ងៃ\n- បំពេញ Mission ទាំងអស់\n- កុំខកខានឱកាស\n\n## សេចក្តីសន្និដ្ឋាន\n\n10th Anniversary គឺជាព្រឹត្តិការណ៍ដ៏ធំបំផុតនៅឆ្នាំ 2026 ។ អ្នកលេងគ្រប់រូបគួរចូលរួម ។",
      en: "## MLBB 10th Anniversary\n\nMLBB celebrates its **10th anniversary** from September to November 2026 with massive rewards.\n\n## Free Rewards\n\n- **Skin Nana Stardust Dreamer** — Free\n- **Skin Chou Starforge's Glory** — Free\n- **Free Hero** — New hero choice\n- **Free Diamonds** — Throughout event\n\n## Special Events\n\n1. **Daily Login Rewards** — Log in daily\n2. **Special Missions** — Complete missions\n3. **Free Skins** — Get free skins\n4. **Lucky Draw** — Win rewards\n\n## Tips\n\n- Log in every day\n- Complete all missions\n- Don't miss the chance\n\n## Conclusion\n\nThe 10th Anniversary is the biggest event in 2026. Every player should participate.",
    },
    date: "2026-09-09",
    accent: "#f59e0b",
    game: "mlbb",
    category: "event",
    blogSlug: "mlbb-10th-anniversary-2026",
  },
  {
    id: "mlbb-event-streetfighter",
    tag: "COLLAB",
    title: {
      km: "MLBB x Street Fighter 6 — Skin ថ្មី",
      en: "MLBB x Street Fighter 6 — New Skins",
    },
    excerpt: {
      km: "ការសហការជាមួយ Street Fighter 6 ជាមួយនឹង Skin Paquito as Ryu, Chou as Ken, Guinevere as Chun-Li, និង Dyrroth as Guile ។",
      en: "Street Fighter 6 collab with Paquito as Ryu, Chou as Ken, Guinevere as Chun-Li, and Dyrroth as Guile skins.",
    },
    content: {
      km: "## MLBB x Street Fighter 6\n\nMLBB សហការជាមួយ **Street Fighter 6** នៅខែកក្កដា 2026 ជាមួយនឹង Skin ថ្មីៗដ៏អស្ចារ្យ ។\n\n## Skin ថ្មីៗ\n\n- **Paquito as Ryu** — តួអង្គដើមរបស់ Street Fighter\n- **Chou as Ken** — ដៃគូរបស់ Ryu\n- **Guinevere as Chun-Li** — តួអង្គស្រីដ៏ល្បី\n- **Dyrroth as Guile** — តួអង្គ American Fighter\n\n## ហេតុអ្វី Collab នេះពិសេស?\n\n1. **Iconic Characters** — តួអង្គដ៏ល្បីល្បាញ\n2. **High Quality Skins** — គុណភាពខ្ពស់\n3. **Limited Time** — មានកំណត់ពេល\n\n## ដំបូន្មាន\n\n- រៀបចំ Diamonds ជាមុន\n- ចូលលេងពេលព្រឹត្តិការណ៍ចាប់ផ្តើម\n- ជ្រើស Skin ដែលអ្នកចូលចិត្ត\n\n## សេចក្តីសន្និដ្ឋាន\n\nCollab នេះគឺជាឱកាសដ៏ល្អសម្រាប់អ្នកគាំទ្រ Street Fighter ។ កុំខកខានឱកាស ។",
      en: "## MLBB x Street Fighter 6\n\nMLBB collaborates with **Street Fighter 6** in July 2026 with amazing new skins.\n\n## New Skins\n\n- **Paquito as Ryu** — Iconic Street Fighter character\n- **Chou as Ken** — Ryu's partner\n- **Guinevere as Chun-Li** — Famous female character\n- **Dyrroth as Guile** — American fighter\n\n## Why This Collab is Special?\n\n1. **Iconic Characters** — Famous characters\n2. **High Quality Skins** — Premium quality\n3. **Limited Time** — Limited availability\n\n## Tips\n\n- Prepare Diamonds in advance\n- Log in when event starts\n- Choose your favorite skin\n\n## Conclusion\n\nThis collab is a great opportunity for Street Fighter fans. Don't miss it.",
    },
    date: "2026-07-03",
    accent: "#ef4444",
    game: "mlbb",
    category: "event",
    blogSlug: "mlbb-street-fighter-6-collab",
  },
  {
    id: "mlbb-event-naruto2",
    tag: "COLLAB",
    title: {
      km: "MLBB x Naruto Phase 2 — Skin ថ្មី",
      en: "MLBB x Naruto Phase 2 — New Skins",
    },
    excerpt: {
      km: "ការត្រឡប់មកវិញនៃការសហការ Naruto ជាមួយ Skin ថ្មី Julian Itachi Uchiha និង Gusion Minato Namikaze ។",
      en: "Naruto collab returns with new skins Julian Itachi Uchiha and Gusion Minato Namikaze.",
    },
    content: {
      km: "## MLBB x Naruto Phase 2\n\nការសហការ **Naruto** ត្រឡប់មកវិញក្នុង **Phase 2** នៅខែមីនា 2026 ជាមួយនឹង Skin ថ្មីៗ ។\n\n## Skin ថ្មីៗ\n\n- **Julian as Itachi Uchiha** — តួអង្គ Akatsuki\n- **Gusion as Minato Namikaze** — Hokage ទី ៤\n- **Returning Skins** — Skin ចាស់ៗទាំងអស់ត្រឡប់មកវិញ\n\n## ហេតុអ្វី Collab នេះពិសេស?\n\n1. **Iconic Characters** — Itachi និង Minato\n2. **Nostalgic** — រំលឹកដល់ Naruto Shippuden\n3. **Multiple Skins** — Skin ច្រើន\n\n## ដំបូន្មាន\n\n- រង់ចាំការបញ្ជាក់ផ្លូវការ\n- រៀបចំ Diamonds\n- មើល YouTube សម្រាប់ការលេចធ្លាយថ្មី\n\n## សេចក្តីសន្និដ្ឋាន\n\nCollab នេះគឺជាឱកាសដ៏ល្អសម្រាប់អ្នកគាំទ្រ Naruto ។ កុំខកខាន ។",
      en: "## MLBB x Naruto Phase 2\n\nThe **Naruto** collab returns in **Phase 2** in March 2026 with new skins.\n\n## New Skins\n\n- **Julian as Itachi Uchiha** — Akatsuki character\n- **Gusion as Minato Namikaze** — 4th Hokage\n- **Returning Skins** — All old skins return\n\n## Why This Collab is Special?\n\n1. **Iconic Characters** — Itachi and Minato\n2. **Nostalgic** — Brings back Naruto Shippuden memories\n3. **Multiple Skins** — Multiple skins\n\n## Tips\n\n- Wait for official confirmation\n- Prepare Diamonds\n- Watch YouTube for new leaks\n\n## Conclusion\n\nThis collab is a great opportunity for Naruto fans. Don't miss it.",
    },
    date: "2026-03-01",
    accent: "#f59e0b",
    game: "mlbb",
    category: "event",
  },
  {
    id: "mlbb-skin-hanzo",
    tag: "STARLIGHT",
    title: {
      km: "Hanzo Fangs of Slaughter — Starlight Skin",
      en: "Hanzo Fangs of Slaughter — Starlight Skin",
    },
    excerpt: {
      km: "ស្បែក Starlight ដំបូងរបស់ Hanzo ដែលមានលក្ខណៈកាចសាហាវ ។ ចេញផ្សាយក្នុងខែកញ្ញា 2026 ។",
      en: "Hanzo's first Starlight skin with a fierce design. Released in September 2026.",
    },
    content: {
      km: "## Hanzo Fangs of Slaughter\n\nស្បែក **Starlight** ដំបូងរបស់ **Hanzo** ដែលមានលក្ខណៈកាចសាហាវ ។ ចេញផ្សាយក្នុងខែកញ្ញា 2026 ។\n\n## លក្ខណៈពិសេស\n\n- **Fierce Design** — រចនាប័ទ្មកាចសាហាវ\n- **New Effects** — Effects ថ្មីៗ\n- **Exclusive Skin** — មានកំណត់ពេល\n\n## របៀបទទួល\n\n- ចុះឈ្មោះ Starlight Member\n- បំពេញ Mission\n- ដោះ Skin ក្នុងព្រឹត្តិការណ៍\n\n## ដំបូន្មាន\n\n- ចុះឈ្មោះ Starlight មុនខែ\n- បំពេញ Mission រាល់ថ្ងៃ\n\n## សេចក្តីសន្និដ្ឋាន\n\nHanzo Fangs of Slaughter គឺជាស្បែក Starlight ដ៏អស្ចារ្យសម្រាប់អ្នកគាំទ្រ Hanzo ។",
      en: "## Hanzo Fangs of Slaughter\n\nHanzo's first **Starlight** skin with a fierce design. Released in September 2026.\n\n## Features\n\n- **Fierce Design** — Fierce style\n- **New Effects** — New effects\n- **Exclusive Skin** — Limited availability\n\n## How to Get\n\n- Subscribe to Starlight Member\n- Complete missions\n- Unlock skin in event\n\n## Tips\n\n- Subscribe to Starlight before the month\n- Complete daily missions\n\n## Conclusion\n\nHanzo Fangs of Slaughter is an amazing Starlight skin for Hanzo fans.",
    },
    date: "2026-09-01",
    accent: "#a855f7",
    game: "mlbb",
    category: "skin",
  },
  {
    id: "mlbb-skin-argus",
    tag: "COLLECTOR",
    title: {
      km: "Argus Raiden Maru — Titan Collector Skin",
      en: "Argus Raiden Maru — Titan Collector Skin",
    },
    excerpt: {
      km: "ស្បែក Collector បែប Mecha Samurai ដ៏អស្ចារ្យ ។ ចេញផ្សាយក្នុងខែកញ្ញា 2026 ។",
      en: "Stunning Mecha Samurai style Collector skin. Released in September 2026.",
    },
    content: {
      km: "## Argus Raiden Maru\n\nស្បែក **Titan Collector** បែប **Mecha Samurai** ដ៏អស្ចារ្យរបស់ **Argus** ។ ចេញផ្សាយក្នុងខែកញ្ញា 2026 ។\n\n## លក្ខណៈពិសេស\n\n- **Mecha Samurai Design** — រចនាប័ទ្ម Samurai\n- **Lightning Effects** — Effects ផ្លេកបន្ទោរ\n- **Premium Quality** — គុណភាពខ្ពស់\n\n## របៀបទទួល\n\n- ប្រើ Diamonds ច្រើន\n- ចូលរួមព្រឹត្តិការណ៍ Collector\n- ប្រើ Lucky Spin\n\n## ដំបូន្មាន\n\n- រៀបចំ Diamonds ជាមុន\n- មើល YouTube សម្រាប់ Preview\n\n## សេចក្តីសន្និដ្ឋាន\n\nArgus Raiden Maru គឺជាស្បែក Collector ដ៏អស្ចារ្យសម្រាប់អ្នកគាំទ្រ Argus ។",
      en: "## Argus Raiden Maru\n\nStunning **Titan Collector** skin with **Mecha Samurai** style for **Argus**. Released in September 2026.\n\n## Features\n\n- **Mecha Samurai Design** — Samurai style\n- **Lightning Effects** — Lightning effects\n- **Premium Quality** — Premium quality\n\n## How to Get\n\n- Use many Diamonds\n- Join Collector event\n- Use Lucky Spin\n\n## Tips\n\n- Prepare Diamonds in advance\n- Watch YouTube for previews\n\n## Conclusion\n\nArgus Raiden Maru is an amazing Collector skin for Argus fans.",
    },
    date: "2026-09-05",
    accent: "#a855f7",
    game: "mlbb",
    category: "skin",
  },
  {
    id: "mlbb-skin-balmond",
    tag: "COLLECTOR",
    title: {
      km: "Balmond Vulcan Lionheart — Collector Skin",
      en: "Balmond Vulcan Lionheart — Collector Skin",
    },
    excerpt: {
      km: "ស្បែក Collector ដំបូងរបស់ Balmond ។ ចេញផ្សាយក្នុងខែសីហា 2026 ។",
      en: "Balmond's first Collector skin. Released in August 2026.",
    },
    content: {
      km: "## Balmond Vulcan Lionheart\n\nស្បែក **Collector** ដំបូងរបស់ **Balmond** ។ ចេញផ្សាយក្នុងខែសីហា 2026 ។\n\n## លក្ខណៈពិសេស\n\n- **Vulcan Design** — រចនាប័ទ្មភ្នំភ្លើង\n- **Lion Heart** — ចិត្តសឹង្ហ\n- **Fire Effects** — Effects ភ្លើង\n\n## របៀបទទួល\n\n- ប្រើ Diamonds ច្រើន\n- ចូលរួមព្រឹត្តិការណ៍ Collector\n\n## ដំបូន្មាន\n\n- រៀបចំ Diamonds ជាមុន\n- មើល Preview ក្នុង YouTube\n\n## សេចក្តីសន្និដ្ឋាន\n\nBalmond Vulcan Lionheart គឺជាស្បែកដ៏អស្ចារ្យសម្រាប់អ្នកគាំទ្រ Balmond ។",
      en: "## Balmond Vulcan Lionheart\n\nBalmond's first **Collector** skin. Released in August 2026.\n\n## Features\n\n- **Vulcan Design** — Volcano style\n- **Lion Heart** — Lion heart\n- **Fire Effects** — Fire effects\n\n## How to Get\n\n- Use many Diamonds\n- Join Collector event\n\n## Tips\n\n- Prepare Diamonds in advance\n- Watch preview on YouTube\n\n## Conclusion\n\nBalmond Vulcan Lionheart is an amazing skin for Balmond fans.",
    },
    date: "2026-08-01",
    accent: "#ef4444",
    game: "mlbb",
    category: "skin",
  },
  {
    id: "mlbb-patch-s42",
    tag: "PATCH",
    title: {
      km: "Season 42 Starward Decade — ការផ្លាស់ប្តូរ Meta",
      en: "Season 42 Starward Decade — Meta Changes",
    },
    excerpt: {
      km: "រដូវកាលថ្មីជាមួយនឹងការកែសម្រួល Masha, Clint, និង Badang ព្រមទាំងការផ្លាស់ប្តូរផែនទី Sanctuary Island ។",
      en: "New season with Masha, Clint, and Badang adjustments plus Sanctuary Island map changes.",
    },
    content: {
      km: "## Season 42 Starward Decade\n\n**Season 42** ចាប់ផ្តើមថ្ងៃទី **16 កញ្ញា 2026** ជាមួយនឹងការផ្លាស់ប្តូរដ៏ធំ ។\n\n## ការកែសម្រួល Hero\n\n- **Masha** — កែសម្រួល Skill និង Stats\n- **Clint** — បង្កើន Damage\n- **Badang** — បន្ថយ Crowd Control\n\n## ការផ្លាស់ប្តូរផែនទី\n\n- **Sanctuary Island** — ផែនទីថ្មី\n- **New Objectives** — Objectives ថ្មីៗ\n\n## ដំបូន្មាន\n\n- ហាត់ Hero ថ្មីក្នុង Classic\n- មើល Patch Notes\n- បន្សាំយុទ្ធសាស្ត្រ\n\n## សេចក្តីសន្និដ្ឋាន\n\nSeason 42 នាំមកនូវការផ្លាស់ប្តូរដ៏ធំសម្រាប់ MLBB ។ អ្នកលេងគ្រប់រូបគួរបន្សាំខ្លួន ។",
      en: "## Season 42 Starward Decade\n\n**Season 42** starts on **September 16, 2026** with major changes.\n\n## Hero Adjustments\n\n- **Masha** — Skill and Stat adjustments\n- **Clint** — Increased Damage\n- **Badang** — Reduced Crowd Control\n\n## Map Changes\n\n- **Sanctuary Island** — New map\n- **New Objectives** — New objectives\n\n## Tips\n\n- Practice new heroes in Classic\n- Read Patch Notes\n- Adapt strategies\n\n## Conclusion\n\nSeason 42 brings major changes to MLBB. Every player should adapt.",
    },
    date: "2026-09-16",
    accent: "#22d3ee",
    game: "mlbb",
    category: "patch",
  },
  {
    id: "mlbb-patch-2166",
    tag: "PATCH",
    title: {
      km: "Patch 2.1.66 — Hirara និងការកែសម្រួល Hero",
      en: "Patch 2.1.66 — Hirara and Hero Adjustments",
    },
    excerpt: {
      km: "Patch ថ្មីបន្ថែម Hirara និងកែសម្រួល Hero ៥ នាក់ (Buff) និង ៧ នាក់ (Nerf) រួមទាំង Claude, Clint, និង Layla ។",
      en: "New patch adds Hirara and adjusts 5 heroes (Buff) and 7 heroes (Nerf) including Claude, Clint, and Layla.",
    },
    content: {
      km: "## Patch 2.1.66\n\n**Patch 2.1.66** ចេញផ្សាយក្នុងខែមីនា 2026 ជាមួយនឹងការផ្លាស់ប្តូរដ៏ធំ ។\n\n## Hero ថ្មី\n\n- **Hirara** — Assassin ថ្មីជាមួយ Twin Fans\n\n## Hero Adjustments\n\n**Buff (៥ នាក់):**\n- Brody, Aulus, Bane, Barats, Lapu-Lapu\n\n**Nerf (៧ នាក់):**\n- Claude, Clint, Layla, Beatrix, Melissa, Ixia, Karrie\n\n## ដំបូន្មាន\n\n- មើល Patch Notes ពេញលេញ\n- បន្សាំ Build\n- ហាត់ Hero ថ្មី\n\n## សេចក្តីសន្និដ្ឋាន\n\nPatch 2.1.66 ផ្លាស់ប្តូរ Meta យ៉ាងខ្លាំង ។ អ្នកលេងគួរបន្សាំខ្លួន ។",
      en: "## Patch 2.1.66\n\n**Patch 2.1.66** released in March 2026 with major changes.\n\n## New Hero\n\n- **Hirara** — New Assassin with Twin Fans\n\n## Hero Adjustments\n\n**Buff (5 heroes):**\n- Brody, Aulus, Bane, Barats, Lapu-Lapu\n\n**Nerf (7 heroes):**\n- Claude, Clint, Layla, Beatrix, Melissa, Ixia, Karrie\n\n## Tips\n\n- Read full Patch Notes\n- Adapt builds\n- Practice new heroes\n\n## Conclusion\n\nPatch 2.1.66 changes the Meta significantly. Players should adapt.",
    },
    date: "2026-03-24",
    accent: "#22d3ee",
    game: "mlbb",
    category: "patch",
  },
  {
    id: "mlbb-guide-meta2026",
    tag: "GUIDE",
    title: {
      km: "MLBB Meta 2026 — តួអង្គល្អបំផុតសម្រាប់ Rank Up",
      en: "MLBB Meta 2026 — Best Heroes for Rank Up",
    },
    excerpt: {
      km: "បញ្ជីតួអង្គដែលមាន Win Rate ខ្ពស់បំផុតក្នុង MLBB ឆ្នាំ 2026 សម្រាប់ការឡើង Rank លឿន ។",
      en: "List of highest win-rate heroes in MLBB 2026 for fast rank climbing.",
    },
    content: {
      km: "## MLBB Meta 2026\n\nMeta MLBB ឆ្នាំ 2026 ផ្តោតលើ **Team Fight** និង **Rotation** លឿន ។ តួអង្គខាងក្រោមនេះមាន Win Rate ខ្ពស់បំផុត ។\n\n## Jungler\n\n- **Ling** — Mobility ខ្ពស់\n- **Hayabusa** — Shadow Kill\n- **Lancelot** — Dash លឿន\n\n## Mid Lane\n\n- **Valentina** — ចម្លង Ultimate\n- **Yve** — Zone Control\n- **Pharsa** — ខូចខាតពីចម្ងាយ\n\n## Gold Lane\n\n- **Beatrix** — អាវុធ ៤ ប្រភេទ\n- **Claude** — Late Game\n- **Melissa** — ការពារខ្លួន\n\n## Roamer\n\n- **Chou**, **Franco**, **Khufra**\n\n## Exp Lane\n\n- **Yu Zhong**, **Paquito**, **Uranus**\n\n## ដំបូន្មាន\n\n1. ហាត់តួអង្គ ២-៣\n2. មើល Map ជាប់ជានិច្ច\n3. ជួយក្រុម\n\n## សេចក្តីសន្និដ្ឋាន\n\nបើអ្នកចង់ឡើង Rank លឿន សូមជ្រើសតួអង្គខាងលើ ។",
      en: "## MLBB Meta 2026\n\nMLBB 2026 meta focuses on **Team Fights** and fast **Rotation**. These heroes have the highest win rates.\n\n## Jungler\n\n- **Ling** — High mobility\n- **Hayabusa** — Shadow Kill\n- **Lancelot** — Fast dash\n\n## Mid Lane\n\n- **Valentina** — Copy ultimate\n- **Yve** — Zone control\n- **Pharsa** — Long range\n\n## Gold Lane\n\n- **Beatrix** — 4 weapon types\n- **Claude** — Late game\n- **Melissa** — Self-defense\n\n## Roamer\n\n- **Chou**, **Franco**, **Khufra**\n\n## Exp Lane\n\n- **Yu Zhong**, **Paquito**, **Uranus**\n\n## Tips\n\n1. Practice 2-3 heroes\n2. Watch map constantly\n3. Help your team\n\n## Conclusion\n\nIf you want to rank up fast, pick these heroes.",
    },
    date: "2026-09-17",
    accent: "#22c55e",
    game: "mlbb",
    category: "guide",
    blogSlug: "mlbb-2026-best-heroes-rank-up",
  },
  {
    id: "mlbb-tips-emblem",
    tag: "TIPS",
    title: {
      km: "MLBB Emblem Guide — ការដំឡើងល្អបំផុត ២០២៦",
      en: "MLBB Emblem Guide — Best Setups 2026",
    },
    excerpt: {
      km: "រៀនដំឡើង Emblem ឱ្យត្រូវនឹង Role និង Hero ដែលអ្នកលេង ។",
      en: "Learn to set up emblems to match your role and hero.",
    },
    content: {
      km: "## MLBB Emblem Guide\n\nEmblem ល្អ = បង្កើន Stats ខ្លាំង ។ ខាងក្រោមនេះជាការដំឡើងល្អបំផុត ។\n\n## Assassin Emblem\n\nសម្រាប់ Jungler: Ling, Hayabusa\n- **Talent:** High and Dry\n- **Points:** 3 Agility, 3 Firmness\n\n## Mage Emblem\n\nសម្រាប់ Mid: Valentina, Pharsa\n- **Talent:** Impure Rage\n- **Points:** 3 Agility, 3 Observation\n\n## Marksman Emblem\n\nសម្រាប់ Gold Lane: Beatrix, Claude\n- **Talent:** Weakness Finder\n- **Points:** 3 Agility, 3 Swift\n\n## Support Emblem\n\nសម្រាប់ Roamer: Estes, Angela\n- **Talent:** Pull Yourself Together\n- **Points:** 3 Agility, 3 Fortress\n\n## Tank Emblem\n\nសម្រាប់ Exp Lane: Yu Zhong, Uranus\n- **Talent:** Brave Smite\n- **Points:** 3 Firmness, 3 Fortress\n\n## ដំបូន្មាន\n\n- កែ Emblem តាម Hero\n- មើល Pro Build\n- ហាត់ក្នុង Classic\n\n## សេចក្តីសន្និដ្ឋាន\n\nEmblem ត្រឹមត្រូវ = បង្កើន Win Rate ។",
      en: "## MLBB Emblem Guide\n\nGood emblems = big stat boost. Here are the best setups.\n\n## Assassin Emblem\n\nFor Jungler: Ling, Hayabusa\n- **Talent:** High and Dry\n- **Points:** 3 Agility, 3 Firmness\n\n## Mage Emblem\n\nFor Mid: Valentina, Pharsa\n- **Talent:** Impure Rage\n- **Points:** 3 Agility, 3 Observation\n\n## Marksman Emblem\n\nFor Gold Lane: Beatrix, Claude\n- **Talent:** Weakness Finder\n- **Points:** 3 Agility, 3 Swift\n\n## Support Emblem\n\nFor Roamer: Estes, Angela\n- **Talent:** Pull Yourself Together\n- **Points:** 3 Agility, 3 Fortress\n\n## Tank Emblem\n\nFor Exp Lane: Yu Zhong, Uranus\n- **Talent:** Brave Smite\n- **Points:** 3 Firmness, 3 Fortress\n\n## Tips\n\n- Adjust emblems by hero\n- Watch pro builds\n- Practice in Classic\n\n## Conclusion\n\nCorrect emblems = higher win rate.",
    },
    date: "2026-09-13",
    accent: "#06b6d4",
    game: "mlbb",
    category: "tips",
    blogSlug: "mlbb-emblem-guide-2026",
  },
  {
    id: "ff-hero-ray",
    tag: "NEW HERO",
    title: {
      km: "Ray — តួអង្គថ្មីជាមួយ Mark និង Knock Down",
      en: "Ray — New Character with Mark and Knock Down",
    },
    excerpt: {
      km: "តួអង្គថ្មីដែលមានសមត្ថភាព Mark សត្រូវ និង Knock Down ព្រមទាំងព្យាបាល HP ខ្លួនឯង ។ ចេញផ្សាយក្នុង OB53 ។",
      en: "New character with Mark and Knock Down abilities plus self HP recovery. Released in OB53.",
    },
    content: {
      km: "## Ray ជានរណា?\n\nRay គឺជាតួអង្គថ្មីដែលចេញផ្សាយក្នុង Update **Undersea Mystery** ខែមេសា 2026 ។ គាត់ត្រូវបានរចនាឡើងសម្រាប់ **អ្នកលេង Aggressive** ។\n\n## សមត្ថភាពពិសេស\n\n- **Mark & Track** — Mark សត្រូវ\n- **Knock Down** — បើ HP សត្រូវធ្លាក់ក្រោម → Knock Down ភ្លាម\n- **HP Recovery** — ព្យាបាល HP ខ្លួនឯង\n\n## ហេតុអ្វី Ray ខ្លាំង?\n\n1. **Chained Hunter** — សម្លាប់ម្នាក់ → Skill Reset\n2. **Solo Carry** — លេងតែម្នាក់បានល្អ\n3. **Aggressive Playstyle** — Rush\n\n## ដំបូន្មានប្រើ Ray\n\n- ប្រើជាមួយ MP40 ឬ M1887\n- Mark សត្រូវមុនវាយ\n- ព្យាបាល HP ពេល Knock Down\n\n## សេចក្តីសន្និដ្ឋាន\n\nRay គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់ Meta 2026 ។",
      en: "## Who is Ray?\n\nRay is the new character released in the **Undersea Mystery** update in April 2026. He's designed for **aggressive players**.\n\n## Unique Abilities\n\n- **Mark & Track** — Marks enemies\n- **Knock Down** — If enemy HP drops → instant Knock Down\n- **HP Recovery** — Self HP recovery\n\n## Why Ray is Strong?\n\n1. **Chained Hunter** — Kill one → Skill Reset\n2. **Solo Carry** — Can play well solo\n3. **Aggressive Playstyle** — Rush\n\n## Tips for Ray\n\n- Use with MP40 or M1887\n- Mark enemies before attacking\n- Heal HP on Knock Down\n\n## Conclusion\n\nRay is a powerful character for the 2026 Meta.",
    },
    date: "2026-04-09",
    accent: "#f59e0b",
    game: "ff",
    category: "hero",
    blogSlug: "free-fire-ray-new-character",
  },
  {
    id: "ff-hero-morse",
    tag: "NEW HERO",
    title: {
      km: "Morse — តួអង្គ Stealth ថ្មី",
      en: "Morse — New Stealth Character",
    },
    excerpt: {
      km: "តួអង្គ Stealth ថ្មីដែលអាចលាក់ខ្លួនស្ទើរតែមើលមិនឃើញ និងបិទការមើលឃើញរបស់សត្រូវ ។ ចេញផ្សាយក្នុង OB52 ។",
      en: "New Stealth character that can go near-invisible and block enemy vision. Released in OB52.",
    },
    content: {
      km: "## Morse ជានរណា?\n\nMorse គឺជាតួអង្គថ្មីដែលចេញផ្សាយក្នុង Update OB52 ខែមករា 2026 ។ គាត់ជាអ្នកជំនាញ **Stealth** ។\n\n## សមត្ថភាពពិសេស\n\n- **Stealth Bytes** — លាក់ខ្លួនស្ទើរតែមើលមិនឃើញ\n- **Information Denial** — បិទការមើលឃើញរបស់សត្រូវ\n- **16m Range** — សត្រូវក្នុង ១៦ ម៉ែត្រមើលមិនឃើញ\n\n## ហេតុអ្វី Morse ខ្លាំង?\n\n1. **Flanking King** — វាយពីខាងក្រោយ\n2. **Escape Master** — គេចបានល្អ\n3. **Solo Player** — ល្អសម្រាប់ Solo\n\n## ដំបូន្មានប្រើ Morse\n\n- ប្រើសម្រាប់ Flanking\n- កុំប្រើពេលសត្រូវច្រើន\n- ប្រើជាមួយ Sniper\n\n## សេចក្តីសន្និដ្ឋាន\n\nMorse គឺជាតួអង្គដ៏ខ្លាំងសម្រាប់អ្នកចូលចិត្ត Stealth ។",
      en: "## Who is Morse?\n\nMorse is the new character released in the OB52 update in January 2026. He's a **Stealth** expert.\n\n## Unique Abilities\n\n- **Stealth Bytes** — Near-invisible\n- **Information Denial** — Blocks enemy vision\n- **16m Range** — Enemies within 16m can't see him\n\n## Why Morse is Strong?\n\n1. **Flanking King** — Attack from behind\n2. **Escape Master** — Great escaping\n3. **Solo Player** — Good for solo\n\n## Tips for Morse\n\n- Use for flanking\n- Avoid when many enemies\n- Pair with Sniper\n\n## Conclusion\n\nMorse is a powerful character for stealth lovers.",
    },
    date: "2026-01-19",
    accent: "#06b6d4",
    game: "ff",
    category: "hero",
    blogSlug: "free-fire-morse-stealth-character",
  },
  {
    id: "ff-event-naruto",
    tag: "COLLAB",
    title: {
      km: "Free Fire x Naruto Shippuden ត្រឡប់មកវិញ",
      en: "Free Fire x Naruto Shippuden Returns",
    },
    excerpt: {
      km: "ការត្រឡប់មកវិញនៃការសហការ Naruto ជាមួយ Bundle Hinata Hyuga ឬ Jiraiya និងការគ្រប់គ្រង Nine-Tails ។",
      en: "Naruto collab returns with Bundle Hinata Hyuga or Jiraiya and Nine-Tails control.",
    },
    content: {
      km: "## Free Fire x Naruto Shippuden\n\nការសហការដ៏ពេញនិយម **Free Fire x Naruto Shippuden** ត្រឡប់មកវិញនៅថ្ងៃទី **16 កញ្ញា 2026** ។\n\n## រង្វាន់ថ្មីៗ\n\n- **Bundle Hinata Hyuga** ឬ **Jiraiya** — ជម្រើសរបស់អ្នកលេង\n- **Nine-Tails Control** — គ្រប់គ្រង Nine-Tails\n- **Returning Bundles** — Bundle ចាស់ៗ\n\n## របៀបចូលរួម\n\n1. ចូលលេងរាល់ថ្ងៃ\n2. បំពេញ Mission\n3. ប្រមូល Token\n4. ដោះ Bundle\n\n## ដំបូន្មាន\n\n- ជ្រើស Bundle ត្រូវនឹង Style\n- ប្រមូល Token គ្រប់\n- មើល YouTube\n\n## សេចក្តីសន្និដ្ឋាន\n\nCollab នេះគឺជាឱកាសដ៏ល្អសម្រាប់អ្នកគាំទ្រ Naruto ។",
      en: "## Free Fire x Naruto Shippuden\n\nThe popular **Free Fire x Naruto Shippuden** collab returns on September 16, 2026.\n\n## New Rewards\n\n- **Bundle Hinata Hyuga** or **Jiraiya** — Player's choice\n- **Nine-Tails Control** — Control Nine-Tails\n- **Returning Bundles** — Old bundles\n\n## How to Join\n\n1. Log in daily\n2. Complete missions\n3. Collect tokens\n4. Unlock bundle\n\n## Tips\n\n- Choose bundle matching style\n- Collect enough tokens\n- Watch YouTube\n\n## Conclusion\n\nThis collab is a great opportunity for Naruto fans.",
    },
    date: "2026-09-16",
    accent: "#f59e0b",
    game: "ff",
    category: "event",
    blogSlug: "free-fire-naruto-shippuden-return",
  },
  {
    id: "ff-event-undersea",
    tag: "EVENT",
    title: {
      km: "Undersea Mystery — ព្រឹត្តិការណ៍ក្រោមសមុទ្រ",
      en: "Undersea Mystery — Underwater Event",
    },
    excerpt: {
      km: "ព្រឹត្តិការណ៍បែបផ្សងព្រេងក្រោមសមុទ្រ ជាមួយតំបន់ថ្មី Undersea Realm, Hydro Zone និងអាវុធថ្មី Hydro Blaster ។",
      en: "Underwater adventure event with new Undersea Realm area, Hydro Zone, and Hydro Blaster weapon.",
    },
    content: {
      km: "## Undersea Mystery\n\nព្រឹត្តិការណ៍ **Undersea Mystery** ចេញផ្សាយក្នុងខែមេសា 2026 ជាមួយនឹងការផ្លាស់ប្តូរដ៏ធំ ។\n\n## លក្ខណៈពិសេស\n\n- **Undersea Realm** — តំបន់ថ្មីក្រោមសមុទ្រ\n- **Hydro Zone** — ជំនួស Blue Zone\n- **Hydro Blaster** — អាវុធថ្មី\n\n## របៀបលេង\n\n1. ចូលរួមក្នុងតំបន់ Undersea Realm\n2. ប្រមូល Hydro Items\n3. ប្រើ Hydro Blaster\n\n## ដំបូន្មាន\n\n- មើល Map ជាប់ជានិច្ច\n- ប្រើ Hydro Blaster ឱ្យបានត្រូវ\n- ជួយក្រុម\n\n## សេចក្តីសន្និដ្ឋាន\n\nUndersea Mystery គឺជាព្រឹត្តិការណ៍ដ៏ស្រស់ស្អាតសម្រាប់ Free Fire ។",
      en: "## Undersea Mystery\n\nThe **Undersea Mystery** event released in April 2026 with major changes.\n\n## Features\n\n- **Undersea Realm** — New underwater area\n- **Hydro Zone** — Replaces Blue Zone\n- **Hydro Blaster** — New weapon\n\n## How to Play\n\n1. Join Undersea Realm\n2. Collect Hydro items\n3. Use Hydro Blaster\n\n## Tips\n\n- Watch the map constantly\n- Use Hydro Blaster correctly\n- Help your team\n\n## Conclusion\n\nUndersea Mystery is a beautiful event for Free Fire.",
    },
    date: "2026-04-01",
    accent: "#06b6d4",
    game: "ff",
    category: "event",
  },
  {
    id: "ff-event-lucha",
    tag: "COLLAB",
    title: {
      km: "Free Fire x Lucha Libre AAA — ការសហការថ្មី",
      en: "Free Fire x Lucha Libre AAA — New Collab",
    },
    excerpt: {
      km: "ការសហការជាមួយក្រុមហ៊ុនចំបាប់ម៉ិកស៊ិក ជាមួយរង្វាន់ Rey Mysterio និង La Parka ព្រមទាំងការប្តូររូបរាងអាវុធ Katana ទៅជា Kendo Stick ។",
      en: "Collab with Mexican wrestling company featuring Rey Mysterio and La Parka rewards plus Katana to Kendo Stick redesign.",
    },
    content: {
      km: "## Free Fire x Lucha Libre AAA\n\nការសហការជាមួយ **Lucha Libre AAA** ជាក្រុមហ៊ុនចំបាប់ម៉ិកស៊ិក ចេញផ្សាយក្នុងខែកក្កដា 2026 ។\n\n## រង្វាន់\n\n- **Rey Mysterio Bundle**\n- **La Parka Bundle**\n- **Kendo Stick** — ជំនួស Katana\n\n## ដំបូន្មាន\n\n- ចូលលេងរាល់ថ្ងៃ\n- បំពេញ Mission\n- ប្រមូល Token\n\n## សេចក្តីសន្និដ្ឋាន\n\nCollab នេះគឺជាឱកាសដ៏ល្អសម្រាប់អ្នកគាំទ្រ Lucha Libre ។",
      en: "## Free Fire x Lucha Libre AAA\n\nThe **Lucha Libre AAA** collab (Mexican wrestling company) released in July 2026.\n\n## Rewards\n\n- **Rey Mysterio Bundle**\n- **La Parka Bundle**\n- **Kendo Stick** — Replaces Katana\n\n## Tips\n\n- Log in daily\n- Complete missions\n- Collect tokens\n\n## Conclusion\n\nThis collab is a great opportunity for Lucha Libre fans.",
    },
    date: "2026-07-01",
    accent: "#ef4444",
    game: "ff",
    category: "event",
  },
  {
    id: "ff-leak-ben10",
    tag: "LEAK",
    title: {
      km: "Free Fire x Ben 10 — ការលេចធ្លាយធំ",
      en: "Free Fire x Ben 10 — Major Leak",
    },
    excerpt: {
      km: "ការលេចធ្លាយបង្ហាញពីការសហការជាមួយ Ben 10 រួមមាន Bundle Ben, Gwen, Lucky Girl, Skin MAG-7, Machete និង Emote បំប្លែង ។",
      en: "Leaks reveal Ben 10 collab including Bundle Ben, Gwen, Lucky Girl, MAG-7 skin, Machete, and transformation emotes.",
    },
    content: {
      km: "## Free Fire x Ben 10 (Leak)\n\nការលេចធ្លាយដ៏គួរឱ្យចាប់អារម្មណ៍បានបង្ហាញពីការសហការជាមួយ **Ben 10** នៅឆ្នាំ 2026 ។\n\n## អ្វីដែលលេចធ្លាយ\n\n- **Bundle Ben** — តួអង្គដើម\n- **Bundle Gwen** — ជីដូនមួយ\n- **Bundle Lucky Girl**\n- **Skin MAG-7**\n- **Machete**\n- **Emote បំប្លែង** — Alien X និង Heatblast\n\n## ហេតុអ្វីពិសេស?\n\n1. **Nostalgic** — រំលឹកកុមារភាព\n2. **Unique Emotes** — Emote បំប្លែង\n3. **Multiple Bundles**\n\n## ដំបូន្មាន\n\n- រង់ចាំការបញ្ជាក់ផ្លូវការ\n- រៀបចំ Diamonds\n- មើល YouTube\n\n## សេចក្តីសន្និដ្ឋាន\n\nCollab នេះគឺជាឱកាសដ៏អស្ចារ្យសម្រាប់អ្នកគាំទ្រ Ben 10 ។",
      en: "## Free Fire x Ben 10 (Leak)\n\nExciting leaks reveal a collaboration with **Ben 10** in 2026.\n\n## What's Leaked\n\n- **Bundle Ben** — Main character\n- **Bundle Gwen** — Cousin\n- **Bundle Lucky Girl**\n- **Skin MAG-7**\n- **Machete**\n- **Transformation Emotes** — Alien X and Heatblast\n\n## Why Special?\n\n1. **Nostalgic** — Childhood memories\n2. **Unique Emotes** — Transformation emotes\n3. **Multiple Bundles**\n\n## Tips\n\n- Wait for official confirmation\n- Prepare Diamonds\n- Watch YouTube\n\n## Conclusion\n\nThis collab is amazing for Ben 10 fans.",
    },
    date: "2026-08-14",
    accent: "#06b6d4",
    game: "ff",
    category: "event",
    blogSlug: "free-fire-ben-10-collab-leak",
  },
  {
    id: "ff-leak-bluelock2",
    tag: "LEAK",
    title: {
      km: "Free Fire x Blue Lock Chapter 2 — Rin Itoshi",
      en: "Free Fire x Blue Lock Chapter 2 — Rin Itoshi",
    },
    excerpt: {
      km: "ការលេចធ្លាយបង្ហាញថាជំពូកទី 2 នឹងផ្តោតលើ Rin Itoshi ជាមួយ Bundle, Weapon Skin និង Emote ថ្មីៗ ។",
      en: "Leaks reveal Chapter 2 focusing on Rin Itoshi with new bundles, weapon skins, and emotes.",
    },
    content: {
      km: "## Free Fire x Blue Lock Chapter 2\n\nការលេចធ្លាយបង្ហាញថាជំពូកទី 2 នឹងផ្តោតលើ **Rin Itoshi** ។ ចេញផ្សាយក្នុងខែឧសភា 2026 ។\n\n## អ្វីដែលលេចធ្លាយ\n\n- **Rin Itoshi Bundle**\n- **Weapon Skin**\n- **Emote**\n\n## ដំបូន្មាន\n\n- រង់ចាំការបញ្ជាក់ផ្លូវការ\n- រៀបចំ Diamonds\n\n## សេចក្តីសន្និដ្ឋាន\n\nCollab នេះគឺជាឱកាសដ៏ល្អសម្រាប់អ្នកគាំទ្រ Blue Lock ។",
      en: "## Free Fire x Blue Lock Chapter 2\n\nLeaks reveal Chapter 2 focusing on **Rin Itoshi**. Released in May 2026.\n\n## What's Leaked\n\n- **Rin Itoshi Bundle**\n- **Weapon Skin**\n- **Emote**\n\n## Tips\n\n- Wait for official confirmation\n- Prepare Diamonds\n\n## Conclusion\n\nThis collab is great for Blue Lock fans.",
    },
    date: "2026-05-30",
    accent: "#f59e0b",
    game: "ff",
    category: "event",
  },
  {
    id: "ff-leak-dragonball",
    tag: "RUMOR",
    title: {
      km: "Free Fire x Dragon Ball Z — ការលេចធ្លាយដែលមិនទាន់បញ្ជាក់",
      en: "Free Fire x Dragon Ball Z — Unconfirmed Leak",
    },
    excerpt: {
      km: "ការលេចធ្លាយដែលមិនទាន់បានបញ្ជាក់ ប៉ុន្តែមានការរំពឹងខ្ពស់ អំពីការសហការជាមួយ Dragon Ball Z ជាមួយ Goku Bundle និង AWM Skin ។",
      en: "Unconfirmed leak but highly anticipated Dragon Ball Z collab with Goku Bundle and AWM skin.",
    },
    content: {
      km: "## Free Fire x Dragon Ball Z (Rumor)\n\nការលេចធ្លាយដែលមិនទាន់បានបញ្ជាក់ អំពីការសហការជាមួយ **Dragon Ball Z** ។\n\n## អ្វីដែលលេចធ្លាយ\n\n- **Goku Bundle**\n- **AWM Skin**\n- **Emote**\n\n## ដំបូន្មាន\n\n- រង់ចាំការបញ្ជាក់ផ្លូវការ\n- កុំជឿលើ Rumor ទាំងអស់\n\n## សេចក្តីសន្និដ្ឋាន\n\nបើពិតជាមាន វានឹងក្លាយជា Collab ដ៏ធំបំផុតនៅឆ្នាំ 2026 ។",
      en: "## Free Fire x Dragon Ball Z (Rumor)\n\nUnconfirmed leak about a **Dragon Ball Z** collab.\n\n## What's Leaked\n\n- **Goku Bundle**\n- **AWM Skin**\n- **Emote**\n\n## Tips\n\n- Wait for official confirmation\n- Don't believe all rumors\n\n## Conclusion\n\nIf true, it will be the biggest collab in 2026.",
    },
    date: "2026-09-01",
    accent: "#ef4444",
    game: "ff",
    category: "event",
  },
  {
    id: "ff-patch-ob55",
    tag: "PATCH",
    title: {
      km: "Free Fire OB55 — Naruto ត្រឡប់មកវិញ",
      en: "Free Fire OB55 — Naruto Returns",
    },
    excerpt: {
      km: "Patch ថ្មីនាំមកនូវការត្រឡប់មកវិញនៃ Naruto Collaboration, Prime Diamonds, Mystery Shop និង Airdrop ថ្មី ។",
      en: "New patch brings Naruto Collaboration return, Prime Diamonds, Mystery Shop, and new Airdrop.",
    },
    content: {
      km: "## Free Fire OB55\n\nPatch **OB55** ចេញផ្សាយថ្ងៃទី **16 កញ្ញា 2026** ជាមួយនឹងការផ្លាស់ប្តូរដ៏ធំ ។\n\n## លក្ខណៈពិសេស\n\n- **Naruto Collaboration** — ត្រឡប់មកវិញ\n- **Prime Diamonds** — ប្រព័ន្ធថ្មី\n- **Mystery Shop** — ហាងអាថ៌កំបាំង\n- **Airdrop ថ្មី**\n\n## ការកែសម្រួល\n\n- **Kenta Rework** — Skill ថ្មី\n- **Weapon Balance** — កែសម្រួលអាវុធ\n\n## ដំបូន្មាន\n\n- មើល Patch Notes\n- បន្សាំ Loadout\n\n## សេចក្តីសន្និដ្ឋាន\n\nOB55 នាំមកនូវការផ្លាស់ប្តូរដ៏ធំសម្រាប់ Free Fire ។",
      en: "## Free Fire OB55\n\nPatch **OB55** released on September 16, 2026 with major changes.\n\n## Features\n\n- **Naruto Collaboration** — Returns\n- **Prime Diamonds** — New system\n- **Mystery Shop** — Mystery shop\n- **New Airdrop**\n\n## Adjustments\n\n- **Kenta Rework** — New skills\n- **Weapon Balance** — Weapon adjustments\n\n## Tips\n\n- Read Patch Notes\n- Adapt loadout\n\n## Conclusion\n\nOB55 brings major changes to Free Fire.",
    },
    date: "2026-09-16",
    accent: "#22d3ee",
    game: "ff",
    category: "patch",
  },
  {
    id: "ff-guide-heroic",
    tag: "GUIDE",
    title: {
      km: "Free Fire — គន្លឹះឡើង Heroic លឿន",
      en: "Free Fire — Tips to Reach Heroic Fast",
    },
    excerpt: {
      km: "គន្លឹះ និងយុទ្ធសាស្ត្រសម្រាប់ការឡើង Rank ពី Gold ដល់ Heroic ក្នុងរយៈពេលខ្លី ។",
      en: "Tips and strategies to climb from Gold to Heroic in a short time.",
    },
    content: {
      km: "## គន្លឹះឡើង Heroic លឿន\n\nការឡើង Rank ពី Gold ទៅ Heroic ត្រូវការ **ជំនាញ + យុទ្ធសាស្ត្រ + ក្រុមល្អ** ។\n\n## ១. កែ Sensitivity\n\nSensitivity ល្អ = បាញ់ត្រូវច្រើន ។ សាក ៩០-១០០ សម្រាប់ General ។\n\n## ២. ជ្រើសតួអង្គ ២-៣\n\nកុំលេងគ្រប់តួអង្គ ។ ជ្រើស ២-៣ ដែលពូកែបំផុត ។\n\n## ៣. ហាត់ក្នុង Training\n\nហាត់ ១៥ នាទីរាល់ថ្ងៃ ។\n\n## ៤. លេងជាមួយក្រុម\n\nSolo Rank ពិបាក ។ បង្កើតក្រុម ៤ នាក់ ។\n\n## ៥. កុំខឹង\n\nកុំខឹងពេលចាញ់ ។ រៀនពីកំហុស ។\n\n## សេចក្តីសន្និដ្ឋាន\n\nបើអនុវត្តតាមគន្លឹះទាំងនេះ អ្នកនឹងឡើង Heroic លឿន ។",
      en: "## Tips to Reach Heroic Fast\n\nClimbing from Gold to Heroic requires **skill + strategy + good team**.\n\n## 1. Perfect Sensitivity\n\nGood sensitivity = more hits. Try 90-100 for General.\n\n## 2. Pick Only 2-3 Characters\n\nDon't play every character. Pick 2-3 you're best at.\n\n## 3. Practice in Training\n\nPractice 15 minutes daily.\n\n## 4. Play with Team\n\nSolo rank is hard. Form a team of 4.\n\n## 5. Don't Rage\n\nDon't rage when losing. Learn from mistakes.\n\n## Conclusion\n\nFollow these tips and you'll reach Heroic fast.",
    },
    date: "2026-09-19",
    accent: "#22c55e",
    game: "ff",
    category: "guide",
    blogSlug: "free-fire-reach-heroic-fast",
  },
  {
    id: "ff-tips-sensitivity",
    tag: "TIPS",
    title: {
      km: "១០ គន្លឹះកែ Sensitivity សម្រាប់ Free Fire",
      en: "10 Tips to Perfect Free Fire Sensitivity",
    },
    excerpt: {
      km: "រៀនកែ Sensitivity ឱ្យត្រូវនឹងទូរស័ព្ទ និង Style លេងរបស់អ្នក ។",
      en: "Learn to tune sensitivity to match your phone and playstyle.",
    },
    content: {
      km: "## គន្លឹះកែ Sensitivity\n\nSensitivity ត្រឹមត្រូវ = បាញ់ត្រូវលឿន + Headshot ងាយ ។\n\n## ១. ចាប់ផ្តើមពី General\n\nGeneral សំខាន់បំផុត ។ សាក ៩០-១០០ ។\n\n## ២. Red Dot ខ្ពស់\n\nRed Dot សម្រាប់ចម្ងាយខ្លី ។ សាក ៨៥-៩៥ ។\n\n## ៣. Scope ទាបជាង\n\nScope ២x, ៤x គួរទាបជាង General ។\n\n## ៤. Sniper ទាបបំផុត\n\nSniper គួរ ៥០-៦៥ ដើម្បី Aim ត្រូវ ។\n\n## ៥. កែតាមទូរស័ព្ទ\n\nទូរស័ព្ទធំ = Sensitivity ទាប ។\n\n## ៦. កែតាម Finger\n\n២ Finger, ៣ Finger, ៤ Finger = ខុសគ្នា ។\n\n## ៧. ហាត់ក្នុង Training\n\nសាក Sensitivity ថ្មី ១៥ នាទី ។\n\n## ៨. កុំផ្លាស់ប្តូរញឹកញាប់\n\nកែតែម្តងក្នុង ១ សប្តាហ៍ ។\n\n## ៩. មើល Pro Player\n\nមើល YouTube ដើម្បីដឹង Sensitivity ។\n\n## ១០. ស្តាប់ខ្លួនឯង\n\nSensitivity ល្អបំផុត = ដែលស្រួលបំផុត ។\n\n## សេចក្តីសន្និដ្ឋាន\n\nSensitivity ត្រឹមត្រូវ = បង្កើន Win Rate ។",
      en: "## Sensitivity Tips\n\nCorrect sensitivity = fast accurate shots + easy headshots.\n\n## 1. Start with General\n\nGeneral is most important. Try 90-100.\n\n## 2. Red Dot High\n\nRed Dot for close range. Try 85-95.\n\n## 3. Scope Lower\n\n2x, 4x scope should be lower than General.\n\n## 4. Sniper Lowest\n\nSniper should be 50-65 for accurate aim.\n\n## 5. Adjust by Phone\n\nBigger screen = lower sensitivity.\n\n## 6. Adjust by Finger Count\n\n2, 3, 4 fingers = different settings.\n\n## 7. Practice in Training\n\nTest new sensitivity 15 minutes.\n\n## 8. Don't Change Often\n\nAdjust only once per week.\n\n## 9. Watch Pro Players\n\nWatch YouTube for sensitivity.\n\n## 10. Trust Yourself\n\nBest sensitivity = most comfortable.\n\n## Conclusion\n\nCorrect sensitivity = higher win rate.",
    },
    date: "2026-09-14",
    accent: "#06b6d4",
    game: "ff",
    category: "tips",
    blogSlug: "free-fire-sensitivity-10-tips",
  },
];

export type PatchNote = {
  id: string;
  version: string;
  game: "ff" | "mlbb";
  title: { km: string; en: string };
  date: string;
  accent: string;
  changes: { type: "buff" | "nerf" | "adjust" | "new"; hero: string; desc: { km: string; en: string } }[];
};

export const PATCHES: PatchNote[] = [
  {
    id: "mlbb-2166",
    version: "2.1.66",
    game: "mlbb",
    title: { km: "Hirara និងការកែសម្រួល Hero", en: "Hirara and Hero Adjustments" },
    date: "2026-03-24",
    accent: "#22d3ee",
    changes: [
      { type: "new", hero: "Hirara", desc: { km: "Assassin ថ្មីជាមួយ Twin Fans", en: "New Assassin with Twin Fans" } },
      { type: "buff", hero: "Brody", desc: { km: "បង្កើន Damage និង Mobility", en: "Increased Damage and Mobility" } },
      { type: "nerf", hero: "Claude", desc: { km: "បន្ថយ Damage ពេល Late Game", en: "Reduced late-game Damage" } },
    ],
  },
  {
    id: "mlbb-s42",
    version: "S42",
    game: "mlbb",
    title: { km: "Season 42 Starward Decade", en: "Season 42 Starward Decade" },
    date: "2026-09-16",
    accent: "#a855f7",
    changes: [
      { type: "adjust", hero: "Masha", desc: { km: "កែសម្រួល Skill និង Stats", en: "Skill and Stat adjustments" } },
      { type: "buff", hero: "Clint", desc: { km: "បង្កើន Damage", en: "Increased Damage" } },
      { type: "nerf", hero: "Badang", desc: { km: "បន្ថយ Crowd Control", en: "Reduced Crowd Control" } },
    ],
  },
  {
    id: "ff-ob55",
    version: "OB55",
    game: "ff",
    title: { km: "Naruto Returns និង Kenta Rework", en: "Naruto Returns and Kenta Rework" },
    date: "2026-09-16",
    accent: "#f59e0b",
    changes: [
      { type: "new", hero: "Naruto Event", desc: { km: "ការត្រឡប់មកវិញនៃការសហការ", en: "Collab returns" } },
      { type: "adjust", hero: "Kenta", desc: { km: "Rework Skill ទាំងស្រុង", en: "Full Skill Rework" } },
      { type: "new", hero: "Airdrop", desc: { km: "Airdrop ថ្មី", en: "New Airdrop" } },
    ],
  },
];

export type SiteConfig = {
  name: string;
  logo: string;
  description: { km: string; en: string };
};

export const SITE: SiteConfig = {
  name: "CyberNovaX",
  logo: "/images/logo.png",
  description: {
    km: "Guideពេញលេញសម្រាប់អ្នកលេង Free Fire និង Mobile Legends",
    en: "Complete guides for Free Fire and Mobile Legends players",
  },
};