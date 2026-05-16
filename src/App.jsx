import { BrowserRouter } from "react-router-dom";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx"
import Skills from "./sections/Skills.jsx"
import Education from "./sections/Education.jsx";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <About />
      <Skills />
      <Education />
    </BrowserRouter>
  );
}

export default App;