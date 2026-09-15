// src/components/MoodSetter.tsx
"use client";
import { useEffect } from "react";

export function MoodSetter({ mood }: { mood: "cosmic" | "ff" | "mlbb" }) {
  useEffect(() => {
    const prev = document.documentElement.dataset.mood;
    document.documentElement.dataset.mood = mood;
    return () => {
      document.documentElement.dataset.mood = prev ?? "cosmic";
    };
  }, [mood]);
  return null;
}