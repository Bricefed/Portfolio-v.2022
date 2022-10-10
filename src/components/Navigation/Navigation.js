import { useEffect } from "react";
import Cursor from "../Cursor";
import Logo from "./imgs/logo.svg";

const Navigation = () => {
  useEffect(() => {
    const link = document.querySelectorAll("a.navLink");

    link.forEach((link) => {
      link.addEventListener("mousemove", (e) => {
        const pos = link.getBoundingClientRect();
        const y = e.pageY - pos.top - pos.width / 2;
        const x = e.pageX - pos.left - pos.width / 2;

        link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      link.addEventListener("mouseout", () => {
        link.style.transform = `translate(0, 0)`;
      });
    });
  }, []);

  return (
    <>
      <Cursor />
      <nav>
        <a href="#home">
          <img src={Logo} alt="Logo siteweb" className="logo" />
        </a>
        <ul className="links">
          <li>
            <a href="#projects" className="navLink">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="navLink">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
