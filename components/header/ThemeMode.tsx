import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { LoadIcon } from "../icons/LoadIcon";

function ThemeMode() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <LoadIcon size={24}/>;

  if (resolvedTheme === "dark") {
    return (
      <MoonIcon
        size={24}
        className=""
        aria-label="Passer en mode clair"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <SunIcon
        size={24}
        className=""
        aria-label="Passer en mode sombre"
        onClick={() => setTheme("dark")}
      />
    );
  }
}

export default ThemeMode;
