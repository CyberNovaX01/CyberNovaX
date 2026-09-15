// src/lib/prefs.ts
"use client";
import { useSyncExternalStore } from "react";

type Entry = { slug: string; title: string; game: string; at?: number };
const EVT = "gg-prefs";

const read = <T,>(k: string, f: T): T => {
  try {
    const raw = localStorage.getItem(k);
    return raw ? (JSON.parse(raw) as T) : f;
  } catch {
    return f;
  }
};

const write = (k: string, v: unknown) => {
  localStorage.setItem(k, JSON.stringify(v));
  dispatchEvent(new Event(EVT));
};

const sub = (cb: () => void) => {
  addEventListener(EVT, cb);
  return () => removeEventListener(EVT, cb);
};

export function useFavorites() {
  const list = useSyncExternalStore(
    sub,
    () => read<Entry[]>("gg-favs", []),
    () => [] as Entry[]
  );
  const toggle = (e: Entry) => {
    const cur = read<Entry[]>("gg-favs", []);
    const next = cur.some((x) => x.slug === e.slug)
      ? cur.filter((x) => x.slug !== e.slug)
      : [{ ...e, at: Date.now() }, ...cur].slice(0, 100);
    write("gg-favs", next);
  };
  return { favs: list, has: (s: string) => list.some((x) => x.slug === s), toggle };
}

export function useHistory() {
  const list = useSyncExternalStore(
    sub,
    () => read<Entry[]>("gg-hist", []),
    () => [] as Entry[]
  );
  const push = (e: Entry) => {
    const cur = read<Entry[]>("gg-hist", []).filter((x) => x.slug !== e.slug);
    write("gg-hist", [{ ...e, at: Date.now() }, ...cur].slice(0, 6));
  };
  return {
    recent: list.map((r) => ({ slug: r.slug, title: r.title, game: r.game })),
    push,
  };
}