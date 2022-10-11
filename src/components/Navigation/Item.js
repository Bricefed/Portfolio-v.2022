import { motion } from "framer-motion";

const Item = ({ anim, link, name }) => {
  return (
    <motion.li variants={anim}>
      <a href={link} className="navLink">
        {name}
      </a>
    </motion.li>
  );
};

export default Item;
