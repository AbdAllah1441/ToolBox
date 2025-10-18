"use client";
import Link from "next/link";
// import {getTranslations} from 'next-intl/server'; // in case of async component
import { useTranslations } from "next-intl"; // in case of sync component
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocaleStore } from "@/stores/useLocaleStore";
import { ThemeToggler } from "@/components/ThemeToggler";

const Hero: React.FC = () => {
  // const t = await getTranslations('HomePage'); // in case of async component
  const t = useTranslations("Home");
  const { locale } = useLocaleStore();
  return (
    <div
      className={`pt-40 flex flex-col gap-4 min-h-screen items-center justify-start text-center px-4 bg-background text-foreground `}
    >
      <div className="flex gap-4 flex-col">
        <LanguageSwitcher />
        <ThemeToggler />
      </div>
      <p>{locale === "ar" ? "العربية" : "English"}</p>

      <Link
        href="/"
        className="px-6 py-2 border-2 rounded-lg font-medium hover:scale-105 transition"
      >
        {t("Hello")}
      </Link>
    </div>
  );
};

export default Hero;
