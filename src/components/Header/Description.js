import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Description = ({ text }) => {
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  const container = {
    hidden: { opacity: visible ? 0 : 1 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.03, delay: 1, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: visible ? 1 : 0,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    visible: {
      opacity: visible ? 1 : 0,
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
