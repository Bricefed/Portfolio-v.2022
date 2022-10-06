import React, { useEffect } from "react";

const Scroller = () => {
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
  }, []);

  return (
    <div className="scroller">
      <div className="circle">
        <div className="arrow">↓</div>
        <div className="text">
          <p>Scroll-pour-explorer •</p>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
