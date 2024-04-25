import React from "react";
import ExperienceCard from "./ExperienceCard";

function ExperienceSection() {

  const experiencesCards = [
    {
      title: "Formation O'clock",
      description: `Formation de 6 mois en développement web fullstack. Titre professionnel Niveau 5`,
      imageSrc: "/images/oclock.png",
      startAt:"09/2023",
      finishAt:"02/2024",
      tags: [
        { id: 1, name: "Node.js" },
        { id: 3, name: "Express" },
        { id: 4, name: "React" },
        { id: 6, name: "Vite" },
        { id: 7, name: "Bulma" },
        { id: 8, name: "PostgreSQL" },
      ],
    },
    {
      title: "Joueur semi-pro",
      description: `Joueur semi-pro sur plusieurs jeux vidéos (League of Legends, Call of Duty, Town Star, Dofus, Casino).`,
      imageSrc: "/images/gamer.jpeg",
      startAt:"2017",
      finishAt:"2024",
      tags: [
        { id: 1, name: "Ingénieux" },
        { id: 3, name: "Collaboration" },
        { id: 4, name: "Logique" },
        { id: 5, name: "Autodidacte" },
      ],
    },
    {
      title: "Équipier Macdonald",
      description: `Travail en équipe, gestion du personnel, du temps, du stress, des priorités, des clients. Optimisation, rapidité, efficacité.`,
      imageSrc: "/images/macdo.jpeg",
      startAt:"2013",
      finishAt:"2024",
      tags: [
        { id: 1, name: "Sérieux" },
        { id: 2, name: "Polyvalent" },
        { id: 3, name: "Collaboration" },
        { id: 4, name: "Perfectionniste" },
      ],
    },
    {
      title: "Licence Informatique",
      description: `Licence Mathématiques & Informatique à l'Université de Reims, spécialité Informatique.`,
      imageSrc: "/images/reims.jpeg",
      startAt:"2014",
      finishAt:"2017",
      tags: [
        { id: 1, name: "PHP" },
        { id: 3, name: "HTML" },
        { id: 4, name: "Vanilla CSS" },
        { id: 6, name: "C" },
        { id: 7, name: "C++" },
        { id: 8, name: "Java" },
        { id: 9, name: "MySQL" },
      ],
    },
  ]

  return (
    <section id="experiences" className="w-fit max-w-screen-xl text-center my-32 mx-auto">
      <h3 className="text-3xl lg:text-4xl font-bold mb-6">EXPÉRIENCES / FORMATIONS</h3>
      <div className="grid place-items-center gap-8 xl:gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {experiencesCards.map((experience) => (
          <ExperienceCard
            key={experience.title}
            title={experience.title}
            description={experience.description}
            imageSrc={experience.imageSrc}
            tags={experience.tags}
            start={experience.startAt}
            end={experience.finishAt}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
