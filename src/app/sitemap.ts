import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cyber-nova-x.vercel.app";
  const currentDate = new Date();

  // Main pages
  const mainPages = [
    { url: "", priority: 1.0, changeFreq: "daily" as const },
    { url: "/ff-hub", priority: 0.9, changeFreq: "daily" as const },
    { url: "/mlbb", priority: 0.9, changeFreq: "daily" as const },
    { url: "/news", priority: 0.8, changeFreq: "daily" as const },
    { url: "/patch", priority: 0.8, changeFreq: "daily" as const },
  ];

  // Free Fire pages
  const ffPages = [
    "/ff/characters",
    "/ff/weapons",
    "/ff/pets",
    "/ff/maps",
    "/ff/tier",
    "/ff/sensitivity",
  ];

  // MLBB pages
  const mlbbPages = [
    "/mlbb/tier",
    "/mlbb/heroes",
    "/mlbb/builds",
    "/mlbb/stats",
    "/mlbb/emblems",
    "/mlbb/counters",
  ];

  // Tools pages
  const toolsPages = [
    "/tools",
    "/tools/phone-performance",
    "/tools/rank-mythic",
    "/tools/top-gun",
  ];

  // Legal pages
  const legalPages = [
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const allPages = [
    ...mainPages.map((p) => ({ url: p.url, priority: p.priority, changeFreq: p.changeFreq })),
    ...ffPages.map((url) => ({ url, priority: 0.8, changeFreq: "weekly" as const })),
    ...mlbbPages.map((url) => ({ url, priority: 0.8, changeFreq: "weekly" as const })),
    ...toolsPages.map((url) => ({ url, priority: 0.7, changeFreq: "weekly" as const })),
    ...legalPages.map((url) => ({ url, priority: 0.5, changeFreq: "monthly" as const })),
  ];

  return allPages.map((page) => ({
    url: baseUrl + page.url,
    lastModified: currentDate,
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));
}