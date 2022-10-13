import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";
import Cursor from "../Cursor";
import Logo from "./Logo";
import Item from "./Item";

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  const container = {
    hidden: {
      opacity: visible ? 0 : 1,
      transition: { staggerChildren: 0.15 },
    },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.15 },
    },
  };
  const child = {
    hidden: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : -30,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : -30,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  useEffect(() => {
    const link = document.querySelectorAll("a.navLink");

    link.forEach((link) => {
      link.addEventListener("mousevisible", (e) => {
        const pos = link.getBoundingClientRect();
        const y = e.pageY - pos.top - pos.width / 2;
        const x = e.pageX - pos.left - pos.width / 2;

        link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      link.addEventListener("mouseout", () => {
        link.style.transform = `translate(0, 0)`;
      });
    });
  }, []);

  return (
    <>
      <Cursor />
      <motion.nav variants={container} initial="hidden" animate="visible">
        <Logo anim={child} />
        <ul className="links">
          <Item anim={child} link="#projects" name="Projets" />
          <Item anim={child} link="#contact" name="Contact" />
        </ul>
      </motion.nav>
      <Waypoint onEnter={() => setVisible(true)} topOffset="50px" />
    </>
  );
};

export default Navigation;
