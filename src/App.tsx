import { useEffect } from "react";

import "./App.css";
import { addSiteView } from "./Private/AddView";

import Header from "./Components/UI/Header/Header";
import Landing from "./Components/Sections/Landing/Landing";
import Projects from "./Components/Sections/Projects/Projects";
import Timeline from "./Components/Sections/Timeline/Timeline";
import About from "./Components/Sections/AboutMe/About";

function App() {
  useEffect(() => {
    addSiteView();
  }, []);

  return (
    <div className="page-control">
      <Header />
      <Landing />
      <Timeline />
      <Projects />
      <About />
    </div>
  );
}

export default App;
