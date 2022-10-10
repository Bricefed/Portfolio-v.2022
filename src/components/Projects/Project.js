import { Link } from "react-router-dom";

const SectionProject = ({ data }) => {
  return (
    <div className="container-project">
      <div className="texts">
        <h5>{data.title}</h5>
        <p className="description">{data.description}</p>
      </div>
      <div className="img-box see-more">
        <Link to={`/project/${data.title}`} className="hovered">
          <img
            src={`./imgs/projects/${data.img}`}
            alt={`Projet ${data.title}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default SectionProject;
