import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Number = ({ value }) => {
  const [visible, setVisible] = useState(false);

  const container = {
    hidden: {
      opacity: !visible ? 0 : 1,
      x: !visible ? -250 : 0,
    },
    visible: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -250,
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
      <motion.h3 variants={container} initial="hidden" animate="visible">
        {value}
        <img src={"./icons/triangle.png"} alt="Triangle" className="triangle" />
      </motion.h3>
    </>
  );
};

export default Number;
