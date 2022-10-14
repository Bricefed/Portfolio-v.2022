import { motion } from "framer-motion";

const Social = ({ title, img, link, anim }) => {
  return (
    <motion.div className="social" variants={anim}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={title} />
        <p>{title}</p>
      </a>
    </motion.div>
  );
};

export default Social;
