import { useState } from "react";
import Number from "../Number";
import Project from "./Project";
import Label from "../Label";
import { dataProjects } from "../../data/home/projects";

const Projects = () => {
  const [projects] = useState(dataProjects);

  return (
    <section className="projects">
      <Number value="2" />
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
      <Label name="Mes projects" />
    </section>
  );
};

export default Projects;
