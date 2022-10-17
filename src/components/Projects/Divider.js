import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Divider = () => {
  const [visible, setVisible] = useState(false);

  const container = {
    hidden: { width: !visible ? "100%" : 0 },
    visible: {
      width: visible ? "100%" : 0,
      transition: { duration: 1 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="30%" />
      <motion.div
        className="divider"
        variants={container}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </>
  );
};

export default Divider;
