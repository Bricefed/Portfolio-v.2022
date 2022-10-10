import { Link } from "react-router-dom";
import Cursor from "../Cursor";
import Logo from "./imgs/logo.svg";
import Moon from "./imgs/moon.png";
// import Sun from "./imgs/sun.png";

const Navigation = () => {
  return (
    <>
      <Cursor />
      <nav>
        <ul className="links">
          <li>
            <Link to={"/"}>
              <img src={Logo} alt="Logo siteweb" className="logo" />
            </Link>
          </li>
          <li>
            <Link to={"/projects"}>Projets</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <ul className="options">
          <li className="lang">En</li>
          <li>
            <img src={Moon} alt="Dark mode" className="moon" />
            {/* <img src={Sun} alt="Light mode" className="sun" /> */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
