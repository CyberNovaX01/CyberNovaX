"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Lang } from "./types";

type Dict = Record<string, string>;

const km: Dict = {
  "nav.home": "ទំព័រដើម", "nav.ff": "Free Fire", "nav.mlbb": "MLBB",
  "nav.news": "ព័ត៌មាន", "nav.patch": "បច្ចុប្បន្នភាព",
  "theme.dark": "ងងឹត", "theme.light": "ភ្លឺ",
  "header.lastUpdate": "ធ្វើបច្ចុប្បន្នភាព",
  "header.search": "ស្វែងរក…",
  "hero.kicker": "ការណែនាំហ្គេម",
  "hero.line1": "រក Guide",
  "hero.line2": "ដែលត្រូវនឹងអ្នក",
  "hero.sub": "ការណែនាំច្បាស់លាស់សម្រាប់ Free Fire និង Mobile Legends — តាមឧបករណ៍ តាម hero តាម role។",
  "hero.cta1": "រុករក Free Fire",
  "hero.cta2": "រុករក MLBB",
  "hero.watch": "មើល video",
  "stats.guides": "Guides",
  "stats.heroes": "Heroes",
  "stats.roles": "Roles",
  "stats.updated": "Updated",
  "stats.live": "LIVE",
  "home.games": "ជ្រើសរើសហ្គេមរបស់អ្នក",
  "home.gamesSub": "Choose your game",
  "home.enter": "ចូល",
  "home.meta": "Meta សប្តាហ៍នេះ",
  "home.metaSub": "Top heroes តាម win rate",
  "home.metaCta": "Tier List ពេញ",
  "home.featured": "Guides ពេញនិយម",
  "home.featuredSub": "Featured guides",
  "home.featuredCta": "មើលទាំងអស់",
  "home.topHeroes": "Heroes ពេញនិយម",
  "home.topHeroesSub": "Top MLBB heroes",
  "home.topHeroesCta": "មើលទាំងអស់",
  "home.news": "ព័ត៌មានថ្មីៗ",
  "home.newsSub": "Latest news",
  "home.newsCta": "មើលទាំងអស់",
  "home.patches": "បច្ចុប្បន្នភាព",
  "home.patchesSub": "Recent patches",
  "home.patchesCta": "មើលទាំងអស់",
  "home.ff.title": "Free Fire",
  "home.ff.tag": "Sensitivity · Loadout · តាមគ្រឿង",
  "home.ff.desc": "ជ្រើសរើសម៉ាក ម៉ូដែល RAM រួចទទួល sensitivity ត្រូវនឹងឧបករណ៍របស់អ្នក។",
  "home.ff.cta": "ចាប់ផ្តើម",
  "home.mlbb.title": "Mobile Legends",
  "home.mlbb.tag": "Hero guide · Build · តាម Role",
  "home.mlbb.desc": "រក hero តាម Role — Assassin, Tank, Mage, Marksman, Fighter, Support។",
  "home.mlbb.cta": "ចាប់ផ្តើម",
  "hub.back": "ត្រឡប់",
  "hub.mlbb.title": "Mobile Legends Hub",
  "hub.mlbb.sub": "គ្រប់ឧបករណ៍សម្រាប់អ្នកលេង MLBB",
  "hub.ff.title": "Free Fire Hub",
  "hub.ff.sub": "គ្រប់ឧបករណ៍សម្រាប់អ្នកលេង Free Fire",
  "ff.title": "Free Fire — Guide តាមគ្រឿង", "ff.back": "ត្រឡប់", "ff.next": "បន្ទាប់",
  "ff.step.brand": "យីហោទូរស័ព្ទ", "ff.step.brand.sub": "ម៉ាកណាដែលអ្នកប្រើ?",
  "ff.step.model": "ម៉ូដែល", "ff.step.model.sub": "ជ្រើសរើសម៉ូដែលរបស់អ្នក",
  "ff.step.variant": "RAM / Storage", "ff.step.variant.sub": "កំណត់លក្ខណៈបច្ចេកទេស",
  "ff.step.style": "រៀបភ្លេយ", "ff.step.style.sub": "តើអ្នកលេងបែបណា?",
  "ff.step.finger": "ចំនួនម្រាម", "ff.step.finger.sub": "វិធីប៉ះរបស់អ្នក",
  "ff.of": "នៃ", "ff.done": "រកឃើញ guide…",
  "ff.none": "មិនទាន់មាន guide ទេ។", "ff.noneCta": "សាកម៉ូដែលផ្សេង។",
  "mlbb.title": "Mobile Legends — Guide តាម Hero", "mlbb.search": "ស្វែងរក hero…",
  "mlbb.noResults": "គ្មាន hero ត្រូវគ្នា",
  "footer.product": "ផលិតផល", "footer.company": "ក្រុមហ៊ុន",
  "footer.legal": "ច្បាប់", "footer.connect": "ភ្ជាប់",
  "footer.about": "អំពីយើង", "footer.contact": "ទំនាក់ទំនង",
  "footer.privacy": "ភាពឯកជន", "footer.terms": "លក្ខខណ្ឌ",
  "footer.copyright": "រក្សាសិទ្ធិគ្រប់បែបយ៉ាង",
  "footer.made": "ផលិតក្នុងប្រទេសកម្ពុជា",
  "search.heroes": "Heroes", "search.guides": "Guides", "search.news": "ព័ត៌មាន",
  "search.placeholder": "ស្វែងរក hero, guide, ព័ត៌មាន…",
  "search.noResults": "គ្មានលទ្ធផល",
};

const en: Dict = {
  "nav.home": "Home", "nav.ff": "Free Fire", "nav.mlbb": "MLBB",
  "nav.news": "News", "nav.patch": "Patch",
  "theme.dark": "Dark", "theme.light": "Light",
  "header.lastUpdate": "Last updated",
  "header.search": "Search…",
  "hero.kicker": "GAMING GUIDES",
  "hero.line1": "Find the guide",
  "hero.line2": "made for you",
  "hero.sub": "Clear guides for Free Fire and Mobile Legends — by device, by hero, by role.",
  "hero.cta1": "Explore Free Fire",
  "hero.cta2": "Explore MLBB",
  "hero.watch": "Watch video",
  "stats.guides": "Guides",
  "stats.heroes": "Heroes",
  "stats.roles": "Roles",
  "stats.updated": "Updated",
  "stats.live": "LIVE",
  "home.games": "Choose your game",
  "home.gamesSub": "Choose your game",
  "home.enter": "Enter",
  "home.meta": "This week's meta",
  "home.metaSub": "Top heroes by win rate",
  "home.metaCta": "Full Tier List",
  "home.featured": "Featured guides",
  "home.featuredSub": "Featured guides",
  "home.featuredCta": "View all",
  "home.topHeroes": "Top heroes",
  "home.topHeroesSub": "Top MLBB heroes",
  "home.topHeroesCta": "View all",
  "home.news": "Latest news",
  "home.newsSub": "Latest news",
  "home.newsCta": "View all",
  "home.patches": "Recent patches",
  "home.patchesSub": "Recent patches",
  "home.patchesCta": "View all",
  "home.ff.title": "Free Fire",
  "home.ff.tag": "Sensitivity · Loadout · by device",
  "home.ff.desc": "Pick your device brand, model, and RAM to get sensitivity tuned to your hardware.",
  "home.ff.cta": "Get started",
  "home.mlbb.title": "Mobile Legends",
  "home.mlbb.tag": "Hero guide · Build · by role",
  "home.mlbb.desc": "Find your hero by role — Assassin, Tank, Mage, Marksman, Fighter, Support.",
  "home.mlbb.cta": "Get started",
  "hub.back": "Back",
  "hub.mlbb.title": "Mobile Legends Hub",
  "hub.mlbb.sub": "Everything for MLBB players",
  "hub.ff.title": "Free Fire Hub",
  "hub.ff.sub": "Everything for Free Fire players",
  "ff.title": "Free Fire — Guide your device", "ff.back": "Back", "ff.next": "Next",
  "ff.step.brand": "Device brand", "ff.step.brand.sub": "Which brand do you use?",
  "ff.step.model": "Model", "ff.step.model.sub": "Choose your exact model",
  "ff.step.variant": "RAM / Storage", "ff.step.variant.sub": "The exact spec matters",
  "ff.step.style": "Play style", "ff.step.style.sub": "How do you play?",
  "ff.step.finger": "Finger layout", "ff.step.finger.sub": "Your touch setup",
  "ff.of": "of", "ff.done": "Finding guide…",
  "ff.none": "No guide yet.", "ff.noneCta": "Try another model.",
  "mlbb.title": "Mobile Legends — Guide your hero", "mlbb.search": "Search hero…",
  "mlbb.noResults": "No hero matches",
  "footer.product": "Product", "footer.company": "Company",
  "footer.legal": "Legal", "footer.connect": "Connect",
  "footer.about": "About", "footer.contact": "Contact",
  "footer.privacy": "Privacy", "footer.terms": "Terms",
  "footer.copyright": "All rights reserved",
  "footer.made": "Made in Cambodia",
  "search.heroes": "Heroes", "search.guides": "Guides", "search.news": "News",
  "search.placeholder": "Search heroes, guides, news…",
  "search.noResults": "No results",
};

const I18nCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; dict: Dict }>(null!);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, _setLang] = useState<Lang>("km");
  useEffect(() => {
    const saved = (localStorage.getItem("gg-lang") as Lang) || "km";
    _setLang(saved);
    document.documentElement.dataset.lang = saved;
    document.documentElement.lang = saved;
  }, []);
  const setLang = useCallback((l: Lang) => {
    _setLang(l);
    localStorage.setItem("gg-lang", l);
    document.documentElement.dataset.lang = l;
    document.documentElement.lang = l;
  }, []);
  return (
    <I18nCtx.Provider value={{ lang, setLang, dict: lang === "km" ? km : en }}>
      {children}
    </I18nCtx.Provider>
  );
}

export const useLang = () => useContext(I18nCtx);
export function useT() {
  const { dict } = useLang();
  return (k: string) => dict[k] ?? k;
}