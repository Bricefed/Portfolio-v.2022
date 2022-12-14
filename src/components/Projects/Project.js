import TitleH5 from "./TitleH5";
import ImgProject from "./ImgProject";
import Description from "./Description";
import Languages from "./Languages";
import Divider from "./Divider";

const SectionProject = ({ data }) => {
  return (
    <div className="container-project">
      <div className="content">
        <TitleH5 title={data.title} />
        <Description description={data.description} />
        <Divider />
        <Languages languages={data.languages} />
      </div>
      <ImgProject img={data.img} title={data.title} link={data.link} />
    </div>
  );
};

export default SectionProject;
