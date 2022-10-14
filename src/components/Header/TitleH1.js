import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const TitleH1 = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const letter = Array.from(text);

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

  const triangle = {
    hidden: { scale: visible ? 1 : 0 },
    visible: {
      scale: visible ? 1 : 0,
      transition: { delay: 0.8 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} />
      <motion.h1 variants={container} initial="hidden" animate="visible">
        {letter.map((text, k) => (
          <motion.span key={k} variants={child}>
            {text}
          </motion.span>
        ))}
        <motion.img
          src={"./icons/triangle.png"}
          alt="Triangle"
          className="triangle"
          variants={triangle}
        />
      </motion.h1>
    </>
  );
};

export default TitleH1;
