"use client";
import { FileText } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { MoodSetter } from "@/components/MoodSetter";

export default function TermsPage() {
  return (
    <>
      <MoodSetter mood="cosmic" />
      <LegalPage
        icon={FileText}
        kickerKm="លក្ខខណ្ឌ"
        kickerEn="TERMS OF SERVICE"
        titleKm="លក្ខខណ្ឌប្រើប្រាស់"
        titleEn="Terms of Service"
        subtitleKm="សូមអានលក្ខខណ្ឌទាំងនេះមុននឹងប្រើប្រាស់គេហទំព័រ"
        subtitleEn="Please read these terms before using the site"
        color="#3b82f6"
        lastUpdated="15 Sep 2026"
        sections={[
          {
            headingKm: "1. ការទទួលយកលក្ខខណ្ឌ",
            headingEn: "1. Acceptance of Terms",
            bodyKm: [
              "តាមរយៈការចូលប្រើគេហទំព័រ CyberNovaX អ្នកយល់ព្រមទទួលយកលក្ខខណ្ឌទាំងនេះ។ បើអ្នកមិនយល់ព្រម សូមកុំប្រើគេហទំព័រ។",
            ],
            bodyEn: [
              "By accessing CyberNovaX, you agree to accept these terms. If you do not agree, please do not use the site.",
            ],
          },
          {
            headingKm: "2. ការប្រើប្រាស់ដែលអនុញ្ញាត",
            headingEn: "2. Permitted Use",
            bodyKm: [
              "អ្នកត្រូវប្រើគេហទំព័រនេះសម្រាប់គោលបំណងផ្ទាល់ខ្លួន និងមិនពាណិជ្ជកម្មប៉ុណ្ណោះ។ អ្នកមិនត្រូវ៖",
              "• ចម្លង ឬលក់ខ្លឹមសារដោយគ្មានការអនុញ្ញាត",
              "• ប្រើ bots ឬ scripts ដើម្បី scrape data",
              "• រំខានដល់ដំណើរការគេហទំព័រ",
              "• បង្ហោះខ្លឹមសារខុសច្បាប់",
            ],
            bodyEn: [
              "You may use this site for personal, non-commercial purposes only. You may not:",
              "• Copy or sell content without permission",
              "• Use bots or scripts to scrape data",
              "• Disrupt site operation",
              "• Post illegal content",
            ],
          },
          {
            headingKm: "3. កម្មសិទ្ធិបញ្ញា",
            headingEn: "3. Intellectual Property",
            bodyKm: [
              "ខ្លឹមសារទាំងអស់ (text, graphics, layout) ជាកម្មសិទ្ធិរបស់ CyberNovaX ឬដៃគូអាជីវកម្មរបស់យើង។",
              "ឈ្មោះហ្គេម និង logos (Free Fire, Mobile Legends) ជាកម្មសិទ្ធិរបស់ Garena និង Moonton រៀងៗខ្លួន។ យើងមិនមានទំនាក់ទំនងផ្លូវការជាមួយក្រុមហ៊ុនទាំងនោះទេ។",
            ],
            bodyEn: [
              "All content (text, graphics, layout) is property of CyberNovaX or our partners.",
              "Game names and logos (Free Fire, Mobile Legends) are property of Garena and Moonton respectively. We are not officially affiliated with them.",
            ],
          },
          {
            headingKm: "4. ការបដិសេធការទទួលខុសត្រូវ",
            headingEn: "4. Disclaimer",
            bodyKm: [
              "ខ្លឹមសារនៅលើគេហទំព័រនេះត្រូវបានផ្តល់ជូន \"ដូចដែលមាន\" ដោយគ្មានការធានាណាមួយឡើយ។",
              "យើងមិនទទួលខុសត្រូវចំពោះការខូចខាតណាមួយដែលកើតឡើងពីការប្រើប្រាស់គេហទំព័រនេះទេ។",
            ],
            bodyEn: [
              "Content on this site is provided \"as is\" without warranties of any kind.",
              "We are not liable for any damages arising from the use of this site.",
            ],
          },
          {
            headingKm: "5. ការផ្លាស់ប្តូរលក្ខខណ្ឌ",
            headingEn: "5. Changes to Terms",
            bodyKm: [
              "យើងអាចកែប្រែលក្ខខណ្ឌទាំងនេះពីពេលមួយទៅពេលមួយ។ ការបន្តប្រើប្រាស់គេហទំព័រ បន្ទាប់ពីការផ្លាស់ប្តូរ មានន័យថាអ្នកយល់ព្រមនឹងលក្ខខណ្ឌថ្មី។",
            ],
            bodyEn: [
              "We may modify these terms from time to time. Continued use of the site after changes means you accept the new terms.",
            ],
          },
        ]}
      />
    </>
  );
}