"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useLocaleStore } from "@/stores/useLocaleStore";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleStore();
  const router = useRouter();

  useEffect(() => {
    // Get the current locale from cookies on client side
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const locale = getCookie("locale") as "en" | "ar" | null;
    if (locale === "en" || locale === "ar") {
      setLocale(locale);
      // Set document direction based on locale
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = locale;
    }
  }, []);

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";

    // Set cookie for the new locale
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year

    // Set document direction immediately
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;

    // Update state
    setLocale(newLocale);

    // Refresh the page to apply the new locale
    router.refresh();
  };

  return (
    <button
      onClick={switchLanguage}
      className="cursor-pointer px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
      title={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
    >
      {locale === "en" ? "Switch to Arabic" : "تبديل إلى الإنجليزية"}
    </button>
  );
}
