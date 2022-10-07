import React from "react";

const SectionProject = ({ title, description, img }) => {
  return (
    <div className="container-project">
      <div className="texts">
        <h5>{title}</h5>
        <p className="description">{description}</p>
      </div>
      <div className="img-box">
        <img src={`./imgs/projects/${img}`} alt="Projet plantex" />
      </div>
    </div>
  );
};

export default SectionProject;
