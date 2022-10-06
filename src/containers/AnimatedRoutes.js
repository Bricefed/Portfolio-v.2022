import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/project/:id" element={<Project />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AnimatedRoutes;
