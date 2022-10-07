import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="links">
        <li>
          <Link to={"/"}>
            <img src={"./logo.svg"} alt="Logo siteweb" className="logo" />
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
          <img src={"./icons/moon.png"} alt="Dark mode" className="moon" />
          {/* <img src={"./icons/sun.png"} alt="Dark mode" className="sun" /> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
