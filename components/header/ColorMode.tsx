import React from "react";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import {useTheme } from "next-themes";

function ColorMode() {

  const { theme, setTheme } = useTheme();

  localStorage.getItem("theme")

  React.useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    setTheme(storedMode === "dark" ? "dark" : "light");
  }
  , []);

  return (
    <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
      {theme === "dark" ? (
        <MoonIcon
          size={24}
          className=""
          aria-label="Passer en mode clair"
        />
      ) : (
        <SunIcon
          size={24}
          className=""
          aria-label="Passer en mode sombre"
        />
      )}
    </button>
  );
}

export default ColorMode;
