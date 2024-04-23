import React, { useState } from "react";
import Image from "next/image";
import { UploadIcon } from "../icons/UploadIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { NodejsIcon } from "../icons/NodejsIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { EnvelopeIcon } from "../icons/EnvelopeIcon";
import Link from "next/link";

function ProfilSection() {
  return (
    <section className="w-full flex-col text-center max-w-3xl mx-auto">
      <div className="flex items-center justify-center rounded-full mx-auto mb-4 ring-4 w-44 h-44 overflow-hidden">
        <Image
          src="/images/me.jpeg"
          alt="Photo de Mathieu SAURET"
          width={180}
          height={180}
        />
      </div>
      <div className="flex justify-center gap-4 pb-2">
        <Link
          href="https://github.com/SAURETMathieu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon
            size={18}
            className="md:hover:text-gray-500 hover:cursor-pointer bg-accent/80 h-10 w-10 p-2 rounded ring-2"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mathieu-sauret"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon
            size={18}
            className="md:hover:text-gray-500 hover:cursor-pointer bg-accent/80 h-10 w-10 p-2 rounded ring-2"
          />
        </Link>
        <Link
          href="mailto:mathieu08800@hotmail.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EnvelopeIcon
            size={18}
            className="md:hover:text-gray-500 hover:cursor-pointer bg-accent/80 h-10 w-10 p-2 rounded ring-2"
          />
        </Link>
      </div>
      <h1 className="font-bold text-3xl">SAURET Mathieu</h1>
      <h2 className="font-thin text-xl">Développeur web full stack</h2>
      <div className="flex items-center justify-center mb-1">
        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
        <div className="text-basic text-green-600">Ouvert aux opportunités</div>
      </div>
      <div className="text-sm font-light mb-2">
        Nice(06) - full remote possible
      </div>
      <button
        aria-label="Télécharger le CV"
        className="hover:opacity-80 hover:scale-105 transition-colors rounded-full ring-2 bg-primary max-w-52 w-1/2 mt-4 mb-2 p-2 gap-2 mx-auto flex items-center justify-center text-white"
      >
        <UploadIcon width={18} height={18} />
        Mon CV
      </button>
      <p className="p-2 text-basic">
        Ancien joueur semi-professionnel de jeux vidéo reconverti en développeur
        web full stack.<br></br>
        Spécialisé en{" "}
        <span className="font-bold text-xs bg-accent/50 border border-accent p-1 rounded inline-flex items-center gap-2 m-1 mt-2">
          <ReactIcon size={16} className="inline" />
          React
        </span>{" "}
        et
        <span className="font-bold text-xs bg-accent/50 border border-accent p-1 rounded inline-flex items-center gap-2 m-1 mt-2">
          <NodejsIcon size={16} className="inline" />
          Node.js
        </span>
        .
      </p>
    </section>
  );
}

export default ProfilSection;
