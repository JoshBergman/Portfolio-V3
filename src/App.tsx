import { useEffect } from "react";
import "./App.css";
import { addSiteView } from "./Private/AddView";

function App() {
  useEffect(() => {
    addSiteView();
  }, []);

  return <div className="page-control">App</div>;
}

export default App;
