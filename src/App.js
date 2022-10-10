import Home from "./containers/Home";
import CursorContextProvider from "./context/CursorContext";

const App = () => {
  return (
    <CursorContextProvider>
      <Home />
    </CursorContextProvider>
  );
};

export default App;
