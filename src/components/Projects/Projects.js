import { useState } from "react";
import Number from "../Number";
import Label from "../Label";
import { dataProjects } from "../../data/home/projects";
import Project from "./Project";

const Projects = () => {
  const [projects] = useState(dataProjects);

  return (
    <section id="projects" className="projects">
      <Number value="2" />
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
      <Label name="Mes projects" section="projects" />
    </section>
  );
};

export default Projects;
