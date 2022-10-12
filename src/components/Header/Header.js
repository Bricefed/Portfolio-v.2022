import Scroller from "./Scroller";
import TitleH1 from "./TitleH1";

const Header = () => {
  return (
    <header>
      <TitleH1 text="Développeur créatif" />
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
