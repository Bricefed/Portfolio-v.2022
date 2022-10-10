import { useContext, useEffect } from "react";
import { CursorContext } from "../context/CursorContext";

const Cursor = () => {
  const { text } = useContext(CursorContext);

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    });

    //IMG
    document.querySelectorAll(".see-more").forEach((img) => {
      img.addEventListener("mouseenter", () => {
        cursor.classList.add("hover-img");
      });
      img.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover-img");
      });
    });

    //EMAIL
    document.querySelector(".email").addEventListener("mouseenter", () => {
      cursor.classList.add("hover-copy");
    });
    document.querySelector(".email").addEventListener("mouseleave", () => {
      cursor.classList.remove("hover-copy");
    });
  }, []);

  return (
    <span id="cursor">
      <span className="see-more">Voir</span>
      <span className="copy">{text}</span>
    </span>
  );
};

export default Cursor;
