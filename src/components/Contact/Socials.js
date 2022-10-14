import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";
import { dataSocials } from "../../data/contact/socials";
import Social from "./Social";

const Socials = () => {
  const [visible, setVisible] = useState(false);
  const [socials] = useState(dataSocials);

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
        {socials.map((social) => (
          <Social
            img={social.img}
            title={social.title}
            link={social.link}
            anim={child}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Socials;
