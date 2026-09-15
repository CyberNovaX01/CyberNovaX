export type Lang = 'km' | 'en';
export interface Guide {
  id: string;
  title: string;
  content: string;
  isLatestPatch: boolean;
  patchVersion?: string;
  playStyle?: string;
  fingerLayout?: string;
  heroName?: string;
  items?: string[];
}
export interface Hero {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}
export interface ApiError {
  code: string;
  message: string;
  status: number;
}
export interface FFSelection {
  brand: string;
  model: string;
  variant: string;
  playStyle: string;
  fingerLayout: string;
}
