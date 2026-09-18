"use client";
import { Users } from "lucide-react";
import { LegalPage } from "@/components/LegalPage";
import { MoodSetter } from "@/components/MoodSetter";

export default function AboutPage() {
  return (
    <>
      <MoodSetter mood="cosmic" />
      <LegalPage
        icon={Users}
        kickerKm="អំពីយើង"
        kickerEn="ABOUT US"
        titleKm="អំពី Gaming Guide"
        titleEn="About Gaming Guide"
        subtitleKm="យើងជាក្រុមអ្នកលេងហ្គេមខ្មែរ ដែលចង់ជួយអ្នកលេងផ្សេងទៀតឱ្យពូកែ"
        subtitleEn="We are a Cambodian gaming community helping players level up"
        color="#22d3ee"
        lastUpdated="15 Sep 2026"
        sections={[
          {
            headingKm: "យើងជានរណា?",
            headingEn: "Who We Are",
            bodyKm: [
              "Gaming Guide គឺជាវេទិកាអប់រំសម្រាប់អ្នកលេងហ្គេមនៅកម្ពុជា និងអាស៊ីអាគ្នេយ៍។ យើងផ្តល់ជូនGuideគុណភាពខ្ពស់សម្រាប់ Free Fire និង Mobile Legends។",
              "គោលដៅរបស់យើងគឺធ្វើឱ្យការរៀនហ្គេមកាន់តែងាយស្រួល និងរីករាយសម្រាប់អ្នកលេងគ្រប់កម្រិត — ចាប់ពីអ្នកចាប់ផ្តើមថ្មី ដល់អ្នកលេងកម្រិតខ្ពស់។",
            ],
            bodyEn: [
              "Gaming Guide is an educational platform for gamers in Cambodia and Southeast Asia. We provide high-quality guides for Free Fire and Mobile Legends.",
              "Our goal is to make learning games easier and more enjoyable for players of all levels — from beginners to advanced players.",
            ],
          },
          {
            headingKm: "អ្វីដែលយើងផ្តល់ជូន",
            headingEn: "What We Offer",
            bodyKm: [
              "🎯 Sensitivity Calculator — គណនាតម្លៃ sensitivity ត្រឹមត្រូវតាមឧបករណ៍របស់អ្នក",
              "🏆 Tier Lists — ចំណាត់ថ្នាក់ hero តាម Meta បច្ចុប្បន្ន",
              "🛡️ Item Builds — Build ណែនាំសម្រាប់ hero នីមួយៗ",
              "📖 Guides ផ្សេងៗទៀត — Characters, Weapons, Pets, Maps, Emblems",
            ],
            bodyEn: [
              "🎯 Sensitivity Calculator — Get accurate sensitivity values for your device",
              "🏆 Tier Lists — Hero rankings by current meta",
              "🛡️ Item Builds — Recommended builds for every hero",
              "📖 More guides — Characters, Weapons, Pets, Maps, Emblems",
            ],
          },
          {
            headingKm: "គោលការណ៍របស់យើង",
            headingEn: "Our Principles",
            bodyKm: [
              "យើងជឿថាព័ត៌មានល្អគួរតែឥតគិតថ្លៃ និងអាចចូលមើលបានសម្រាប់គ្រប់គ្នា។ ដូច្នេះគេហទំព័រនេះមានផ្ទាំងពាណិជ្ជកម្មដើម្បីទ្រទ្រង់ការចំណាយ។",
              "យើងមិនលក់ទិន្នន័យរបស់អ្នកទេ។ យើងគោរពភាពឯកជនរបស់អ្នកជាអាទិភាពខ្ពស់បំផុត។",
            ],
            bodyEn: [
              "We believe quality information should be free and accessible to everyone. That's why this site displays ads to support our costs.",
              "We do not sell your data. We respect your privacy as a top priority.",
            ],
          },
        ]}
      />
    </>
  );
}