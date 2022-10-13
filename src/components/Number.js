import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Number = ({ value }) => {
  const [visible, setVisible] = useState(false);

  const container = {
    hidden: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -250,
    },
    visible: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -250,
    },
  };

  return (
    <motion.h3 variants={container} initial="hidden" animate="visible">
      {value}
      <img src={"./icons/triangle.png"} alt="Triangle" className="triangle" />
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
    </motion.h3>
  );
};

export default Number;
