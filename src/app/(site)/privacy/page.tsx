"use client";
import { Shield } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { MoodSetter } from "@/components/MoodSetter";

export default function PrivacyPage() {
  return (
    <>
      <MoodSetter mood="cosmic" />
      <LegalPage
        icon={Shield}
        kickerKm="ភាពឯកជន"
        kickerEn="PRIVACY POLICY"
        titleKm="គោលនយោបាយភាពឯកជន"
        titleEn="Privacy Policy"
        subtitleKm="យើងគោរពភាពឯកជនរបស់អ្នក — ទិន្នន័យអ្នកមានសុវត្ថិភាព"
        subtitleEn="We respect your privacy — your data is safe with us"
        color="#22c55e"
        lastUpdated="15 Sep 2026"
        sections={[
          {
            headingKm: "1. ព័ត៌មានដែលយើងប្រមូល",
            headingEn: "1. Information We Collect",
            bodyKm: [
              "យើងប្រមូលព័ត៌មានតិចតួចបំផុតដែលចាំបាច់សម្រាប់ដំណើរការគេហទំព័រ៖",
              "• ព័ត៌មានឧបករណ៍ — ប្រភេទ browser, ប្រព័ន្ធប្រតិបត្តិការ, screen size",
              "• Cookies — សម្រាប់រក្សាទុកចំណូលចិត្ត (ភាសា, theme)",
              "• Analytics — ទិន្នន័យស្ថិតិមិនមែនផ្ទាល់ខ្លួន (page views, session time)",
            ],
            bodyEn: [
              "We collect the minimum information needed to operate the website:",
              "• Device info — browser type, OS, screen size",
              "• Cookies — to store your preferences (language, theme)",
              "• Analytics — non-personal statistical data (page views, session time)",
            ],
          },
          {
            headingKm: "2. របៀបដែលយើងប្រើព័ត៌មាន",
            headingEn: "2. How We Use Information",
            bodyKm: [
              "យើងប្រើព័ត៌មានដើម្បី៖",
              "• ធ្វើឱ្យគេហទំព័រដំណើរការល្អជាង",
              "• រក្សាទុកចំណូលចិត្តរបស់អ្នក (ភាសា, theme)",
              "• វិភាគអំពីរបៀបដែលអ្នកប្រើប្រាស់គេហទំព័រ",
              "យើងមិនលក់ ឬចែករំលែកទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នកទេ។",
            ],
            bodyEn: [
              "We use information to:",
              "• Improve website performance",
              "• Remember your preferences (language, theme)",
              "• Analyze how users interact with the site",
              "We never sell or share your personal data.",
            ],
          },
          {
            headingKm: "3. Google AdSense & Cookies",
            headingEn: "3. Google AdSense & Cookies",
            bodyKm: [
              "គេហទំព័រនេះប្រើ Google AdSense ដើម្បីបង្ហាញផ្ទាំងពាណិជ្ជកម្ម។ Google អាចប្រើ cookies ដើម្បីបង្ហាញពាណិជ្ជកម្មដែលសមស្របនឹងអ្នក។",
              "អ្នកអាចបិទ personalized ads ដោយចូលទៅកាន់ Google Ads Settings។",
            ],
            bodyEn: [
              "This website uses Google AdSense to display advertisements. Google may use cookies to show ads relevant to you.",
              "You can opt out of personalized ads by visiting Google Ads Settings.",
            ],
          },
          {
            headingKm: "4. សិទ្ធិរបស់អ្នក",
            headingEn: "4. Your Rights",
            bodyKm: [
              "អ្នកមានសិទ្ធិ៖",
              "• ចូលមើលទិន្នន័យដែលយើងរក្សាទុក",
              "• ស្នើសុំលុបទិន្នន័យ",
              "• បដិសេធ cookies",
              "សម្រាប់សំណើ សូមទាក់ទងតាម cybernovax0101@gmail.com",
            ],
            bodyEn: [
              "You have the right to:",
              "• Access data we store",
              "• Request data deletion",
              "• Opt out of cookies",
              "For requests, contact cybernovax0101@gmail.com",
            ],
          },
          {
            headingKm: "5. ការផ្លាស់ប្តូរគោលនយោបាយ",
            headingEn: "5. Changes to This Policy",
            bodyKm: [
              "យើងអាចធ្វើបច្ចុប្បន្នភាពគោលនយោបាយនេះពីពេលមួយទៅពេលមួយ។ ការផ្លាស់ប្តូរនឹងត្រូវបានបង្ហាញនៅលើទំព័រនេះជាមួយនឹងកាលបរិច្ឆេទថ្មី។",
            ],
            bodyEn: [
              "We may update this policy from time to time. Changes will be posted on this page with a new date.",
            ],
          },
        ]}
      />
    </>
  );
}