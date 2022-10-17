import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Description = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  const container = {
    hidden: { opacity: !visible ? 1 : 0 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.035, delay: 1, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: !visible ? 0 : 1,
      x: !visible ? -20 : 0,
      y: !visible ? -10 : 0,
    },
    visible: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -20,
      y: visible ? 0 : -10,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} />
      <motion.p
        className="description"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((text, k) => (
          <motion.span key={k} variants={child}>
            {text}{" "}
          </motion.span>
        ))}
      </motion.p>
    </>
  );
};

export default Description;
