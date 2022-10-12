import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const TitleH1 = ({ text }) => {
  const [move, setMove] = useState(false);
  const letter = Array.from(text);

  const container = {
    hidden: {
      opacity: move ? 0 : 1,
    },
    visible: {
      opacity: move ? 1 : 0,
      transition: { staggerChildren: 0.02, delay: 0.3, when: "beforeChildren" },
    },
  };

  const child = {
    hidden: {
      opacity: move ? 1 : 0,
      y: move ? 0 : 20,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    visible: {
      opacity: move ? 1 : 0,
      y: move ? 0 : 20,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const triangle = {
    hidden: { scale: move ? 0 : 1 },
    visible: { scale: move ? 1 : 0 },
  };

  return (
    <motion.h1 variants={container} initial="hidden" animate="visible">
      <Waypoint
        onEnter={() => setMove(!move)}
        onLeave={() => setMove(!move)}
        bottomOffset="150px"
      />
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
  );
};

export default TitleH1;
