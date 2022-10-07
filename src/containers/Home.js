import Header from "../components/Header/Header";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Services />
      <Projects />
    </>
  );
};

export default Home;
