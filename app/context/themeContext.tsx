// "use client";

// import React, { useState, createContext, useEffect } from "react";

// type ThemeContext = { isDarkMode: boolean; toggleTheme: () => void };

// export const DarkModeContext = createContext<ThemeContext>({
//   isDarkMode: true,
//   toggleTheme: () => {},
// });

// export const ThemeProvider = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   useEffect(() => {
//     const storedMode = localStorage.getItem("theme");
//     setIsDarkMode(storedMode === "true");
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", isDarkMode.toString());
//   }, [isDarkMode]);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleTheme }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
