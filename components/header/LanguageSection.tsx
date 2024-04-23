"use client";

import Image from "next/image";
import React from "react";
import ThemeMode from "./ThemeMode";

function LanguageSection() {
  return (
    <section className="flex">
        <div className="flex p-1 border-current border-[1px] rounded-3xl">
          <div className="flex p-2 gap-2 cursor-pointer hover:text-gray-900">
            <Image
              src="/images/french_flag.png"
              alt="Drapeau Français"
              width={22}
              height={18}
            />
            <span>FR</span>
          </div>
          <div className="flex p-2 gap-2 cursor-pointer md:hover:text-gray-900">
            <Image
              src="/images/english_flag.png"
              alt="Drapeau Anglais"
              width={22}
              height={18}
            />
            <span>EN</span>
          </div>
        </div>
        <div className="p-2 cursor-pointer md:hover:text-gray-900">
          <ThemeMode />
        </div>
      </section>
  );
}

export default LanguageSection;
