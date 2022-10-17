import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Label = ({ name, section }) => {
  const [visible, setVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: {
      opacity: !visible ? 0 : 1,
      x: !visible ? -50 : 0,
    },
    visible: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : -50,
      y: offsetY * 0.3,
      transition: { when: "beforeChildren" },
    },
  };

  return (
    <motion.h6
      variants={container}
      initial="hidden"
      animate="visible"
      className={section}
    >
      {name}
      <span></span>
      <Waypoint
        onEnter={() => setVisible(true)}
        onLeave={() => setVisible(false)}
        topOffset="250px"
      />
    </motion.h6>
  );
};

export default Label;
