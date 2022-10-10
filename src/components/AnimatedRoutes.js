import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";
import Project from "../containers/Project";
import { dataProjects } from "../data/home/projects";

const AnimatedRoutes = () => {
  const [data] = useState(dataProjects);

  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project/:title" element={<Project data={data} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AnimatedRoutes;
