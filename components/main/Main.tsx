"use client";

import React from 'react';
import ProfilSection from "./ProfilSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import ExperienceSection from "./ExperienceSection";

function Main() {
  return (
    <main className="bg-secondary h-fit p-4 pt-20 border-current text-current">
      <ProfilSection />
      <ProjectSection />
      <SkillSection />
      <ExperienceSection />
    </main>
  );
}

export default Main;
