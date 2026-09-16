"use client";
import { Cookie } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { MoodSetter } from "@/components/MoodSetter";

export default function CookiesPage() {
  return (
    <>
      <MoodSetter mood="cosmic" />
      <LegalPage
        icon={Cookie}
        kickerKm="Cookies"
        kickerEn="COOKIE POLICY"
        titleKm="គោលនយោបាយ Cookies"
        titleEn="Cookie Policy"
        subtitleKm="យើងប្រើ cookies ដើម្បីធ្វើឱ្យបទពិសោធន៍របស់អ្នកល្អប្រសើរ"
        subtitleEn="We use cookies to improve your experience"
        color="#f59e0b"
        lastUpdated="15 Sep 2026"
        sections={[
          {
            headingKm: "1. Cookies ជាអ្វី?",
            headingEn: "1. What Are Cookies?",
            bodyKm: [
              "Cookies គឺជាឯកសារតូចៗដែលត្រូវបានរក្សាទុកក្នុង browser របស់អ្នក នៅពេលអ្នកចូលមើលគេហទំព័រ។ ពួកវាជួយឱ្យគេហទំព័រចងចាំចំណូលចិត្តរបស់អ្នក។",
            ],
            bodyEn: [
              "Cookies are small files stored in your browser when you visit a website. They help sites remember your preferences.",
            ],
          },
          {
            headingKm: "2. ប្រភេទ Cookies ដែលយើងប្រើ",
            headingEn: "2. Types of Cookies We Use",
            bodyKm: [
              "🔹 Essential Cookies — ចាំបាច់សម្រាប់ការដំណើរការមូលដ្ឋាន (ឧ. language preference)",
              "🔹 Preference Cookies — រក្សាទុកចំណូលចិត្ត (ឧ. theme, language)",
              "🔹 Analytics Cookies — ជួយយើងយល់ពីរបៀបដែលអ្នកប្រើប្រាស់គេហទំព័រ",
              "🔹 Advertising Cookies — ប្រើដោយ Google AdSense ដើម្បីបង្ហាញពាណិជ្ជកម្ម",
            ],
            bodyEn: [
              "🔹 Essential Cookies — Required for basic operation (e.g. language preference)",
              "🔹 Preference Cookies — Store your preferences (e.g. theme, language)",
              "🔹 Analytics Cookies — Help us understand how users interact with the site",
              "🔹 Advertising Cookies — Used by Google AdSense to serve relevant ads",
            ],
          },
          {
            headingKm: "3. Cookies ដែលយើងកំណត់",
            headingEn: "3. Cookies We Set",
            bodyKm: [
              "• gg-lang — រក្សាទុកភាសាដែលអ្នកជ្រើស (KM ឬ EN)",
              "• gg-theme — រក្សាទុក theme (dark ឬ light)",
              "• gg-favs — រក្សាទុក guides ដែលអ្នកចូលចិត្ត",
              "ពួកវាមានរយៈពេល 1 ឆ្នាំ ហើយអ្នកអាចលុបវាបានគ្រប់ពេល។",
            ],
            bodyEn: [
              "• gg-lang — Stores your selected language (KM or EN)",
              "• gg-theme — Stores your theme (dark or light)",
              "• gg-favs — Stores your favorite guides",
              "They last for 1 year and can be deleted anytime.",
            ],
          },
          {
            headingKm: "4. Cookies របស់ភាគីទីបី",
            headingEn: "4. Third-Party Cookies",
            bodyKm: [
              "Google AdSense អាចកំណត់ cookies ដើម្បីបង្ហាញពាណិជ្ជកម្មដែលសមស្របនឹងចំណូលចិត្តរបស់អ្នក។ អ្នកអាចបិទ personalized ads នៅ Google Ads Settings។",
            ],
            bodyEn: [
              "Google AdSense may set cookies to show ads relevant to your interests. You can opt out at Google Ads Settings.",
            ],
          },
          {
            headingKm: "5. របៀបគ្រប់គ្រង Cookies",
            headingEn: "5. How to Manage Cookies",
            bodyKm: [
              "អ្នកអាចគ្រប់គ្រង ឬលុប cookies តាម browser settings របស់អ្នក៖",
              "• Chrome: Settings → Privacy → Cookies",
              "• Firefox: Preferences → Privacy → Cookies",
              "• Safari: Preferences → Privacy → Cookies",
              "បើអ្នកបិទ cookies ទាំងអស់ គេហទំព័រអាចដំណើរការមិនពេញលេញ។",
            ],
            bodyEn: [
              "You can manage or delete cookies in your browser settings:",
              "• Chrome: Settings → Privacy → Cookies",
              "• Firefox: Preferences → Privacy → Cookies",
              "• Safari: Preferences → Privacy → Cookies",
              "Disabling all cookies may prevent the site from working fully.",
            ],
          },
        ]}
      />
    </>
  );
}