import { create } from "zustand";

type Locale = "en" | "ar";

interface LocaleStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const useLocaleStore = create<LocaleStore>((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),
}));
