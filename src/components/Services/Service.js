import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Service = ({ title, description }) => {
  const [visible, setVisible] = useState(false);
  const letter = Array.from(title);

  const container = {
    hidden: {
      opacity: visible ? 0 : 1,
    },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.07, when: "beforeChildren" },
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
    <motion.div variants={container} initial="hidden" animate="visible">
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
      <motion.h4>
        {letter.map((text, k) => (
          <motion.span key={k} variants={child}>
            {text}
          </motion.span>
        ))}
      </motion.h4>
      <motion.p className="description" variants={child}>
        {description}
      </motion.p>
    </motion.div>
  );
};

export default Service;
