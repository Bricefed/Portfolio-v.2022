import React from "react";
import Number from "./Number";
import SectionProject from "./SectionProject";
import Label from "./Label";

const Projects = () => {
  return (
    <section className="projects">
      <Number value="2" />
      <SectionProject
        title="Castelbox"
        description="loremipsum dolor"
        img="castelbox.jpg"
      />
      <SectionProject
        title="Plantex"
        description="loremipsum dolor"
        img="plantex.jpg"
      />
      <SectionProject
        title="Portfolio"
        description="loremipsum dolor"
        img="portfolio.jpg"
      />
      <Label name="Mes projects" />
    </section>
  );
};

export default Projects;
