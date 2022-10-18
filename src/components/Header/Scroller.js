import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { motion } from "framer-motion";

const Scroller = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const text = document.querySelector(".scroller .text p");
    text.innerHTML = text.innerText
      .split("")
      .map((char, k) => {
        return `
        <span style="transform: rotate(${k * 8.6}deg)" 
        key=${k}>${char}</span>
        `;
      })
      .join("");
  }, [visible]);

  const container = {
    hidden: { scale: !visible ? 0 : 1 },
    visible: {
      scale: visible ? 1 : 0,
      transition: { delay: 2.3 },
    },
  };

  return (
    <>
      <Waypoint onEnter={() => setVisible(true)} />
      <motion.div
        className="scroller"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="circle">
          <div className="arrow">↓</div>
          <div className="text">
            <p>Scroll-pour-explorer •</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Scroller;
