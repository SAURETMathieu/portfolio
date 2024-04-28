import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ThemeProvider } from "../../context/themeContext";
import "./globals.css";
import { NextIntlClientProvider, useMessages} from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SAURET Mathieu Full Stack Developer",
  description: "Portfolio - SAURET Mathieu",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {

  const messages = useMessages();

  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <body className={cn(GeistSans.variable, inter, "font-sans h-full")}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
