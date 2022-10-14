import CursorContextProvider from "./context/CursorContext";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Loader from "./components/Loader";

const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <CursorContextProvider>
        <Cursor />
        <Navigation />
        <Header />
        <Services />
        <Projects />
        <Contact />
      </CursorContextProvider>
    </>
  );
};

export default App;
