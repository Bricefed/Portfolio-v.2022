import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const TitleH5 = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const letter = Array.from(title);

  const container = {
    hidden: { opacity: !visible ? 1 : 0 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.05, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: !visible ? 0 : 1,
      y: !visible ? 50 : 0,
    },
    visible: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 50,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="30%" />
      <motion.h5 variants={container} initial="hidden" animate="visible">
        {letter.map((text, k) => (
          <motion.span key={k} variants={child}>
            {text}
          </motion.span>
        ))}
      </motion.h5>
    </>
  );
};

export default TitleH5;
