import { useState } from "react";
import Number from "./Number";
import SectionProject from "./SectionProject";
import Label from "./Label";
import { dataProjects } from "../data/homeProjects";

const Projects = () => {
  const [projects] = useState(dataProjects);

  return (
    <section className="projects">
      <Number value="2" />
      {projects.map((project) => {
        return (
          <SectionProject
            key={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
          />
        );
      })}
      <Label name="Mes projects" />
    </section>
  );
};

export default Projects;
