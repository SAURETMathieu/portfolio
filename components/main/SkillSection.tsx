import React from "react";
import SkillCard from "./SkillCard";

function SkillSection() {

  const skillsCards = [
    {
      title: "Front-End",
      skills: [
        { id: 4, name: "React" },
        { id: 5, name: "Next.js" },
        { id: 6, name: "Vite" },
        { id: 7, name: "Bulma" },
        { id: 8, name: "Tailwind" },
        { id: 9, name: "Typescript" },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { id: 10, name: "HTML" },
        { id: 11, name: "Vanilla JS" },
        { id: 12, name: "Node.js" },
        { id: 13, name: "PostgreSQL" },
        { id: 14, name: "Sequelize" },
        { id: 15, name: "Express" },
      ],
    },
    {
      title: "Outils",
      skills: [
        { id: 10, name: "HTML" },
        { id: 11, name: "Vanilla JS" },
        { id: 12, name: "Node.js" },
        { id: 13, name: "PostgreSQL" },
        { id: 14, name: "Sequelize" },
        { id: 15, name: "Express" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { id: 10, name: "HTML" },
        { id: 11, name: "Vanilla JS" },
        { id: 12, name: "Node.js" },
        { id: 13, name: "PostgreSQL" },
        { id: 14, name: "Sequelize" },
        { id: 15, name: "Express" },
      ],
    },
  ]

  return (
    <section className="w-full flex-col text-center mt-8 mb-4 mx-auto">
      <h3 className="text-3xl font-bold mb-6">COMPÉTENCES</h3>
      <div className="w-full flex flex-wrap justify-center items-center p-1 gap-4">
      {skillsCards.map((card) => (
          <SkillCard
            key={card.title}
            title={card.title}
            skills={card.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
