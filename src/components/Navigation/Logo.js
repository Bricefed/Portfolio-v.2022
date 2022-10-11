import LogoBF from "./imgs/logo.svg";
import { motion } from "framer-motion";

const Logo = ({ anim }) => {
  return (
    <motion.a href="#home" variants={anim}>
      <img src={LogoBF} alt="Logo siteweb" className="logo" />
    </motion.a>
  );
};

export default Logo;
