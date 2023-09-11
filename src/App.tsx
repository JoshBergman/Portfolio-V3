import { useEffect } from "react";

import "./App.css";
import { addSiteView } from "./Private/AddView";

import Header from "./Components/UI/Header/Header";
import Landing from "./Components/Sections/Landing/Landing";
import Projects from "./Components/Sections/Projects/Projects";
import About from "./Components/Sections/AboutMe/About";
import Contact from "./Components/Sections/Contact/Contact";
import Repos from "./Components/Sections/Repos/Repos";

function App() {
  useEffect(() => {
    addSiteView();
  }, []);

  return (
    <div className="page-control">
      <Header />
      <Landing />
      <Repos />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
