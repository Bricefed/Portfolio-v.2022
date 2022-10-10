import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

const Project = ({ data }) => {
  const { title } = useParams();

  return (
    <>
      <Navigation />
      {data
        .filter((item) => item.title === title)
        .map((item) => (
          <div className="single-project" key={item.id}>
            <p className="description">{item.fullDescription}</p>
          </div>
        ))}
    </>
  );
};

export default Project;
