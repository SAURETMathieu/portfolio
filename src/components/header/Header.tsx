"use client";

import React from "react";
import Navbar from "./Navbar";
import LanguageSection from "./LanguageSection";


function Header() {
  return (
    <header className="flex p-2 fixed w-full text-xs items-center bg-primary justify-between border-b-[1px] border-current text-white">
      <LanguageSection />
      <Navbar />
    </header>
  );
}

export default Header;
