import React, { useState } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { EnvelopeIcon } from "../icons/EnvelopeIcon";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

const navLinks = [
  { id: "projects", name: "Projets" },
  { id: "skills", name: "Compétences" },
  { id: "experiences", name: "Expériences" },
  { id: "contact", name: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (id: string) => {
    const headerElement = document.querySelector("header");
    const targetElement = document.getElementById(id);
    
    if (targetElement && headerElement) {
      const navbarHeight = headerElement.offsetHeight;
      console.log(navbarHeight);

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex">
      <ul className="hidden md:block md:flex md:justify-center md:items-center gap-6 text-xl mr-6">
        {navLinks &&
          navLinks.map((link) => (
            <li key={link.id} className="cursor-pointer hover:text-gray-900">
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.id);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
      </ul>

      <ul className="flex gap-2 md:gap-4 py-2 md:mr-4">
        <li>
          <Link href="https://github.com/SAURETMathieu" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={24} className="md:hover:text-gray-900" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/mathieu-sauret" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={24} className="md:hover:text-gray-900" />
          </Link>
        </li>
        <li>
          <EnvelopeIcon
            size={24}
            className="cursor-pointer md:hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              handleClick("contact");
            }}
          />
        </li>
        <li className="pl-2 md:hidden">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
      </ul>

      {isOpen && (
        <ul className="fixed left-0 top-[61px] text-foreground bg-secondary flex flex-col justify-center pb-12 items-center gap-8 text-3xl h-screen w-screen z-99">
          {navLinks &&
            navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.id);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
