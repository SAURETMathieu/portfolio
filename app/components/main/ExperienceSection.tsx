import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiencesCards } from "../../data/experiences.json";
import config from "../../../next.config.mjs";

function ExperienceSection() {

  return (
    <section id="experiences" className="w-fit max-w-screen-xl text-center my-32 mx-auto">
      <h3 className="text-3xl lg:text-4xl font-bold mb-6">EXPÉRIENCES / FORMATIONS</h3>
      <div className="grid place-items-center gap-8 xl:gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {experiencesCards.map((experience) => (
          <ExperienceCard
            key={experience.title}
            title={experience.title}
            description={experience.description}
            imageSrc={config.basePath + experience.imageSrc}
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
