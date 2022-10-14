import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

//IMG
import Social from "./Social";
import Linkedin from "./img/linkedin.svg";
import Github from "./img/github.svg";
import Instagram from "./img/instagram.svg";
import Malt from "./img/malt.svg";

const Socials = ({ anim }) => {
  const [visible, setVisible] = useState(false);

  const container = {
    hidden: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.15, delay: 0.3, when: "beforeChildren" },
    },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.15, delay: 0.3, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 30,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 30,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="20px" />
      <motion.div
        className="container-social"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Social
          img={Linkedin}
          title={"Linkedin"}
          link={"https://www.linkedin.com/in/brice-fedou-928b89190/"}
          anim={child}
        />
        <Social
          img={Github}
          title={"Github"}
          link={"https://github.com/Bricefed"}
          anim={child}
        />
        <Social
          img={Instagram}
          title={"Instagram"}
          link={"https://www.instagram.com/codeur369/"}
          anim={child}
        />
        <Social
          img={Malt}
          title={"Malt"}
          link={"https://www.malt.fr/profile/bricefedou?overview=true"}
          anim={child}
        />
      </motion.div>
    </>
  );
};

export default Socials;
