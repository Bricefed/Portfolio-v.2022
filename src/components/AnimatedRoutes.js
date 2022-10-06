import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";

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
