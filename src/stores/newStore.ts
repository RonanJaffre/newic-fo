import type { Article } from "@/types";
import { atom } from "nanostores";

export const news = atom<Article[]>([]);

export function setNews(values:Article[]) {
  news.set(values);
}
