import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {

  const projectsCards = [
    {
      title: "O'DD",
      description: `Application de gestion d'élevage de dragodinde (monture) pour le jeu Dofus Rétro.
      Réalisé en solo dans le but de m'entraîner sur l'ensemble des notions acquises durant ma formation.`,
      imageSrc: "/images/odd.webp",
      tags: [
        { id: 1, name: "Vanilla JS" },
        { id: 2, name: "HTML" },
        { id: 3, name: "Vanilla CSS" },
        { id: 4, name: "EJS" },
        { id: 5, name: "Node.js" },
        { id: 6, name: "PostgreSQL" },
      ],
      links: [
        { id: 1, name: "Website", url: "https://odd-dofus.up.railway.app/", icon: "Website" },
        { id: 2, name: "Front/Back", url:"https://github.com/SAURETMathieu/dofus-elevage", icon:"Github" },
      ],
    },
    {
      title: "KING HIFI",
      description: `Application pour un véritable groupe de musique (crew) de Sound system Dub.
      Projet de fin de formation réalisé en groupe de 4, méthode agile, Scrum.`,
      imageSrc: "/images/kinghifi.webp",
      tags: [
        { id: 7, name: "React" },
        { id: 8, name: "Node.js" },
        { id: 9, name: "Bulma" },
        { id: 10, name: "Vite" },
        { id: 11, name: "PostgreSQL" },
      ],
      links: [
        { id: 3, name: "Website", url: "https://pureniceness-front-6a800c130dfe.herokuapp.com/", icon: "Website" },
        { id: 4, name: "Front", url:"https://github.com/SAURETMathieu/kinghifi-front", icon:"Github" },
        { id: 5, name: "Back", url:"https://github.com/SAURETMathieu/kinghifi-back", icon:"Github" },
      ],
    },
    {
      title: "Documentation",
      description: "Documentation personnelle qui rassemble mes réalisations et mes connaissances, fournissant une référence utile pour mes futurs projets et renforcer mon développement professionnel.",
      imageSrc: "/images/documentation.png",
      tags: [
        { id: 12, name: "React" },
        { id: 13, name: "Docusaurus" },
        { id: 14, name: "Vite" },
        { id: 15, name: "Markdown" },
      ],
      links: [
        { id: 6, name: "Website", url: "https://sauretmathieu.github.io/documentation/", icon: "Website" },
        { id: 7, name: "Front/Back", url:"https://github.com/SAURETMathieu/documentation", icon:"Github" },
      ],
    },
    {
      title: "Portfolio",
      description: "Site vitrine personnel, présentant mes compétences, mes projets et mes réalisations.",
      imageSrc: "/images/portfolio.png",
      tags: [
        { id: 16, name: "React" },
        { id: 17, name: "Next.js" },
        { id: 18, name: "Tailwind" },
        { id: 19, name: "Typescript" },
      ],
      links: [
        { id: 6, name: "Website", url: "https://sauretmathieu.github.io/portfolio/", icon: "Website" },
        { id: 7, name: "Front/Back", url:"https://github.com/SAURETMathieu/portfolio", icon:"Github" },
      ],
    },
  ]

  return (
    <section id="projects" className="w-fit max-w-screen-xl text-center my-32 mx-auto">
      <h3 className="text-3xl lg:text-4xl font-bold mb-6">PROJETS</h3>
      <div className="grid place-items-center gap-8 xl:gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {projectsCards.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            tags={project.tags}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
