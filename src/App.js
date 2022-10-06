import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./containers/AnimatedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
