import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    });

    document.querySelectorAll(".see-more").forEach((img) => {
      img.addEventListener("mouseenter", () => {
        cursor.classList.add("hover-img");
      });
      img.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover-img");
      });
    });
  }, []);

  return (
    <span id="cursor">
      <span className="see-more">Voir plus</span>
      <span className="copy">Copier</span>
    </span>
  );
};

export default Cursor;
