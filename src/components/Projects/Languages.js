import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Languages = ({ languages }) => {
  const [visible, setVisible] = useState(false);

  //SPAWN ANIMATION
  const container = {
    hidden: { opacity: !visible ? 0 : 1 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.05, delay: 0.2, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: !visible ? 0 : 1,
      x: !visible ? -50 : 0,
    },
    visible: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -50,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
      <motion.div
        className="container-languages"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {languages.map((lang, k) => (
          <motion.span className="language" key={k} variants={child}>
            <span>⇨</span> {lang}
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default Languages;
