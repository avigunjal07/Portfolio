import { BrowserRouter } from "react-router-dom";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx"

function App() {
  return (
    <BrowserRouter>
      <Home />
      <About />
    </BrowserRouter>
  );
}

export default App;