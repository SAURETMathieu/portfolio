import { default as Link } from "next/link";
import { useState } from "react";
import { EnvelopeIcon } from "../icons/EnvelopeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import BurgerMenu from "./BurgerMenu";

const navLinks = [
  { id: "profil", name: "Accueil", ariaLabel: "Lien vers le profil"},
  { id: "projects", name: "Projets", ariaLabel: "Lien vers les projets"},
  { id: "skills", name: "Compétences", ariaLabel: "Lien vers les compétences"},
  { id: "experiences", name: "Expériences", ariaLabel: "Lien vers les expériences"},
  { id: "contact", name: "Contact", ariaLabel: "Lien vers le formulaire de contact"},
];

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (id: string) => {
    const headerElement = document.querySelector("header");
    const targetElement = document.getElementById(id);

    if (targetElement && headerElement) {
      const navbarHeight = headerElement.offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex">
      <ul className="hidden md:block md:flex md:justify-center md:items-center md:gap-4 gap-6 text-lg mr-6 md:max-lg:border-l md:max-lg:border-white pl-3">
        <li key="profil" className="cursor-pointer hover:text-gray-900">
          <a
            href={`#profil`}
            aria-label={"Lien vers le profil"}
            onClick={(e) => {
              e.preventDefault();
              handleClick("profil");
            }}
          >
            <HomeIcon
              size={24}
              className="cursor-pointer hover:text-gray-900"
            />
          </a>
        </li>
        {navLinks &&
          navLinks.map((link) => {
            if (link.id !== "profil") {
              return (
                <li
                  key={link.id}
                  className="cursor-pointer hover:text-gray-900"
                >
                  <a
                    href={`#${link.id}`}
                    aria-label={link.ariaLabel}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.id);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            }
          })}
      </ul>

      <ul className="flex gap-2 md:gap-4 py-2 md:mr-4">
        <li>
          <Link
            href="https://github.com/SAURETMathieu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers mon github"
          >
            <GithubIcon size={24} className="md:hover:text-gray-900" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/mathieu-sauret"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers mon linkedin"
          >
            <LinkedinIcon size={24} className="md:hover:text-gray-900" />
          </Link>
        </li>
        <li>
          <EnvelopeIcon
            size={24}
            className="cursor-pointer md:hover:text-gray-900"
            aria-label="Lien vers le formulaire de contact"
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
                  aria-label={link.ariaLabel}
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
