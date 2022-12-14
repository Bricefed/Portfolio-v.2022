import { useState } from "react";
import { dataProjects } from "../../data/projects/projects";
import Number from "../Texts/Number";
import Project from "./Project";
import Label from "../Texts/Label";

const Projects = () => {
  const [projects] = useState(dataProjects);

  return (
    <section id="projects">
      <Number value="2" />
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
      <Label name="Mes projects" section="projects" />
    </section>
  );
};

export default Projects;
