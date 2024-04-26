import Image from "next/image";
import { NodejsIcon } from "../icons/NodejsIcon";
import { ReactIcon } from "../icons/ReactIcon";
import DownloadButton from "./DownloadButton";
import LinkCard from "./LinkCard";

function ProfilSection() {
  return (
    <section
      id="profil"
      className="w-full flex-col text-center max-w-3xl mb-36 lg:mt-12 xl:mt-20 mx-auto"
    >
      <div className="flex items-center justify-center rounded-full mx-auto my-6 ring-4 size-48 overflow-hidden">
        <Image
          src={"/images/me.webp"}
          alt="Photo de Mathieu SAURET"
          width={250}
          height={250}
        />
      </div>
      <LinkCard />
      <h1 className="font-bold text-3xl lg:text-5xl mt-2">SAURET Mathieu</h1>
      <h2 className="font-thin text-xl lg:text-2xl">
        Développeur web full stack
      </h2>
      <div className="flex items-center justify-center mb-1">
        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
        <div className="text-basic lg:text-xl text-green-600">
          Ouvert aux opportunités
        </div>
      </div>
      <div className="text-sm lg:text-basic font-light mb-2">
        Nice(06) - full remote possible
      </div>
      <DownloadButton />
      <p className="p-2 text-basic lg:text-xl">
        Ancien joueur semi-professionnel de jeux vidéo reconverti en développeur
        web full stack.<br></br>
        Spécialisé en{" "}
        <span className="font-bold text-xs lg:text-basic bg-primary/20 border border-accent p-1 rounded inline-flex items-center gap-2 m-1 mt-2">
          <ReactIcon size={16} className="inline" />
          React
        </span>{" "}
        et
        <span className="font-bold text-xs lg:text-basic bg-primary/20 border border-accent p-1 rounded inline-flex items-center gap-2 m-1 mt-2">
          <NodejsIcon size={16} className="inline" />
          Node.js
        </span>
        .
      </p>
    </section>
  );
}

export default ProfilSection;