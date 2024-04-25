import React from "react";
import SkillCard from "./SkillCard";

function SkillSection() {
  const skillsCards = [
    {
      title: "Front-End",
      skills: [
        { id: 4, name: "React" },
        { id: 9, name: "Typescript" },
        { id: 10, name: "HTML" },
        { id: 8, name: "Tailwind" },
        { id: 7, name: "Bulma" },
        { id: 11, name: "Vanilla CSS" },
        { id: 6, name: "Vite" },
        { id: 5, name: "Next.js" },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { id: 11, name: "Vanilla JS" },
        { id: 12, name: "Node.js" },
        { id: 15, name: "Express" },
        { id: 13, name: "PostgreSQL" },
        { id: 14, name: "Sequelize" },
        { id: 17, name: "PHP" },
        { id: 18, name: "API Rest" },
        { id: 19, name: "POO" },
      ],
    },
    {
      title: "Outils",
      skills: [
        { id: 10, name: "VSC" },
        { id: 11, name: "Git" },
        { id: 12, name: "Github" },
        { id: 13, name: "Scrum" },
        { id: 14, name: "Trello" },
        { id: 15, name: "IA" },
        { id: 16, name: "Coda" },
        { id: 17, name: "Whimsical" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { id: 10, name: "Collaboration" },
        { id: 11, name: "Autodidacte" },
        { id: 12, name: "Polyvalent" },
        { id: 13, name: "Sérieux" },
        { id: 14, name: "Logique" },
        { id: 15, name: "Ingénieux" },
        { id: 16, name: "Perfectionniste" },
        { id: 17, name: "Curieux" },
      ],
    },
  ];

  return (
    <section id="skills" className="w-fit max-w-screen-xl text-center my-32 mx-auto">
      <h3 className="text-3xl font-bold lg:text-4xl mb-6">COMPÉTENCES</h3>
      <div className="grid place-items-center gap-8 xl:gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {skillsCards.map((card) => (
          <SkillCard key={card.title} title={card.title} skills={card.skills} />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
