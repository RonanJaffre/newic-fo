import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { filterKey } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFilterParams(
  searchParams: URLSearchParams
): Record<string, string> {
  let params: Record<string, string> = {};
  Object.values(filterKey).forEach((key) => {
    const value = searchParams.get(key);
    if (value != null) {
      params = {
        ...params,
        [key]: value,
      };
    }
  });
  return params;
}
