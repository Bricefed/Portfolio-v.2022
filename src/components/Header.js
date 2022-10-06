import React from "react";
import Scroller from "./Scroller";

const Header = () => {
  return (
    <header>
      <h1>
        Développeur créatif
        <img src={"./icons/triangle.png"} alt="Triangle" className="triangle" />
      </h1>
      <p className="description">
        Passionné des technologies du web. J'aime travailler à l'intersection de
        la créativité et des interfaces conviviales. Je crée des exprérences web
        mémorables.
      </p>
      <h2>
        Brice Fedou <img src={"./imgs/pict-user.jpg"} alt="Brice Fedou" />
      </h2>
      <Scroller />
    </header>
  );
};

export default Header;
