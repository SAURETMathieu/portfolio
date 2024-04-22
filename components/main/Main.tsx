"use client";

import React from 'react';
import ProfilSection from "./ProfilSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";

function Main() {
  return (
    <main className="bg-secondary h-fit p-4 pt-20 border-current text-current">
      <ProfilSection />
      <ProjectSection />
      <SkillSection />
    </main>
  );
}

export default Main;
