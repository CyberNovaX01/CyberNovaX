import axios, { AxiosError } from 'axios';
import type { Guide, Hero, ApiError } from './types';
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api/v1',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});
function normalizeError(err: unknown): ApiError {
  const e = err as AxiosError<{ code?: string; message?: string }>;
  if (!e.response) {
    return { code: 'NETWORK_ERROR', message: 'Cannot reach server', status: 0 };
  }
  const status = e.response.status;
  const code = e.response.data?.code || `HTTP_${status}`;
  const message =
    code === 'DB_UNAVAILABLE'
      ? 'Database temporarily unavailable. Please retry.'
      : e.response.data?.message || 'Something went wrong';
  return { code, message, status };
}
export async function getFFGuides(params: {
  brand?: string;
  model?: string;
  variant?: string;
  playStyle?: string;
  fingerLayout?: string;
}): Promise<Guide[]> {
  try {
    const { data } = await api.get('/ff/guides', { params });
    return Array.isArray(data) ? data : data.data || [];
  } catch (err) {
    throw normalizeError(err);
  }
}
export async function searchMLBBHeroes(q: string): Promise<Hero[]> {
  try {
    const { data } = await api.get('/mlbb/heroes', { params: { q } });
    return Array.isArray(data) ? data : data.data || [];
  } catch (err) {
    throw normalizeError(err);
  }
}
export async function getMLBBHeroGuide(heroId: string): Promise<Guide> {
  try {
    const { data } = await api.get(`/mlbb/heroes/${heroId}/guide`);
    return data;
  } catch (err) {
    throw normalizeError(err);
  }
}
