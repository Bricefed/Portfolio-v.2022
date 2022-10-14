import TitleH5 from "./TitleH5";
import ImgProject from "./ImgProject";
import Description from "./Description";

const SectionProject = ({ data }) => {
  return (
    <div className="container-project">
      <div className="content">
        <TitleH5 title={data.title} />
        <Description description={data.description} />
      </div>
      <ImgProject img={data.img} title={data.title} link={data.link} />
    </div>
  );
};

export default SectionProject;
