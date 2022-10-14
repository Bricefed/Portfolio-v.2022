import TitleH5 from "./TitleH5";
import ImgProject from "./ImgProject";

const SectionProject = ({ data }) => {
  return (
    <div className="container-project">
      <TitleH5 title={data.title} />
      <ImgProject img={data.img} title={data.title} link={data.link} />
    </div>
  );
};

export default SectionProject;
