import React from "react";
import { EnvelopeIcon } from "../icons/EnvelopeIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import Link from "next/link";

const links = [
  {
    id:1,
    href: "https://github.com/SAURETMathieu",
    icon: <GithubIcon size={24} />,
    ariaLabel: "Lien vers mon profil Github",
  },
  {
    id:2,
    href: "https://www.linkedin.com/in/mathieu-sauret",
    icon: <LinkedinIcon size={24} />,
    ariaLabel: "Lien vers mon profil LinkedIn",
  },
  {
    id:3,
    href: "mailto:mathieu08800@hotmail.fr",
    icon: <EnvelopeIcon size={24} />,
    ariaLabel: "Ouvrir votre client mail pour m'envoyer un message",
  },
]

function LinkCard() {
  return (
    <div className="flex justify-center gap-4 pb-2">
      {links.map((link) => (
        <Link
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hover:text-gray-500 hover:cursor-pointer bg-primary/20 h-10 w-10 p-2 rounded ring-2 hover:animate-shake"
          aria-label={link.ariaLabel}
          key={link.id}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

export default LinkCard;
