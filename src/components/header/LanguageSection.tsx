"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "../../navigation";
import { BritishFlagIcon } from "../icons/BritishFlagIcon";
import { FrenchFlagIcon } from "../icons/FrenchFlagIcon";
import ThemeMode from "./ThemeMode";

function LanguageSection() {
  const locale = useLocale();
  const [language, setLanguage] = useState(locale);
  const t = useTranslations("ThemeSwitcher");
  const router = useRouter();

  const handleLanguage = (newLanguage: string) => {
    router.replace(`/`, { locale: newLanguage });
    setLanguage(newLanguage);
  };

  return (
    <section className="flex">
      <div className="flex p-1 border-current border-[1px] rounded-3xl gap-1">
        <button
          onClick={() => handleLanguage("fr")}
          aria-label={t("ariaFrench")}
          className={`${
            language === "fr" ? "bg-white text-black" : ""
          } flex p-2 justify-center items-center gap-1 cursor-pointer hover:text-white hover:bg-black/50 rounded-2xl`}
        >
          <FrenchFlagIcon width={22} height={18} />
          <span>FR</span>
        </button>
        <button
          onClick={() => handleLanguage("en")}
          aria-label={t("ariaEnglish")}
          className={`${
            language === "en" ? "bg-white text-black" : ""
          } flex p-2 justify-center items-center gap-1 cursor-pointer hover:text-white hover:bg-black/50 rounded-2xl`}
        >
          <BritishFlagIcon width={22} height={18} />
          <span>EN</span>
        </button>
      </div>
      <button className="p-2 " aria-label={t("ariaLabel")} title={t("ariaLabel")}>
        <ThemeMode />
      </button>
    </section>
  );
}

export default LanguageSection;
