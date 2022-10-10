const SectionProject = ({ data }) => {
  return (
    <div className="container-project">
      <div className="texts">
        <h5>{data.title}</h5>
      </div>
      <div className="img-box see-more">
        <a href="www.google.com" className="hovered">
          <img
            src={`./imgs/projects/${data.img}`}
            alt={`Projet ${data.title}`}
          />
        </a>
      </div>
    </div>
  );
};

export default SectionProject;
