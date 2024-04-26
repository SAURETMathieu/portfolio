import React from "react";
import SkillCard from "./SkillCard";
import { skillsCards } from "../../data/skills.json";

function SkillSection() {

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
