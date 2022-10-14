import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Item from "./Item";

const Navigation = () => {
  const [visible, setVisible] = useState(false);

  //HOVER LINK
  useEffect(() => {
    const link = document.querySelectorAll("a.navLink");

    link.forEach((link) => {
      link.addEventListener("mousemove", (e) => {
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

  //SPAWN ANIMATION
  const container = {
    hidden: {
      opacity: visible ? 1 : 0,
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

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} />
      <motion.nav variants={container} initial="hidden" animate="visible">
        <Logo anim={child} />
        <ul className="links">
          <Item anim={child} link="#services" name="Services" />
          <Item anim={child} link="#projects" name="Projets" />
          <Item anim={child} link="#contact" name="Contact" />
        </ul>
      </motion.nav>
    </>
  );
};

export default Navigation;
