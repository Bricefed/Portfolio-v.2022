import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Texts = ({ first, second }) => {
  const [visible, setVisible] = useState(false);

  const container = {
    hidden: { opacity: visible ? 1 : 0 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    hidden: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -50,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    visible: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -50,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
      <motion.div
        className="texts"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={child}>{first}</motion.p>
        <motion.p variants={child}>{second}</motion.p>
      </motion.div>
    </>
  );
};

export default Texts;
