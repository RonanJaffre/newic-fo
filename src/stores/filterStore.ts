import type { Article } from "@/types";
import { atom } from "nanostores";

export interface Filter {
  type: "ALL" | "NEW" | "FOLDER";
}
export const filter = atom<Filter>({
  type: "ALL",
});

export function setFilter(value: Filter) {
  filter.set({
    ...filter.get(),
    ...value,
  });
}

export function resetFilter() {
  filter.set({
    type: "ALL",
  });
}
