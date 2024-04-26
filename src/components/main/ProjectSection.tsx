import { projectsCards } from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-fit max-w-screen-xl text-center my-32 mx-auto"
    >
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
