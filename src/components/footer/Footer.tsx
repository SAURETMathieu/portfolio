import { useTranslations } from "next-intl";
import { NextjsIcon } from "../icons/NextjsIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import LinkCard from "../main/LinkCard";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full flex flex-col justify-center items-center gap-2 p-10 bg-accent text-current">
      <LinkCard/>
      <p>© 2024 Mathieu SAURET </p>
      <p className="mb-4">{t("text1")}</p>
      <p>{t("text2")}</p>
      <div className="flex justify-center">
        <span className="font-bold text-xs bg-primary/20 border border-accent p-1 rounded inline-flex items-center gap-2 m-1 mt-2">
          React
          <ReactIcon size={16} className="inline" />
        </span>
        <span className="font-bold text-xs bg-primary/20 border border-accent p-1 rounded inline-flex items-center gap-2 m-1 mt-2">
          Tailwind
          <TailwindIcon size={16} className="inline" />
        </span>
        <span className="font-bold text-xs bg-primary/20 border border-accent p-1 rounded inline-flex items-center gap-2 m-1 mt-2">
          Next.js
          <NextjsIcon size={16} className="inline" />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
