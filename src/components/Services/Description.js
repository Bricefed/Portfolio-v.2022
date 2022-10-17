import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Description = ({ description }) => {
  const [visible, setVisible] = useState(false);
  const words = description.split(" ");

  //SPAWN ANIMATION
  const container = {
    hidden: { opacity: visible ? 0 : 1 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: {
        staggerChildren: 0.025,
        when: "beforeChildren",
        delay: 0.5,
      },
    },
  };

  const child = {
    hidden: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -20,
      y: visible ? 0 : -10,
      transition: { type: "spring", damping: 20, stiffness: 100 },
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
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
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
