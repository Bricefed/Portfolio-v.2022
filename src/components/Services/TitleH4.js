import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const TitleH4 = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const letter = Array.from(title);

  //SPAWN ANIMATION
  const container = {
    hidden: { opacity: visible ? 0 : 1 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.05, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    visible: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
      <motion.h4 variants={container} initial="hidden" animate="visible">
        {letter.map((text, k) => (
          <motion.span key={k} variants={child}>
            {text}
          </motion.span>
        ))}
      </motion.h4>
    </>
  );
};

export default TitleH4;
