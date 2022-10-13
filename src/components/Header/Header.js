import TitleH1 from "./TitleH1";
import Description from "./Description";
import TitleH2 from "./TitleH2";
import Scroller from "./Scroller";

const Header = () => {
  return (
    <header>
      <TitleH1 text="Développeur créatif" />
      <Description text="Passionné des technologies du web. J'aime travailler à l'intersection de la créativité et des interfaces conviviales. Je crée des exprérences web mémorables." />
      <TitleH2 text="Brice Fedou" />
      <Scroller />
    </header>
  );
};

export default Header;
