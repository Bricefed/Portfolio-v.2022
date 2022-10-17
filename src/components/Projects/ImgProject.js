import { useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const ImgProject = ({ img, title, link }) => {
  const [visible, setVisible] = useState(false);

  const imgProject = {
    hidden: {
      opacity: !visible ? 1 : 0,
      x: !visible ? 250 : 0,
    },
    visible: {
      opacity: visible ? 1 : 0,
      x: visible ? 0 : 250,
      transition: { type: "spring", damping: 30, stiffness: 150 },
    },
  };
  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="30%" />
      <motion.div
        className="img-box see-more"
        variants={imgProject}
        initial="hidden"
        animate="visible"
      >
        <a href={link} className="hovered" target="_blank" rel="noreferrer">
          <img src={`./imgs/${img}`} alt={`Projet ${title}`} />
        </a>
      </motion.div>
    </>
  );
};

export default ImgProject;
