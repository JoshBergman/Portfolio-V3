import { useEffect } from "react";

import "./App.css";
import { addSiteView } from "./Private/AddView";
import Header from "./Components/UI/Header/Header";
import Landing from "./Components/Sections/Landing/Landing";

function App() {
  useEffect(() => {
    addSiteView();
  }, []);

  return (
    <div className="page-control">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
