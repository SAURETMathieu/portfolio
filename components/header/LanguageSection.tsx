"use client";

import { BritishFlagIcon } from "../icons/BritishFlagIcon";
import { FrenchFlagIcon } from "../icons/FrenchFlagIcon";
import ThemeMode from "./ThemeMode";

function LanguageSection() {
  return (
    <section className="flex">
      <div className="flex p-1 border-current border-[1px] rounded-3xl">
        <div className="flex p-2 justify-center items-center gap-1 cursor-pointer hover:text-black hover:bg-white hover:rounded-2xl">
          <FrenchFlagIcon width={22} height={18} />
          <span>FR</span>
        </div>
        <div className="flex p-2 justify-center items-center gap-1 cursor-pointer hover:text-black hover:bg-white hover:rounded-2xl">
          <BritishFlagIcon width={22} height={18} />
          <span>EN</span>
        </div>
      </div>
      <div className="p-2 ">
        <ThemeMode/>
      </div>
    </section>
  );
}

export default LanguageSection;
