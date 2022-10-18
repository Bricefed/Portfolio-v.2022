import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const TitleH2 = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const letter = Array.from(text);

  const container = {
    hidden: { opacity: !visible ? 1 : 0 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.08, delay: 0.5, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: !visible ? 0 : 1,
      y: !visible ? 20 : 0,
    },
    visible: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };
  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} />
      <motion.h2 variants={container} initial="hidden" animate="visible">
        <div>
          {letter.map(
            (text, k) =>
              k <= 5 && (
                <motion.span key={k} variants={child}>
                  {text}
                </motion.span>
              )
          )}
        </div>
        <div>
          {letter.map(
            (text, k) =>
              k > 5 && (
                <motion.span key={k} variants={child}>
                  {text}
                </motion.span>
              )
          )}
        </div>
      </motion.h2>
    </>
  );
};

export default TitleH2;
