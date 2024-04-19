import React, { useState } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { EnvelopeIcon } from "../icons/EnvelopeIcon";
import { BurgerIcon } from "../icons/BurgerIcon";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex">
      <ul className="flex gap-2 py-2">
        <li>
          <EnvelopeIcon size={24} className="" />
        </li>
        <li>
          <Link href="https://github.com/SAURETMathieu">
            <GithubIcon size={24} className="" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/mathieu-sauret">
            <LinkedinIcon size={24} className="" />
          </Link>
        </li>
        <li className="pl-2">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
      </ul>
      {isOpen && (
        <ul className="fixed left-0 top-[61px] opacity-80 bg-primary flex flex-col justify-center items-center gap-2 text-2xl h-screen w-screen z-99">
          <li>Projets</li>
          <li>Compétences</li>
          <li>Expériences</li>
          <li>Contact</li>
          <li>...</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
