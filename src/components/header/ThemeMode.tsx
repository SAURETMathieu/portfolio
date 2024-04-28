import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LoadIcon } from "../icons/LoadIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

function ThemeMode() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("ThemeSwitcher");

  useEffect(() => setMounted(true), []);

  if (!mounted) return <LoadIcon size={24} />;

  if (resolvedTheme === "dark") {
    return (
      <MoonIcon
        size={24}
        className="cursor-pointer md:hover:text-gray-900"
        aria-label={t("ariaLight")}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <SunIcon
        size={24}
        className="cursor-pointer md:hover:text-gray-900"
        aria-label={t("ariaDark")}
        onClick={() => setTheme("dark")}
      />
    );
  }
}

export default ThemeMode;
