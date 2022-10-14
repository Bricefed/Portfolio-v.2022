import { useContext, useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Email = ({ value }) => {
  const [visible, setVisible] = useState(false);
  const { copyText } = useContext(CursorContext);
  const letter = Array.from(value);

  const email = {
    hidden: { opacity: visible ? 1 : 0 },
    visible: {
      opacity: visible ? 1 : 0,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child = {
    hidden: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
    visible: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset="150px" />
      <CopyToClipboard text={value}>
        <motion.div
          className="email"
          onClick={copyText}
          variants={email}
          initial="hidden"
          animate="visible"
        >
          {letter.map((text, k) => (
            <motion.span key={k} variants={child}>
              {text}
            </motion.span>
          ))}
        </motion.div>
      </CopyToClipboard>
    </>
  );
};

export default Email;
