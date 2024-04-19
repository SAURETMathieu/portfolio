"use client";

import Image from "next/image";
import React from "react";
import { MoonIcon } from "../icons/MoonIcon";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex p-2 fixed w-full text-xs items-center bg-primary justify-between border-b-[1px] border-current background-current">
      <section className="flex">
        <div className="flex p-1 border-current border-[1px] rounded-3xl">
          <div className="flex p-2 gap-2">
            <Image
              src="/images/french_flag.png"
              alt="Drapeau Français"
              width={18}
              height={18}
            />
            <span>FR</span>
          </div>
          <div className="flex p-2 gap-2">
            <Image
              src="/images/english_flag.png"
              alt="Drapeau Anglais"
              width={18}
              height={18}
            />
            <span>EN</span>
          </div>
        </div>
        <div className="p-2">
          <MoonIcon size={24} className="text-foreground" />
        </div>
      </section>
      <Navbar />
    </header>
  );
}

export default Header;
